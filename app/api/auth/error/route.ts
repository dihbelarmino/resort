import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const error = searchParams.get("error") || "unknown";
  
  return NextResponse.json({
    status: "error",
    error,
    message: getErrorMessage(error),
  });
}

function getErrorMessage(error: string): string {
  switch (error) {
    case "CredentialsSignin":
      return "Credenciais inválidas";
    case "SessionRequired":
      return "Sessão necessária";
    case "AccessDenied":
      return "Acesso negado";
    default:
      return "Erro desconhecido de autenticação";
  }
} 