import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function PUT(request, { params }) {
  try {
    const quartoId = parseInt(params.id);
    const data = await request.json();
    const { status, cliente } = data;

    console.log(`Atualizando status do quarto ${quartoId} para ${status}`);

    // Validar o status
    if (!status || !['disponivel', 'ocupado', 'manutencao'].includes(status)) {
      return NextResponse.json(
        { error: "Status inválido. Use 'disponivel', 'ocupado' ou 'manutencao'." },
        { status: 400 }
      );
    }

    // Verificar se o quarto existe
    const quarto = await db.quarto.findUnique({
      where: { id: quartoId }
    });

    if (!quarto) {
      return NextResponse.json(
        { error: `Quarto ID ${quartoId} não encontrado` },
        { status: 404 }
      );
    }

    // Atualizar o status do quarto
    const quartoAtualizado = await db.quarto.update({
      where: { id: quartoId },
      data: { status }
    });

    // Se o status for 'ocupado' e tiver um cliente, atualizar a ocupação
    if (status === 'ocupado' && cliente) {
      // Verificar se já existe um cliente com este nome
      let clienteObj = await db.cliente.findFirst({
        where: { nome: cliente }
      });

      if (!clienteObj) {
        // Criar um cliente novo se não existir
        clienteObj = await db.cliente.create({
          data: {
            nome: cliente,
            cpf: '00000000000' // CPF padrão para demonstração
          }
        });
      }

      // Verificar se já existe uma ocupação ativa
      const ocupacaoExistente = await db.quartoCliente.findFirst({
        where: {
          quartoId: quartoId,
          checkout: {
            gt: new Date() // Checkout ainda não ocorreu
          }
        }
      });

      if (!ocupacaoExistente) {
        // Criar nova ocupação
        const hoje = new Date();
        const amanha = new Date(hoje);
        amanha.setDate(hoje.getDate() + 1);

        await db.quartoCliente.create({
          data: {
            quartoId: quartoId,
            clienteId: clienteObj.id,
            checkin: hoje,
            checkout: amanha
          }
        });
      }
    }

    return NextResponse.json({
      message: `Status do quarto ${quartoId} atualizado para ${status}`,
      quarto: quartoAtualizado
    });
  } catch (error) {
    console.error('Erro ao atualizar status do quarto:', error);
    return NextResponse.json(
      { error: `Erro ao atualizar status: ${error instanceof Error ? error.message : 'Erro desconhecido'}` },
      { status: 500 }
    );
  }
} 