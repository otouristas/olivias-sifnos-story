// Villa Olivia Clara - AI Knowledge Base
// FOCUSED on Villa Olivia Clara - NOT generic Sifnos info

export interface KnowledgeEntry {
  readonly category: string;
  readonly keywords: readonly string[];
  readonly response: string;
  readonly priority: number;
  readonly followUpAction?: 'booking' | 'contact' | 'explore';
}

// ============================================================================
// FOLLOW-UP ACTIONS
// ============================================================================
export const FOLLOW_UP_ACTIONS = {
  booking: {
    label: 'Book Your Stay',
    icon: 'Calendar',
    url: 'https://www.booking.com/hotel/gr/villa-olivia-clara.html',
    external: true,
  },
  contact: {
    label: 'Contact Elena',
    icon: 'Mail',
    url: '/contact',
    external: false,
  },
  explore: {
    label: 'Explore Villa',
    icon: 'Eye',
    url: '/villa',
    external: false,
  },
} as const;

export const QUICK_ACTIONS = [
  { id: 'villa', label: 'About the Villa', icon: 'Home', query: 'Tell me about Villa Olivia Clara' },
  { id: 'pool', label: 'Pool & Views', icon: 'Waves', query: 'Tell me about the pool' },
  { id: 'bedrooms', label: 'Bedrooms', icon: 'Bed', query: 'How many bedrooms?' },
  { id: 'booking', label: 'Book Now', icon: 'Calendar', query: 'How do I book?' },
  { id: 'contact', label: 'Contact Host', icon: 'Phone', query: 'Contact Elena' },
  { id: 'location', label: 'Location', icon: 'MapPin', query: 'Where is the villa located?' },
] as const;

// ============================================================================
// VILLA OLIVIA CLARA FOCUSED KNOWLEDGE BASE
// ============================================================================
export const VILLA_KNOWLEDGE_BASE: readonly KnowledgeEntry[] = [

  // ---- VILLA OVERVIEW ----
  {
    category: 'villa_overview',
    keywords: ['villa', 'olivia clara', 'about', 'property', 'overview', 'describe', 'what is', 'tell me about', 'the villa'],
    response: `**Villa Olivia Clara** is a luxury vacation home in Platis Gialos, Sifnos, Greece.

Originally built as the owner Elena's family summer home, it combines authentic Cycladic architecture with modern luxury.

**Villa Highlights:**
• 🛏️ 3 Bedrooms (sleeps up to 8 guests)
• 🛁 2 Full Bathrooms + pool bathroom
• 🏊 12m x 5m Private Pool with sea views
• 🌅 Multiple terraces for outdoor dining
• 📍 5 min walk to Platis Gialos beach
• ⭐ Perfect 5/5 guest rating

Would you like to know more about our bedrooms, pool, or how to book?`,
    priority: 10,
    followUpAction: 'explore',
  },

  // ---- BEDROOMS ----
  {
    category: 'bedrooms',
    keywords: ['bedroom', 'bed', 'sleep', 'guests', 'capacity', 'people', 'accommodate', 'how many', 'rooms', 'king', 'single'],
    response: `Villa Olivia Clara has **3 bedrooms** sleeping up to **8 guests**:

**Main House:**
• 🛏️ Master Bedroom - King bed, en-suite, sea views
• 🛏️ Standard Bedroom - King bed, garden views

**Guest Quarters:**
• 🛏️ Guest Master - King bed, en-suite bathroom
• 🛏️ Guest Room - 2 single beds

**Amenities in every bedroom:**
• Air conditioning
• Premium linens
• Extra pillows & blankets
• Baby crib available on request

Ready to reserve your stay?`,
    priority: 10,
    followUpAction: 'booking',
  },

  // ---- POOL ----
  {
    category: 'pool',
    keywords: ['pool', 'swimming', 'swim', 'outdoor', 'cabana', 'sunbed', 'lounge', 'water'],
    response: `Our **12m x 5m private pool** is the heart of Villa Olivia Clara! ☀️

**Pool Features:**
• Crystal-clear infinity-style pool
• Panoramic sea & sunset views
• Pool-side cabana with shaded seating
• 8 luxury sunbeds with umbrellas
• Pool bar with wine cooler
• Outdoor shower & pool bathroom
• Beautiful night lighting

Perfect for morning swims, afternoon lounging, or sunset cocktails!

Would you like to book your pool-side escape?`,
    priority: 10,
    followUpAction: 'booking',
  },

  // ---- OUTDOOR & TERRACE ----
  {
    category: 'outdoor',
    keywords: ['terrace', 'garden', 'outdoor', 'view', 'sunset', 'dining outdoor', 'bbq', 'grill'],
    response: `Villa Olivia Clara has stunning outdoor spaces:

**Pool Area:**
• Sunbathing deck with 8 loungers
• Pool-side dining table (seats 8)
• Pool bar & cabana

**Terraces:**
• Upper terrace with sunset views
• Stone-paved dining terrace with BBQ
• Private garden with Mediterranean plants

**Outdoor Dining:**
• Terrace seats 8+ guests
• BBQ/grill for al fresco cooking
• Perfect for dinner under the stars

Shall we reserve your dates?`,
    priority: 9,
    followUpAction: 'booking',
  },

  // ---- KITCHEN ----
  {
    category: 'kitchen',
    keywords: ['kitchen', 'cook', 'cooking', 'food', 'bbq', 'grill', 'meal', 'appliance'],
    response: `Our **fully-equipped modern kitchen** has everything you need:

**Appliances:**
• Full-size refrigerator & freezer
• 4-burner stove with oven
• Microwave & dishwasher
• Nespresso coffee machine
• Toaster & kettle

**Provided:**
• All cookware & utensils
• Plates, glasses, cutlery
• Basic condiments

**Special Services:**
• Private chef available on request
• Grocery delivery can be arranged

Contact Elena for private chef arrangements!`,
    priority: 8,
    followUpAction: 'contact',
  },

  // ---- AMENITIES ----
  {
    category: 'amenities',
    keywords: ['amenities', 'facilities', 'wifi', 'internet', 'tv', 'air conditioning', 'ac', 'parking', 'service', 'feature'],
    response: `Villa Olivia Clara offers **5-star amenities**:

**Entertainment:**
• Smart 65" HDTV with Netflix
• High-speed WiFi throughout
• Bluetooth sound system

**Comfort:**
• Air conditioning in all rooms
• Heating for cooler evenings
• Premium linens & towels

**Convenience:**
• Free private parking (2 cars)
• Daily housekeeping option
• Childcare on request

Everything you need for a perfect luxury stay!`,
    priority: 9,
    followUpAction: 'booking',
  },

  // ---- LOCATION ----
  {
    category: 'location',
    keywords: ['location', 'where', 'address', 'platis gialos', 'near', 'distance', 'beach', 'map'],
    response: `Villa Olivia Clara is in **Platis Gialos, Sifnos**:

📍 **Location:**
• 5 min walk to Platis Gialos beach
• 10 min drive to Apollonia (main town)
• 15 min drive to Kamares port

**From the Villa:**
• Beach restaurants within walking distance
• Shops & mini-market nearby
• Free private parking included

We can help arrange transfers from the port!`,
    priority: 9,
    followUpAction: 'contact',
  },

  // ---- BOOKING ----
  {
    category: 'booking',
    keywords: ['book', 'booking', 'reserve', 'reservation', 'price', 'cost', 'rate', 'availability', 'dates', 'stay', 'how much'],
    response: `Ready to book Villa Olivia Clara? 🌴

**How to Book:**
1. Book directly via Booking.com
2. Or contact Elena for best rates

**Booking Info:**
• Season: May - October
• Minimum stay: 3-7 nights (varies by season)
• Sleeps up to 8 guests

**Direct Booking Benefits:**
• Best price guarantee
• Flexible cancellation options
• Personalized welcome package

Book now or contact Elena for availability!`,
    priority: 10,
    followUpAction: 'booking',
  },

  // ---- CONTACT & HOST ----
  {
    category: 'contact',
    keywords: ['contact', 'elena', 'host', 'phone', 'email', 'call', 'reach', 'message', 'inquiry', 'question'],
    response: `Your host **Elena Philippou** would love to help!

📧 **Email:** elena@villaoliviaclara.com
📞 **Phone:** +30 697 191 9382

**About Elena:**
Elena's family has called Sifnos home since the 1800s. She built Villa Olivia Clara as her family's summer retreat and personally welcomes every guest.

*"I'd be delighted to help you plan your perfect vacation!"* — Elena

Reach out anytime with questions!`,
    priority: 10,
    followUpAction: 'contact',
  },

  // ---- BATHROOMS ----
  {
    category: 'bathrooms',
    keywords: ['bathroom', 'bath', 'toilet', 'shower', 'wc'],
    response: `The villa has **2 full bathrooms** plus a pool bathroom:

• 🚿 Master Bathroom - Full bath, shower, luxury toiletries
• 🚿 Standard Bathroom - Modern design, shower
• 🚿 Pool Bathroom - Convenient for swimmers

**Included:**
• Hot water (solar heated)
• Premium towels (changed every 3 days)
• Essential toiletries & hairdryer`,
    priority: 7,
    followUpAction: 'explore',
  },

  // ---- GREETINGS ----
  {
    category: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'kalimera', 'yia sou', 'start'],
    response: `Kalimera! ☀️ Welcome!

I'm **Olivia Clara AI**, your personal villa concierge.

I can tell you all about Villa Olivia Clara:
• 🏠 Villa features & amenities
• 🏊 Pool & outdoor spaces
• 🛏️ Bedrooms & bathrooms
• 📅 Booking & availability
• 📞 Contact our host Elena

What would you like to know?`,
    priority: 6,
    followUpAction: undefined,
  },

  // ---- FAMILY FRIENDLY ----
  {
    category: 'family',
    keywords: ['family', 'kids', 'children', 'baby', 'child', 'infant', 'safe'],
    response: `Villa Olivia Clara is **perfect for families**! 👨‍👩‍👧‍👦

**For Families:**
• Baby crib available on request
• High chair provided
• Secure, fenced property
• Shallow pool entry area
• Beach nearby is calm & sandy

**For Kids:**
• Board games available
• Large garden to play
• Beach toys provided
• Childcare can be arranged

The calm waters at Platis Gialos are perfect for young swimmers!`,
    priority: 8,
    followUpAction: 'booking',
  },

  // ---- SPECIAL OCCASIONS ----
  {
    category: 'events',
    keywords: ['wedding', 'honeymoon', 'anniversary', 'birthday', 'celebration', 'romantic', 'special'],
    response: `Villa Olivia Clara is perfect for special occasions! 💍

**Ideal For:**
• Romantic honeymoons
• Anniversary getaways
• Birthday celebrations
• Small intimate gatherings
• Family reunions

**We Can Arrange:**
• Private chef dinners
• Wine tasting
• Sunset sailing
• Photography sessions

Contact Elena to plan your celebration!`,
    priority: 7,
    followUpAction: 'contact',
  },

  // ---- CHECK-IN ----
  {
    category: 'checkin',
    keywords: ['check in', 'check out', 'checkin', 'checkout', 'arrival', 'departure', 'time'],
    response: `**Check-in & Check-out:**

🔑 **Check-in:** 3:00 PM
🔑 **Check-out:** 11:00 AM

**Flexible Options:**
• Early check-in available on request
• Late check-out when possible
• Luggage storage provided

Elena or her team will greet you personally!`,
    priority: 7,
    followUpAction: 'contact',
  },

  // ---- REVIEWS ----
  {
    category: 'reviews',
    keywords: ['review', 'rating', 'feedback', 'recommend', 'experience'],
    response: `Villa Olivia Clara has a **perfect 5/5 rating**! ⭐⭐⭐⭐⭐

**What Guests Say:**

*"Absolutely loved the pool and views. Elena was amazing!"* — Alexis

*"The best accommodation we've ever had!"* — Li Chuen

*"A true gem. We can't wait to return!"* — Savvas

**10+ years** of hosting happy guests from around the world!`,
    priority: 8,
    followUpAction: 'booking',
  },

  // ---- TRANSPORT ----
  {
    category: 'travel',
    keywords: ['ferry', 'port', 'transfer', 'airport', 'get there', 'arrive', 'transport'],
    response: `**Getting to Villa Olivia Clara:**

**From Sifnos Port (Kamares):**
• 15 min drive to the villa
• We can arrange pickup!

**Ferry from Athens (Piraeus):**
• 4-5 hours to Sifnos
• Daily departures

**We Can Help With:**
• Port transfers
• Car rental recommendations
• Ferry booking tips

Contact Elena to arrange your arrival!`,
    priority: 7,
    followUpAction: 'contact',
  },

  // ---- WEATHER ----
  {
    category: 'weather',
    keywords: ['weather', 'when', 'best time', 'season', 'summer'],
    response: `**Best Time to Visit Villa Olivia Clara:**

☀️ **Peak Season:** July-August
• Warmest (28-32°C)
• Book early!

🌸 **Shoulder Season:** May-June, Sept-Oct
• Perfect weather
• Fewer crowds
• Great rates

**Villa Features:**
• Air conditioning for hot days
• Pool always available
• Shaded terraces for comfort

Ready to book your dates?`,
    priority: 6,
    followUpAction: 'booking',
  },

  // ---- THANKS ----
  {
    category: 'thanks',
    keywords: ['thank', 'thanks', 'thank you', 'bye', 'goodbye', 'helpful'],
    response: `You're very welcome! 😊

If you have any more questions about Villa Olivia Clara, just ask!

**Quick Links:**
• Book: booking.com/villa-olivia-clara
• Contact: elena@villaoliviaclara.com
• Phone: +30 697 191 9382

We hope to welcome you soon! 🌴`,
    priority: 5,
    followUpAction: 'booking',
  },
];

// ============================================================================
// AI RESPONSE GENERATOR
// ============================================================================
export function generateAIResponse(userMessage: string): {
  response: string;
  followUpAction?: 'booking' | 'contact' | 'explore';
} {
  const message = userMessage.toLowerCase().trim();

  // Find matching entries
  let bestMatch: KnowledgeEntry | null = null;
  let highestScore = 0;

  for (const entry of VILLA_KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (message.includes(keyword.toLowerCase())) {
        score += entry.priority;
        // Bonus for exact word match
        if (message.split(/\s+/).includes(keyword.toLowerCase())) {
          score += 2;
        }
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = entry;
    }
  }

  // Return matched response or default
  if (bestMatch && highestScore > 0) {
    return {
      response: bestMatch.response,
      followUpAction: bestMatch.followUpAction,
    };
  }

  // Default response - focused on villa
  return {
    response: `I'd be happy to help with Villa Olivia Clara!

I can tell you about:
• 🏠 The villa & amenities
• 🏊 Pool & outdoor spaces
• 🛏️ Bedrooms (sleeps 8)
• 📅 Booking & availability
• 📞 Contact Elena

What would you like to know?`,
    followUpAction: 'explore',
  };
}