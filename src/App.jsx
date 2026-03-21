import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Globe, Code2, Brain, Mail, Instagram, Menu, X, Sun, Moon, ArrowUp, MousePointer2, Zap, MessageCircle, Truck, Send, Cloud, Database, Server } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";
import { Toaster, toast } from 'react-hot-toast';

const App = () => {
  // --- ESTADOS GERAIS ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Estado para as Abas de Tecnologia
  const [activeTab, setActiveTab] = useState('Todas');

  // Estado para o Efeito de Digitação
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Logística.", "Inteligência Artificial.", "Supply Chain.", "Automação."];

  // Variáveis auxiliares de Design
  const neonTextClass = theme === 'dark' ? 'text-neon' : 'text-green-600';

  // Link do WhatsApp com mensagem pré-programada
  const waLink = "https://wa.me/5511918506875?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20IA%20para%20log%C3%ADstica%20da%20Logic%20IA.";

  // --- EFEITOS (SCROLL, TEMA, DIGITAÇÃO) ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(wordInterval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- DADOS ORGANIZADOS COM FOCO EM LOGÍSTICA ---
  const techCategories = {
    "AI & Data Science": ["TensorFlow", "PyTorch", "Machine Learning", "Previsão de Demanda", "Big Data"],
    "Logistics Tech": ["Otimização de Rotas", "Integração WMS/TMS", "Telemetria", "Fleet Tracking", "IoT"],
    "Core Engineering": ["Python", "C++", "Rust", "Go", "SQL"],
    "Cloud & Systems": ["React", "Node.js", "Docker", "Kubernetes", "AWS", "Azure"]
  };

  const getDisplayTechs = () => {
    if (activeTab === 'Todas') return Object.values(techCategories).flat(); 
    return techCategories[activeTab];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mkoqajgn", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!", {
          style: {
            background: theme === 'dark' ? '#39FF14' : '#15803d',
            color: theme === 'dark' ? '#0A192F' : '#ffffff',
            fontWeight: 'bold',
          },
          duration: 5000,
        });
        form.reset();
      } else {
        toast.error("Ocorreu um problema ao enviar.");
      }
    } catch (error) {
      toast.error("Erro de ligação.");
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-background text-gray-300' : 'bg-gray-50 text-gray-700'} font-sans relative overflow-x-hidden`}>
      <Toaster position="bottom-right" />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-neon origin-left z-[60]" style={{ scaleX }} />

      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${theme === 'dark' ? 'bg-background/90 border-neon/20' : 'bg-white/90 border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className={`text-2xl font-extrabold tracking-tighter z-50 flex items-center gap-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Logic IA<span className={`${neonTextClass} text-4xl leading-none`}>.</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wider uppercase items-center">
            <a href="#about" className={`hover:${neonTextClass} transition-colors`}>A Empresa</a>
            <a href="#services" className={`hover:${neonTextClass} transition-colors`}>Soluções</a>
            <a href="#contact" className={`hover:${neonTextClass} transition-colors`}>Contato</a>
            <button onClick={toggleTheme} className="p-2">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center z-10 pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
            Logic IA<span className={neonTextClass}>.</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8">
            Lógica em <span className={`${neonTextClass} font-bold`}>{words[currentWord]}</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-400">
            Engenharia de decisão com foco exclusivo na aplicação de Inteligência Artificial para Logística e Supply Chain.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#services" className={`px-8 py-4 font-bold rounded ${theme === 'dark' ? 'bg-neon text-background' : 'bg-green-600 text-white'}`}>Nossas Soluções</a>
            <a href="#contact" className="px-8 py-4 border rounded font-bold">Fale Conosco</a>
          </div>
        </motion.div>
      </section>

      <Analytics />
    </div>
  );
};

export default App;