import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Obter dados da sessão
    const session = await getServerSession(authOptions);
    
    // Obter todos os usuários admin do banco
    const adminUsers = await prisma.usuario.findMany({
      where: {
        permissao: "admin"
      },
      select: {
        id: true,
        nome: true,
        email: true,
        permissao: true
      }
    });
    
    // Se houver um usuário na sessão, obter detalhes do banco
    let userDetails = null;
    if (session?.user?.email) {
      userDetails = await prisma.usuario.findUnique({
        where: {
          email: session.user.email
        },
        select: {
          id: true,
          nome: true,
          email: true,
          permissao: true
        }
      });
    }
    
    return NextResponse.json({
      session,
      adminUsers,
      userDetails,
      userInSession: {
        id: session?.user?.id,
        name: session?.user?.name,
        email: session?.user?.email,
        role: session?.user?.role,
      }
    });
  } catch (error) {
    console.error("Erro no endpoint de debug:", error);
    return NextResponse.json({
      status: "error",
      message: String(error)
    }, { status: 500 });
  }
} 