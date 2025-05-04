import React from 'react';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarRange, ArrowRight, Check, Clock } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface Booking {
  id: string;
  guestName: string;
  roomNumber: string;
  checkIn: string;
  checkOut: string;
  status: 'confirmed' | 'checked-in' | 'checked-out' | 'canceled';
  guests: number;
}

interface RecentBookingsProps {
  bookings: Booking[];
  className?: string;
}

export const RecentBookings: React.FC<RecentBookingsProps> = ({
  bookings,
  className,
}) => {
  const getStatusBadge = (status: Booking['status']) => {
    const variants = {
      'confirmed': <Badge className="bg-[#4DB1E0]">Confirmada</Badge>,
      'checked-in': <Badge className="bg-[#087242]">Check-in</Badge>,
      'checked-out': <Badge className="bg-gray-500">Check-out</Badge>,
      'canceled': <Badge className="bg-red-500">Cancelada</Badge>,
    };
    
    return variants[status];
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Reservas Recentes</CardTitle>
            <CardDescription>Últimas reservas registradas</CardDescription>
          </div>
          <div className="bg-[#4DB1E0]/10 text-[#4DB1E0] p-2 rounded-full">
            <CalendarRange className="h-5 w-5" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hóspede</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quarto</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-in</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-out</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-[#F39200]/10 text-[#F39200]">
                          {getInitials(booking.guestName)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{booking.guestName}</p>
                        <p className="text-xs text-gray-500">{booking.guests} hóspede{booking.guests > 1 ? 's' : ''}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.roomNumber}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {booking.checkIn}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {booking.checkOut}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {getStatusBadge(booking.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <Button asChild variant="outline" className="w-full text-[#4DB1E0] border-[#4DB1E0] hover:bg-[#4DB1E0]/5">
            <Link href="/reservas" className="flex items-center justify-center gap-1">
              Ver todas as reservas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 