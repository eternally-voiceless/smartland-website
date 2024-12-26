import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Увеличиваем отступ для лучшей видимости заголовка
      const headerOffset = 200; // 15vh (хедер) + отступ для заголовка
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollTo;
};

export default useScrollTo;