import React from 'react';
import { FiCode, FiBox, FiTarget } from 'react-icons/fi';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: "Sistemas & IA",
    description: "Desenvolvimento de arquiteturas web sob medida e integração com Inteligência Artificial para automatizar processos.",
    icon: <FiCode /> 
  },
  {
    id: 2,
    title: "Logística e Supply Chain",
    description: "Soluções tecnológicas focadas em otimização operacional e máxima eficiência para a sua cadeia de suprimentos.",
    icon: <FiBox />
  },
  {
    id: 3,
    title: "Engenharia de iGaming",
    description: "Consultoria técnica avançada e estruturação de plataformas robustas e seguras para o mercado de apostas.",
    icon: <FiTarget />
  }
];

const Services = () => {
  return (
    <section id="solucoes" className="services-section">
      <div className="services-header">
        <h2 className="services-title">Nossas Soluções</h2>
        <p className="services-subtitle">Expertise técnica para os desafios mais complexos.</p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;