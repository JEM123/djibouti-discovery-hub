
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          <span className={cn(
            'font-display text-2xl md:text-3xl font-bold transition-colors duration-300',
            isScrolled ? 'text-primary' : 'text-white'
          )}>
            Djibouti
          </span>
          <span className={cn(
            'font-display text-2xl md:text-3xl font-light transition-colors duration-300',
            isScrolled ? 'text-ocean-500' : 'text-sand-200'
          )}>
            Explorer
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Accueil', 'Explorer', 'À Propos', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={index === 0 ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                'font-medium hover:opacity-80 transition-opacity',
                isScrolled ? 'text-primary' : 'text-white'
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            'md:hidden transition-colors duration-300 z-20',
            isScrolled ? 'text-primary' : 'text-white'
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-black/95 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden z-10',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {['Accueil', 'Explorer', 'À Propos', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={index === 0 ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white text-2xl font-medium hover:text-sand-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
