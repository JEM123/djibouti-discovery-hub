
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { topAttractions } from "@/lib/data";
import { ArrowLeft, MapPin, Star, Clock, CalendarDays } from "lucide-react";
import AnimatedSection from '@/components/AnimatedSection';
import AttractionCard from '@/components/AttractionCard';

const AttractionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [attraction, setAttraction] = useState(
    topAttractions.find(a => a.id === id) || null
  );
  const [relatedAttractions, setRelatedAttractions] = useState(
    topAttractions.filter(a => a.id !== id).slice(0, 3)
  );
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update attraction when id changes
  useEffect(() => {
    setAttraction(topAttractions.find(a => a.id === id) || null);
    setRelatedAttractions(topAttractions.filter(a => a.id !== id).slice(0, 3));
    
    // Scroll to top when attraction changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Destination non trouvée</h1>
          <Link to="/explorer" className="text-ocean-600 hover:underline">
            Retour à l'exploration
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner with Parallax */}
      <div className="h-[70vh] relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-[120%]" 
          style={{ transform: `translateY(-${scrollY * 0.3}px)` }}
        >
          <img 
            src={attraction.image} 
            alt={attraction.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-7xl w-full mx-auto">
            <Link 
              to="/explorer" 
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Retour à l'exploration</span>
            </Link>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-1 text-sand-300">
                <Star className="h-5 w-5 fill-sand-300 text-sand-300" />
                <span className="text-sm font-medium">{attraction.rating}</span>
              </div>
              <div className="mx-2 text-white/40">•</div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{attraction.location}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {attraction.name}
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl">
              {attraction.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-display font-bold mb-6">À propos</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {attraction.longDescription}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="mt-16">
                <h2 className="text-3xl font-display font-bold mb-8">Points forts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {attraction.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start p-6 rounded-2xl bg-white shadow-sm border border-border"
                    >
                      <div className="rounded-full p-2 bg-ocean-100 text-ocean-600 mr-4">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-1">
                          {feature}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Expérience incontournable à ne pas manquer lors de votre visite.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <AnimatedSection>
              <div className="sticky top-32">
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
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-ocean-600 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium mb-1">Meilleure période</h4>
                          <p className="text-muted-foreground text-sm">
                            Novembre à Mars (saison fraîche)
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CalendarDays className="h-5 w-5 text-ocean-600 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium mb-1">Durée recommandée</h4>
                          <p className="text-muted-foreground text-sm">
                            1 journée complète
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-primary/5 border-t border-border">
                    <button className="w-full py-3 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-medium transition-colors">
                      Ajouter à mon itinéraire
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      {/* Related Attractions */}
      <section className="py-16 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-10">
              Vous pourriez aussi aimer
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedAttractions.map((attraction, index) => (
              <AnimatedSection key={attraction.id} delay={index * 100}>
                <AttractionCard attraction={attraction} index={index} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AttractionDetail;
