// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Expertise Integrada</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              A <strong>Logic IA</strong> é fundamentada na convergência entre a inteligência operacional da 
              <span className="highlight"> Logística</span> e a precisão da 
              <span className="highlight"> Análise e Desenvolvimento de Sistemas</span>. 
              Esta formação multidisciplinar permite uma visão profunda sobre como a tecnologia deve 
              otimizar fluxos de negócio reais.
            </p>
            <p>
              A abordagem técnica adotada é agnóstica em relação a ferramentas; o foco está na arquitetura 
              da solução ideal para cada desafio. Seja no desenvolvimento de sistemas complexos, 
              na modelagem de dados ou na automação de processos, a prioridade é a entrega de 
              eficiência, escalabilidade e integridade técnica.
            </p>
          </div>
          <div className="about-badges">
            <div className="badge-card">
              <h4>Tecnólogo em Logística</h4>
              <p>Visão estratégica e otimização de fluxos operacionais.</p>
            </div>
            <div className="badge-card">
              <h4>Análise e Desenvolvimento de Sistemas</h4>
              <p>Engenharia de software voltada a soluções inteligentes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;