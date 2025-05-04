import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@/lib/generated/prisma";
import { compare } from "bcryptjs";
import { AuthOptions } from "next-auth";
import { AUTH_SECRET, getBaseUrl, logAuthConfig } from "@/lib/auth-config";

const prisma = new PrismaClient();

// Log de configuração para debug
logAuthConfig();

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        console.log("Tentativa de login para:", credentials?.email);
        
        if (!credentials?.email || !credentials?.password) {
          console.log("Credenciais incompletas");
          return null;
        }

        try {
          console.log("Buscando usuário no banco de dados");
          
          const user = await prisma.usuario.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) {
            console.log("Usuário não encontrado");
            return null;
          }

          console.log("Usuário encontrado, verificando senha");
          
          const isPasswordValid = await compare(
            credentials.password,
            user.senha
          );

          if (!isPasswordValid) {
            console.log("Senha inválida");
            return null;
          }
          
          console.log("Autenticação bem-sucedida para:", user.email);
          
          return {
            id: user.id.toString(),
            email: user.email,
            name: user.nome,
            role: user.permissao,
          };
        } catch (error) {
          console.error("Erro de autenticação:", error);
          return null;
        }
      },
    }),
  ],
  secret: AUTH_SECRET, // Usando o segredo fixo
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 dias
  },
  pages: {
    signIn: "/login",  // Simplificado para usar caminhos relativos
    error: "/auth-error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  debug: true, // Mantendo debug ativado para facilitar diagnóstico
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 