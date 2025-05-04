"use client";

import { create } from 'zustand';

interface CachedOperation {
  id: string;
  operation: 'create' | 'update' | 'delete';
  endpoint: string;
  payload: any;
  timestamp: number;
}

interface ConnectionState {
  isOnline: boolean;
  pendingOperations: CachedOperation[];
  lastConnectionCheck: number;
  checkConnection: () => Promise<boolean>;
  addPendingOperation: (operation: Omit<CachedOperation, 'id' | 'timestamp'>) => void;
  removePendingOperation: (id: string) => void;
  syncPendingOperations: () => Promise<void>;
}

// Função auxiliar para carregar operações pendentes do localStorage
function loadPendingOperationsFromCache(): CachedOperation[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const cached = localStorage.getItem('pendingOperations');
    return cached ? JSON.parse(cached) : [];
  } catch (error) {
    console.error('Erro ao carregar operações do cache:', error);
    return [];
  }
}

// Função auxiliar para salvar operações pendentes no localStorage
function savePendingOperationsToCache(operations: CachedOperation[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('pendingOperations', JSON.stringify(operations));
  } catch (error) {
    console.error('Erro ao salvar operações no cache:', error);
  }
}

// Criando o store diretamente com create do Zustand
export const useConnectionStore = create<ConnectionState>()((set, get) => ({
  isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
  pendingOperations: loadPendingOperationsFromCache(),
  lastConnectionCheck: Date.now(),

  // Verificar status de conexão com o servidor
  checkConnection: async () => {
    try {
      // Tenta fazer uma requisição leve ao servidor para verificar conexão
      const response = await fetch('/api/health-check', { 
        method: 'HEAD',
        // Cache: 'no-store' para evitar obter respostas em cache
        cache: 'no-store',
        // Adicionar um timestamp para evitar cache
        headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
      });
      
      const isOnline = response.ok;
      
      set({ 
        isOnline, 
        lastConnectionCheck: Date.now() 
      });
      
      // Se estiver online e tiver operações pendentes, tenta sincronizar
      if (isOnline && get().pendingOperations.length > 0) {
        get().syncPendingOperations();
      }
      
      return isOnline;
    } catch (error) {
      set({ 
        isOnline: false, 
        lastConnectionCheck: Date.now() 
      });
      return false;
    }
  },

  // Adicionar operação para sincronização posterior
  addPendingOperation: (operation) => {
    const newOperation: CachedOperation = {
      ...operation,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now()
    };
    
    set((state) => {
      const updatedOperations = [...state.pendingOperations, newOperation];
      savePendingOperationsToCache(updatedOperations);
      return { pendingOperations: updatedOperations };
    });
  },

  // Remover uma operação pendente
  removePendingOperation: (id: string) => {
    set((state) => {
      const updatedOperations = state.pendingOperations.filter(op => op.id !== id);
      savePendingOperationsToCache(updatedOperations);
      return { pendingOperations: updatedOperations };
    });
  },

  // Tentar sincronizar operações pendentes com o servidor
  syncPendingOperations: async () => {
    const { pendingOperations, isOnline } = get();
    
    if (!isOnline || pendingOperations.length === 0) return;
    
    // Ordenar operações por timestamp para processar na ordem correta
    const sortedOperations = [...pendingOperations].sort((a, b) => a.timestamp - b.timestamp);
    
    for (const operation of sortedOperations) {
      try {
        const { endpoint, payload, operation: opType, id } = operation;
        
        let method = 'POST';
        if (opType === 'update') method = 'PUT';
        if (opType === 'delete') method = 'DELETE';
        
        const response = await fetch(endpoint, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: opType !== 'delete' ? JSON.stringify(payload) : undefined,
        });
        
        // Para operações de delete, 404 significa que o item já foi removido,
        // então consideramos como uma sincronização bem-sucedida
        if (response.ok || (opType === 'delete' && response.status === 404)) {
          // Se a sincronização for bem-sucedida, remove a operação da lista
          get().removePendingOperation(operation.id);
        } else {
          // Tentar extrair a mensagem de erro da resposta
          let errorText = `HTTP Error ${response.status}`;
          
          try {
            // Usar apenas um método para extrair o conteúdo da resposta
            const responseText = await response.text();
            
            // Tentar converter para JSON se possível
            try {
              const errorData = JSON.parse(responseText);
              errorText = JSON.stringify(errorData);
            } catch {
              // Se não for JSON válido, usar o texto diretamente
              // Limitar o tamanho do texto para evitar logs enormes
              if (responseText.length > 200) {
                errorText = responseText.substring(0, 200) + '...';
              } else {
                errorText = responseText;
              }
            }
          } catch (readError) {
            console.error('Erro ao ler o corpo da resposta:', readError);
          }
          
          console.error(`Falha ao sincronizar operação ${id} (${response.status}):`, errorText);
        }
      } catch (error) {
        console.error(`Erro ao processar operação ${operation.id}:`, error);
      }
    }
  }
}));

// Função para iniciar verificação periódica de conexão
export function startConnectionMonitoring() {
  if (typeof window === 'undefined') return () => {}; // Não iniciar no servidor
  
  // Verificar conexão inicial
  useConnectionStore.getState().checkConnection();
  
  // Verificar a cada 1 minuto (60000ms)
  const intervalId = setInterval(() => {
    useConnectionStore.getState().checkConnection();
  }, 60000);
  
  // Adicionar event listeners para detecção de conexão pelo browser
  window.addEventListener('online', () => {
    useConnectionStore.getState().checkConnection();
  });
  
  window.addEventListener('offline', () => {
    useConnectionStore.setState({ isOnline: false });
  });
  
  return () => {
    clearInterval(intervalId);
    window.removeEventListener('online', () => {
      useConnectionStore.getState().checkConnection();
    });
    window.removeEventListener('offline', () => {
      useConnectionStore.setState({ isOnline: false });
    });
  };
} 