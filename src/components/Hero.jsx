import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white py-20 flex flex-col items-center justify-center text-center min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Logic IA: Tecnologia aplicada à <span className="text-blue-500">Logística</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          Um projeto autoral desenvolvido em React.js para simular soluções reais de Supply Chain, unindo a visão estratégica de negócios com o desenvolvimento de software moderno.
        </p>
        
        {/* Botão Único de Ação (Foco Total no Currículo) */}
        <div className="flex justify-center">
          <a 
            href="/Curriculo_Claudio_Baptista.pdf" 
            download="Curriculo_Claudio_Baptista.pdf"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-3 text-lg"
          >
            📄 Baixar Currículo (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}