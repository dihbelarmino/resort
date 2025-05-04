"use client";

import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import { useConnectionStore } from "@/lib/connectionManager";

interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  email?: string | null;
  telefone?: string | null;
  createdAt: Date;
  updatedAt: Date;
  quartos?: QuartoCliente[];
}

interface QuartoCliente {
  id: number;
  checkin: Date;
  checkout: Date;
  quartoId: number;
  quarto?: {
    numero: number;
    andar: number;
    tipo: string;
  };
}

interface NovoClienteData {
  nome: string;
  cpf: string;
  email?: string;
  telefone?: string;
}

export const useClientesAPI = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { isOnline, addPendingOperation } = useConnectionStore();

  // Buscar todos os clientes
  const buscarClientes = useCallback(async (search?: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const url = search ? `/api/clientes?search=${encodeURIComponent(search)}` : "/api/clientes";
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Erro ao buscar clientes");
      }
      
      const data = await response.json();
      setClientes(data);
      return data;
    } catch (err) {
      console.error("Erro ao buscar clientes:", err);
      setError("Não foi possível carregar a lista de clientes");
      toast.error("Erro ao buscar clientes");
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Buscar cliente por ID
  const buscarClientePorId = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/clientes?id=${id}`);
      
      if (!response.ok) {
        throw new Error("Erro ao buscar cliente");
      }
      
      const data = await response.json();
      setCliente(data);
      return data;
    } catch (err) {
      console.error(`Erro ao buscar cliente ${id}:`, err);
      setError("Não foi possível carregar os dados do cliente");
      toast.error("Erro ao buscar cliente");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Criar novo cliente
  const criarCliente = useCallback(async (dados: NovoClienteData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!isOnline) {
        // No modo offline, adiciona à fila de operações pendentes
        addPendingOperation({
          operation: 'create',
          endpoint: '/api/clientes',
          payload: dados
        });
        
        toast.success("Cliente será cadastrado quando a conexão for restabelecida");
        setIsLoading(false);
        return { id: 0, ...dados, createdAt: new Date(), updatedAt: new Date() };
      }
      
      const response = await fetch("/api/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao cadastrar cliente");
      }
      
      const novoCliente = await response.json();
      setClientes(prevClientes => [...prevClientes, novoCliente]);
      toast.success("Cliente cadastrado com sucesso!");
      return novoCliente;
    } catch (err: any) {
      console.error("Erro ao criar cliente:", err);
      setError(err.message || "Não foi possível cadastrar o cliente");
      toast.error(err.message || "Erro ao cadastrar cliente");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [isOnline, addPendingOperation]);

  // Atualizar cliente
  const atualizarCliente = useCallback(async (id: number, dados: NovoClienteData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!isOnline) {
        // No modo offline, adiciona à fila de operações pendentes
        addPendingOperation({
          operation: 'update',
          endpoint: `/api/clientes?id=${id}`,
          payload: dados
        });
        
        // Atualiza o estado local otimisticamente
        setClientes(prevClientes => 
          prevClientes.map(c => c.id === id ? { ...c, ...dados, updatedAt: new Date() } : c)
        );
        
        toast.success("Cliente será atualizado quando a conexão for restabelecida");
        setIsLoading(false);
        return { id, ...dados, updatedAt: new Date() };
      }
      
      const response = await fetch(`/api/clientes?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao atualizar cliente");
      }
      
      const clienteAtualizado = await response.json();
      
      // Atualiza a lista de clientes
      setClientes(prevClientes => 
        prevClientes.map(c => c.id === id ? clienteAtualizado : c)
      );
      
      // Atualiza o cliente selecionado, se for o mesmo
      if (cliente && cliente.id === id) {
        setCliente(clienteAtualizado);
      }
      
      toast.success("Cliente atualizado com sucesso!");
      return clienteAtualizado;
    } catch (err: any) {
      console.error(`Erro ao atualizar cliente ${id}:`, err);
      setError(err.message || "Não foi possível atualizar o cliente");
      toast.error(err.message || "Erro ao atualizar cliente");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [cliente, isOnline, addPendingOperation]);

  // Excluir cliente
  const excluirCliente = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!isOnline) {
        // No modo offline, adiciona à fila de operações pendentes
        addPendingOperation({
          operation: 'delete',
          endpoint: `/api/clientes?id=${id}`,
          payload: {}
        });
        
        // Remove do estado local otimisticamente
        setClientes(prevClientes => prevClientes.filter(c => c.id !== id));
        
        toast.success("Cliente será excluído quando a conexão for restabelecida");
        setIsLoading(false);
        return true;
      }
      
      const response = await fetch(`/api/clientes?id=${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao excluir cliente");
      }
      
      // Remove o cliente da lista
      setClientes(prevClientes => prevClientes.filter(c => c.id !== id));
      
      // Limpa o cliente selecionado, se for o mesmo
      if (cliente && cliente.id === id) {
        setCliente(null);
      }
      
      toast.success("Cliente excluído com sucesso!");
      return true;
    } catch (err: any) {
      console.error(`Erro ao excluir cliente ${id}:`, err);
      setError(err.message || "Não foi possível excluir o cliente");
      toast.error(err.message || "Erro ao excluir cliente");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [cliente, isOnline, addPendingOperation]);

  return {
    clientes,
    cliente,
    isLoading,
    error,
    buscarClientes,
    buscarClientePorId,
    criarCliente,
    atualizarCliente,
    excluirCliente,
  };
}; 