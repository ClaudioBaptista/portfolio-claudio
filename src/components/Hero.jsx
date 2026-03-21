import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="brand-tag">LOGIC System</span>
        <h1>Engenharia de Software e <br /> <span className="highlight">Inteligência Artificial</span></h1>
        <p>
          Consultoria especializada com 5 anos de experiência transformando 
          desafios complexos em soluções escaláveis de alto impacto.
        </p>
        <div className="hero-actions">
          <a href="#contato" className="btn-main">Falar com Especialista</a>
          <a href="#solucoes" className="btn-sub">Ver Soluções</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;