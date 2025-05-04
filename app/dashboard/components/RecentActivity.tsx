"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

// Interface para atividades recentes
interface Activity {
  id: number;
  taskId: number;
  employeeId: number;
  employeeName: string;
  employeePhoto?: string;
  employeeRole: string;
  roomNumber: number;
  startTime: Date;
  endTime: Date;
  score?: number;
  note?: string;
  supervisorId?: number;
  supervisorName?: string;
}

// Exemplo de dados
const sampleActivities: Activity[] = [
  {
    id: 1,
    taskId: 101,
    employeeId: 1,
    employeeName: "Maria Silva",
    employeePhoto: "/employees/maria.jpg",
    employeeRole: "camareira",
    roomNumber: 204,
    startTime: new Date(Date.now() - 120 * 60000), // 2 horas atrás
    endTime: new Date(Date.now() - 90 * 60000), // 1.5 horas atrás
    score: 10,
    supervisorId: 15,
    supervisorName: "Fernanda Bastos"
  },
  {
    id: 2,
    taskId: 102,
    employeeId: 5,
    employeeName: "Carla Lima",
    employeePhoto: "/employees/carla.jpg",
    employeeRole: "passadeira",
    roomNumber: 307,
    startTime: new Date(Date.now() - 180 * 60000), // 3 horas atrás
    endTime: new Date(Date.now() - 140 * 60000), // 2.3 horas atrás
    score: 9,
    supervisorId: 16,
    supervisorName: "Roberto Mendes"
  },
  {
    id: 3,
    taskId: 103,
    employeeId: 8,
    employeeName: "Ricardo Almeida",
    employeePhoto: "/employees/ricardo.jpg",
    employeeRole: "lavanderia",
    roomNumber: 115,
    startTime: new Date(Date.now() - 240 * 60000), // 4 horas atrás
    endTime: new Date(Date.now() - 180 * 60000), // 3 horas atrás
    score: 8,
    supervisorId: 17,
    supervisorName: "Camila Ferreira"
  },
  {
    id: 4,
    taskId: 104,
    employeeId: 2,
    employeeName: "Ana Costa",
    employeePhoto: "/employees/ana.jpg",
    employeeRole: "camareira",
    roomNumber: 401,
    startTime: new Date(Date.now() - 300 * 60000), // 5 horas atrás
    endTime: new Date(Date.now() - 260 * 60000), // 4.3 horas atrás
    score: 10,
    supervisorId: 15,
    supervisorName: "Fernanda Bastos"
  },
  {
    id: 5,
    taskId: 105,
    employeeId: 3,
    employeeName: "Joana Santos",
    employeePhoto: "/employees/joana.jpg",
    employeeRole: "camareira",
    roomNumber: 206,
    startTime: new Date(Date.now() - 360 * 60000), // 6 horas atrás
    endTime: new Date(Date.now() - 320 * 60000), // 5.3 horas atrás
    score: 9,
    supervisorId: 15,
    supervisorName: "Fernanda Bastos"
  }
];

export function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados da API
    setLoading(true);
    setTimeout(() => {
      setActivities(sampleActivities);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-start space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  const roleColors: Record<string, string> = {
    camareira: "bg-blue-100 text-blue-800",
    passadeira: "bg-amber-100 text-amber-800",
    lavanderia: "bg-green-100 text-green-800"
  };

  const roleTitles: Record<string, string> = {
    camareira: "Camareira",
    passadeira: "Passadeira",
    lavanderia: "Lavanderia"
  };

  const scoreColors: Record<number, string> = {
    10: "text-green-600",
    9: "text-green-500",
    8: "text-yellow-500",
    7: "text-yellow-600",
    6: "text-orange-500",
    5: "text-orange-600",
    4: "text-red-400",
    3: "text-red-500",
    2: "text-red-600",
    1: "text-red-700",
    0: "text-red-700",
  };

  return (
    <ScrollArea className="h-[350px]">
      <div className="space-y-6">
        {activities.map((activity) => {
          const duration = Math.round((activity.endTime.getTime() - activity.startTime.getTime()) / (1000 * 60));
          
          return (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={activity.employeePhoto} alt={activity.employeeName} />
                <AvatarFallback>
                  {activity.employeeName?.split(' ').map(name => name[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{activity.employeeName}</span>
                  <Badge className={`text-xs ${roleColors[activity.employeeRole]}`} variant="outline">
                    {roleTitles[activity.employeeRole]}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Atendeu o quarto <span className="font-medium">{activity.roomNumber}</span> em <span className="font-medium">{duration} minutos</span>
                </p>
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">
                    {formatDistanceToNow(activity.endTime, { addSuffix: true, locale: ptBR })}
                  </span>
                  
                  {activity.score !== undefined && (
                    <>
                      <span className="text-muted-foreground">•</span>
                      <span className={`font-medium ${scoreColors[activity.score]}`}>
                        Nota: {activity.score}/10
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
} 