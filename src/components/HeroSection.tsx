
import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
}

const HeroSection = ({ title, subtitle, image }: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    }

    if (textRef.current) {
      textRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      textRef.current.style.opacity = `${1 - scrollY * 0.002}`;
    }
  }, [scrollY]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full" 
      >
        <img 
          src={image} 
          alt="Djibouti landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
      </div>

      {/* Hero Content */}
      <div 
        ref={textRef}
        className="relative h-full flex flex-col items-center justify-center text-center z-10 px-6"
      >
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
        </div>
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10">
            {subtitle}
          </p>
        </div>
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '600ms' }}>
          <button
            onClick={scrollToContent}
            className={cn(
              "mt-8 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm",
              "border border-white/20 transition-all duration-300",
              "hover:scale-110 animate-subtle-pulse"
            )}
            aria-label="Scroll down"
          >
            <ArrowDown className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
