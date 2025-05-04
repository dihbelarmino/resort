import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError } from '@prisma/client/runtime/library';

function getErrorDetails(error: unknown): { message: string, code?: string } {
  if (error instanceof PrismaClientInitializationError) {
    return { message: `Erro de inicialização: ${error.message}` };
  } 
  else if (error instanceof PrismaClientKnownRequestError) {
    return { message: `Erro de requisição: ${error.message}`, code: error.code };
  }
  else if (error instanceof PrismaClientUnknownRequestError) {
    return { message: `Erro desconhecido: ${error.message}` };
  }
  else if (error instanceof PrismaClientRustPanicError) {
    return { message: 'Erro crítico no sistema de banco de dados' };
  }
  else if (error instanceof Error) {
    return { message: error.message };
  }
  
  return { message: 'Erro desconhecido' };
}

export async function GET() {
  try {
    console.log('🔄 Verificando conexão com o banco de dados...');
    // Testar a conexão com o banco de dados
    await db.$queryRaw`SELECT 1`;
    
    console.log('✅ Conexão com o banco de dados ativa');
    return NextResponse.json(
      { status: 'online', message: 'Conexão com o banco de dados ativa' },
      { status: 200 }
    );
  } catch (error) {
    const { message, code } = getErrorDetails(error);
    console.error('❌ Erro na verificação de saúde:', { message, code, originalError: error });
    
    return NextResponse.json(
      { 
        status: 'offline', 
        message: 'Erro na conexão com o banco de dados',
        error: message,
        code: code
      },
      { status: 503 } // Service Unavailable
    );
  }
}

// HEAD é usado pelo ConnectionManager para verificações leves de conexão
export async function HEAD() {
  try {
    console.log('🔄 Verificação HEAD da conexão com o banco de dados...');
    // Testar a conexão com o banco de dados com uma query simples
    await db.$queryRaw`SELECT 1`;
    
    console.log('✅ Verificação HEAD bem-sucedida');
    return new Response(null, { status: 200 });
  } catch (error) {
    const { message, code } = getErrorDetails(error);
    console.error('❌ Erro na verificação de saúde (HEAD):', { message, code, originalError: error });
    return new Response(null, { status: 503 }); // Service Unavailable
  }
} 