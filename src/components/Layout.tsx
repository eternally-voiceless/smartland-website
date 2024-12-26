import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';
import HeroSection from './sections/HeroSection';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  // Обработчик клика по основному контенту
  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Проверяем, что клик был не по навигации, гамбургер-меню или виджету WhatsApp
    if (!target.closest('.nav-menu') && 
        !target.closest('.hamburger') && 
        !target.closest('.whatsapp-widget')) {
      setIsNavOpen(false);
      setIsWhatsAppOpen(false);
    }
  };

  // Устанавливаем обработчик клика при монтировании компонента
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    
    // Очищаем обработчик при размонтировании
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#fff9f0] to-white">
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <HeroSection />  {/* Добавляем HeroSection сразу после Header */}
      <main className="flex-grow pb-16">  {/* Убираем pt-[15vh], так как теперь у нас есть HeroSection */}
        <div className="max-w-7xl mx-auto px-4 sm:px-[10%] lg:px-[10%]">
          {children}
        </div>
      </main>
      <WhatsAppWidget 
        isOpen={isWhatsAppOpen} 
        setIsOpen={setIsWhatsAppOpen} 
      />
      <Footer />
    </div>
  );
};

export default Layout;