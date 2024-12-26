import { useEffect, useRef } from 'react';

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Navigation = ({ isOpen, setIsOpen }: NavigationProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Определяем, является ли устройство мобильным
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || window.matchMedia("(max-width: 768px)").matches;
  };

  // Запускаем таймер закрытия навигации
  const startCloseTimer = () => {
    if (!isMobile()) {  // Запускаем таймер только для десктопов
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 7000);  // 7 секунд до закрытия
    }
  };

  // Останавливаем таймер при наведении мыши
  const stopCloseTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Запускаем таймер при открытии навигации
  useEffect(() => {
    if (isOpen) {
      startCloseTimer();
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen]);

  const menuItems = [
    { id: 'about-smartland', text: 'О центре' },
    { id: 'services', text: 'Наши услуги' },
    { id: 'prices', text: 'Наши цены'},
    { id: 'teachers', text: 'О преподавателях' },
    { id: 'results', text: 'Наши результаты' },
    { id: 'reviews', text: 'Отзывы' },
    { id: 'contacts', text: 'Контакты' }
  ];

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed right-0 top-[15vh] w-72 h-[85vh] bg-[#134071]/95 backdrop-blur-md 
        nav-menu transition-all duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40 shadow-xl`}
      onMouseEnter={stopCloseTimer}
      onMouseLeave={startCloseTimer}
      role="navigation"
      aria-label="Главное меню"
    >
      <ul className="flex flex-col h-full divide-y divide-[#ffde59]/20">
        {menuItems.map((item, index) => (
          <li
            key={item.id}
            onClick={(e) => handleClick(e, item.id)}
            className={`transform transition-all duration-300 cursor-pointer
              relative group overflow-hidden flex-1 ${
              isOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-8 opacity-0'
            }`}
            style={{ 
              transitionDelay: `${isOpen ? index * 100 : 0}ms`
            }}
          >
            <span className="text-[#ffde59] text-lg block relative z-10 p-6 h-full flex items-center">
              {item.text}
            </span>
            
            <span className="absolute inset-0 bg-[#ffde59]/10 
              translate-x-[-100%] transition-transform duration-300 ease-out
              group-hover:translate-x-0"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;