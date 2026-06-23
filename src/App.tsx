import React, { useState, useEffect } from 'react';
import { Coffee, Utensils, CupSoda, Cake, Pizza, Heart, Clock, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData } from './data';

const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee size={20} />,
  Utensils: <Utensils size={20} />,
  CupSoda: <CupSoda size={20} />,
  Cake: <Cake size={20} />,
  Pizza: <Pizza size={20} />,
};

const formatPrice = (price: number) => {
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
    <div className="min-h-screen bg-tita-50 font-sans text-gray-800">
      {/* Header / Hero */}
      <header className="relative bg-tita-800 text-white overflow-hidden">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-tita-900 to-transparent opacity-80"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-tita-700/50 rounded-full mb-6 ring-1 ring-tita-400/30 backdrop-blur-sm">
              <Heart className="text-tita-200 fill-tita-200" size={24} />
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-4 tracking-tight drop-shadow-sm">
              Soda Tita Rosa
            </h1>
            <p className="text-tita-100 text-lg sm:text-xl max-w-lg mx-auto font-medium">
              Sabor a casa, hecho con amor y la mejor cuchara tradicional.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-10 text-sm text-tita-200"
          >
            <div className="flex items-center justify-center gap-2">
              <Clock size={16} />
              <span>Lun - Sab: 6:00 AM - 4:00 PM</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={16} />
              <span>+(506) 2222-3333</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin size={16} />
              <span>Frente a la plaza principal</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Sticky Navigation */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-tita-50 py-4 border-b border-tita-200'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm font-medium
                  ${activeCategory === category.id 
                    ? 'bg-tita-600 text-white shadow-sm' 
                    : 'bg-white text-gray-600 hover:bg-tita-100 hover:text-tita-800 border border-tita-200'
                  }`}
              >
                {iconMap[category.iconName]}
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {menuData.map((category, index) => (
          <motion.section 
            key={category.id}
            id={`section-${category.id}`}
            className="mb-16 scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-tita-100 text-tita-700 rounded-xl">
                {iconMap[category.iconName]}
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                {category.title}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {category.items.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ y: -2 }}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-tita-100/50 hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-tita-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 pr-2">
                      {item.name}
                      {item.popular && (
                        <span className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 align-middle">
                          <Heart size={10} className="fill-amber-500" />
                          Popular
                        </span>
                      )}
                    </h3>
                    <span className="font-semibold text-tita-700 whitespace-nowrap bg-tita-50 px-2 py-1 rounded-lg">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
        <div className="max-w-4xl mx-auto px-4">
          <Heart className="mx-auto mb-4 text-tita-600 opacity-50" size={24} />
          <p className="mb-2">Soda Tita Rosa &copy; {new Date().getFullYear()}</p>
          <p>Hecho con amor y sazón tradicional.</p>
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
