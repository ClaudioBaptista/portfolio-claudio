import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 border-t border-gray-800 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        {/* Ícones de Contato Rápidos */}
        <div className="flex gap-6 mb-6">
          <a 
            href="https://github.com/ClaudioBaptista/portfolio-claudio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/claudio-yuri-baptista-057487426/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://instagram.com/logic.dev.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Textos de Direitos */}
        <p className="text-sm">
          © 2026 Cláudio Baptista. Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Sorocaba/SP • Supply Chain & Engenharia de Software
        </p>
      </div>
    </footer>
  );
}