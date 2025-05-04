"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { 
  LayoutDashboard, 
  BedDouble, 
  Users, 
  ClipboardList, 
  Settings, 
  Search,
  LogOut, 
  Menu, 
  X, 
  User, 
  Home,
  CalendarRange,
  PieChart,
  BookOpen,
  Clock,
  FileText,
  CircleUser,
  Cog,
  UserCog,
  ChevronDown,
  ShieldCheck,
  UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResortLogo } from "@/components/logo/ResortLogo";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

// Cores do Tauá Resort
const TAUA_COLORS = {
  green: "#087242", // Verde principal
  orange: "#F39200", // Laranja principal
  lightGreen: "#33B44A", // Verde secundário
  white: "#FFFFFF",
  lightGray: "#F8F9FA",
  mediumGray: "#E5E7EB",
  darkGray: "#4B5563",
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fecha o menu ao mudar de rota em dispositivos móveis
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Função auxiliar para verificar se o usuário é admin
  const isAdmin = () => {
    if (!session?.user) return false;
    // Verificar tanto role quanto permissao (para compatibilidade)
    return session.user.role === "admin" || 
           (session.user as any).permissao === "admin";
  };

  // Define links com base na permissão do usuário
  const getNavLinks = () => {
    const commonLinks = [
      {
        href: "/dashboard",
        label: "Dashboard",
        icon: <LayoutDashboard className="h-5 w-5" />,
      },
      {
        href: "/quartos",
        label: "Quartos",
        icon: <BedDouble className="h-5 w-5" />,
      },
      {
        href: "/clientes",
        label: "Clientes",
        icon: <Users className="h-5 w-5" />,
      },
      {
        href: "/reservas",
        label: "Reservas",
        icon: <CalendarRange className="h-5 w-5" />,
      },
      {
        href: "/servicos",
        label: "Serviços",
        icon: <ClipboardList className="h-5 w-5" />,
      },
      {
        href: "/relatorios",
        label: "Relatórios",
        icon: <FileText className="h-5 w-5" />,
      },
    ];

    // Links adicionais específicos para administradores
    const adminLinks = [
      {
        href: "/admin/usuarios",
        label: "Gerenciar Usuários",
        icon: <UserCog className="h-5 w-5" />,
      },
      {
        href: "/admin",
        label: "Administração",
        icon: <ShieldCheck className="h-5 w-5" />,
      },
    ];

    // Filtramos os links com base nas permissões
    if (!isAdmin()) return commonLinks;
    
    // Se for administrador, adiciona links administrativos
    return [...commonLinks, ...adminLinks];
  };

  const navLinks = getNavLinks();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  // Extrair primeiro nome para exibição
  const getFirstName = () => {
    if (!session?.user?.name) return "Usuário";
    return session.user.name.split(' ')[0];
  };

  // Formatar o nível de acesso para exibição
  const formatRole = (role?: string) => {
    if (!role) return "Usuário";
    
    switch (role) {
      case "admin":
        return "Administrador";
      case "manager":
        return "Gerente";
      case "staff":
        return "Funcionário";
      default:
        return role.charAt(0).toUpperCase() + role.slice(1);
    }
  };

  const router = useRouter();

  if (!mounted) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Overlay para dispositivos móveis */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - estilo Visual */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-[#087242] shadow-lg transition-transform duration-300 md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo no topo esquerdo */}
        <div className="flex p-0 h-28 items-center justify-start">
          <Link href="/dashboard" className="w-full">
            <ResortLogo size="xl" variant="full" className="p-4 h-28 w-auto" />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="absolute right-4 top-4 md:hidden text-white hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Links de navegação */}
        <div className="flex-1 px-2 py-4">
          <nav className="space-y-1 pr-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`flex items-center gap-3 rounded-r-full px-4 py-3 text-sm transition-colors ${
                  pathname === link.href 
                    ? "bg-white text-[#087242] font-medium" 
                    : "text-white hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Botão de logout */}
        <div className="p-4">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
            onClick={handleSignOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </Button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Barra de navegação superior */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(true)}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <p className="text-sm font-medium hidden md:block">
                {mounted && status === "authenticated" && session?.user ? (
                  <>
                    <span className="text-gray-600">Bem-vindo, </span>
                    <span className="text-green-700">{getFirstName()}</span>
                  </>
                ) : null}
              </p>
            </div>

            {/* User dropdown menu */}
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border border-green-100">
                      <AvatarImage 
                        src={session?.user?.image || ""} 
                        alt={session?.user?.name || ""} 
                      />
                      <AvatarFallback className="bg-green-100 text-green-700">
                        {session?.user?.name
                          ? session.user.name
                              .split(" ")
                              .map(name => name[0])
                              .join("")
                              .toUpperCase()
                              .substring(0, 2)
                          : "US"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
                      <p className="text-xs leading-none text-gray-500">{session?.user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => router.push('/perfil')}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Meu Perfil</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/configuracoes')}>
                      <Cog className="mr-2 h-4 w-4" />
                      <span>Configurações</span>
                    </DropdownMenuItem>
                    {isAdmin() && (
                      <>
                        <DropdownMenuItem onClick={() => router.push('/admin/usuarios')}>
                          <UserCog className="mr-2 h-4 w-4" />
                          <span>Gerenciar Usuários</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push('/admin')}>
                          <ShieldCheck className="mr-2 h-4 w-4" />
                          <span>Administração</span>
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

// Esqueleto de carregamento
function LoadingSkeleton() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar esqueleto */}
      <div className="hidden w-64 flex-col bg-[#087242] md:flex">
        <div className="flex h-28 items-center">
          <Skeleton className="h-20 w-52 ml-4 bg-white/20" />
        </div>
        <div className="flex-1 p-4">
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full bg-white/20 rounded-r-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo principal esqueleto */}
      <div className="flex flex-1 flex-col bg-gray-50">
        <div className="flex h-16 items-center justify-between px-6 bg-white shadow-sm">
          <Skeleton className="h-10 w-10 md:hidden" />
          <Skeleton className="h-6 w-56 hidden md:block" />
          <Skeleton className="h-9 w-64 hidden md:block" />
          <div className="flex gap-3">
            <Skeleton className="h-9 w-9 rounded-full" />
            <div className="hidden md:block">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="mt-1 h-3 w-24" />
            </div>
          </div>
        </div>
      
        <div className="container mx-auto p-6">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-32 w-full rounded-lg" />
              ))}
            </div>
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente Sino de Notificação
function Bell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
} 