import React from 'react';
import { Terminal, Settings, Database } from 'lucide-react'; // Ícones técnicos
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Engenharia de Software",
      description: "Desenvolvimento de sistemas robustos e ecossistemas digitais de alta performance, focados em escalabilidade e segurança.",
      icon: <Terminal size={40} />
    },
    {
      title: "Inteligência Operacional",
      description: "Otimização estratégica de fluxos logísticos e cadeias de suprimentos através de tecnologia aplicada e análise de processos.",
      icon: <Settings size={40} />
    },
    {
      title: "Arquitetura de Dados",
      description: "Estruturação e gestão de dados complexos para suporte à decisão técnica e eficiência organizacional.",
      icon: <Database size={40} />
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Soluções Estratégicas</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;