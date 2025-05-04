"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  CalendarIcon,
  Clock,
  Filter,
  HotelIcon,
  ListFilter,
  Loader2,
  PlusCircle,
  Search,
  Trash2,
  UserIcon,
  UsersIcon,
  X,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { format, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

// Tipos
interface Reserva {
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

interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  email?: string;
  telefone?: string;
}

interface Quarto {
  id: number;
  numero: number;
  andar: number;
  tipo: string;
  status: string;
}

// Dados mockados para demonstração
const mockReservas: Reserva[] = [
  {
    id: 1,
    clienteId: 1,
    clienteNome: "João Silva",
    quartoId: 101,
    quartoNumero: 101,
    quartoAndar: 1,
    checkin: new Date("2024-06-10"),
    checkout: new Date("2024-06-15"),
    status: "confirmada",
    valorTotal: 1250.00,
    createdAt: new Date("2024-05-20"),
    updatedAt: new Date("2024-05-20")
  },
  {
    id: 2,
    clienteId: 2,
    clienteNome: "Maria Santos",
    quartoId: 205,
    quartoNumero: 205,
    quartoAndar: 2,
    checkin: new Date("2024-06-05"),
    checkout: new Date("2024-06-08"),
    status: "pendente",
    valorTotal: 750.00,
    observacoes: "Cliente solicitou cama extra",
    createdAt: new Date("2024-05-15"),
    updatedAt: new Date("2024-05-15")
  },
  {
    id: 3,
    clienteId: 3,
    clienteNome: "Carlos Oliveira",
    quartoId: 310,
    quartoNumero: 310,
    quartoAndar: 3,
    checkin: new Date("2024-05-25"),
    checkout: new Date("2024-05-30"),
    status: "concluida",
    valorTotal: 1100.00,
    createdAt: new Date("2024-05-10"),
    updatedAt: new Date("2024-05-31")
  },
  {
    id: 4,
    clienteId: 4,
    clienteNome: "Ana Costa",
    quartoId: 115,
    quartoNumero: 115,
    quartoAndar: 1,
    checkin: new Date("2024-07-01"),
    checkout: new Date("2024-07-10"),
    status: "confirmada",
    valorTotal: 2250.00,
    observacoes: "Cliente solicitou check-in antecipado",
    createdAt: new Date("2024-05-22"),
    updatedAt: new Date("2024-05-22")
  },
  {
    id: 5,
    clienteId: 5,
    clienteNome: "Roberto Almeida",
    quartoId: 220,
    quartoNumero: 220,
    quartoAndar: 2,
    checkin: new Date("2024-06-15"),
    checkout: new Date("2024-06-18"),
    status: "cancelada",
    valorTotal: 750.00,
    observacoes: "Cancelado a pedido do cliente",
    createdAt: new Date("2024-05-18"),
    updatedAt: new Date("2024-05-28")
  }
];

const mockClientes: Cliente[] = [
  { id: 1, nome: "João Silva", cpf: "123.456.789-00", email: "joao@email.com", telefone: "(11) 99999-1111" },
  { id: 2, nome: "Maria Santos", cpf: "987.654.321-00", email: "maria@email.com", telefone: "(11) 99999-2222" },
  { id: 3, nome: "Carlos Oliveira", cpf: "111.222.333-44", email: "carlos@email.com", telefone: "(11) 99999-3333" },
  { id: 4, nome: "Ana Costa", cpf: "444.555.666-77", email: "ana@email.com", telefone: "(11) 99999-4444" },
  { id: 5, nome: "Roberto Almeida", cpf: "777.888.999-00", email: "roberto@email.com", telefone: "(11) 99999-5555" }
];

const mockQuartos: Quarto[] = [
  { id: 101, numero: 101, andar: 1, tipo: "Standard", status: "disponivel" },
  { id: 102, numero: 102, andar: 1, tipo: "Standard", status: "ocupado" },
  { id: 115, numero: 115, andar: 1, tipo: "Luxo", status: "disponivel" },
  { id: 205, numero: 205, andar: 2, tipo: "Standard", status: "disponivel" },
  { id: 220, numero: 220, andar: 2, tipo: "Luxo", status: "disponivel" },
  { id: 310, numero: 310, andar: 3, tipo: "Suite", status: "ocupado" },
  { id: 315, numero: 315, andar: 3, tipo: "Suite Premium", status: "disponivel" }
];

export default function ReservasPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [quartos, setQuartos] = useState<Quarto[]>([]);
  const [filteredReservas, setFilteredReservas] = useState<Reserva[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeView, setActiveView] = useState("lista");

  // Estado para nova reserva
  const [formData, setFormData] = useState({
    clienteId: "",
    quartoId: "",
    checkin: new Date(),
    checkout: addDays(new Date(), 3),
    valorTotal: "",
    observacoes: "",
    status: "pendente"
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    // Simular carregamento de dados da API
    const loadData = setTimeout(() => {
      setReservas(mockReservas);
      setFilteredReservas(mockReservas);
      setClientes(mockClientes);
      setQuartos(mockQuartos);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loadData);
  }, [status, router]);

  // Filtrar reservas com base no termo de busca e filtro de status
  useEffect(() => {
    let filtered = [...reservas];

    // Filtrar por termo de busca
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        reserva =>
          reserva.clienteNome.toLowerCase().includes(term) ||
          reserva.quartoNumero.toString().includes(term)
      );
    }

    // Filtrar por status
    if (statusFilter) {
      filtered = filtered.filter(reserva => reserva.status === statusFilter);
    }

    setFilteredReservas(filtered);
  }, [searchTerm, statusFilter, reservas]);

  const handleCreateReserva = () => {
    // Validação básica
    if (!formData.clienteId || !formData.quartoId || !formData.checkin || !formData.checkout) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    // Validar datas
    if (formData.checkout <= formData.checkin) {
      toast.error("A data de check-out deve ser posterior à data de check-in");
      return;
    }

    // Criar nova reserva (mockada)
    const cliente = clientes.find(c => c.id.toString() === formData.clienteId);
    const quarto = quartos.find(q => q.id.toString() === formData.quartoId);

    if (!cliente || !quarto) {
      toast.error("Cliente ou quarto inválido");
      return;
    }

    const novaReserva: Reserva = {
      id: Math.max(...reservas.map(r => r.id)) + 1,
      clienteId: cliente.id,
      clienteNome: cliente.nome,
      quartoId: quarto.id,
      quartoNumero: quarto.numero,
      quartoAndar: quarto.andar,
      checkin: new Date(formData.checkin),
      checkout: new Date(formData.checkout),
      status: "pendente",
      valorTotal: parseFloat(formData.valorTotal) || 0,
      observacoes: formData.observacoes,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Atualizar estado
    setReservas([...reservas, novaReserva]);
    toast.success("Reserva criada com sucesso!");
    setIsDialogOpen(false);
    
    // Resetar formulário
    setFormData({
      clienteId: "",
      quartoId: "",
      checkin: new Date(),
      checkout: addDays(new Date(), 3),
      valorTotal: "",
      observacoes: "",
      status: "pendente"
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmada":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Confirmada</Badge>;
      case "pendente":
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">Pendente</Badge>;
      case "cancelada":
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">Cancelada</Badge>;
      case "concluida":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Concluída</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-green-50 via-white to-green-50 p-4 rounded-lg shadow-sm border border-green-100">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            Reservas
          </h1>
          <p className="text-muted-foreground flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-green-600" />
            Gerencie as reservas de hospedagem do resort
          </p>
        </div>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Nova Reserva
        </Button>
      </div>

      {/* Filtros e alternância de visualização */}
      <div className="flex flex-col sm:flex-row gap-4 items-start justify-between">
        <div className="flex-1 flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-green-500" />
            <Input
              type="search"
              placeholder="Buscar por cliente ou número do quarto..."
              className="pl-8 border-green-200 focus:border-green-400 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter || "all"} onValueChange={(value) => setStatusFilter(value === "all" ? null : value)}>
            <SelectTrigger className="w-[180px] border-green-200">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-green-500" />
                <SelectValue placeholder="Todos os status" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os status</SelectItem>
              <SelectItem value="confirmada">Confirmadas</SelectItem>
              <SelectItem value="pendente">Pendentes</SelectItem>
              <SelectItem value="concluida">Concluídas</SelectItem>
              <SelectItem value="cancelada">Canceladas</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Tabs value={activeView} onValueChange={setActiveView} className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="lista">
              <ListFilter className="mr-2 h-4 w-4" />
              Lista
            </TabsTrigger>
            <TabsTrigger value="calendario">
              <CalendarIcon className="mr-2 h-4 w-4" />
              Calendário
            </TabsTrigger>
          </TabsList>
          
          {/* Conteúdo principal */}
          <Card className="shadow-md border border-green-100 hover:shadow-lg transition-all mt-4">
            <CardContent className="p-0">
              <TabsContent value="lista" className="m-0">
                {loading ? (
                  <div className="p-6 space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2 flex-1">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                        <Skeleton className="h-8 w-20" />
                      </div>
                    ))}
                  </div>
                ) : filteredReservas.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-green-50">
                        <TableHead className="text-green-700">Cliente</TableHead>
                        <TableHead className="text-green-700">Quarto</TableHead>
                        <TableHead className="text-green-700">Check-in</TableHead>
                        <TableHead className="text-green-700">Check-out</TableHead>
                        <TableHead className="text-green-700">Status</TableHead>
                        <TableHead className="text-green-700 text-right">Valor</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredReservas.map((reserva) => (
                        <TableRow key={reserva.id} className="hover:bg-green-50/50">
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <UserIcon className="h-4 w-4 text-green-500" />
                              <span>{reserva.clienteNome}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <HotelIcon className="h-4 w-4 text-green-500" />
                              <span>{reserva.quartoNumero} ({reserva.quartoAndar}º andar)</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            {format(reserva.checkin, "dd/MM/yyyy", { locale: ptBR })}
                          </TableCell>
                          <TableCell>
                            {format(reserva.checkout, "dd/MM/yyyy", { locale: ptBR })}
                          </TableCell>
                          <TableCell>
                            {getStatusBadge(reserva.status)}
                          </TableCell>
                          <TableCell className="text-right font-medium">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(reserva.valorTotal)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 bg-green-50/40">
                    <div className="rounded-full bg-green-100 p-4 mb-4">
                      <Calendar className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium text-green-800">Nenhuma reserva encontrada</h3>
                    <p className="text-muted-foreground text-center mt-2 max-w-md">
                      {searchTerm || statusFilter
                        ? "Não encontramos reservas com os critérios de busca informados."
                        : "Ainda não há reservas cadastradas."}
                    </p>
                    {(searchTerm || statusFilter) && (
                      <Button
                        variant="outline"
                        className="mt-4 border-green-200 text-green-700 hover:bg-green-50"
                        onClick={() => {
                          setSearchTerm("");
                          setStatusFilter(null);
                        }}
                      >
                        <X className="mr-2 h-4 w-4" />
                        Limpar filtros
                      </Button>
                    )}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="calendario" className="p-4 m-0">
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <div className="flex justify-center">
                    <CalendarComponent
                      mode="range"
                      selected={{
                        from: new Date(),
                        to: addDays(new Date(), 5)
                      }}
                      className="rounded-md border"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-medium text-green-800 mb-2">Reservas ativas:</h3>
                    <div className="space-y-2">
                      {!loading && filteredReservas
                        .filter(r => r.status === "confirmada" || r.status === "pendente")
                        .map(reserva => (
                          <div key={reserva.id} className="flex items-center justify-between p-2 rounded-md border border-green-100 bg-green-50">
                            <div>
                              <div className="font-medium">{reserva.clienteNome}</div>
                              <div className="text-sm text-muted-foreground">
                                Quarto {reserva.quartoNumero} • {format(reserva.checkin, "dd/MM")} - {format(reserva.checkout, "dd/MM")}
                              </div>
                            </div>
                            {getStatusBadge(reserva.status)}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </div>

      {/* Modal para adicionar reserva */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-green-700 flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-green-500" />
              Nova Reserva
            </DialogTitle>
            <DialogDescription>
              Preencha os dados para cadastrar uma nova reserva
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="cliente" className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-1 text-green-500" />
                  Cliente
                </Label>
                <Select
                  value={formData.clienteId}
                  onValueChange={(value) => setFormData({ ...formData, clienteId: value })}
                >
                  <SelectTrigger id="cliente" className="border-green-200">
                    <SelectValue placeholder="Selecione um cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    {clientes.map((cliente) => (
                      <SelectItem key={cliente.id} value={cliente.id.toString()}>
                        {cliente.nome}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="quarto" className="flex items-center">
                  <HotelIcon className="h-4 w-4 mr-1 text-green-500" />
                  Quarto
                </Label>
                <Select
                  value={formData.quartoId}
                  onValueChange={(value) => setFormData({ ...formData, quartoId: value })}
                >
                  <SelectTrigger id="quarto" className="border-green-200">
                    <SelectValue placeholder="Selecione um quarto" />
                  </SelectTrigger>
                  <SelectContent>
                    {quartos
                      .filter(quarto => quarto.status === "disponivel")
                      .map((quarto) => (
                        <SelectItem key={quarto.id} value={quarto.id.toString()}>
                          {quarto.numero} - {quarto.andar}º andar ({quarto.tipo})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="checkin" className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-green-500" />
                  Check-in
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full border-green-200 justify-start text-left font-normal",
                        !formData.checkin && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.checkin ? format(formData.checkin, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={formData.checkin}
                      onSelect={(date) => date && setFormData({ ...formData, checkin: date })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="checkout" className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-green-500" />
                  Check-out
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full border-green-200 justify-start text-left font-normal",
                        !formData.checkout && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.checkout ? format(formData.checkout, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={formData.checkout}
                      onSelect={(date) => date && setFormData({ ...formData, checkout: date })}
                      initialFocus
                      disabled={(date) => date < formData.checkin}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="valorTotal" className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-green-500" />
                Valor Total (R$)
              </Label>
              <Input
                id="valorTotal"
                type="number"
                value={formData.valorTotal}
                onChange={(e) => setFormData({ ...formData, valorTotal: e.target.value })}
                className="border-green-200 focus-visible:ring-green-500"
                placeholder="0,00"
                min="0"
                step="0.01"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="observacoes" className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-green-500" />
                Observações (opcional)
              </Label>
              <Input
                id="observacoes"
                value={formData.observacoes}
                onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                className="border-green-200 focus-visible:ring-green-500"
                placeholder="Informações adicionais sobre a reserva"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button 
              onClick={handleCreateReserva}
              className="bg-green-600 hover:bg-green-700"
            >
              Criar Reserva
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 