import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import CalculadoraFrete from './components/CalculadoraFrete';
import RastreioEncomenda from './components/RastreioEncomenda';
import FocoTecnico from './components/FocoTecnico';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Header />
      <Hero />
      <Sobre />

      {/* Seção de Projetos Práticos & Demos ajustada para o ID correto */}
      <section id="services" className="py-20 px-4 max-w-6xl mx-auto border-t border-slate-800/60 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Demonstrativos Práticos</span>
          <h2 className="text-3xl font-bold text-white mt-2">Projetos de Estudo</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Componentes e lógicas desenvolvidas em React para simular soluções reais do setor logístico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <CalculadoraFrete />
          <RastreioEncomenda />
        </div>
      </section>

      <FocoTecnico />
      <Contato />
      <Footer />
    </div>
  );
}