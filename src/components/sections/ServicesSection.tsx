import SectionWrapper from '../SectionWrapper';

const ServicesSection = () => {
  return (
    <SectionWrapper id="services" title="Наши услуги">
      <div className="space-y-6">
        {/* Репетиторство */}
        <div className="bg-[#fffaf0] rounded-lg p-8 hover:bg-[#fff5d6] 
          transition-all duration-300 transform hover:scale-[1.01] border border-[#ffde59]/20">
          <h3 className="text-2xl font-semibold text-[#134071] mb-4 relative inline-block group">
            Репетиторство по школьным предметам
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffde59] transform origin-left
              transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </h3>
          
          <div className="flex items-start pl-4 group">
            <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 mr-3 flex-shrink-0 
              group-hover:scale-125 transition-transform duration-300" />
            <p className="text-gray-700 text-justify">
              начальное обучение, математика, физика, химия, биология, английский, казахский, русский, 
              история Казахстана и всемирная история, география, гуманитарная подготовка
            </p>
          </div>
        </div>

        {/* Подготовка к экзаменам */}
        <div className="bg-[#fffaf0] rounded-lg p-8 hover:bg-[#fff5d6] 
          transition-all duration-300 transform hover:scale-[1.01] border border-[#ffde59]/20">
          <h3 className="text-2xl font-semibold text-[#134071] mb-4 relative inline-block group">
            Подготовка к экзаменам
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffde59] transform origin-left
              transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </h3>
          
          <div className="space-y-3 pl-4">
            <div className="group">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 mr-3 flex-shrink-0 
                  group-hover:scale-125 transition-transform duration-300" />
                <p className="text-gray-700">ЕНТ, КТА, ЕГЭ, ОГЭ</p>
              </div>
            </div>
            <div className="group">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 mr-3 flex-shrink-0 
                  group-hover:scale-125 transition-transform duration-300" />
                <p className="text-gray-700">Международные экзамены: SAT, IELTS, TOEFL, YOS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Подготовка к олимпиадам */}
        <div className="bg-[#fffaf0] rounded-lg p-8 hover:bg-[#fff5d6] 
          transition-all duration-300 transform hover:scale-[1.01] border border-[#ffde59]/20">
          <h3 className="text-2xl font-semibold text-[#134071] mb-4 relative inline-block group">
            Подготовка к олимпиадам
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffde59] transform origin-left
              transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </h3>
          
          <div className="group pl-4">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 mr-3 flex-shrink-0 
                group-hover:scale-125 transition-transform duration-300" />
              <p className="text-gray-700">
                Республиканские и международные олимпиады по математике, физике, химии и биологии
              </p>
            </div>
          </div>
        </div>

        {/* Подготовка к поступлению */}
        <div className="bg-[#fffaf0] rounded-lg p-8 hover:bg-[#fff5d6] 
          transition-all duration-300 transform hover:scale-[1.01] border border-[#ffde59]/20">
          <h3 className="text-2xl font-semibold text-[#134071] mb-4 relative inline-block group">
            Подготовка к поступлению
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffde59] transform origin-left
              transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </h3>
          
          <div className="space-y-3 pl-4">
            <div className="group">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 mr-3 flex-shrink-0 
                  group-hover:scale-125 transition-transform duration-300" />
                <p className="text-gray-700">НИШ, РФМШ, БИЛ</p>
              </div>
            </div>
            <div className="group">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 mr-3 flex-shrink-0 
                  group-hover:scale-125 transition-transform duration-300" />
                <p className="text-gray-700">Вузы Казахстана и зарубежья</p>
              </div>
            </div>
          </div>
        </div>

        {/* Сопровождение поступления за рубеж */}
        <div className="bg-[#fffaf0] rounded-lg p-8 hover:bg-[#fff5d6] 
          transition-all duration-300 transform hover:scale-[1.01] border border-[#ffde59]/20">
          <h3 className="text-2xl font-semibold text-[#134071] mb-4 relative inline-block group">
            Сопровождение поступления за рубеж
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffde59] transform origin-left
              transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </h3>
          
          <div className="space-y-3 pl-4">
            <div className="group">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 mr-3 flex-shrink-0 
                  group-hover:scale-125 transition-transform duration-300" />
                <p className="text-gray-700">Профориентирование</p>
              </div>
            </div>
            <div className="group">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 mr-3 flex-shrink-0 
                  group-hover:scale-125 transition-transform duration-300" />
                <p className="text-gray-700">
                  Подбор вуза, подготовка мотивационного письма, сбор документов, 
                  консультации тьюторов на местах, подготовка к экзаменам
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;