"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ReportData {
  data: string;
  diaDaSemana: string;
  checkIns: number;
  checkOuts: number;
  ocupacaoTotal: number;
  tarefasConcluidas: number;
}

interface ReportsTableProps {
  data: ReportData[];
}

export default function ReportsTable({ data }: ReportsTableProps) {
  // Calculate totals for the footer
  const totals = data.reduce(
    (acc, item) => ({
      checkIns: acc.checkIns + item.checkIns,
      checkOuts: acc.checkOuts + item.checkOuts,
      ocupacaoTotal: acc.ocupacaoTotal + item.ocupacaoTotal,
      tarefasConcluidas: acc.tarefasConcluidas + item.tarefasConcluidas,
    }),
    { checkIns: 0, checkOuts: 0, ocupacaoTotal: 0, tarefasConcluidas: 0 }
  );

  // Function to format date as DD/MM/YYYY
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Dia da Semana</TableHead>
            <TableHead className="text-right">Check-ins</TableHead>
            <TableHead className="text-right">Check-outs</TableHead>
            <TableHead className="text-right">Ocupação Total</TableHead>
            <TableHead className="text-right">Tarefas Concluídas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.data}>
              <TableCell className="font-medium">{formatDate(item.data)}</TableCell>
              <TableCell>{item.diaDaSemana}</TableCell>
              <TableCell className="text-right">{item.checkIns}</TableCell>
              <TableCell className="text-right">{item.checkOuts}</TableCell>
              <TableCell className="text-right">{item.ocupacaoTotal}</TableCell>
              <TableCell className="text-right">{item.tarefasConcluidas}</TableCell>
            </TableRow>
          ))}
          <TableRow className="bg-muted/50">
            <TableCell colSpan={2} className="font-medium">
              Totais
            </TableCell>
            <TableCell className="text-right font-medium">{totals.checkIns}</TableCell>
            <TableCell className="text-right font-medium">{totals.checkOuts}</TableCell>
            <TableCell className="text-right font-medium">
              {Math.round(totals.ocupacaoTotal / data.length)} (média)
            </TableCell>
            <TableCell className="text-right font-medium">{totals.tarefasConcluidas}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
} 