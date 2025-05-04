import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// GET específico de um serviço por ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }
    
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }
    
    // Buscar a tarefa no banco de dados com seus relacionamentos
    const tarefa = await prisma.tarefa.findUnique({
      where: { id },
      include: {
        quarto: true,
        responsavel: {
          select: {
            id: true,
            nome: true,
            email: true,
          }
        },
        avaliacao: {
          include: {
            supervisor: {
              select: {
                id: true,
                nome: true,
                email: true,
              }
            }
          }
        }
      }
    });
    
    if (!tarefa) {
      return NextResponse.json({ error: "Serviço não encontrado" }, { status: 404 });
    }
    
    // Obter os dados relacionados
    const quarto = tarefa.quarto;
    const responsavel = tarefa.responsavel;
    const avaliacao = tarefa.avaliacao;
    const supervisor = avaliacao?.supervisor;
    
    // Formatar a resposta
    const servico = {
      id: tarefa.id,
      tipo: tarefa.tipo,
      roomNumber: quarto.numero,
      roomFloor: quarto.andar,
      status: tarefa.status,
      employeeId: tarefa.responsavelId || undefined,
      employeeName: responsavel?.nome || undefined,
      supervisorId: avaliacao?.supervisorId || undefined,
      supervisorName: supervisor?.nome || undefined,
      rating: avaliacao?.nota || undefined,
      createdAt: tarefa.createdAt,
      startedAt: tarefa.inicio || undefined,
      completedAt: tarefa.fim || undefined,
      evaluatedAt: avaliacao?.createdAt || undefined,
      notes: avaliacao?.observacao || tarefa.observacao || undefined,
      priority: tarefa.observacao?.includes("URGENTE") ? "urgente" : "normal"
    };
    
    return NextResponse.json({ success: true, servico });
  } catch (error) {
    console.error("Erro ao buscar serviço:", error);
    return NextResponse.json({ 
      success: false, 
      error: `Erro ao buscar serviço: ${error instanceof Error ? error.message : String(error)}` 
    }, { status: 500 });
  }
}

// PATCH para atualizar o status de um serviço
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }
    
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }
    
    const userId = parseInt(session.user.id);
    const userRole = session.user.role;
    
    // Obter os dados do corpo da requisição
    const body = await request.json();
    const { status, nota, observacao } = body;
    
    // Verificar se o serviço existe
    const tarefa = await prisma.tarefa.findUnique({
      where: { id }
    });
    
    if (!tarefa) {
      return NextResponse.json({ error: "Serviço não encontrado" }, { status: 404 });
    }
    
    // Verificar permissões baseadas no papel e na ação
    if (status === "em_andamento") {
      // Apenas funcionários do tipo correto podem iniciar tarefas
      if (userRole !== tarefa.tipo) {
        return NextResponse.json({ 
          error: "Você não tem permissão para iniciar esta tarefa" 
        }, { status: 403 });
      }
      
      // Atualizar a tarefa para em andamento
      const tarefaAtualizada = await prisma.tarefa.update({
        where: { id },
        data: {
          status: "em_andamento",
          responsavelId: userId,
          inicio: new Date()
        }
      });
      
      return NextResponse.json({ success: true, tarefa: tarefaAtualizada });
    } 
    else if (status === "concluida") {
      // Apenas o responsável pela tarefa pode concluí-la
      if (tarefa.responsavelId !== userId) {
        return NextResponse.json({ 
          error: "Apenas o responsável pela tarefa pode concluí-la" 
        }, { status: 403 });
      }
      
      // Atualizar a tarefa para concluída
      const tarefaAtualizada = await prisma.tarefa.update({
        where: { id },
        data: {
          status: "concluida",
          fim: new Date(),
          observacao: observacao || tarefa.observacao
        }
      });
      
      return NextResponse.json({ success: true, tarefa: tarefaAtualizada });
    }
    else if (status === "avaliada") {
      // Apenas admin ou supervisor da área pode avaliar
      const isSupervisor = userRole.startsWith("supervisor_") && 
                           userRole.replace("supervisor_", "") === tarefa.tipo;
      
      if (userRole !== "admin" && !isSupervisor) {
        return NextResponse.json({ 
          error: "Você não tem permissão para avaliar esta tarefa" 
        }, { status: 403 });
      }
      
      // Verificar se a nota foi fornecida
      if (!nota || nota < 1 || nota > 10) {
        return NextResponse.json({ 
          error: "Nota de avaliação inválida (deve ser de 1 a 10)" 
        }, { status: 400 });
      }
      
      // Verificar se a tarefa já foi avaliada
      const avaliacaoExistente = await prisma.avaliacao.findUnique({
        where: { tarefaId: id }
      });
      
      let avaliacao;
      
      if (avaliacaoExistente) {
        // Atualizar avaliação existente
        avaliacao = await prisma.avaliacao.update({
          where: { id: avaliacaoExistente.id },
          data: {
            nota,
            observacao,
            supervisorId: userId
          }
        });
      } else {
        // Criar nova avaliação
        avaliacao = await prisma.avaliacao.create({
          data: {
            tarefaId: id,
            nota,
            observacao,
            supervisorId: userId
          }
        });
        
        // Atualizar status da tarefa
        await prisma.tarefa.update({
          where: { id },
          data: { status: "avaliada" }
        });
      }
      
      return NextResponse.json({ 
        success: true, 
        avaliacao
      });
    } 
    else {
      return NextResponse.json({ 
        error: "Ação não suportada" 
      }, { status: 400 });
    }
  } catch (error) {
    console.error("Erro ao atualizar serviço:", error);
    return NextResponse.json({ 
      success: false, 
      error: `Erro ao atualizar serviço: ${error instanceof Error ? error.message : String(error)}` 
    }, { status: 500 });
  }
} 