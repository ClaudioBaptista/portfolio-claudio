import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Globe, Code2, Brain, Mail, Menu, X, Sun, Moon, ArrowUp, Zap, MessageCircle, Send, Database, Terminal, Settings, ShieldCheck } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";
import { Toaster, toast } from 'react-hot-toast';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const neonTextClass = theme === 'dark' ? 'text-neon' : 'text-green-600';
  const waLink = "https://wa.me/5511918506875?text=Olá, gostaria de conversar sobre as soluções da Logic IA.";

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso!");
    e.target.reset();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-background text-gray-300' : 'bg-gray-50 text-gray-700'} font-sans relative overflow-x-hidden`}>
      <Toaster position="bottom-right" />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-neon z-[60]" style={{ scaleX }} />

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${theme === 'dark' ? 'bg-background/90 border-neon/20' : 'bg-white/90 border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className={`text-2xl font-extrabold tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Logic IA<span className={neonTextClass}>.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold uppercase items-center">
            <a href="#about" className={`hover:${neonTextClass} transition-colors`}>Expertise</a>
            <a href="#services" className={`hover:${neonTextClass} transition-colors`}>Soluções</a>
            <a href="#contact" className={`hover:${neonTextClass} transition-colors`}>Contato</a>
            <button onClick={toggleTheme} className="p-2">{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
          <h1 className={`text-6xl md:text-8xl font-extrabold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Logic IA<span className={neonTextClass}>.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 italic">Sistemas Inteligentes & Otimização de Processos</p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-400">
            Engenharia de software integrada à expertise logística para transformar operações em resultados estratégicos.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#about" className={`px-8 py-4 font-bold rounded ${theme === 'dark' ? 'bg-neon text-background shadow-neon' : 'bg-green-600 text-white shadow-md'}`}>Conhecer Expertise</a>
          </div>
        </motion.div>
      </section>

      {/* BIOGRAFIA TÉCNICA (INTEGRADA) */}
      <section id="about" className={`py-24 px-6 border-t ${theme === 'dark' ? 'bg-background border-white/5' : 'bg-white border-gray-200'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Expertise Técnica Integrada
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                A <span className="font-bold">Logic IA</span> nasce da convergência estratégica entre a inteligência operacional da <span className={neonTextClass}>Logística</span> e a precisão técnica da <span className={neonTextClass}>Análise e Desenvolvimento de Sistemas</span>.
              </p>
              <p>
                Esta formação multidisciplinar permite uma compreensão profunda sobre como a tecnologia deve servir aos processos de negócio, traduzindo desafios logísticos complexos em arquiteturas de software escaláveis e seguras.
              </p>
              <p>
                Adotamos uma abordagem agnóstica em relação a ferramentas; priorizamos a solução ideal para cada desafio, garantindo integridade técnica e eficiência operacional em cada entrega.
              </p>
            </div>
            <div className="grid gap-6">
              <div className={`p-6 rounded-xl border-l-4 ${theme === 'dark' ? 'bg-card border-neon' : 'bg-gray-100 border-green-600'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <Settings size={20} className={neonTextClass} />
                  <h4 className="font-bold">Tecnólogo em Logística</h4>
                </div>
                <p className="text-sm text-gray-500">Gestão de processos e otimização de cadeias de suprimentos.</p>
              </div>
              <div className={`p-6 rounded-xl border-l-4 ${theme === 'dark' ? 'bg-card border-neon' : 'bg-gray-100 border-green-600'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <Terminal size={20} className={neonTextClass} />
                  <h4 className="font-bold">Análise de Sistemas</h4>
                </div>
                <p className="text-sm text-gray-500">Engenharia de software focada em sistemas inteligentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES ESTRATÉGICAS */}
      <section id="services" className={`py-24 px-6 border-t ${theme === 'dark' ? 'bg-[#0a1120] border-white/5' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Soluções de Engenharia</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard icon={<Terminal size={32} />} title="Engenharia de Software" desc="Desenvolvimento de sistemas robustos e ecossistemas digitais de alta performance." theme={theme} />
            <ServiceCard icon={<Settings size={32} />} title="Inteligência Operacional" desc="Otimização de fluxos logísticos através de tecnologia aplicada." theme={theme} />
            <ServiceCard icon={<Database size={32} />} title="Arquitetura de Dados" desc="Gestão de dados complexos para suporte à decisão estratégica." theme={theme} />
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className={`py-24 px-6 border-t ${theme === 'dark' ? 'bg-background border-white/5' : 'bg-white border-gray-200'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Inicie seu projeto.</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Nome" className="w-full p-4 rounded bg-transparent border border-gray-500 focus:border-neon outline-none" required />
            <input type="email" placeholder="E-mail" className="w-full p-4 rounded bg-transparent border border-gray-500 focus:border-neon outline-none" required />
            <textarea placeholder="Mensagem" className="w-full p-4 rounded bg-transparent border border-gray-500 focus:border-neon outline-none" rows="4"></textarea>
            <div className="flex items-start gap-3 text-xs text-gray-500">
              <input type="checkbox" required id="lgpd" className="mt-1" />
              <label htmlFor="lgpd">Concordo com o tratamento dos meus dados para fins de contato profissional.</label>
            </div>
            <button className={`w-full py-4 font-bold rounded transition-all ${theme === 'dark' ? 'bg-neon text-background hover:shadow-neon' : 'bg-green-600 text-white'}`}>Enviar Mensagem</button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-gray-500 border-t border-white/5">
        <p>© 2026 Logic IA. Intelligence in Motion.</p>
      </footer>
      <Analytics />
    </div>
  );
};

const ServiceCard = ({ icon, title, desc, theme }) => (
  <div className={`p-8 rounded-xl border transition-all hover:-translate-y-2 ${theme === 'dark' ? 'bg-card border-white/5 hover:border-neon' : 'bg-white border-gray-200 hover:border-green-600'}`}>
    <div className={`mb-4 ${theme === 'dark' ? 'text-neon' : 'text-green-600'}`}>{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{desc}</p>
  </div>
);

export default App;