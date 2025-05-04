// Este middleware está completamente desativado
// para evitar problemas de redirecionamento

import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Não faz nada, apenas passa para a próxima middleware
  return NextResponse.next();
}

export const config = {
  matcher: [], // Não corresponde a nenhuma rota
}; 