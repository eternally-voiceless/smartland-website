import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

const Footer = () => {
  const scrollTo = useScrollTo();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-accent py-8 mt-auto border-t-2 border-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block group">
              Контакты
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/60 transform origin-left
                transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
            </h3>
            <ul className="space-y-4">
              <li className="group">
                <a 
                  href="tel:+77054281992"
                  className="flex items-center gap-2 hover:text-white transition-all duration-300 relative"
                >
                  <Phone size={18} className="transform group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative">
                    +7 (705) 428-19-92
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-white/60 transform origin-left
                      transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </span>
                </a>
              </li>
              <li className="group">
                <a 
                  href="mailto:smartland.ast@mail.ru"
                  className="flex items-center gap-2 hover:text-white transition-all duration-300"
                >
                  <Mail size={18} className="transform group-hover:-rotate-12 transition-transform duration-300" />
                  <span className="relative">
                    smartland.ast@mail.ru
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-white/60 transform origin-left
                      transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </span>
                </a>
              </li>
              <li className="group">
                <a 
                  href="https://2gis.kz/astana/firm/70000001055873859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-all duration-300"
                >
                  <MapPin size={18} className="transform group-hover:translate-y-[-2px] transition-transform duration-300" />
                  <span className="relative">
                    г. Астана, ул. Сыганак, 39/1, 77 офис; 1 этаж
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-white/60 transform origin-left
                      transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block group">
              Навигация
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/60 transform origin-left
                transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
            </h3>
            <ul className="space-y-3">
              <li className="group">
                <button 
                  onClick={() => scrollTo('about-smartland')}
                  className="relative hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative">
                    О центре
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-white/60 transform origin-left
                      transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </span>
                </button>
              </li>
              <li className="group">
                <button 
                  onClick={() => scrollTo('services')}
                  className="relative hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative">
                    Наши услуги
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-white/60 transform origin-left
                      transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </span>
                </button>
              </li>
              {/* Остальные пункты навигации в том же стиле */}
              <li className="group">
                <button 
                  onClick={() => scrollTo('prices')}
                  className="relative hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative">
                    Наши цены
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-white/60 transform origin-left
                      transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </span>
                </button>
              </li>
              <li className="group">
                <button 
                  onClick={() => scrollTo('teachers')}
                  className="relative hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative">
                    О преподавателях
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-white/60 transform origin-left
                      transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </span>
                </button>
              </li>
              <li className="group">
                <button 
                  onClick={() => scrollTo('results')}
                  className="relative hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative">
                    Наши результаты
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-white/60 transform origin-left
                      transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </span>
                </button>
              </li>
              <li className="group">
                <button 
                  onClick={() => scrollTo('reviews')}
                  className="relative hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative">
                    Отзывы
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-white/60 transform origin-left
                      transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </span>
                </button>
              </li>
              <li className="group">
                <button 
                  onClick={() => scrollTo('contacts')}
                  className="relative hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative">
                    Контакты
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-white/60 transform origin-left
                      transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block group">
              Социальные сети
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/60 transform origin-left
                transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/+77054281992" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group hover:text-white transition-all duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/smartland_astana/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group hover:text-white transition-all duration-300"
              >
                <Instagram size={24} className="transform group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-accent/30 text-center">
          <p>&copy; {currentYear} SmartLand. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;