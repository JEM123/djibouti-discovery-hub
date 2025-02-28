
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Attraction } from '@/lib/data';
import { Star, MapPin } from 'lucide-react';

interface AttractionCardProps {
  attraction: Attraction;
  index: number;
}

const AttractionCard = ({ attraction, index }: AttractionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    imageRef.current.style.transform = `scale(1.05) translate(${(0.5 - x) * 10}px, ${(0.5 - y) * 10}px)`;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = 'scale(1) translate(0, 0)';
  };

  return (
    <Link
      to={`/attraction/${attraction.id}`}
      className="block w-full h-full"
    >
      <div 
        className={cn(
          "group relative h-full rounded-2xl overflow-hidden bg-white shadow-md",
          "transition-all duration-500 hover:shadow-xl",
          "hover:-translate-y-1"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseLeave();
        }}
        onMouseMove={handleMouseMove}
        style={{ 
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Image */}
        <div className="h-64 overflow-hidden">
          <img 
            ref={imageRef}
            src={attraction.image} 
            alt={attraction.name} 
            className="w-full h-full object-cover transition-transform duration-700"
          />
          <div className={cn(
            "absolute inset-0 bg-gradient-to-b from-transparent to-black/70",
            "transition-opacity duration-300",
            "opacity-60 group-hover:opacity-40"
          )} />
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center mb-2">
            <div className="flex items-center space-x-1 text-sand-300">
              <Star className="h-4 w-4 fill-sand-300 text-sand-300" />
              <span className="text-sm font-medium">{attraction.rating}</span>
            </div>
            <div className="mx-2 text-white/40">•</div>
            <div className="flex items-center text-white/80">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{attraction.location}</span>
            </div>
          </div>
          <h3 className={cn(
            "font-display text-2xl font-semibold mb-2",
            "transition-transform duration-300",
            isHovered ? "translate-y-0" : "translate-y-0"
          )}>
            {attraction.name}
          </h3>
          <p className={cn(
            "text-sm text-white/80 line-clamp-2",
            "transition-all duration-300",
            isHovered ? "max-h-24 opacity-100" : "max-h-24 opacity-100"
          )}>
            {attraction.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AttractionCard;
