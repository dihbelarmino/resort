"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "./components/Overview";
import { Leaderboard } from "./components/Leaderboard";
import { RecentActivity } from "./components/RecentActivity";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  BedDouble, 
  Clock, 
  Star, 
  BarChart3, 
  Trophy, 
  ActivitySquare,
  SunMedium
} from "lucide-react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center gap-4">
          <div className="rounded-lg border border-green-100 p-4 bg-gradient-to-r from-green-50 to-emerald-50/40 shadow-sm overflow-hidden relative">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
              Dashboard
            </h2>
            <p className="text-sm text-muted-foreground">
              Bem-vindo ao painel de controle do Resort
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <>
                <Skeleton className="h-[250px] w-full" />
                <Skeleton className="h-[250px] w-full" />
                <Skeleton className="h-[250px] w-full" />
              </>
            ) : (
              <>
                <Card className="border-l-4 border-l-green-600 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Quartos Ocupados
                    </CardTitle>
                    <div className="rounded-full bg-green-100 p-2 text-green-600">
                      <BedDouble className="h-5 w-5" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">68%</div>
                    <p className="text-xs text-muted-foreground">
                      +2% em relação ao mês passado
                    </p>
                    <div className="mt-2 h-2 w-full rounded-full bg-green-100">
                      <div className="h-2 rounded-full bg-green-600" style={{ width: "68%" }}></div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-emerald-500 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Serviços Pendentes
                    </CardTitle>
                    <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                      <Clock className="h-5 w-5" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-emerald-600">23</div>
                    <p className="text-xs text-muted-foreground">
                      12 camareira, 6 passadeira, 5 lavanderia
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="rounded bg-green-100 py-1 text-green-700">12 cam</div>
                      <div className="rounded bg-emerald-100 py-1 text-emerald-700">6 pas</div>
                      <div className="rounded bg-green-100 py-1 text-green-700">5 lav</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-amber-500 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Nota Média dos Serviços
                    </CardTitle>
                    <div className="rounded-full bg-amber-100 p-2 text-amber-600">
                      <Star className="h-5 w-5" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-amber-600">8.7</div>
                    <p className="text-xs text-muted-foreground">
                      +0.3 em relação ao mês passado
                    </p>
                    <div className="mt-2 flex items-center justify-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-100 text-amber-100"}`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-1 md:col-span-2 lg:col-span-4 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="border-b">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  <CardTitle>Desempenho Geral</CardTitle>
                </div>
                <CardDescription>
                  Visualização do desempenho médio por serviço
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2 pt-4">
                {isLoading ? <Skeleton className="h-[200px] w-full" /> : <Overview />}
              </CardContent>
            </Card>
            <Card className="col-span-1 md:col-span-2 lg:col-span-3 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="border-b">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <CardTitle>Melhores Funcionários</CardTitle>
                </div>
                <CardDescription>
                  Top 3 de cada serviço por avaliação
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                {isLoading ? <Skeleton className="h-[200px] w-full" /> : <Leaderboard />}
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="border-b">
              <div className="flex items-center space-x-2">
                <ActivitySquare className="h-5 w-5 text-green-600" />
                <CardTitle>Atividades Recentes</CardTitle>
              </div>
              <CardDescription>
                Últimos serviços concluídos e avaliados
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              {isLoading ? <Skeleton className="h-[200px] w-full" /> : <RecentActivity />}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}