
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0,
  threshold = 0.2
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [delay, threshold]);

  return (
    <div 
      ref={sectionRef} 
      className={cn(
        'opacity-0 translate-y-8',
        isVisible && 'opacity-100 translate-y-0 transition-all duration-1000 ease-out',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
