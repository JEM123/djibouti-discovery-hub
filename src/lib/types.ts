
export interface Attraction {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  location: string;
  category: 'nature' | 'culture' | 'adventure' | 'beach' | 'geology' | 'urban';
  rating: number;
  features: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  accessibility?: 'facile' | 'moyen' | 'difficile';
  bestPeriod?: string;
  practicalTips?: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  sites: string[];
  season: string;
  providers: string[];
  pricing: string;
  practicalTips: string;
  image: string;
  coordinates?: string;
  accessibility?: 'facile' | 'moyen' | 'difficile';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}
