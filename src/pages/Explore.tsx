
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AttractionCard from "@/components/AttractionCard";
import AnimatedSection from "@/components/AnimatedSection";
import { topAttractions, categories } from "@/lib/data";
import { Search, Filter, MapPin, SlidersHorizontal, X } from "lucide-react";

const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [accessibilityFilter, setAccessibilityFilter] = useState<string | null>(null);
  const [minRating, setMinRating] = useState<number>(0);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      searchParams.set('category', category);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  const filteredAttractions = topAttractions.filter(attraction => {
    // Category filter
    const matchesCategory = selectedCategory ? attraction.category === selectedCategory : true;
    
    // Search query
    const matchesSearch = searchQuery 
      ? attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        attraction.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    // Accessibility filter
    const matchesAccessibility = accessibilityFilter 
      ? attraction.accessibility === accessibilityFilter
      : true;
    
    // Rating filter
    const matchesRating = attraction.rating >= minRating;
    
    return matchesCategory && matchesSearch && matchesAccessibility && matchesRating;
  });

  const resetFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
    setAccessibilityFilter(null);
    setMinRating(0);
    setSearchParams({});
  };

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
            
            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 rounded-xl border border-input hover:border-primary/50 transition-all"
            >
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              <span>Filtres avancés</span>
            </button>
            
            {/* Filter Buttons */}
            <div className="flex items-center space-x-2 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
              <button
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                  selectedCategory === null
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-primary border-input hover:border-primary/50'
                }`}
                onClick={() => handleCategoryChange(null)}
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
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="mt-6 p-6 bg-secondary/30 rounded-xl border border-input">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filtres avancés</h3>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Accessibility Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">Accessibilité</label>
                  <div className="space-y-2">
                    {['facile', 'moyen', 'difficile'].map((level) => (
                      <label key={level} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="accessibility"
                          checked={accessibilityFilter === level}
                          onChange={() => setAccessibilityFilter(level)}
                          className="form-radio h-4 w-4 text-ocean-600"
                        />
                        <span className="capitalize">{level}</span>
                      </label>
                    ))}
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="accessibility"
                        checked={accessibilityFilter === null}
                        onChange={() => setAccessibilityFilter(null)}
                        className="form-radio h-4 w-4 text-ocean-600"
                      />
                      <span>Tous</span>
                    </label>
                  </div>
                </div>
                
                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">Note minimale</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.1"
                      value={minRating}
                      onChange={(e) => setMinRating(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="font-medium">{minRating.toFixed(1)}</span>
                  </div>
                </div>
                
                {/* Reset Filters */}
                <div className="flex items-end">
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                  >
                    Réinitialiser tous les filtres
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Attractions Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredAttractions.length > 0 ? (
            <>
              <div className="mb-8 flex justify-between items-center">
                <p className="text-muted-foreground">
                  {filteredAttractions.length} destination{filteredAttractions.length > 1 ? 's' : ''} trouvée{filteredAttractions.length > 1 ? 's' : ''}
                </p>
                
                <div className="flex items-center space-x-2">
                  <label htmlFor="sort" className="text-sm text-muted-foreground">Trier par:</label>
                  <select 
                    id="sort"
                    className="text-sm border border-input rounded-md px-2 py-1"
                    defaultValue="rating-desc"
                  >
                    <option value="rating-desc">Note (décroissante)</option>
                    <option value="rating-asc">Note (croissante)</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAttractions.map((attraction, index) => (
                  <AnimatedSection key={attraction.id} delay={index * 100}>
                    <AttractionCard attraction={attraction} index={index} />
                  </AnimatedSection>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl font-display text-muted-foreground mb-4">
                Aucune destination ne correspond à votre recherche
              </p>
              <p className="text-muted-foreground mb-6">
                Essayez d'ajuster vos filtres ou de modifier votre recherche
              </p>
              <button
                className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                onClick={resetFilters}
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
