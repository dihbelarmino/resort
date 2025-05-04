import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    console.log('Testando conexão Prisma...');
    
    // Tentativa simples de consulta
    const resultado = await db.$queryRaw`SELECT 1 as teste`;
    
    console.log('Resultado da consulta de teste:', resultado);
    
    return NextResponse.json({
      status: 'success',
      message: 'Conexão com o Prisma estabelecida com sucesso',
      resultado
    });
  } catch (error) {
    console.error('Erro ao testar conexão Prisma:', error);
    
    let mensagemErro = 'Erro desconhecido';
    if (error instanceof Error) {
      mensagemErro = error.message;
    }
    
    return NextResponse.json({
      status: 'error',
      message: 'Falha na conexão com o banco de dados',
      erro: mensagemErro,
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
} 