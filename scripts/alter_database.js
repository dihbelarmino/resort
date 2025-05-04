const mysql = require('mysql2/promise');
require('dotenv').config();

async function alterTable() {
  try {
    // Obter as informações de conexão do .env ou do schema.prisma
    const connectionUrl = process.env.DATABASE_URL || 'mysql://root:f1bc817e10df61923b49@iatech.space:3306/resort';
    
    // Extrair os dados de conexão da URL
    const matches = connectionUrl.match(/mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/([^?]+)/);
    
    if (!matches) {
      console.error('Formato de URL de banco de dados inválido');
      process.exit(1);
    }
    
    const [, user, password, host, port, database] = matches;
    
    // Criar conexão
    const connection = await mysql.createConnection({
      host,
      user,
      password,
      database,
      port: parseInt(port)
    });
    
    console.log('Conectado ao banco de dados');
    
    // Verificar se a tabela existe
    const [tables] = await connection.execute(
      `SELECT TABLE_NAME FROM information_schema.TABLES 
       WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?`,
      [database, 'QuartoCelular']
    );
    
    if (tables.length === 0) {
      console.error('A tabela QuartoCelular não existe no banco de dados');
      await connection.end();
      process.exit(1);
    }
    
    // Verificar se a coluna já existe
    const [columns] = await connection.execute(
      `SELECT COLUMN_NAME FROM information_schema.COLUMNS 
       WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
      [database, 'QuartoCelular', 'quartoId']
    );
    
    if (columns.length > 0) {
      console.log('A coluna quartoId já existe na tabela QuartoCelular');
    } else {
      // Adicionar a coluna
      console.log('Adicionando coluna quartoId à tabela QuartoCelular...');
      await connection.execute(
        'ALTER TABLE `QuartoCelular` ADD COLUMN `quartoId` INT NULL'
      );
      console.log('Coluna adicionada com sucesso');
      
      // Adicionar índice
      console.log('Criando índice para a coluna quartoId...');
      await connection.execute(
        'CREATE INDEX `QuartoCelular_quartoId_fkey` ON `QuartoCelular`(`quartoId`)'
      );
      console.log('Índice criado com sucesso');
      
      // Adicionar chave estrangeira
      console.log('Adicionando chave estrangeira...');
      await connection.execute(
        `ALTER TABLE \`QuartoCelular\` 
         ADD CONSTRAINT \`QuartoCelular_quartoId_fkey\` 
         FOREIGN KEY (\`quartoId\`) 
         REFERENCES \`Quarto\` (\`id\`)
         ON DELETE SET NULL
         ON UPDATE CASCADE`
      );
      console.log('Chave estrangeira adicionada com sucesso');
    }
    
    // Atualizar os registros existentes (opcional)
    console.log('Atualizando registros existentes...');
    await connection.execute(
      `UPDATE QuartoCelular QC
       JOIN QuartoCliente QCL ON QC.quartoClienteId = QCL.id
       SET QC.quartoId = QCL.quartoId
       WHERE QC.quartoId IS NULL`
    );
    console.log('Registros atualizados com sucesso');
    
    console.log('Alteração do banco concluída com sucesso!');
    await connection.end();
    
  } catch (error) {
    console.error('Erro ao alterar o banco de dados:', error);
    process.exit(1);
  }
}

alterTable(); 