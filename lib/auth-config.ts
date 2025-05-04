/**
 * Configuração centralizada para autenticação
 * Este arquivo deve ser importado pelo arquivo [...nextauth]/route.ts
 */

// Segredo fixo para garantir consistência
export const AUTH_SECRET = "23d45f6g8h9jkl3mn0pqr5tuv7wxy2ab1cde";

// URL base da aplicação para callbacks e redirecionamentos
export const getBaseUrl = () => {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  // Sempre usar porta 3000 em desenvolvimento
  return "http://localhost:3000";
};

// Ajuda a diagnosticar problemas
export const logAuthConfig = () => {
  console.log("=== Configuração de Autenticação ===");
  console.log("URL Base:", getBaseUrl());
  console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
  console.log("NEXTAUTH_SECRET definido:", !!process.env.NEXTAUTH_SECRET);
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("====================================");
}; 