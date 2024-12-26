import React, { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full py-24 bg-gradient-to-b from-[#134071] to-[#fff9f0] pt-[22vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className={`transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Иконка */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#ffde59] p-4 rounded-full shadow-lg
              animate-bounce">
              <GraduationCap size={48} className="text-[#134071]" />
            </div>
          </div>

          {/* Текст */}
          <h2 className="text-center">
            <span className="block text-3xl font-light italic text-[#8B0000] mb-4 drop-shadow-sm">
              «Ум — не сосуд, который нужно наполнить,
            </span>
            <span className="block text-3xl font-light italic text-[#8B0000] mb-4 drop-shadow-sm">
              а огонь, который нужно зажечь»
            </span>
            <span className="block text-xl text-[#134071]/90 mt-4 font-normal">
              Плутарх, «О слушании»
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;