
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AttractionCard from "@/components/AttractionCard";
import AnimatedSection from "@/components/AnimatedSection";
import { topAttractions, categories } from "@/lib/data";
import { Search, Filter, MapPin } from "lucide-react";

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAttractions = topAttractions.filter(attraction => {
    const matchesCategory = selectedCategory ? attraction.category === selectedCategory : true;
    const matchesSearch = searchQuery 
      ? attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        attraction.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="pt-24 pb-10 px-6 md:px-12 bg-gradient-to-r from-primary to-ocean-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Explorer Djibouti
              </h1>
              <p className="text-white/80 max-w-2xl mb-0">
                Parcourez notre sélection de sites exceptionnels et trouvez votre prochaine aventure.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>République de Djibouti, Afrique de l'Est</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="py-8 px-6 md:px-12 bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Rechercher une destination..."
                className="pl-10 pr-4 py-3 w-full rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex items-center space-x-2 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
              <button
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                  selectedCategory === null
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-primary border-input hover:border-primary/50'
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                <Filter className="h-4 w-4" />
                <span>Tous</span>
              </button>
              
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-primary border-input hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Attractions Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredAttractions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAttractions.map((attraction, index) => (
                <AnimatedSection key={attraction.id} delay={index * 100}>
                  <AttractionCard attraction={attraction} index={index} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl font-display text-muted-foreground">
                Aucune destination ne correspond à votre recherche
              </p>
              <button
                className="mt-4 px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery("");
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Explore;
