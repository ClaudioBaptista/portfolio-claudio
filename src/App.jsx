import React from 'react';
import Hero from './components/Hero';
import About from './components/About'; // Importando a nova biografia
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 1. Impacto Inicial */}
      <Hero />
      
      {/* 2. Autoridade Técnica (Quem é a Logic IA) */}
      <About />
      
      {/* 3. O que entregamos (Soluções) */}
      <Services />
      
      {/* 4. Conversão e Contato */}
      <Contact />
      
      {/* 5. Rodapé Institucional */}
      <Footer />
    </div>
  );
}

export default App;