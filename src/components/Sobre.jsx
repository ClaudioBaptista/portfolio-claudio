import React from 'react';
import { GraduationCap, Target, UserCheck } from 'lucide-react';

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <UserCheck className="w-4 h-4" /> Sobre o Desenvolvedor
          </div>
          
          <h2 className="text-3xl font-bold text-white">Cláudio Baptista</h2>
          
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            Especialista em unir a lógica de negócios em <strong>Logística e Supply Chain</strong> ao desenvolvimento de software moderno.
          </p>

          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            Possuo formação técnica em <strong>Análise e Desenvolvimento de Sistemas</strong>, graduação em <strong>Logística</strong> e estou iniciando o <strong>MBA em Logística e Supply Chain Management</strong>. Busco uma oportunidade como <strong>Desenvolvedor Júnior</strong> onde possa contribuir com código limpo, aprendizado contínuo e forte domínio operacional.
          </p>

          {/* Highlights de Formação */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-start gap-3 bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
              <GraduationCap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Formação Acadêmica</h4>
                <p className="text-xs text-slate-400 mt-1">ADS + Tecnólogo em Logística + MBA em Supply Chain</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
              <Target className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Objetivo de Carreira</h4>
                <p className="text-xs text-slate-400 mt-1">Atuação como Dev Front-end / Júnior em soluções logísticas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}