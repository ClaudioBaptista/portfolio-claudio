import React, { useState } from 'react';
import { Search, PackageCheck, Truck, CheckCircle2, Clock } from 'lucide-react';

export default function RastreioEncomenda() {
  const [codigo, setCodigo] = useState('');
  const [rastreioAtivo, setRastreioAtivo] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const buscarRastreio = (e) => {
    e.preventDefault();
    if (!codigo) return;
    
    setCarregando(true);
    setRastreioAtivo(false);

    // Simula tempo de resposta da requisição
    setTimeout(() => {
      setCarregando(false);
      setRastreioAtivo(true);
    }, 1200);
  };

  return (
    <div className="max-w-md mx-auto w-full bg-slate-900 border border-slate-800 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
          <PackageCheck className="w-6 h-6" /> Rastreio
        </h2>
        <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-1 rounded border border-blue-500/20 uppercase">
          Timeline Simulada
        </span>
      </div>
      <p className="text-slate-400 mb-6 text-sm">Simulador de consulta de status de entrega.</p>
      
      <form onSubmit={buscarRastreio} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Código de Rastreamento</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={codigo}
              onChange={(e) => setCodigo(e.target.value.toUpperCase())}
              placeholder="Ex: BR123456789"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white text-sm uppercase"
              required
            />
            <button 
              type="submit" 
              disabled={carregando}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-1.5 text-sm"
            >
              <Search className="w-4 h-4" />
              {carregando ? '...' : 'Buscar'}
            </button>
          </div>
        </div>
      </form>

      {rastreioAtivo && (
        <div className="mt-8 relative border-l-2 border-slate-700 ml-4 space-y-6">
          {/* Status 1: Saiu para Entrega */}
          <div className="relative pl-6">
            <div className="absolute -left-[11px] top-0.5 w-5 h-5 rounded-full bg-blue-500 ring-4 ring-slate-900 flex items-center justify-center">
              <Truck className="w-3 h-3 text-slate-950" />
            </div>
            <p className="text-sm font-bold text-blue-400">Saiu para Entrega</p>
            <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
              <Clock className="w-3 h-3" /> Hoje, 08:30 - São Paulo, SP
            </p>
            <p className="text-xs text-slate-500 mt-1">O motorista está a caminho do seu endereço.</p>
          </div>

          {/* Status 2: Em Trânsito */}
          <div className="relative pl-6">
            <div className="absolute -left-[11px] top-0.5 w-5 h-5 rounded-full bg-slate-700 ring-4 ring-slate-900 flex items-center justify-center">
              <Clock className="w-3 h-3 text-slate-300" />
            </div>
            <p className="text-sm font-semibold text-slate-300">Em Trânsito</p>
            <p className="text-xs text-slate-400">Ontem, 14:15 - Cajamar, SP</p>
            <p className="text-xs text-slate-500 mt-1">Objeto encaminhado para o Centro de Distribuição.</p>
          </div>

          {/* Status 3: Postado */}
          <div className="relative pl-6">
            <div className="absolute -left-[11px] top-0.5 w-5 h-5 rounded-full bg-slate-700 ring-4 ring-slate-900 flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 text-slate-300" />
            </div>
            <p className="text-sm font-semibold text-slate-300">Objeto Postado</p>
            <p className="text-xs text-slate-400">Segunda-feira, 09:00 - Rio de Janeiro, RJ</p>
          </div>
        </div>
      )}
    </div>
  );
}