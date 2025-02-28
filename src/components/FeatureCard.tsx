
import React from 'react';
import { cn } from '@/lib/utils';
import { Compass, MapPin, Mountain } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const FeatureCard = ({ title, description, icon, index }: FeatureCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'compass':
        return <Compass className="h-8 w-8 text-ocean-500" />;
      case 'map-pin':
        return <MapPin className="h-8 w-8 text-coral-500" />;
      case 'mountain':
        return <Mountain className="h-8 w-8 text-sand-600" />;
      default:
        return <Compass className="h-8 w-8 text-ocean-500" />;
    }
  };

  return (
    <div 
      className={cn(
        "group p-8 rounded-2xl backdrop-blur-panel transition-all duration-500",
        "hover:shadow-xl hover:-translate-y-1"
      )}
      style={{ 
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-4 inline-block p-3 rounded-full bg-white/80 shadow-md transition-transform duration-500 group-hover:scale-110">
        {getIcon()}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 text-primary group-hover:text-ocean-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
