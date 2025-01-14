import Navigation from './Navigation';
import { BasePathImage } from './BasePathImage';

interface HeaderProps {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}

const Header = ({ isNavOpen, setIsNavOpen }: HeaderProps) => {
  return (
    <>
      <header className="fixed top-0 w-full bg-[#134071] h-[15vh] flex justify-center items-center px-8 border-b-2 border-[#ffde59]/30 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <BasePathImage src="/assets/icons/modified_logo.png" alt="Logo" className="h-20" />
          </div>
          
          {/* Центральный блок с названием и подзаголовком */}
          <div className="flex flex-col items-center">
            <h1 className="text-[#ffde59] text-4xl font-semibold">SmartLand</h1>
          </div>
          
          <button 
            className="flex flex-col justify-between w-8 h-6 bg-transparent border-none cursor-pointer hamburger"
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(!isNavOpen);
            }}
          >
            <span className={`w-full h-0.5 bg-[#ffde59] transition-transform duration-300 ${isNavOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`w-full h-0.5 bg-[#ffde59] transition-opacity duration-300 ${isNavOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-[#ffde59] transition-transform duration-300 ${isNavOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </header>

      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
    </>
  );
};

export default Header;