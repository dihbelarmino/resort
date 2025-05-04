import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Schema for client validation
const clienteSchema = z.object({
  nome: z.string().min(3),
  cpf: z.string().min(11).max(14),
  email: z.string().email().optional().nullable(),
  telefone: z.string().min(10).optional().nullable(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const idParam = searchParams.get("id");
    
    // If specific client ID requested
    if (idParam) {
      const id = parseInt(idParam);
      if (isNaN(id)) {
        return NextResponse.json(
          { error: "ID de cliente inválido" },
          { status: 400 }
        );
      }
      
      const cliente = await prisma.cliente.findUnique({
        where: { id },
        include: {
          quartos: {
            include: {
              quarto: true,
            },
            orderBy: {
              checkin: 'desc',
            },
          },
        },
      });
      
      if (!cliente) {
        return NextResponse.json(
          { error: "Cliente não encontrado" },
          { status: 404 }
        );
      }
      
      return NextResponse.json(cliente);
    }
    
    // List all clients with optional search
    let where = {};
    if (search) {
      where = {
        OR: [
          { nome: { contains: search } },
          { email: { contains: search } },
          { cpf: { contains: search } },
          { telefone: { contains: search } },
        ],
      };
    }
    
    const clientes = await prisma.cliente.findMany({
      where,
      orderBy: {
        nome: 'asc',
      },
    });
    
    return NextResponse.json(clientes);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    return NextResponse.json(
      { error: "Erro ao buscar os clientes" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validation = clienteSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: validation.error.format() },
        { status: 400 }
      );
    }
    
    // Check if CPF already exists
    const existingCliente = await prisma.cliente.findUnique({
      where: { cpf: body.cpf },
    });
    
    if (existingCliente) {
      return NextResponse.json(
        { error: "CPF já cadastrado" },
        { status: 409 }
      );
    }
    
    // Create new client
    const novoCliente = await prisma.cliente.create({
      data: {
        nome: body.nome,
        cpf: body.cpf,
        email: body.email || null,
        telefone: body.telefone || null,
      },
    });
    
    return NextResponse.json(novoCliente, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    return NextResponse.json(
      { error: "Erro ao criar o cliente" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const idParam = searchParams.get("id");
    
    if (!idParam) {
      return NextResponse.json(
        { error: "ID do cliente é obrigatório" },
        { status: 400 }
      );
    }
    
    const id = parseInt(idParam);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de cliente inválido" },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    
    // Validate request body
    const validation = clienteSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: validation.error.format() },
        { status: 400 }
      );
    }
    
    // Check if client exists
    const cliente = await prisma.cliente.findUnique({
      where: { id },
    });
    
    if (!cliente) {
      return NextResponse.json(
        { error: "Cliente não encontrado" },
        { status: 404 }
      );
    }
    
    // Check if CPF already exists for another client
    if (body.cpf !== cliente.cpf) {
      const existingCliente = await prisma.cliente.findUnique({
        where: { cpf: body.cpf },
      });
      
      if (existingCliente && existingCliente.id !== id) {
        return NextResponse.json(
          { error: "CPF já cadastrado para outro cliente" },
          { status: 409 }
        );
      }
    }
    
    // Update client
    const clienteAtualizado = await prisma.cliente.update({
      where: { id },
      data: {
        nome: body.nome,
        cpf: body.cpf,
        email: body.email || null,
        telefone: body.telefone || null,
      },
    });
    
    return NextResponse.json(clienteAtualizado);
  } catch (error) {
    console.error("Erro ao atualizar cliente:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar o cliente" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const idParam = searchParams.get("id");
    
    if (!idParam) {
      return NextResponse.json(
        { error: "ID do cliente é obrigatório" },
        { status: 400 }
      );
    }
    
    const id = parseInt(idParam);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de cliente inválido" },
        { status: 400 }
      );
    }
    
    // Check if client exists
    const cliente = await prisma.cliente.findUnique({
      where: { id },
    });
    
    if (!cliente) {
      return NextResponse.json(
        { error: "Cliente não encontrado" },
        { status: 404 }
      );
    }
    
    // Check if client has active bookings
    const activeBookings = await prisma.quartoCliente.findFirst({
      where: {
        clienteId: id,
        checkout: {
          gt: new Date(),
        },
      },
    });
    
    if (activeBookings) {
      return NextResponse.json(
        { error: "Cliente possui reservas ativas e não pode ser excluído" },
        { status: 400 }
      );
    }
    
    // Delete client
    await prisma.cliente.delete({
      where: { id },
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao excluir cliente:", error);
    return NextResponse.json(
      { error: "Erro ao excluir o cliente" },
      { status: 500 }
    );
  }
} 