import React from 'react';
import { LayoutGrid, User, Mail, Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm text-white sticky top-0 z-50 border-b border-gray-800 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nome */}
        <a href="#" className="text-2xl font-bold tracking-wide text-blue-500 hover:text-blue-400 transition-colors">
          Logic<span className="text-white">.ia</span>
        </a>

        {/* Links de Navegação (Design moderno em pílula com ícones) */}
        <nav className="hidden md:flex items-center space-x-1 bg-gray-800/50 p-1.5 rounded-full border border-gray-700/60">
          <a 
            href="#services" 
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
          >
            <LayoutGrid size={16} />
            Aplicações
          </a>
          <a 
            href="#sobre" 
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
          >
            <User size={16} />
            Sobre Mim
          </a>
          <a 
            href="#contato" 
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
          >
            <Mail size={16} />
            Contato
          </a>
        </nav>

        {/* Botão GitHub (Também arredondado e com ícone) */}
        <a
          href="https://github.com/ClaudioBaptista/portfolio-claudio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </header>
  );
}