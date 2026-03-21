import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    
    const form = e.target;
    const data = new FormData(form);

    // Dica: Depois você cria uma conta no Formspree.io e troca esse ID
    try {
      const response = await fetch("https://formspree.io/f/mqakpbrz", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus('Mensagem enviada! Entraremos em contato em breve.');
        form.reset();
      } else {
        setStatus('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      setStatus('Erro de conexão.');
    }
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <h2>Inicie seu Projeto</h2>
        <p>Descreva seu desafio e a LOGIC System desenha a solução.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Seu Nome ou Empresa" required />
          <input type="email" name="email" placeholder="Seu melhor E-mail" required />
          <textarea name="message" rows="5" placeholder="Como podemos ajudar?" required></textarea>
          <button type="submit" className="btn-submit">Enviar Proposta</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;