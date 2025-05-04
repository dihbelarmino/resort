import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Verificar autenticação do usuário
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }
    
    // Parâmetros de query
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get("status");
    const clienteId = searchParams.get("clienteId");
    const quartoId = searchParams.get("quartoId");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    
    // Construir filtros
    const whereClause: any = {};
    
    if (status) {
      whereClause.status = status;
    }
    
    if (clienteId) {
      whereClause.clienteId = parseInt(clienteId);
    }
    
    if (quartoId) {
      whereClause.quartoId = parseInt(quartoId);
    }
    
    if (startDate && endDate) {
      // Buscar reservas que se sobrepõem ao período especificado
      whereClause.OR = [
        {
          // Checkin dentro do período
          checkin: {
            gte: new Date(startDate),
            lte: new Date(endDate)
          }
        },
        {
          // Checkout dentro do período
          checkout: {
            gte: new Date(startDate),
            lte: new Date(endDate)
          }
        },
        {
          // Período dentro da reserva
          AND: [
            {
              checkin: {
                lte: new Date(startDate)
              }
            },
            {
              checkout: {
                gte: new Date(endDate)
              }
            }
          ]
        }
      ];
    }
    
    // Temporariamente usando dados mock enquanto não temos a tabela no banco
    // Em um cenário real, seria:
    // const reservas = await prisma.reserva.findMany({
    //   where: whereClause,
    //   include: {
    //     cliente: true,
    //     quarto: true,
    //   },
    //   orderBy: {
    //     checkin: 'desc'
    //   }
    // });
    
    // Dados mockados para demonstração
    const mockReservas = [
      {
        id: 1,
        clienteId: 1,
        clienteNome: "João Silva",
        quartoId: 101,
        quartoNumero: 101,
        quartoAndar: 1,
        checkin: new Date("2024-06-10"),
        checkout: new Date("2024-06-15"),
        status: "confirmada",
        valorTotal: 1250.00,
        createdAt: new Date("2024-05-20"),
        updatedAt: new Date("2024-05-20")
      },
      {
        id: 2,
        clienteId: 2,
        clienteNome: "Maria Santos",
        quartoId: 205,
        quartoNumero: 205,
        quartoAndar: 2,
        checkin: new Date("2024-06-05"),
        checkout: new Date("2024-06-08"),
        status: "pendente",
        valorTotal: 750.00,
        observacoes: "Cliente solicitou cama extra",
        createdAt: new Date("2024-05-15"),
        updatedAt: new Date("2024-05-15")
      },
      {
        id: 3,
        clienteId: 3,
        clienteNome: "Carlos Oliveira",
        quartoId: 310,
        quartoNumero: 310,
        quartoAndar: 3,
        checkin: new Date("2024-05-25"),
        checkout: new Date("2024-05-30"),
        status: "concluida",
        valorTotal: 1100.00,
        createdAt: new Date("2024-05-10"),
        updatedAt: new Date("2024-05-31")
      }
    ];
    
    // Aplicar filtros nos dados mockados
    let filteredReservas = [...mockReservas];
    
    if (status) {
      filteredReservas = filteredReservas.filter(r => r.status === status);
    }
    
    if (clienteId) {
      filteredReservas = filteredReservas.filter(r => r.clienteId === parseInt(clienteId));
    }
    
    if (quartoId) {
      filteredReservas = filteredReservas.filter(r => r.quartoId === parseInt(quartoId));
    }
    
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      filteredReservas = filteredReservas.filter(r => {
        // Verifica se há sobreposição de datas
        return (
          (r.checkin >= start && r.checkin <= end) || // Check-in dentro do período
          (r.checkout >= start && r.checkout <= end) || // Check-out dentro do período
          (r.checkin <= start && r.checkout >= end) // Período dentro da reserva
        );
      });
    }
    
    return NextResponse.json({ reservas: filteredReservas });
  } catch (error) {
    console.error("Erro ao buscar reservas:", error);
    return NextResponse.json({ error: "Erro ao buscar reservas" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticação do usuário
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }
    
    // Verificar se o usuário tem permissão para criar reservas
    const userRole = session.user.role;
    if (userRole !== "admin" && userRole !== "recepcionista") {
      return NextResponse.json({ error: "Sem permissão para criar reservas" }, { status: 403 });
    }
    
    // Obter dados da requisição
    const data = await request.json();
    
    // Validar dados
    if (!data.clienteId || !data.quartoId || !data.checkin || !data.checkout) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
    }
    
    // Validar datas
    const checkin = new Date(data.checkin);
    const checkout = new Date(data.checkout);
    
    if (checkout <= checkin) {
      return NextResponse.json({ 
        error: "A data de check-out deve ser posterior à data de check-in" 
      }, { status: 400 });
    }
    
    // Verificar disponibilidade do quarto
    // Em um cenário real, seria algo como:
    // const reservasExistentes = await prisma.reserva.findMany({
    //   where: {
    //     quartoId: data.quartoId,
    //     OR: [
    //       {
    //         AND: [
    //           { checkin: { lte: checkin } },
    //           { checkout: { gt: checkin } }
    //         ]
    //       },
    //       {
    //         AND: [
    //           { checkin: { lt: checkout } },
    //           { checkout: { gte: checkout } }
    //         ]
    //       },
    //       {
    //         AND: [
    //           { checkin: { gte: checkin } },
    //           { checkout: { lte: checkout } }
    //         ]
    //       }
    //     ]
    //   }
    // });
    // 
    // if (reservasExistentes.length > 0) {
    //   return NextResponse.json({ 
    //     error: "Quarto não disponível no período selecionado" 
    //   }, { status: 400 });
    // }
    
    // Criar reserva
    // Em um cenário real, seria algo como:
    // const novaReserva = await prisma.reserva.create({
    //   data: {
    //     clienteId: data.clienteId,
    //     quartoId: data.quartoId,
    //     checkin,
    //     checkout,
    //     status: data.status || "pendente",
    //     valorTotal: data.valorTotal || 0,
    //     observacoes: data.observacoes,
    //   }
    // });
    
    // Como é mock, vamos retornar uma reserva simulada
    const novaReserva = {
      id: 999,
      clienteId: data.clienteId,
      quartoId: data.quartoId,
      checkin,
      checkout,
      status: data.status || "pendente",
      valorTotal: data.valorTotal || 0,
      observacoes: data.observacoes,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return NextResponse.json({ reserva: novaReserva });
  } catch (error) {
    console.error("Erro ao criar reserva:", error);
    return NextResponse.json({ error: "Erro ao criar reserva" }, { status: 500 });
  }
} 