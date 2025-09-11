// Olivia Clara AI Knowledge Base - Comprehensive Villa Website Content
// Enhanced with complete website content for intelligent responses

export interface KnowledgeEntry {
  readonly category: string;
  readonly keywords: ReadonlyArray<string>;
  readonly responses: ReadonlyArray<string>;
  readonly priority: number;
  readonly context?: string;
}

export const VILLA_KNOWLEDGE_BASE: ReadonlyArray<KnowledgeEntry> = [
  // Villa Basic Information
  {
    category: 'villa_info',
    keywords: ['villa', 'property', 'house', 'accommodation', 'olivia clara', 'luxury villa', 'private villa'],
    responses: [
      'Villa Olivia Clara is a luxury 250m² villa in Platis Gialos, Sifnos, Greece. Our elegant property accommodates up to 8 guests with 4 bedrooms, 4.5 bathrooms, and stunning sea views.',
      'Our beautiful villa offers the perfect blend of luxury and comfort, featuring a private pool, garden spaces, and breathtaking views of the Aegean Sea.',
      'Villa Olivia Clara has been welcoming guests for over 10 years, providing five-star service and authentic Greek hospitality in one of Sifnos\' most beautiful locations.',
      'This is not just accommodation - it\'s a complete Greek island lifestyle experience with personalized concierge services and authentic local connections.'
    ],
    priority: 10,
    context: 'villa_overview'
  },

  // Villa Features & Amenities
  {
    category: 'villa_features',
    keywords: ['features', 'amenities', 'pool', 'garden', 'terrace', 'outdoor', 'facilities', 'luxury', 'private'],
    responses: [
      'Our villa features a large private pool with cabana and bar area, beautiful garden with outdoor dining, full luxury kitchen, BBQ facilities, and stunning sea views from every corner.',
      'Enjoy luxury amenities including a private pool cabana, outdoor bar area, fully equipped kitchen, high-speed WiFi (200+ Mbps), beautiful gardens, and ample parking for 5 cars.',
      'The villa offers complete privacy with 250m² of living space, including outdoor entertainment areas, modern kitchen facilities, and breathtaking Aegean Sea views.',
      'We provide everything for a perfect stay: pool and outdoor entertainment areas, modern kitchen facilities, reliable WiFi for remote work, and ample parking space.'
    ],
    priority: 9,
    context: 'villa_amenities'
  },

  // Pool & Outdoor Areas
  {
    category: 'pool_outdoor',
    keywords: ['pool', 'swimming', 'outdoor', 'garden', 'terrace', 'bbq', 'bar', 'cabana', 'sunbathing'],
    responses: [
      'Our private pool area features a large swimming pool with cabana and outdoor bar, perfect for relaxing and entertaining. The pool area offers stunning sea views and comfortable lounge furniture.',
      'The outdoor spaces include a beautiful garden with outdoor dining area, BBQ facilities, and the pool cabana with bar - perfect for enjoying the Greek island lifestyle.',
      'You\'ll love our pool area with its cabana and bar setup, offering both shade and sun options, plus incredible views of the Aegean Sea.',
      'The villa\'s outdoor areas are designed for relaxation and entertainment, featuring the pool with cabana, garden spaces, and outdoor dining perfect for Greek island living.'
    ],
    priority: 9,
    context: 'outdoor_spaces'
  },

  // Bedrooms & Bathrooms
  {
    category: 'bedrooms_bathrooms',
    keywords: ['bedrooms', 'bathrooms', 'beds', 'sleeping', 'rooms', 'queen', 'single', 'baby cot'],
    responses: [
      'Villa Olivia Clara has 4 beautifully appointed bedrooms: 2 rooms with queen beds and 2 rooms with single beds (4 singles total), plus 1 baby cot available. We also have 4.5 bathrooms ensuring everyone has comfortable private space.',
      'Our villa comfortably accommodates up to 8 guests with 4 bedrooms and 4.5 bathrooms. The flexible sleeping arrangements include queen beds and single beds, plus a baby cot for families.',
      'The villa offers 4 bedrooms with a mix of queen and single beds, plus 4.5 bathrooms. This flexible arrangement works perfectly for families or groups of friends.',
      'We have 4 bedrooms (2 with queen beds, 2 with single beds) and 4.5 bathrooms, plus a baby cot available. This ensures comfortable accommodation for up to 8 guests plus infants.'
    ],
    priority: 8,
    context: 'accommodation'
  },

  // Location & Access
  {
    category: 'location',
    keywords: ['location', 'where', 'address', 'sifnos', 'platis gialos', 'beach', 'distance', 'walk', 'port', 'apollonia'],
    responses: [
      'We\'re located in beautiful Platis Gialos, Sifnos, just 7 minutes walk (or 2 minutes drive) to the stunning Platis Gialos beach. The villa is 15 minutes to Apollonia (island center) and 25 minutes to Kamares port.',
      'Villa Olivia Clara sits in prime location: 15 minutes to Apollonia (island center), 25 minutes to Kamares port, with easy access to all of Sifnos\' attractions and just a short walk to the beach.',
      'Our location offers the perfect balance - close enough to walk to the beach and restaurants, yet private and peaceful with incredible sea views. We\'re 7 minutes walk to Platis Gialos beach.',
      'The villa is perfectly positioned in Platis Gialos, just 7 minutes walk to the beach, 15 minutes to Apollonia, and 25 minutes to Kamares port - giving you easy access to everything Sifnos offers.'
    ],
    priority: 9,
    context: 'location_access'
  },

  // Booking & Contact
  {
    category: 'booking',
    keywords: ['book', 'booking', 'reservation', 'availability', 'price', 'cost', 'rates', 'contact', 'elena', 'email', 'phone'],
    responses: [
      'To book your stay, please contact Elena at elena@villaoliviaclara.com or call +30 697 191 9382. We\'ll check availability and provide personalized pricing for your dates.',
      'Booking is easy! Reach out through our website contact form or email Elena directly at elena@villaoliviaclara.com. We offer personalized service and can accommodate special requests for your perfect Sifnos getaway.',
      'For reservations and pricing inquiries, please contact Elena directly at elena@villaoliviaclara.com or +30 697 191 9382. We provide customized quotes based on your travel dates, group size, and any special requirements.',
      'Ready to book? Contact Elena at elena@villaoliviaclara.com or call +30 697 191 9382. We\'ll provide personalized pricing and help plan your perfect Sifnos vacation.',
      'I can help you check availability and provide booking information! Just let me know your preferred dates and I\'ll assist you with the reservation process.'
    ],
    priority: 10,
    context: 'booking_contact'
  },

  // Availability Checking
  {
    category: 'availability',
    keywords: ['available', 'availability', 'check dates', 'when available', 'free dates', 'open dates', 'vacant'],
    responses: [
      'I can help you check availability for Villa Olivia Clara! Please provide your preferred check-in and check-out dates, and I\'ll check our calendar for you.',
      'Let me check our availability for your dates. What are your preferred check-in and check-out dates? I\'ll also need to know how many guests will be staying.',
      'I\'d be happy to check availability for you! Please share your travel dates and the number of guests, and I\'ll look up our villa\'s availability.',
      'To check availability, I need your check-in and check-out dates, plus the number of guests. Once you provide that, I can give you real-time availability information.'
    ],
    priority: 9,
    context: 'availability_checking'
  },

  // Services & Concierge
  {
    category: 'services',
    keywords: ['services', 'housekeeping', 'cleaning', 'chef', 'concierge', 'childcare', 'transfers', 'airport', 'car rental'],
    responses: [
      'Included services: housekeeping twice per week and full concierge support. Optional services: private chef, childcare, airport transfers, car rental, and grocery pre-stocking.',
      'We provide regular housekeeping and are always available to help with recommendations, bookings, and special arrangements to make your stay perfect.',
      'Our concierge services include local recommendations, restaurant reservations, activity bookings, and assistance with anything you need during your stay in Sifnos.',
      'We offer comprehensive concierge services including housekeeping, local recommendations, restaurant reservations, airport transfers, car rental, and special arrangements for your perfect stay.'
    ],
    priority: 7,
    context: 'services_concierge'
  },

  // Sifnos Island Information
  {
    category: 'sifnos_info',
    keywords: ['sifnos', 'island', 'greece', 'cyclades', 'greek', 'culture', 'history', 'authentic', 'traditional'],
    responses: [
      'Sifnos is a beautiful Cycladic island known for its excellent cuisine, traditional architecture, and stunning beaches. It\'s less touristy than Mykonos or Santorini but equally beautiful.',
      'The island offers authentic Greek culture, world-class restaurants, hiking trails, beautiful villages like Kastro and Apollonia, and some of the best beaches in the Cyclades.',
      'Sifnos is famous for its culinary tradition, pottery, and peaceful atmosphere. It\'s the perfect destination for those seeking authentic Greek island experience away from mass tourism.',
      'Unlike its famous neighbors Mykonos and Santorini, Sifnos offers an authentic Greek island experience with traditional charm, world-class cuisine, and peaceful atmosphere.'
    ],
    priority: 6,
    context: 'island_info'
  },

  // Beaches
  {
    category: 'beaches',
    keywords: ['beaches', 'swimming', 'platis gialos', 'kamares', 'vathi', 'chrysopigi', 'faros', 'heronissos', 'vroulidia', 'fykiada'],
    responses: [
      'Sifnos offers incredible beaches: Platis Gialos (our beach), Kamares, Vathi, Chrysopigi, Faros, and Heronissos. Each has its own character and beauty, with Platis Gialos being Blue Flag awarded.',
      'The island\'s beaches are diverse - from the popular Platis Gialos with its Blue Flag status, to the tranquil Vathi, and the iconic Chrysopigi with its famous monastery.',
      'Sifnos beaches include Platis Gialos (Blue Flag), Kamares (main port), Vathi (peaceful), Chrysopigi (monastery), Faros, Heronissos, Vroulidia, and Fykiada - each offering unique experiences.',
      'Our villa is just 7 minutes walk to Platis Gialos beach, but Sifnos has many other beautiful beaches to explore, each with its own character and charm.'
    ],
    priority: 8,
    context: 'beaches_activities'
  },

  // Villages & Culture
  {
    category: 'villages_culture',
    keywords: ['villages', 'apollonia', 'kastro', 'artemonas', 'exampela', 'katavati', 'kato petali', 'pano petali', 'troullaki', 'agios loukas'],
    responses: [
      'Sifnos has charming villages: Apollonia (capital), Kastro (medieval), Artemonas (traditional), and many others. Each village has its own character and traditional architecture.',
      'The island\'s villages are a highlight - from the medieval Kastro with its narrow streets, to Apollonia the capital, and traditional villages like Artemonas and Exampla.',
      'Sifnos villages include Apollonia (island capital), Kastro (medieval fortress village), Artemonas (traditional), and many others, each offering unique cultural experiences.',
      'Explore Sifnos\' beautiful villages: Apollonia (15 minutes from villa), Kastro (medieval), Artemonas (traditional), and many others - each with its own charm and history.'
    ],
    priority: 6,
    context: 'culture_villages'
  },

  // Activities & Things to Do
  {
    category: 'activities',
    keywords: ['activities', 'things to do', 'hiking', 'sightseeing', 'pottery', 'restaurants', 'dining', 'boat tours', 'exploring'],
    responses: [
      'Activities include beach hopping, hiking ancient trails, visiting traditional villages, exploring monasteries, pottery workshops, and enjoying world-class Greek cuisine.',
      'Sifnos offers hiking trails, pottery workshops, monastery visits, beach activities, boat tours to neighboring islands, and incredible dining experiences.',
      'The island is perfect for relaxation and exploration: beautiful beaches for swimming, excellent restaurants for dining, hiking trails with stunning views, and rich cultural sites.',
      'From hiking ancient trails to pottery workshops, monastery visits to boat tours around the Cyclades, Sifnos offers diverse activities for every type of traveler.'
    ],
    priority: 6,
    context: 'activities_experiences'
  },

  // Boat Tours & Neighboring Islands
  {
    category: 'boat_tours',
    keywords: ['boat tour', 'boat trips', 'poliegos', 'kimolos', 'milos', 'cruise', 'islands', 'sailing', 'private cruise'],
    responses: [
      'Boat tours from Sifnos are magical! Visit Poliegos (Natura 2000 protected), Kimolos, and Milos. These private cruises offer a once-in-a-lifetime experience exploring small Greek islands.',
      'One of our favorite activities is taking a boat tour around Sifnos and neighboring islands. Each island has its own personality and special points of interest.',
      'Boat tours to Poliegos, Kimolos, and Milos are highly recommended. Poliegos is like discovering a lost civilization with stunning rock formations and hidden caves.',
      'Private boat tours around the Cyclades are unforgettable. Visit Poliegos (protected area), Kimolos, and Milos - each offering unique landscapes and experiences.'
    ],
    priority: 7,
    context: 'boat_tours_islands'
  },

  // Dining & Cuisine
  {
    category: 'dining',
    keywords: ['food', 'restaurants', 'dining', 'eat', 'cook', 'kitchen', 'grocery', 'cuisine', 'gastronomy', 'culinary'],
    responses: [
      'Sifnos is renowned for its cuisine! We can recommend excellent restaurants nearby, arrange private chef services, or you can cook in our fully equipped kitchen.',
      'The island offers incredible dining from beachside tavernas to fine dining. We\'re happy to make reservations and provide our insider recommendations.',
      'Our villa has a complete kitchen for self-catering, and we can arrange grocery delivery or pre-stocking. Sifnos also has amazing local restaurants we\'ll recommend.',
      'Sifnos is the gastronomic capital of the Cyclades! From traditional tavernas to fine dining, the island offers world-class Greek cuisine and culinary experiences.'
    ],
    priority: 5,
    context: 'dining_cuisine'
  },

  // Weather & Best Time to Visit
  {
    category: 'weather_season',
    keywords: ['weather', 'season', 'when to visit', 'climate', 'temperature', 'wind', 'summer', 'spring', 'autumn'],
    responses: [
      'Sifnos has a Mediterranean climate with warm, dry summers and mild winters. Best time to visit is May-October, with July-August being warmest.',
      'The island enjoys over 300 days of sunshine yearly. Summer temperatures range 25-30°C (77-86°F), perfect for swimming and outdoor activities.',
      'Shoulder seasons (May-June, September-October) offer perfect weather with fewer crowds, while summer provides the classic Greek island experience.',
      'Sifnos weather is ideal from May to October, with peak summer being warm and perfect for beach activities, while shoulder seasons offer comfortable temperatures and fewer crowds.'
    ],
    priority: 4,
    context: 'weather_seasons'
  },

  // Check-in/Check-out & Practical Info
  {
    category: 'practical_info',
    keywords: ['check in', 'check out', 'arrival', 'departure', 'luggage', 'transportation', 'practical', 'logistics'],
    responses: [
      'Standard check-in is after 3:00 PM and check-out before 11:00 AM. We can arrange early/late arrangements and airport transfers upon request.',
      'We provide detailed arrival instructions and can arrange transportation from Kamares port or airport transfers via Athens.',
      'For your convenience, we offer luggage storage, early check-in when possible, and can coordinate all transportation needs for your Sifnos visit.',
      'Check-in is after 3 PM, check-out before 11 AM. We can arrange early/late check-in, airport transfers, and provide detailed arrival instructions.'
    ],
    priority: 5,
    context: 'practical_info'
  },

  // Villa vs Hotel Comparison
  {
    category: 'villa_vs_hotel',
    keywords: ['villa vs hotel', 'hotel', 'comparison', 'private', 'space', 'kitchen', 'privacy', 'luxury', 'experience'],
    responses: [
      'Villa Olivia Clara offers complete privacy, 250m² of space, full kitchen access, free parking for 5 cars, and personalized concierge service - advantages you won\'t find in hotels.',
      'Unlike hotels, our villa provides complete privacy, spacious living areas, full kitchen facilities, outdoor spaces, and personalized service tailored to your needs.',
      'Staying in our villa means complete privacy, no shared spaces, full kitchen access, outdoor entertainment areas, and personalized concierge service - a completely different experience from hotels.',
      'Our villa offers advantages over hotels: complete privacy, spacious living (250m²), full kitchen, outdoor spaces, free parking, and personalized service - creating an authentic Greek island lifestyle experience.'
    ],
    priority: 6,
    context: 'villa_comparison'
  },

  // Reviews & Guest Experiences
  {
    category: 'reviews_experience',
    keywords: ['reviews', 'guests', 'experience', 'testimonials', 'feedback', 'rating', 'stars', 'recommendations'],
    responses: [
      'Our guests consistently rate Villa Olivia Clara highly for its location, amenities, and service. Many guests return year after year, which speaks to the quality of their experience.',
      'Guest reviews highlight our villa\'s stunning location, excellent amenities, and personalized service. We\'re proud of our high ratings and repeat guests.',
      'Our guests love the villa\'s location near the beach, the private pool area, and our concierge service. Many describe it as their best Greek island experience.',
      'Guest feedback consistently praises our villa\'s location, amenities, and service. We\'re honored that many guests choose to return to Villa Olivia Clara.'
    ],
    priority: 5,
    context: 'guest_experience'
  },

  // Sustainability & Eco-friendly
  {
    category: 'sustainability',
    keywords: ['sustainability', 'eco-friendly', 'green', 'environment', 'responsible', 'conservation', 'local'],
    responses: [
      'We\'re committed to sustainable tourism practices, supporting local businesses, and minimizing our environmental impact while providing luxury accommodations.',
      'Our sustainability efforts include supporting local artisans, using eco-friendly products, and promoting responsible tourism practices on Sifnos.',
      'We believe in sustainable luxury - providing exceptional experiences while supporting the local community and protecting Sifnos\' natural beauty.',
      'Our commitment to sustainability includes supporting local businesses, using eco-friendly practices, and helping preserve Sifnos\' natural environment for future generations.'
    ],
    priority: 4,
    context: 'sustainability'
  },

  // Detailed Villa Features & Amenities
  {
    category: 'detailed_amenities',
    keywords: ['pool features', 'pool size', 'pool depth', 'cabana', 'bar area', 'sunbeds', 'wine cooler', 'mini fridge', 'pool bathroom'],
    responses: [
      'Our pool features: 12m x 5m size with 3m depth, shaded pool-side cabana, sunbeds & sun loungers, bar and dining area, wine cooler & mini fridge, and dedicated pool bathroom.',
      'The pool area includes a large swimming pool (12m x 5m, 3m deep), comfortable cabana with bar, sunbeds for relaxation, wine cooler for drinks, and a convenient pool bathroom.',
      'Pool amenities: 12m x 5m pool (3m depth), shaded cabana with bar, sunbeds, outdoor dining, wine cooler, mini fridge, and dedicated pool bathroom for convenience.',
      'Our pool offers: large 12m x 5m swimming area (3m deep), shaded cabana with bar setup, comfortable sunbeds, wine cooler, mini fridge, and private pool bathroom.'
    ],
    priority: 9,
    context: 'pool_amenities'
  },

  // Garden & Terrace Details
  {
    category: 'garden_terrace',
    keywords: ['garden', 'terrace', 'stone terrace', 'outdoor dining', 'parking', 'mediterranean garden', 'herbs', 'plants', 'stone fence'],
    responses: [
      'Our garden features: large stone terrace, stone fence garden, outdoor lounge and dining areas, parking space for 5 cars, indigenous plants & herbs, and stunning sea views.',
      'The garden includes a beautiful stone terrace, outdoor dining areas, parking for 5 cars, Mediterranean plants and herbs, and breathtaking views of the Aegean Sea.',
      'Garden amenities: spacious stone terrace, outdoor lounge areas, parking for 5 cars, indigenous Mediterranean plants and herbs, and incredible sea views.',
      'Our garden offers: large stone terrace, outdoor dining spaces, 5-car parking, beautiful Mediterranean plants and herbs, and stunning panoramic sea views.'
    ],
    priority: 8,
    context: 'garden_features'
  },

  // Bedroom Details
  {
    category: 'bedroom_details',
    keywords: ['bedroom details', 'bed sizes', 'king beds', 'single beds', 'baby crib', 'air conditioning', 'linen changes', 'pillows', 'blankets'],
    responses: [
      'Bedroom features: 2 king beds (200 x 200cm), 4 single beds (100 x 200cm), 1 baby crib (70 x 130cm), air conditioning in all living areas, extra pillows and blankets, and linen changes weekly.',
      'Our bedrooms include: 2 king beds, 4 single beds, 1 baby crib, air conditioning throughout, extra pillows and blankets, and weekly linen changes for comfort.',
      'Bedroom amenities: 2 king beds (200x200cm), 4 single beds (100x200cm), 1 baby crib (70x130cm), air conditioning, extra bedding, and weekly linen service.',
      'Sleeping arrangements: 2 king beds, 4 single beds, 1 baby crib, air conditioning in all areas, extra pillows and blankets, and weekly linen changes.'
    ],
    priority: 8,
    context: 'bedroom_amenities'
  },

  // Bathroom Details
  {
    category: 'bathroom_details',
    keywords: ['bathroom details', 'full bathrooms', 'wc', 'hot water', 'bathroom essentials', 'hair dryer', 'pool bathroom', 'towel changes'],
    responses: [
      'Bathroom features: 3 full bathrooms, 1 WC, hot water, bathroom essentials, hair dryer, dedicated pool bathroom, and towel changes twice a week.',
      'Our bathrooms include: 3 full bathrooms plus 1 WC, hot water, essential amenities, hair dryer, dedicated pool bathroom, and twice-weekly towel changes.',
      'Bathroom amenities: 3 full bathrooms, 1 WC, hot water, bathroom essentials, hair dryer, pool bathroom, and towel changes twice per week.',
      'Bathroom facilities: 3 full bathrooms, 1 WC, hot water, essential amenities, hair dryer, dedicated pool bathroom, and twice-weekly towel service.'
    ],
    priority: 8,
    context: 'bathroom_amenities'
  },

  // Living Spaces Details
  {
    category: 'living_spaces',
    keywords: ['living spaces', 'dining areas', 'indoor dining', 'outdoor dining', 'pool dining', 'kitchen', 'working space', 'living room', 'tv'],
    responses: [
      'Living spaces include: indoor dining area, large outdoor dining area, pool-side dining area, fully-equipped kitchen, working space, and spacious living room with large TV.',
      'Our living areas feature: indoor and outdoor dining spaces, pool-side dining, fully-equipped kitchen, work space, and spacious living room with large TV.',
      'Living amenities: indoor dining, outdoor dining, pool dining, full kitchen, work space, and large living room with TV for entertainment.',
      'Living spaces offer: multiple dining areas (indoor, outdoor, pool-side), complete kitchen, work space, and spacious living room with large TV.'
    ],
    priority: 7,
    context: 'living_amenities'
  },

  // Villa Amenities Categories
  {
    category: 'villa_amenities_categories',
    keywords: ['bedroom laundry', 'washing machine', 'hangers', 'iron', 'drying rack', 'closet', 'changing table', 'safety', 'fire extinguisher', 'first aid'],
    responses: [
      'Bedroom & Laundry: washing machine, hangers, iron, drying rack for clothing, closet space, changing table. Safety: fire extinguisher, fireplace guards, first aid kit.',
      'Our amenities include: washing machine, hangers, iron, drying rack, closet space, changing table, fire extinguisher, fireplace guards, and first aid kit.',
      'Villa amenities: washing machine, hangers, iron, drying rack, closet space, changing table, fire extinguisher, fireplace guards, first aid kit for safety.',
      'Complete amenities: laundry facilities (washing machine, hangers, iron, drying rack), storage (closet space, changing table), and safety equipment (fire extinguisher, first aid kit).'
    ],
    priority: 7,
    context: 'villa_amenities'
  },

  // Kitchen Amenities
  {
    category: 'kitchen_amenities',
    keywords: ['kitchen amenities', 'dishes', 'silverware', 'wine glasses', 'champagne glasses', 'dishwasher', 'refrigerator', 'freezer', 'microwave', 'oven', 'stove', 'coffee machine', 'barbecue'],
    responses: [
      'Kitchen amenities: dishes and silverware, wine glasses and champagne glasses, dishwasher, refrigerator & freezer, microwave, oven, stove, premium automatic coffee machine (50+ drinks), outdoor barbecue.',
      'Our kitchen includes: complete dishware and silverware, wine and champagne glasses, dishwasher, refrigerator and freezer, microwave, oven, stove, premium coffee machine (50+ drinks), and outdoor BBQ.',
      'Kitchen features: full dishware and silverware, wine glasses, dishwasher, refrigerator/freezer, microwave, oven, stove, premium coffee machine (50+ drinks), and outdoor barbecue.',
      'Complete kitchen: dishes and silverware, wine and champagne glasses, dishwasher, refrigerator and freezer, microwave, oven, stove, premium coffee machine, and outdoor barbecue.'
    ],
    priority: 7,
    context: 'kitchen_amenities'
  },

  // Entertainment & Technology
  {
    category: 'entertainment_tech',
    keywords: ['entertainment', 'smart tv', 'hdtv', 'books', 'reading material', 'board games', 'toys', 'wifi', 'internet', 'high speed'],
    responses: [
      'Entertainment: Smart 65" HDTV, books and reading material, board games and toys. Technology: High-speed WiFi (200+ Mbps) throughout the villa.',
      'Our entertainment includes: Smart 65" HDTV, books and reading materials, board games and toys, plus high-speed WiFi (200+ Mbps) for work or streaming.',
      'Entertainment amenities: Smart 65" HDTV, books and reading materials, board games and toys, and high-speed WiFi (200+ Mbps) throughout the villa.',
      'Entertainment features: Smart 65" HDTV, books and reading materials, board games and toys, and reliable high-speed WiFi (200+ Mbps) for all your needs.'
    ],
    priority: 6,
    context: 'entertainment'
  },

  // Upon Request Services
  {
    category: 'upon_request_services',
    keywords: ['upon request', 'transfer', 'port transfer', 'private chef', 'private boat tour', 'island transfer', 'local musicians', 'babysitter', 'event hosting'],
    responses: [
      'Upon request services: transfer to/from port, private chef, private boat tour, private island transfer, local musicians, babysitter, event hosting, and more - just ask us!',
      'We offer upon request: port transfers, private chef services, private boat tours, island transfers, local musicians, babysitting, event hosting, and many other personalized services.',
      'Available upon request: transfers, private chef, boat tours, island transfers, musicians, babysitting, event hosting, and more personalized services - just let us know!',
      'Upon request we can arrange: transfers, private chef, boat tours, island transfers, musicians, babysitting, event hosting, and other customized services for your perfect stay.'
    ],
    priority: 6,
    context: 'request_services'
  },

  // Sifnos Island Detailed Information
  {
    category: 'sifnos_detailed',
    keywords: ['sifnos culture', 'sifnos history', 'cycladic architecture', 'traditional', 'authentic', 'culinary tradition', 'pottery', 'peaceful', 'less touristy'],
    responses: [
      'Sifnos is known for its authentic Cycladic culture, traditional architecture, excellent cuisine, pottery tradition, and peaceful atmosphere - less touristy than Mykonos or Santorini.',
      'The island offers authentic Greek culture with traditional Cycladic architecture, world-class cuisine, pottery workshops, and a peaceful atmosphere away from mass tourism.',
      'Sifnos features: authentic Cycladic culture, traditional architecture, renowned cuisine, pottery tradition, and peaceful atmosphere - perfect for those seeking authentic Greek island life.',
      'This beautiful island offers: authentic culture, traditional Cycladic architecture, excellent cuisine, pottery workshops, and peaceful atmosphere - ideal for authentic Greek island experiences.'
    ],
    priority: 6,
    context: 'sifnos_culture'
  },

  // Sifnos Villages Detailed
  {
    category: 'sifnos_villages_detailed',
    keywords: ['apollonia capital', 'kastro medieval', 'artemonas traditional', 'exampela', 'katavati', 'kato petali', 'pano petali', 'troullaki', 'agios loukas'],
    responses: [
      'Sifnos villages: Apollonia (island capital), Kastro (medieval fortress village), Artemonas (traditional), Exampla, Katavati, Kato Petali, Pano Petali, Troullaki, and Agios Loukas - each with unique character.',
      'Explore Sifnos villages: Apollonia (capital), Kastro (medieval), Artemonas (traditional), and many others like Exampla, Katavati, Kato Petali, Pano Petali, Troullaki, and Agios Loukas.',
      'Sifnos has charming villages: Apollonia (capital), Kastro (medieval fortress), Artemonas (traditional), plus Exampla, Katavati, Kato Petali, Pano Petali, Troullaki, and Agios Loukas.',
      'Discover Sifnos villages: Apollonia (island capital), Kastro (medieval), Artemonas (traditional), and others including Exampla, Katavati, Kato Petali, Pano Petali, Troullaki, and Agios Loukas.'
    ],
    priority: 5,
    context: 'villages_detailed'
  },

  // Sifnos Beaches Detailed
  {
    category: 'sifnos_beaches_detailed',
    keywords: ['platis gialos blue flag', 'kamares port', 'vathi peaceful', 'chrysopigi monastery', 'faros', 'heronissos', 'vroulidia', 'fykiada'],
    responses: [
      'Sifnos beaches: Platis Gialos (Blue Flag awarded), Kamares (main port), Vathi (peaceful), Chrysopigi (famous monastery), Faros, Heronissos, Vroulidia, and Fykiada - each with unique character.',
      'Our beaches include: Platis Gialos (Blue Flag), Kamares (port), Vathi (tranquil), Chrysopigi (monastery), Faros, Heronissos, Vroulidia, and Fykiada - each offering different experiences.',
      'Sifnos beaches feature: Platis Gialos (Blue Flag), Kamares (main port), Vathi (peaceful), Chrysopigi (monastery), Faros, Heronissos, Vroulidia, and Fykiada - diverse coastal experiences.',
      'Beach options: Platis Gialos (Blue Flag), Kamares (port), Vathi (tranquil), Chrysopigi (monastery), Faros, Heronissos, Vroulidia, and Fykiada - each with its own charm and beauty.'
    ],
    priority: 7,
    context: 'beaches_detailed'
  },

  // Boat Tours Detailed
  {
    category: 'boat_tours_detailed',
    keywords: ['poliegos natura 2000', 'kimolos', 'milos', 'uninhabited islands', 'hidden coves', 'crystal waters', 'snorkeling', 'coastal landscapes'],
    responses: [
      'Boat tours visit: Poliegos (Natura 2000 protected area), Kimolos, and Milos. Experience uninhabited islands, hidden coves, crystal-clear waters for snorkeling, and stunning coastal landscapes.',
      'Our boat tours explore: Poliegos (protected area), Kimolos, and Milos - discovering uninhabited islands, hidden coves, perfect snorkeling spots, and breathtaking coastal scenery.',
      'Boat tour destinations: Poliegos (Natura 2000), Kimolos, and Milos - featuring uninhabited islands, hidden coves, crystal waters for snorkeling, and incredible coastal landscapes.',
      'Island hopping includes: Poliegos (protected), Kimolos, and Milos - exploring uninhabited islands, hidden coves, snorkeling in crystal waters, and capturing stunning coastal views.'
    ],
    priority: 7,
    context: 'boat_tours_detailed'
  },

  // Dining & Cuisine Detailed
  {
    category: 'dining_detailed',
    keywords: ['gastronomic capital', 'culinary tradition', 'world class cuisine', 'beachside tavernas', 'fine dining', 'grocery delivery', 'pre stocking', 'cooking'],
    responses: [
      'Sifnos is the gastronomic capital of the Cyclades! Enjoy world-class cuisine from beachside tavernas to fine dining. Our villa has a complete kitchen for cooking, and we can arrange grocery delivery or pre-stocking.',
      'The island offers incredible dining: from traditional beachside tavernas to fine dining restaurants. Our villa has a full kitchen for cooking, and we can arrange grocery delivery or pre-stocking.',
      'Sifnos cuisine: gastronomic capital of the Cyclades with world-class dining from tavernas to fine restaurants. Our villa has a complete kitchen, and we can arrange grocery delivery or pre-stocking.',
      'Dining experiences: Sifnos is the culinary capital of the Cyclades with excellent restaurants. Our villa has a full kitchen for cooking, and we can arrange grocery delivery or pre-stocking for your convenience.'
    ],
    priority: 6,
    context: 'dining_detailed'
  },

  // Weather & Seasons Detailed
  {
    category: 'weather_detailed',
    keywords: ['mediterranean climate', '300 days sunshine', 'summer temperatures', '25-30 celsius', '77-86 fahrenheit', 'shoulder seasons', 'may june', 'september october'],
    responses: [
      'Sifnos has a Mediterranean climate with over 300 days of sunshine yearly. Summer temperatures range 25-30°C (77-86°F). Shoulder seasons (May-June, September-October) offer perfect weather with fewer crowds.',
      'The island enjoys a Mediterranean climate with 300+ days of sunshine. Summer: 25-30°C (77-86°F). Best times: May-June and September-October for comfortable temperatures and fewer crowds.',
      'Weather: Mediterranean climate with 300+ sunny days annually. Summer: 25-30°C (77-86°F). Shoulder seasons (May-June, September-October) provide ideal weather with fewer tourists.',
      'Climate: Mediterranean with 300+ days of sunshine. Summer temperatures: 25-30°C (77-86°F). Shoulder seasons (May-June, September-October) offer perfect weather and fewer crowds.'
    ],
    priority: 5,
    context: 'weather_detailed'
  },

  // Check-in/Check-out Detailed
  {
    category: 'checkin_checkout_detailed',
    keywords: ['check in 3pm', 'check out 11am', 'early check in', 'late check out', 'luggage storage', 'arrival instructions', 'airport transfers', 'port transfers'],
    responses: [
      'Check-in: after 3:00 PM, Check-out: before 11:00 AM. We can arrange early/late check-in, luggage storage, detailed arrival instructions, and airport/port transfers upon request.',
      'Standard times: Check-in after 3 PM, Check-out before 11 AM. We offer early/late arrangements, luggage storage, arrival instructions, and airport/port transfers when needed.',
      'Check-in/out: 3 PM check-in, 11 AM check-out. We can accommodate early/late times, provide luggage storage, detailed arrival instructions, and arrange transfers.',
      'Timing: Check-in after 3 PM, Check-out before 11 AM. We can arrange early/late check-in, luggage storage, arrival instructions, and airport/port transfers for your convenience.'
    ],
    priority: 5,
    context: 'checkin_detailed'
  },

  // Elena Philippou Host Information
  {
    category: 'elena_host',
    keywords: ['elena philippou', 'host', 'family home', 'family business', 'local', 'authentic experience', 'generations', '1800s', 'permanently'],
    responses: [
      'Elena Philippou is your host at Villa Olivia Clara. Her family has been on Sifnos since the 1800s! She originally built the villa as her family\'s summer home and now lives permanently on the island.',
      'Meet Elena Philippou, your host! Her family has called Sifnos home since the 1800s. She built Villa Olivia Clara as her family\'s summer home and now lives permanently on the island.',
      'Elena Philippou is your local host. Her family has been on Sifnos for generations (since the 1800s). She built the villa as her family home and now lives permanently on the island.',
      'Your host Elena Philippou has deep roots on Sifnos - her family has been here since the 1800s! She built Villa Olivia Clara as her family\'s summer home and now lives permanently on the island.'
    ],
    priority: 8,
    context: 'host_info'
  },

  // Villa vs Hotel Detailed Comparison
  {
    category: 'villa_vs_hotel_detailed',
    keywords: ['complete privacy', '250m2 space', 'full kitchen access', 'free parking', 'personalized concierge', 'no shared spaces', 'outdoor entertainment', 'authentic experience'],
    responses: [
      'Villa advantages: complete privacy, 250m² of space, full kitchen access, free parking for 5 cars, personalized concierge service, no shared spaces, outdoor entertainment areas, and authentic Greek island lifestyle experience.',
      'Our villa offers: complete privacy, 250m² living space, full kitchen, free parking, personalized service, no shared areas, outdoor spaces, and authentic Greek island experience - advantages you won\'t find in hotels.',
      'Villa benefits: total privacy, 250m² space, full kitchen, free parking, personalized concierge, no shared spaces, outdoor entertainment, and authentic Greek island lifestyle - completely different from hotels.',
      'Why choose our villa: complete privacy, 250m² living space, full kitchen access, free parking, personalized service, no shared areas, outdoor entertainment, and authentic Greek island experience.'
    ],
    priority: 6,
    context: 'villa_comparison_detailed'
  },

  // Reviews & Guest Experiences Detailed
  {
    category: 'reviews_detailed',
    keywords: ['high ratings', 'repeat guests', 'stunning location', 'excellent amenities', 'personalized service', 'best greek island experience', 'return year after year'],
    responses: [
      'Our guests consistently give high ratings for stunning location, excellent amenities, and personalized service. Many describe it as their best Greek island experience and return year after year.',
      'Guest reviews highlight our villa\'s stunning location, excellent amenities, and personalized service. We\'re proud of our high ratings and many repeat guests who return annually.',
      'Our guests love the villa\'s location, amenities, and service. Many describe it as their best Greek island experience and choose to return year after year - a testament to our quality.',
      'Guest feedback consistently praises our villa\'s location, amenities, and service. We\'re honored that many guests return to Villa Olivia Clara year after year for their Greek island vacations.'
    ],
    priority: 5,
    context: 'reviews_detailed'
  },

  // Sustainability Detailed
  {
    category: 'sustainability_detailed',
    keywords: ['sustainable tourism', 'local businesses', 'environmental impact', 'local artisans', 'eco friendly products', 'responsible tourism', 'natural beauty', 'future generations'],
    responses: [
      'We\'re committed to sustainable tourism: supporting local businesses, minimizing environmental impact, working with local artisans, using eco-friendly products, and promoting responsible tourism to preserve Sifnos\' natural beauty for future generations.',
      'Our sustainability efforts: supporting local businesses and artisans, using eco-friendly products, minimizing environmental impact, and promoting responsible tourism to protect Sifnos\' natural environment.',
      'We believe in sustainable luxury: providing exceptional experiences while supporting the local community, using eco-friendly practices, and helping preserve Sifnos\' natural beauty for future generations.',
      'Our commitment: sustainable tourism practices, supporting local businesses and artisans, using eco-friendly products, and promoting responsible tourism to protect Sifnos\' natural environment.'
    ],
    priority: 4,
    context: 'sustainability_detailed'
  }
];

// Enhanced AI Response Generator with Advanced Context Awareness
export function generateAIResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  const words = message.split(/\s+/);
  
  // Enhanced keyword matching with partial matches and synonyms
  const synonyms: Record<string, string[]> = {
    'villa': ['house', 'property', 'accommodation', 'rental', 'stay'],
    'pool': ['swimming', 'water', 'swim'],
    'beach': ['coast', 'shore', 'seaside'],
    'book': ['reserve', 'booking', 'reservation', 'rent'],
    'price': ['cost', 'rate', 'fee', 'charge'],
    'available': ['free', 'open', 'vacant'],
    'room': ['bedroom', 'bed', 'sleep'],
    'bathroom': ['toilet', 'wc', 'washroom'],
    'kitchen': ['cook', 'cooking', 'food'],
    'wifi': ['internet', 'connection', 'online'],
    'parking': ['car', 'vehicle', 'garage'],
    'garden': ['terrace', 'outdoor', 'patio'],
    'dining': ['eat', 'restaurant', 'food', 'meal'],
    'activities': ['things to do', 'attractions', 'sights'],
    'weather': ['climate', 'temperature', 'season'],
    'host': ['elena', 'owner', 'manager'],
    'sifnos': ['island', 'greece', 'greek', 'cyclades'],
    'luxury': ['premium', 'high-end', 'exclusive'],
    'private': ['exclusive', 'personal', 'individual']
  };

  // Expand search terms with synonyms
  const expandedWords = [...words];
  words.forEach(word => {
    Object.entries(synonyms).forEach(([key, values]) => {
      if (key.includes(word) || word.includes(key)) {
        expandedWords.push(...values);
      }
      values.forEach(synonym => {
        if (synonym.includes(word) || word.includes(synonym)) {
          expandedWords.push(key);
        }
      });
    });
  });

  // Find matching knowledge entries with enhanced scoring
  const matches = VILLA_KNOWLEDGE_BASE
    .map(entry => ({
      entry,
      score: entry.keywords.reduce((score, keyword) => {
        const keywordWords = keyword.toLowerCase().split(/\s+/);
        const matchCount = keywordWords.filter(kw => 
          expandedWords.some(word => {
            // Exact match
            if (word === kw) return true;
            // Partial match
            if (word.includes(kw) || kw.includes(word)) return true;
            // Levenshtein distance for typos (simple version)
            if (Math.abs(word.length - kw.length) <= 2 && 
                (word.includes(kw.substring(0, 3)) || kw.includes(word.substring(0, 3)))) return true;
            return false;
          })
        ).length;
        return score + (matchCount * entry.priority);
      }, 0)
    }))
    .filter(match => match.score > 0)
    .sort((a, b) => b.score - a.score);

  if (matches.length > 0) {
    const bestMatch = matches[0].entry;
    const randomResponse = Math.floor(Math.random() * bestMatch.responses.length);
    
    // Add contextual follow-up suggestions for high-priority matches
    if (bestMatch.priority >= 8) {
      const followUpSuggestions = getFollowUpSuggestions(bestMatch.category);
      if (followUpSuggestions.length > 0) {
        return bestMatch.responses[randomResponse] + " " + followUpSuggestions[Math.floor(Math.random() * followUpSuggestions.length)];
      }
    }
    
    return bestMatch.responses[randomResponse];
  }

  // Enhanced fallback responses with more personality
  const fallbackResponses = [
    "I'd be delighted to help you with Villa Olivia Clara! I can tell you about our luxury amenities, stunning Sifnos location, booking process, nearby beaches, island activities, dining recommendations, or anything else about your perfect Greek getaway. What interests you most?",
    "As your personal Villa Olivia Clara assistant, I'm here to make your Sifnos experience extraordinary! Ask me about our villa features, the beautiful island of Sifnos, booking details, local recommendations, activities, or help planning your luxury Greek island vacation.",
    "I'm Olivia Clara AI, your dedicated villa concierge! I can help with villa details, Sifnos island information, booking assistance, local insights, activity recommendations, dining suggestions, or planning your perfect luxury Greek island experience. What would you like to know?",
    "Welcome to Villa Olivia Clara! I'm here to help you discover everything about our luxury villa and the beautiful island of Sifnos. Ask me about amenities, location, beaches, villages, activities, dining, weather, or how to book your perfect Greek island vacation.",
    "I'm your Villa Olivia Clara AI assistant, ready to help! I can provide detailed information about our villa amenities, Sifnos island attractions, booking process, local recommendations, activities, dining, weather, or help plan your perfect luxury Greek getaway. What can I help you with?"
  ];

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

// Follow-up suggestions based on category
function getFollowUpSuggestions(category: string): string[] {
  const suggestions: Record<string, string[]> = {
    'villa_info': [
      "Would you like to know about our specific amenities or location details?",
      "I can tell you more about our villa features or booking process if you're interested!",
      "Would you like information about our pool, garden, or bedroom details?"
    ],
    'pool_outdoor': [
      "Would you like to know about our garden and terrace areas as well?",
      "I can tell you about our nearby beaches or outdoor activities if you're interested!",
      "Would you like information about our BBQ facilities or outdoor dining?"
    ],
    'bedrooms_bathrooms': [
      "Would you like to know about our living spaces or kitchen amenities?",
      "I can tell you about our villa's entertainment options or WiFi if you're interested!",
      "Would you like information about our check-in process or services?"
    ],
    'location': [
      "Would you like to know about nearby beaches or Sifnos attractions?",
      "I can tell you about transportation options or local recommendations if you're interested!",
      "Would you like information about our villa's specific amenities or booking process?"
    ],
    'booking': [
      "Would you like to know about our villa amenities or location details?",
      "I can tell you about our check-in process or services if you're interested!",
      "Would you like information about Sifnos attractions or nearby beaches?"
    ]
  };
  
  return suggestions[category] || [];
}

// Enhanced Quick Actions - Comprehensive Villa & Sifnos Information
export const QUICK_ACTIONS = [
  { label: 'Villa Amenities', query: 'Tell me about the villa amenities and features' },
  { label: 'Pool & Outdoor', query: 'What are the pool and outdoor features?' },
  { label: 'Bedrooms & Bathrooms', query: 'Tell me about the bedrooms and bathrooms' },
  { label: 'Kitchen & Living', query: 'What kitchen and living space amenities are available?' },
  { label: 'Booking Info', query: 'How do I book a stay at Villa Olivia Clara?' },
  { label: 'Check-in/out', query: 'What are the check-in and check-out times?' },
  { label: 'Sifnos Beaches', query: 'What are the best beaches near the villa?' },
  { label: 'Sifnos Villages', query: 'What villages should I visit on Sifnos?' },
  { label: 'Boat Tours', query: 'Tell me about boat tours from Sifnos' },
  { label: 'Local Dining', query: 'Can you recommend restaurants in Sifnos?' },
  { label: 'Activities', query: 'What activities and things to do are available?' },
  { label: 'Weather & Seasons', query: 'What\'s the best time to visit Sifnos?' },
  { label: 'Transportation', query: 'How do I get to the villa from the port?' },
  { label: 'Villa vs Hotel', query: 'Why choose a villa over a hotel?' },
  { label: 'Elena Host', query: 'Tell me about Elena Philippou, the host' },
  { label: 'Sustainability', query: 'What are your sustainability practices?' },
  { label: 'Guest Reviews', query: 'What do guests say about their stay?' },
  { label: 'Services', query: 'What services are included and available upon request?' }
];

export default VILLA_KNOWLEDGE_BASE;