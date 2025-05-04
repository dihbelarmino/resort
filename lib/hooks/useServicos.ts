import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

// Tipos
export interface Service {
  id: number;
  tipo: "camareira" | "passadeira" | "lavanderia";
  roomNumber: number;
  roomFloor: number;
  status: "pendente" | "em_andamento" | "concluida" | "avaliada";
  employeeId?: number;
  employeeName?: string;
  supervisorId?: number;
  supervisorName?: string;
  rating?: number;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  evaluatedAt?: Date;
  notes?: string;
  priority: "normal" | "urgente";
}

interface ServicosState {
  services: Service[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseServicosProps {
  tipo?: "camareira" | "passadeira" | "lavanderia";
  status?: "pendente" | "em_andamento" | "concluida" | "avaliada";
}

export function useServicos({ tipo, status }: UseServicosProps = {}): ServicosState {
  const { data: session } = useSession();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    setLoading(true);
    setError(null);

    try {
      // Construir URL com parâmetros de query
      const queryParams = new URLSearchParams();
      if (tipo) queryParams.append('tipo', tipo);
      if (status) queryParams.append('status', status);
      
      const queryString = queryParams.toString();
      const url = `/api/servicos${queryString ? `?${queryString}` : ''}`;

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar serviços: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Erro desconhecido ao buscar serviços');
      }
      
      // Transformar datas de string para objetos Date
      const parsedServices = data.servicos.map((service: any) => ({
        ...service,
        createdAt: new Date(service.createdAt),
        startedAt: service.startedAt ? new Date(service.startedAt) : undefined,
        completedAt: service.completedAt ? new Date(service.completedAt) : undefined,
        evaluatedAt: service.evaluatedAt ? new Date(service.evaluatedAt) : undefined,
      }));
      
      setServices(parsedServices);
    } catch (err) {
      console.error('Erro ao buscar serviços:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido ao buscar serviços');
    } finally {
      setLoading(false);
    }
  };

  // Buscar serviços quando o hook é montado ou quando os filtros mudam
  useEffect(() => {
    if (session) {
      fetchServices();
    }
  }, [session, tipo, status]);

  return { services, loading, error, refetch: fetchServices };
} 