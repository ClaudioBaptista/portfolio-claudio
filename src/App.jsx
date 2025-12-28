import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Truck, Code2, Brain, Dices, Github, Linkedin, Mail, Menu, X, Sun, Moon, ArrowUp, MousePointer2 } from 'lucide-react';

const App = () => {
  // --- ESTADOS GERAIS ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Estado para as Abas de Tecnologia
  const [activeTab, setActiveTab] = useState('Todas');

  // Estado para o Efeito de Digitação (Typewriter)
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Eficiência.", "Entretenimento.", "Inovação.", "Estratégia."];

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
    
    // Controle do botão voltar ao topo
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);

    // Intervalo para trocar a palavra do Hero
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500); // Troca a cada 2.5 segundos

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(wordInterval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- DADOS ORGANIZADOS ---
  const techCategories = {
    "Linguagens": ["Python", "JavaScript", "TypeScript", "C#", "C++", "Java", "Go", "Rust", "PHP", "Lua", "R", "VBA"],
    "Frontend": ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "Sass", "HTML5", "CSS3", "Figma", "Vite"],
    "Backend & Cloud": ["Node.js", "Django", ".NET Core", "Spring Boot", "Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Terraform", "Nginx", "Linux"],
    "Dados & IA": ["Machine Learning", "TensorFlow", "Pandas", "SQL", "PostgreSQL", "MongoDB", "Redis", "Power BI", "Tableau", "Apache Spark"],
    "iGaming & Ops": ["Slot Math", "Game Logic", "RTP Simulations", "RNG Certifications", "Unity", "SAP", "Salesforce", "Jira"]
  };

  const getDisplayTechs = () => {
    if (activeTab === 'Todas') return Object.values(techCategories).flat(); 
    return techCategories[activeTab];
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ease-in-out ${theme === 'dark' ? 'bg-[#050505] text-gray-300' : 'bg-gray-50 text-gray-700'} selection:bg-neon selection:text-black font-sans relative overflow-x-hidden`}>
      
      {/* BARRA DE LEITURA SUPERIOR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-neon origin-left z-[60]" style={{ scaleX }} />

      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(${theme === 'dark' ? '#333' : '#ccc'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? '#333' : '#ccc'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${theme === 'dark' ? 'bg-[#050505]/90 border-white/10' : 'bg-white/90 border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className={`text-xl font-extrabold tracking-tighter z-50 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            CLAUDIO<span className="text-neon">BAPTISTA</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wider uppercase items-center">
            <NavLink href="#about" theme={theme}>Sobre</NavLink>
            <NavLink href="#services" theme={theme}>Especialidades</NavLink>
            <NavLink href="#contact" theme={theme}>Contato</NavLink>
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/10 text-yellow-400' : 'hover:bg-black/5 text-gray-600'}`}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="flex items-center gap-4 md:hidden z-50">
            <button onClick={toggleTheme} className={`p-2 rounded-full ${theme === 'dark' ? 'text-yellow-400' : 'text-gray-600'}`}>
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className={`absolute top-20 left-0 w-full border-b p-6 flex flex-col gap-6 md:hidden shadow-2xl ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-100'}`}>
              <MobileLink href="#about" onClick={() => setIsMenuOpen(false)} theme={theme}>Sobre Mim</MobileLink>
              <MobileLink href="#services" onClick={() => setIsMenuOpen(false)} theme={theme}>Especialidades</MobileLink>
              <MobileLink href="#contact" onClick={() => setIsMenuOpen(false)} theme={theme}>Contato</MobileLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION (Com Typewriter e Scroll Indicator) */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 text-center z-10">
        <div className={`absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 ${theme === 'dark' ? 'bg-neon/10' : 'bg-neon/5'}`} />
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 ${theme === 'dark' ? 'bg-purple/10' : 'bg-purple/5'}`} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative max-w-5xl">
          <div className={`inline-block mb-6 px-3 py-1 border rounded-full backdrop-blur-sm ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-black/5 bg-black/5'}`}>
             <span className="text-neon text-xs font-bold tracking-[0.2em] uppercase">Tech & Operations</span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Tecnologia aplicada à<br />
            {/* EFEITO DE DIGITAÇÃO AQUI */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600 block min-h-[1.2em]">
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
          </h1>
          
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Transformando dados logísticos em decisões estratégicas e algoritmos matemáticos em experiências de jogos digitais.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#services" className="px-8 py-4 bg-neon text-black font-bold rounded hover:shadow-[0_0_30px_rgba(0,255,204,0.3)] hover:scale-105 transition-all duration-300">Ver Portfólio</a>
            <a href="#contact" className={`px-8 py-4 border rounded font-bold transition-all ${theme === 'dark' ? 'border-white/20 hover:bg-white/5' : 'border-black/20 hover:bg-black/5'}`}>Entrar em Contato</a>
          </div>
        </motion.div>

        {/* INDICADOR DE SCROLL ANIMADO (NOVO) */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
        >
          <MousePointer2 size={24} className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
        </motion.div>
      </section>

      {/* SOBRE COM TABS */}
      <section id="about" className={`py-24 px-6 relative z-10 border-t transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/5' : 'bg-white border-gray-100'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center mb-12">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-wide uppercase ${theme === 'dark' ? 'bg-white/5 text-neon' : 'bg-black/5 text-purple-600'}`}>
                Minha Trajetória
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Expertise Multidisciplinar
              </h2>
              <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Minha carreira é a fusão entre a precisão industrial e a criatividade digital. Domino o ciclo completo: da infraestrutura em nuvem à interface do usuário, passando pela matemática complexa de jogos e otimização logística.
              </p>
            </div>
            
            {/* TABS INTERATIVAS */}
            <div className="mt-12">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <TabButton label="Todas" active={activeTab === 'Todas'} onClick={() => setActiveTab('Todas')} theme={theme} />
                {Object.keys(techCategories).map(cat => (
                  <TabButton key={cat} label={cat} active={activeTab === cat} onClick={() => setActiveTab(cat)} theme={theme} />
                ))}
              </div>

              <motion.div layout className={`p-8 rounded-2xl border min-h-[200px] flex items-center justify-center ${theme === 'dark' ? 'bg-[#0f0f0f] border-white/5' : 'bg-white border-gray-200 shadow-sm'}`}>
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
                            ? 'bg-[#1a1a1a] border-white/10 text-gray-300 hover:border-neon hover:text-white hover:bg-white/5' 
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-neon hover:text-black hover:bg-white'}`}
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

      {/* ESPECIALIDADES */}
      <section id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Áreas de Atuação</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-neon to-purple rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard theme={theme} icon={<Truck size={36} />} title="Logística 4.0" desc="Otimização baseada em dados. Gestão de Supply Chain para redução de custos e eficiência." borderColor="hover:border-neon" iconColor="text-neon" />
            <ServiceCard theme={theme} icon={<Code2 size={36} />} title="Sistemas (ADS)" desc="Arquiteturas robustas. Desenvolvimento de softwares que automatizam tarefas e integram processos." borderColor={theme === 'dark' ? 'hover:border-white' : 'hover:border-black'} iconColor={theme === 'dark' ? 'text-white' : 'text-black'} />
            <ServiceCard theme={theme} icon={<Brain size={36} />} title="Inteligência Artificial" desc="Modelos preditivos e Machine Learning para transformar dados brutos em previsões estratégicas." borderColor="hover:border-purple" iconColor="text-purple" />
            <ServiceCard theme={theme} icon={<Dices size={36} />} title="Slots & iGaming" desc="Engenharia de entretenimento. Criação de jogos com matemática rigorosa (RTP) e alto engajamento." borderColor="hover:border-gold" iconColor="text-gold" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className={`pt-20 pb-10 border-t px-6 relative z-10 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#050505] border-white/10' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className={`text-xl font-bold mb-4 tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              CLAUDIO<span className="text-neon">BAPTISTA</span>
            </div>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">Tecnologia aplicada à eficiência e ao entretenimento.</p>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-green-600 font-bold uppercase">Disponível para Projetos</span>
            </div>
          </div>
          <div>
            <h4 className={`font-bold mb-6 border-b border-neon inline-block pb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><FooterLink href="#" theme={theme}>Início</FooterLink></li>
              <li><FooterLink href="#about" theme={theme}>Sobre Mim</FooterLink></li>
              <li><FooterLink href="#services" theme={theme}>Especialidades</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className={`font-bold mb-6 border-b border-neon inline-block pb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Conecte-se</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <FooterSocial href="mailto:contato@claudiobaptista.com" icon={<Mail size={16}/>} text="contato@claudiobaptista.com" theme={theme} />
              <FooterSocial href="https://linkedin.com/in/claudiobaptista" icon={<Linkedin size={16}/>} text="/in/claudiobaptista" theme={theme} />
              <FooterSocial href="https://github.com/claudiobaptista" icon={<Github size={16}/>} text="/claudiobaptista" theme={theme} />
            </ul>
          </div>
        </div>
        <div className={`max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left ${theme === 'dark' ? 'border-white/5' : 'border-gray-200'}`}>
          <p className="text-gray-500 text-xs">© 2025 Claudio Baptista. Todos os direitos reservados.</p>
          <p className="text-gray-500 text-xs flex items-center gap-1">Desenvolvido com <Code2 size={12} /> React & Tailwind</p>
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
            className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 transition-colors ${theme === 'dark' ? 'bg-neon text-black hover:bg-white' : 'bg-black text-white hover:bg-gray-800'}`}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- COMPONENTES AUXILIARES ---

const TabButton = ({ label, active, onClick, theme }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${active ? 'bg-neon text-black scale-105 shadow-[0_0_15px_rgba(0,255,204,0.4)]' : theme === 'dark' ? 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-white/5' : 'bg-white text-gray-600 hover:text-black border border-gray-200 hover:border-gray-300'}`}>{label}</button>
);

const NavLink = ({ href, children, theme }) => (
  <a href={href} className={`transition-colors relative group py-2 ${theme === 'dark' ? 'text-gray-400 hover:text-neon' : 'text-gray-600 hover:text-neon'}`}>
    {children}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const MobileLink = ({ href, children, onClick, theme }) => (
  <a href={href} onClick={onClick} className={`text-xl font-bold border-b pb-4 hover:text-neon transition-colors ${theme === 'dark' ? 'text-gray-300 border-white/5' : 'text-gray-800 border-gray-100'}`}>{children}</a>
);

const FooterLink = ({ href, children, theme }) => (
  <a href={href} className={`hover:translate-x-1 transition-all inline-block ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>{children}</a>
);

const FooterSocial = ({ href, icon, text, theme }) => (
  <li>
    <a href={href} target="_blank" className={`flex items-center gap-3 transition-colors group ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
      <span className={`p-2 rounded-full group-hover:bg-neon group-hover:text-black transition-colors ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'}`}>{icon}</span> {text}
    </a>
  </li>
);

const ServiceCard = ({ icon, title, desc, borderColor, iconColor, theme }) => (
  <motion.div whileHover={{ y: -10 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`p-8 border rounded-xl ${borderColor} transition-colors duration-300 group relative overflow-hidden ${theme === 'dark' ? 'bg-[#0f0f0f] border-white/5' : 'bg-white border-gray-200 shadow-sm hover:shadow-md'}`}>
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${theme === 'dark' ? 'bg-white/[0.02]' : 'bg-black/[0.02]'}`} />
    <div className={`relative z-10 mb-6 ${iconColor} opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300`}>{icon}</div>
    <h3 className={`relative z-10 text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <p className="relative z-10 text-gray-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default App;