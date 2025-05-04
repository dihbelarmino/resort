"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Quarto, Telefone } from "../types";

interface ContatosClienteProps {
  quarto: Quarto;
  onAdicionarTelefone: (telefone: Telefone) => Promise<void>;
  onRemoverTelefone: (telefoneId?: number) => Promise<void>;
  onLiberarQuarto: () => Promise<void>;
}

export function ContatosCliente({
  quarto,
  onAdicionarTelefone,
  onRemoverTelefone,
  onLiberarQuarto
}: ContatosClienteProps) {
  const [novoTelefone, setNovoTelefone] = useState<Telefone>({ nome: "", numero: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [numeroError, setNumeroError] = useState<string | null>(null);
  const [telefones, setTelefones] = useState<Telefone[]>(quarto.telefones || []);

  // Atualizar telefones locais quando o quarto mudar
  useEffect(() => {
    setTelefones(quarto.telefones || []);
  }, [quarto.telefones]);

  // Função para validar o número de telefone
  const validarNumeroTelefone = (numero: string): boolean => {
    // Apenas números, exatamente 10 ou 11 dígitos (DDD + número)
    // 10 dígitos = DDD + 8 dígitos (telefone fixo ou celular antigo)
    // 11 dígitos = DDD + 9 dígitos (celular atual)
    const regex = /^[1-9][0-9]{9,10}$/;
    return regex.test(numero);
  };

  // Validar entrada de telefone para conter apenas números
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remover caracteres não numéricos
    const numerosApenas = value.replace(/\D/g, '');
    setNovoTelefone({ ...novoTelefone, numero: numerosApenas });
    
    // Validar o número
    if (numerosApenas.length > 0) {
      if (validarNumeroTelefone(numerosApenas)) {
        setNumeroError(null);
      } else {
        if (numerosApenas.length < 10) {
          setNumeroError("Digite DDD + número (mínimo 10 dígitos)");
        } else if (numerosApenas.length > 11) {
          setNumeroError("Número muito longo");
        } else {
          setNumeroError("Formato inválido");
        }
      }
    } else {
      setNumeroError(null);
    }
  };

  const handleAdicionarTelefone = async () => {
    if (!novoTelefone.nome || !novoTelefone.numero) return;
    if (!validarNumeroTelefone(novoTelefone.numero)) {
      setNumeroError("Número de telefone inválido");
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Criar o telefone temporário para feedback imediato
      const telefoneTemp: Telefone = {
        id: Math.floor(Math.random() * -1000) - 1, // ID negativo temporário
        nome: novoTelefone.nome,
        numero: novoTelefone.numero,
        temporario: true
      };
      
      // Adicionar ao estado local para feedback imediato
      setTelefones(prevTelefones => [...prevTelefones, telefoneTemp]);
      
      // Chamada API para persistir
      await onAdicionarTelefone(novoTelefone);
      
      // Limpar o formulário após adicionar
      setNovoTelefone({ nome: "", numero: "" });
      setNumeroError(null);
    } catch (error) {
      console.error("Erro ao adicionar telefone:", error);
      
      // Remover o telefone temporário em caso de erro
      setTelefones(prevTelefones => 
        prevTelefones.filter(t => !t.temporario)
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoverTelefone = async (telefoneId?: number) => {
    if (!telefoneId) return;
    
    try {
      // Remove imediatamente da UI para feedback instantâneo
      setTelefones(prevTelefones => 
        prevTelefones.filter(t => t.id !== telefoneId)
      );
      
      // Chama a API para persistir a remoção
      await onRemoverTelefone(telefoneId);
    } catch (error) {
      console.error("Erro ao remover telefone:", error);
      // Se houver erro, recarregar telefones do quarto
      setTelefones(quarto.telefones || []);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Contatos do Cliente</h3>
      
      {/* Lista de telefones registrados */}
      <div className="space-y-2">
        {telefones.length > 0 ? (
          telefones.map((telefone) => (
            <div key={telefone.id} className={`flex items-center justify-between p-2 rounded-md ${telefone.temporario ? 'bg-blue-50' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-2">
                <Phone className={`h-4 w-4 ${telefone.temporario ? 'text-blue-500' : 'text-gray-500'}`} />
                <div>
                  <p className="text-sm font-medium">{telefone.nome}</p>
                  <p className="text-xs text-gray-500">{telefone.numero}</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => handleRemoverTelefone(telefone.id)}
                className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">Nenhum contato cadastrado</p>
        )}
      </div>
      
      {/* Adicionar novo contato */}
      <div className="space-y-2">
        <Label>Adicionar Contato</Label>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="nome" className="sr-only">Nome</Label>
            <Input
              id="nome"
              placeholder="Primeiro nome"
              value={novoTelefone.nome}
              onChange={(e) => setNovoTelefone({ ...novoTelefone, nome: e.target.value })}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label htmlFor="telefone" className="sr-only">Telefone</Label>
            <Input
              id="telefone"
              placeholder="DDD + número (ex: 17997095689)"
              value={novoTelefone.numero}
              onChange={handleTelefoneChange}
              disabled={isSubmitting}
              inputMode="numeric" // Mostra teclado numérico em dispositivos móveis
              className={numeroError && novoTelefone.numero ? "border-red-500 ring-red-500" : ""}
            />
            {numeroError && novoTelefone.numero && (
              <p className="text-xs text-red-500 mt-1">{numeroError}</p>
            )}
          </div>
        </div>
        <Button 
          onClick={handleAdicionarTelefone} 
          disabled={!novoTelefone.nome || !novoTelefone.numero || isSubmitting || !!numeroError}
          className="w-full mt-2"
        >
          {isSubmitting ? 'Adicionando...' : 'Adicionar Contato'}
        </Button>
      </div>
      
      <Button 
        variant="destructive" 
        className="w-full mt-4"
        onClick={onLiberarQuarto}
        disabled={isSubmitting}
      >
        Liberar Quarto
      </Button>
    </div>
  );
} 