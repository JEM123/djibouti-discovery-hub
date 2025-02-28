
export interface Attraction {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  location: string;
  category: 'nature' | 'culture' | 'adventure' | 'beach';
  rating: number;
  features: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const topAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Lac Assal',
    description: "Le lac le plus salé au monde et le point le plus bas d'Afrique, entouré de formations salines blanches immaculées.",
    longDescription: "Le Lac Assal, situé à 155 mètres sous le niveau de la mer, est non seulement le point le plus bas d'Afrique mais aussi le lac le plus salé au monde après la mer Morte. Ce joyau naturel se caractérise par ses eaux turquoise entourées d'une couronne de sel cristallin blanc qui crée un contraste saisissant avec les roches volcaniques noires environnantes. La salinité du lac, environ 10 fois celle de l'océan, permet aux visiteurs de flotter sans effort sur ses eaux. Le site offre un paysage lunaire d'une beauté surréaliste, particulièrement spectaculaire au lever et au coucher du soleil lorsque la lumière se reflète sur les cristaux de sel. Une expérience incontournable pour tout voyageur à Djibouti, témoignant de la puissance des forces géologiques qui ont façonné cette région.",
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    location: 'Région de Tadjourah',
    category: 'nature',
    rating: 4.8,
    features: ['Paysages volcaniques', 'Baignade', 'Photographie', 'Géologie']
  },
  {
    id: '2',
    name: 'Golfe de Tadjoura',
    description: "Un paradis pour les plongeurs avec ses récifs coralliens intacts et sa population de requins-baleines de novembre à février.",
    longDescription: "Le Golfe de Tadjoura, véritable joyau de la mer Rouge, est réputé pour ses eaux cristallines qui abritent l'un des écosystèmes marins les plus riches et préservés au monde. Ce vaste golfe en forme de V s'étend sur plus de 50 km et constitue le plus grand golfe du Golfe d'Aden. Sa caractéristique la plus remarquable est la présence saisonnière (de novembre à février) des majestueux requins-baleines, qui viennent s'y nourrir et offrent aux plongeurs et snorkeleurs une rencontre inoubliable avec le plus grand poisson du monde. Les récifs coralliens intacts qui bordent ses côtes regorgent d'une biodiversité exceptionnelle : poissons tropicaux multicolores, tortues marines, raies mantas, dauphins et parfois même des dugongs. Les sites de plongée comme les « Sept Frères » (un archipel d'îlots volcaniques) sont classés parmi les meilleurs spots de la région. Au-delà de ses richesses sous-marines, le golfe est bordé de plages de sable blanc et de falaises volcaniques spectaculaires, créant des paysages contrastés d'une beauté saisissante.",
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be',
    location: 'Nord de Djibouti',
    category: 'beach',
    rating: 4.9,
    features: ['Plongée', 'Observation des requins-baleines', 'Snorkeling', 'Plages']
  },
  {
    id: '3',
    name: 'Forêt de Day',
    description: "Une forêt de genévriers unique située dans les montagnes Goda, abritant des espèces endémiques et offrant une fraîcheur bienvenue.",
    longDescription: "Nichée dans les majestueuses montagnes Goda à environ 1 500 mètres d'altitude, la Forêt de Day représente un écosystème unique et précieux dans cette région majoritairement désertique. Cette forêt de genévriers millénaires, vestige d'une époque plus humide, constitue l'un des derniers refuges de biodiversité de Djibouti. Elle abrite une faune et une flore remarquables, dont plusieurs espèces endémiques comme la célèbre francolin de Djibouti, un oiseau qu'on ne trouve nulle part ailleurs sur la planète. Les randonneurs qui s'aventurent sur ses sentiers ombragés découvriront un microclimat étonnamment frais et humide, en contraste saisissant avec les plaines arides en contrebas. Du haut de ces montagnes, les points de vue panoramiques offrent des perspectives à couper le souffle sur les paysages alentour. Malheureusement menacée par le changement climatique et le surpâturage, cette forêt relique fait l'objet de programmes de conservation pour préserver ce patrimoine naturel exceptionnel pour les générations futures.",
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    location: 'Montagnes Goda',
    category: 'nature',
    rating: 4.6,
    features: ['Randonnée', 'Observation d\'oiseaux', 'Biodiversité', 'Points de vue']
  },
  {
    id: '4',
    name: 'Plage des Sables Blancs',
    description: "Une plage idyllique aux eaux turquoise, parfaite pour la baignade, le snorkeling et la détente face au golfe de Tadjoura.",
    longDescription: "La Plage des Sables Blancs porte admirablement son nom avec son rivage immaculé qui s'étire sur plusieurs kilomètres le long du golfe de Tadjoura. Cette étendue paradisiaque se distingue par son sable fin d'une blancheur éclatante qui contraste magnifiquement avec les eaux cristallines aux teintes variant du turquoise au bleu profond. Protégée par une barrière de corail, la plage bénéficie d'eaux calmes et peu profondes, idéales pour la baignade et le snorkeling. Les fonds marins regorgent de vie colorée: poissons tropicaux, coraux flamboyants et parfois même tortues marines offrent un spectacle fascinant aux nageurs. Bordée de quelques palmiers qui procurent des zones d'ombre naturelle, cette plage constitue un havre de paix où le temps semble suspendu. À marée basse, de petites piscines naturelles se forment entre les rochers, créant des bassins d'eau tiède parfaits pour se prélasser. La plage offre également une vue imprenable sur les montagnes environnantes qui plongent dans la mer, complétant ce tableau idyllique qui fait le bonheur des photographes et des amoureux de la nature.",
    image: 'https://images.unsplash.com/photo-1517627043994-b991abb62fc8',
    location: 'Tadjoura',
    category: 'beach',
    rating: 4.7,
    features: ['Baignade', 'Snorkeling', 'Détente', 'Pique-nique']
  },
  {
    id: '5',
    name: 'Lac Abbé',
    description: "Un paysage lunaire surréaliste avec ses cheminées calcaires qui peuvent atteindre 50 mètres de hauteur, lieu de tournage de 'La Planète des singes'.",
    longDescription: "Le Lac Abbé, situé à la frontière entre Djibouti et l'Éthiopie, offre l'un des paysages les plus étranges et fascinants de la planète. Ce site géologique extraordinaire est célèbre pour ses centaines de cheminées calcaires qui s'élèvent vers le ciel comme d'immenses termitières, certaines atteignant jusqu'à 50 mètres de hauteur. Ces formations, créées par l'activité géothermique et l'évaporation du lac au fil des millénaires, émettent parfois des fumerolles de vapeur qui accentuent l'atmosphère mystérieuse et presque extraterrestre du lieu. Ce n'est d'ailleurs pas un hasard si ce décor apocalyptique a servi de toile de fond au film culte 'La Planète des Singes' en 1968. À l'aube, lorsque la lumière rasante du soleil illumine les cheminées calcaires, le spectacle devient véritablement magique, les ombres s'allongeant sur la plaine craquelée du lac asséché. Des sources d'eau chaude ponctuent ce paysage désertique, créant de petites oasis de vie où l'on peut apercevoir des flamants roses et autres oiseaux migrateurs. Les communautés nomades Afar qui habitent cette région isolée ajoutent une dimension culturelle fascinante à l'expérience, avec leur mode de vie ancestral parfaitement adapté à cet environnement extrême.",
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
    location: 'Frontière Djibouti-Éthiopie',
    category: 'nature',
    rating: 4.9,
    features: ['Paysages lunaires', 'Photographie', 'Géologie', 'Observation des oiseaux']
  },
  {
    id: '6',
    name: 'Ville de Djibouti',
    description: "La capitale colorée où se mêlent influences africaines, arabes et européennes, avec son architecture coloniale et ses marchés animés.",
    longDescription: "La ville de Djibouti, capitale du pays éponyme, est un fascinant carrefour culturel où se rencontrent les influences africaines, arabes, indiennes et européennes. Fondée à la fin du 19ème siècle par les Français, cette métropole portuaire conserve un riche patrimoine architectural colonial visible dans le quartier européen avec ses bâtiments aux façades pastel et ses places ombragées. Le contraste est saisissant avec l'animation des quartiers africains comme Balbala ou le marché central, où les couleurs vives des étals d'épices, de fruits et d'artisanat local créent une atmosphère vibrante. La Place Mahmoud Harbi, cœur battant de la ville, offre un spectacle permanent avec ses cafés où les habitants sirotent le traditionnel thé à la cardamome. La Place du 27 Juin, ornée de sa fontaine caractéristique, constitue un autre lieu emblématique de la capitale. Le port, l'un des plus importants de la région, témoigne de l'importance stratégique de Djibouti à la croisée des routes commerciales entre l'Afrique, le Moyen-Orient et l'Asie. La gastronomie locale, à déguster dans les nombreux restaurants de la ville, reflète ce métissage culturel avec des plats comme le fah-fah (soupe d'agneau), le skoudehkharis (riz à la viande) ou les délicieuses pâtisseries d'inspiration yéménite. À la tombée de la nuit, la fraîcheur de la brise marine apporte un soulagement bienvenu à la chaleur diurne, invitant les habitants et visiteurs à profiter de la corniche animée qui longe le golfe de Tadjoura.",
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
    location: 'Côte Est',
    category: 'culture',
    rating: 4.5,
    features: ['Architecture coloniale', 'Marchés', 'Gastronomie', 'Shopping']
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

export const categories = [
  {
    id: 'nature',
    name: 'Nature',
    icon: 'mountain',
    description: 'Paysages volcaniques, lacs salés et formations géologiques uniques'
  },
  {
    id: 'culture',
    name: 'Culture',
    icon: 'landmark',
    description: 'Traditions ancestrales, marchés colorés et patrimoine historique'
  },
  {
    id: 'adventure',
    name: 'Aventure',
    icon: 'compass',
    description: 'Randonnées, plongée sous-marine et excursions en 4x4'
  },
  {
    id: 'beach',
    name: 'Plages',
    icon: 'anchor',
    description: 'Plages de sable blanc et baies idylliques aux eaux cristallines'
  }
];
