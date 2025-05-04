"use client";

import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";

export interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  email?: string | null;
  telefone?: string | null;
}

export const useClientesAPI = () => {
  const [loading, setLoading] = useState(true);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  
  const carregarClientes = useCallback(async (search?: string) => {
    try {
      setLoading(true);
      
      const url = search 
        ? `/api/clientes?search=${encodeURIComponent(search)}` 
        : '/api/clientes';
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar clientes: ${response.status}`);
      }
      
      const data = await response.json();
      setClientes(data);
      return data;
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
      toast.error("Erro ao carregar a lista de clientes");
      return [];
    } finally {
      setLoading(false);
    }
  }, []);
  
  // Carregar clientes ao inicializar o hook
  useEffect(() => {
    carregarClientes();
  }, [carregarClientes]);
  
  return {
    clientes,
    loading,
    carregarClientes
  };
}; 