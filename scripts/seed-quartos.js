const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando criação dos quartos de teste...');

  // Verificar se já existem quartos no banco
  const quartoCount = await prisma.quarto.count();
  if (quartoCount > 0) {
    console.log(`Já existem ${quartoCount} quartos no banco de dados.`);
    console.log('Deseja limpar todos os quartos e recriar? (Isso excluirá todos os quartos existentes)');
    console.log('Para continuar, execute novamente com: node scripts/seed-quartos.js --force');
    
    // Verificar se o argumento --force foi passado
    if (!process.argv.includes('--force')) {
      console.log('Operação cancelada.');
      return;
    }
    
    console.log('Opção --force detectada. Excluindo todos os quartos existentes...');
    await prisma.quarto.deleteMany({});
    console.log('Quartos existentes excluídos com sucesso.');
  }

  // Criar 30 quartos (10 por andar)
  const quartos = [];
  
  // Criar os tipos de quarto
  const tipos = ['standard', 'luxo', 'premium', 'suite'];
  
  // Loop para criar os quartos
  for (let andar = 1; andar <= 3; andar++) {
    for (let numero = 1; numero <= 10; numero++) {
      // Montar o número do quarto (ex: 101, 102, 201, etc.)
      const numeroQuarto = andar * 100 + numero;
      
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
  console.log('Inserindo 30 quartos no banco de dados...');
  
  const created = await prisma.quarto.createMany({
    data: quartos,
    skipDuplicates: true,
  });

  console.log(`${created.count} quartos criados com sucesso!`);
}

main()
  .catch((error) => {
    console.error('Erro ao criar os quartos:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 