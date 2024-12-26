import SectionWrapper from '../SectionWrapper';

const PricesSection = () => {
  const prices = [
    {
      type: "Индивидуальное занятие",
      price: "от 5 000 тг",
    },
    {
      type: "Занятие в группе до 4 человек",
      price: "от 2 500 тг",
    },
    {
      type: "Занятие в группе до 8 человек",
      price: "1 700 тг",
    }
  ];

  return (
    <SectionWrapper id="prices" title="Наши цены">
      <div className="space-y-6">
        {prices.map((item, index) => (
          <div 
            key={index}
            className="bg-[#fffaf0] rounded-lg p-8 hover:bg-[#fff5d6] 
              transition-all duration-300 transform hover:scale-[1.01] 
              border border-[#ffde59]/20 flex justify-between items-center"
          >
            <div className="flex items-center space-x-4">
              <span className="w-2 h-2 bg-[#ffde59] rounded-full flex-shrink-0 
                group-hover:scale-125 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-[#134071]">
                {item.type}
              </h3>
            </div>
            <div className="text-xl font-bold text-[#134071]">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PricesSection;