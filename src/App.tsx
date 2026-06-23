import React, { useState, useEffect } from 'react';
import { Coffee, Utensils, CupSoda, Cake, Pizza, Heart, Clock, MapPin, Phone, Wine, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData } from './data';

const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee size={20} />,
  Utensils: <Utensils size={20} />,
  CupSoda: <CupSoda size={20} />,
  Cake: <Cake size={20} />,
  Pizza: <Pizza size={20} />,
  Wine: <Wine size={20} />,
};

const formatPrice = (price: number | string) => {
  if (typeof price === 'string') return price;
  return new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency: 'CRC',
    minimumFractionDigits: 0,
  }).format(price);
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active category based on scroll position
      const sections = menuData.map(cat => document.getElementById(`section-${cat.id}`));
      const scrollPosition = window.scrollY + 150; // Offset for sticky header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(menuData[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D2926] font-serif border-[8px] sm:border-[12px] border-[#F2EDE4]">
      {/* Header / Hero */}
      <header className="px-6 sm:px-12 pt-10 pb-6 border-b border-[#2D2926]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-baseline gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-full overflow-hidden border-4 border-[#F2EDE4] shadow-sm bg-white print:border-2 print:border-black">
              <img src="/logo.jpg" alt="Soda Tita Rosa Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-sans mb-1 opacity-60">La Fortuna, San Carlos, CR</p>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none text-[#C1444E] mb-2">
                Soda Tita Rosa
              </h1>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tighter leading-none text-[#2D2926]">
                & Heladería Kiwii
              </h2>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-left md:text-right"
          >
            <p className="italic text-lg">Tradición tica y dulce sabor</p>
            <p className="text-[10px] tracking-[0.2em] uppercase font-sans mt-2">Menú Completo</p>
            
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-6 md:mt-2 text-[10px] font-sans tracking-widest uppercase opacity-60 md:justify-end">
              <div className="flex items-center gap-2">
                <Clock size={12} />
                <span>Lun - Sab: 6AM - 4PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} />
                <span>+(506) 2222-3333</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} />
                <span>La Fortuna</span>
              </div>
            </div>
            
            <button 
              onClick={() => window.print()}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-[#2D2926] text-[#2D2926] text-xs uppercase tracking-widest font-sans font-bold hover:bg-[#2D2926] hover:text-[#FDFCF8] transition-colors print:hidden"
            >
              <Printer size={14} />
              Imprimir Menú (PDF)
            </button>
          </motion.div>
        </div>
      </header>

      {/* Sticky Navigation */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FDFCF8] shadow-sm border-b border-[#2D2926] py-4' : 'bg-[#FDFCF8] border-b border-[#2D2926] py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="flex overflow-x-auto hide-scrollbar gap-8 pb-2 sm:pb-0 sm:flex-wrap">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`flex items-center gap-2 whitespace-nowrap transition-colors text-[11px] uppercase tracking-widest font-sans font-bold
                  ${activeCategory === category.id 
                    ? 'text-[#C1444E] border-b-2 border-[#C1444E] pb-1' 
                    : 'text-[#2D2926] opacity-60 hover:opacity-100 pb-1 border-b-2 border-transparent'
                  }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <main className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        {menuData.map((category, index) => (
          <motion.section 
            key={category.id}
            id={`section-${category.id}`}
            className="mb-24 scroll-mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-10 text-center sm:text-left">
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-sans mb-1 opacity-60">Categoría</h2>
              <h3 className="text-4xl font-bold italic border-b-2 border-[#C1444E] pb-2 inline-block">
                {category.title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {category.items.map((item) => (
                <motion.div 
                  key={item.id}
                  className="group relative"
                >
                  {item.popular && (
                    <div className="absolute -left-4 top-0 w-1 h-full bg-[#C1444E]"></div>
                  )}
                  
                  <div className="flex justify-between items-end mb-1 border-b border-dotted border-[#2D2926]">
                    <h4 className="text-xl md:text-2xl font-bold pr-4 pb-1">
                      {item.name}
                    </h4>
                    <span className="font-sans font-bold text-lg text-[#C1444E] pb-1">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  
                  {item.popular && (
                    <p className="text-[10px] uppercase tracking-widest font-sans mb-2 font-bold text-[#C1444E] mt-2">
                      Lo Más Pedido
                    </p>
                  )}
                  
                  <p className={`text-sm leading-relaxed opacity-80 italic ${!item.popular ? 'mt-2' : ''}`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-[#F2EDE4] border-t border-[#2D2926] p-10 flex flex-col justify-between items-center text-[#2D2926]">
        <div className="text-[10px] uppercase tracking-widest text-center">
          <p className="mb-1">Gracias por su visita</p>
          <p className="font-bold text-[#C1444E]">Prohibido irse con hambre</p>
        </div>
        
        {/* Decorative Footer Elements */}
        <div className="flex gap-4 items-center opacity-20 pointer-events-none mt-8">
          <div className="h-[1px] w-24 sm:w-48 bg-[#2D2926]"></div>
          <div className="w-2 h-2 rounded-full bg-[#C1444E]"></div>
          <div className="h-[1px] w-24 sm:w-48 bg-[#2D2926]"></div>
        </div>
      </footer>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
