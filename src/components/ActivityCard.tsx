
import { useState } from 'react';
import { Activity } from '@/lib/data';
import { Calendar, Clock, Info, MapPin, Users, Compass, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

const ActivityCard = ({ activity, index }: ActivityCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden bg-white shadow-md h-full",
        "transition-all duration-300 hover:shadow-xl animate-fade-in",
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={activity.image} 
          alt={activity.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {activity.coordinates && (
          <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs py-1 px-2 rounded-full flex items-center">
            <Compass className="h-3 w-3 mr-1" />
            <span>{activity.coordinates}</span>
          </div>
        )}
        {activity.accessibility && (
          <div className="absolute bottom-3 right-3 bg-white/80 text-primary text-xs py-1 px-2 rounded-full flex items-center">
            <Shield className="h-3 w-3 mr-1" />
            <span>Accès: {activity.accessibility}</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-3 text-primary">
          {activity.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {activity.description}
        </p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-start">
            <MapPin className="h-4 w-4 text-ocean-600 mt-1 mr-2 flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Sites principaux</p>
              <p className="text-sm">{activity.sites.join(', ')}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Calendar className="h-4 w-4 text-ocean-600 mt-1 mr-2 flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Meilleure saison</p>
              <p className="text-sm">{activity.season}</p>
            </div>
          </div>
          
          {isExpanded && (
            <>
              <div className="flex items-start">
                <Users className="h-4 w-4 text-ocean-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Prestataires</p>
                  <p className="text-sm">{activity.providers.join(', ')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-4 w-4 text-ocean-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Prix approximatif</p>
                  <p className="text-sm">{activity.pricing}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Info className="h-4 w-4 text-ocean-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Conseil pratique</p>
                  <p className="text-sm">{activity.practicalTips}</p>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-ocean-600 text-sm font-medium hover:text-ocean-800 transition-colors"
          >
            {isExpanded ? 'Voir moins' : 'Voir plus'}
          </button>
          
          {activity.id && (
            <Link to={`/attraction/${activity.id}`}>
              <Button variant="outline" size="sm" className="text-xs">
                Détails complets
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
