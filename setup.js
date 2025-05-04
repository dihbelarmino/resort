#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');

console.log('Iniciando configuração do Resort Manager...');

// Criar arquivo .env se não existir
if (!fs.existsSync('.env')) {
  console.log('Criando arquivo .env...');
  const envContent = `# Banco de Dados Online na iatech.space
DATABASE_URL="mysql://root:f1bc817e10df61923b49@iatech.space:3306/resort"

# NextAuth
NEXTAUTH_SECRET="seu-secret-aqui-gere-um-valor-aleatorio"
NEXTAUTH_URL="http://localhost:3000"

# Ambiente
NODE_ENV="development"
`;

  fs.writeFileSync('.env', envContent);
  console.log('Arquivo .env criado! Por favor, edite-o com suas configurações se necessário.')
}

// Executar os comandos para configurar o banco de dados
console.log('Gerando cliente Prisma...');
exec('npx prisma generate', (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao gerar cliente Prisma: ${error}`);
    return;
  }
  console.log(stdout);
  
  console.log('\nConfigurações concluídas! Para iniciar o aplicativo:');
  console.log('1. O banco de dados já está configurado e disponível online');
  console.log('2. Execute "npm run dev" para iniciar o servidor de desenvolvimento');
  console.log('\nAcesse http://localhost:3000 em seu navegador.');
}); 