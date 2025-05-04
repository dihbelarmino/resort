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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  PlusCircle,
  Users,
  Pencil,
  Trash2,
  Lock,
  Mail,
  User,
  Shield,
  UserPlus,
  Search,
  Key,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Filter,
  UserCog,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { ScrollArea } from "@/components/ui/scroll-area";

interface User {
  id: number;
  nome: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  foto?: string;
  status: "active" | "inactive";
  ultimoLogin?: Date;
}

const userRoles = [
  { value: "admin", label: "Administrador", description: "Acesso total ao sistema" },
  { value: "manager", label: "Gerente", description: "Gerenciamento de operações e relatórios" },
  { value: "receptionist", label: "Recepcionista", description: "Gestão de check-in/check-out e reservas" },
  { value: "housekeeper", label: "Camareira", description: "Acesso a serviços de limpeza de quartos" },
  { value: "laundry", label: "Lavanderia", description: "Acesso a serviços de lavanderia" },
  { value: "maintenance", label: "Manutenção", description: "Acesso a serviços de manutenção" }
];

// Simular usuários para demonstração
const mockUsers: User[] = [
  {
    id: 1,
    nome: "Administrador",
    email: "admin@resort.com",
    role: "admin",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
    status: "active",
    ultimoLogin: new Date("2023-05-03T14:32:00")
  },
  {
    id: 2,
    nome: "João Silva",
    email: "joao@resort.com",
    role: "manager",
    createdAt: new Date("2023-02-15"),
    updatedAt: new Date("2023-02-15"),
    status: "active",
    ultimoLogin: new Date("2023-05-02T09:45:00")
  },
  {
    id: 3,
    nome: "Maria Santos",
    email: "maria@resort.com",
    role: "receptionist",
    createdAt: new Date("2023-03-10"),
    updatedAt: new Date("2023-03-10"),
    status: "active",
    ultimoLogin: new Date("2023-05-03T08:15:00")
  },
  {
    id: 4,
    nome: "Pedro Almeida",
    email: "pedro@resort.com",
    role: "housekeeper",
    createdAt: new Date("2023-03-22"),
    updatedAt: new Date("2023-04-05"),
    status: "active",
    ultimoLogin: new Date("2023-05-01T07:30:00")
  },
  {
    id: 5,
    nome: "Ana Oliveira",
    email: "ana@resort.com",
    role: "laundry",
    createdAt: new Date("2023-04-10"),
    updatedAt: new Date("2023-04-10"),
    status: "inactive",
    ultimoLogin: new Date("2023-04-20T10:20:00")
  },
  {
    id: 6,
    nome: "Carlos Pereira",
    email: "carlos@resort.com",
    role: "maintenance",
    createdAt: new Date("2023-04-22"),
    updatedAt: new Date("2023-04-22"),
    status: "active",
    ultimoLogin: new Date("2023-05-02T16:45:00")
  }
];

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  // Estado para o formulário de usuário
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    role: "",
    status: "active",
    senha: "",
    confirmarSenha: "",
  });

  useEffect(() => {
    // Simulação de carregamento de dados da API
    setTimeout(() => {
      setUsers(mockUsers);
      setFilteredUsers(mockUsers);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterUsers();
  }, [searchQuery, selectedRole, selectedStatus, users]);

  const filterUsers = () => {
    let filtered = [...users];

    // Filtro por texto (nome ou email)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        user => 
          user.nome.toLowerCase().includes(query) || 
          user.email.toLowerCase().includes(query)
      );
    }

    // Filtro por cargo
    if (selectedRole) {
      filtered = filtered.filter(user => user.role === selectedRole);
    }

    // Filtro por status
    if (selectedStatus) {
      filtered = filtered.filter(user => user.status === selectedStatus);
    }

    setFilteredUsers(filtered);
  };

  const handleAddUser = () => {
    setIsEditMode(false);
    setSelectedUser(null);
    setFormData({
      nome: "",
      email: "",
      role: "",
      status: "active",
      senha: "",
      confirmarSenha: "",
    });
    setIsDialogOpen(true);
  };

  const handleEditUser = (user: User) => {
    setIsEditMode(true);
    setSelectedUser(user);
    setFormData({
      nome: user.nome,
      email: user.email,
      role: user.role,
      status: user.status,
      senha: "",
      confirmarSenha: "",
    });
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (user: User) => {
    setSelectedUser(user);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteUser = () => {
    if (!selectedUser) return;
    
    // Em um caso real, aqui você faria uma chamada à API para excluir o usuário
    setUsers(prev => prev.filter(u => u.id !== selectedUser.id));
    setIsDeleteDialogOpen(false);
    toast.success(`Usuário ${selectedUser.nome} excluído com sucesso!`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleStatusChange = (value: string) => {
    setFormData(prev => ({ ...prev, status: value }));
  };

  const validateForm = () => {
    if (!formData.nome.trim()) {
      toast.error("O nome é obrigatório");
      return false;
    }
    
    if (!formData.email.trim()) {
      toast.error("O email é obrigatório");
      return false;
    }
    
    if (!formData.role) {
      toast.error("Selecione um cargo");
      return false;
    }
    
    if (!isEditMode && !formData.senha) {
      toast.error("A senha é obrigatória");
      return false;
    }
    
    if (formData.senha && formData.senha !== formData.confirmarSenha) {
      toast.error("As senhas não coincidem");
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Em um caso real, aqui você faria uma chamada à API para salvar ou atualizar o usuário
    if (isEditMode && selectedUser) {
      // Atualizar usuário existente
      setUsers(prev => 
        prev.map(u => 
          u.id === selectedUser.id 
            ? { 
                ...u, 
                nome: formData.nome, 
                email: formData.email, 
                role: formData.role,
                status: formData.status as "active" | "inactive",
                updatedAt: new Date() 
              } 
            : u
        )
      );
      toast.success(`Usuário ${formData.nome} atualizado com sucesso!`);
    } else {
      // Adicionar novo usuário
      const newUser: User = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        nome: formData.nome,
        email: formData.email,
        role: formData.role,
        status: formData.status as "active" | "inactive",
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      setUsers(prev => [...prev, newUser]);
      toast.success(`Usuário ${formData.nome} criado com sucesso!`);
    }
    
    setIsDialogOpen(false);
  };

  const getRoleInfo = (role: string) => {
    return userRoles.find(r => r.value === role) || { value: role, label: role, description: "" };
  };

  const getRoleBadge = (role: string) => {
    const roleColors = {
      admin: "bg-red-100 text-red-800 border-red-200",
      manager: "bg-purple-100 text-purple-800 border-purple-200",
      receptionist: "bg-blue-100 text-blue-800 border-blue-200",
      housekeeper: "bg-green-100 text-green-800 border-green-200",
      laundry: "bg-amber-100 text-amber-800 border-amber-200",
      maintenance: "bg-slate-100 text-slate-800 border-slate-200"
    };
    
    const roleInfo = getRoleInfo(role);
    
    return (
      <Badge 
        variant="outline" 
        className={`${(roleColors as any)[role] || "bg-gray-100 text-gray-800 border-gray-200"}`}
      >
        {roleInfo.label}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
        <CheckCircle2 className="mr-1 h-3 w-3" />
        Ativo
      </Badge>
    ) : (
      <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
        <XCircle className="mr-1 h-3 w-3" />
        Inativo
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-green-50 via-white to-green-50 p-4 rounded-lg shadow-sm border border-green-100">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            Gerenciamento de Usuários
          </h1>
          <p className="text-muted-foreground flex items-center">
            <Users className="h-4 w-4 mr-1 text-green-500" />
            Adicione, edite ou remova usuários do sistema
          </p>
        </div>
        <Button 
          onClick={handleAddUser}
          className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg"
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Novo Usuário
        </Button>
      </div>

      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-green-500" />
          <Input
            type="search"
            placeholder="Buscar por nome ou email..."
            className="pl-8 border-green-200 focus:border-green-400 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={selectedRole || "all"} onValueChange={(value) => setSelectedRole(value === "all" ? null : value)}>
            <SelectTrigger className="w-[180px] border-green-200">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <SelectValue placeholder="Todos os cargos" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os cargos</SelectItem>
              {userRoles.map((role) => (
                <SelectItem key={role.value} value={role.value}>
                  {role.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedStatus || "all"} onValueChange={(value) => setSelectedStatus(value === "all" ? null : value)}>
            <SelectTrigger className="w-[150px] border-green-200">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-green-500" />
                <SelectValue placeholder="Todos" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="active">Ativos</SelectItem>
              <SelectItem value="inactive">Inativos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tabela de usuários */}
      <Card className="shadow-md border border-green-100 hover:shadow-lg transition-all">
        <CardContent className="p-0">
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
          ) : filteredUsers.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-green-50">
                    <TableHead className="text-green-700">Usuário</TableHead>
                    <TableHead className="text-green-700">Cargo</TableHead>
                    <TableHead className="text-green-700 hidden md:table-cell">Email</TableHead>
                    <TableHead className="text-green-700 hidden md:table-cell">Status</TableHead>
                    <TableHead className="text-green-700 hidden lg:table-cell">Criado em</TableHead>
                    <TableHead className="text-right text-green-700">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id} className="hover:bg-green-50/50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9 border border-green-100">
                            <AvatarFallback className="bg-green-100 text-green-700">
                              {user.nome.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.nome}</p>
                            <p className="text-xs text-muted-foreground md:hidden">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getRoleBadge(user.role)}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-green-500" />
                          {user.email}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {getStatusBadge(user.status)}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                        {user.createdAt.toLocaleDateString("pt-BR")}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-green-600 hover:text-green-800 hover:bg-green-100"
                            onClick={() => handleEditUser(user)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-700 hover:bg-red-100"
                            onClick={() => openDeleteDialog(user)}
                            disabled={user.role === "admin" && filteredUsers.filter(u => u.role === "admin").length <= 1}
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
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-green-800">Nenhum usuário encontrado</h3>
              <p className="text-muted-foreground text-center mt-2 max-w-md">
                {searchQuery || selectedRole || selectedStatus
                  ? "Não foi encontrado nenhum usuário com os critérios de busca informados."
                  : "Ainda não há usuários cadastrados no sistema."}
              </p>
              {(searchQuery || selectedRole || selectedStatus) && (
                <Button
                  variant="outline"
                  className="mt-4 border-green-200 text-green-700 hover:bg-green-50"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedRole(null);
                    setSelectedStatus(null);
                  }}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Limpar filtros
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal para adicionar/editar usuário */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className={isEditMode ? "text-green-700" : "text-green-700"}>
              {isEditMode ? (
                <div className="flex items-center">
                  <UserCog className="mr-2 h-5 w-5 text-green-500" />
                  Editar Usuário
                </div>
              ) : (
                <div className="flex items-center">
                  <UserPlus className="mr-2 h-5 w-5 text-green-500" />
                  Novo Usuário
                </div>
              )}
            </DialogTitle>
            <DialogDescription>
              {isEditMode
                ? "Edite as informações do usuário abaixo."
                : "Preencha os campos para adicionar um novo usuário."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nome" className="flex items-center">
                  <User className="h-4 w-4 mr-1 text-green-500" />
                  Nome
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="border-green-200 focus-visible:ring-green-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="h-4 w-4 mr-1 text-green-500" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-green-200 focus-visible:ring-green-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role" className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-green-500" />
                  Cargo
                </Label>
                <Select value={formData.role} onValueChange={handleRoleChange}>
                  <SelectTrigger id="role" className="border-green-200">
                    <SelectValue placeholder="Selecione um cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    {userRoles.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        <div className="flex flex-col">
                          <span>{role.label}</span>
                          <span className="text-xs text-muted-foreground">{role.description}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status" className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-1 text-green-500" />
                  Status
                </Label>
                <Select value={formData.status} onValueChange={handleStatusChange}>
                  <SelectTrigger id="status" className="border-green-200">
                    <SelectValue placeholder="Selecione um status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Ativo</SelectItem>
                    <SelectItem value="inactive">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="senha" className="flex items-center">
                  <Lock className="h-4 w-4 mr-1 text-green-500" />
                  Senha {isEditMode && <span className="text-xs text-muted-foreground ml-1">(deixe em branco para manter a atual)</span>}
                </Label>
                <Input
                  id="senha"
                  name="senha"
                  type="password"
                  value={formData.senha}
                  onChange={handleInputChange}
                  className="border-green-200 focus-visible:ring-green-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmarSenha" className="flex items-center">
                  <Key className="h-4 w-4 mr-1 text-green-500" />
                  Confirmar Senha
                </Label>
                <Input
                  id="confirmarSenha"
                  name="confirmarSenha"
                  type="password"
                  value={formData.confirmarSenha}
                  onChange={handleInputChange}
                  className="border-green-200 focus-visible:ring-green-500"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" type="button" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
              <Button 
                type="submit" 
                className={isEditMode ? "bg-green-600 hover:bg-green-700" : "bg-green-600 hover:bg-green-700"}
              >
                {isEditMode ? "Salvar Alterações" : "Adicionar Usuário"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Diálogo de confirmação de exclusão */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="border-red-100">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-700 flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
              Confirmar Exclusão
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o usuário <span className="font-medium text-red-600">{selectedUser?.nome}</span>?
              <div className="mt-2 bg-amber-50 p-3 rounded-md border border-amber-200 text-amber-800 flex items-start">
                <ShieldAlert className="h-5 w-5 mr-2 text-amber-600 mt-0.5" />
                <div>
                  <p className="font-medium">Esta ação não pode ser desfeita.</p>
                  <p className="text-sm">O usuário perderá acesso ao sistema imediatamente.</p>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-gray-200">Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteUser}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 