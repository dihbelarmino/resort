"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Clipboard,
  Star,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

// Simulação de dados - em um app real, viriam da API
const tarefasSimuladas = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  tipo: "camareira",
  quarto: 100 + i,
  status: "finalizado",
  responsavelId: i < 10 ? 2 : 3, // Diferentes camareiras
  responsavelNome: i < 10 ? "Maria Silva" : "Ana Santos",
  inicio: new Date(new Date().setHours(8, 0, 0)).toLocaleTimeString(),
  fim: new Date(new Date().setHours(9, 30, 0)).toLocaleTimeString(),
  avaliado: i < 5,
  nota: i < 5 ? Math.floor(Math.random() * 3) + 8 : null, // Notas entre 8 e 10
}));

export default function SupervisaoCamareiraPage() {
  const { data: session } = useSession();
  const [tarefas, setTarefas] = useState(tarefasSimuladas);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<number | null>(null);
  const [dialogAberto, setDialogAberto] = useState(false);
  const [notaSelecionada, setNotaSelecionada] = useState<number | null>(null);
  const [observacao, setObservacao] = useState("");

  const avaliarTarefa = (id: number) => {
    setTarefaSelecionada(id);
    setNotaSelecionada(null);
    setObservacao("");
    setDialogAberto(true);
  };

  const salvarAvaliacao = () => {
    if (tarefaSelecionada !== null && notaSelecionada !== null) {
      setTarefas(
        tarefas.map((tarefa) =>
          tarefa.id === tarefaSelecionada
            ? {
                ...tarefa,
                avaliado: true,
                nota: notaSelecionada,
              }
            : tarefa
        )
      );

      toast.success(`Avaliação registrada para o quarto ${tarefas.find(t => t.id === tarefaSelecionada)?.quarto}!`);
      setDialogAberto(false);
    } else {
      toast.error("Por favor, selecione uma nota.");
    }
  };

  // Filtrar tarefas a serem avaliadas (finalizadas mas não avaliadas)
  const tarefasParaAvaliar = tarefas.filter(
    (tarefa) => tarefa.status === "finalizado" && !tarefa.avaliado
  );

  const tarefasAvaliadas = tarefas.filter(
    (tarefa) => tarefa.status === "finalizado" && tarefa.avaliado
  ).slice(0, 5); // Mostrar apenas as 5 mais recentes

  // Para calcular o desempenho por camareira
  const desempenhoPorCamareira = tarefas
    .filter(t => t.avaliado)
    .reduce((acc, tarefa) => {
      const nome = tarefa.responsavelNome;
      if (!acc[nome]) {
        acc[nome] = { total: 0, soma: 0, media: 0, tarefas: 0 };
      }
      acc[nome].tarefas += 1;
      acc[nome].soma += tarefa.nota || 0;
      acc[nome].media = acc[nome].soma / acc[nome].tarefas;
      return acc;
    }, {} as Record<string, { total: number; soma: number; media: number; tarefas: number }>);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Supervisão de Camareiras</h1>
        <p className="text-muted-foreground">
          Avalie os serviços realizados pelas camareiras
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Clipboard className="mr-2 h-5 w-5 text-blue-500" />
              Serviços para Avaliar
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            {tarefasParaAvaliar.length > 0 ? (
              <div className="space-y-3">
                {tarefasParaAvaliar.map((tarefa) => (
                  <div
                    key={tarefa.id}
                    className="flex items-center justify-between border p-3 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">Quarto {tarefa.quarto}</p>
                      <p className="text-xs text-muted-foreground">
                        Concluído por {tarefa.responsavelNome} às {tarefa.fim}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Duração: {tarefa.inicio} - {tarefa.fim}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => avaliarTarefa(tarefa.id)}
                    >
                      Avaliar
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-4">
                Não há serviços pendentes de avaliação
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Star className="mr-2 h-5 w-5 text-yellow-500" />
              Avaliações Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            {tarefasAvaliadas.length > 0 ? (
              <div className="space-y-3">
                {tarefasAvaliadas.map((tarefa) => (
                  <div
                    key={tarefa.id}
                    className="flex items-center justify-between border border-yellow-200 bg-yellow-50 p-3 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">Quarto {tarefa.quarto}</p>
                      <p className="text-xs text-muted-foreground">
                        Concluído por {tarefa.responsavelNome}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-lg">{tarefa.nota}</span>
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-4">
                Nenhuma avaliação recente
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Desempenho por Camareira</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(desempenhoPorCamareira).map(([nome, dados]) => (
            <Card key={nome}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{nome}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Nota média:</span>
                  <div className="flex items-center">
                    <span className="font-bold text-lg mr-1">{dados.media.toFixed(1)}</span>
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total de serviços:</span>
                  <span className="font-medium">{dados.tarefas}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Histórico Completo</h2>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quarto</TableHead>
                  <TableHead>Camareira</TableHead>
                  <TableHead>Horário</TableHead>
                  <TableHead>Duração</TableHead>
                  <TableHead>Nota</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tarefas
                  .filter(t => t.status === "finalizado")
                  .map((tarefa) => {
                    // Calcular duração aproximada
                    const inicio = new Date(`01/01/2025 ${tarefa.inicio}`);
                    const fim = new Date(`01/01/2025 ${tarefa.fim}`);
                    const duracao = Math.round((fim.getTime() - inicio.getTime()) / (1000 * 60));
                    
                    return (
                      <TableRow key={tarefa.id}>
                        <TableCell className="font-medium">
                          {tarefa.quarto}
                        </TableCell>
                        <TableCell>{tarefa.responsavelNome}</TableCell>
                        <TableCell>{tarefa.fim}</TableCell>
                        <TableCell>{duracao} min</TableCell>
                        <TableCell>
                          {tarefa.avaliado ? (
                            <Badge variant="outline" className="bg-green-100">
                              {tarefa.nota}/10
                            </Badge>
                          ) : (
                            <Badge variant="outline">Não avaliado</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          {!tarefa.avaliado && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => avaliarTarefa(tarefa.id)}
                            >
                              Avaliar
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Dialog open={dialogAberto} onOpenChange={setDialogAberto}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              Avaliar Serviço
            </DialogTitle>
            <DialogDescription>
              {tarefaSelecionada && (
                <>
                  Quarto {tarefas.find(t => t.id === tarefaSelecionada)?.quarto} - 
                  Atendido por {tarefas.find(t => t.id === tarefaSelecionada)?.responsavelNome}
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div>
              <h3 className="text-sm font-medium mb-2">Nota de Avaliação (0-10)</h3>
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: 11 }, (_, i) => (
                  <Button
                    key={i}
                    variant={notaSelecionada === i ? "default" : "outline"}
                    size="sm"
                    className={`w-10 h-10 ${
                      i < 5
                        ? "hover:bg-red-100"
                        : i < 7
                        ? "hover:bg-yellow-100"
                        : "hover:bg-green-100"
                    } ${
                      notaSelecionada === i &&
                      (i < 5
                        ? "bg-red-500"
                        : i < 7
                        ? "bg-yellow-500"
                        : "bg-green-500")
                    }`}
                    onClick={() => setNotaSelecionada(i)}
                  >
                    {i}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Observações (opcional)</h3>
              <Textarea
                placeholder="Insira comentários sobre o serviço..."
                value={observacao}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setObservacao(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button onClick={salvarAvaliacao} disabled={notaSelecionada === null}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Salvar Avaliação
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 