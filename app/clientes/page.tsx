"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  UserPlus, 
  Search, 
  Phone, 
  Mail, 
  User, 
  Calendar, 
  Loader2,
  PencilIcon, 
  FileText,
  Trash2,
  AlertCircle,
  UserCog,
  UserCheck,
  HistoryIcon,
  InfoIcon,
  UserMinus,
  CheckCircle2,
  BadgeInfo,
  Clock,
  Building,
  Filter,
  BedDouble,
  Plus,
  Users2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useClientesAPI } from "./hooks/useClientesAPI";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Schema de validação para o formulário de cliente
const clienteFormSchema = z.object({
  nome: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  cpf: z
    .string()
    .min(11, { message: "CPF deve ter 11 dígitos" })
    .max(14, { message: "CPF deve ter no máximo 14 caracteres" }),
  email: z
    .string()
    .email({ message: "Email inválido" })
    .optional()
    .or(z.literal("")),
  telefone: z
    .string()
    .min(10, { message: "Telefone deve ter pelo menos 10 dígitos" })
    .optional()
    .or(z.literal("")),
});

export default function ClientesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCliente, setSelectedCliente] = useState<any | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [filteredClientes, setFilteredClientes] = useState<any[]>([]);

  const {
    clientes,
    isLoading,
    error,
    buscarClientes,
    buscarClientePorId,
    criarCliente,
    atualizarCliente,
    excluirCliente,
  } = useClientesAPI();

  // Form para adicionar/editar cliente
  const form = useForm<z.infer<typeof clienteFormSchema>>({
    resolver: zodResolver(clienteFormSchema),
    defaultValues: {
      nome: "",
      cpf: "",
      email: "",
      telefone: "",
    },
  });

  // Buscar clientes ao carregar a página
  useEffect(() => {
    buscarClientes();
  }, [buscarClientes]);

  // Filtrar clientes quando a busca ou a lista mudar
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredClientes(clientes);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = clientes.filter(
        (cliente) =>
          cliente.nome.toLowerCase().includes(query) ||
          (cliente.telefone && cliente.telefone.toLowerCase().includes(query)) ||
          (cliente.email && cliente.email.toLowerCase().includes(query)) ||
          cliente.cpf.toLowerCase().includes(query)
      );
      setFilteredClientes(filtered);
    }
  }, [searchQuery, clientes]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleOpenDetails = async (cliente: any) => {
    try {
      // Se já temos os detalhes completos do cliente (com hospedagens), não precisamos buscar novamente
      if (cliente.quartos) {
        setSelectedCliente(cliente);
      } else {
        // Buscar detalhes completos do cliente
        const clienteCompleto = await buscarClientePorId(cliente.id);
        if (clienteCompleto) {
          setSelectedCliente(clienteCompleto);
        } else {
          toast.error("Erro ao carregar detalhes do cliente");
          return;
        }
      }
      setIsDetailsOpen(true);
    } catch (error) {
      console.error("Erro ao abrir detalhes:", error);
      toast.error("Erro ao carregar detalhes do cliente");
    }
  };

  const handleCloseDetails = () => {
    setSelectedCliente(null);
    setIsDetailsOpen(false);
  };

  const handleOpenForm = (cliente?: any) => {
    if (cliente) {
      // Editar cliente existente
      form.reset({
        nome: cliente.nome,
        cpf: cliente.cpf,
        email: cliente.email || "",
        telefone: cliente.telefone || "",
      });
      setSelectedCliente(cliente);
    } else {
      // Novo cliente
      form.reset({
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
      });
      setSelectedCliente(null);
    }
    setIsOpenDialog(true);
  };

  const openDeleteDialog = (cliente: any) => {
    setSelectedCliente(cliente);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteCliente = async () => {
    if (!selectedCliente) return;
    
    setIsDeleting(true);
    
    try {
      const success = await excluirCliente(selectedCliente.id);
      if (success) {
        setIsDeleteDialogOpen(false);
        setSelectedCliente(null);
        
        // Se estiver na tela de detalhes, fechar também
        if (isDetailsOpen) {
          setIsDetailsOpen(false);
        }
      }
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const onSubmit = async (values: z.infer<typeof clienteFormSchema>) => {
    try {
      if (selectedCliente) {
        // Atualizar cliente existente
        await atualizarCliente(selectedCliente.id, values);
      } else {
        // Adicionar novo cliente
        await criarCliente(values);
      }
      
      setIsOpenDialog(false);
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
    }
  };

  const formatarData = (data: string | Date) => {
    try {
      return format(new Date(data), "dd/MM/yyyy", { locale: ptBR });
    } catch (error) {
      return "Data inválida";
    }
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-green-50 via-white to-green-50 p-4 rounded-lg shadow-sm border border-green-100">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">Clientes</h1>
          <p className="text-muted-foreground flex items-center">
            <Users2 className="h-4 w-4 mr-1 text-green-500" />
            Lista de clientes cadastrados no sistema
          </p>
        </div>
        <Button 
          onClick={() => setIsOpenDialog(true)}
          className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg"
        >
          <Plus className="mr-2 h-4 w-4" />
          Novo Cliente
        </Button>
      </div>

      {/* Barra de pesquisa */}
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-green-500" />
        <Input
          type="search"
          placeholder="Buscar por nome, telefone, email ou CPF..."
          className="pl-8 border-green-200 focus:border-green-400 shadow-sm"
          value={searchQuery}
          onChange={handleSearch}
        />
        <Button variant="ghost" size="icon" className="absolute right-2 top-2">
          <Filter className="h-4 w-4 text-green-500" />
        </Button>
      </div>

      {/* Lista de clientes */}
      <Card className="shadow-md border border-green-100 hover:shadow-lg transition-all">
        <CardContent className="p-0">
          {isLoading && clientes.length === 0 ? (
            <div className="p-6 space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredClientes.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-green-50">
                    <TableHead className="text-green-700">Nome</TableHead>
                    <TableHead className="text-green-700">CPF</TableHead>
                    <TableHead className="hidden md:table-cell text-green-700">Telefone</TableHead>
                    <TableHead className="hidden md:table-cell text-green-700">Email</TableHead>
                    <TableHead className="hidden lg:table-cell text-green-700">Cadastro</TableHead>
                    <TableHead className="text-right text-green-700">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredClientes.map((cliente) => (
                    <TableRow
                      key={cliente.id}
                      className="cursor-pointer hover:bg-green-50 transition-colors"
                      onClick={() => handleOpenDetails(cliente)}
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <div className="rounded-full bg-green-100 p-1 mr-2">
                            <User className="h-4 w-4 text-green-700" />
                          </div>
                          {cliente.nome}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <BadgeInfo className="h-4 w-4 mr-1 text-green-500 opacity-60" />
                          {cliente.cpf}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {cliente.telefone ? (
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1 text-green-500" />
                            {cliente.telefone}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {cliente.email ? (
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1 text-amber-500" />
                            {cliente.email}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-purple-500" />
                          {formatarData(cliente.createdAt)}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-green-600 hover:text-green-800 hover:bg-green-100"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenForm(cliente);
                            }}
                          >
                            <PencilIcon className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-700 hover:bg-red-100"
                            onClick={(e) => {
                              e.stopPropagation();
                              openDeleteDialog(cliente);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 bg-green-50/40">
              <div className="rounded-full bg-green-100 p-4 mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-green-800">Nenhum cliente encontrado</h3>
              <p className="text-muted-foreground text-center mt-2 max-w-md">
                {searchQuery.trim() !== ""
                  ? "Não foi encontrado nenhum cliente com os critérios de busca informados."
                  : "Ainda não há clientes cadastrados no sistema."}
              </p>
              {searchQuery.trim() !== "" && (
                <Button
                  variant="outline"
                  className="mt-4 border-green-200 text-green-700 hover:bg-green-50"
                  onClick={() => setSearchQuery("")}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Limpar busca
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal de detalhes do cliente */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedCliente && (
            <>
              <DialogHeader>
                <DialogTitle className="text-green-700 flex items-center">
                  <InfoIcon className="mr-2 h-5 w-5 text-green-500" />
                  Detalhes do Cliente
                </DialogTitle>
                <DialogDescription>
                  Informações completas do cliente.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{selectedCliente.nome}</h3>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <UserCheck className="h-4 w-4 mr-1 text-green-500" />
                      Cliente desde{" "}
                      {format(new Date(selectedCliente.createdAt), "dd 'de' MMMM 'de' yyyy", {
                        locale: ptBR,
                      })}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-green-50/50 p-4 rounded-lg">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">CPF</p>
                    <p className="font-medium flex items-center">
                      <BadgeInfo className="h-4 w-4 mr-1 text-green-500" />
                      {selectedCliente.cpf}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-green-500" />
                      <p className="font-medium">{selectedCliente.telefone || "Não informado"}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-amber-500" />
                      <p className="font-medium">{selectedCliente.email || "Não informado"}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Última atualização</p>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-500" />
                      <p className="font-medium">
                        {formatarData(selectedCliente.updatedAt)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Histórico de hospedagens */}
                <div className="pt-4 border-t">
                  <h4 className="text-sm font-semibold mb-2 flex items-center">
                    <HistoryIcon className="mr-1 h-4 w-4 text-green-500" />
                    Histórico de Hospedagens
                  </h4>
                  {selectedCliente.quartos && selectedCliente.quartos.length > 0 ? (
                    <ScrollArea className="h-[150px] rounded-md border border-green-100 shadow-sm">
                      <div className="p-4 space-y-4">
                        {selectedCliente.quartos.map((reserva: any) => (
                          <div key={reserva.id} className="flex justify-between items-center bg-green-50/50 p-2 rounded-md">
                            <div>
                              <p className="font-medium flex items-center">
                                <BedDouble className="h-4 w-4 mr-1 text-green-500" />
                                Quarto {reserva.quarto?.numero} ({reserva.quarto?.andar}º andar)
                              </p>
                              <p className="text-sm text-muted-foreground flex items-center">
                                <Calendar className="h-3 w-3 mr-1 text-purple-400" />
                                {formatarData(reserva.checkin)} a {formatarData(reserva.checkout)}
                              </p>
                            </div>
                            <Badge className={new Date(reserva.checkout) > new Date() ? 
                              "bg-green-100 text-green-800 hover:bg-green-200" : 
                              "bg-green-100 text-green-800 hover:bg-green-200"
                            }>
                              {new Date(reserva.checkout) > new Date() ? (
                                <div className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  Ativa
                                </div>
                              ) : (
                                <div className="flex items-center">
                                  <CheckCircle2 className="h-3 w-3 mr-1" />
                                  Concluída
                                </div>
                              )}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  ) : (
                    <p className="text-sm text-muted-foreground bg-green-50/30 p-3 rounded-md border border-green-100">
                      Este cliente ainda não possui histórico de hospedagens.
                    </p>
                  )}
                </div>
              </div>
              <DialogFooter className="sm:justify-between">
                <Button variant="outline" onClick={handleCloseDetails} className="border-green-200 text-green-700 hover:bg-green-50">
                  Fechar
                </Button>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="border-red-200 text-red-700 hover:bg-red-50"
                    onClick={() => {
                      handleCloseDetails();
                      openDeleteDialog(selectedCliente);
                    }}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Excluir
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => {
                      handleCloseDetails();
                      handleOpenForm(selectedCliente);
                    }}
                  >
                    <PencilIcon className="mr-2 h-4 w-4" />
                    Editar
                  </Button>
                </div>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de adicionar/editar cliente */}
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className={selectedCliente ? "text-green-700" : "text-green-700"}>
              {selectedCliente ? (
                <div className="flex items-center">
                  <UserCog className="mr-2 h-5 w-5 text-green-500" />
                  Editar Cliente
                </div>
              ) : (
                <div className="flex items-center">
                  <UserPlus className="mr-2 h-5 w-5 text-green-500" />
                  Novo Cliente
                </div>
              )}
            </DialogTitle>
            <DialogDescription>
              {selectedCliente
                ? "Edite as informações do cliente."
                : "Preencha os dados para cadastrar um novo cliente."}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-green-500" />
                      Nome
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nome completo" {...field} className="border-green-200 focus-visible:ring-green-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <BadgeInfo className="h-4 w-4 mr-1 text-green-500" />
                      CPF
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="CPF (apenas números ou formatado)" {...field} className="border-green-200 focus-visible:ring-green-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-amber-500" />
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Email (opcional)" {...field} className="border-green-200 focus-visible:ring-green-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-green-500" />
                      Telefone
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Telefone (opcional)" {...field} className="border-green-200 focus-visible:ring-green-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsOpenDialog(false)} type="button" className="border-gray-200">
                  Cancelar
                </Button>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className={selectedCliente ? "bg-green-600 hover:bg-green-700" : "bg-green-600 hover:bg-green-700"}
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {selectedCliente ? "Atualizar" : "Cadastrar"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Diálogo de confirmação de exclusão */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="border-red-100">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-700 flex items-center">
              <UserMinus className="mr-2 h-5 w-5 text-red-500" />
              Confirmar exclusão
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o cliente{" "}
              <span className="font-medium text-red-600">{selectedCliente?.nome}</span>?
              {selectedCliente?.quartos?.length > 0 && (
                <div className="mt-2 flex items-center text-amber-600 bg-amber-50 p-2 rounded-md">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Este cliente possui histórico de hospedagens.
                </div>
              )}
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-gray-200">Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteCliente}
              disabled={isDeleting}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 