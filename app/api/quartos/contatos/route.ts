import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';

// Interface para o contato
interface Contato {
  id: number;
  nome: string;
  celular: string;
  quartoClienteId: number;
  createdAt: Date;
  updatedAt: Date;
}

// Tradução amigável de erros do Prisma
function traduzirErroPrisma(error: unknown): string {
  // Erros de inicialização
  if (error instanceof PrismaClientInitializationError) {
    return `Erro de inicialização do Prisma: ${error.message}. Verifique a conexão com o banco de dados.`;
  }
  // Erros conhecidos com códigos de erro
  else if (error instanceof PrismaClientKnownRequestError) {
    const code = error.code;
    if (code === 'P2002') {
      return 'O registro já existe (violação de chave única).';
    } else if (code === 'P2025') {
      return 'O registro não foi encontrado.';
    } else if (code === 'P2003') {
      return 'Violação de restrição de chave estrangeira.';
    } else if (code === 'P2018' || code === 'P2019') {
      return 'Erro na conexão com o banco de dados.';
    } else {
      return `Erro do Prisma (${code}): ${error.message}`;
    }
  }
  // Erros de validação
  else if (error instanceof PrismaClientValidationError) {
    return `Erro de validação do Prisma: ${error.message}`;
  }
  // Erros de pânico (críticos)
  else if (error instanceof PrismaClientRustPanicError) {
    return 'Erro crítico no Prisma. Por favor, contate o suporte.';
  }
  // Outros erros do Prisma
  else if (error instanceof PrismaClientUnknownRequestError) {
    return `Erro desconhecido do Prisma: ${error.message}`;
  }
  // Qualquer outro erro
  else if (error instanceof Error) {
    return `Erro: ${error.message}`;
  }
  
  return 'Erro desconhecido ao acessar o banco de dados.';
}

// Função auxiliar para criar uma ocupação temporária para um quarto (apenas para demonstração)
async function criarOcupacaoTemporaria(quartoId: number) {
  console.log(`Criando ocupação temporária para o quarto ${quartoId}`);
  
  try {
    // Verificar se o quarto existe
    const quarto = await db.quarto.findUnique({
      where: { id: quartoId }
    });
    
    if (!quarto) {
      // Se o quarto não existir, criar um temporário
      const novoQuarto = await db.quarto.create({
        data: {
          id: quartoId,
          numero: quartoId * 100 + Math.floor(Math.random() * 10),
          tipo: 'standard',
          status: 'ocupado'
        }
      });
      console.log(`Quarto temporário criado: ${novoQuarto.id}`);
    }
    
    // Verificar se já existe um cliente de demonstração
    let clienteDemo = await db.cliente.findFirst({
      where: { nome: 'Cliente Demonstração' }
    });
    
    if (!clienteDemo) {
      // Criar um cliente de demonstração
      clienteDemo = await db.cliente.create({
        data: {
          nome: 'Cliente Demonstração',
          cpf: '00000000000'
        }
      });
      console.log(`Cliente de demonstração criado: ${clienteDemo.id}`);
    }
    
    // Criar a ocupação com o cliente de demonstração
    const hoje = new Date();
    const amanha = new Date(hoje);
    amanha.setDate(hoje.getDate() + 1);
    
    const ocupacao = await db.quartoCliente.create({
      data: {
        quartoId: quartoId,
        clienteId: clienteDemo.id,
        checkin: hoje,
        checkout: amanha
      }
    });
    
    console.log(`Ocupação temporária criada: ${ocupacao.id}`);
    return ocupacao;
    
  } catch (error) {
    console.error('Erro ao criar ocupação temporária:', error);
    const mensagemErro = traduzirErroPrisma(error);
    throw new Error(`Falha ao criar ocupação temporária: ${mensagemErro}`);
  }
}

// Função para formatar número para o formato WhatsApp
function formatarNumeroWhatsApp(numero: string): string {
  // Garantir que tem apenas números
  const numeroLimpo = numero.replace(/\D/g, '');
  
  // Adicionar prefixo 55 (Brasil) se não estiver já com ele
  const numeroComDDI = numeroLimpo.startsWith('55') ? numeroLimpo : `55${numeroLimpo}`;
  
  // Retorna no formato para WhatsApp
  return `${numeroComDDI}@s.whatsapp.net`;
}

// Função para extrair o número de telefone do formato WhatsApp
function extrairNumeroWhatsApp(numeroWhatsApp: string): string {
  // Remover o sufixo @s.whatsapp.net e o prefixo 55 (Brasil)
  return numeroWhatsApp.replace('@s.whatsapp.net', '').replace(/^55/, '');
}

// POST: Adicionar um novo contato para um quarto
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nome, numero, quartoId } = data;
    
    console.log('Recebido request para adicionar contato:', { nome, numero, quartoId });
    
    if (!nome || !numero || !quartoId) {
      return NextResponse.json(
        { error: 'Faltam dados obrigatórios: nome, numero e quartoId são necessários' },
        { status: 400 }
      );
    }

    // Formatar o número para o padrão WhatsApp
    const numeroWhatsApp = formatarNumeroWhatsApp(numero);
    console.log(`Número formatado para WhatsApp: ${numeroWhatsApp}`);

    // Buscar a ocupação atual do quarto (QuartoCliente)
    console.log('Buscando ocupação do quarto ID:', quartoId);
    let quartoCliente;
    try {
      quartoCliente = await db.quartoCliente.findFirst({
        where: {
          quartoId: parseInt(quartoId.toString()),
          checkout: {
            gt: new Date() // Ocupação atual (checkout ainda não ocorreu)
          }
        },
        orderBy: {
          checkin: 'desc'
        }
      });
      
      console.log('Ocupação encontrada:', quartoCliente);
    } catch (dbError) {
      console.error('Erro ao buscar ocupação:', dbError);
      const mensagemErro = traduzirErroPrisma(dbError);
      return NextResponse.json(
        { error: `Erro ao buscar ocupação do quarto: ${mensagemErro}` },
        { status: 500 }
      );
    }
    
    // Se não houver ocupação, criar uma temporária para demonstração
    if (!quartoCliente) {
      console.log('Nenhuma ocupação encontrada, criando ocupação temporária');
      try {
        quartoCliente = await criarOcupacaoTemporaria(parseInt(quartoId.toString()));
      } catch (error) {
        console.error('Erro ao criar ocupação temporária:', error);
        const mensagemErro = error instanceof Error ? error.message : traduzirErroPrisma(error);
        return NextResponse.json(
          { error: `Não foi possível criar uma ocupação temporária: ${mensagemErro}` },
          { status: 500 }
        );
      }
    }
    
    console.log('Criando contato para QuartoCliente ID:', quartoCliente.id);
    
    // Criar o contato associado à ocupação do quarto
    let novoContato;
    try {
      novoContato = await db.quartoCelular.create({
        data: {
          nome: nome,
          celular: numeroWhatsApp, // Salvar no formato WhatsApp
          quartoClienteId: quartoCliente.id,
          quartoId: parseInt(quartoId.toString()) // Adicionar a referência direta ao quarto
        }
      });
      
      console.log('Contato criado com sucesso:', novoContato);
    } catch (dbError) {
      console.error('Erro ao criar contato no banco de dados:', dbError);
      const mensagemErro = traduzirErroPrisma(dbError);
      return NextResponse.json(
        { error: `Erro ao salvar contato no banco de dados: ${mensagemErro}` },
        { status: 500 }
      );
    }
    
    // Extrair o número do formato WhatsApp para o formato de exibição
    const numeroExibicao = numero.replace(/\D/g, ''); // Garantir que só tenha números
    
    return NextResponse.json({
      message: 'Contato adicionado com sucesso',
      contato: {
        id: novoContato.id,
        nome: novoContato.nome,
        numero: numeroExibicao, // Retornar o número original para exibição na interface
        quartoId: novoContato.quartoId
      }
    });
    
  } catch (error) {
    console.error('Erro ao adicionar contato:', error);
    const mensagemErro = error instanceof Error ? error.message : 'Erro desconhecido';
    return NextResponse.json(
      { error: `Erro ao adicionar contato: ${mensagemErro}` },
      { status: 500 }
    );
  }
}

// GET: Buscar contatos de um quarto
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const quartoId = searchParams.get('quartoId');
    
    if (!quartoId) {
      return NextResponse.json(
        { error: 'O parâmetro quartoId é obrigatório' },
        { status: 400 }
      );
    }
    
    // Buscar a ocupação atual do quarto
    let quartoCliente;
    try {
      quartoCliente = await db.quartoCliente.findFirst({
        where: {
          quartoId: parseInt(quartoId),
          checkout: {
            gt: new Date() // Ocupação atual (checkout ainda não ocorreu)
          }
        },
        orderBy: {
          checkin: 'desc'
        }
      });
    } catch (dbError) {
      console.error(`Erro ao buscar ocupação para o quarto ${quartoId}:`, dbError);
      const mensagemErro = traduzirErroPrisma(dbError);
      return NextResponse.json(
        { error: `Erro ao buscar ocupação do quarto: ${mensagemErro}` },
        { status: 500 }
      );
    }
    
    // Para demonstração, caso não exista uma ocupação, retornamos uma lista vazia
    if (!quartoCliente) {
      return NextResponse.json({ contatos: [] });
    }
    
    // Buscar os contatos associados a esta ocupação
    let contatos;
    try {
      contatos = await db.quartoCelular.findMany({
        where: {
          quartoClienteId: quartoCliente.id
        },
        orderBy: {
          createdAt: 'asc'
        }
      });
    } catch (dbError) {
      console.error(`Erro ao buscar contatos para o quarto ${quartoId}:`, dbError);
      const mensagemErro = traduzirErroPrisma(dbError);
      return NextResponse.json(
        { error: `Erro ao buscar contatos do quarto: ${mensagemErro}` },
        { status: 500 }
      );
    }
    
    // Formatar os contatos para a resposta
    const contatosFormatados = contatos.map((contato: Contato) => {
      // Extrair o número do formato WhatsApp para o formato de exibição
      const numeroFormatado = extrairNumeroWhatsApp(contato.celular);
      
      return {
        id: contato.id,
        nome: contato.nome,
        numero: numeroFormatado
      };
    });
    
    return NextResponse.json({ contatos: contatosFormatados });
    
  } catch (error) {
    console.error('Erro ao buscar contatos:', error);
    const mensagemErro = error instanceof Error ? error.message : 'Erro desconhecido';
    return NextResponse.json(
      { error: `Erro ao buscar contatos: ${mensagemErro}` },
      { status: 500 }
    );
  }
}

// DELETE: Remover um contato
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const contatoId = searchParams.get('id');
    
    console.log('Recebido request para remover contato ID:', contatoId);
    
    if (!contatoId) {
      return NextResponse.json(
        { error: 'O parâmetro id é obrigatório' },
        { status: 400 }
      );
    }
    
    const contatoIdInt = parseInt(contatoId);
    
    // Verificar se o contato existe antes de tentar excluir
    let contatoExistente;
    try {
      contatoExistente = await db.quartoCelular.findUnique({
        where: { id: contatoIdInt }
      });
    } catch (dbError) {
      console.error(`Erro ao verificar existência do contato ${contatoIdInt}:`, dbError);
      const mensagemErro = traduzirErroPrisma(dbError);
      return NextResponse.json(
        { error: `Erro ao verificar existência do contato: ${mensagemErro}` },
        { status: 500 }
      );
    }
    
    if (!contatoExistente) {
      console.log(`Contato ID ${contatoIdInt} não encontrado`);
      return NextResponse.json(
        { error: 'Contato não encontrado' },
        { status: 404 }
      );
    }
    
    // Excluir o contato
    try {
      console.log(`Excluindo contato ID ${contatoIdInt}`);
      await db.quartoCelular.delete({
        where: {
          id: contatoIdInt
        }
      });
      
      console.log(`Contato ID ${contatoIdInt} excluído com sucesso`);
    } catch (dbError) {
      console.error(`Erro ao excluir contato ID ${contatoIdInt}:`, dbError);
      const mensagemErro = traduzirErroPrisma(dbError);
      return NextResponse.json(
        { error: `Erro ao excluir contato do banco de dados: ${mensagemErro}` },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      message: 'Contato removido com sucesso'
    });
    
  } catch (error) {
    console.error('Erro ao remover contato:', error);
    const mensagemErro = error instanceof Error ? error.message : 'Erro desconhecido';
    return NextResponse.json(
      { error: `Erro ao remover contato: ${mensagemErro}` },
      { status: 500 }
    );
  }
} 