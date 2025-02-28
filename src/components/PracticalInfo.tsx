
import { Attraction } from '@/lib/data';
import { Calendar, Clock, Compass, MapPin, AlertTriangle } from 'lucide-react';

interface PracticalInfoProps {
  attraction: Attraction;
}

const PracticalInfo = ({ attraction }: PracticalInfoProps) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-md border border-border">
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-6">
          Informations pratiques
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-ocean-600 mt-0.5 mr-3" />
            <div>
              <h4 className="font-medium mb-1">Localisation</h4>
              <p className="text-muted-foreground text-sm">
                {attraction.location}, République de Djibouti
              </p>
              {attraction.coordinates && (
                <p className="text-muted-foreground text-xs mt-1">
                  GPS: {attraction.coordinates.lat}° N, {attraction.coordinates.lng}° E
                </p>
              )}
            </div>
          </div>
          
          {attraction.accessibility && (
            <div className="flex items-start">
              <Compass className="h-5 w-5 text-ocean-600 mt-0.5 mr-3" />
              <div>
                <h4 className="font-medium mb-1">Accessibilité</h4>
                <div className="flex items-center">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                    attraction.accessibility === 'facile' 
                      ? 'bg-green-500' 
                      : attraction.accessibility === 'moyen'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                  }`}></span>
                  <p className="text-muted-foreground text-sm capitalize">
                    {attraction.accessibility}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {attraction.bestPeriod && (
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-ocean-600 mt-0.5 mr-3" />
              <div>
                <h4 className="font-medium mb-1">Meilleure période</h4>
                <p className="text-muted-foreground text-sm">
                  {attraction.bestPeriod}
                </p>
              </div>
            </div>
          )}
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-ocean-600 mt-0.5 mr-3" />
            <div>
              <h4 className="font-medium mb-1">Durée recommandée</h4>
              <p className="text-muted-foreground text-sm">
                1 journée complète
              </p>
            </div>
          </div>
          
          {attraction.practicalTips && attraction.practicalTips.length > 0 && (
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-ocean-600 mt-0.5 mr-3" />
              <div>
                <h4 className="font-medium mb-1">Conseils pratiques</h4>
                <ul className="text-muted-foreground text-sm space-y-1 list-disc pl-4">
                  {attraction.practicalTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 bg-primary/5 border-t border-border">
        <button className="w-full py-3 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-medium transition-colors">
          Ajouter à mon itinéraire
        </button>
      </div>
    </div>
  );
};

export default PracticalInfo;
