import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, senha } = body;

    // Validate the required fields
    if (!nome || !email || !senha) {
      return NextResponse.json(
        { error: 'Nome, email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Check if email is already in use
    const existingUser = await prisma.usuario.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Este email já está em uso' },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(senha, 12);

    // Create the user with 'usuario' permission
    const user = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: hashedPassword,
        permissao: 'usuario', // Default permission for self-registration
      }
    });

    // Return success response without exposing the password
    return NextResponse.json({
      message: 'Usuário criado com sucesso',
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        permissao: user.permissao
      }
    }, { status: 201 });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    return NextResponse.json(
      { error: 'Erro ao processar o registro' },
      { status: 500 }
    );
  }
} 