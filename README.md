# Resort Manager

Sistema de gerenciamento completo para resorts, com controle de quartos, hóspedes, serviços de camareira, passadeira e lavanderia.

## Recursos

- 🏨 Gerenciamento de quartos e ocupações
- 👪 Cadastro de clientes e informações de contato
- 🧹 Gestão de serviços de camareira
- 👕 Controle de serviços de passadeira
- 🧺 Administração de lavanderia
- ⭐ Sistema de avaliação de funcionários
- 📊 Dashboard com métricas e rankings de desempenho
- 🔒 Sistema de autenticação e controle de permissões
- 📱 Design responsivo para dispositivos móveis e desktop

## Tecnologias

- **Frontend:** Next.js 14 com App Router
- **UI Components:** Shadcn UI
- **Estilização:** Tailwind CSS
- **Estado:** Zustand
- **Database:** MySQL
- **ORM:** Prisma
- **Autenticação:** NextAuth.js

## Instalação

### Pré-requisitos

- Node.js 18+ 
- MySQL Server
- npm ou yarn

### Passos para instalação

1. Clone o repositório
   ```
   git clone https://github.com/seu-usuario/resort-manager.git
   cd resort-manager
   ```

2. Instale as dependências
   ```
   npm install
   ```

3. Configure as variáveis de ambiente
   - Copie o arquivo `.env.example` para `.env.local`
   - Edite as variáveis de ambiente com suas configurações

4. Configure o banco de dados
   ```
   npx prisma db push
   ```

5. Execute o seed para popular o banco com dados iniciais
   ```
   npx prisma db seed
   ```

6. Inicie o servidor de desenvolvimento
   ```
   npm run dev
   ```

7. Acesse o sistema em `http://localhost:3000`

## Funcionalidades por Perfil

### Administrador
- Acesso a todas as funcionalidades
- Cadastro de funcionários e atribuição de permissões
- Visualização de relatórios gerenciais

### Recepcionista
- Gerenciamento de quartos
- Check-in e check-out de hóspedes
- Cadastro de clientes e contatos

### Camareira/Passadeira/Lavanderia
- Visualização de tarefas pendentes
- Gestão das próprias tarefas (início e conclusão)
- Histórico de serviços realizados

### Supervisores
- Avaliação dos serviços concluídos
- Atribuição de notas de 0 a 10
- Relatórios de desempenho

## Desenvolvimento

### Estrutura do Projeto

```
/app                    # Páginas e rotas Next.js (App Router)
  /api                  # Rotas de API
  /admin                # Área administrativa
  /dashboard            # Dashboard principal
  /quartos              # Gerenciamento de quartos
  /clientes             # Cadastro de clientes
  /servicos             # Serviços operacionais
    /camareira          # Área específica para camareiras
    /passadeira         # Área específica para passadeiras
    /lavanderia         # Área específica para lavanderia
    /supervisores       # Área de supervisão de serviços
  /auth                 # Autenticação

/components             # Componentes reutilizáveis
  /ui                   # Componentes de UI (shadcn)
  /layout               # Componentes de layout 
  /dashboard            # Componentes do dashboard

/lib                    # Bibliotecas e utilitários
  /generated            # Código gerado (Prisma)

/prisma                 # Configuração do Prisma e schema
```

## Contas de Demonstração

| Email               | Senha     | Perfil        |
|---------------------|-----------|---------------|
| admin@resort.com    | senha123  | Administrador |
| recepcao@resort.com | senha123  | Recepcionista |
| maria@resort.com    | senha123  | Camareira     |
| carla@resort.com    | senha123  | Passadeira    |
| ricardo@resort.com  | senha123  | Lavanderia    |
| fernanda@resort.com | senha123  | Supervisor    |

## Licença

Este projeto está licenciado sob a licença MIT.
