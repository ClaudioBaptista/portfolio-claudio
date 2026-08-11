import React from 'react';
import { Home, User, Briefcase, Wrench, MessageSquare, Send, Cpu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <Cpu className="text-blue-500 w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-black tracking-wider text-blue-500">
            LOGIC<span className="text-white">.IA</span>
          </span>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#home" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
            <Home className="w-4 h-4" /> Home
          </a>
          <a href="#sobre" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
            <User className="w-4 h-4" /> Sobre
          </a>
          <a href="#projetos" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
            <Briefcase className="w-4 h-4" /> Projetos
          </a>
          <a href="#solucoes" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
            <Wrench className="w-4 h-4" /> Competências
          </a>
        </nav>

        {/* Botão CTA */}
        <a
          href="#contato"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-lg shadow-blue-500/20"
        >
          <MessageSquare className="w-4 h-4" />
          Fale Conosco
        </a>
      </div>
    </header>
  );
}