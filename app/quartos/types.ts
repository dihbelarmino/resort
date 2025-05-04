// Tipos para os quartos e contatos
export interface Quarto {
  id: number;
  numero: number;
  andar: number;
  status: 'disponivel' | 'ocupado' | 'manutencao';
  cliente?: string;
  telefones?: Telefone[];
}

export interface Telefone {
  id?: number;
  quartoId?: number;
  nome: string;
  numero: string;
  whatsappId?: string; // Formato para o banco de dados
  temporario?: boolean; // Indica se é um contato temporário (ainda não salvo no banco)
}

// Função para formatar o número para WhatsApp
export const formatarNumeroParaWhatsApp = (numero: string): string => {
  // Remove todos os caracteres não numéricos
  const numeroLimpo = numero.replace(/\D/g, '');
  
  // Adiciona 55 no início se não começar com 55 (Brasil)
  const numeroComDDI = numeroLimpo.startsWith('55') ? numeroLimpo : `55${numeroLimpo}`;
  
  // Retorna no formato para WhatsApp
  return `${numeroComDDI}@s.whatsapp.net`;
};

// Função para limpar o número de WhatsApp para exibição
export const limparNumeroWhatsApp = (whatsappId: string): string => {
  // Remove o sufixo @s.whatsapp.net e o prefixo 55 se existir
  const numeroLimpo = whatsappId.replace('@s.whatsapp.net', '');
  return numeroLimpo.startsWith('55') ? numeroLimpo.substring(2) : numeroLimpo;
}; 