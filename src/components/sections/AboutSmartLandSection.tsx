import SectionWrapper from '../SectionWrapper';

const AboutSmartLandSection = () => {
  return (
    <SectionWrapper 
      id="about-smartland" 
      title="О центре">
      <div className="space-y-8">
        {/* Краткое представление */}
        <div className="bg-[#fffaf0] rounded-lg p-8 hover:bg-[#fff5d6] 
          transition-all duration-300 transform hover:scale-[1.01] border border-[#ffde59]/20">
          <h3 className="text-2xl font-semibold text-[#134071] mb-4 relative inline-block group">
            SmartLand сегодня
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffde59] transform origin-left
              transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </h3>
          
          <p className="text-gray-700 text-justify leading-relaxed mb-4">
            Smart Land – образовательный центр, который специализируется на репетиторстве по школьным предметам, а также их углубленном изучении, подготовке к олимпиадам и поступлению в РФШМ, НИШ, БИЛ, казахстанские и зарубежные вузы.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed mb-4">
            Smart Land был основан семьей преподавателей Бериком Ташеновым и Жанарой Ергалиевой, а также их двумя сыновьями Айбаром и Амиром, окончившими РФМШ, выпускниками МГУ и МИФИ.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSmartLandSection;