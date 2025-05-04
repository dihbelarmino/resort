import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seed() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Limpar banco de dados antes de inserir novos dados
  await cleanDatabase();

  // Criar usuários iniciais
  const usuarios = await createUsers();

  // Criar funcionários associados aos usuários
  await createFuncionarios(usuarios);

  // Criar quartos
  const quartos = await createQuartos();

  // Criar clientes
  const clientes = await createClientes();

  // Criar ocupações de quartos
  const quartosClientes = await createQuartosClientes(quartos, clientes);

  // Criar contatos para quartos ocupados
  await createContatos(quartosClientes);

  // Criar tarefas
  await createTarefas(quartos, usuarios);

  console.log('✅ Seed concluído com sucesso!');
}

async function cleanDatabase() {
  console.log('🧹 Limpando banco de dados...');
  
  await prisma.avaliacao.deleteMany();
  await prisma.tarefa.deleteMany();
  await prisma.quartoCelular.deleteMany();
  await prisma.quartoCliente.deleteMany();
  await prisma.quarto.deleteMany();
  await prisma.cliente.deleteMany();
  await prisma.funcionario.deleteMany();
  await prisma.usuario.deleteMany();
}

async function createUsers() {
  console.log('👥 Criando usuários...');

  const passwordHash = await bcrypt.hash('senha123', 10);

  const usuariosData = [
    { nome: 'Admin', email: 'admin@resort.com', senha: passwordHash, permissao: 'admin' },
    { nome: 'Recepção', email: 'recepcao@resort.com', senha: passwordHash, permissao: 'recepcionista' },
    { nome: 'Maria Silva', email: 'maria@resort.com', senha: passwordHash, permissao: 'camareira' },
    { nome: 'Ana Costa', email: 'ana@resort.com', senha: passwordHash, permissao: 'camareira' },
    { nome: 'Joana Santos', email: 'joana@resort.com', senha: passwordHash, permissao: 'camareira' },
    { nome: 'Carla Lima', email: 'carla@resort.com', senha: passwordHash, permissao: 'passadeira' },
    { nome: 'Teresa Rocha', email: 'teresa@resort.com', senha: passwordHash, permissao: 'passadeira' },
    { nome: 'Ricardo Almeida', email: 'ricardo@resort.com', senha: passwordHash, permissao: 'lavanderia' },
    { nome: 'Paulo Castro', email: 'paulo@resort.com', senha: passwordHash, permissao: 'lavanderia' },
    { nome: 'Fernanda Bastos', email: 'fernanda@resort.com', senha: passwordHash, permissao: 'supervisor_camareira' },
    { nome: 'Roberto Mendes', email: 'roberto@resort.com', senha: passwordHash, permissao: 'supervisor_passadeira' },
    { nome: 'Camila Ferreira', email: 'camila@resort.com', senha: passwordHash, permissao: 'supervisor_lavanderia' },
  ];

  await prisma.usuario.createMany({
    data: usuariosData
  });

  return await prisma.usuario.findMany();
}

async function createFuncionarios(usuarios: any[]) {
  console.log('👷 Criando funcionários...');

  const funcionariosData = usuarios
    .filter(usuario => 
      usuario.permissao !== 'admin' && 
      usuario.permissao !== 'recepcionista'
    )
    .map(usuario => {
      let cargo = '';
      if (usuario.permissao.includes('camareira')) cargo = 'camareira';
      else if (usuario.permissao.includes('passadeira')) cargo = 'passadeira';
      else if (usuario.permissao.includes('lavanderia')) cargo = 'lavanderia';
      else if (usuario.permissao.includes('supervisor')) {
        // Extrair o tipo de supervisor, ex: supervisor_camareira -> camareira
        const tipoSupervisor = usuario.permissao.split('_')[1];
        cargo = tipoSupervisor;
      }

      return {
        usuarioId: usuario.id,
        cargo: cargo,
        foto: null
      };
    });

  await prisma.funcionario.createMany({
    data: funcionariosData
  });
}

async function createQuartos() {
  console.log('🏨 Criando quartos...');

  const quartos = [];
  
  // Criar 5 andares com 6 quartos cada
  for (let andar = 1; andar <= 5; andar++) {
    for (let numero = 1; numero <= 6; numero++) {
      const quartoNumero = andar * 100 + numero;
      const tipo = numero <= 4 ? 'standard' : numero === 5 ? 'luxo' : 'suite';
      const status = Math.random() > 0.5 ? 'disponivel' : 'ocupado';
      
      quartos.push({
        numero: quartoNumero,
        andar,
        tipo,
        status,
        cliente: status === 'ocupado' ? 'Cliente' : null
      });
    }
  }
  
  await prisma.quarto.createMany({
    data: quartos
  });
  
  return await prisma.quarto.findMany();
}

async function createClientes() {
  console.log('👪 Criando clientes...');
  
  const clientes = [
    { nome: 'João Silva', cpf: '12345678901', email: 'joao@email.com', telefone: '11987654321' },
    { nome: 'Maria Oliveira', cpf: '23456789012', email: 'maria@email.com', telefone: '11976543210' },
    { nome: 'Pedro Santos', cpf: '34567890123', email: 'pedro@email.com', telefone: '11965432109' },
    { nome: 'Ana Costa', cpf: '45678901234', email: 'ana@email.com', telefone: '11954321098' },
    { nome: 'Lucas Ferreira', cpf: '56789012345', email: 'lucas@email.com', telefone: '11943210987' },
    { nome: 'Julia Almeida', cpf: '67890123456', email: 'julia@email.com', telefone: '11932109876' },
    { nome: 'Carlos Rodrigues', cpf: '78901234567', email: 'carlos@email.com', telefone: '11921098765' },
    { nome: 'Mariana Lima', cpf: '89012345678', email: 'mariana@email.com', telefone: '11910987654' },
    { nome: 'Roberto Pereira', cpf: '90123456789', email: 'roberto@email.com', telefone: '11909876543' },
    { nome: 'Fernanda Souza', cpf: '01234567890', email: 'fernanda@email.com', telefone: '11898765432' }
  ];
  
  await prisma.cliente.createMany({
    data: clientes
  });
  
  return await prisma.cliente.findMany();
}

async function createQuartosClientes(quartos: any[], clientes: any[]) {
  console.log('🔑 Criando ocupações de quartos...');
  
  const quartosOcupados = quartos.filter(quarto => quarto.status === 'ocupado');
  const dataAtual = new Date();
  
  const ocupacoes = quartosOcupados.map((quarto, index) => {
    const clienteIndex = index % clientes.length;
    const cliente = clientes[clienteIndex];
    
    // Data de check-in entre 1-5 dias atrás
    const diasAtras = Math.floor(Math.random() * 5) + 1;
    const checkin = new Date(dataAtual);
    checkin.setDate(checkin.getDate() - diasAtras);
    
    // Data de check-out entre 1-5 dias a frente
    const diasFrente = Math.floor(Math.random() * 5) + 1;
    const checkout = new Date(dataAtual);
    checkout.setDate(checkout.getDate() + diasFrente);
    
    return {
      quartoId: quarto.id,
      clienteId: cliente.id,
      checkin,
      checkout
    };
  });
  
  await prisma.quartoCliente.createMany({
    data: ocupacoes
  });
  
  return await prisma.quartoCliente.findMany({
    include: {
      quarto: true,
      cliente: true
    }
  });
}

async function createContatos(quartosClientes: any[]) {
  console.log('📱 Criando contatos para quartos...');
  
  const contatos = [];
  
  for (const ocupacao of quartosClientes) {
    // Quantidade aleatória de contatos (1-3) por ocupação
    const quantidadeContatos = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < quantidadeContatos; i++) {
      const nome = i === 0 
        ? ocupacao.cliente.nome.split(' ')[0] // Primeiro nome do cliente
        : `Contato ${i} de ${ocupacao.cliente.nome.split(' ')[0]}`;
        
      // Gerar número de celular brasileiro aleatório
      const ddd = Math.floor(Math.random() * 89) + 11; // DDD entre 11 e 99
      const numero1 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      const numero2 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      const celular = `55${ddd}9${numero1}${numero2}@s.whatsapp.net`;
      
      contatos.push({
        nome,
        celular,
        quartoClienteId: ocupacao.id
      });
    }
  }
  
  await prisma.quartoCelular.createMany({
    data: contatos
  });
}

async function createTarefas(quartos: any[], usuarios: any[]) {
  console.log('📋 Criando tarefas de serviços...');
  
  const camareiras = usuarios.filter(u => u.permissao === 'camareira');
  const passadeiras = usuarios.filter(u => u.permissao === 'passadeira');
  const lavanderia = usuarios.filter(u => u.permissao === 'lavanderia');
  
  const dataAtual = new Date();
  const tarefas = [];
  
  // Para cada quarto, criar algumas tarefas aleatórias
  for (const quarto of quartos) {
    // 50% de chance de ter tarefa para o quarto
    if (Math.random() > 0.5) continue;
    
    // Escolher aleatoriamente o tipo de tarefa
    const tipoIndex = Math.floor(Math.random() * 3);
    const tipos = ['camareira', 'passadeira', 'lavanderia'];
    const tipo = tipos[tipoIndex];
    
    // Escolher aleatoriamente o status
    const statusIndex = Math.floor(Math.random() * 3);
    const status = ['pendente', 'em_andamento', 'concluida'][statusIndex];
    
    // Escolher funcionário responsável com base no tipo de tarefa
    let responsavelId = null;
    if (status !== 'pendente') {
      let funcionariosDisponiveis;
      switch (tipo) {
        case 'camareira':
          funcionariosDisponiveis = camareiras;
          break;
        case 'passadeira':
          funcionariosDisponiveis = passadeiras;
          break;
        case 'lavanderia':
          funcionariosDisponiveis = lavanderia;
          break;
      }
      
      if (funcionariosDisponiveis && funcionariosDisponiveis.length > 0) {
        const randomIndex = Math.floor(Math.random() * funcionariosDisponiveis.length);
        responsavelId = funcionariosDisponiveis[randomIndex].id;
      }
    }
    
    // Definir datas de início e término para tarefas em andamento ou concluídas
    let inicio = null;
    let fim = null;
    
    if (status === 'em_andamento' || status === 'concluida') {
      // Início entre 1-5 horas atrás
      const horasAtrasInicio = Math.floor(Math.random() * 5) + 1;
      inicio = new Date(dataAtual);
      inicio.setHours(inicio.getHours() - horasAtrasInicio);
      
      // Fim apenas para tarefas concluídas
      if (status === 'concluida') {
        // Fim entre 1-3 horas após o início
        const horasDepoisFim = Math.floor(Math.random() * 3) + 1;
        fim = new Date(inicio);
        fim.setHours(fim.getHours() + horasDepoisFim);
      }
    }
    
    tarefas.push({
      tipo,
      quartoId: quarto.id,
      responsavelId,
      inicio,
      fim,
      status
    });
  }
  
  await prisma.tarefa.createMany({
    data: tarefas
  });
  
  // Criar avaliações para tarefas concluídas
  const tarefasConcluidas = await prisma.tarefa.findMany({
    where: {
      status: 'concluida'
    }
  });
  
  // Supervisores para cada tipo de tarefa
  const supervisoresCamareira = usuarios.filter(u => u.permissao === 'supervisor_camareira');
  const supervisoresPassadeira = usuarios.filter(u => u.permissao === 'supervisor_passadeira');
  const supervisoresLavanderia = usuarios.filter(u => u.permissao === 'supervisor_lavanderia');
  
  const avaliacoes = [];
  
  for (const tarefa of tarefasConcluidas) {
    // 70% de chance de ter avaliação
    if (Math.random() > 0.7) continue;
    
    // Escolher supervisor com base no tipo de tarefa
    let supervisores;
    switch (tarefa.tipo) {
      case 'camareira':
        supervisores = supervisoresCamareira;
        break;
      case 'passadeira':
        supervisores = supervisoresPassadeira;
        break;
      case 'lavanderia':
        supervisores = supervisoresLavanderia;
        break;
    }
    
    if (supervisores && supervisores.length > 0) {
      const randomIndex = Math.floor(Math.random() * supervisores.length);
      const supervisorId = supervisores[randomIndex].id;
      
      // Nota entre 5 e 10
      const nota = Math.floor(Math.random() * 6) + 5;
      
      avaliacoes.push({
        tarefaId: tarefa.id,
        supervisorId,
        nota,
        observacao: nota >= 9 
          ? 'Excelente trabalho!' 
          : nota >= 7 
            ? 'Bom trabalho.' 
            : 'Trabalho satisfatório, mas pode melhorar.'
      });
    }
  }
  
  if (avaliacoes.length > 0) {
    await prisma.avaliacao.createMany({
      data: avaliacoes
    });
  }
}

seed()
  .catch(e => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 