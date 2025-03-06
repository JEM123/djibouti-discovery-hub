import { Attraction } from './types';

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
    features: ['Paysages volcaniques', 'Baignade', 'Photographie', 'Géologie'],
    coordinates: {
      lat: 11.6546,
      lng: 42.4189
    },
    accessibility: 'moyen',
    bestPeriod: 'Octobre à avril (températures plus modérées)',
    practicalTips: [
      'Apporter beaucoup d\'eau',
      'Chapeau et protection solaire indispensables',
      'Éviter les heures les plus chaudes'
    ]
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
    features: ['Plongée', 'Observation des requins-baleines', 'Snorkeling', 'Plages'],
    coordinates: {
      lat: 11.7833,
      lng: 42.8833
    },
    accessibility: 'facile',
    bestPeriod: 'Octobre à avril pour la plongée, octobre à février pour les requins-baleines',
    practicalTips: [
      'Réserver les excursions en mer à l\'avance en haute saison',
      'Protection solaire indispensable',
      'Apporter son équipement de snorkeling ou le louer sur place'
    ]
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
    features: ['Randonnée', 'Observation d\'oiseaux', 'Biodiversité', 'Points de vue'],
    coordinates: {
      lat: 11.7667,
      lng: 42.6333
    },
    accessibility: 'moyen',
    bestPeriod: 'Novembre à mars',
    practicalTips: [
      'Guide local recommandé pour les sentiers et l\'interprétation écologique',
      'Prévoir des vêtements chauds car les températures sont fraîches en altitude',
      'Apporter suffisamment d\'eau et des collations'
    ]
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
    features: ['Baignade', 'Snorkeling', 'Détente', 'Pique-nique'],
    coordinates: {
      lat: 11.8058,
      lng: 42.9639
    },
    accessibility: 'facile',
    bestPeriod: 'Octobre à avril',
    practicalTips: [
      'Apporter tout le nécessaire car il y a peu d\'infrastructures sur place',
      'Protection solaire et eau en quantité suffisante',
      'Idéal pour une journée complète de détente'
    ]
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
    features: ['Paysages lunaires', 'Photographie', 'Géologie', 'Observation des oiseaux'],
    coordinates: {
      lat: 11.1758,
      lng: 41.7725
    },
    accessibility: 'difficile',
    bestPeriod: 'Novembre à février',
    practicalTips: [
      'Prévoir au minimum une nuit sur place (campement touristique disponible)',
      'Nécessite un 4x4 et un guide',
      'L\'aube et le coucher du soleil offrent les plus belles lumières pour la photographie'
    ]
  },
  {
    id: '6',
    name: 'Ville de Djibouti',
    description: "La capitale colorée où se mêlent influences africaines, arabes et européennes, avec son architecture coloniale et ses marchés animés.",
    longDescription: "La ville de Djibouti, capitale du pays éponyme, est un fascinant carrefour culturel où se rencontrent les influences africaines, arabes, indiennes et européennes. Fondée à la fin du 19ème siècle par les Français, cette métropole portuaire conserve un riche patrimoine architectural colonial visible dans le quartier européen avec ses bâtiments aux façades pastel et ses places ombragées. Le contraste est saisissant avec l'animation des quartiers africains comme Balbala ou le marché central, où les couleurs vives des étals d'épices, de fruits et d'artisanat local créent une atmosphère vibrante. La Place Mahmoud Harbi, cœur battant de la ville, offre un spectacle permanent avec ses cafés où les habitants sirotent le traditionnel thé à la cardamome. La Place du 27 Juin, ornée de sa fontaine caractéristique, constitue un autre lieu emblématique de la capitale. Le port, l'un des plus importants de la région, témoigne de l'importance stratégique de Djibouti à la croisée des routes commerciales entre l'Afrique, le Moyen-Orient et l'Asie. La gastronomie locale, à déguster dans les nombreux restaurants de la ville, reflète ce métissage culturel avec des plats comme le fah-fah (soupe d'agneau), le skoudehkharis (riz à la viande) ou les délicieuses pâtisseries d'inspiration yéménite. À la tombée de la nuit, la fraîcheur de la brise marine apporte un soulagement bienvenu à la chaleur diurne, invitant les habitants et visiteurs à profiter de la corniche animée qui longe le golfe de Tadjoura.",
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
    location: 'Côte Est',
    category: 'urban',
    rating: 4.5,
    features: ['Architecture coloniale', 'Marchés', 'Gastronomie', 'Shopping'],
    coordinates: {
      lat: 11.5883,
      lng: 43.1450
    },
    accessibility: 'facile',
    practicalTips: [
      'Visiter le Marché Central tôt le matin quand il est le plus animé',
      'Explorer la Place Mahmoud Harbi en fin d\'après-midi pour observer la vie locale',
      'Goûter la cuisine djiboutienne dans les restaurants locaux'
    ]
  },
  {
    id: '7',
    name: 'Îles Moucha et Maskali',
    description: "Petit archipel corallien offrant des plages paradisiaques et des récifs préservés, idéal pour la plongée et le snorkeling.",
    longDescription: "Situées à seulement 10 km au large de Djibouti-ville, les îles Moucha et Maskali forment un petit archipel corallien qui constitue un véritable paradis tropical au cœur de la mer Rouge. Ces îles aux plages de sable blanc immaculé et aux eaux cristallines offrent un contraste saisissant avec l'aridité du continent tout proche. Les récifs coralliens qui entourent les îles sont exceptionnellement préservés et abritent une biodiversité marine remarquable : poissons multicolores, coraux flamboyants, étoiles de mer, et occasionnellement tortues marines, raies et petits requins de récif. L'île Moucha, la plus grande de l'archipel, accueille le seul hébergement local, le Lagon Bleu, où les visiteurs peuvent séjourner dans des bungalows simples en bord de mer. Le rythme de vie sur ces îles est délicieusement lent, parfait pour se déconnecter et profiter de la nature. Les activités principales incluent la plongée sous-marine, le snorkeling, la baignade, et tout simplement la détente sur les plages idylliques. Au coucher du soleil, le spectacle des teintes orangées se reflétant sur la mer et dessinant la silhouette de Djibouti-ville et des montagnes en arrière-plan offre des moments inoubliables aux visiteurs chanceux.",
    image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4',
    location: 'Golfe de Tadjoura',
    category: 'beach',
    rating: 4.8,
    features: ['Plongée', 'Snorkeling', 'Plages', 'Détente'],
    coordinates: {
      lat: 11.7144,
      lng: 43.1462
    },
    accessibility: 'moyen',
    bestPeriod: 'Octobre à avril',
    practicalTips: [
      'Possibilité de séjourner au Lagon Bleu (seul hébergement sur l\'île Moucha)',
      'Réserver les excursions à l\'avance, surtout pendant la haute saison',
      'Apporter protection solaire, eau et nécessaire de snorkeling'
    ]
  },
  {
    id: '8',
    name: 'Vallée du Grand Bara',
    description: "Vaste plaine désertique de 40 km de long, anciennement un lac aujourd'hui asséché, offrant des paysages spectaculaires.",
    longDescription: "La vallée du Grand Bara est une immense étendue désertique qui s'étire sur près de 40 kilomètres de long au cœur de Djibouti. Cette plaine parfaitement plate, vestige d'un ancien lac désormais asséché, forme un paysage surréaliste dont l'horizontalité n'est rompue que par quelques rares formations rocheuses distantes et les silhouettes des montagnes qui l'encerclent. Durant la saison sèche, la surface craquelée de l'argile durcie crée des motifs géométriques fascinants, tandis qu'après les rares pluies, une fine pellicule d'eau peut recouvrir temporairement la plaine, créant des effets de miroir spectaculaires. Les mirages sont fréquents dans cette zone où la chaleur intense fait vibrer l'air au-dessus de l'horizon. La vallée est également le territoire traditionnel des nomades afars qui y font parfois paître leurs troupeaux. Chaque année en décembre, le Grand Bara accueille un marathon international qui attire des coureurs du monde entier, désireux de se mesurer à ce parcours unique et difficile. Au lever et au coucher du soleil, les teintes orangées et pourpres qui embrasent ce paysage minimaliste offrent des opportunités photographiques exceptionnelles, captant l'essence même du désert djiboutien.",
    image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151',
    location: 'Centre du pays',
    category: 'geology',
    rating: 4.5,
    features: ['Paysages désertiques', 'Mirages', 'Photographie', 'Activités nomades'],
    coordinates: {
      lat: 11.0500,
      lng: 42.7333
    },
    accessibility: 'moyen',
    bestPeriod: 'Octobre à mars',
    practicalTips: [
      'Lieu de la course du Grand Bara (marathon) en décembre',
      'Prévoir beaucoup d\'eau et une protection contre le soleil',
      'Idéal à visiter tôt le matin ou en fin d\'après-midi pour éviter la chaleur intense'
    ]
  },
  {
    id: '9',
    name: 'Tadjourah',
    description: "Plus ancienne ville du pays, surnommée la \"ville blanche\" pour ses maisons traditionnelles blanchies à la chaux.",
    longDescription: "Tadjourah, surnommée la « ville blanche » en raison de ses maisons traditionnelles immaculées, est la plus ancienne cité de Djibouti et un joyau architectural niché entre mer et montagnes. Fondée au XIIe siècle, cette ville portuaire historique a longtemps été un important centre commercial et culturel de la région. Son architecture arabo-musulmane distinctive est caractérisée par les façades blanches des habitations, les portes en bois sculpté et les fenêtres ornées de moucharabiehs. La mosquée Cheik Hamadou, la plus ancienne du pays, témoigne de l'héritage islamique profondément ancré dans cette cité. Le palais du Sultan, bien que modeste, rappelle l'importance historique de Tadjourah comme capitale du sultanat du même nom. La ville s'étire le long d'une baie idyllique aux eaux turquoise, bordée de plages de sable fin, créant un contraste saisissant avec l'arrière-pays montagneux. L'ambiance de Tadjourah est nettement plus paisible que celle de la capitale, avec un rythme de vie traditionnel qui semble parfois suspendu dans le temps. Les habitants, principalement d'origine afar, perpétuent des traditions ancestrales visibles dans l'artisanat local, notamment le tissage et la vannerie. La ville sert également de point de départ idéal pour explorer les attractions environnantes comme la plage des Sables Blancs, les monts Goda ou encore la forêt du Day.",
    image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
    location: 'Nord du Golfe de Tadjoura',
    category: 'culture',
    rating: 4.6,
    features: ['Architecture arabe traditionnelle', 'Histoire', 'Plages', 'Culture locale'],
    coordinates: {
      lat: 11.7833,
      lng: 42.8833
    },
    accessibility: 'facile',
    bestPeriod: 'Octobre à mars',
    practicalTips: [
      'Ne pas manquer la mosquée Cheik Hamadou, la plus ancienne du pays',
      'Point de départ idéal pour explorer le nord et les montagnes',
      'Respecter les coutumes locales et s\'habiller modestement'
    ]
  },
  {
    id: '10',
    name: 'Faille d\'Assal-Ghoubbet',
    description: "Zone géologique active où la croûte terrestre se sépare visiblement, avec des coulées de lave récentes et une activité géothermique.",
    longDescription: "La faille d'Assal-Ghoubbet est l'une des merveilles géologiques les plus impressionnantes de Djibouti, offrant un rare aperçu des forces titanesques qui façonnent notre planète. Cette zone, située entre le lac Assal et le golfe du Ghoubbet, se trouve exactement à l'endroit où trois plaques tectoniques (africaine, arabique et somalienne) s'écartent lentement les unes des autres, créant progressivement un nouvel océan. Ce phénomène, visible à l'œil nu, se manifeste par une série de fissures béantes, d'escarpements et de formations volcaniques spectaculaires. Les coulées de lave solidifiée, dont certaines très récentes (les dernières éruptions datant des années 1970), créent un paysage lunaire noir et déchiqueté. Par endroits, l'activité géothermique est perceptible avec des fumerolles et de petites sources chaudes. Cette région est considérée par les géologues comme un laboratoire naturel unique, permettant d'observer en temps réel les processus de création de la croûte terrestre habituellement cachés sous les océans. Le contraste entre le bleu profond du golfe du Ghoubbet d'un côté et les teintes turquoise du lac Assal de l'autre, séparés par ce corridor de roche volcanique noire, crée un tableau naturel d'une beauté saisissante. Pour les amateurs de géologie ou simplement les curieux, la faille d'Assal-Ghoubbet offre une expérience éducative fascinante sur les forces qui ont façonné et continuent de façonner notre planète.",
    image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4',
    location: 'Entre le Lac Assal et le Golfe du Ghoubbet',
    category: 'geology',
    rating: 4.7,
    features: ['Paysages volcaniques', 'Géologie active', 'Formations tectoniques', 'Photographie'],
    coordinates: {
      lat: 11.5833,
      lng: 42.4833
    },
    accessibility: 'moyen',
    bestPeriod: 'Octobre à mars',
    practicalTips: [
      'Guide recommandé pour comprendre pleinement la signification géologique du site',
      '4x4 recommandé pour explorer la zone',
      'Emporter suffisamment d\'eau et protection contre le soleil'
    ]
  },
  {
    id: '11',
    name: 'Mosquée Al-Hamoudi',
    description: "Principale mosquée de la capitale, exemple remarquable d'architecture islamique moderne avec ses minarets imposants.",
    longDescription: "La mosquée Al-Hamoudi est l'un des édifices religieux les plus imposants et emblématiques de Djibouti-ville. Située dans le centre de la capitale, cette grande mosquée moderne se distingue par ses hauts minarets blancs qui dominent la ligne d'horizon de la ville et sa coupole majestueuse visible de loin. L'architecture de la mosquée mêle les traditions islamiques classiques aux influences contemporaines, créant un ensemble harmonieux de lignes épurées et d'ornements traditionnels. La façade immaculée, d'un blanc éclatant, contraste magnifiquement avec le bleu du ciel et reflète intensément la lumière du soleil tropical. L'intérieur, accessible uniquement aux musulmans, est réputé pour ses décorations soignées, ses colonnes élancées et ses inscriptions calligraphiques. Particulièrement impressionnante pendant les heures de prière, notamment le vendredi, la mosquée devient alors le centre de l'activité religieuse de la ville, attirant de nombreux fidèles. La nuit, l'édifice est souvent illuminé, offrant un spectacle majestueux aux passants. Pour les non-musulmans, bien que l'accès à l'intérieur soit restreint, l'observation de l'extérieur et les photographies depuis le parvis sont autorisées, dans le respect des fidèles et des pratiques religieuses. La mosquée Al-Hamoudi représente un témoignage important de la culture islamique profondément ancrée à Djibouti, où la majorité de la population pratique cette religion.",
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
    location: 'Djibouti-ville',
    category: 'culture',
    rating: 4.4,
    features: ['Architecture islamique', 'Spiritualité', 'Photographie'],
    coordinates: {
      lat: 11.5939,
      lng: 43.1489
    },
    accessibility: 'facile',
    practicalTips: [
      'Intérieur accessible uniquement aux musulmans',
      'Tenue respectueuse requise à proximité',
      'Meilleure photographie possible tôt le matin ou en fin d\'après-midi pour la lumière'
    ]
  },
  {
    id: '12',
    name: 'Gravures Rupestres d\'Abourma',
    description: "Site préhistorique exceptionnel avec plus de 900 gravures rupestres datant de 3000 à 1000 av. J.-C., témoignant de la vie préhistorique.",
    longDescription: "Perchées dans les escarpements rocheux du massif d'Abourma, dans une région reculée du nord de Djibouti, les gravures rupestres d'Abourma constituent l'un des trésors archéologiques les plus significatifs mais aussi les moins connus d'Afrique de l'Est. Ce site exceptionnel abrite plus de 900 gravures préhistoriques datant de 3000 à 1000 av. J.-C., s'étendant sur plusieurs kilomètres de parois rocheuses. Ces œuvres d'art primitives dépeignent principalement des scènes de la vie quotidienne préhistorique, avec une abondance remarquable de représentations d'animaux, notamment des girafes, antilopes, autruches, et de façon étonnante, des espèces aujourd'hui absentes de la région comme les lions et les éléphants. Ces illustrations témoignent d'un climat et d'un écosystème radicalement différents de l'aridité actuelle. Certaines gravures montrent également des humains, souvent en train de chasser ou de conduire du bétail, offrant un aperçu fascinant des activités et peut-être des rituels de ces populations anciennes. La qualité artistique et le détail de certaines gravures sont remarquables, révélant une maîtrise technique surprenante pour cette époque reculée. L'accès à ce site nécessite une expédition bien organisée, généralement sur plusieurs jours, avec des véhicules tout-terrain et des guides expérimentés. L'effort est cependant récompensé par la découverte d'un patrimoine humain exceptionnel dans un cadre naturel grandiose et préservé, loin des sentiers touristiques conventionnels.",
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
    location: 'Nord de Djibouti',
    category: 'culture',
    rating: 4.8,
    features: ['Art préhistorique', 'Archéologie', 'Aventure', 'Culture ancienne'],
    coordinates: {
      lat: 12.0000,
      lng: 42.4800
    },
    accessibility: 'difficile',
    bestPeriod: 'Novembre à février',
    practicalTips: [
      'Expédition à organiser à l\'avance, souvent sur plusieurs jours',
      'Guide indispensable et véhicule 4x4 obligatoire',
      'Prévoir équipement de camping et provisions suffisantes'
    ]
  }
];
