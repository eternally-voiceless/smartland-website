import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import { BasePathImage } from '../BasePathImage';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      image: "/assets/images/reviews/review1.jpg",
      alt: "Отзыв 1"
    },
    {
      id: 2,
      image: "/assets/images/reviews/review2.jpg",
      alt: "Отзыв 2"
    },
    {
      id: 3,
      image: "/assets/images/reviews/review3.jpg",
      alt: "Отзыв 3"
    },
    {
      id: 4,
      image: "/assets/images/reviews/review4.jpg",
      alt: "Отзыв 4"
    }
  ];

  const AUTOPLAY_DELAY = 5000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning && !isZoomed) {
      setIsTransitioning(true);
      setCurrentIndex(current => (current + 1) % reviews.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [reviews.length, isTransitioning, isZoomed]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning && !isZoomed) {
      setIsTransitioning(true);
      setCurrentIndex(current => 
        current === 0 ? reviews.length - 1 : current - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [reviews.length, isTransitioning, isZoomed]);

  useEffect(() => {
    if (!isZoomed) {
      const interval = setInterval(nextSlide, AUTOPLAY_DELAY);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [nextSlide, isZoomed]);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <SectionWrapper id="reviews" title="Отзывы">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Карусель отзывов */}
        <div className="relative max-w-3xl mx-auto">
          {/* Кнопка предыдущего слайда */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
              bg-white/80 rounded-full p-6 shadow-lg hover:bg-white
              transition-all duration-300 hover:scale-110
              -translate-x-1/2 hover:-translate-x-1/3"
            disabled={isTransitioning}
          >
            <ChevronLeft size={36} className="text-[#134071]" />
          </button>

          {/* Контейнер для отзывов */}
          <div className="relative overflow-hidden rounded-xl bg-[#fffaf0]">
            <div 
              className={`relative p-4 group min-h-[400px] flex items-center justify-center
                ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={toggleZoom}
            >
              {/* Текущий отзыв */}
              <BasePathImage 
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].alt}
                className={`max-w-full max-h-[70vh] transition-all duration-500
                  ${isTransitioning ? 'opacity-0' : 'opacity-100'}
                  ${isZoomed ? 'scale-150' : 'scale-100'}`}
              />

              {/* Иконка зума */}
              {!isZoomed && (
                <div className="absolute bottom-8 right-8 bg-white/80 rounded-full p-2
                  transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <ZoomIn size={20} className="text-[#134071]" />
                </div>
              )}
            </div>
          </div>

          {/* Кнопка следующего слайда */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
              bg-white/80 rounded-full p-6 shadow-lg hover:bg-white
              transition-all duration-300 hover:scale-110
              translate-x-1/2 hover:translate-x-1/3"
            disabled={isTransitioning}
          >
            <ChevronRight size={36} className="text-[#134071]" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ReviewsSection;