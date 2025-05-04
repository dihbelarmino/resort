import React from 'react';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BedDouble, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface RoomStatusCardProps {
  data: {
    available: number;
    occupied: number;
    maintenance: number;
    cleaning: number;
    total: number;
  };
  className?: string;
}

export const RoomStatusCard: React.FC<RoomStatusCardProps> = ({
  data,
  className,
}) => {
  const { available, occupied, maintenance, cleaning, total } = data;
  
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Status dos Quartos</CardTitle>
            <CardDescription>Visão geral da ocupação</CardDescription>
          </div>
          <div className="bg-[#F39200]/10 text-[#F39200] p-2 rounded-full">
            <BedDouble className="h-5 w-5" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatusItem 
            value={available} 
            total={total} 
            label="Disponíveis" 
            color="#087242"
          />
          <StatusItem 
            value={occupied} 
            total={total} 
            label="Ocupados" 
            color="#F39200"
          />
          <StatusItem 
            value={maintenance} 
            total={total} 
            label="Manutenção" 
            color="#E53E3E"
          />
          <StatusItem 
            value={cleaning} 
            total={total} 
            label="Limpeza" 
            color="#4DB1E0"
          />
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button asChild variant="outline" className="w-full text-[#087242] border-[#087242] hover:bg-[#087242]/5">
          <Link href="/quartos" className="flex items-center justify-center gap-1">
            Ver todos os quartos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

interface StatusItemProps {
  value: number;
  total: number;
  label: string;
  color: string;
}

const StatusItem: React.FC<StatusItemProps> = ({ value, total, label, color }) => {
  const percentage = Math.round((value / total) * 100);
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold" style={{ color }}>
        {value}
      </div>
      <div className="mt-1 text-xs text-gray-500">{label}</div>
      <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full" 
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color 
          }}
        />
      </div>
    </div>
  );
}; 