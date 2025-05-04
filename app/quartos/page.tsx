"use client";

import { useState, useEffect } from "react";
import { QuartoCard } from "./components/QuartoCard";
import { QuartosFiltros, LegendaStatus } from "./components/QuartosFiltros";
import { QuartoDetalhesModal } from "./components/QuartoDetalhesModal";
import { useQuartosAPI } from "./hooks/useQuartosAPI";
import { Quarto, Telefone } from "./types";
import { Button } from "@/components/ui/button";
import { PlusCircle, TrashIcon, Database, BedDouble } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function QuartosPage() {
  const { 
    quartos, 
    loading, 
    isAdmin,
    carregarTelefones,
    adicionarTelefone, 
    removerTelefone,
    atualizarStatusQuarto,
    adicionarQuarto,
    removerQuarto
  } = useQuartosAPI();
  
  const [quartoSelecionado, setQuartoSelecionado] = useState<Quarto | null>(null);
  const [quartoSelecionadoId, setQuartoSelecionadoId] = useState<number | null>(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [filtroAndar, setFiltroAndar] = useState<number | null>(null);
  const [filtroStatus, setFiltroStatus] = useState<string>("todos");

  // Estados para o modal de adicionar quarto
  const [modalNovoQuartoAberto, setModalNovoQuartoAberto] = useState(false);
  const [novoQuarto, setNovoQuarto] = useState({
    numero: "",
    andar: "",
    tipo: "standard"
  });

  // Estados para o modal de confirmação de exclusão
  const [modalConfirmacaoAberto, setModalConfirmacaoAberto] = useState(false);
  const [quartoParaExcluir, setQuartoParaExcluir] = useState<Quarto | null>(null);
  
  // Estado para o modal de seed de quartos
  const [modalSeedAberto, setModalSeedAberto] = useState(false);
  const [seedLoading, setSeedLoading] = useState(false);

  // Efeito para atualizar o quartoSelecionado quando quartos mudarem
  useEffect(() => {
    if (quartoSelecionadoId !== null) {
      const quartoAtualizado = quartos.find(q => q.id === quartoSelecionadoId);
      if (quartoAtualizado) {
        setQuartoSelecionado(quartoAtualizado);
      }
    }
  }, [quartos, quartoSelecionadoId]);

  // Filtrar quartos por andar e status
  const quartosFiltrados = quartos.filter(quarto => {
    const andarMatch = filtroAndar === null || quarto.andar === filtroAndar;
    const statusMatch = filtroStatus === "todos" || quarto.status === filtroStatus;
    return andarMatch && statusMatch;
  });
  
  // Agrupar quartos por andar
  const quartosAgrupados = quartosFiltrados.reduce<Record<number, Quarto[]>>((acc, quarto) => {
    if (!acc[quarto.andar]) {
      acc[quarto.andar] = [];
    }
    acc[quarto.andar].push(quarto);
    return acc;
  }, {});
  
  // Obter lista de andares únicos
  const andares = [...new Set(quartos.map(q => q.andar))].sort();
  
  const abrirModal = async (quarto: Quarto) => {
    // Se for um quarto ocupado, carregamos os telefones atualizados
    if (quarto.status === 'ocupado') {
      setQuartoSelecionado(quarto); // Definir imediatamente para feedback visual
      setQuartoSelecionadoId(quarto.id); // Armazenar o ID para atualizações futuras
      setModalAberto(true); // Abrir o modal imediatamente
      
      // Carregar telefones em segundo plano
      await carregarTelefones(quarto.id);
    } else {
      // Para quartos não ocupados, apenas abrir o modal
      setQuartoSelecionado(quarto);
      setQuartoSelecionadoId(quarto.id);
      setModalAberto(true);
    }
  };
  
  const fecharModal = () => {
    setModalAberto(false);
    // Aguardar a animação do modal para limpar o estado
    setTimeout(() => {
      setQuartoSelecionado(null);
      setQuartoSelecionadoId(null);
    }, 300);
  };
  
  const handleAtribuirCliente = async (cliente: string) => {
    if (!quartoSelecionado) return;
    
    await atualizarStatusQuarto(quartoSelecionado.id, 'ocupado', cliente);
    fecharModal();
  };
  
  const handleLiberarQuarto = async () => {
    if (!quartoSelecionado) return;
    
    await atualizarStatusQuarto(quartoSelecionado.id, 'disponivel');
    fecharModal();
  };
  
  const handleAdicionarTelefone = async (telefone: Telefone) => {
    if (!quartoSelecionado) return;
    
    await adicionarTelefone(quartoSelecionado.id, telefone);
    
    // Não é mais necessário atualizar manualmente aqui, pois o useEffect cuida disso
    // quando o estado de quartos é atualizado pelo useQuartosAPI
  };
  
  const handleRemoverTelefone = async (telefoneId?: number) => {
    if (!quartoSelecionado || !telefoneId) return;
    
    await removerTelefone(quartoSelecionado.id, telefoneId);
    
    // Não é mais necessário atualizar manualmente aqui, pois o useEffect cuida disso
    // quando o estado de quartos é atualizado pelo useQuartosAPI
  };

  // Função para abrir o modal de exclusão
  const abrirModalConfirmacao = (quarto: Quarto) => {
    setQuartoParaExcluir(quarto);
    setModalConfirmacaoAberto(true);
  };

  // Função para excluir o quarto após confirmação
  const confirmarExclusao = async () => {
    if (!quartoParaExcluir) return;
    
    const sucesso = await removerQuarto(quartoParaExcluir.id);
    
    if (sucesso) {
      setModalConfirmacaoAberto(false);
      setQuartoParaExcluir(null);
    }
  };

  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNovoQuarto({
      ...novoQuarto,
      [name]: value
    });
  };

  // Função para adicionar um novo quarto
  const handleAdicionarQuarto = async () => {
    // Validar os campos
    if (!novoQuarto.numero || !novoQuarto.andar) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    const dados = {
      numero: parseInt(novoQuarto.numero),
      andar: parseInt(novoQuarto.andar),
      tipo: novoQuarto.tipo
    };

    const resultado = await adicionarQuarto(dados);
    
    if (resultado) {
      setModalNovoQuartoAberto(false);
      // Limpar o formulário
      setNovoQuarto({
        numero: "",
        andar: "",
        tipo: "standard"
      });
    }
  };

  // Função para adicionar os quartos de teste (seed)
  const handleSeedQuartos = async (force: boolean = false) => {
    try {
      setSeedLoading(true);
      
      const response = await fetch(`/api/admin/seed/quartos${force ? '?force=true' : ''}`, {
        method: 'POST',
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao criar quartos de teste');
      }
      
      toast.success(data.message);
      // Recarregar a lista de quartos usando a API já disponível
      toast.success("Recarregando lista de quartos...");
      // Não precisamos fazer nada aqui, pois o componente será atualizado automaticamente
      setModalSeedAberto(false);
    } catch (error) {
      console.error('Erro ao criar quartos de teste:', error);
      toast.error(`Erro ao criar quartos de teste: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setSeedLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse text-center">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4 mx-auto"></div>
          <div className="h-4 w-48 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-green-50 via-white to-green-50 p-4 rounded-lg shadow-sm border border-green-100">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            Quartos
          </h1>
          <p className="text-muted-foreground flex items-center">
            <BedDouble className="h-4 w-4 mr-1 text-green-600" />
            Gerencie os quartos do resort
          </p>
        </div>
        {isAdmin ? (
          <Button
            onClick={() => setModalNovoQuartoAberto(true)}
            className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Quarto
          </Button>
        ) : null}
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <QuartosFiltros
            filtroAndar={filtroAndar}
            setFiltroAndar={setFiltroAndar}
            filtroStatus={filtroStatus}
            setFiltroStatus={setFiltroStatus}
            andares={andares}
          />
        </div>

        {isAdmin ? (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={() => setModalSeedAberto(true)}
          >
            <Database className="h-4 w-4" />
            <span>Criar Quartos Teste</span>
          </Button>
        ) : null}
      </div>
      
      {/* Legenda de status */}
      <LegendaStatus />

      {/* Quartos agrupados por andar */}
      {Object.keys(quartosAgrupados).length > 0 ? (
        Object.entries(quartosAgrupados).map(([andar, quartos]) => (
          <div key={andar} className="space-y-3">
            <h2 className="text-lg font-semibold">{andar}º Andar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-4">
              {quartos.map((quarto) => (
                <QuartoCard 
                  key={quarto.id} 
                  quarto={quarto} 
                  onClick={() => abrirModal(quarto)} 
                  onDelete={isAdmin ? () => abrirModalConfirmacao(quarto) : undefined}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">Nenhum quarto encontrado com os filtros selecionados</p>
        </div>
      )}

      {/* Modal de detalhes do quarto */}
      <QuartoDetalhesModal 
        quarto={quartoSelecionado}
        aberto={modalAberto}
        onOpenChange={setModalAberto}
        onAtribuirCliente={handleAtribuirCliente}
        onLiberarQuarto={handleLiberarQuarto}
        onAdicionarTelefone={handleAdicionarTelefone}
        onRemoverTelefone={handleRemoverTelefone}
      />

      {/* Modal para adicionar novo quarto */}
      <Dialog open={modalNovoQuartoAberto} onOpenChange={setModalNovoQuartoAberto}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Novo Quarto</DialogTitle>
            <DialogDescription>
              Preencha os dados para criar um novo quarto no sistema.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="andar" className="text-right">
                Andar
              </Label>
              <Input
                id="andar"
                name="andar"
                className="col-span-3"
                value={novoQuarto.andar}
                onChange={handleInputChange}
                type="number"
                min="1"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="numero" className="text-right">
                Número
              </Label>
              <Input
                id="numero"
                name="numero"
                className="col-span-3"
                value={novoQuarto.numero}
                onChange={handleInputChange}
                type="number"
                min="100"
                placeholder="Ex: 101"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tipo" className="text-right">
                Tipo
              </Label>
              <Select 
                value={novoQuarto.tipo} 
                onValueChange={(value) => setNovoQuarto({...novoQuarto, tipo: value})}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="luxo">Luxo</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="suite">Suíte</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalNovoQuartoAberto(false)}>Cancelar</Button>
            <Button onClick={handleAdicionarQuarto}>Adicionar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal de confirmação de exclusão */}
      <Dialog open={modalConfirmacaoAberto} onOpenChange={setModalConfirmacaoAberto}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Confirmar Exclusão</DialogTitle>
            <DialogDescription>
              Você está prestes a excluir o quarto {quartoParaExcluir?.numero}. Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <p className="text-sm font-medium text-orange-600">
              Atenção: A exclusão só é possível se o quarto não estiver ocupado.
            </p>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalConfirmacaoAberto(false)}>Cancelar</Button>
            <Button variant="destructive" onClick={confirmarExclusao}>Excluir</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Modal de seed de quartos */}
      <Dialog open={modalSeedAberto} onOpenChange={setModalSeedAberto}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Criar Quartos de Teste</DialogTitle>
            <DialogDescription>
              Esta ação irá criar 30 quartos de teste (10 por andar) no banco de dados.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <p className="text-sm mb-4">
              Serão criados quartos com os números de 101-110, 201-210 e 301-310, caso ainda não existam.
            </p>
            <p className="text-sm font-medium text-orange-600">
              Você também pode recriar todos os quartos que não estão ocupados usando a opção "Forçar recriação".
            </p>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setModalSeedAberto(false)} disabled={seedLoading}>
              Cancelar
            </Button>
            <Button 
              variant="default" 
              onClick={() => handleSeedQuartos(false)}
              disabled={seedLoading}
            >
              {seedLoading ? 'Criando...' : 'Criar Quartos'}
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => handleSeedQuartos(true)}
              disabled={seedLoading}
            >
              {seedLoading ? 'Processando...' : 'Forçar Recriação'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}