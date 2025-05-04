import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET: Listar todos os quartos
export async function GET(request: Request) {
  try {
    // Buscar todos os quartos
    const quartos = await db.quarto.findMany({
      orderBy: [
        { andar: 'asc' },
        { numero: 'asc' }
      ]
    });

    // Para quartos ocupados, buscar informações do cliente atual
    const quartosComClientes = await Promise.all(
      quartos.map(async (quarto) => {
        if (quarto.status === 'ocupado') {
          // Buscar a ocupação ativa para este quarto
          const ocupacaoAtiva = await db.quartoCliente.findFirst({
            where: {
              quartoId: quarto.id,
              checkout: {
                gt: new Date() // Checkout ainda não ocorreu
              }
            },
            orderBy: {
              checkin: 'desc' // Pegar a ocupação mais recente
            },
            include: {
              cliente: true // Incluir dados do cliente
            }
          });

          // Se encontrou ocupação ativa, adicionar nome do cliente ao quarto
          if (ocupacaoAtiva?.cliente) {
            return {
              ...quarto,
              cliente: ocupacaoAtiva.cliente.nome
            };
          }
        }
        return quarto;
      })
    );

    return NextResponse.json(quartosComClientes);
  } catch (error) {
    console.error('Erro ao buscar quartos:', error);
    return NextResponse.json(
      { error: `Erro ao buscar quartos: ${error instanceof Error ? error.message : 'Erro desconhecido'}` },
      { status: 500 }
    );
  }
}

// POST: Criar um novo quarto
export async function POST(request: Request) {
  try {
    // Verificar se o usuário tem permissão de admin
    const session = await getServerSession(authOptions);
    if (session?.user?.role !== 'admin' && session?.user?.permissao !== 'admin') {
      return NextResponse.json(
        { error: 'Acesso negado. Apenas administradores podem criar quartos.' },
        { status: 403 }
      );
    }

    const data = await request.json();
    const { numero, andar, tipo } = data;

    // Validar os dados
    if (!numero || !andar || !tipo) {
      return NextResponse.json(
        { error: 'Dados incompletos. Número, andar e tipo são obrigatórios.' },
        { status: 400 }
      );
    }

    // Verificar se já existe um quarto com este número
    const quartoExistente = await db.quarto.findUnique({
      where: { numero: parseInt(numero) }
    });

    if (quartoExistente) {
      return NextResponse.json(
        { error: `Já existe um quarto com o número ${numero}.` },
        { status: 400 }
      );
    }

    // Criar o quarto
    const novoQuarto = await db.quarto.create({
      data: {
        numero: parseInt(numero),
        andar: parseInt(andar),
        tipo,
        status: 'disponivel'
      }
    });

    return NextResponse.json({
      message: `Quarto ${numero} criado com sucesso.`,
      quarto: novoQuarto
    }, { status: 201 });

  } catch (error) {
    console.error('Erro ao criar quarto:', error);
    return NextResponse.json(
      { error: `Erro ao criar quarto: ${error instanceof Error ? error.message : 'Erro desconhecido'}` },
      { status: 500 }
    );
  }
}

// DELETE: Remover um quarto
export async function DELETE(request: Request) {
  try {
    // Verificar se o usuário tem permissão de admin
    const session = await getServerSession(authOptions);
    if (session?.user?.role !== 'admin' && session?.user?.permissao !== 'admin') {
      return NextResponse.json(
        { error: 'Acesso negado. Apenas administradores podem remover quartos.' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID do quarto não fornecido.' },
        { status: 400 }
      );
    }

    // Verificar se o quarto existe
    const quarto = await db.quarto.findUnique({
      where: { id: parseInt(id) }
    });

    if (!quarto) {
      return NextResponse.json(
        { error: `Quarto ID ${id} não encontrado.` },
        { status: 404 }
      );
    }

    // Verificar se o quarto está ocupado
    if (quarto.status === 'ocupado') {
      return NextResponse.json(
        { error: `Não é possível remover o quarto ${quarto.numero} pois está ocupado.` },
        { status: 400 }
      );
    }

    // Remover o quarto
    await db.quarto.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({
      message: `Quarto ${quarto.numero} removido com sucesso.`
    });

  } catch (error) {
    console.error('Erro ao remover quarto:', error);
    return NextResponse.json(
      { error: `Erro ao remover quarto: ${error instanceof Error ? error.message : 'Erro desconhecido'}` },
      { status: 500 }
    );
  }
} 