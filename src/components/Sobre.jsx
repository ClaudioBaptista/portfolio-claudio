import React from 'react';

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full mx-auto text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Cláudio Baptista</h2>
            <h3 className="text-xl text-blue-600 font-medium mb-6">Desenvolvedor Front-end & Especialista em Supply Chain</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Com graduação em Logística, estudante de <strong>MBA em Logística e Supply Chain Management</strong> e uma sólida trajetória em gestão de negócios, decidi unir a minha visão estratégica de operações com a tecnologia. A <strong>Logic IA</strong> nasceu como meu laboratório prático para essa transição.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Formado como Técnico em Análise e Desenvolvimento de Sistemas</strong>, busco minha primeira oportunidade na área de TI. Meu maior diferencial é que eu não apenas escrevo código: eu entendo a regra de negócio, os desafios da cadeia de suprimentos e as dores do cliente antes de construir a solução.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}