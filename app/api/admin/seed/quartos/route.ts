import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

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

    // Verificar se existem quartos no banco
    const quartoCount = await db.quarto.count();
    
    // Obter o parâmetro force
    const { searchParams } = new URL(request.url);
    const force = searchParams.get('force') === 'true';
    
    if (quartoCount > 0 && !force) {
      return NextResponse.json({
        message: `Já existem ${quartoCount} quartos no banco de dados.`,
        info: 'Para recriar todos os quartos, use o parâmetro ?force=true'
      });
    }
    
    // Se force=true e existem quartos, excluir todos os quartos existentes
    if (force && quartoCount > 0) {
      // Verificar se algum quarto está ocupado
      const quartosOcupados = await db.quarto.count({
        where: { status: 'ocupado' }
      });
      
      if (quartosOcupados > 0) {
        return NextResponse.json(
          { error: `Há ${quartosOcupados} quartos ocupados. Não é possível excluí-los.` },
          { status: 400 }
        );
      }
      
      // Excluir todos os quartos que não estão ocupados
      await db.quarto.deleteMany({
        where: { status: { not: 'ocupado' } }
      });
    }
    
    // Criar 30 quartos (10 por andar)
    const quartos = [];
    const tipos = ['standard', 'luxo', 'premium', 'suite'];
    
    // Loop para criar os quartos
    for (let andar = 1; andar <= 3; andar++) {
      for (let numero = 1; numero <= 10; numero++) {
        // Montar o número do quarto (ex: 101, 102, 201, etc.)
        const numeroQuarto = andar * 100 + numero;
        
        // Verificar se este número de quarto já existe
        const quartoExistente = await db.quarto.findUnique({
          where: { numero: numeroQuarto }
        });
        
        // Se o quarto já existe, pular para o próximo
        if (quartoExistente) {
          console.log(`Quarto ${numeroQuarto} já existe, pulando...`);
          continue;
        }
        
        // Escolher um tipo aleatório
        const tipoIndex = Math.floor(Math.random() * tipos.length);
        
        quartos.push({
          numero: numeroQuarto,
          andar,
          tipo: tipos[tipoIndex],
          status: 'disponivel',
        });
      }
    }
    
    // Inserir os quartos no banco de dados
    const created = await db.quarto.createMany({
      data: quartos,
      skipDuplicates: true,
    });
    
    return NextResponse.json({
      message: `${created.count} quartos criados com sucesso!`,
      quartos: await db.quarto.findMany({
        orderBy: [
          { andar: 'asc' },
          { numero: 'asc' }
        ]
      })
    });
    
  } catch (error) {
    console.error('Erro ao criar os quartos:', error);
    return NextResponse.json(
      { error: `Erro ao criar quartos: ${error instanceof Error ? error.message : 'Erro desconhecido'}` },
      { status: 500 }
    );
  }
} 