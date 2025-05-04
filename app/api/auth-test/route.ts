import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    console.log("Teste direto de autenticação para:", email);

    // Validação básica
    if (!email || !password) {
      return NextResponse.json({
        success: false,
        error: "Email e senha são obrigatórios"
      }, { status: 400 });
    }

    // Busca o usuário
    const user = await prisma.usuario.findUnique({
      where: { email },
      select: {
        id: true,
        nome: true,
        email: true,
        senha: true,
        permissao: true
      }
    });

    // Se não encontrou o usuário
    if (!user) {
      return NextResponse.json({
        success: false,
        error: "Usuário não encontrado",
        debug: { email }
      }, { status: 401 });
    }

    // Verifica a senha
    const isPasswordValid = await compare(password, user.senha);
    
    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        error: "Senha incorreta",
        debug: { email, userId: user.id }
      }, { status: 401 });
    }

    // Login bem-sucedido
    const userData = {
      id: user.id,
      name: user.nome,
      email: user.email,
      role: user.permissao,
      permissao: user.permissao
    };
    
    return NextResponse.json({
      success: true,
      message: "Autenticação bem-sucedida",
      user: userData
    });
  } catch (error) {
    console.error("Erro no teste de autenticação:", error);
    return NextResponse.json({
      success: false,
      error: `Erro no servidor: ${error instanceof Error ? error.message : String(error)}`
    }, { status: 500 });
  }
} 