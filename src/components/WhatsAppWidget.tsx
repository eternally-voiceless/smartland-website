import { useState, useEffect } from 'react';

interface WhatsAppWidgetProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ isOpen, setIsOpen }) => {
  const [isRendered, setIsRendered] = useState<boolean>(false);

  useEffect(() => {
    // Показываем кнопку
    const buttonTimer = setTimeout(() => {
      setIsRendered(true);
    }, 500);

    // Автоматически открываем окно через 1.2 секунды после появления кнопки
    const popupTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1700); // 500ms + 1200ms

    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(popupTimer);
    };
  }, [setIsOpen]);

  const handleSendMessage = () => {
    const message = encodeURIComponent('Здравствуйте! Хочу записаться на пробное занятие');
    window.open(`https://wa.me/+77054281992?text=${message}`, '_blank');
  };

  return (
    <div className={`fixed left-8 bottom-8 z-50 transition-opacity duration-500 ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
      <button 
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center 
          shadow-lg hover:scale-110 transition-all duration-500 ease-in-out
          animate-pulse-slow hover:shadow-2xl"
        style={{
          transform: `scale(${isRendered ? '1' : '0'})`,
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="white" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </button>

      <div 
        className={`absolute left-0 bottom-20 w-96 bg-white rounded-lg shadow-xl
          transition-all duration-500 ease-in-out origin-bottom-left
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className="bg-[#075E54] p-4 rounded-t-lg flex justify-between items-center">
          <span className="text-white font-semibold">Запишитесь на пробное занятие</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white text-xl leading-none hover:opacity-75 transition-opacity duration-200"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-6">
            Запишитесь на бесплатное пробное занятие прямо сейчас!
          </p>

          <button
            onClick={handleSendMessage}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white 
              py-3 px-6 rounded-full font-semibold hover:bg-[#20BD5C] 
              transition-all duration-300 transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            Написать в WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppWidget;