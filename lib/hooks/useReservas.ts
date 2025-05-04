import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

// Tipos
export interface Reserva {
  id: number;
  clienteId: number;
  clienteNome: string;
  quartoId: number;
  quartoNumero: number;
  quartoAndar: number;
  checkin: Date;
  checkout: Date;
  status: "confirmada" | "pendente" | "cancelada" | "concluida";
  valorTotal: number;
  observacoes?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ReservasState {
  reservas: Reserva[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseReservasProps {
  status?: string;
  clienteId?: number | string;
  quartoId?: number | string;
  startDate?: Date | string;
  endDate?: Date | string;
}

export function useReservas({
  status,
  clienteId,
  quartoId,
  startDate,
  endDate
}: UseReservasProps = {}): ReservasState {
  const { data: session } = useSession();
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReservas = async () => {
    if (!session) {
      setLoading(false);
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Construir URL com parâmetros de consulta
      let url = '/api/reservas';
      const params = new URLSearchParams();
      
      if (status) params.append('status', status);
      if (clienteId) params.append('clienteId', clienteId.toString());
      if (quartoId) params.append('quartoId', quartoId.toString());
      
      // Formatar datas se presentes
      if (startDate) {
        const formattedStartDate = typeof startDate === 'string' 
          ? startDate 
          : startDate.toISOString();
        params.append('startDate', formattedStartDate);
      }
      
      if (endDate) {
        const formattedEndDate = typeof endDate === 'string' 
          ? endDate 
          : endDate.toISOString();
        params.append('endDate', formattedEndDate);
      }
      
      // Adicionar parâmetros à URL
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar reservas: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Converter datas de string para objeto Date
      const reservasComDatas = data.reservas.map((reserva: any) => ({
        ...reserva,
        checkin: new Date(reserva.checkin),
        checkout: new Date(reserva.checkout),
        createdAt: new Date(reserva.createdAt),
        updatedAt: new Date(reserva.updatedAt)
      }));
      
      setReservas(reservasComDatas);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservas();
  }, [session, status, clienteId, quartoId, startDate, endDate]);

  return { 
    reservas, 
    loading, 
    error, 
    refetch: fetchReservas 
  };
}

export function useCreateReserva() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createReserva = async (reservaData: {
    clienteId: number | string;
    quartoId: number | string;
    checkin: Date | string;
    checkout: Date | string;
    valorTotal?: number | string;
    status?: "confirmada" | "pendente" | "cancelada" | "concluida";
    observacoes?: string;
  }) => {
    if (!session) {
      throw new Error('Não autorizado');
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservaData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Erro ${response.status}`);
      }
      
      const data = await response.json();
      setLoading(false);
      
      return data.reserva;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      setLoading(false);
      throw err;
    }
  };

  return { 
    createReserva, 
    loading, 
    error 
  };
} 