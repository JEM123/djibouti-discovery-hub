
import { Activity, Feature } from './types';

export const activities: Activity[] = [
  {
    id: 'activity-1',
    name: 'Plongée sous-marine',
    description: 'Djibouti offre des sites de plongée exceptionnels avec une visibilité souvent excellente et une biodiversité marine extraordinaire.',
    sites: ['Îles Moucha et Maskali', 'Récif des Trois Frères', 'Shark Island', 'Ghoubet'],
    season: 'Octobre à avril (meilleure visibilité)',
    providers: ['Dolphin Club', 'Djibouti Diving', 'Siyyan Travel'],
    pricing: '50-100€ pour une plongée avec équipement',
    practicalTips: 'Réservation à l\'avance recommandée. Certification PADI/SSI nécessaire pour les plongées profondes.',
    image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4',
    coordinates: '11.7144° N, 43.1462° E',
    accessibility: 'moyen'
  },
  {
    id: 'activity-2',
    name: 'Observation des requins-baleines',
    description: 'Excursion en bateau pour nager avec le plus grand poisson du monde, une expérience inoubliable dans les eaux du Golfe de Tadjoura.',
    sites: ['Golfe de Tadjoura', 'Ghoubet'],
    season: 'Octobre à février (pic en novembre et décembre)',
    providers: ['Dolphin Club', 'Diving Djibouti', 'Planète Mer'],
    pricing: '80-150€ par personne pour une excursion journée',
    practicalTips: 'Réservation à l\'avance fortement recommandée pendant la haute saison. Aucune expérience de plongée nécessaire, le snorkeling suffit.',
    image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4',
    coordinates: '11.7833° N, 42.8833° E',
    accessibility: 'facile'
  },
  {
    id: 'activity-3',
    name: 'Randonnée',
    description: 'Diverses options de randonnée dans des paysages spectaculaires et variés, des montagnes verdoyantes aux formations volcaniques.',
    sites: ['Forêt du Day', 'Monts Goda', 'Monts Mabla', 'Ardoukoba'],
    season: 'Octobre à mars (éviter les fortes chaleurs)',
    providers: ['Discover Djibouti', 'Terres Extrêmes', 'Guides locaux'],
    pricing: '40-80€ par personne pour une journée avec guide',
    practicalTips: 'Guide local recommandé pour la plupart des randonnées. Prévoir eau, protection solaire et chaussures adaptées.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    coordinates: '11.7667° N, 42.6333° E',
    accessibility: 'moyen'
  },
  {
    id: 'activity-4',
    name: 'Snorkeling',
    description: 'Exploration des récifs coralliens en surface, accessible à tous et offrant une découverte facile des fonds marins colorés.',
    sites: ['Îles Moucha et Maskali', 'Plages de Tadjoura', 'Sables Blancs'],
    season: 'Toute l\'année (meilleure visibilité d\'octobre à avril)',
    providers: ['La plupart des hôtels côtiers', 'Clubs de plongée'],
    pricing: '20-40€ pour la location d\'équipement et transport en bateau',
    practicalTips: 'Crème solaire résistante à l\'eau et protection contre le soleil indispensables. Même les débutants peuvent profiter pleinement de cette activité.',
    image: 'https://images.unsplash.com/photo-1517627043994-b991abb62fc8',
    coordinates: '11.7144° N, 43.1462° E',
    accessibility: 'facile'
  }
];

export const features: Feature[] = [
  {
    id: 'feature-1',
    title: 'Expériences Authentiques',
    description: 'Découvrez la culture locale avec des guides natifs qui vous feront vivre des expériences véritablement authentiques.',
    icon: 'compass'
  },
  {
    id: 'feature-2',
    title: 'Lieux Exceptionnels',
    description: 'Explorez des sites naturels uniques, du lac le plus salé d\'Afrique aux plages préservées du golfe de Tadjoura.',
    icon: 'map-pin'
  },
  {
    id: 'feature-3',
    title: 'Aventures Mémorables',
    description: 'Plongez avec les requins-baleines, randonnez sur des terrains volcaniques ou campez sous les étoiles du désert.',
    icon: 'mountain'
  }
];
