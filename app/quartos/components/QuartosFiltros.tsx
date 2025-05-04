"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QuartosFiltrosProps {
  filtroAndar: number | null;
  setFiltroAndar: (andar: number | null) => void;
  filtroStatus: string;
  setFiltroStatus: (status: string) => void;
  andares: number[];
}

export function QuartosFiltros({
  filtroAndar,
  setFiltroAndar,
  filtroStatus,
  setFiltroStatus,
  andares
}: QuartosFiltrosProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex items-center gap-2">
        <Select 
          value={filtroAndar?.toString() || "todos"} 
          onValueChange={(value) => setFiltroAndar(value === "todos" ? null : parseInt(value))}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Todos os andares" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos os andares</SelectItem>
            {andares.map((andar) => (
              <SelectItem key={andar} value={andar.toString()}>
                {andar}º Andar
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center gap-2">
        <Select 
          value={filtroStatus} 
          onValueChange={(value) => setFiltroStatus(value)}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Todos os status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos os status</SelectItem>
            <SelectItem value="disponivel">Disponíveis</SelectItem>
            <SelectItem value="ocupado">Ocupados</SelectItem>
            <SelectItem value="manutencao">Em Manutenção</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export function LegendaStatus() {
  return (
    <div className="flex flex-wrap gap-4 mb-2">
      <div className="flex items-center">
        <div className="w-4 h-4 mr-2 rounded-sm bg-green-500"></div>
        <span className="text-sm">Disponível</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 mr-2 rounded-sm bg-red-500"></div>
        <span className="text-sm">Ocupado</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 mr-2 rounded-sm bg-amber-500"></div>
        <span className="text-sm">Em Manutenção</span>
      </div>
    </div>
  );
} 