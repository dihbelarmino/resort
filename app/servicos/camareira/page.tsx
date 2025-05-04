"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Skeleton } from "@/components/ui/skeleton";

interface Task {
  id: number;
  roomNumber: number;
  roomFloor: number;
  status: "pendente" | "em_andamento" | "concluida";
  createdAt: Date;
  startTime?: Date;
  endTime?: Date;
  note?: string;
  priority: "normal" | "urgente";
}

const sampleTasks: Task[] = [
  { 
    id: 1, 
    roomNumber: 204, 
    roomFloor: 2,
    status: "pendente", 
    createdAt: new Date(Date.now() - 120 * 60000), 
    priority: "normal" 
  },
  { 
    id: 2, 
    roomNumber: 315, 
    roomFloor: 3,
    status: "pendente", 
    createdAt: new Date(Date.now() - 90 * 60000), 
    priority: "urgente" 
  },
  { 
    id: 3, 
    roomNumber: 108, 
    roomFloor: 1,
    status: "pendente", 
    createdAt: new Date(Date.now() - 60 * 60000), 
    priority: "normal" 
  },
  { 
    id: 4, 
    roomNumber: 411, 
    roomFloor: 4,
    status: "em_andamento", 
    createdAt: new Date(Date.now() - 150 * 60000),
    startTime: new Date(Date.now() - 30 * 60000),
    priority: "normal" 
  },
  { 
    id: 5, 
    roomNumber: 206, 
    roomFloor: 2,
    status: "concluida", 
    createdAt: new Date(Date.now() - 180 * 60000),
    startTime: new Date(Date.now() - 120 * 60000),
    endTime: new Date(Date.now() - 60 * 60000),
    priority: "urgente" 
  },
  { 
    id: 6, 
    roomNumber: 312, 
    roomFloor: 3,
    status: "concluida", 
    createdAt: new Date(Date.now() - 240 * 60000),
    startTime: new Date(Date.now() - 180 * 60000),
    endTime: new Date(Date.now() - 120 * 60000),
    priority: "normal" 
  }
];

export default function CamareiraPage() {
  const [availableTasks, setAvailableTasks] = useState<Task[]>([]);
  const [myTasks, setMyTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de carregamento de dados da API
    setTimeout(() => {
      setAvailableTasks(sampleTasks.filter(task => task.status === "pendente"));
      setMyTasks(sampleTasks.filter(task => task.status === "em_andamento"));
      setCompletedTasks(sampleTasks.filter(task => task.status === "concluida"));
      setLoading(false);
    }, 1000);
  }, []);

  const claimTask = (taskId: number) => {
    // Simulação de requisição para API
    setAvailableTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    
    const claimedTask = sampleTasks.find(task => task.id === taskId);
    if (claimedTask) {
      const updatedTask = { 
        ...claimedTask, 
        status: "em_andamento" as const,
        startTime: new Date()
      };
      setMyTasks(prevTasks => [...prevTasks, updatedTask]);
    }
  };

  const completeTask = (taskId: number) => {
    // Simulação de requisição para API
    setMyTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    
    const taskToComplete = sampleTasks.find(task => task.id === taskId);
    if (taskToComplete) {
      const completedTask = { 
        ...taskToComplete, 
        status: "concluida" as const,
        endTime: new Date()
      };
      setCompletedTasks(prevTasks => [...prevTasks, completedTask]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Serviço de Camareira</h1>
        <p className="text-muted-foreground">
          Gerencie as solicitações de serviço de limpeza de quartos
        </p>
      </div>

      <Tabs defaultValue="available" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="available">
            Disponíveis
            {!loading && availableTasks.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {availableTasks.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="inprogress">
            Em Andamento
            {!loading && myTasks.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {myTasks.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="completed">
            Concluídos
            {!loading && completedTasks.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {completedTasks.length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-4 w-20" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-28" />
                </CardFooter>
              </Card>
            ))
          ) : availableTasks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableTasks.map(task => (
                <Card key={task.id} className={task.priority === "urgente" ? "border-red-500" : ""}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>Quarto {task.roomNumber}</CardTitle>
                      {task.priority === "urgente" && (
                        <Badge variant="destructive">Urgente</Badge>
                      )}
                    </div>
                    <CardDescription>
                      {task.roomFloor}º Andar
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      Solicitado {formatDistanceToNow(task.createdAt, { addSuffix: true, locale: ptBR })}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" onClick={() => claimTask(task.id)}>
                      Assumir Tarefa
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <CheckCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium">Nenhuma tarefa disponível</h3>
              <p className="text-muted-foreground text-center mt-2">
                Não há tarefas disponíveis no momento. Volte mais tarde.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="inprogress" className="space-y-4">
          {loading ? (
            <Skeleton className="h-[300px] w-full" />
          ) : myTasks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {myTasks.map(task => (
                <Card key={task.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>Quarto {task.roomNumber}</CardTitle>
                      {task.priority === "urgente" && (
                        <Badge variant="destructive">Urgente</Badge>
                      )}
                    </div>
                    <CardDescription>
                      {task.roomFloor}º Andar
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        Início {formatDistanceToNow(task.startTime!, { addSuffix: true, locale: ptBR })}
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full">
                        <div className="bg-green-500 h-2 rounded-full w-1/2" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" onClick={() => completeTask(task.id)}>
                      Concluir Tarefa
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium">Nenhuma tarefa em andamento</h3>
              <p className="text-muted-foreground text-center mt-2">
                Você não tem tarefas em andamento. Assuma uma tarefa pendente.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {loading ? (
            <Skeleton className="h-[300px] w-full" />
          ) : completedTasks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {completedTasks.map(task => {
                const duration = task.endTime && task.startTime 
                  ? Math.round((task.endTime.getTime() - task.startTime.getTime()) / (1000 * 60))
                  : 0;
                
                return (
                  <Card key={task.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>Quarto {task.roomNumber}</CardTitle>
                        <Badge variant="outline" className="bg-green-50">Concluído</Badge>
                      </div>
                      <CardDescription>
                        {task.roomFloor}º Andar
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          Concluído {formatDistanceToNow(task.endTime!, { addSuffix: true, locale: ptBR })}
                        </div>
                        <p className="text-sm">
                          Tempo de execução: <span className="font-medium">{duration} minutos</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <CheckCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium">Nenhuma tarefa concluída</h3>
              <p className="text-muted-foreground text-center mt-2">
                Você ainda não concluiu nenhuma tarefa hoje.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
} 