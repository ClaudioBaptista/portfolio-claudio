import React from 'react';

export default function Services() {
  const features = [
    {
      title: "Calculadora de Frete Dinâmica",
      description: "Integração em tempo real com a API REST do ViaCEP para simular o cálculo de distância e estimativa de peso."
    },
    {
      title: "Simulador de Rastreio",
      description: "Gerenciamento de estados (useState) no React para criar uma timeline visual e interativa do fluxo de entregas."
    },
    {
      title: "Interface Moderna e Limpa",
      description: "Desenvolvimento focado em Clean Code, componentização e design responsivo (Mobile First) utilizando Tailwind CSS."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Soluções Desenvolvidas</h2>
          <p className="text-gray-600">O que você encontra neste laboratório de códigos</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}