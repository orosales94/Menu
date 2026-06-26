import React, { useState, useEffect } from 'react';
import { Coffee, Utensils, CupSoda, Cake, Pizza, Heart, Clock, MapPin, Phone, Wine, Printer, MessageCircle, Search, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData, galleryImages, reviewsData } from './data';
import logoImg from './logo.png';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<'es' | 'en'>(() => {
    return (localStorage.getItem('sodaTitaRosaLang') as 'es' | 'en') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('sodaTitaRosaLang', lang);
  }, [lang]);

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredMenuData = menuData.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (item.nameEn && item.nameEn.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.descriptionEn && item.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.items.length > 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active category based on scroll position
      const sections = filteredMenuData.map(cat => document.getElementById(`section-${cat.id}`));
      const scrollPosition = window.scrollY + 150; // Offset for sticky header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(filteredMenuData[i].id);
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
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#FAF9F6] flex flex-col items-center justify-center border-t-8 border-[#D65D45]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-[#2C1810]/10 shadow-lg bg-white mb-6"
            >
              <img src={logoImg} alt="Soda Tita Rosa Logo" className="w-full h-full object-contain p-2" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold tracking-tighter text-[#2C1810]"
            >
              Soda Tita Rosa
            </motion.h2>
            <motion.div
              className="mt-6 flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#2C1810]"
                  animate={{
                    y: ["0%", "-50%", "0%"],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#FAF9F6] text-[#2C1810] font-serif border-t-8 border-[#D65D45]">
      {/* Header / Hero */}
      <header className="px-6 sm:px-12 pt-10 pb-6 border-b border-[#2C1810]/10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-baseline gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-full overflow-hidden border border-[#2C1810]/10 shadow-lg bg-white print:border-2 print:border-black">
              <img src={logoImg} alt="Soda Tita Rosa Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-sans mb-1 opacity-60">La Fortuna, San Carlos, CR</p>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none text-[#2C1810] mb-2">
                Soda Tita Rosa
              </h1>
              
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-left md:text-right"
          >
            <p className="italic text-lg">{lang === 'es' ? 'Tradición tica y dulce sabor' : 'Costa Rican tradition and sweet flavor'}</p>
            <p className="text-[10px] tracking-[0.2em] uppercase font-sans mt-2">{lang === 'es' ? 'Menú Completo' : 'Full Menu'}</p>
            
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-6 md:mt-2 text-[10px] font-sans tracking-widest uppercase opacity-60 md:justify-end">
              <div className="flex items-center gap-2">
                <Clock size={12} />
                <span>{lang === 'es' ? 'Lun - Sab' : 'Mon - Sat'}: 6AM - 4PM</span>
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
            
            <div className="flex gap-4 items-center justify-start md:justify-end mt-4">
              <div className="flex items-center gap-2 text-xs font-sans font-bold print:hidden">
                <button
                  onClick={() => setLang('es')}
                  className={`px-2 py-1 transition-colors ${lang === 'es' ? 'bg-[#2C1810] text-[#FAF9F6]' : 'text-[#2C1810] hover:bg-black/10'}`}
                >
                  ES
                </button>
                <span className="opacity-30">|</span>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-1 transition-colors ${lang === 'en' ? 'bg-[#2C1810] text-[#FAF9F6]' : 'text-[#2C1810] hover:bg-black/10'}`}
                >
                  EN
                </button>
              </div>

              <button 
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#2C1810] text-[#2C1810] text-xs uppercase tracking-widest font-sans font-bold hover:bg-[#2C1810] hover:text-[#FAF9F6] transition-colors print:hidden"
              >
                <Printer size={14} />
                {lang === 'es' ? 'Imprimir Menú (PDF)' : 'Print Menu (PDF)'}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Sticky Navigation & Search */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-white border-b border-[#2C1810]/10 py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="relative w-full md:w-72 print:hidden">
              <input
                type="text"
                placeholder={lang === 'es' ? 'Buscar en el menú...' : 'Search menu...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-[#2C1810]/20 text-[#2C1810] px-4 py-2 pl-10 focus:outline-none focus:border-[#D65D45] focus:ring-1 focus:ring-[#D65D45] font-sans text-sm placeholder:text-[#2C1810]/40 transition-colors rounded-full"
              />
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2C1810]/40" />
            </div>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar gap-8 pb-2 sm:pb-0 sm:flex-wrap">
            {filteredMenuData.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`flex flex-col items-start whitespace-nowrap transition-colors uppercase font-sans font-bold
                  ${activeCategory === category.id 
                    ? 'text-[#D65D45] border-b-2 border-[#D65D45] pb-1' 
                    : 'text-[#2C1810] opacity-50 hover:opacity-100 pb-1 border-b-2 border-transparent'
                  }`}
              >
                <span className="text-[11px] tracking-widest">{lang === 'es' ? category.title : (category.titleEn || category.title)}</span>
                {category.titleEn && <span className="text-[9px] tracking-wider opacity-70 normal-case italic">{lang === 'es' ? category.titleEn : category.title}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <main className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        {filteredMenuData.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg opacity-60 font-sans">{lang === 'es' ? 'No se encontraron platillos que coincidan con la búsqueda.' : 'No dishes found matching your search.'}</p>
          </div>
        ) : (
          filteredMenuData.map((category, index) => (
            <motion.section 
            key={category.id}
            id={`section-${category.id}`}
            className="mb-24 scroll-mt-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10 text-center sm:text-left">
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-sans mb-1 text-[#D65D45] font-bold">{lang === 'es' ? 'Categoría' : 'Category'}</h2>
              <div className="border-b border-[#2C1810]/20 pb-2 inline-block">
                <h3 className="text-4xl font-bold italic inline">
                  {lang === 'es' ? category.title : (category.titleEn || category.title)}
                </h3>
                {category.titleEn && (
                  <span className="text-2xl font-bold italic opacity-40 ml-3">
                    / {lang === 'es' ? category.titleEn : category.title}
                  </span>
                )}
              </div>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 gap-x-16 gap-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {category.items.map((item) => (
                <motion.div 
                  key={item.id}
                  className="group relative"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  {item.popular && (
                    <div className="absolute -left-4 top-0 w-1 h-full bg-[#D65D45] hidden sm:block rounded-full"></div>
                  )}

                  {item.imageUrl && (
                    <div className="w-full h-48 mb-4 bg-stone-200 border border-[#2C1810]/10 overflow-hidden rounded-lg shadow-sm print:hidden">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  
                  <div className="flex justify-between items-end mb-1 border-b border-dotted border-[#2C1810]/30">
                    <div className="pb-1 pr-4">
                      <h4 className="text-xl md:text-2xl font-bold inline">
                        {lang === 'es' ? item.name : (item.nameEn || item.name)}
                      </h4>
                      {item.nameEn && (
                        <span className="text-lg md:text-xl font-bold italic opacity-50 ml-2">
                          / {lang === 'es' ? item.nameEn : item.name}
                        </span>
                      )}
                    </div>
                    <span className="font-sans font-bold text-lg text-[#2C1810] pb-1">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  
                  {item.popular && (
                    <p className="text-[10px] uppercase tracking-widest font-sans mb-2 font-bold text-[#2C1810] mt-2">
                      {lang === 'es' ? 'Lo Más Pedido' : 'Top Choice'}
                    </p>
                  )}
                  
                  <div className={`mt-2 ${!item.popular ? 'pt-1' : ''}`}>
                    <p className="text-sm leading-relaxed opacity-80 italic mb-1">
                      {lang === 'es' ? item.description : (item.descriptionEn || item.description)}
                    </p>
                    {item.descriptionEn && (
                      <p className="text-[13px] leading-relaxed opacity-60 font-sans">
                        {lang === 'es' ? item.descriptionEn : item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
          ))
        )}
        
        {/* Galería de Imágenes (Configurable desde data.ts) */}
        {galleryImages.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-24 print:hidden"
          >
            <div className="mb-10 text-center sm:text-left">
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-sans mb-1 text-[#D65D45] font-bold">{lang === 'es' ? 'Galería' : 'Gallery'}</h2>
              <div className="border-b border-[#2C1810]/20 pb-2 inline-block">
                <h3 className="text-4xl font-bold italic inline">
                  {lang === 'es' ? 'Nuestros Platillos' : 'Our Dishes'}
                </h3>
                <span className="text-2xl font-bold italic opacity-40 ml-3">
                  / {lang === 'es' ? 'Our Dishes' : 'Nuestros Platillos'}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="aspect-square bg-stone-200 rounded-lg overflow-hidden border border-[#2C1810]/10 shadow-sm relative group">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white font-bold text-lg leading-tight">{img.title}</p>
                    {img.titleEn && <p className="text-white/80 font-sans text-sm italic">{img.titleEn}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Reseñas de Clientes */}
        {reviewsData && reviewsData.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 print:hidden"
          >
            <div className="mb-10 text-center sm:text-left">
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-sans mb-1 text-[#D65D45] font-bold">{lang === 'es' ? 'Testimonios' : 'Testimonials'}</h2>
              <div className="border-b border-[#2C1810]/20 pb-2 inline-block">
                <h3 className="text-4xl font-bold italic inline">
                  {lang === 'es' ? 'Opiniones de nuestros clientes' : 'Customer Reviews'}
                </h3>
                <span className="text-2xl font-bold italic opacity-40 ml-3">
                  / {lang === 'es' ? 'Reviews' : 'Opiniones de nuestros clientes'}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {reviewsData.map((review) => (
                <motion.div
                  key={review.id}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-[#2C1810]/10 p-6 rounded-xl shadow-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{review.author}</h4>
                      <p className="text-sm opacity-60 font-sans">{review.date}</p>
                    </div>
                    <div className="flex gap-1 text-[#D65D45]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < review.rating ? "currentColor" : "none"}
                          className={i < review.rating ? "text-[#D65D45]" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="italic opacity-80">"{review.text}"</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-[#FAF9F6] p-12 flex flex-col justify-between items-center mt-12 print:hidden">
        <div className="text-[10px] uppercase tracking-widest text-center">
          <p className="mb-2 text-[#D65D45] font-bold">{lang === 'es' ? 'Gracias por su visita' : 'Thanks for your visit'}</p>
          <p className="font-serif italic text-2xl">{lang === 'es' ? 'Prohibido irse con hambre' : 'Leaving hungry is forbidden'}</p>
        </div>
        
        {/* Decorative Footer Elements */}
        <div className="flex gap-4 items-center opacity-40 pointer-events-none mt-8">
          <div className="h-[1px] w-24 sm:w-48 bg-[#FAF9F6]"></div>
          <div className="w-2 h-2 rounded-full bg-[#FAF9F6]"></div>
          <div className="h-[1px] w-24 sm:w-48 bg-[#FAF9F6]"></div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/50622223333?text=Hola,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20desde%20el%20men%C3%BA%20digital."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 print:hidden flex items-center justify-center"
        aria-label="Pedir por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

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
    </>
  );
}
