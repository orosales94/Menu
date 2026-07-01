import React, { useState, useEffect } from 'react';
import { Coffee, Utensils, CupSoda, Cake, Pizza, Heart, Clock, MapPin, Phone, Wine, Printer, MessageCircle, Search, Star, Info, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData, galleryImages, reviewsData } from './data';

const iconMap: Record<string, React.ElementType> = {
  Coffee,
  Utensils,
  CupSoda,
  Cake,
  Pizza,
  Wine,
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
  const [showMobileInfo, setShowMobileInfo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>(() => {
    return (localStorage.getItem('sodaTitaRosaLang') as 'es' | 'en') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('sodaTitaRosaLang', lang);
  }, [lang]);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const options = { timeZone: 'America/Costa_Rica', hour: 'numeric', minute: 'numeric', hour12: false, weekday: 'short' } as const;
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(now);
      
      const weekday = parts.find(p => p.type === 'weekday')?.value.toLowerCase();
      const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0', 10);
      
      if (weekday !== 'sun' && hour >= 6 && hour < 16) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

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
            className="fixed inset-0 z-[100] bg-[#FFF8F0] flex flex-col items-center justify-center border-t-8 border-[#C0392B]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-[#1A0A00]/10 shadow-lg bg-white mb-6"
            >
              <img src="./logo.png" alt="Soda Tita Rosa Logo" className="w-full h-full object-contain p-2" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-[#1A0A00] font-serif mt-2"
            >
              Soda Tita Rosa
            </motion.h2>
            <motion.div
              className="mt-6 flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#1A0A00]"
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

      <div className="min-h-screen bg-[#FFF8F0] text-[#1A0A00] font-sans border-t-8 border-[#C0392B]">
      {/* Header / Hero */}
      <header className="pt-8 pb-6 border-b border-[#EDD9C0] bg-[#FFFFFF] relative">
        <div className="absolute top-0 left-0 w-full h-[18px] opacity-40 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M10 0l10 10-10 10L0 10z\" fill=\"%23EDD9C0\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')" }}></div>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-baseline gap-6 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 flex-1 text-center sm:text-left"
          >
            <div className="w-16 h-16 sm:w-28 sm:h-28 shrink-0 rounded-full overflow-hidden border-2 border-[#EDD9C0] shadow-sm bg-white print:border-2 print:border-black">
              <img src="./logo.png" alt="Soda Tita Rosa Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="w-full">
              <p className="text-[10px] tracking-[0.3em] uppercase font-sans mb-1 opacity-60">La Fortuna, San Carlos, CR</p>
              <h1 className="text-[1.7rem] sm:text-6xl font-bold tracking-tighter leading-none text-[#1A0A00] mb-2 font-serif flex items-center justify-center sm:justify-start gap-2 sm:gap-4 before:content-[''] before:hidden sm:before:block before:h-[1px] before:w-8 before:bg-[#EDD9C0] after:content-[''] after:hidden sm:after:block after:h-[1px] after:w-8 after:bg-[#EDD9C0]">
                Soda Tita Rosa
              </h1>
              <p className="hidden sm:block italic text-lg sm:text-xl text-[#C0392B] font-serif">{lang === 'es' ? 'Tradición tica y dulce sabor' : 'Costa Rican tradition and sweet flavor'}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center md:text-right w-full md:w-auto md:shrink-0"
          >
            
            <button 
              onClick={() => setShowMobileInfo(!showMobileInfo)}
              className="md:hidden mx-auto inline-flex items-center gap-2 px-4 py-2 border border-[#EDD9C0] text-[#1A0A00] rounded-full text-xs font-bold bg-white mb-4 shadow-sm"
            >
              <Info size={14} />
              {lang === 'es' ? 'Información' : 'Information'}
            </button>
            
            <div className={`flex-col md:flex md:flex-row gap-4 md:gap-6 text-[10px] font-sans tracking-widest uppercase opacity-80 justify-center md:justify-end mb-4 ${showMobileInfo ? 'flex' : 'hidden'}`}>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Clock size={12} className="text-[#E67E22] shrink-0" />
                <span className="whitespace-nowrap">{lang === 'es' ? 'Lun - Sab' : 'Mon - Sat'}: 6AM - 4PM</span>
                <span className={`whitespace-nowrap px-2 py-0.5 rounded text-[0.72rem] font-bold tracking-normal ml-2 print:hidden ${isOpen ? 'text-[#27AE60] bg-[#27AE60]/10' : 'text-[#C0392B] bg-[#C0392B]/10'}`}>
                  {isOpen ? (lang === 'es' ? '🟢 Abierto ahora' : '🟢 Open now') : (lang === 'es' ? '🔴 Cerrado' : '🔴 Closed')}
                </span>
              </div>
              <a href="tel:+50622223333" className="flex items-center justify-center md:justify-end gap-2 hover:text-[#C0392B] transition-colors">
                <Phone size={12} className="text-[#E67E22] shrink-0" />
                <span className="whitespace-nowrap">+(506) 2222-3333</span>
              </a>
              <a href="https://maps.google.com/?q=La+Fortuna,+San+Carlos,+Costa+Rica" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-end gap-2 hover:text-[#C0392B] transition-colors">
                <MapPin size={12} className="text-[#E67E22] shrink-0" />
                <span className="whitespace-nowrap">La Fortuna</span>
              </a>
            </div>
            
            <div className="flex gap-4 items-center justify-center md:justify-end mt-4">
              <div className="flex items-center gap-2 text-xs font-sans font-bold print:hidden">
                <button
                  onClick={() => setLang('es')}
                  className={`px-3 py-1 rounded transition-colors border ${lang === 'es' ? 'bg-[#C0392B] text-white border-[#C0392B]' : 'bg-transparent text-[#1A0A00] border-[#C0392B] hover:bg-[#C0392B]/10'}`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded transition-colors border ${lang === 'en' ? 'bg-[#C0392B] text-white border-[#C0392B]' : 'bg-transparent text-[#1A0A00] border-[#C0392B] hover:bg-[#C0392B]/10'}`}
                >
                  EN
                </button>
              </div>

              <button 
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#1A0A00] text-[#1A0A00] text-xs uppercase tracking-widest font-sans font-bold hover:bg-[#1A0A00] hover:text-[#FFF8F0] transition-colors rounded print:hidden"
              >
                <Printer size={14} />
                {lang === 'es' ? 'Imprimir Menú' : 'Print Menu'}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Sticky Navigation & Search */}
      <div className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md flex flex-col md:flex-row-reverse md:items-center justify-between gap-4 px-6 sm:px-12 ${isScrolled ? 'bg-[#FFF8F0]/93 shadow-sm py-4' : 'bg-[#FFF8F0]/93 border-b border-[#EDD9C0] py-6'}`}>
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row-reverse md:items-center justify-between gap-4">
          <div className="relative w-full md:w-72 print:hidden mb-2 md:mb-0 order-first md:order-last">
            <input
              type="text"
              placeholder={lang === 'es' ? 'Buscar en el menú...' : 'Search menu...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-[1.5px] border-[#EDD9C0] text-[#1A0A00] px-4 py-2 pl-10 focus:outline-none focus:border-[#C0392B] focus:shadow-[0_0_0_3px_rgba(192,57,43,0.12)] font-sans text-sm placeholder:text-[#1A0A00]/40 transition-all duration-200 rounded-full"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A0A00]/40" />
          </div>
          <div className="flex overflow-x-auto hide-scrollbar gap-6 md:gap-8 pb-2 sm:pb-0 sm:flex-wrap items-center">
            {filteredMenuData.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`group relative flex flex-col items-center sm:items-start whitespace-nowrap transition-colors uppercase font-sans font-bold
                  ${activeCategory === category.id 
                    ? 'text-[#C0392B] font-semibold' 
                    : 'text-[#1A0A00] opacity-50 hover:opacity-100'
                  }`}
              >
                <span className="text-xl sm:text-base sm:mr-2 mb-1 sm:mb-0 sm:inline-block flex items-center gap-2">
                  <span className="text-[1.3rem]">{React.createElement(iconMap[category.iconName] || Utensils, { size: 20 })}</span>
                  <span className="hidden sm:inline-block text-[11px] tracking-widest">{lang === 'es' ? category.title : (category.titleEn || category.title)}</span>
                </span>
                
                <span className="hidden sm:block absolute -bottom-2 left-0 h-0.5 bg-[#C0392B] transition-all duration-250 ease-in-out" style={{ width: activeCategory === category.id ? '100%' : '0%' }}></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-12 py-8 sm:py-16">
        
        {/* Service Banner */}
        <div className="mb-10 p-4 rounded bg-gradient-to-r from-[#FFF8E7] to-[#FFF3CD] border-l-[3px] border-[#E67E22] flex items-start sm:items-center gap-3 print:hidden">
          <span className="text-xl">🧾</span>
          <p className="text-[0.8rem] font-sans text-[#1A0A00]">
            {lang === 'es' 
              ? 'Precios con 10% de servicio incluido. Se muestra precio base + cargo desglosado.'
              : 'All prices include 10% service charge. Base price and fee shown per dish.'}
          </p>
        </div>

        {filteredMenuData.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 flex flex-col items-center justify-center gap-4 animate-fade-in-up"
          >
            <span className="text-[2.5rem]">🍽️</span>
            <p className="text-lg text-[#7A5C4A] font-sans font-light">
              {lang === 'es' ? 'No encontramos ese platillo. ¡Prueba con otro término!' : 'No dishes found. Try a different search term!'}
            </p>
          </motion.div>
        ) : (
          filteredMenuData.map((category, index) => (
            <motion.section 
            key={category.id}
            id={`section-${category.id}`}
            className="mb-24 scroll-mt-32"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-sans mb-2 text-[#C0392B] font-bold">{lang === 'es' ? 'Categoría' : 'Category'}</h2>
                <div className="inline-flex items-center gap-3">
                  <span className="text-[1.8rem]">{React.createElement(iconMap[category.iconName] || Utensils, { size: 28 })}</span>
                  <h3 className="text-[1.6rem] font-bold italic font-serif text-[#1A0A00]">
                    {lang === 'es' ? category.title : (category.titleEn || category.title)}
                  </h3>
                  {category.titleEn && (
                    <span className="text-[1.4rem] font-bold italic opacity-40 ml-1">
                      / {lang === 'es' ? category.titleEn : category.title}
                    </span>
                  )}
                </div>
              </div>
              <span className="font-sans font-light text-[0.7rem] text-[#7A5C4A]">
                {category.items.length} {lang === 'es' ? 'platillos' : 'dishes'}
              </span>
            </div>
            <div className="w-full h-[1px] mb-8" style={{ background: 'linear-gradient(to right, transparent, var(--tan), transparent)' }}></div>

            <motion.div 
              className="grid md:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-8"
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
                  className="group relative bg-[#FFFFFF] p-5 rounded-[6px] shadow-[0_1px_4px_rgba(0,0,0,0.07)] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 w-full"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  {item.popular && (
                    <div className="absolute top-4 right-4 text-[#F1C40F]" title={lang === 'es' ? 'Favorito de nuestros clientes' : 'Customer favorite'}>
                      <Star size={20} fill="currentColor" className="drop-shadow-sm" />
                    </div>
                  )}

                  {item.imageUrl && (
                    <div className="w-full h-48 mb-4 bg-stone-200 overflow-hidden rounded-[4px] print:hidden">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-2 border-b border-[#EDD9C0] pb-2 border-dashed">
                    <div className="pr-0 sm:pr-4 mb-2 sm:mb-0 w-full sm:w-auto">
                      <h4 className="text-xl md:text-2xl font-bold inline font-sans text-[#1A0A00]">
                        {lang === 'es' ? item.name : (item.nameEn || item.name)}
                      </h4>
                      {item.nameEn && (
                        <span className="text-lg md:text-xl font-bold italic opacity-50 ml-2 text-[#1A0A00]">
                          / {lang === 'es' ? item.nameEn : item.name}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-start sm:items-end flex-shrink-0">
                      <AnimatePresence mode="wait">
                        <motion.span 
                          key={lang + item.price}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="font-serif italic text-[1.05rem] text-[#E67E22] whitespace-nowrap font-bold leading-tight"
                        >
                          {formatPrice(typeof item.price === 'number' ? item.price * 1.1 : item.price)}
                        </motion.span>
                      </AnimatePresence>
                      {typeof item.price === 'number' && (
                        <div className="text-[0.68rem] font-sans font-light text-[#7A5C4A] leading-tight text-left sm:text-right mt-0.5">
                          <p>{lang === 'es' ? 'Precio' : 'Price'}: {formatPrice(item.price)}</p>
                          <p>+10% {lang === 'es' ? 'serv.' : 'fee'}: {formatPrice(item.price * 0.1)}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm leading-relaxed font-sans font-light text-[#7A5C4A] mb-1">
                      {lang === 'es' ? item.description : (item.descriptionEn || item.description)}
                    </p>
                    {item.descriptionEn && (
                      <p className="text-[13px] leading-relaxed font-sans font-light text-[#7A5C4A]/70">
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
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-sans mb-1 text-[#C0392B] font-bold">{lang === 'es' ? 'Galería' : 'Gallery'}</h2>
              <div className="border-b border-[#1A0A00]/20 pb-2 inline-block">
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
                <div key={i} className="aspect-square bg-stone-200 rounded-lg overflow-hidden border border-[#1A0A00]/10 shadow-sm relative group">
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
            className="mb-12 print:hidden -mx-4 sm:-mx-12 px-4 sm:px-12 py-12 bg-gradient-to-br from-[#1A0A00] to-[#3D1C0C] text-[#FFF8F0]"
          >
            <div className="mb-8 text-center sm:text-left">
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-sans mb-1 text-[#E67E22] font-bold">{lang === 'es' ? 'Testimonios' : 'Testimonials'}</h2>
              <div className="border-b border-[#EDD9C0]/30 pb-2 inline-block">
                <h3 className="text-[1.4rem] font-bold italic font-serif text-[#FFF8F0]/85 inline">
                  {lang === 'es' ? 'Opiniones de nuestros clientes' : 'Customer Reviews'}
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {reviewsData.map((review) => (
                <motion.div
                  key={review.id}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 text-[#FFF8F0] p-6 relative overflow-hidden group rounded-r-[4px]"
                  style={{ borderLeft: '3px solid transparent', borderImage: 'linear-gradient(to bottom, #C0392B, #E67E22) 1 100%' }}
                >
                  <div className="absolute -top-2 left-4 text-[4rem] font-serif leading-none opacity-10 text-white pointer-events-none select-none">"</div>
                  <div className="flex justify-between items-start mb-4 relative z-10 pt-2">
                    <div>
                      <h4 className="font-sans font-semibold text-[0.75rem] uppercase text-[#FFF8F0]/50 tracking-wide">{review.author}</h4>
                      <p className="text-xs opacity-40 font-sans mt-0.5">{review.date}</p>
                    </div>
                    <div className="flex gap-1 text-[#F1C40F] drop-shadow-[0_0_8px_rgba(241,196,15,0.4)]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < review.rating ? "currentColor" : "none"}
                          className={i < review.rating ? "text-[#F1C40F]" : "text-white/20 drop-shadow-none"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="italic opacity-90 font-sans font-light text-[0.85rem] relative z-10 leading-relaxed text-[#FFF8F0]">"{review.text}"</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A0A00] text-[#FFF8F0] pt-12 pb-8 flex flex-col justify-between items-center print:hidden relative border-t-[8px] border-[#C0392B]">
        <div className="absolute top-0 left-0 w-full h-[18px] opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M10 0l10 10-10 10L0 10z\" fill=\"%23EDD9C0\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')" }}></div>
        
        <div className="text-[10px] uppercase tracking-widest text-center relative z-10 mt-6">
          <p className="mb-2 text-[#C0392B] font-bold">{lang === 'es' ? 'Gracias por su visita' : 'Thanks for your visit'}</p>
          <p className="font-serif italic text-[1.5rem] text-[#C0392B] font-bold" style={{ textShadow: '1px 2px 0 #EDD9C0' }}>{lang === 'es' ? '¡Prohibido irse con hambre!' : 'Leaving hungry is forbidden!'}</p>
        </div>
        
        <div className="flex gap-6 items-center mt-10 relative z-10">
          <a href="#" className="w-10 h-10 rounded-full bg-[#C0392B] flex items-center justify-center hover:scale-110 hover:opacity-100 opacity-90 transition-all shadow-sm">
            <Instagram size={18} className="text-white" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[#C0392B] flex items-center justify-center hover:scale-110 hover:opacity-100 opacity-90 transition-all shadow-sm">
            <Facebook size={18} className="text-white" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[#C0392B] flex items-center justify-center hover:scale-110 hover:opacity-100 opacity-90 transition-all shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
        </div>

        {/* Decorative Footer Elements */}
        <div className="flex gap-4 items-center opacity-20 pointer-events-none mt-10 relative z-10">
          <div className="h-[1px] w-16 sm:w-32 bg-[#FFF8F0]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFF8F0]"></div>
          <div className="h-[1px] w-16 sm:w-32 bg-[#FFF8F0]"></div>
        </div>

        <div className="mt-8 text-[0.65rem] font-sans opacity-50 tracking-widest text-center uppercase relative z-10">
          <p>© 2025 Soda Tita Rosa · La Fortuna, Costa Rica</p>
          <p className="mt-2 hidden print:block text-xs">Impreso desde soda-tita-rosa.github.io</p>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/50622223333" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[200] w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform duration-200 tooltip-trigger print:hidden"
        data-tooltip={lang === 'es' ? 'Escribinos por WhatsApp' : 'Message us on WhatsApp'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>
    </>
  );
}
