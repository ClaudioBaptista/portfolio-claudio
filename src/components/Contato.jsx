import React from 'react';

export default function Contato() {
  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">Vamos conversar?</h2>
        <p className="text-gray-400 mb-10">
          Gostou do projeto? Estou em busca da minha primeira oportunidade como Desenvolvedor Júnior ou Analista de TI. Sinta-se à vontade para me mandar uma mensagem.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="mailto:claudioyuribaptista@icloud.com" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Enviar E-mail
          </a>
          <a 
            href="https://wa.me/5511926716498" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}