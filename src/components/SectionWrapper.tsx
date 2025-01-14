// components/SectionWrapper.tsx
import { useEffect, useRef, useState } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  title: string;
}

const SectionWrapper = ({ children, id, title }: SectionWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-4xl font-bold text-[#134071] mb-8 transition-colors duration-300
        hover:text-[#1a5494] relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ffde59] transform origin-left
          transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
      </h2>
      
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow 
        duration-300">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;