
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import AttractionCard from "@/components/AttractionCard";
import ActivityCard from "@/components/ActivityCard";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { features, topAttractions, categories, activities } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection 
        title="Découvrez Djibouti"
        subtitle="Une terre de contrastes où déserts volcaniques, lacs salés et récifs coralliens créent un tableau naturel époustouflant."
        image="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
      />
      
      {/* Features Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Vivez l'Expérience <span className="text-shimmer">Djibouti</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Entre mer et désert, Djibouti offre une mosaïque d'expériences uniques, de paysages saisissants et de rencontres culturelles authentiques.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.id} delay={index * 150}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={index}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Explorez par <span className="text-shimmer">Catégorie</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des plages immaculées aux paysages lunaires, en passant par un patrimoine culturel riche et des aventures inoubliables.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 100}>
                <Link
                  to={`/explorer?category=${category.id}`}
                  className="block group h-full rounded-2xl p-6 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="rounded-full p-3 bg-secondary">
                      {/* We'll use text representations instead of icons for simplicity */}
                      <span className="font-semibold">{category.name[0]}</span>
                    </div>
                    <ArrowUpRight className="text-primary/30 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-ocean-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Top Attractions */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Destinations <span className="text-shimmer">Populaires</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  Des merveilles naturelles qui défient l'imagination aux trésors culturels qui racontent l'histoire du pays.
                </p>
              </div>
              <Link 
                to="/explorer"
                className="mt-6 md:mt-0 flex items-center text-ocean-600 hover:text-ocean-800 transition-colors font-medium group"
              >
                <span>Voir toutes les destinations</span>
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topAttractions.slice(0, 6).map((attraction, index) => (
              <AnimatedSection key={attraction.id} delay={index * 100}>
                <AttractionCard attraction={attraction} index={index} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Activities Section */}
      <section className="py-20 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Activités <span className="text-shimmer">Incontournables</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des expériences uniques à vivre lors de votre séjour à Djibouti, pour des souvenirs inoubliables.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <AnimatedSection key={activity.id} delay={index * 100}>
                <ActivityCard activity={activity} index={index} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-ocean-900 to-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Prêt à Découvrir Djibouti?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10">
                Commencez votre voyage à travers les paysages spectaculaires et la culture fascinante de Djibouti dès aujourd'hui.
              </p>
              <Link
                to="/explorer"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
              >
                Explorer Maintenant
                <ArrowRight className="ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
