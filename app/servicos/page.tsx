"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Bed, 
  ClipboardList, 
  CircleCheck, 
  ShieldCheck, 
  Star, 
  Clock, 
  CalendarClock, 
  UserCheck 
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Tipos de serviços
interface Service {
  id: number;
  type: "camareira" | "passadeira" | "lavanderia";
  roomNumber: number;
  roomFloor: number;
  status: "pendente" | "em_andamento" | "concluida" | "avaliada";
  employeeId?: number;
  employeeName?: string;
  supervisorId?: number;
  supervisorName?: string;
  rating?: number;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  evaluatedAt?: Date;
  notes?: string;
  priority: "normal" | "urgente";
}

// Dados de exemplo
const sampleServices: Service[] = [
  {
    id: 1,
    type: "camareira",
    roomNumber: 101,
    roomFloor: 1,
    status: "pendente",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 horas atrás
    priority: "normal"
  },
  {
    id: 2,
    type: "camareira",
    roomNumber: 205,
    roomFloor: 2,
    status: "em_andamento",
    employeeId: 5,
    employeeName: "Maria Santos",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 horas atrás
    startedAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hora atrás
    priority: "urgente"
  },
  {
    id: 3,
    type: "passadeira",
    roomNumber: 310,
    roomFloor: 3,
    status: "concluida",
    employeeId: 8,
    employeeName: "Ana Silva",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 horas atrás
    startedAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 horas atrás
    completedAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 horas atrás
    priority: "normal"
  },
  {
    id: 4,
    type: "lavanderia",
    roomNumber: 407,
    roomFloor: 4,
    status: "avaliada",
    employeeId: 12,
    employeeName: "Carlos Mendes",
    supervisorId: 3,
    supervisorName: "Paulo Supervisor",
    rating: 9,
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 horas atrás
    startedAt: new Date(Date.now() - 7 * 60 * 60 * 1000), // 7 horas atrás
    completedAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 horas atrás
    evaluatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 horas atrás
    notes: "Serviço concluído com excelência",
    priority: "normal"
  },
  {
    id: 5,
    type: "camareira",
    roomNumber: 215,
    roomFloor: 2,
    status: "avaliada",
    employeeId: 5,
    employeeName: "Maria Santos",
    supervisorId: 2,
    supervisorName: "Lucia Supervisora",
    rating: 8,
    createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000), // 10 horas atrás
    startedAt: new Date(Date.now() - 9 * 60 * 60 * 1000), // 9 horas atrás
    completedAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 horas atrás
    evaluatedAt: new Date(Date.now() - 7 * 60 * 60 * 1000), // 7 horas atrás
    notes: "Bom trabalho, mas com pequenos detalhes a melhorar",
    priority: "urgente"
  }
];

export default function ServicosPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeStatus, setActiveStatus] = useState<string>("all");

  // Determinar o papel do usuário
  const userRole = session?.user?.role || "";
  const isAdmin = userRole === "admin";
  const isSupervisor = userRole.startsWith("supervisor_");
  const isEmployee = ["camareira", "passadeira", "lavanderia"].includes(userRole);
  
  // Para supervisores, determinar qual área eles supervisionam
  const supervisorArea = userRole.replace("supervisor_", "");
  
  // ID do usuário atual (normalmente viria do session)
  const userId = parseInt(session?.user?.id || "0");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    // Simular carregamento de dados
    const loadTimer = setTimeout(() => {
      // Filtrar serviços com base no papel do usuário
      let userServices = [...sampleServices];
      
      if (isSupervisor) {
        // Supervisores veem serviços de sua área específica
        userServices = sampleServices.filter(service => service.type === supervisorArea);
      } else if (isEmployee) {
        // Funcionários veem apenas suas tarefas
        userServices = sampleServices.filter(
          service => service.employeeId === userId || service.status === "pendente"
        );
      }
      
      setServices(userServices);
      setFilteredServices(userServices);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loadTimer);
  }, [status, userRole, router, userId, isSupervisor, supervisorArea, isEmployee]);

  // Função para filtrar serviços
  const filterServices = (serviceType: string, statusFilter: string) => {
    let filtered = [...services];
    
    // Filtrar por tipo
    if (serviceType !== "all") {
      filtered = filtered.filter(service => service.type === serviceType);
    }
    
    // Filtrar por status
    if (statusFilter !== "all") {
      filtered = filtered.filter(service => service.status === statusFilter);
    }
    
    setFilteredServices(filtered);
  };

  // Atualizar filtros
  useEffect(() => {
    filterServices(activeFilter, activeStatus);
  }, [activeFilter, activeStatus, services]);

  // Função para iniciar um serviço (para funcionários)
  const startService = (serviceId: number) => {
    setServices(prev => prev.map(service => 
      service.id === serviceId 
        ? {
            ...service,
            status: "em_andamento",
            employeeId: userId,
            employeeName: session?.user?.name || "Funcionário",
            startedAt: new Date()
          }
        : service
    ));
  };

  // Função para concluir um serviço (para funcionários)
  const completeService = (serviceId: number) => {
    setServices(prev => prev.map(service => 
      service.id === serviceId 
        ? {
            ...service,
            status: "concluida",
            completedAt: new Date()
          }
        : service
    ));
  };

  // Função para avaliar um serviço (para supervisores e admin)
  const evaluateService = (serviceId: number, rating: number, notes: string = "") => {
    setServices(prev => prev.map(service => 
      service.id === serviceId 
        ? {
            ...service,
            status: "avaliada",
            supervisorId: userId,
            supervisorName: session?.user?.name || "Supervisor",
            rating,
            notes,
            evaluatedAt: new Date()
          }
        : service
    ));
  };

  // Função para obter ícone de serviço
  const getServiceIcon = (type: string) => {
    switch (type) {
      case "camareira": return <Bed className="h-5 w-5" />;
      case "passadeira": return <CircleCheck className="h-5 w-5" />;
      case "lavanderia": return <ClipboardList className="h-5 w-5" />;
      default: return null;
    }
  };

  // Função para obter tradução do tipo de serviço
  const getServiceTypeLabel = (type: string) => {
    switch (type) {
      case "camareira": return "Limpeza";
      case "passadeira": return "Passadeira";
      case "lavanderia": return "Lavanderia";
      default: return type;
    }
  };

  // Função para obter tradução do status
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pendente": return "Pendente";
      case "em_andamento": return "Em Andamento";
      case "concluida": return "Concluído";
      case "avaliada": return "Avaliado";
      default: return status;
    }
  };

  // Função para obter cor do badge de status
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "pendente": return "secondary";
      case "em_andamento": return "default";
      case "concluida": return "outline";
      case "avaliada": return "secondary";
      default: return "default";
    }
  };

  // Renderizar estrelas para avaliação
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating / 2 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-green-50 via-white to-green-50 p-4 rounded-lg shadow-sm border border-green-100">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            Serviços
          </h1>
          <p className="text-muted-foreground flex items-center">
            <ClipboardList className="h-4 w-4 mr-1 text-green-600" />
            Gerencie as solicitações de serviços do resort
          </p>
        </div>
        {isAdmin && (
          <Button 
            onClick={() => router.push("/servicos/supervisores")}
            className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg"
          >
            <ShieldCheck className="mr-2 h-4 w-4" />
            Supervisão
          </Button>
        )}
      </div>

      {/* Filtros de tipo de serviço - apenas Admin vê todos os tipos */}
      {isAdmin && (
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={activeFilter === "all" ? "default" : "outline"} 
            onClick={() => setActiveFilter("all")}
          >
            Todos
          </Button>
          <Button 
            variant={activeFilter === "camareira" ? "default" : "outline"} 
            onClick={() => setActiveFilter("camareira")}
          >
            Limpeza
          </Button>
          <Button 
            variant={activeFilter === "passadeira" ? "default" : "outline"} 
            onClick={() => setActiveFilter("passadeira")}
          >
            Passadeira
          </Button>
          <Button 
            variant={activeFilter === "lavanderia" ? "default" : "outline"} 
            onClick={() => setActiveFilter("lavanderia")}
          >
            Lavanderia
          </Button>
        </div>
      )}

      {/* Filtros de status */}
      <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveStatus}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="pendente">Pendentes</TabsTrigger>
          <TabsTrigger value="em_andamento">Em Andamento</TabsTrigger>
          <TabsTrigger value="concluida">Concluídos</TabsTrigger>
          <TabsTrigger value="avaliada">Avaliados</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {renderServicesList("all")}
        </TabsContent>
        
        <TabsContent value="pendente" className="space-y-4">
          {renderServicesList("pendente")}
        </TabsContent>
        
        <TabsContent value="em_andamento" className="space-y-4">
          {renderServicesList("em_andamento")}
        </TabsContent>
        
        <TabsContent value="concluida" className="space-y-4">
          {renderServicesList("concluida")}
        </TabsContent>
        
        <TabsContent value="avaliada" className="space-y-4">
          {renderServicesList("avaliada")}
        </TabsContent>
      </Tabs>
    </div>
  );

  // Função para renderizar a lista de serviços filtrada
  function renderServicesList(statusFilter: string) {
    if (loading) {
      return Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} className="h-[180px] w-full" />
      ));
    }

    const displayServices = statusFilter === "all" 
      ? filteredServices 
      : filteredServices.filter(service => service.status === statusFilter);

    if (displayServices.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="h-12 w-12 text-muted-foreground mb-4">
            {statusFilter === "pendente" ? <Clock className="h-12 w-12" /> : 
             statusFilter === "avaliada" ? <Star className="h-12 w-12" /> : 
             <CalendarClock className="h-12 w-12" />}
          </div>
          <h3 className="text-xl font-medium">Nenhum serviço {getStatusLabel(statusFilter).toLowerCase()}</h3>
          <p className="text-muted-foreground text-center mt-2">
            Não há serviços para mostrar neste filtro.
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayServices.map(service => (
          <Card key={service.id} className={service.priority === "urgente" ? "border-red-500" : ""}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {getServiceIcon(service.type)}
                  <CardTitle>Quarto {service.roomNumber}</CardTitle>
                </div>
                <div className="flex gap-2">
                  {service.priority === "urgente" && (
                    <Badge variant="destructive">Urgente</Badge>
                  )}
                  <Badge variant={getStatusBadgeVariant(service.status)}>
                    {getStatusLabel(service.status)}
                  </Badge>
                </div>
              </div>
              <CardDescription>
                <div className="flex justify-between">
                  <span>{service.roomFloor}º Andar</span>
                  <span>{getServiceTypeLabel(service.type)}</span>
                </div>
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-2">
                {/* Informações sobre datas */}
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Criado em: {format(service.createdAt, "dd/MM/yyyy HH:mm", { locale: ptBR })}</span>
                </div>
                
                {service.startedAt && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarClock className="mr-1 h-4 w-4" />
                    <span>Iniciado em: {format(service.startedAt, "dd/MM/yyyy HH:mm", { locale: ptBR })}</span>
                  </div>
                )}
                
                {service.completedAt && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <UserCheck className="mr-1 h-4 w-4" />
                    <span>Concluído em: {format(service.completedAt, "dd/MM/yyyy HH:mm", { locale: ptBR })}</span>
                  </div>
                )}
                
                {/* Informações sobre funcionário */}
                {service.employeeName && (
                  <div className="flex items-center text-sm">
                    <span className="font-medium">Funcionário: {service.employeeName}</span>
                  </div>
                )}
                
                {/* Avaliação */}
                {service.rating && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      {renderStars(service.rating)}
                      <span className="ml-1 text-sm font-medium">{service.rating}/10</span>
                    </div>
                    {service.notes && (
                      <div className="text-sm italic">{service.notes}</div>
                    )}
                    {service.supervisorName && (
                      <div className="text-xs text-muted-foreground">
                        Avaliado por: {service.supervisorName}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-wrap gap-2">
              {/* Botões de ação com base no papel do usuário e status do serviço */}
              {isEmployee && service.status === "pendente" && service.type === userRole && (
                <Button size="sm" onClick={() => startService(service.id)}>
                  Iniciar Serviço
                </Button>
              )}
              
              {isEmployee && service.status === "em_andamento" && service.employeeId === userId && (
                <Button size="sm" onClick={() => completeService(service.id)}>
                  Concluir Serviço
                </Button>
              )}
              
              {(isAdmin || isSupervisor) && service.status === "concluida" && (
                <div className="space-y-2 w-full">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(rating => (
                      <Button 
                        key={rating}
                        size="sm"
                        variant="outline"
                        className="px-2 py-0 h-8 w-8"
                        onClick={() => evaluateService(service.id, rating)}
                      >
                        {rating}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
} 