"use client";

import { useState, useEffect, useCallback } from "react";
import { UserPlus, Loader2, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ContatosCliente } from "./ContatosCliente";
import { Quarto, Telefone } from "../types";
import { useClientesAPI } from "../hooks/useClientesAPI";
import { useSession } from "next-auth/react";

interface QuartoDetalhesModalProps {
  quarto: Quarto | null;
  aberto: boolean;
  onOpenChange: (open: boolean) => void;
  onAtribuirCliente: (cliente: string) => Promise<void>;
  onLiberarQuarto: () => Promise<void>;
  onAdicionarTelefone: (telefone: Telefone) => Promise<void>;
  onRemoverTelefone: (telefoneId?: number) => Promise<void>;
}

export function QuartoDetalhesModal({
  quarto,
  aberto,
  onOpenChange,
  onAtribuirCliente,
  onLiberarQuarto,
  onAdicionarTelefone,
  onRemoverTelefone
}: QuartoDetalhesModalProps) {
  const [clienteSelecionado, setClienteSelecionado] = useState("");
  const { clientes, loading, carregarClientes } = useClientesAPI();
  const { data: session } = useSession();
  
  // Verificar se o usuário é admin
  const isAdmin = session?.user?.role === 'admin' || (session?.user as any)?.permissao === 'admin';

  // Recarregar a lista de clientes apenas quando o modal for aberto e o quarto estiver disponível
  useEffect(() => {
    if (aberto && quarto?.status === 'disponivel') {
      carregarClientes();
    }
  }, [aberto, quarto?.status, carregarClientes]);

  const handleAtribuirCliente = useCallback(async () => {
    if (!clienteSelecionado) return;
    await onAtribuirCliente(clienteSelecionado);
    setClienteSelecionado(""); // Limpar a seleção após atribuir
  }, [clienteSelecionado, onAtribuirCliente]);
  
  // Função para colocar o quarto em manutenção
  const handleColocarEmManutencao = useCallback(async () => {
    if (!quarto) return;
    // Usamos a mesma função onAtribuirCliente mas passando 'manutencao' como status
    await fetch(`/api/quartos/${quarto.id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'manutencao' }),
    });
    onOpenChange(false);
    // Recarregar a página para atualizar o estado
    window.location.reload();
  }, [quarto, onOpenChange]);
  
  // Função para deixar o quarto disponível novamente
  const handleTornarDisponivel = useCallback(async () => {
    if (!quarto) return;
    // Usamos a mesma função onLiberarQuarto
    await fetch(`/api/quartos/${quarto.id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'disponivel' }),
    });
    onOpenChange(false);
    // Recarregar a página para atualizar o estado
    window.location.reload();
  }, [quarto, onOpenChange]);

  // Reset client selection when modal is closed
  useEffect(() => {
    if (!aberto) {
      setClienteSelecionado("");
    }
  }, [aberto]);

  if (!quarto) return null;

  return (
    <Dialog open={aberto} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            Quarto {quarto.numero}
          </DialogTitle>
          <DialogDescription>
            {quarto.status === 'ocupado' 
              ? 'Gerenciar quarto ocupado' 
              : quarto.status === 'manutencao' 
                ? 'Quarto em manutenção' 
                : 'Atribuir quarto a um cliente'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Informações do quarto */}
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium text-sm mb-2">Informações do Quarto</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Número:</div>
              <div className="font-medium">{quarto.numero}</div>
              
              <div>Andar:</div>
              <div className="font-medium">{quarto.andar}º</div>
              
              <div>Status:</div>
              <div className="font-medium">
                {quarto.status === 'disponivel' && 'Disponível'}
                {quarto.status === 'ocupado' && 'Ocupado'}
                {quarto.status === 'manutencao' && 'Em Manutenção'}
              </div>
              
              {quarto.cliente && (
                <>
                  <div>Cliente:</div>
                  <div className="font-medium">{quarto.cliente}</div>
                </>
              )}
            </div>
          </div>
          
          {/* Ações administrativas para manutenção */}
          {isAdmin && quarto.status === 'disponivel' && (
            <div className="pt-2">
              <Button
                variant="destructive"
                className="w-full"
                onClick={handleColocarEmManutencao}
              >
                <Wrench className="mr-2 h-4 w-4" />
                Colocar em Manutenção
              </Button>
            </div>
          )}
          
          {/* Botão para tornar disponível quando em manutenção */}
          {isAdmin && quarto.status === 'manutencao' && (
            <div className="pt-2">
              <Button
                variant="default"
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={handleTornarDisponivel}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Tornar Disponível
              </Button>
            </div>
          )}
          
          {/* Atribuição de cliente */}
          {quarto.status === 'disponivel' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="cliente">Selecionar Cliente</Label>
                {loading ? (
                  <div className="flex items-center justify-center py-2">
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    <span className="text-sm text-gray-500">Carregando clientes...</span>
                  </div>
                ) : (
                  <>
                    {clientes.length === 0 ? (
                      <div className="text-sm text-orange-500 mt-1">
                        Nenhum cliente cadastrado. Adicione clientes no cadastro de clientes.
                      </div>
                    ) : (
                      <Select 
                        value={clienteSelecionado} 
                        onValueChange={setClienteSelecionado}
                      >
                        <SelectTrigger id="cliente" className="w-full">
                          <SelectValue placeholder="Selecione um cliente" />
                        </SelectTrigger>
                        <SelectContent>
                          {clientes.map((cliente) => (
                            <SelectItem key={cliente.id} value={cliente.nome}>
                              {cliente.nome} {cliente.cpf ? `(CPF: ${cliente.cpf})` : ''}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </>
                )}
              </div>
              
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={handleAtribuirCliente}
                disabled={!clienteSelecionado || loading || clientes.length === 0}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Atribuir Cliente ao Quarto
              </Button>
            </div>
          )}
          
          {/* Contatos do Cliente */}
          {quarto.status === 'ocupado' && (
            <ContatosCliente
              quarto={quarto}
              onAdicionarTelefone={onAdicionarTelefone}
              onRemoverTelefone={onRemoverTelefone}
              onLiberarQuarto={onLiberarQuarto}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 