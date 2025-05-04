import React from 'react';
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: number;
  color: 'green' | 'orange' | 'blue' | 'yellow';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  color,
  className
}) => {
  const colorClasses = {
    green: 'border-t-[#087242]',
    orange: 'border-t-[#F39200]',
    blue: 'border-t-[#4DB1E0]',
    yellow: 'border-t-[#FFC926]',
  };

  const iconBgColors = {
    green: 'bg-[#087242]/10 text-[#087242]',
    orange: 'bg-[#F39200]/10 text-[#F39200]',
    blue: 'bg-[#4DB1E0]/10 text-[#4DB1E0]',
    yellow: 'bg-[#FFC926]/10 text-[#FFC926]',
  }

  const renderTrend = () => {
    if (!trend || trend === 'neutral' || !trendValue) return null;
    
    if (trend === 'up') {
      return (
        <div className="flex items-center text-[#087242] text-sm font-medium">
          <ArrowUpRight className="mr-1 h-4 w-4" />
          <span>{trendValue}%</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-red-500 text-sm font-medium">
          <ArrowDownRight className="mr-1 h-4 w-4" />
          <span>{trendValue}%</span>
        </div>
      );
    }
  };

  return (
    <Card className={`stat-card border-t-4 ${colorClasses[color]} ${className}`}>
      <CardHeader className="pb-2 pt-4 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
        <div className={`rounded-full p-2 ${iconBgColors[color]}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </CardContent>
      {trend && trendValue && (
        <CardFooter className="pt-0 pb-4">
          {renderTrend()}
        </CardFooter>
      )}
    </Card>
  );
}; 