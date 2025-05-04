"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Suspense } from "react";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [debugInfo, setDebugInfo] = useState<Record<string, any> | null>(null);
  
  // Registro
  const [nome, setNome] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [activeTab, setActiveTab] = useState<string>("login");

  // Verifica se há erro na URL
  useEffect(() => {
    const errorType = searchParams.get("error");
    if (errorType) {
      let message = "Erro na autenticação";
      
      if (errorType === "CredentialsSignin") {
        message = "Email ou senha incorretos";
      } else if (errorType === "SessionRequired") {
        message = "Você precisa fazer login para acessar esta página";
      } else if (errorType === "Callback") {
        message = "Problemas de comunicação com o servidor";
      } else if (errorType === "fetch") {
        message = "Erro ao contactar o servidor: Problema de rede";
      } else if (errorType === "CLIENT_FETCH_ERROR") {
        message = "O servidor de autenticação não está respondendo corretamente";
      } else {
        message = `Erro de autenticação: ${errorType}`;
      }
      
      setError(message);
      toast.error(message);
    }
  }, [searchParams]);

  // Função para verificar a conexão com o servidor
  const checkServerConnection = async () => {
    try {
      setDebugInfo({ status: "Verificando conexão..." });
      const res = await fetch("/api/debug");
      const data = await res.json();
      setDebugInfo(data);
      toast.success("Conexão OK com o servidor");
    } catch (err) {
      setDebugInfo({ error: String(err) });
      toast.error("Erro ao verificar conexão com servidor");
    }
  };

  // Teste direto de autenticação (sem NextAuth)
  const testDirectAuth = async () => {
    if (!email || !password) {
      toast.error("Preencha email e senha para testar");
      return;
    }
    
    setIsLoading(true);
    setDebugInfo({ status: "Testando autenticação direta..." });
    
    try {
      const res = await fetch("/api/auth-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await res.json();
      setDebugInfo(data);
      
      if (data.success) {
        toast.success("Autenticação direta bem-sucedida!");
      } else {
        toast.error(`Falha na autenticação direta: ${data.error}`);
      }
    } catch (err) {
      setDebugInfo({ error: String(err) });
      toast.error("Erro ao testar autenticação");
    } finally {
      setIsLoading(false);
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setDebugInfo(null);
    
    try {
      console.log("Tentando login com:", email);
      
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log("Resultado do login:", result);

      if (result?.error) {
        console.error("Erro no login:", result.error);
        setError(`Erro: ${result.error}`);
        
        if (result.error.includes("fetch") || result.error.includes("JSON")) {
          // Problema com conexão ou resposta do servidor
          toast.error("Erro de comunicação com o servidor. Verificando conexão...");
          await checkServerConnection();
        } else {
          toast.error(`Erro no login: ${result.error}`);
        }
        return;
      }

      toast.success("Login realizado com sucesso!");
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Erro de exceção no login:", error);
      setError(`Ocorreu um erro: ${error instanceof Error ? error.message : String(error)}`);
      toast.error("Ocorreu um erro ao fazer login");
      
      // Tenta verificar o servidor em caso de erro
      await checkServerConnection();
    } finally {
      setIsLoading(false);
    }
  }

  // Registro de usuário
  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setRegisterError("");
    
    // Validação
    if (!nome || !registerEmail || !registerPassword || !confirmPassword) {
      setRegisterError("Todos os campos são obrigatórios");
      setIsLoading(false);
      return;
    }
    
    if (registerPassword !== confirmPassword) {
      setRegisterError("As senhas não coincidem");
      setIsLoading(false);
      return;
    }
    
    if (registerPassword.length < 6) {
      setRegisterError("A senha deve ter pelo menos 6 caracteres");
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email: registerEmail,
          senha: registerPassword,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Erro ao registrar usuário");
      }
      
      toast.success("Registro realizado com sucesso! Faça login para continuar.");
      // Limpar os campos do formulário de registro
      setNome("");
      setRegisterEmail("");
      setRegisterPassword("");
      setConfirmPassword("");
      // Alternar para a guia de login
      setActiveTab("login");
    } catch (error) {
      console.error("Erro no registro:", error);
      setRegisterError(`Erro: ${error instanceof Error ? error.message : String(error)}`);
      toast.error("Ocorreu um erro ao registrar");
    } finally {
      setIsLoading(false);
    }
  }

  // Credenciais de teste
  const handleDemoLogin = () => {
    setEmail("admin@resort.com");
    setPassword("admin123");
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ 
        backgroundImage: 'url("/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.9)'
      }}/>
      
      {/* Glass effect card container */}
      <div className="relative z-10 w-full max-w-md px-4">
        <Card className="w-full backdrop-blur-sm bg-white/90 dark:bg-black/80 shadow-xl border-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-emerald-500/10 opacity-50" />
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="relative">
            <CardHeader className="space-y-2 text-center pb-4">
              <div className="flex justify-center mb-2">
                <div className="h-16 w-16 bg-gradient-to-br from-green-600 to-emerald-800 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">RM</span>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-900">
                Resort Manager
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Acesse sua conta ou registre-se
              </CardDescription>
              <TabsList className="grid w-full grid-cols-2 mt-6 bg-muted/50">
                <TabsTrigger value="login" className="rounded-md text-sm font-medium">Login</TabsTrigger>
                <TabsTrigger value="register" className="rounded-md text-sm font-medium">Cadastre-se</TabsTrigger>
              </TabsList>
            </CardHeader>
            
            <CardContent>
              <TabsContent value="login">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 text-sm bg-destructive/15 text-destructive rounded-md">
                      {error}
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="seu@email.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/50 dark:bg-black/30 border border-input/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">Senha</Label>
                    <Input 
                      id="password"
                      type="password" 
                      placeholder="******" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-white/50 dark:bg-black/30 border border-input/50 focus:border-primary"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-700 to-emerald-900 hover:from-green-800 hover:to-emerald-950 text-white shadow-md transition-all duration-300" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Processando..." : "Entrar"}
                  </Button>
                  <div className="flex flex-wrap gap-2 text-center justify-center mt-2">
                    <button 
                      type="button" 
                      onClick={handleDemoLogin} 
                      className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
                    >
                      Usar credenciais de teste
                    </button>
                    <button 
                      type="button" 
                      onClick={checkServerConnection} 
                      className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
                    >
                      Verificar servidor
                    </button>
                    <button 
                      type="button" 
                      onClick={testDirectAuth} 
                      className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
                    >
                      Testar autenticação direta
                    </button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  {registerError && (
                    <div className="p-3 text-sm bg-destructive/15 text-destructive rounded-md">
                      {registerError}
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-sm font-medium">Nome completo</Label>
                    <Input 
                      id="nome"
                      type="text" 
                      placeholder="Seu nome completo" 
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                      className="bg-white/50 dark:bg-black/30 border border-input/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registerEmail" className="text-sm font-medium">Email</Label>
                    <Input 
                      id="registerEmail"
                      type="email" 
                      placeholder="seu@email.com" 
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                      className="bg-white/50 dark:bg-black/30 border border-input/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registerPassword" className="text-sm font-medium">Senha</Label>
                    <Input 
                      id="registerPassword"
                      type="password" 
                      placeholder="Mínimo 6 caracteres" 
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                      className="bg-white/50 dark:bg-black/30 border border-input/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirmar Senha</Label>
                    <Input 
                      id="confirmPassword"
                      type="password" 
                      placeholder="Confirme sua senha" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="bg-white/50 dark:bg-black/30 border border-input/50 focus:border-primary"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-700 to-emerald-900 hover:from-green-800 hover:to-emerald-950 text-white shadow-md transition-all duration-300" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Processando..." : "Cadastrar"}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Ao se cadastrar, você terá permissões básicas de usuário.
                  </p>
                </form>
              </TabsContent>
            </CardContent>
            
            {debugInfo && (
              <div className="px-6 pb-6">
                <div className="mt-4 text-xs overflow-auto max-h-40 p-2 bg-muted/80 rounded-md">
                  <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
                </div>
              </div>
            )}
            
            <CardFooter className="flex justify-between text-sm text-muted-foreground pb-6">
              <span>© {new Date().getFullYear()} Resort Manager</span>
              <span>v1.0.0</span>
            </CardFooter>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 w-full max-w-md px-4">
          <Card className="w-full backdrop-blur-sm bg-white/90 dark:bg-black/80 shadow-xl border-0 rounded-xl overflow-hidden">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-3xl font-bold">Carregando...</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
} 