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
    
    const userRole = session.user.role;
    const userId = parseInt(session.user.id);
    
    // Parâmetros de query
    const searchParams = request.nextUrl.searchParams;
    const tipo = searchParams.get("tipo"); // camareira, passadeira, lavanderia
    const status = searchParams.get("status"); // pendente, em_andamento, concluida, avaliada
    
    // Construir a query base
    let query: any = {
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
      },
      orderBy: {
        createdAt: "desc"
      }
    };

    // Condições WHERE
    let whereConditions: any = {};
    
    // Filtrar por tipo
    if (tipo) {
      whereConditions.tipo = tipo;
    }
    
    // Filtrar por status
    if (status) {
      whereConditions.status = status;
    }
    
    // Aplicar filtros baseados no papel do usuário
    if (userRole.startsWith("supervisor_")) {
      // Supervisores veem apenas tarefas de seu departamento
      const tipoSupervisionado = userRole.replace("supervisor_", "");
      whereConditions.tipo = tipoSupervisionado;
    } else if (["camareira", "passadeira", "lavanderia"].includes(userRole)) {
      // Funcionários veem tarefas pendentes de seu setor ou atribuídas a eles
      whereConditions.OR = [
        { 
          AND: [
            { tipo: userRole },
            { status: "pendente" }
          ]
        },
        { responsavelId: userId }
      ];
    }
    
    // Adicionar condições WHERE à query
    query.where = whereConditions;
    
    // Buscar tarefas do banco de dados
    const tarefas = await prisma.tarefa.findMany(query);
    
    // Formatar resposta
    const servicos = tarefas.map(tarefa => {
      // Obter os dados do quarto relacionado
      const quarto = 'quarto' in tarefa ? (tarefa as any).quarto : null;
      
      // Obter dados do responsável
      const responsavel = 'responsavel' in tarefa ? (tarefa as any).responsavel : null;
      
      // Obter dados da avaliação
      const avaliacao = 'avaliacao' in tarefa ? (tarefa as any).avaliacao : null;
      
      // Obter dados do supervisor (se houver avaliação)
      const supervisor = avaliacao && 'supervisor' in avaliacao ? (avaliacao as any).supervisor : null;
      
      return {
        id: tarefa.id,
        tipo: tarefa.tipo,
        roomNumber: quarto ? quarto.numero : 0,
        roomFloor: quarto ? quarto.andar : 0,
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
    });
    
    return NextResponse.json({ 
      success: true, 
      servicos,
      userRole,
      userId
    });
  } catch (error) {
    console.error("Erro ao buscar serviços:", error);
    return NextResponse.json({ 
      success: false, 
      error: `Erro ao buscar serviços: ${error instanceof Error ? error.message : String(error)}` 
    }, { status: 500 });
  }
} 