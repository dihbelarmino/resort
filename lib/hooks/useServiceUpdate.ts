import { useState } from 'react';
import { toast } from 'sonner';

type ServiceStatus = 'em_andamento' | 'concluida' | 'avaliada';

interface UpdateParams {
  id: number;
  status: ServiceStatus;
  nota?: number;
  observacao?: string;
}

interface UpdateServiceState {
  updating: boolean;
  error: string | null;
  updateService: (params: UpdateParams) => Promise<boolean>;
}

export function useServiceUpdate(): UpdateServiceState {
  const [updating, setUpdating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateService = async ({ id, status, nota, observacao }: UpdateParams): Promise<boolean> => {
    setUpdating(true);
    setError(null);

    try {
      const response = await fetch(`/api/servicos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status,
          ...(nota !== undefined && { nota }),
          ...(observacao !== undefined && { observacao }),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || `Erro ao atualizar serviço: ${response.status}`);
      }

      // Exibir toast de sucesso baseado no status
      let message = '';
      switch (status) {
        case 'em_andamento':
          message = 'Serviço iniciado com sucesso!';
          break;
        case 'concluida':
          message = 'Serviço concluído com sucesso!';
          break;
        case 'avaliada':
          message = 'Avaliação registrada com sucesso!';
          break;
        default:
          message = 'Serviço atualizado com sucesso!';
      }
      
      toast.success(message);
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido ao atualizar serviço';
      console.error('Erro ao atualizar serviço:', errorMessage);
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setUpdating(false);
    }
  };

  return { updating, error, updateService };
} 