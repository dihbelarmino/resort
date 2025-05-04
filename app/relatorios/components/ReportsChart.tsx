"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area
} from "recharts";

interface ReportData {
  data: string;
  diaDaSemana: string;
  checkIns: number;
  checkOuts: number;
  ocupacaoTotal: number;
  tarefasConcluidas: number;
}

interface ReportsChartProps {
  data: ReportData[];
}

export default function ReportsChart({ data }: ReportsChartProps) {
  const [chartType, setChartType] = useState<"bar" | "line" | "area">("bar");
  
  // Process and prepare chart data
  const chartData = data.map(item => {
    // Extract day from date (DD/MM format)
    const [year, month, day] = item.data.split('-');
    
    return {
      ...item,
      dia: `${day}/${month}`, // Format as DD/MM for display
    };
  });

  // Function to format date tooltip
  const formatTooltipDate = (value: string) => {
    return value;
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md p-2 shadow-md">
          <p className="font-medium">{label} - {payload[0]?.payload.diaDaSemana}</p>
          <p className="text-blue-600">Check-ins: {payload[0]?.value}</p>
          <p className="text-green-600">Check-outs: {payload[1]?.value}</p>
          <p className="text-purple-600">Ocupação: {payload[2]?.value}</p>
          <p className="text-orange-600">Tarefas: {payload[3]?.value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center space-x-2 mb-4">
        <Button
          variant={chartType === "bar" ? "default" : "outline"}
          size="sm"
          onClick={() => setChartType("bar")}
        >
          Barras
        </Button>
        <Button
          variant={chartType === "line" ? "default" : "outline"}
          size="sm"
          onClick={() => setChartType("line")}
        >
          Linhas
        </Button>
        <Button
          variant={chartType === "area" ? "default" : "outline"}
          size="sm"
          onClick={() => setChartType("area")}
        >
          Área
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="h-[400px] w-full">
            {chartType === "bar" && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="dia" 
                    tick={{ fontSize: 12 }} 
                    tickFormatter={formatTooltipDate}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="top" height={36} />
                  <Bar dataKey="checkIns" name="Check-ins" fill="#1e40af" />
                  <Bar dataKey="checkOuts" name="Check-outs" fill="#15803d" />
                  <Bar dataKey="ocupacaoTotal" name="Ocupação Total" fill="#7e22ce" />
                  <Bar dataKey="tarefasConcluidas" name="Tarefas Concluídas" fill="#ea580c" />
                </BarChart>
              </ResponsiveContainer>
            )}

            {chartType === "line" && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="dia" 
                    tick={{ fontSize: 12 }} 
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="top" height={36} />
                  <Line type="monotone" dataKey="checkIns" name="Check-ins" stroke="#1e40af" strokeWidth={2} />
                  <Line type="monotone" dataKey="checkOuts" name="Check-outs" stroke="#15803d" strokeWidth={2} />
                  <Line type="monotone" dataKey="ocupacaoTotal" name="Ocupação Total" stroke="#7e22ce" strokeWidth={2} />
                  <Line type="monotone" dataKey="tarefasConcluidas" name="Tarefas Concluídas" stroke="#ea580c" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            )}

            {chartType === "area" && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="dia" 
                    tick={{ fontSize: 12 }} 
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="top" height={36} />
                  <Area type="monotone" dataKey="checkIns" name="Check-ins" stroke="#1e40af" fill="#1e40af33" />
                  <Area type="monotone" dataKey="checkOuts" name="Check-outs" stroke="#15803d" fill="#15803d33" />
                  <Area type="monotone" dataKey="ocupacaoTotal" name="Ocupação Total" stroke="#7e22ce" fill="#7e22ce33" />
                  <Area type="monotone" dataKey="tarefasConcluidas" name="Tarefas Concluídas" stroke="#ea580c" fill="#ea580c33" />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 