import React from 'react';
import { ArrowRight, Download, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <section id="home" className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            Desenvolvimento Web & Logística
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Engenharia de Software + <span className="text-blue-500">Supply Chain</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Unindo a visão prática em Logística ao desenvolvimento de aplicações web reativas com React, JavaScript e soluções focadas no setor.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
            <a 
              href="#projetos" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 text-sm"
            >
              Ver Demonstrativos <ArrowRight className="w-4 h-4" />
            </a>

            {/* Botão Baixar CV */}
            <a 
              href="/curriculo.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm backdrop-blur-sm"
            >
              <Download className="w-4 h-4 text-blue-400" />
              Baixar Currículo (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Badges de Formação & Stack */}
      <section className="border-y border-slate-800/80 bg-slate-900/30 backdrop-blur-sm py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 font-semibold uppercase tracking-wider">
          <span className="px-3.5 py-1.5 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center gap-2 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-blue-400" /> React.js & Vite
          </span>
          <span className="px-3.5 py-1.5 bg-slate-900/60 rounded-lg border border-slate-800">Tailwind CSS</span>
          <span className="px-3.5 py-1.5 bg-slate-900/60 rounded-lg border border-slate-800">Análise e Dev. de Sistemas</span>
          <span className="px-3.5 py-1.5 bg-slate-900/60 rounded-lg border border-slate-800">Tecnólogo em Logística</span>
          <span className="px-3.5 py-1.5 bg-slate-900/60 rounded-lg border border-slate-800">MBA Supply Chain Management</span>
        </div>
      </section>
    </>
  );
}