import React from 'react';
import { FiMail, FiMessageCircle } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-info">
          <h2 className="footer-logo">LOGIC <span>System</span></h2>
          <p>Transformando complexidade em resultados através de Engenharia de Software e IA.</p>
        </div>

        <div className="footer-social">
          <h3>Conecte-se</h3>
          <div className="social-icons">
            {/* Link direto para o seu WhatsApp corrigido */}
            <a 
              href="https://wa.me/5511918506875" 
              target="_blank" 
              rel="noreferrer" 
              title="Chamar no WhatsApp"
            >
              <FiMessageCircle />
            </a>

            {/* Link para o e-mail profissional */}
            <a 
              href="mailto:contato@logic.dev.br" 
              title="Enviar E-mail"
            >
              <FiMail />
            </a>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} LOGIC System. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;