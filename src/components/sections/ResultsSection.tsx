import SectionWrapper from '../SectionWrapper';

const ResultsSection = () => {
  const universities = [
    [
      "University of Oxford",
      "University of Cambridge",
      "University College London",
      "University of Massachusetts Amherst",
      "Luiss Guido Carli University (Рим, Италия)"
      
    ],
    [
      "МГУ",
      "МИФИ",
      "University of Klagenfurt (2-й университет в Австрии)",
      "Luiss Guido Carli University (Рим, Италия)",
      "University of Warwick",
      "",
      null
    ]
  ];

  return (
    <SectionWrapper id="results" title="Наши результаты">
      
      <div className="bg-[#fffaf0] rounded-lg p-8 mb-12 hover:bg-[#fff5d6] 
          transition-all duration-300 transform hover:scale-[1.01] border border-[#ffde59]/20">
          {/* Школы */}
          <h3 className="text-2xl font-semibold text-[#134071] mb-4 relative inline-block group">
            Наши ученики поступают в НИШ, БИЛ и РФМШ
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffde59] transform origin-left
              transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          </h3>
          
          <p className="text-gray-700 text-justify leading-relaxed mb-4">
            За 8 лет работы нашей команды 67 учеников поступили в РФМШ, 42 – в НИШ, 24 – в БИЛ.
          </p>
      </div>


      <div className="bg-[#fffaf0] rounded-lg p-8 hover:bg-[#fff5d6] 
        transition-all duration-300 transform hover:scale-[1.01] border border-[#ffde59]/20">
        
        {/* Университеты */}
        <h3 className="text-2xl font-semibold text-[#134071] mb-6 relative inline-block group">
          Ученики центра поступили в самые известные вузы мира
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffde59] transform origin-left
            transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
        </h3>

        {/* Таблица университетов */}
        <div className="overflow-hidden mb-8">
          <div className="p-3"> {/* Добавляем отступ для компенсации scale-эффекта */}
            <div className="grid grid-cols-5 gap-4">
            {universities.map((row, rowIndex) => (
              row.map((university, colIndex) => (
                university && (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md 
                      transition-all duration-300 hover:scale-105 group border border-[#ffde59]/10"
                  >
                    <div className="relative overflow-hidden">
                      <div className="relative z-10 text-gray-700 text-sm">
                        {university}
                      </div>
                      <div className="absolute inset-0 bg-[#ffde59]/5 
                        transform -translate-x-full group-hover:translate-x-0 
                        transition-transform duration-300" />
                    </div>
                  </div>
                )
              ))
            ))}
            </div>
          </div>
        </div>

        {/* Блок с успехами на экзаменах */}
        <div className="space-y-6">
          

          
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResultsSection;