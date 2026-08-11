import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contato() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 px-4 max-w-4xl mx-auto border-t border-slate-800/60">
      <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-2">
            <Mail className="text-blue-400 w-8 h-8" />
            Entre em Contato
          </h2>
          <p className="text-slate-400 mt-2 text-sm">
            Disponível para oportunidades como Desenvolvedor Júnior.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
          {/* Campo Nome */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-400 mb-2">
              <User className="w-4 h-4" /> Nome Completo
            </label>
            <input
              type="text"
              required
              className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Seu nome"
            />
          </div>

          {/* Campo E-mail */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-400 mb-2">
              <Mail className="w-4 h-4" /> E-mail Profissional
            </label>
            <input
              type="email"
              required
              className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          {/* Campo Mensagem */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-400 mb-2">
              <MessageSquare className="w-4 h-4" /> Mensagem
            </label>
            <textarea
              rows="4"
              required
              className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Como posso agregar à sua equipe?"
            ></textarea>
          </div>

          {/* Botão Enviar */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 text-sm"
          >
            <Send className="w-4 h-4" />
            Enviar Mensagem
          </button>

          {formSubmitted && (
            <p className="text-center text-xs text-emerald-400 font-medium mt-4 bg-emerald-500/10 py-2 rounded-lg border border-emerald-500/20">
              Mensagem enviada com sucesso! Responderei em breve.
            </p>
          )}
        </form>

        {/* Rodapé de Contatos */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-slate-300">
          <a href="mailto:contato@logic.dev.br" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
            <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
              <Mail className="w-4 h-4 text-blue-400" />
            </div>
            contato@logic.dev.br
          </a>
          <a href="https://wa.me/5511918506875" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
            <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
              <Phone className="w-4 h-4 text-blue-400" />
            </div>
            (11) 91850-6875
          </a>
        </div>
      </div>
    </section>
  );
}