"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award } from "lucide-react";

interface Employee {
  id: number;
  name: string;
  photo?: string;
  role: string;
  score: number;
  tasksCompleted: number;
  averageTime: number; // in minutes
}

// Exemplo de dados - seria substituído por chamada à API
const sampleEmployees: Record<string, Employee[]> = {
  camareira: [
    { id: 1, name: "Maria Silva", photo: "/employees/maria.jpg", role: "camareira", score: 9.8, tasksCompleted: 145, averageTime: 32 },
    { id: 2, name: "Ana Costa", photo: "/employees/ana.jpg", role: "camareira", score: 9.6, tasksCompleted: 132, averageTime: 35 },
    { id: 3, name: "Joana Santos", photo: "/employees/joana.jpg", role: "camareira", score: 9.4, tasksCompleted: 128, averageTime: 33 },
    { id: 4, name: "Roberta Oliveira", photo: "/employees/roberta.jpg", role: "camareira", score: 9.2, tasksCompleted: 115, averageTime: 38 },
  ],
  passadeira: [
    { id: 5, name: "Carla Lima", photo: "/employees/carla.jpg", role: "passadeira", score: 9.7, tasksCompleted: 130, averageTime: 45 },
    { id: 6, name: "Teresa Rocha", photo: "/employees/teresa.jpg", role: "passadeira", score: 9.5, tasksCompleted: 122, averageTime: 48 },
    { id: 7, name: "Sônia Mendes", photo: "/employees/sonia.jpg", role: "passadeira", score: 9.3, tasksCompleted: 118, averageTime: 50 },
  ],
  lavanderia: [
    { id: 8, name: "Ricardo Almeida", photo: "/employees/ricardo.jpg", role: "lavanderia", score: 9.9, tasksCompleted: 150, averageTime: 55 },
    { id: 9, name: "Paulo Castro", photo: "/employees/paulo.jpg", role: "lavanderia", score: 9.6, tasksCompleted: 142, averageTime: 58 },
    { id: 10, name: "Carlos Fernandes", photo: "/employees/carlos.jpg", role: "lavanderia", score: 9.4, tasksCompleted: 135, averageTime: 60 },
  ]
};

type ServiceType = 'camareira' | 'passadeira' | 'lavanderia';

interface LeaderboardProps {
  serviceType?: ServiceType;
  limit?: number;
  showDetails?: boolean;
}

export function Leaderboard({ serviceType, limit = 3, showDetails = false }: LeaderboardProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  useEffect(() => {
    // Simular carregamento de dados da API
    setLoading(true);
    setTimeout(() => {
      if (serviceType) {
        setEmployees(sampleEmployees[serviceType].slice(0, limit));
      } else if (selectedService) {
        setEmployees(sampleEmployees[selectedService].slice(0, limit));
      } else {
        // Combinar os top 3 de cada categoria
        const topEmployees = [
          ...sampleEmployees.camareira.slice(0, 3),
          ...sampleEmployees.passadeira.slice(0, 3),
          ...sampleEmployees.lavanderia.slice(0, 3)
        ];
        setEmployees(topEmployees);
      }
      setLoading(false);
    }, 500);
  }, [serviceType, limit, selectedService]);

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  const roleTitles: Record<ServiceType, string> = {
    camareira: "Camareira",
    passadeira: "Passadeira",
    lavanderia: "Lavanderia"
  };

  // Novo componente para renderizar medalhas
  const MedalIcon = ({ position }: { position: number }) => {
    switch (position) {
      case 0: // Ouro
        return (
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-amber-200"></div>
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-amber-300 to-amber-500 shadow-md">
              <Trophy className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white shadow-md">1</div>
          </div>
        );
      case 1: // Prata
        return (
          <div className="relative">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-gray-200 to-gray-400 shadow-md">
              <Medal className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs font-bold text-white shadow-md">2</div>
          </div>
        );
      case 2: // Bronze
        return (
          <div className="relative">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-amber-600 to-amber-800 shadow-md">
              <Award className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-900 text-xs font-bold text-white shadow-md">3</div>
          </div>
        );
      default:
        return <div className="h-10 w-10"></div>;
    }
  };

  // Botões para filtrar por tipo de serviço
  const ServiceButtons = () => {
    if (serviceType) return null;
    
    return (
      <div className="mb-4 flex flex-wrap gap-2">
        <Button
          size="sm"
          variant={selectedService === null ? "default" : "outline"}
          className={selectedService === null ? "bg-blue-600 text-white" : ""}
          onClick={() => setSelectedService(null)}
        >
          Todos
        </Button>
        <Button
          size="sm"
          variant={selectedService === "camareira" ? "default" : "outline"}
          className={selectedService === "camareira" ? "bg-red-500 text-white" : ""}
          onClick={() => setSelectedService("camareira")}
        >
          Camareiras
        </Button>
        <Button
          size="sm"
          variant={selectedService === "passadeira" ? "default" : "outline"}
          className={selectedService === "passadeira" ? "bg-blue-500 text-white" : ""}
          onClick={() => setSelectedService("passadeira")}
        >
          Passadeiras
        </Button>
        <Button
          size="sm"
          variant={selectedService === "lavanderia" ? "default" : "outline"}
          className={selectedService === "lavanderia" ? "bg-purple-500 text-white" : ""}
          onClick={() => setSelectedService("lavanderia")}
        >
          Lavanderia
        </Button>
      </div>
    );
  };

  return (
    <div>
      <ServiceButtons />
      
      <ScrollArea className="h-[320px] pr-4">
        <div className="space-y-4">
          {employees.map((employee, index) => {
            const isTopThree = index < 3 && !showDetails;
            
            // Agrupar por tipo de serviço se estiver mostrando combinado
            let groupTitle = null;
            if (!serviceType && !selectedService) {
              const prevEmployee = index > 0 ? employees[index - 1] : null;
              if (!prevEmployee || prevEmployee.role !== employee.role) {
                groupTitle = roleTitles[employee.role as ServiceType];
              }
            }
            
            // Calcular a posição dentro do grupo
            let positionInGroup = index;
            if (!serviceType && !selectedService) {
              positionInGroup = employees
                .filter(e => e.role === employee.role)
                .findIndex(e => e.id === employee.id);
            }
            
            return (
              <div key={employee.id}>
                {groupTitle && (
                  <h3 className="font-medium text-sm text-muted-foreground mt-4 mb-2">
                    {groupTitle}
                  </h3>
                )}
                
                <div className="flex items-center space-x-4">
                  {!showDetails && (
                    <MedalIcon position={selectedService ? index : positionInGroup} />
                  )}
                  
                  <Avatar className={`h-10 w-10 ${!showDetails ? 'ring-2 ring-offset-2 ' + 
                    (positionInGroup === 0 ? 'ring-amber-500' : 
                     positionInGroup === 1 ? 'ring-gray-400' : 
                     positionInGroup === 2 ? 'ring-amber-700' : '')
                    : ''}`}
                  >
                    <AvatarImage src={employee.photo} alt={employee.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {employee.name.split(' ').map(name => name[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{employee.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {showDetails 
                            ? `${employee.tasksCompleted} tarefas • ${employee.averageTime} min (média)`
                            : `Nota: ${employee.score.toFixed(1)}/10`
                          }
                        </p>
                      </div>
                      
                      <Badge 
                        variant="outline" 
                        className={`ml-2 ${
                          employee.score >= 9.5 ? 'bg-green-100 text-green-800 border-green-200' : 
                          employee.score >= 9.0 ? 'bg-blue-100 text-blue-800 border-blue-200' : 
                          'bg-amber-100 text-amber-800 border-amber-200'
                        }`}
                      >
                        {employee.score.toFixed(1)}
                      </Badge>
                    </div>
                    
                    {showDetails && (
                      <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                        <div 
                          className={`h-2 rounded-full ${
                            employee.score >= 9.5 ? 'bg-green-500' : 
                            employee.score >= 9.0 ? 'bg-blue-500' : 
                            'bg-amber-500'
                          }`}
                          style={{ width: `${(employee.score / 10) * 100}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
} 