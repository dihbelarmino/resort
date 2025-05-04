import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "./generated/prisma";
import { compare } from "bcryptjs";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.usuario.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.senha
        );

        if (!isPasswordValid) {
          return null;
        }

        console.log(`Usuário autenticado: ${user.nome} (${user.email}) - Permissão: ${user.permissao}`);

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.nome,
          role: user.permissao,
          permissao: user.permissao,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
        session.user.permissao = token.permissao as string;
      }
      
      console.log("Session data:", JSON.stringify(session, null, 2));
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.permissao = user.permissao;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV !== "production",
};

export const getAuthSession = () => getServerSession(authOptions);

export const secureRouteByRole = (allowedRoles: string[]) => {
  return async () => {
    const session = await getAuthSession();

    if (!session?.user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    if (!allowedRoles.includes(session.user.role)) {
      return {
        redirect: {
          destination: "/unauthorized",
          permanent: false,
        },
      };
    }

    return { props: { session } };
  };
};

// Tipagem estendida do NextAuth
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      permissao?: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    permissao?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    permissao?: string;
  }
} 