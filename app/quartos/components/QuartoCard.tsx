"use client";

import { BedDouble, Trash2, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Quarto } from "../types";
import { Button } from "@/components/ui/button";

interface QuartoCardProps {
  quarto: Quarto;
  onClick: () => void;
  onDelete?: () => void;
}

export function QuartoCard({ quarto, onClick, onDelete }: QuartoCardProps) {
  const { numero, status, cliente } = quarto;
  
  const getStatusStyles = () => {
    switch (status) {
      case 'ocupado':
        return "border-red-500 bg-red-50 hover:bg-red-100";
      case 'manutencao':
        return "border-amber-500 bg-amber-50 hover:bg-amber-100";
      case 'disponivel':
      default:
        return "border-green-500 bg-green-50 hover:bg-green-100";
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) onDelete();
  };

  return (
    <div className="relative group">
      <button onClick={onClick} className="w-full focus:outline-none">
        <Card className={`cursor-pointer transition-all group-hover:scale-105 hover:shadow-md ${getStatusStyles()}`}>
          <CardContent className="p-4 text-center flex flex-col items-center justify-center">
            {status === 'manutencao' ? (
              <Wrench className="h-7 w-7 mb-1 text-amber-700" />
            ) : (
              <BedDouble className="h-7 w-7 mb-1 text-gray-700" />
            )}
            <div className="text-xl font-bold">{numero}</div>
            
            {status === 'manutencao' && (
              <div className="text-xs text-amber-700 font-medium">Em Manutenção</div>
            )}
            
            {cliente && status === 'ocupado' && (
              <div className="text-xs text-gray-600 truncate w-full">{cliente}</div>
            )}
            
            <div className={`mt-1 h-1.5 w-1.5 rounded-full ${
              status === 'ocupado' ? 'bg-red-500' : 
              status === 'manutencao' ? 'bg-amber-500' : 
              'bg-green-500'
            }`}></div>
          </CardContent>
        </Card>
      </button>
      
      {onDelete && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-2 -right-2 bg-white border border-gray-200 rounded-full h-6 w-6 p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleDelete}
        >
          <Trash2 className="h-3 w-3 text-red-500" />
        </Button>
      )}
    </div>
  );
} 