import SectionWrapper from '../SectionWrapper';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactsSection = () => {
  return (
    <SectionWrapper id="contacts" title="Контакты">
      <div className="bg-[#fffaf0] rounded-lg p-8 hover:bg-[#fff5d6] 
        transition-all duration-300 transform hover:scale-[1.01] border border-[#ffde59]/20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Контактные данные */}
          <div>
            <h3 className="text-2xl font-semibold text-[#134071] mb-4">
              Свяжитесь с нами
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#134071]" />
                <a 
                  href="tel:+77054281992"
                  className="hover:text-[#134071] transition-colors duration-300"
                >
                  +7 (705) 428-19-92
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#134071]" />
                <a 
                  href="mailto:smartland.ast@mail.ru"
                  className="hover:text-[#134071] transition-colors duration-300"
                >
                  smartland.ast@mail.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-[#134071]" />
                <a 
                  href="https://2gis.kz/astana/firm/70000001055873859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#134071] transition-colors duration-300"
                >
                  г. Астана, ул. Сыганак, 39/1, 77 офис; 1 этаж
                </a>
              </li>
            </ul>
          </div>

          {/* Режим работы */}
          <div>
            <h3 className="text-2xl font-semibold text-[#134071] mb-4">
              Режим работы
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Понедельник-Пятница</p>
                  <p className="text-gray-700">08:00 - 21:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Суббота, Воскресенье</p>
                  <p className="text-gray-700">08:00 - 20:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactsSection;