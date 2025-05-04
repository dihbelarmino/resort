import { PrismaClient } from '../lib/generated/prisma';

// Função para criar uma instância do PrismaClient
function createPrismaClient() {
  try {
    console.log('🔍 Criando uma nova instância do PrismaClient...');
    return new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
  } catch (error) {
    console.error('❌ Falha ao criar instância do PrismaClient:', error);
    throw error;
  }
}

// Use PrismaClient no escopo global para evitar múltiplas instâncias em desenvolvimento
declare global {
  var prisma: PrismaClient | undefined;
}

// Evitar múltiplas instâncias do Prisma em desenvolvimento e hot-reloading
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = createPrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = createPrismaClient();
    console.log('✅ Prisma adicionado ao objeto global');
  }
  prisma = global.prisma;
  console.log('✅ Usando cliente Prisma do objeto global');
}

export const db = prisma;
export default prisma; 