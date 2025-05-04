import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Home,
  Hotel,
  Users,
  ClipboardList,
  Settings,
  User,
  X,
  CircleCheck,
  LineChart,
  Bed,
  ShieldCheck,
  BarChart3,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  roles: string[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const userRole = session?.user?.role || "";

  const navItems: NavItem[] = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <Home className="h-5 w-5" />,
      roles: ["admin", "recepcionista", "camareira", "passadeira", "lavanderia", "supervisor_camareira", "supervisor_passadeira", "supervisor_lavanderia"],
    },
    {
      href: "/quartos",
      label: "Quartos",
      icon: <Hotel className="h-5 w-5" />,
      roles: ["admin", "recepcionista"],
    },
    {
      href: "/clientes",
      label: "Clientes",
      icon: <Users className="h-5 w-5" />,
      roles: ["admin", "recepcionista"],
    },
    {
      href: "/reservas",
      label: "Reservas",
      icon: <Calendar className="h-5 w-5" />,
      roles: ["admin", "recepcionista"],
    },
    {
      href: "/servicos",
      label: "Serviços",
      icon: <ClipboardList className="h-5 w-5" />,
      roles: ["admin", "camareira", "passadeira", "lavanderia", "supervisor_camareira", "supervisor_passadeira", "supervisor_lavanderia"],
    },
    {
      href: "/servicos/camareira",
      label: "Serviço de Limpeza",
      icon: <Bed className="h-5 w-5" />,
      roles: ["admin", "camareira"],
    },
    {
      href: "/servicos/passadeira",
      label: "Serviço de Passadeira",
      icon: <CircleCheck className="h-5 w-5" />,
      roles: ["admin", "passadeira"],
    },
    {
      href: "/servicos/lavanderia",
      label: "Serviço de Lavanderia",
      icon: <ClipboardList className="h-5 w-5" />,
      roles: ["admin", "lavanderia"],
    },
    {
      href: "/servicos/supervisores",
      label: "Supervisão de Serviços",
      icon: <ShieldCheck className="h-5 w-5" />,
      roles: ["admin", "supervisor_camareira", "supervisor_passadeira", "supervisor_lavanderia"],
    },
    {
      href: "/relatorios",
      label: "Relatórios",
      icon: <BarChart3 className="h-5 w-5" />,
      roles: ["admin"],
    },
    {
      href: "/admin",
      label: "Administração",
      icon: <Settings className="h-5 w-5" />,
      roles: ["admin"],
    },
    {
      href: "/perfil",
      label: "Meu Perfil",
      icon: <User className="h-5 w-5" />,
      roles: ["admin", "recepcionista", "camareira", "passadeira", "lavanderia", "supervisor_camareira", "supervisor_passadeira", "supervisor_lavanderia"],
    },
  ];

  // For demo purposes, show all items
  const filteredNavItems = userRole 
    ? navItems.filter(item => item.roles.includes(userRole))
    : navItems;

  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[240px] sm:max-w-none p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Resort Manager</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex-1 overflow-auto">
            <ul className="pt-2 pb-4 space-y-1 px-2">
              {filteredNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors
                      ${pathname === item.href 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted"}
                    `}
                    onClick={onClose}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );

  const DesktopNav = () => (
    <div className="hidden md:flex md:w-[240px] h-[calc(100vh-4rem)] flex-col border-r">
      <nav className="flex-1 overflow-auto">
        <ul className="pt-4 pb-4 space-y-1 px-2">
          {filteredNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`
                  flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors
                  ${pathname === item.href 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"}
                `}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
} 