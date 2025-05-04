"use client";

import { useState, useEffect } from 'react';
import { useConnectionStore } from '@/lib/connectionManager';
import { Wifi, WifiOff } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';

export function ConnectionStatus() {
  // Para evitar erro de hidratação, inicializamos com null e atualizamos após a montagem
  const [mounted, setMounted] = useState(false);
  
  // Acessar o estado de conexão do store - selecionar diretamente propriedades específicas
  const isOnline = useConnectionStore(state => state.isOnline);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Se não estiver montado ainda, não renderiza nada
  if (!mounted) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center">
            {isOnline ? (
              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 flex items-center gap-1.5 py-1 h-8">
                <Wifi className="h-3.5 w-3.5" />
                <span>Online</span>
              </Badge>
            ) : (
              <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 flex items-center gap-1.5 py-1 h-8">
                <WifiOff className="h-3.5 w-3.5" />
                <span>Offline</span>
              </Badge>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          {isOnline ? (
            <p>Conexão com o banco de dados: Ativa</p>
          ) : (
            <p>Conexão com o banco de dados: Inativa</p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
} 