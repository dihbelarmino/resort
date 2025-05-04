"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Star, CheckCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface CompletedTask {
  id: number;
  taskId: number;
  taskType: "camareira" | "passadeira" | "lavanderia";
  roomNumber: number;
  roomFloor: number;
  employeeId: number;
  employeeName: string;
  employeePhoto?: string;
  startTime: Date;
  endTime: Date;
  score?: number;
  note?: string;
  evaluatedAt?: Date;
}

// Exemplo de dados
const sampleTasks: CompletedTask[] = [
  { 
    id: 1, 
    taskId: 101,
    taskType: "camareira",
    roomNumber: 204, 
    roomFloor: 2,
    employeeId: 1,
    employeeName: "Maria Silva",
    employeePhoto: "/employees/maria.jpg",
    startTime: new Date(Date.now() - 180 * 60000), // 3 horas atrás
    endTime: new Date(Date.now() - 120 * 60000) // 2 horas atrás
  },
  { 
    id: 2, 
    taskId: 102,
    taskType: "camareira",
    roomNumber: 315, 
    roomFloor: 3,
    employeeId: 2,
    employeeName: "Ana Costa",
    employeePhoto: "/employees/ana.jpg",
    startTime: new Date(Date.now() - 240 * 60000), // 4 horas atrás
    endTime: new Date(Date.now() - 190 * 60000) // 3.1 horas atrás
  },
  { 
    id: 3, 
    taskId: 103,
    taskType: "passadeira",
    roomNumber: 108, 
    roomFloor: 1,
    employeeId: 5,
    employeeName: "Carla Lima",
    employeePhoto: "/employees/carla.jpg",
    startTime: new Date(Date.now() - 300 * 60000), // 5 horas atrás
    endTime: new Date(Date.now() - 250 * 60000) // 4.1 horas atrás
  },
  { 
    id: 4, 
    taskId: 104,
    taskType: "passadeira",
    roomNumber: 411, 
    roomFloor: 4,
    employeeId: 6,
    employeeName: "Teresa Rocha",
    employeePhoto: "/employees/teresa.jpg",
    startTime: new Date(Date.now() - 360 * 60000), // 6 horas atrás
    endTime: new Date(Date.now() - 320 * 60000), // 5.3 horas atrás
    score: 10,
    note: "Serviço impecável, muito bem feito.",
    evaluatedAt: new Date(Date.now() - 300 * 60000) // 5 horas atrás
  },
  { 
    id: 5, 
    taskId: 105,
    taskType: "lavanderia",
    roomNumber: 206, 
    roomFloor: 2,
    employeeId: 8,
    employeeName: "Ricardo Almeida",
    employeePhoto: "/employees/ricardo.jpg",
    startTime: new Date(Date.now() - 400 * 60000), // 6.6 horas atrás
    endTime: new Date(Date.now() - 350 * 60000) // 5.8 horas atrás
  },
  { 
    id: 6, 
    taskId: 106,
    taskType: "lavanderia",
    roomNumber: 312, 
    roomFloor: 3,
    employeeId: 9,
    employeeName: "Paulo Castro",
    employeePhoto: "/employees/paulo.jpg",
    startTime: new Date(Date.now() - 420 * 60000), // 7 horas atrás
    endTime: new Date(Date.now() - 380 * 60000), // 6.3 horas atrás
    score: 9,
    note: "Ótimo trabalho, apenas pequeno atraso.",
    evaluatedAt: new Date(Date.now() - 350 * 60000) // 5.8 horas atrás
  }
];

export default function SupervisoresPage() {
  const [pendingEvaluations, setPendingEvaluations] = useState<CompletedTask[]>([]);
  const [evaluatedTasks, setEvaluatedTasks] = useState<CompletedTask[]>([]);
  const [activeTaskType, setActiveTaskType] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  
  // Estado para o modal de avaliação
  const [selectedTask, setSelectedTask] = useState<CompletedTask | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Simulação de carregamento de dados da API
    setTimeout(() => {
      setPendingEvaluations(sampleTasks.filter(task => !task.score));
      setEvaluatedTasks(sampleTasks.filter(task => task.score !== undefined));
      setLoading(false);
    }, 1000);
  }, []);

  const filterTasksByType = (tasks: CompletedTask[], type: string) => {
    if (type === "all") return tasks;
    return tasks.filter(task => task.taskType === type);
  };

  const handleOpenEvaluation = (task: CompletedTask) => {
    setSelectedTask(task);
    setScore(null);
    setNote("");
    setIsDialogOpen(true);
  };

  const handleEvaluateTask = () => {
    if (!selectedTask || score === null) return;
    
    // Simulação de envio para API
    const evaluatedTask = {
      ...selectedTask,
      score,
      note,
      evaluatedAt: new Date()
    };
    
    // Atualizar estados
    setPendingEvaluations(prev => prev.filter(task => task.id !== selectedTask.id));
    setEvaluatedTasks(prev => [evaluatedTask, ...prev]);
    
    setIsDialogOpen(false);
    toast.success(`Avaliação do serviço de ${selectedTask.employeeName} registrada com sucesso!`);
  };

  const getServiceTypeLabel = (type: string) => {
    switch (type) {
      case "camareira": return "Camareira";
      case "passadeira": return "Passadeira";
      case "lavanderia": return "Lavanderia";
      default: return "Todos";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Supervisão de Serviços</h1>
        <p className="text-muted-foreground">
          Avalie o desempenho dos funcionários do resort
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button 
          variant={activeTaskType === "all" ? "default" : "outline"} 
          onClick={() => setActiveTaskType("all")}
        >
          Todos
        </Button>
        <Button 
          variant={activeTaskType === "camareira" ? "default" : "outline"} 
          onClick={() => setActiveTaskType("camareira")}
        >
          Camareiras
        </Button>
        <Button 
          variant={activeTaskType === "passadeira" ? "default" : "outline"} 
          onClick={() => setActiveTaskType("passadeira")}
        >
          Passadeiras
        </Button>
        <Button 
          variant={activeTaskType === "lavanderia" ? "default" : "outline"} 
          onClick={() => setActiveTaskType("lavanderia")}
        >
          Lavanderia
        </Button>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pending">
            Pendentes de Avaliação
            {!loading && pendingEvaluations.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {filterTasksByType(pendingEvaluations, activeTaskType).length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="evaluated">
            Avaliados
            {!loading && evaluatedTasks.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {filterTasksByType(evaluatedTasks, activeTaskType).length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-[150px] w-full" />
            ))
          ) : filterTasksByType(pendingEvaluations, activeTaskType).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterTasksByType(pendingEvaluations, activeTaskType).map(task => {
                const duration = Math.round((task.endTime.getTime() - task.startTime.getTime()) / (1000 * 60));
                
                return (
                  <Card key={task.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>Quarto {task.roomNumber}</CardTitle>
                        <Badge variant="outline" className={
                          task.taskType === "camareira" ? "bg-blue-50 text-blue-700" :
                          task.taskType === "passadeira" ? "bg-amber-50 text-amber-700" :
                          "bg-green-50 text-green-700"
                        }>
                          {getServiceTypeLabel(task.taskType)}
                        </Badge>
                      </div>
                      <CardDescription>
                        {task.roomFloor}º Andar
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={task.employeePhoto} alt={task.employeeName} />
                          <AvatarFallback>
                            {task.employeeName.split(' ').map(name => name[0]).join('').toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{task.employeeName}</p>
                          <p className="text-xs text-muted-foreground">
                            ID #{task.employeeId}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          Duração: {duration} minutos
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          Concluído {formatDistanceToNow(task.endTime, { addSuffix: true, locale: ptBR })}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button size="sm" className="w-full" onClick={() => handleOpenEvaluation(task)}>
                        Avaliar Serviço
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <CheckCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium">Nenhuma avaliação pendente</h3>
              <p className="text-muted-foreground text-center mt-2">
                Todos os serviços já foram avaliados.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="evaluated" className="space-y-4">
          {loading ? (
            <Skeleton className="h-[300px] w-full" />
          ) : filterTasksByType(evaluatedTasks, activeTaskType).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterTasksByType(evaluatedTasks, activeTaskType).map(task => {
                const duration = Math.round((task.endTime.getTime() - task.startTime.getTime()) / (1000 * 60));
                
                return (
                  <Card key={task.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>Quarto {task.roomNumber}</CardTitle>
                        <Badge variant="outline" className={
                          task.taskType === "camareira" ? "bg-blue-50 text-blue-700" :
                          task.taskType === "passadeira" ? "bg-amber-50 text-amber-700" :
                          "bg-green-50 text-green-700"
                        }>
                          {getServiceTypeLabel(task.taskType)}
                        </Badge>
                      </div>
                      <CardDescription>
                        {task.roomFloor}º Andar
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={task.employeePhoto} alt={task.employeeName} />
                          <AvatarFallback>
                            {task.employeeName.split(' ').map(name => name[0]).join('').toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-1">
                            <p className="font-medium text-sm">{task.employeeName}</p>
                            <div className="flex items-center ml-1">
                              <Star className="fill-yellow-400 stroke-yellow-400 h-3.5 w-3.5" />
                              <span className="text-sm ml-0.5 font-medium">{task.score}/10</span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Duração: {duration} minutos
                          </p>
                        </div>
                      </div>
                      
                      {task.note && (
                        <div className="bg-gray-50 p-2 rounded-md text-sm italic">
                          "{task.note}"
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <CheckCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium">Nenhuma avaliação encontrada</h3>
              <p className="text-muted-foreground text-center mt-2">
                Não há avaliações registradas para exibir.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Modal de Avaliação */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Avaliar Serviço</DialogTitle>
            <DialogDescription>
              {selectedTask && `Avalie o serviço de ${selectedTask.employeeName} no quarto ${selectedTask.roomNumber}`}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <Button
                  key={i}
                  variant={score === i + 1 ? "default" : "outline"}
                  size="sm"
                  className="h-10 w-10 rounded-full"
                  onClick={() => setScore(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="note">Observações (opcional)</Label>
              <Textarea 
                id="note" 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Descreva os pontos positivos ou negativos do serviço" 
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
            <Button onClick={handleEvaluateTask} disabled={score === null}>Salvar Avaliação</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 