"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Shield,
  Users,
  Settings,
  LineChart,
  Lock,
  User,
  UserCog,
  ArrowRight,
  Building,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  HelpCircle,
  FileText,
  Activity,
} from "lucide-react";

export default function AdminPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simular tempo de carregamento
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Verificar se o usuário tem permissão de administrador
  useEffect(() => {
    if (!loading && session?.user) {
      const isAdmin = session.user.role === "admin" || (session.user as any).permissao === "admin";
      if (!isAdmin) {
        router.push("/dashboard");
      }
    }
  }, [loading, session, router]);

  const adminCards = [
    {
      title: "Gerenciar Usuários",
      description: "Adicionar, editar e remover usuários do sistema",
      icon: <UserCog className="h-6 w-6 text-blue-600" />,
      route: "/admin/usuarios",
      color: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100 hover:border-blue-300",
      iconBg: "bg-blue-100"
    },
    {
      title: "Configurações do Sistema",
      description: "Configurar parâmetros do resort e sistema",
      icon: <Settings className="h-6 w-6 text-purple-600" />,
      route: "/admin/configuracoes",
      color: "bg-gradient-to-br from-purple-50 to-fuchsia-50 border-purple-100 hover:border-purple-300",
      iconBg: "bg-purple-100"
    },
    {
      title: "Relatórios Avançados",
      description: "Visualizar relatórios detalhados e análises",
      icon: <LineChart className="h-6 w-6 text-emerald-600" />,
      route: "/admin/relatorios",
      color: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100 hover:border-emerald-300",
      iconBg: "bg-emerald-100"
    },
    {
      title: "Permissões e Acessos",
      description: "Gerenciar níveis de acesso e permissões",
      icon: <Lock className="h-6 w-6 text-amber-600" />,
      route: "/admin/permissoes",
      color: "bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-100 hover:border-amber-300",
      iconBg: "bg-amber-100"
    },
    {
      title: "Dados do Resort",
      description: "Configurar informações do resort",
      icon: <Building className="h-6 w-6 text-rose-600" />,
      route: "/admin/hotel",
      color: "bg-gradient-to-br from-rose-50 to-pink-50 border-rose-100 hover:border-rose-300",
      iconBg: "bg-rose-100"
    },
    {
      title: "Logs e Auditoria",
      description: "Verificar registros de atividades no sistema",
      icon: <FileText className="h-6 w-6 text-slate-600" />,
      route: "/admin/logs",
      color: "bg-gradient-to-br from-slate-50 to-gray-50 border-slate-100 hover:border-slate-300",
      iconBg: "bg-slate-100"
    },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-14 w-1/3 bg-gray-200 rounded-lg animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="h-48 bg-gray-200 rounded-lg animate-pulse" 
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Se o usuário não for admin, não renderiza nada (será redirecionado)
  if (session?.user?.role !== "admin") {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 via-white to-green-50 p-6 rounded-lg border border-green-100 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
          Painel de Administração
        </h1>
        <p className="text-muted-foreground flex items-center mt-1">
          <ShieldCheck className="h-4 w-4 mr-1 text-green-500" />
          Bem-vindo ao painel administrativo, {session?.user?.name?.split(' ')[0] || 'Administrador'}. Aqui você tem acesso a todas as configurações do sistema.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminCards.map((card, index) => (
          <Card 
            key={index} 
            className={`transition-all duration-200 ${card.color} shadow-sm hover:shadow-md border cursor-pointer`}
            onClick={() => router.push(card.route)}
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className={`${card.iconBg} p-2 rounded-lg`}>
                  {card.icon}
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-gray-400 hover:text-gray-900"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="text-xl mt-2">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-gray-600">
                {card.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-4">
        <div className="bg-amber-100 p-2 rounded-full">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <h3 className="font-medium text-amber-800">Acesso restrito</h3>
          <p className="text-sm text-amber-700 mt-1">
            Esta área é exclusiva para administradores. As alterações feitas aqui afetam todo o sistema.
          </p>
        </div>
      </div>
    </div>
  );
} 