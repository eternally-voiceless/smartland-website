import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import { BasePathImage } from '../BasePathImage';

interface Teacher {
  id: number;
  name: string;
  qualifications: string;
  // Было subjects, теперь вы можете хранить точки (points) здесь:
  subjects?: string[];
  description: string;
  image: string;
  languages: string[];
  // Добавьте новое поле для пунктов о преподавателе, если нужно
  points?: string[];
}

const TeachersSection = () => {
  // Массив преподавателей
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Ташенов Берик Балтыханович",
      qualifications: "Учитель математики и физики",
      subjects: [
        "математику и физику (школьный курс)",
        "подготовка к Ент и зарубежным экзаменам",
        "подготовка в РФМШ, НИШ, БИЛ",
        "олимпиадную математику и логику"
      ],
      description: "",
      image: "/assets/images/teachers/teacher_1.jpg",
      languages: ["Русский"],
      points: [
        "Учитель математики и физики",
        "Окончил МГТУ им.Баумана (г.Москва)",
        "Стаж работы – 30 лет",
        "Преподает школьную и университетскую программу", 
        "Готовит к олимпиадам и поступлению в РФМШ, НИШ, БИЛ, вузы РК и за рубежом"
      ]
    },
    {
      id: 2,
      name: "Тахиров Санжар",
      qualifications: "Преподаватель физики и математики",
      subjects: [
        "Математика",
        "Физика"
      ],
      description: "",
      image: "/assets/images/teachers/teacher_2.jpg",
      languages: ["Русский", "Aнглийский"],
      points: [
        "Менеджер по общему развитию",
        "Индивидуальный подход к каждому ученику",
        "Преподаватель физики и математики",
        "Санжар завершает обучение в Назарбаев Университете"
      ]
    },
    {
      id: 3,
      name: "Рамазанова Жанат Мусаевна",
      qualifications: "Квалификация, типа \"Учитель высшей категории\"",
      subjects: [
        "Математика"
      ],
      description: "",
      image: "/assets/images/teachers/teacher_3.jpg",
      languages: ["Русский", "Казахский"],
      points: [
        "Учитель математики (на казахском и русском языках)",
        "Опыт работы – 40 лет",
        "Победитель конкурса «Лучший педагог года»"
      ]
    },
    {
      id: 4,
      name: "Абдусатарова Азиза",
      qualifications: "Преподаватель английского языка",
      subjects: [
        "Английский язык",
      ],
      description: "",
      image: "/assets/images/teachers/teacher_4.jpg",
      languages: ["Английский"],
      points: [
        "Преподаватель английского языка",
        "Умеет замотивировать учеников",
        "Окончила Таразский Государственный Педагогический Институт"
      ]
    },
    {
      id: 5,
      name: "Тилеубек Акмарал Досболовна",
      qualifications: "Учитель казахского языка",
      subjects: [
        "Казахский язык"
      ],
      description: "",
      image: "/assets/images/teachers/teacher_5.jpg",
      languages: ["Казахский"],
      points: [
        "Окончила Евразийский национальный университет Л.Н.Гумилева",
        "Стаж работы – 5 лет"
      ]
    },
    {
      id: 10,
      name: "Васильченко Василий Анатольевич",
      qualifications: "Учитель математики и физики",
      subjects: [
        "Математика",
        "Физика"
      ],
      description: "",
      image: "/assets/images/teachers/teacher_10.jpg",
      languages: ["Язык"],
      points: [
        "Окончил МГУ и МПГУ",
        "Стаж работы – 10 лет",
        "Подготовка к НИШ/РФМШ/БИЛ",
        "Подготовка к ЕНТ по Физике и Математике, Математическая грамотность",
        "Разбор олимпиадных задач по математике"
      ]
    }
  ];

  // Кол-во карточек, видимых одновременно
  const VISIBLE_CARDS = 3;

  // Трёхкратное клонирование массива
  const extendedTeachers = [...teachers, ...teachers, ...teachers];

  // Начальный индекс (начало «второго» блока)
  const START_INDEX = teachers.length;

  // Конец «второго» блока
  const END_INDEX = teachers.length * 2 - 1;

  // Текущее положение в extendedTeachers
  const [currentIndex, setCurrentIndex] = useState(START_INDEX);

  // Флаг, отключающий анимацию (transition) при «прыжке» в середину
  const [noTransition, setNoTransition] = useState(false);

  // Флаг, что идёт анимация, чтобы блокировать повторные клики
  const [isAnimating, setIsAnimating] = useState(false);

  // Автопрокрутка + hover
  const [isHovered, setIsHovered] = useState(false);
  const AUTOPLAY_DELAY = 4000;

  // Индекс перевёрнутой карточки
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);

  // При завершении transition проверяем, не надо ли «прыгнуть» обратно
  const handleTransitionEnd = () => {
    // Сбрасываем флаг анимации
    setIsAnimating(false);

    // Если ушли вправо за END_INDEX:
    if (currentIndex > END_INDEX) {
      // Отключаем transition
      setNoTransition(true);
      // Прыгаем на currentIndex - teachers.length
      setCurrentIndex((prev) => prev - teachers.length);

      // Включаем обратно transition через 2 rAF
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoTransition(false));
      });
    }
    // Если ушли влево за START_INDEX:
    else if (currentIndex < START_INDEX) {
      setNoTransition(true);
      setCurrentIndex((prev) => prev + teachers.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoTransition(false));
      });
    }
  };

  // Следующий слайд
  const nextSlide = useCallback(() => {
    // Блокируем повторный клик, пока не завершилась анимация
    if (isAnimating || noTransition) return;
    setIsAnimating(true);

    setFlippedCardIndex(null);
    setCurrentIndex((prev) => prev + 1);
  }, [isAnimating, noTransition]);

  // Предыдущий слайд
  const prevSlide = useCallback(() => {
    if (isAnimating || noTransition) return;
    setIsAnimating(true);

    setFlippedCardIndex(null);
    setCurrentIndex((prev) => prev - 1);
  }, [isAnimating, noTransition]);

  // Автопрокрутка
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (!isHovered && !isAnimating) {
      interval = setInterval(nextSlide, AUTOPLAY_DELAY);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, isAnimating, nextSlide]);

  // Обработчик клика по карточке (переворот)
  const handleCardClick = (idx: number) => {
    setFlippedCardIndex((current) => (current === idx ? null : idx));
  };

  return (
    <SectionWrapper id="teachers" title="О преподавателях">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Описание команды */}
        <div
          className="bg-[#fffaf0] rounded-lg p-8 mb-12 hover:bg-[#fff5d6] 
          transition-all duration-300 transform hover:scale-[1.01] border border-[#ffde59]/20"
        >
          <p className="text-gray-700 leading-relaxed text-justify">
            <span className="text-[#134071] font-semibold">Наша команда</span> – это выпускники
            ведущих вузов (Назарбаев Университет, МФТИ, МГУ, МГИМО, МГТУ им.Баумана). Однако при
            подборе преподавателей мы учитываем не только диплом, но и педагогические таланты,
            умение замотивировать ученика.
          </p>
        </div>

        {/* Карусель */}
        <div className="relative w-full">
          {/* Кнопка «предыдущий» */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
              bg-white/80 rounded-full p-6 shadow-lg hover:bg-white
              transition-all duration-300 hover:scale-110
              -translate-x-1/2 hover:-translate-x-1/3"
          >
            <ChevronLeft size={36} className="text-[#134071]" />
          </button>

          {/* Внешний контейнер с overflow-hidden */}
          <div
            className="overflow-hidden px-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Внутренний контейнер со слайдами */}
            <div
              ref={sliderRef}
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * (100 / VISIBLE_CARDS)}%)`,
                transition: noTransition
                  ? 'none'
                  : 'transform 0.5s ease-in-out',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTeachers.map((teacher, idx) => {
                const key = `teacher-${teacher.id}-${idx}`;
                return (
                  <div
                    key={key}
                    className="w-1/3 flex-shrink-0 px-4 perspective-1000 cursor-pointer"
                    onClick={() => handleCardClick(idx)}
                  >
                    <div
                      className={`relative min-h-[520px] [transform-style:preserve-3d] transition-all duration-500 
                        ${flippedCardIndex === idx ? '[transform:rotateY(180deg)]' : ''}`}
                    >
                      {/* Передняя сторона карточки */}
                      <div className="absolute inset-0 [backface-visibility:hidden]">
                        <div className="bg-[#fffaf0] hover:bg-[#fff5d6] rounded-2xl overflow-hidden h-full transition-colors duration-500 border border-[#ffde59]/10 hover:border-[#ffde59]/30">
                          <div className="aspect-[3/4] overflow-hidden">
                            <BasePathImage
                              src={teacher.image}
                              alt={`${teacher.name} - преподаватель`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#134071]">
                              {teacher.name}
                            </h3>
                            <p className="text-blue-600 text-sm mt-2">
                              {teacher.qualifications}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Задняя сторона карточки */}
                      <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="bg-[#fff5d6] rounded-2xl p-6 h-full transition-colors duration-500">
                          <h3 className="text-xl font-semibold text-[#134071] mb-6">
                            {teacher.name}
                          </h3>
                          <p className="text-gray-700 mt-4 text-sm">
                            {teacher.description}
                          </p>

                          {/* Блок с пунктами (points) о преподавателе */}
                          <div className="mb-6">
                            <p className="text-[#134071] font-medium mb-3">
                              Информация о преподавателе:
                            </p>
                            <ul className="space-y-2">
                              {teacher.points?.map((point, i) => (
                                <li key={i} className="flex items-center text-gray-700 text-sm">
                                  <span className="w-1.5 h-1.5 bg-[#ffde59] rounded-full mr-2 flex-shrink-0" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Языки преподавания */}
                          <div className="mb-6">
                            <p className="text-[#134071] font-medium mb-2">
                              Языки преподавания:
                            </p>
                            <p className="text-gray-700 text-sm">
                              {teacher.languages.join(', ')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Кнопка «следующий» */}
          <button
            onClick={() => nextSlide()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
              bg-white/80 rounded-full p-6 shadow-lg hover:bg-white
              transition-all duration-300 hover:scale-110
              translate-x-1/2 hover:translate-x-1/3"
          >
            <ChevronRight size={36} className="text-[#134071]" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TeachersSection;
