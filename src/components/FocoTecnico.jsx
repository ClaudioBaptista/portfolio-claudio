import React from 'react';
import { Code2, Truck, GitMerge } from 'lucide-react';

export default function FocoTecnico() {
  return (
    <section id="solucoes" className="py-24 px-4 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Competências</span>
        <h2 className="text-3xl font-bold text-white mt-2">Áreas de Atuação Técnica</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1: Front-end */}
        <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-8 rounded-2xl hover:bg-slate-800/60 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/10">
          <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
            <Code2 className="text-blue-400 w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Desenvolvimento Front-end</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Criação de interfaces reativas e modernas em React, utilizando Tailwind CSS e componentes reutilizáveis.
          </p>
        </div>

        {/* Card 2: Lógica Logística */}
        <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-8 rounded-2xl hover:bg-slate-800/60 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/10">
          <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
            <Truck className="text-blue-400 w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Lógica de Frete & Cubagem</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Implementação de regras matemáticas para cálculo de frete, tarifas de transporte e parametrização logística.
          </p>
        </div>

        {/* Card 3: Supply Chain */}
        <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-8 rounded-2xl hover:bg-slate-800/60 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/10">
          <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
            <GitMerge className="text-blue-400 w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Visão de Supply Chain</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Entendimento detalhado de fluxos de transporte, gestão de estoques e integrações ERP / WMS / TMS.
          </p>
        </div>
      </div>
    </section>
  );
}