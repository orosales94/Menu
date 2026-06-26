import React, { useState, useEffect } from 'react';
import { Coffee, Utensils, CupSoda, Cake, Pizza, Heart, Clock, MapPin, Phone, Wine, Printer, MessageCircle, Search, Star, Info, Instagram, Facebook } from 'lucide-react';
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
  const [showMobileInfo, setShowMobileInfo] = useState(false);
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
            className="fixed inset-0 z-[100] bg-[#FFF8F0] flex flex-col items-center justify-center border-t-8 border-[#C0392B]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-[#1A0A00]/10 shadow-lg bg-white mb-6"
            >
              <img src={logoImg} alt="Soda Tita Rosa Logo" className="w-full h-full object-contain p-2" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold tracking-tighter text-[#1A0A00]"
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
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full text-center sm:text-left"
          >
            <div className="w-16 h-16 sm:w-28 sm:h-28 shrink-0 rounded-full overflow-hidden border-2 border-[#EDD9C0] shadow-sm bg-white print:border-2 print:border-black">
              <img src={logoImg} alt="Soda Tita Rosa Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="w-full">
              <p className="text-[10px] tracking-[0.3em] uppercase font-sans mb-1 opacity-60">La Fortuna, San Carlos, CR</p>
              <h1 className="text-3xl sm:text-6xl font-bold tracking-tighter leading-none text-[#1A0A00] mb-2 font-serif flex items-center justify-center sm:justify-start gap-2 sm:gap-4 before:content-[''] before:hidden sm:before:block before:h-[1px] before:w-8 before:bg-[#EDD9C0] after:content-[''] after:hidden sm:after:block after:h-[1px] after:w-8 after:bg-[#EDD9C0]">
                Soda Tita Rosa
              </h1>
              <p className="italic text-lg sm:text-xl text-[#C0392B] font-serif">{lang === 'es' ? 'Tradición tica y dulce sabor' : 'Costa Rican tradition and sweet flavor'}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center md:text-right w-full md:w-auto"
          >
            
            <button 
              onClick={() => setShowMobileInfo(!showMobileInfo)}
              className="md:hidden mx-auto inline-flex items-center gap-2 px-4 py-2 border border-[#EDD9C0] text-[#1A0A00] rounded-full text-xs font-bold bg-white mb-4 shadow-sm"
            >
              <Info size={14} />
              {lang === 'es' ? 'Información' : 'Information'}
            </button>
            
            <div className={`flex-col md:flex md:flex-row gap-2 md:gap-4 text-[10px] font-sans tracking-widest uppercase opacity-80 justify-center md:justify-end mb-4 ${showMobileInfo ? 'flex' : 'hidden'}`}>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Clock size={12} className="text-[#E67E22]" />
                <span>{lang === 'es' ? 'Lun - Sab' : 'Mon - Sat'}: 6AM - 4PM</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={12} className="text-[#E67E22]" />
                <span>+(506) 2222-3333</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={12} className="text-[#E67E22]" />
                <span>La Fortuna</span>
              </div>
            </div>
            
            <div className="flex gap-4 items-center justify-start md:justify-end mt-4">
              <div className="flex items-center gap-2 text-xs font-sans font-bold print:hidden">
                <button
                  onClick={() => setLang('es')}
                  className={`px-2 py-1 transition-colors ${lang === 'es' ? 'bg-[#1A0A00] text-[#FFF8F0]' : 'text-[#1A0A00] hover:bg-black/10'}`}
                >
                  ES
                </button>
                <span className="opacity-30">|</span>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-1 transition-colors ${lang === 'en' ? 'bg-[#1A0A00] text-[#FFF8F0]' : 'text-[#1A0A00] hover:bg-black/10'}`}
                >
                  EN
                </button>
              </div>

              <button 
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#1A0A00] text-[#1A0A00] text-xs uppercase tracking-widest font-sans font-bold hover:bg-[#1A0A00] hover:text-[#FFF8F0] transition-colors print:hidden"
              >
                <Printer size={14} />
                {lang === 'es' ? 'Imprimir Menú (PDF)' : 'Print Menu (PDF)'}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Sticky Navigation & Search */}
      <div className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${isScrolled ? 'bg-[#FFF8F0]/92 shadow-sm py-4' : 'bg-[#FFF8F0]/92 border-b border-[#EDD9C0] py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row-reverse md:items-center justify-between gap-4">
          <div className="relative w-full md:w-72 print:hidden mb-2 md:mb-0">
            <input
              type="text"
              placeholder={lang === 'es' ? 'Buscar en el menú...' : 'Search menu...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#EDD9C0] text-[#1A0A00] px-4 py-2 pl-10 focus:outline-none focus:border-[#C0392B] focus:ring-1 focus:ring-[#C0392B] font-sans text-sm placeholder:text-[#1A0A00]/40 transition-colors rounded-full shadow-inner"
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
                    ? 'text-[#C0392B]' 
                    : 'text-[#1A0A00] opacity-50 hover:opacity-100'
                  }`}
              >
                <span className="text-xl sm:text-base sm:mr-2 mb-1 sm:mb-0 sm:inline-block flex items-center gap-2">
                  {iconMap[category.icon]}
                  <span className="hidden sm:inline-block text-[11px] tracking-widest">{lang === 'es' ? category.title : (category.titleEn || category.title)}</span>
                </span>
                
                <span className="hidden sm:block absolute -bottom-2 left-0 h-0.5 bg-[#C0392B] transition-all duration-300 ease-in-out" style={{ width: activeCategory === category.id ? '100%' : '0%' }}></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-12 py-16">
        {filteredMenuData.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 flex flex-col items-center justify-center gap-4"
          >
            <Utensils size={48} className="text-[#C0392B] opacity-50" />
            <p className="text-lg text-[#7A5C4A] font-sans font-light">{lang === 'es' ? 'No se encontraron platillos que coincidan con la búsqueda.' : 'No dishes found matching your search.'}</p>
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
            <div className="mb-10 text-center sm:text-left">
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-sans mb-1 text-[#C0392B] font-bold">{lang === 'es' ? 'Categoría' : 'Category'}</h2>
              <div className="border-b border-[#EDD9C0] pb-2 inline-block">
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
                  
                  <div className="flex justify-between items-end mb-2 border-b border-[#EDD9C0] pb-2">
                    <div className="pr-4">
                      <h4 className="text-xl md:text-2xl font-bold inline font-sans text-[#1A0A00]">
                        {lang === 'es' ? item.name : (item.nameEn || item.name)}
                      </h4>
                      {item.nameEn && (
                        <span className="text-lg md:text-xl font-bold italic opacity-50 ml-2 text-[#1A0A00]">
                          / {lang === 'es' ? item.nameEn : item.name}
                        </span>
                      )}
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={lang + item.price}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="font-serif italic text-[1.1rem] text-[#E67E22] whitespace-nowrap font-bold"
                      >
                        {formatPrice(item.price)}
                      </motion.span>
                    </AnimatePresence>
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
            className="mb-12 print:hidden -mx-6 sm:-mx-12 px-6 sm:px-12 py-12 bg-gradient-to-br from-[#1A0A00] to-[#3D1C0C] text-[#FFF8F0]"
          >
            <div className="mb-10 text-center sm:text-left">
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-sans mb-1 text-[#E67E22] font-bold">{lang === 'es' ? 'Testimonios' : 'Testimonials'}</h2>
              <div className="border-b border-[#EDD9C0]/30 pb-2 inline-block">
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
                  className="bg-[#FFF8F0] text-[#1A0A00] p-6 rounded-[6px] shadow-lg relative overflow-hidden group"
                  style={{ borderLeft: '4px solid transparent', borderImage: 'linear-gradient(to bottom, #C0392B, #E67E22) 1 100%' }}
                >
                  <div className="absolute -top-4 -right-2 text-[100px] font-serif leading-none opacity-10 text-[#EDD9C0] pointer-events-none select-none">"</div>
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div>
                      <h4 className="font-bold text-lg font-sans">{review.author}</h4>
                      <p className="text-sm opacity-60 font-sans">{review.date}</p>
                    </div>
                    <div className="flex gap-1 text-[#F1C40F] drop-shadow-[0_0_6px_rgba(241,196,15,0.5)]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < review.rating ? "currentColor" : "none"}
                          className={i < review.rating ? "text-[#F1C40F]" : "text-gray-300 drop-shadow-none"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="italic opacity-80 font-sans font-light text-[#7A5C4A] relative z-10">"{review.text}"</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A0A00] text-[#FFF8F0] pt-12 pb-8 flex flex-col justify-between items-center print:hidden relative border-t-8 border-[#C0392B]">
        <div className="absolute top-0 left-0 w-full h-[18px] opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M10 0l10 10-10 10L0 10z\" fill=\"%23EDD9C0\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')" }}></div>
        
        <div className="text-[10px] uppercase tracking-widest text-center relative z-10">
          <p className="mb-2 text-[#C0392B] font-bold">{lang === 'es' ? 'Gracias por su visita' : 'Thanks for your visit'}</p>
          <p className="font-serif italic text-[1.4rem]" style={{ textShadow: '1px 1px 0 #EDD9C0' }}>{lang === 'es' ? '¡Prohibido irse con hambre!' : 'Leaving hungry is forbidden!'}</p>
        </div>
        
        <div className="flex gap-6 items-center mt-10 relative z-10">
          <a href="#" className="w-10 h-10 rounded-full bg-[#C0392B] flex items-center justify-center hover:bg-[#E67E22] transition-colors shadow-sm">
            <Instagram size={18} className="text-white" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[#C0392B] flex items-center justify-center hover:bg-[#E67E22] transition-colors shadow-sm">
            <Facebook size={18} className="text-white" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[#C0392B] flex items-center justify-center hover:bg-[#E67E22] transition-colors shadow-sm">
            <MessageCircle size={18} className="text-white" />
          </a>
        </div>

        {/* Decorative Footer Elements */}
        <div className="flex gap-4 items-center opacity-20 pointer-events-none mt-10 relative z-10">
          <div className="h-[1px] w-24 sm:w-48 bg-[#FFF8F0]"></div>
          <div className="w-2 h-2 rounded-full bg-[#FFF8F0]"></div>
          <div className="h-[1px] w-24 sm:w-48 bg-[#FFF8F0]"></div>
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
