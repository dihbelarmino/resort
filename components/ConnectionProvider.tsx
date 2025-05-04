"use client";

import { useEffect } from 'react';
import { startConnectionMonitoring } from '@/lib/connectionManager';

export function ConnectionProvider({ children }: { children: React.ReactNode }) {
  // Inicializar o monitoramento de conexão quando o componente montar
  useEffect(() => {
    // Iniciar monitoramento e obter função de limpeza
    const cleanup = startConnectionMonitoring();
    
    // Limpar quando o componente desmontar
    return () => {
      cleanup();
    };
  }, []);
  
  // Apenas renderiza os filhos
  return <>{children}</>;
} 