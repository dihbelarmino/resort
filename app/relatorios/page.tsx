"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { 
  BarChart,
  Calendar as CalendarIcon,
  Download,
  Filter,
  Loader2,
  SunMedium,
  CalendarDays
} from "lucide-react";
import ReportsTable from "./components/ReportsTable";
import ReportsChart from "./components/ReportsChart";
import DailyReport from "./components/DailyReport";

// Days of week in Portuguese
const diasDaSemana = [
  { value: 0, label: "Domingo" },
  { value: 1, label: "Segunda-feira" },
  { value: 2, label: "Terça-feira" },
  { value: 3, label: "Quarta-feira" },
  { value: 4, label: "Quinta-feira" },
  { value: 5, label: "Sexta-feira" },
  { value: 6, label: "Sábado" },
];

// Months in Portuguese
const meses = [
  { value: 0, label: "Janeiro" },
  { value: 1, label: "Fevereiro" },
  { value: 2, label: "Março" },
  { value: 3, label: "Abril" },
  { value: 4, label: "Maio" },
  { value: 5, label: "Junho" },
  { value: 6, label: "Julho" },
  { value: 7, label: "Agosto" },
  { value: 8, label: "Setembro" },
  { value: 9, label: "Outubro" },
  { value: 10, label: "Novembro" },
  { value: 11, label: "Dezembro" },
];

export default function RelatoriosPage() {
  // Current year and 5 years back for the select
  const anoAtual = new Date().getFullYear();
  const anos = Array.from({ length: 6 }, (_, i) => anoAtual - i);
  
  // Selected filters state
  const [reportType, setReportType] = useState<"mensal" | "diario">("mensal");
  const [diasSelecionados, setDiasSelecionados] = useState<number[]>([]);
  const [mesSelecionado, setMesSelecionado] = useState<string>(new Date().getMonth().toString());
  const [anoSelecionado, setAnoSelecionado] = useState<string>(anoAtual.toString());
  const [dataSelecionada, setDataSelecionada] = useState<Date | undefined>(new Date());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reportData, setReportData] = useState<any[]>([]);
  const [viewMode, setViewMode] = useState<'table' | 'chart'>('table');
  const [dailyReportData, setDailyReportData] = useState<any | null>(null);

  // Toggle day selection
  const toggleDia = (dia: number) => {
    setDiasSelecionados(prev => 
      prev.includes(dia) 
        ? prev.filter(d => d !== dia) 
        : [...prev, dia]
    );
  };

  // Generate report based on filters
  const gerarRelatorio = async () => {
    setIsLoading(true);
    try {
      // In a real application, this would be an API call
      // For now, we'll simulate a delay and generate mock data
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (reportType === "mensal") {
        // Generate mock data based on selected filters
        const dadosSimulados = gerarDadosSimulados();
        setReportData(dadosSimulados);
      } else {
        // Generate daily report data
        const diarioSimulado = gerarDadosDiarios();
        setDailyReportData(diarioSimulado);
      }
    } catch (error) {
      console.error("Erro ao gerar relatório:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate mock data for the monthly report
  const gerarDadosSimulados = () => {
    const mes = parseInt(mesSelecionado);
    const ano = parseInt(anoSelecionado);
    
    // Get the last day of the selected month
    const ultimoDiaMes = new Date(ano, mes + 1, 0).getDate();
    
    // Filter days that match the selected weekdays
    const diasFiltrados = Array.from({ length: ultimoDiaMes }, (_, i) => {
      const data = new Date(ano, mes, i + 1);
      const diaDaSemana = data.getDay();
      
      // If no days selected or this day is in the selected days
      if (diasSelecionados.length === 0 || diasSelecionados.includes(diaDaSemana)) {
        return {
          data: data.toISOString().split('T')[0],
          diaDaSemana: diasDaSemana[diaDaSemana].label,
          checkIns: Math.floor(Math.random() * 10) + 1,
          checkOuts: Math.floor(Math.random() * 8) + 1,
          ocupacaoTotal: Math.floor(Math.random() * 30) + 10,
          tarefasConcluidas: Math.floor(Math.random() * 15) + 5,
        };
      }
      return null;
    }).filter(Boolean);
    
    return diasFiltrados;
  };

  // Generate mock data for the daily report
  const gerarDadosDiarios = () => {
    if (!dataSelecionada) return null;

    const diaDaSemana = diasDaSemana[dataSelecionada.getDay()].label;
    const dataFormatada = format(dataSelecionada, 'yyyy-MM-dd');
    
    // Generate mock data for the selected date
    return {
      data: dataFormatada,
      diaDaSemana,
      checkIns: Math.floor(Math.random() * 10) + 1,
      checkOuts: Math.floor(Math.random() * 8) + 1,
      ocupacaoTotal: Math.floor(Math.random() * 30) + 10,
      tarefasConcluidas: Math.floor(Math.random() * 15) + 5,
      // Add more specific data for daily report
      quartos: Array.from({ length: 5 }, (_, i) => ({
        numero: Math.floor(Math.random() * 100) + 100,
        cliente: `Cliente ${Math.floor(Math.random() * 20) + 1}`,
        checkIn: Math.random() > 0.5,
        checkOut: Math.random() > 0.7,
        tipo: ['standard', 'luxo', 'suite'][Math.floor(Math.random() * 3)]
      })),
      servicos: Array.from({ length: 8 }, (_, i) => ({
        tipo: ['camareira', 'passadeira', 'lavanderia'][Math.floor(Math.random() * 3)],
        quarto: Math.floor(Math.random() * 100) + 100,
        status: ['pendente', 'em_andamento', 'concluida', 'avaliada'][Math.floor(Math.random() * 4)],
        funcionario: `Funcionário ${Math.floor(Math.random() * 10) + 1}`,
        nota: Math.random() > 0.3 ? Math.floor(Math.random() * 3) + 3 : null
      }))
    };
  };

  // Handle download report
  const downloadRelatorio = () => {
    if (reportType === "mensal" && !reportData.length) return;
    if (reportType === "diario" && !dailyReportData) return;
    
    let csv = '';
    let filename = '';
    
    if (reportType === "mensal") {
      // Create CSV content for monthly report
      const headers = Object.keys(reportData[0]).join(',');
      const rows = reportData.map(row => Object.values(row).join(',')).join('\n');
      csv = `${headers}\n${rows}`;
      filename = `relatorio_mensal_${anoSelecionado}_${parseInt(mesSelecionado) + 1}_${new Date().getTime()}.csv`;
    } else {
      // Create CSV content for daily report
      const basicData = {
        data: dailyReportData.data,
        diaDaSemana: dailyReportData.diaDaSemana,
        checkIns: dailyReportData.checkIns,
        checkOuts: dailyReportData.checkOuts,
        ocupacaoTotal: dailyReportData.ocupacaoTotal,
        tarefasConcluidas: dailyReportData.tarefasConcluidas
      };
      
      const basicHeaders = Object.keys(basicData).join(',');
      const basicRow = Object.values(basicData).join(',');
      
      const quartosHeaders = 'numero,cliente,checkIn,checkOut,tipo';
      const quartosRows = dailyReportData.quartos.map(q => 
        `${q.numero},${q.cliente},${q.checkIn},${q.checkOut},${q.tipo}`
      ).join('\n');
      
      const servicosHeaders = 'tipo,quarto,status,funcionario,nota';
      const servicosRows = dailyReportData.servicos.map(s => 
        `${s.tipo},${s.quarto},${s.status},${s.funcionario},${s.nota || ''}`
      ).join('\n');
      
      csv = `DADOS BÁSICOS\n${basicHeaders}\n${basicRow}\n\nQUARTOS\n${quartosHeaders}\n${quartosRows}\n\nSERVIÇOS\n${servicosHeaders}\n${servicosRows}`;
      filename = `relatorio_diario_${dailyReportData.data}_${new Date().getTime()}.csv`;
    }
    
    // Create download link
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Setup link properties
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    
    // Add to document, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-green-50 via-white to-green-50 p-4 rounded-lg shadow-sm border border-green-100">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            Relatórios
          </h1>
          <p className="text-muted-foreground flex items-center">
            <BarChart className="h-4 w-4 mr-1 text-green-600" />
            Visualize e exporte dados estatísticos do resort
          </p>
        </div>
        <Button 
          onClick={() => downloadRelatorio()}
          disabled={reportType === "mensal" ? !reportData.length : !dailyReportData}
          className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg"
        >
          <Download className="mr-2 h-4 w-4" />
          Exportar
        </Button>
      </div>
      
      <div className="flex-1 space-y-4 pt-6">
        <Tabs value={reportType} onValueChange={(value) => setReportType(value as "mensal" | "diario")}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="mensal">Relatório Mensal</TabsTrigger>
            <TabsTrigger value="diario">Relatório Diário</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mensal">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filtros do Relatório Mensal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-base">Dias da Semana</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {diasDaSemana.map((dia) => (
                        <div key={dia.value} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`dia-${dia.value}`}
                            checked={diasSelecionados.includes(dia.value)}
                            onCheckedChange={() => toggleDia(dia.value)}
                          />
                          <Label 
                            htmlFor={`dia-${dia.value}`}
                            className="cursor-pointer"
                          >
                            {dia.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="mes">Mês</Label>
                      <Select 
                        value={mesSelecionado}
                        onValueChange={setMesSelecionado}
                      >
                        <SelectTrigger id="mes">
                          <SelectValue placeholder="Selecione o mês" />
                        </SelectTrigger>
                        <SelectContent>
                          {meses.map((mes) => (
                            <SelectItem key={mes.value} value={mes.value.toString()}>
                              {mes.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ano">Ano</Label>
                      <Select 
                        value={anoSelecionado}
                        onValueChange={setAnoSelecionado}
                      >
                        <SelectTrigger id="ano">
                          <SelectValue placeholder="Selecione o ano" />
                        </SelectTrigger>
                        <SelectContent>
                          {anos.map((ano) => (
                            <SelectItem key={ano} value={ano.toString()}>
                              {ano}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="md:col-span-2 pt-4">
                      <Button 
                        className="w-full" 
                        onClick={gerarRelatorio}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Gerando...
                          </>
                        ) : (
                          <>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            Gerar Relatório Mensal
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {reportData.length > 0 && (
              <>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={viewMode === 'table' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('table')}
                    >
                      Tabela
                    </Button>
                    <Button
                      variant={viewMode === 'chart' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('chart')}
                    >
                      <BarChart className="h-4 w-4 mr-1" />
                      Gráfico
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadRelatorio}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Exportar CSV
                  </Button>
                </div>
                
                <Card className="shadow-md mt-2">
                  <CardHeader>
                    <CardTitle>
                      Relatório de Entrada de Pessoas - {meses[parseInt(mesSelecionado)].label} / {anoSelecionado}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {viewMode === 'table' ? (
                      <ReportsTable data={reportData} />
                    ) : (
                      <ReportsChart data={reportData} />
                    )}
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>
          
          <TabsContent value="diario">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  Relatório Diário
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <Label className="text-base">Selecione uma Data</Label>
                    <div className="grid gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !dataSelecionada && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dataSelecionada ? (
                              format(dataSelecionada, "PPP", { locale: ptBR })
                            ) : (
                              <span>Selecione uma data</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={dataSelecionada}
                            onSelect={setDataSelecionada}
                            initialFocus
                            locale={ptBR}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  <div className="flex items-end">
                    <Button 
                      className="w-full" 
                      onClick={gerarRelatorio}
                      disabled={isLoading || !dataSelecionada}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Gerando...
                        </>
                      ) : (
                        <>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          Gerar Relatório Diário
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {dailyReportData && (
              <>
                <div className="flex justify-end items-center mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadRelatorio}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Exportar CSV
                  </Button>
                </div>
                
                <DailyReport data={dailyReportData} />
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 