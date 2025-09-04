// Olivia Clara AI Knowledge Base - Trained on Villa Website Content

export interface KnowledgeEntry {
  readonly category: string;
  readonly keywords: ReadonlyArray<string>;
  readonly responses: ReadonlyArray<string>;
  readonly priority: number;
}

export const VILLA_KNOWLEDGE_BASE: ReadonlyArray<KnowledgeEntry> = [
  // Villa Basic Information
  {
    category: 'villa_info',
    keywords: ['villa', 'property', 'house', 'accommodation', 'olivia clara'],
    responses: [
      'Villa Olivia Clara is a luxury 250m² villa in Platis Gialos, Sifnos, Greece. Our elegant property accommodates up to 8 guests with 4 bedrooms, 4.5 bathrooms, and stunning sea views.',
      'Our beautiful villa offers the perfect blend of luxury and comfort, featuring a private pool, garden spaces, and breathtaking views of the Aegean Sea.',
      'Villa Olivia Clara has been welcoming guests for over 10 years, providing five-star service and authentic Greek hospitality in one of Sifnos\' most beautiful locations.'
    ],
    priority: 10
  },

  // Capacity and Rooms
  {
    category: 'capacity',
    keywords: ['capacity', 'guests', 'people', 'sleep', 'bedrooms', 'beds', 'rooms'],
    responses: [
      'Villa Olivia Clara comfortably accommodates up to 8 guests with 4 bedrooms: 2 rooms with queen beds, 2 rooms with single beds (4 singles total), plus 1 baby cot available.',
      'We have 4 beautifully appointed bedrooms and 4.5 bathrooms, ensuring everyone has comfortable private space during their stay.',
      'Our villa is perfect for families or groups of friends, with flexible sleeping arrangements for up to 8 guests plus infant accommodation.'
    ],
    priority: 9
  },

  // Location and Access
  {
    category: 'location',
    keywords: ['location', 'where', 'address', 'sifnos', 'platis gialos', 'beach', 'distance', 'walk'],
    responses: [
      'We\'re located in beautiful Platis Gialos, Sifnos, just 7 minutes walk (or 2 minutes drive) to the stunning Platis Gialos beach.',
      'Villa Olivia Clara sits in prime location: 15 minutes to Apollonia (island center), 25 minutes to Kamares port, with easy access to all of Sifnos\' attractions.',
      'Our location offers the perfect balance - close enough to walk to the beach and restaurants, yet private and peaceful with incredible sea views.'
    ],
    priority: 9
  },

  // Amenities and Features
  {
    category: 'amenities',
    keywords: ['amenities', 'features', 'pool', 'wifi', 'kitchen', 'parking', 'bbq', 'garden'],
    responses: [
      'Our villa features a large private pool with lounge area and bar, full kitchen, BBQ facilities, garden with outdoor dining, 200+ Mbps WiFi, and parking for 5 cars.',
      'Enjoy luxury amenities including a private pool cabana, outdoor bar area, fully equipped kitchen, high-speed internet, beautiful gardens, and stunning sea views from every corner.',
      'We provide everything for a perfect stay: pool and outdoor entertainment areas, modern kitchen facilities, reliable WiFi for remote work, and ample parking space.'
    ],
    priority: 8
  },

  // Booking and Pricing
  {
    category: 'booking',
    keywords: ['book', 'booking', 'reservation', 'availability', 'price', 'cost', 'rates', 'contact'],
    responses: [
      'To book your stay, please contact Elena at elena@villaoliviaclara.com or call +30 697 191 9382. We\'ll check availability and provide personalized pricing for your dates.',
      'Booking is easy! Reach out through our website contact form or email Elena directly at elena@villaoliviaclara.com. We offer personalized service and can accommodate special requests for your perfect Sifnos getaway.',
      'For reservations and pricing inquiries, please contact Elena directly at elena@villaoliviaclara.com or +30 697 191 9382. We provide customized quotes based on your travel dates, group size, and any special requirements.'
    ],
    priority: 10
  },

  // Services Included and Optional
  {
    category: 'services',
    keywords: ['services', 'housekeeping', 'cleaning', 'chef', 'concierge', 'childcare', 'transfers'],
    responses: [
      'Included services: housekeeping twice per week and full concierge support. Optional services: private chef, childcare, airport transfers, car rental, and grocery pre-stocking.',
      'We provide regular housekeeping and are always available to help with recommendations, bookings, and special arrangements to make your stay perfect.',
      'Our concierge services include local recommendations, restaurant reservations, activity bookings, and assistance with anything you need during your stay in Sifnos.'
    ],
    priority: 7
  },

  // Sifnos Island Information
  {
    category: 'sifnos_info',
    keywords: ['sifnos', 'island', 'greece', 'cyclades', 'greek', 'culture', 'history'],
    responses: [
      'Sifnos is a beautiful Cycladic island known for its excellent cuisine, traditional architecture, and stunning beaches. It\'s less touristy than Mykonos or Santorini but equally beautiful.',
      'The island offers authentic Greek culture, world-class restaurants, hiking trails, beautiful villages like Kastro and Apollonia, and some of the best beaches in the Cyclades.',
      'Sifnos is famous for its culinary tradition, pottery, and peaceful atmosphere. It\'s the perfect destination for those seeking authentic Greek island experience.'
    ],
    priority: 6
  },

  // Beaches and Activities
  {
    category: 'beaches_activities',
    keywords: ['beaches', 'swimming', 'activities', 'things to do', 'restaurants', 'hiking', 'sightseeing'],
    responses: [
      'Sifnos offers incredible beaches: Platis Gialos (our beach), Kamares, Vathi, Chrysopigi, Faros, and Heronissos. Each has its own character and beauty.',
      'Activities include beach hopping, hiking ancient trails, visiting traditional villages, exploring monasteries, pottery workshops, and enjoying world-class Greek cuisine.',
      'The island is perfect for relaxation and exploration: beautiful beaches for swimming, excellent restaurants for dining, hiking trails with stunning views, and rich cultural sites.'
    ],
    priority: 6
  },

  // Check-in/Check-out and Practical Info
  {
    category: 'practical_info',
    keywords: ['check in', 'check out', 'arrival', 'departure', 'luggage', 'transportation'],
    responses: [
      'Standard check-in is after 3:00 PM and check-out before 11:00 AM. We can arrange early/late arrangements and airport transfers upon request.',
      'We provide detailed arrival instructions and can arrange transportation from Kamares port or airport transfers via Athens.',
      'For your convenience, we offer luggage storage, early check-in when possible, and can coordinate all transportation needs for your Sifnos visit.'
    ],
    priority: 5
  },

  // Food and Dining
  {
    category: 'dining',
    keywords: ['food', 'restaurants', 'dining', 'eat', 'cook', 'kitchen', 'grocery'],
    responses: [
      'Sifnos is renowned for its cuisine! We can recommend excellent restaurants nearby, arrange private chef services, or you can cook in our fully equipped kitchen.',
      'The island offers incredible dining from beachside tavernas to fine dining. We\'re happy to make reservations and provide our insider recommendations.',
      'Our villa has a complete kitchen for self-catering, and we can arrange grocery delivery or pre-stocking. Sifnos also has amazing local restaurants we\'ll recommend.'
    ],
    priority: 5
  },

  // Weather and Best Time to Visit
  {
    category: 'weather_season',
    keywords: ['weather', 'season', 'when to visit', 'climate', 'temperature', 'wind'],
    responses: [
      'Sifnos has a Mediterranean climate with warm, dry summers and mild winters. Best time to visit is May-October, with July-August being warmest.',
      'The island enjoys over 300 days of sunshine yearly. Summer temperatures range 25-30°C (77-86°F), perfect for swimming and outdoor activities.',
      'Shoulder seasons (May-June, September-October) offer perfect weather with fewer crowds, while summer provides the classic Greek island experience.'
    ],
    priority: 4
  }
];

// Enhanced AI Response Generator
export function generateAIResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  const words = message.split(/\s+/);
  
  // Find matching knowledge entries
  const matches = VILLA_KNOWLEDGE_BASE
    .map(entry => ({
      entry,
      score: entry.keywords.reduce((score, keyword) => {
        const keywordWords = keyword.toLowerCase().split(/\s+/);
        const matchCount = keywordWords.filter(kw => 
          words.some(word => word.includes(kw) || kw.includes(word))
        ).length;
        return score + (matchCount * entry.priority);
      }, 0)
    }))
    .filter(match => match.score > 0)
    .sort((a, b) => b.score - a.score);

  if (matches.length > 0) {
    const bestMatch = matches[0].entry;
    const randomResponse = Math.floor(Math.random() * bestMatch.responses.length);
    return bestMatch.responses[randomResponse];
  }

  // Fallback responses for unmatched queries
  const fallbackResponses = [
    "I'd be happy to help you with information about Villa Olivia Clara! You can ask me about our amenities, location, booking process, nearby beaches, Sifnos island activities, or any other questions about your stay.",
    "As your Villa Olivia Clara assistant, I can help with questions about our luxury accommodation, the beautiful island of Sifnos, booking details, local recommendations, and planning your perfect Greek getaway. What would you like to know?",
    "I'm here to make your Villa Olivia Clara experience exceptional! Feel free to ask about our villa features, Sifnos attractions, booking information, or any other questions to help plan your stay in Greece."
  ];

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

// Quick action suggestions
export const QUICK_ACTIONS = [
  { label: 'Villa Amenities', query: 'Tell me about the villa amenities and features' },
  { label: 'Booking Info', query: 'How do I book a stay at Villa Olivia Clara?' },
  { label: 'Sifnos Beaches', query: 'What are the best beaches near the villa?' },
  { label: 'Local Dining', query: 'Can you recommend restaurants in Sifnos?' },
  { label: 'Activities', query: 'What activities and things to do are available?' },
  { label: 'Transportation', query: 'How do I get to the villa from the port?' }
];

export default VILLA_KNOWLEDGE_BASE;
