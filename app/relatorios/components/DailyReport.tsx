"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Bed, Calendar, ClipboardList, Users } from "lucide-react";

interface QuartoData {
  numero: number;
  cliente: string;
  checkIn: boolean;
  checkOut: boolean;
  tipo: string;
}

interface ServicoData {
  tipo: string;
  quarto: number;
  status: string;
  funcionario: string;
  nota: number | null;
}

interface DailyReportData {
  data: string;
  diaDaSemana: string;
  checkIns: number;
  checkOuts: number;
  ocupacaoTotal: number;
  tarefasConcluidas: number;
  quartos: QuartoData[];
  servicos: ServicoData[];
}

interface DailyReportProps {
  data: DailyReportData;
}

const statusMap = {
  pendente: { label: 'Pendente', color: 'bg-yellow-100 text-yellow-800' },
  em_andamento: { label: 'Em Andamento', color: 'bg-blue-100 text-blue-800' },
  concluida: { label: 'Concluída', color: 'bg-green-100 text-green-800' },
  avaliada: { label: 'Avaliada', color: 'bg-purple-100 text-purple-800' }
};

const tipoMap = {
  camareira: { label: 'Camareira', color: 'bg-pink-100 text-pink-800' },
  passadeira: { label: 'Passadeira', color: 'bg-indigo-100 text-indigo-800' },
  lavanderia: { label: 'Lavanderia', color: 'bg-cyan-100 text-cyan-800' }
};

export default function DailyReport({ data }: DailyReportProps) {
  // Format date as DD/MM/YYYY
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };
  
  // Format date from string
  const dataObj = new Date(data.data);
  const dataFormatada = format(dataObj, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  
  return (
    <div className="space-y-4 mt-2">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">
                {dataFormatada} - {data.diaDaSemana}
              </CardTitle>
              <CardDescription>
                Relatório detalhado de atividades e ocupação
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-blue-800">Check-ins</CardTitle>
                  <Calendar className="h-4 w-4 text-blue-800" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-800">{data.checkIns}</div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-green-800">Check-outs</CardTitle>
                  <Calendar className="h-4 w-4 text-green-800" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-800">{data.checkOuts}</div>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-purple-800">Ocupação Total</CardTitle>
                  <Bed className="h-4 w-4 text-purple-800" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-800">{data.ocupacaoTotal}</div>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-amber-800">Tarefas Concluídas</CardTitle>
                  <ClipboardList className="h-4 w-4 text-amber-800" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-800">{data.tarefasConcluidas}</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <Bed className="h-5 w-5 text-gray-500" />
              <CardTitle>Quartos em Movimento</CardTitle>
            </div>
            <CardDescription>
              Quartos com check-in e check-out na data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Quarto</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.quartos.map((quarto) => (
                    <TableRow key={`quarto-${quarto.numero}`}>
                      <TableCell className="font-medium">{quarto.numero}</TableCell>
                      <TableCell>{quarto.cliente}</TableCell>
                      <TableCell>
                        <span className="capitalize">{quarto.tipo}</span>
                      </TableCell>
                      <TableCell>
                        {quarto.checkIn && !quarto.checkOut && (
                          <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                            Check-in
                          </span>
                        )}
                        {quarto.checkOut && !quarto.checkIn && (
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            Check-out
                          </span>
                        )}
                        {quarto.checkIn && quarto.checkOut && (
                          <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
                            Check-in/out
                          </span>
                        )}
                        {!quarto.checkIn && !quarto.checkOut && (
                          <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                            Ocupado
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <ClipboardList className="h-5 w-5 text-gray-500" />
              <CardTitle>Serviços do Dia</CardTitle>
            </div>
            <CardDescription>
              Tarefas realizadas ou em andamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Quarto</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Funcionário</TableHead>
                    <TableHead>Nota</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.servicos.map((servico, index) => (
                    <TableRow key={`servico-${index}`}>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${tipoMap[servico.tipo as keyof typeof tipoMap]?.color || 'bg-gray-100 text-gray-800'}`}>
                          {tipoMap[servico.tipo as keyof typeof tipoMap]?.label || servico.tipo}
                        </span>
                      </TableCell>
                      <TableCell>{servico.quarto}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${statusMap[servico.status as keyof typeof statusMap]?.color || 'bg-gray-100 text-gray-800'}`}>
                          {statusMap[servico.status as keyof typeof statusMap]?.label || servico.status}
                        </span>
                      </TableCell>
                      <TableCell>{servico.funcionario}</TableCell>
                      <TableCell>
                        {servico.nota !== null ? (
                          <div className="flex items-center">
                            <span className={
                              servico.nota >= 4 ? "text-green-600" : 
                              servico.nota >= 3 ? "text-amber-600" : 
                              "text-red-600"
                            }>
                              {servico.nota}/5
                            </span>
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 