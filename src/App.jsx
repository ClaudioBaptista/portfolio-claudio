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

  // Envio de formulário com FORMSPREE
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
        toast.success("Mensagem enviada com sucesso! A nossa equipa entrará em contacto.", {
          style: {
            background: theme === 'dark' ? '#39FF14' : '#15803d',
            color: theme === 'dark' ? '#0A192F' : '#ffffff',
            fontWeight: 'bold',
            padding: '16px',
            borderRadius: '8px',
          },
          iconTheme: {
            primary: theme === 'dark' ? '#0A192F' : '#ffffff',
            secondary: theme === 'dark' ? '#39FF14' : '#15803d',
          },
          duration: 5000,
        });
        form.reset();
      } else {
        toast.error("Ocorreu um problema ao enviar. Tente novamente.", {
           style: { background: '#ef4444', color: '#fff', fontWeight: 'bold' }
        });
      }
    } catch (error) {
      toast.error("Erro de ligação. Verifique a sua internet.", {
         style: { background: '#ef4444', color: '#fff', fontWeight: 'bold' }
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ease-in-out ${theme === 'dark' ? 'bg-background text-gray-300' : 'bg-gray-50 text-gray-700'} selection:bg-neon selection:text-background font-sans relative overflow-x-hidden`}>
      
      {/* COMPONENTE DE NOTIFICAÇÃO (TOAST) */}
      <Toaster position="bottom-right" />

      {/* BARRA DE LEITURA SUPERIOR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-neon origin-left z-[60]" style={{ scaleX }} />

      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(${theme === 'dark' ? '#39FF14' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? '#39FF14' : '#000'} 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${theme === 'dark' ? 'bg-background/90 border-neon/20' : 'bg-white/90 border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* LOGO */}
          <div className={`text-2xl font-extrabold tracking-tighter z-50 flex items-center gap-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Logic IA<span className={`${neonTextClass} text-4xl leading-none`}>.</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wider uppercase items-center">
            <NavLink href="#about" theme={theme} neonClass={neonTextClass}>A Empresa</NavLink>
            <NavLink href="#services" theme={theme} neonClass={neonTextClass}>Soluções</NavLink>
            <NavLink href="#contact" theme={theme} neonClass={neonTextClass}>Contato</NavLink>
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/10 text-neon' : 'hover:bg-black/5 text-gray-600'}`}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className="flex items-center gap-4 md:hidden z-50">
            <button onClick={toggleTheme} className={`p-2 rounded-full ${theme === 'dark' ? 'text-neon' : 'text-gray-600'}`}>
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className={`absolute top-20 left-0 w-full border-b p-6 flex flex-col gap-6 md:hidden shadow-2xl ${theme === 'dark' ? 'bg-background border-neon/20' : 'bg-white border-gray-100'}`}>
              <MobileLink href="#about" onClick={() => setIsMenuOpen(false)} theme={theme} neonClass={neonTextClass}>A Empresa</MobileLink>
              <MobileLink href="#services" onClick={() => setIsMenuOpen(false)} theme={theme} neonClass={neonTextClass}>Soluções</MobileLink>
              <MobileLink href="#contact" onClick={() => setIsMenuOpen(false)} theme={theme} neonClass={neonTextClass}>Contato</MobileLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center z-10 pt-20">
        <div className={`absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 ${theme === 'dark' ? 'bg-neon/10' : 'bg-green-500/5'}`} />
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 ${theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-500/5'}`} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative max-w-5xl">
          <div className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 border rounded-full backdrop-blur-sm ${theme === 'dark' ? 'border-neon/30 bg-neon/5' : 'border-black/5 bg-black/5'}`}>
             <Zap size={14} className={neonTextClass} />
             <span className={`${neonTextClass} text-xs font-bold tracking-[0.2em] uppercase`}>Logistics Intelligence</span>
          </div>
          
          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 leading-none tracking-tight transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Logic IA<span className={neonTextClass}>.</span>
          </h1>
          
          {/* SLOGAN ANIMADO */}
          <h2 className="text-2xl md:text-4xl font-light mb-8 h-12">
            <span className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Lógica em{' '}
            </span>
            <span className={`${neonTextClass} font-bold inline-block`}>
               <AnimatePresence mode="wait">
                 <motion.span 
                   key={currentWord}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.3 }}
                 >
                   {words[currentWord]}
                 </motion.span>
               </AnimatePresence>
            </span>
          </h2>
          
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Engenharia de decisão com foco exclusivo na aplicação de Inteligência Artificial para Logística e Supply Chain.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#services" className={`px-8 py-4 font-bold rounded hover:scale-105 transition-all duration-300 ${theme === 'dark' ? 'bg-neon text-background hover:shadow-neon' : 'bg-green-600 text-white hover:bg-green-700 shadow-md'}`}>Nossas Soluções</a>
            <a href="#contact" className={`px-8 py-4 border rounded font-bold transition-all ${theme === 'dark' ? 'border-white/20 hover:bg-white/5 text-white' : 'border-gray-300 hover:bg-gray-100 text-gray-800'}`}>Fale Conosco</a>
          </div>
        </motion.div>
      </section>

      {/* FAIXA DE INTEGRAÇÕES (MARQUEE) */}
      <div className={`py-6 border-y relative flex overflow-hidden ${theme === 'dark' ? 'bg-[#0a1120] border-white/5' : 'bg-gray-100 border-gray-200'}`}>
        <div className={`absolute left-0 w-24 h-full z-10 pointer-events-none ${theme === 'dark' ? 'bg-gradient-to-r from-background to-transparent' : 'bg-gradient-to-r from-gray-50 to-transparent'}`}></div>
        <div className={`absolute right-0 w-24 h-full z-10 pointer-events-none ${theme === 'dark' ? 'bg-gradient-to-l from-background to-transparent' : 'bg-gradient-to-l from-gray-50 to-transparent'}`}></div>
        
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap min-w-max px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Lista duplicada para o efeito infinito funcionar sem quebras */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2 text-gray-500 font-bold tracking-widest uppercase"><Database size={20} /> SAP ERP</div>
              <div className="flex items-center gap-2 text-gray-500 font-bold tracking-widest uppercase"><Server size={20} /> Oracle NetSuite</div>
              <div className="flex items-center gap-2 text-gray-500 font-bold tracking-widest uppercase"><Cloud size={20} /> AWS Cloud</div>
              <div className="flex items-center gap-2 text-gray-500 font-bold tracking-widest uppercase"><Brain size={20} /> TensorFlow</div>
              <div className="flex items-center gap-2 text-gray-500 font-bold tracking-widest uppercase"><Zap size={20} /> TOTVS</div>
              <div className="flex items-center gap-2 text-gray-500 font-bold tracking-widest uppercase"><Truck size={20} /> WMS/TMS</div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* SOBRE A EMPRESA */}
      <section id="about" className={`py-24 px-6 relative z-10 transition-colors duration-300 ${theme === 'dark' ? 'bg-background' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center mb-12">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-wide uppercase ${theme === 'dark' ? 'bg-white/5 text-neon' : 'bg-green-50 text-green-700'}`}>
                Engenharia de Dados Logísticos
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Onde a Inteligência Artificial encontra a Cadeia de Suprimentos.
              </h2>
              <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                A Logic IA é pioneira na aplicação de tecnologias avançadas para o setor de transportes e logística. Desenvolvemos o motor matemático que prevê demandas, otimiza rotas e reduz custos operacionais, transformando dados brutos em decisões precisas e automatizadas.
              </p>
            </div>
            
            <div className="mt-12">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <TabButton label="Todas" active={activeTab === 'Todas'} onClick={() => setActiveTab('Todas')} theme={theme} />
                {Object.keys(techCategories).map(cat => (
                  <TabButton key={cat} label={cat} active={activeTab === cat} onClick={() => setActiveTab(cat)} theme={theme} />
                ))}
              </div>

              <motion.div layout className={`p-8 rounded-2xl border min-h-[200px] flex items-center justify-center ${theme === 'dark' ? 'bg-card border-white/5' : 'bg-white border-gray-200 shadow-sm'}`}>
                <div className="flex flex-wrap gap-3 justify-center">
                  <AnimatePresence mode='popLayout'>
                    {getDisplayTechs().map((tag) => (
                      <motion.span 
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className={`px-4 py-2 border rounded-full text-xs font-bold transition-all cursor-default 
                          ${theme === 'dark' 
                            ? 'bg-[#0f1a2e] border-neon/20 text-gray-300 hover:border-neon hover:text-neon hover:shadow-neon' 
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-green-600 hover:text-green-700 hover:bg-white'}`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS ATUALIZADOS COM ENTREGÁVEIS */}
      <section id="services" className={`py-24 px-6 border-t relative z-10 ${theme === 'dark' ? 'bg-background border-white/5' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Ecossistema Logic IA</h2>
            <div className={`h-1 w-20 rounded-full ${theme === 'dark' ? 'bg-neon box-shadow-neon' : 'bg-green-600'}`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <ServiceCard 
              theme={theme} 
              icon={<Brain size={36} />} 
              title="IA Aplicada à Logística" 
              desc="Modelos preditivos, automação de fluxo e redes neuronais focadas no setor de transportes." 
              features={["Previsão de Demanda", "Análise de Dados Históricos", "Machine Learning"]}
              borderColor={theme === 'dark' ? "hover:border-neon" : "hover:border-green-600"} 
              iconColor={theme === 'dark' ? "text-neon" : "text-green-600"} 
            />
            <ServiceCard 
              theme={theme} 
              icon={<Truck size={36} />} 
              title="Roteirização Inteligente" 
              desc="Algoritmos matemáticos complexos para otimização de rotas e redução de custos com frotas." 
              features={["Algoritmos de Roteamento", "Redução de Tempo Ocioso", "Otimização de Carga"]}
              borderColor={theme === 'dark' ? 'hover:border-white' : 'hover:border-gray-800'} 
              iconColor={theme === 'dark' ? 'text-white' : 'text-gray-800'} 
            />
            <ServiceCard 
              theme={theme} 
              icon={<Globe size={36} />} 
              title="Supply Chain Visibility" 
              desc="Monitorização global, processamento de dados em tempo real e integração com TMS/WMS." 
              features={["Dashboards em Tempo Real", "Integração via API (ERP/TMS)", "Alertas Automatizados"]}
              borderColor="hover:border-purple" 
              iconColor="text-purple" 
            />
            <ServiceCard 
              theme={theme} 
              icon={<Code2 size={36} />} 
              title="Sistemas Escaláveis" 
              desc="Arquitetura de software de alta performance para suportar operações logísticas críticas." 
              features={["Arquitetura Cloud (AWS/Azure)", "Bases de Dados Distribuídas", "Segurança e Conformidade"]}
              borderColor="hover:border-blue-500" 
              iconColor="text-blue-500" 
            />
          </div>
        </div>
      </section>

      {/* NOVA SECÇÃO DE IMPACTO / MÉTRICAS B2B */}
      <section className={`py-20 relative z-10 border-t ${theme === 'dark' ? 'bg-background border-white/5' : 'bg-green-50/50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x transition-colors duration-300 border-gray-200 dark:border-white/10">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6">
              <h4 className={`text-5xl font-extrabold mb-2 ${theme === 'dark' ? 'text-neon drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]' : 'text-green-600'}`}>-20%</h4>
              <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Custos de Frota</p>
              <p className={theme === 'dark' ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>Redução média em rotas otimizadas por algoritmos matemáticos.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6">
              <h4 className={`text-5xl font-extrabold mb-2 ${theme === 'dark' ? 'text-neon drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]' : 'text-green-600'}`}>99.9%</h4>
              <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Uptime de Sistemas</p>
              <p className={theme === 'dark' ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>Arquitetura escalável em nuvem projetada para zero interrupções.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6">
              <h4 className={`text-5xl font-extrabold mb-2 ${theme === 'dark' ? 'text-neon drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]' : 'text-green-600'}`}>10x</h4>
              <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Processamento de Dados</p>
              <p className={theme === 'dark' ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>Velocidade superior na análise de telemetria e previsão de demandas.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE CONTATO E FORMULÁRIO COM LGPD E FORMSPREE */}
      <section id="contact" className={`py-24 px-6 relative z-10 border-t transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a1120] border-white/5' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 border rounded-full backdrop-blur-sm ${theme === 'dark' ? 'border-neon/30 bg-neon/5' : 'border-green-600/20 bg-green-50'}`}>
               <span className={`${neonTextClass} text-xs font-bold tracking-[0.2em] uppercase`}>Iniciar Projeto</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Vamos otimizar a sua <br/>
              <span className={neonTextClass}>operação.</span>
            </h2>
            <p className={`text-lg mb-8 leading-relaxed max-w-md ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Preencha o formulário para agendar uma consultoria técnica sobre como a nossa Inteligência Artificial pode escalar a sua logística.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-white/5 text-neon' : 'bg-gray-100 text-green-700'}`}><MessageCircle size={20} /></div>
                <div>
                  <p className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>WhatsApp</p>
                  <a href={waLink} target="_blank" rel="noreferrer" className={`text-sm transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-neon' : 'text-gray-600 hover:text-green-700'}`}>(11) 91850-6875</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-white/5 text-neon' : 'bg-gray-100 text-green-700'}`}><Mail size={20} /></div>
                <div>
                  <p className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>E-mail</p>
                  <a href="mailto:contato@logic.dev.br" className={`text-sm transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-neon' : 'text-gray-600 hover:text-green-700'}`}>contato@logic.dev.br</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulário com nomes dos campos e integração Formspree */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} 
                      className={`p-8 md:p-10 rounded-2xl border ${theme === 'dark' ? 'bg-card border-white/5 shadow-2xl' : 'bg-white border-gray-200 shadow-xl'}`}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className={`text-sm font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Nome Completo</label>
                  <input type="text" name="Nome" required placeholder="João Silva" 
                         className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none ${theme === 'dark' ? 'focus:border-neon focus:ring-1 focus:ring-neon bg-[#0f1a2e] border-white/10 text-white placeholder-gray-600' : 'focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'}`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={`text-sm font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Empresa</label>
                  <input type="text" name="Empresa" placeholder="A Sua Empresa Logística" 
                         className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none ${theme === 'dark' ? 'focus:border-neon focus:ring-1 focus:ring-neon bg-[#0f1a2e] border-white/10 text-white placeholder-gray-600' : 'focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'}`} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className={`text-sm font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>E-mail Corporativo</label>
                <input type="email" name="Email" required placeholder="joao@empresa.com.br" 
                       className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none ${theme === 'dark' ? 'focus:border-neon focus:ring-1 focus:ring-neon bg-[#0f1a2e] border-white/10 text-white placeholder-gray-600' : 'focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'}`} />
              </div>

              <div className="flex flex-col gap-2">
                <label className={`text-sm font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Como podemos ajudar?</label>
                <textarea name="Mensagem" required rows="4" placeholder="Descreva os desafios da sua operação atual..." 
                          className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none resize-none ${theme === 'dark' ? 'focus:border-neon focus:ring-1 focus:ring-neon bg-[#0f1a2e] border-white/10 text-white placeholder-gray-600' : 'focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'}`}></textarea>
              </div>

              {/* CHECKBOX LGPD */}
              <div className="flex items-start gap-3 mt-1 mb-2">
                <input type="checkbox" name="Aceitou_Termos_LGPD" value="Sim" required className="mt-1 cursor-pointer" id="lgpd" />
                <label htmlFor="lgpd" className={`text-xs leading-relaxed cursor-pointer ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Concordo em fornecer os meus dados para que a Logic IA entre em contacto. Os meus dados serão tratados conforme a <a href="#" className={`underline transition-colors ${theme === 'dark' ? 'hover:text-neon' : 'hover:text-green-700'}`}>Política de Privacidade</a>.
                </label>
              </div>

              <button type="submit" className={`w-full py-4 bg-neon text-background font-bold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${theme === 'dark' ? 'hover:shadow-neon hover:scale-[1.02]' : 'bg-green-600 text-white hover:bg-green-700 hover:scale-[1.02]'}`}>
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className={`pt-20 pb-10 border-t px-6 relative z-10 transition-colors duration-300 ${theme === 'dark' ? 'bg-background border-white/10' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className={`text-xl font-bold mb-4 tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Logic IA<span className={neonTextClass}>.</span>
            </div>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">Intelligence in Motion.</p>
            
            {/* ETIQUETA DO RODAPÉ (API STATUS) */}
            <div className={`flex items-center gap-2 px-3 py-1 border rounded-full w-fit ${theme === 'dark' ? 'bg-neon/10 border-neon/20' : 'bg-green-100 border-green-200'}`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${theme === 'dark' ? 'bg-neon shadow-neon' : 'bg-green-600'}`}></span>
              <span className={`text-xs font-bold uppercase ${theme === 'dark' ? 'text-neon' : 'text-green-700'}`}>Status: API 100% Operacional</span>
            </div>

          </div>
          <div>
            <h4 className={`font-bold mb-6 border-b inline-block pb-1 ${theme === 'dark' ? 'text-white border-neon' : 'text-gray-900 border-green-600'}`}>Menu</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><FooterLink href="#" theme={theme} neonClass={neonTextClass}>Home</FooterLink></li>
              <li><FooterLink href="#services" theme={theme} neonClass={neonTextClass}>Soluções</FooterLink></li>
              <li><FooterLink href="#contact" theme={theme} neonClass={neonTextClass}>Contato</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className={`font-bold mb-6 border-b inline-block pb-1 ${theme === 'dark' ? 'text-white border-neon' : 'text-gray-900 border-green-600'}`}>Redes</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <FooterSocial href={waLink} icon={<MessageCircle size={16}/>} text="(11) 91850-6875" theme={theme} />
              <FooterSocial href="mailto:contato@logic.dev.br" icon={<Mail size={16}/>} text="contato@logic.dev.br" theme={theme} />
              <FooterSocial href="https://instagram.com/logic.dev.br" icon={<Instagram size={16}/>} text="@logic.dev.br" theme={theme} />
            </ul>
          </div>
        </div>
        <div className={`max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left ${theme === 'dark' ? 'border-white/5' : 'border-gray-200'}`}>
          <p className="text-gray-500 text-xs">© 2026 Logic IA. Todos os direitos reservados.</p>
          <p className="text-gray-500 text-xs flex items-center gap-1">Powered by <Code2 size={12} /> React & Tailwind</p>
        </div>
      </footer>

      {/* BOTÃO VOLTAR AO TOPO */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 rounded-full z-50 transition-colors ${theme === 'dark' ? 'bg-neon text-background hover:bg-white shadow-neon' : 'bg-gray-900 text-white hover:bg-green-600 shadow-lg'}`}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <Analytics />
    </div>
  );
};

// --- COMPONENTES AUXILIARES ---

const TabButton = ({ label, active, onClick, theme }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${active ? (theme === 'dark' ? 'bg-neon text-background scale-105 shadow-neon' : 'bg-green-600 text-white scale-105 shadow-md') : (theme === 'dark' ? 'bg-card text-gray-400 hover:text-white border border-white/5' : 'bg-white text-gray-600 hover:text-black border border-gray-200 hover:border-gray-300')}`}>{label}</button>
);

const NavLink = ({ href, children, theme, neonClass }) => (
  <a href={href} className={`transition-colors relative group py-2 ${theme === 'dark' ? 'text-gray-400 hover:text-neon' : 'text-gray-600 hover:text-green-600'}`}>
    {children}<span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${theme === 'dark' ? 'bg-neon shadow-neon' : 'bg-green-600'}`}></span>
  </a>
);

const MobileLink = ({ href, children, onClick, theme, neonClass }) => (
  <a href={href} onClick={onClick} className={`text-xl font-bold border-b pb-4 transition-colors ${theme === 'dark' ? 'text-gray-300 border-white/5 hover:text-neon' : 'text-gray-800 border-gray-100 hover:text-green-600'}`}>{children}</a>
);

const FooterLink = ({ href, children, theme }) => (
  <a href={href} className={`hover:translate-x-1 transition-all inline-block ${theme === 'dark' ? 'hover:text-white' : 'hover:text-green-700'}`}>{children}</a>
);

const FooterSocial = ({ href, icon, text, theme }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 transition-colors group ${theme === 'dark' ? 'hover:text-white' : 'hover:text-green-700'}`}>
      <span className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-white/5 group-hover:bg-neon group-hover:text-black' : 'bg-gray-100 group-hover:bg-green-100 group-hover:text-green-700'}`}>{icon}</span> {text}
    </a>
  </li>
);

const ServiceCard = ({ icon, title, desc, features, borderColor, iconColor, theme }) => (
  <motion.div whileHover={{ y: -10 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`p-8 border rounded-xl ${borderColor} transition-colors duration-300 group relative overflow-hidden flex flex-col h-full ${theme === 'dark' ? 'bg-card border-white/5' : 'bg-white border-gray-200 shadow-sm hover:shadow-md'}`}>
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${theme === 'dark' ? 'bg-neon/[0.03]' : 'bg-green-600/[0.03]'}`} />
    
    <div className={`relative z-10 mb-6 ${iconColor} opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg w-fit`}>{icon}</div>
    <h3 className={`relative z-10 text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <p className="relative z-10 text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
    
    {/* Lista de Funcionalidades */}
    {features && (
      <ul className="relative z-10 mt-auto space-y-2 border-t pt-4 border-gray-200 dark:border-white/10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-xs font-semibold">
            <span className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-neon' : 'bg-green-600'}`}></span>
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

export default App;