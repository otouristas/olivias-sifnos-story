// Villa Olivia Clara - AI Knowledge Base with Images
// FOCUSED on Villa Olivia Clara with photo carousels

// Import properly bundled villa images
import { VILLA_IMAGES } from './villa-images';

export interface KnowledgeEntry {
  readonly category: string;
  readonly keywords: readonly string[];
  readonly response: string;
  readonly priority: number;
  readonly followUpAction?: 'booking' | 'contact' | 'explore';
  readonly images?: readonly string[];
}

// ============================================================================
// FOLLOW-UP ACTIONS
// ============================================================================
export const FOLLOW_UP_ACTIONS = {
  booking: {
    label: 'Book Your Stay',
    icon: 'Calendar',
    url: 'https://book.villaoliviaclara.com/',
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
  { id: 'guests', label: 'How many guests?', icon: 'Users', query: 'How many guests can the villa fit?' },
  { id: 'beach', label: 'Beach distance?', icon: 'Waves', query: 'How far is the villa from the beach?' },
  { id: 'pool', label: 'Pool & Views', icon: 'Eye', query: 'Show me the pool' },
  { id: 'bedrooms', label: 'Bedrooms?', icon: 'Bed', query: 'How many bedrooms?' },
  { id: 'booking', label: 'How to book?', icon: 'Calendar', query: 'How do I book?' },
  { id: 'contact', label: 'Contact Elena', icon: 'Phone', query: 'Contact Elena' },
] as const;

// ============================================================================
// VILLA OLIVIA CLARA KNOWLEDGE BASE - DETAILED RESPONSES WITH IMAGES
// ============================================================================
export const VILLA_KNOWLEDGE_BASE: readonly KnowledgeEntry[] = [

  // ---- VILLA OVERVIEW ----
  {
    category: 'villa_overview',
    keywords: ['villa', 'olivia clara', 'about', 'property', 'overview', 'describe', 'what is', 'tell me about', 'the villa', 'show'],
    response: `**Villa Olivia Clara** is a stunning luxury vacation home in Platis Gialos, Sifnos, Greece — originally built as Elena's family summer retreat.

**The Property at a Glance:**
• 🏠 **Total Size:** 180m² of living space + 500m² of outdoor areas
• 🛏️ **Bedrooms:** 3 beautifully appointed rooms (sleeps 8)
• 🛁 **Bathrooms:** 2 full en-suite + pool bathroom
• 🏊 **Pool:** Stunning 12m × 5m infinity-style private pool
• 🌅 **Views:** Panoramic sea & sunset views
• 📍 **Location:** 5 min walk to Platis Gialos beach

**What Makes Us Special:**
• Authentic Cycladic architecture with modern luxury
• Host Elena's family has lived on Sifnos since the 1800s
• Perfect 5/5 rating from 10+ years of happy guests
• Personalized service & local insider tips

Swipe through the photos to see the villa!`,
    priority: 10,
    followUpAction: 'explore',
    images: VILLA_IMAGES.overview,
  },

  // ---- POOL ----
  {
    category: 'pool',
    keywords: ['pool', 'swimming', 'swim', 'water', 'cabana', 'sunbed', 'lounge', 'infinity'],
    response: `Our **12m × 5m private pool** is the crown jewel of Villa Olivia Clara! ☀️

**Pool Features:**
• 💎 Crystal-clear infinity-style pool
• 🌅 Unobstructed panoramic sea views
• 🍹 Pool bar with wine cooler & mini fridge
• ☂️ 8 luxury sunbeds with umbrellas
• 🏝️ Shaded cabana for relaxation
• 🚿 Outdoor shower & pool bathroom
• ✨ Magical night lighting for evening swims

**Pool-Side Amenities:**
• Dining table for 8 guests
• BBQ for al fresco cooking
• Bluetooth speakers for music
• Pool towels provided fresh daily

The pool is heated by the Greek sun, typically reaching 24-28°C in summer. Perfect for morning swims, lazy afternoons, or sunset cocktails!

Swipe through to see the pool area!`,
    priority: 10,
    followUpAction: 'booking',
    images: VILLA_IMAGES.pool,
  },

  // ---- VIEWS ----
  {
    category: 'views',
    keywords: ['view', 'views', 'sunset', 'sea', 'panoramic', 'scenery', 'beautiful', 'scenic'],
    response: `The views from Villa Olivia Clara are absolutely **breathtaking**! 🌅

**What You'll See:**
• 🌊 The deep blue Aegean Sea stretching to the horizon
• 🏝️ Neighboring Cycladic islands on clear days
• 🌅 Spectacular sunsets every evening
• ⛵ Sailing boats passing by
• 🦅 Local birds soaring above

**Best Viewing Spots at the Villa:**
1. **Pool Cabana** — Eye-level with the sea
2. **Upper Terrace** — 360° panoramic views
3. **Master Bedroom** — Wake up to the sea
4. **Sunset Terrace** — Perfect for evening drinks

The golden hour here is magical — deep oranges, pinks, and purples paint the sky every evening. Guests often say the sunset alone is worth the trip!

Take a look at these stunning views!`,
    priority: 10,
    followUpAction: 'booking',
    images: VILLA_IMAGES.views,
  },

  // ---- BEDROOMS ----
  {
    category: 'bedrooms',
    keywords: ['bedroom', 'bed', 'sleep', 'guests', 'capacity', 'people', 'accommodate', 'how many', 'rooms', 'king', 'single', 'master'],
    response: `Villa Olivia Clara has **3 beautiful bedrooms** sleeping up to **8 guests**:

**🛏️ Main House - Upper Level:**
• **Master Suite** — King bed, en-suite bathroom, private balcony with sea views, walk-in closet
• **Standard Bedroom** — King bed, garden views, shared bathroom access

**🛏️ Guest Quarters - Lower Level:**
• **Guest Master** — King bed, en-suite bathroom, private entrance
• **Guest Room** — 2 single beds (or can be made as king), garden views

**In Every Bedroom:**
• Premium Egyptian cotton linens
• Blackout curtains for restful sleep
• Air conditioning & heating
• USB charging ports
• Extra pillows & blankets
• Wardrobes with hangers
• Baby crib available on request

Linens are changed every 3-4 days, or daily on request!

Swipe to see our bedrooms!`,
    priority: 10,
    followUpAction: 'booking',
    images: VILLA_IMAGES.bedrooms,
  },

  // ---- BATHROOMS ----
  {
    category: 'bathrooms',
    keywords: ['bathroom', 'bath', 'toilet', 'shower', 'wc', 'ensuite'],
    response: `The villa features **2 luxurious full bathrooms** plus a pool bathroom:

**🚿 Master Bathroom:**
• Large walk-in rain shower
• Double vanity with marble countertop
• Luxury toiletries (L'Occitane)
• Heated towel rack
• Full-length mirror

**🚿 Standard Bathroom:**
• Modern glass-enclosed shower
• Designer fixtures
• Natural stone details

**🚿 Pool Bathroom:**
• Convenient outdoor access
• Shower for rinsing after swimming
• Fresh towels always available

**Provided Amenities:**
• Premium towels (changed every 3 days)
• Shampoo, conditioner, body wash
• Hairdryer & cotton pads
• Pool towels separate from bath towels

Take a look at our bathroom designs!`,
    priority: 8,
    followUpAction: 'explore',
    images: VILLA_IMAGES.bathrooms,
  },

  // ---- TERRACE & OUTDOOR ----
  {
    category: 'outdoor',
    keywords: ['terrace', 'garden', 'outdoor', 'dining outdoor', 'bbq', 'grill', 'al fresco', 'outside'],
    response: `Villa Olivia Clara has stunning **outdoor living spaces**:

**🌅 Upper Terrace:**
• Stone-paved dining area seating 10
• Built-in BBQ/grill
• Panoramic sunset views
• Ambient evening lighting

**🏊 Pool Terrace:**
• 8 luxury sunbeds with cushions
• Shaded cabana retreat
• Pool-side dining table
• Bar area with wine cooler

**🌿 Mediterranean Garden:**
• 500m² of private grounds
• Bougainvillea, olive trees, lavender
• Stone pathways & traditional details
• Private parking for 2 cars

**Dining Options:**
1. Pool-side breakfast with sea views
2. BBQ dinner on the terrace
3. Romantic candlelit dinner under the stars

The outdoor spaces are perfect for morning yoga, afternoon siestas, or magical Greek evenings!

See our outdoor spaces!`,
    priority: 9,
    followUpAction: 'booking',
    images: VILLA_IMAGES.terrace,
  },

  // ---- LIVING SPACES ----
  {
    category: 'living',
    keywords: ['living', 'kitchen', 'cook', 'cooking', 'lounge', 'indoor', 'inside', 'dining'],
    response: `Our **indoor living spaces** combine comfort with Mediterranean style:

**🛋️ Living Room:**
• Open-plan design with high ceilings
• Comfortable sofa seating for 8
• Smart 65" 4K TV with Netflix
• Bluetooth sound system
• Working fireplace for cooler evenings
• Floor-to-ceiling windows with sea views

**🍳 Fully-Equipped Kitchen:**
• Full-size refrigerator & freezer
• 4-burner gas stove with oven
• Microwave, dishwasher, toaster
• Nespresso coffee machine
• All cookware, utensils, plates provided
• Wine fridge stocked on request

**🍽️ Indoor Dining:**
• Elegant dining table for 8
• Air-conditioned for hot days
• Opens to the outdoor terrace

**Private Chef Available** — Contact Elena to arrange authentic Greek cooking in-villa!

Explore our living spaces!`,
    priority: 8,
    followUpAction: 'contact',
    images: VILLA_IMAGES.living,
  },

  // ---- BOOKING ----
  {
    category: 'booking',
    keywords: ['book', 'booking', 'reserve', 'reservation', 'price', 'cost', 'rate', 'availability', 'dates', 'stay', 'how much'],
    response: `Ready to book your stay at Villa Olivia Clara? 🌴

**How to Book:**
1. [book.villaoliviaclara.com](https://book.villaoliviaclara.com) — Instant confirmation
2. [Contact Elena directly](/contact) — Best rates & flexibility

**Season & Rates:**
• High Season: July-August (book 3-6 months ahead!)
• Shoulder Season: May-June, Sept-Oct (great rates)
• Minimum stay: 3-7 nights depending on season

**What's Included:**
• Welcome package with local treats
• Daily pool towel refresh
• Linen change every 3-4 days
• Free WiFi & parking
• Full use of all amenities

**Direct Booking Benefits:**
• Best price guarantee
• Flexible cancellation
• Airport/port transfer arrangement
• Personalized recommendations

Contact Elena now to check availability — summer dates book fast!`,
    priority: 10,
    followUpAction: 'booking',
  },

  // ---- CONTACT & HOST ----
  {
    category: 'contact',
    keywords: ['contact', 'elena', 'host', 'phone', 'email', 'call', 'reach', 'message', 'inquiry', 'question', 'owner'],
    response: `Your host **Elena Philippou** would love to welcome you! 👋

**📧 Email:** elena@villaoliviaclara.com
**📞 Phone/WhatsApp:** +30 697 191 9382

**About Elena:**
Elena's family has called Sifnos home since the 1800s. She originally built Villa Olivia Clara as her family's summer retreat and personally welcomes every guest.

*"I am delighted to welcome you to Sifnos! Feel free to reach out and I will gladly help you plan your ideal vacation. From restaurant reservations to boat trips, I love sharing the best of my island with guests."* — Elena

**Elena Can Help With:**
• Booking questions & availability
• Airport/port transfers
• Car rental recommendations
• Restaurant reservations
• Private chef arrangements
• Local activities & hidden gems

Response time is usually within a few hours!`,
    priority: 10,
    followUpAction: 'contact',
  },

  // ---- LOCATION ----
  {
    category: 'location',
    keywords: ['location', 'where', 'address', 'platis gialos', 'near', 'distance', 'beach', 'map', 'directions'],
    response: `Villa Olivia Clara is perfectly located in **Platis Gialos, Sifnos**:

**📍 Address:**
Platis Gialos, Sifnos 840 03, Greece

**Distances from the Villa:**
• 🏖️ **Platis Gialos Beach** — 5 min walk
• 🍽️ **Beach Restaurants** — 5 min walk
• 🛒 **Mini-market** — 3 min drive
• 🏛️ **Apollonia (Main Town)** — 10 min drive
• ⛴️ **Kamares Port** — 15 min drive

**Why Platis Gialos?**
• One of Sifnos' most beautiful sandy beaches
• Calm, shallow waters (perfect for families)
• Excellent beachfront tavernas
• Central location for exploring the island

**Getting Here:**
• Ferry from Athens (Piraeus) — 4-5 hours
• We can arrange port pickup!
• Car rental recommended for exploring

The villa includes **free private parking** for 2 cars.`,
    priority: 9,
    followUpAction: 'contact',
  },

  // ---- AMENITIES ----
  {
    category: 'amenities',
    keywords: ['amenities', 'facilities', 'wifi', 'internet', 'tv', 'air conditioning', 'ac', 'parking', 'service', 'feature', 'include'],
    response: `Villa Olivia Clara offers **5-star amenities**:

**📺 Entertainment:**
• Smart 65" 4K TV with Netflix, Prime Video
• High-speed WiFi (100 Mbps) throughout
• Bluetooth speaker system
• Board games & books

**❄️ Climate Control:**
• A/C in every room (individually controlled)
• Heating for cooler evenings
• Ceiling fans

**🧺 Convenience:**
• Washing machine & iron
• Free private parking (2 cars)
• Safe/lock box

**🧹 Services (on request):**
• Daily housekeeping
• Private chef
• Grocery pre-stocking
• Baby crib & high chair
• Childcare arrangements

**🎁 Welcome Package Includes:**
• Local wine & olive oil
• Fresh fruit & snacks
• Essential groceries
• Beach bag & toys`,
    priority: 9,
    followUpAction: 'booking',
  },

  // ---- GREETINGS ----
  {
    category: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'kalimera', 'yia sou', 'start'],
    response: `Kalimera! ☀️ Welcome to Villa Olivia Clara!

I can help you with:

🏠 **The Villa** — Pool, bedrooms, amenities, photos
📅 **Booking** — Availability, rates, how to reserve
📞 **Contact** — Reach our host Elena directly
📍 **Location** — Where we are & how to get here

**Popular Questions:**
• "How many guests can you fit?"
• "How far is the beach?"
• "Show me the pool"
• "How do I book?"

What would you like to know?`,
    priority: 6,
  },

  // ---- GUESTS CAPACITY ----
  {
    category: 'guests',
    keywords: ['guest', 'guests', 'how many', 'people', 'sleeps', 'capacity', 'fit', 'accommodate', 'sleep'],
    response: `**Villa Olivia Clara sleeps up to 8 guests** 👨‍👩‍👧‍👦

**Bedroom Layout:**
• 🛗 **Master Suite** — King bed, en-suite bathroom, sea views
• 🛗 **Second Bedroom** — Queen bed, en-suite bathroom
• 🛗 **Third Bedroom** — 2 twin beds (can be joined)

**Sleeping Options:**
• 6 guests in 3 bedrooms
• +2 guests on sofa bed in living room

**Perfect For:**
• Families with children
• Groups of friends
• Multi-generational trips

All bedrooms have AC, luxury linens, and blackout curtains!`,
    priority: 10,
    followUpAction: 'booking',
    images: VILLA_IMAGES.bedrooms,
  },

  // ---- BEACH DISTANCE ----
  {
    category: 'beach',
    keywords: ['beach', 'far', 'distance', 'walk', 'close', 'near', 'platis gialos', 'sea', 'sand', 'how far', 'from the beach', 'minutes', 'walking'],
    response: `**Just 5 minutes walk to Platis Gialos Beach!** 🏖️

**Platis Gialos Beach:**
• 🚶 **Distance:** 400m / 5 min walk from villa
• 🏖️ **Type:** Sandy beach with calm, shallow waters
• 👶 **Family-Friendly:** Perfect for kids
• 🍽️ **Facilities:** Sunbeds, tavernas, watersports

**Other Nearby Beaches:**
• Faros Beach — 10 min drive
• Vathi Beach — 15 min drive
• Chrysopigi — 8 min drive

**From the Villa:**
Enjoy sea views from the pool while being close enough to walk to the beach anytime!`,
    priority: 10,
    followUpAction: 'explore',
  },

  // ---- FAMILY ----
  {
    category: 'family',
    keywords: ['family', 'kids', 'children', 'baby', 'child', 'infant', 'safe', 'kid friendly'],
    response: `Villa Olivia Clara is **perfect for families**! 👨‍👩‍👧‍👦

**Family-Friendly Features:**
• 🍼 Baby crib & high chair available
• 🏊 Pool has a shallow entry area
• 🏖️ Nearby beach is calm & sandy (perfect for kids)
• 🏡 Secure, fenced private property
• 🚗 Private parking (no street walking with kids)

**For Children:**
• Beach toys & inflatables
• Board games & books
• Garden space to play
• High chair for mealtimes

**Childcare Services:**
Elena can arrange local babysitters on request, so parents can enjoy a romantic dinner in town!

**Family Activities Nearby:**
• Pottery workshops
• Beach hopping
• Easy hiking trails
• Ice cream in Apollonia!

The calm waters of Platis Gialos are ideal for teaching kids to swim!`,
    priority: 8,
    followUpAction: 'booking',
  },

  // ---- SPECIAL OCCASIONS ----
  {
    category: 'events',
    keywords: ['wedding', 'honeymoon', 'anniversary', 'birthday', 'celebration', 'romantic', 'special', 'proposal'],
    response: `Villa Olivia Clara is perfect for **special occasions**! 💍

**Ideal For:**
• 💑 Romantic honeymoons
• 💐 Anniversary celebrations
• 🎂 Birthday getaways
• 💍 Proposals (we've had many!)
• 👨‍👩‍👧‍👦 Family reunions

**We Can Arrange:**
• 🍽️ Private chef dinners (Greek cuisine)
• 🍷 Wine tasting experiences
• ⛵ Sunset sailing trips
• 📸 Professional photography
• 🌸 Floral decorations
• 🎂 Custom cakes from local bakery

**Romantic Touches:**
• Champagne on arrival
• Rose petals & candles
• Sunset terrace dinner setup
• Couples massage (therapist comes to villa)

Contact Elena to plan your celebration — she loves making occasions special!`,
    priority: 8,
    followUpAction: 'contact',
  },

  // ---- CHECK-IN ----
  {
    category: 'checkin',
    keywords: ['check in', 'check out', 'checkin', 'checkout', 'arrival', 'departure', 'time', 'early', 'late'],
    response: `**Check-in & Check-out:**

🔑 **Check-in:** 3:00 PM
🔑 **Check-out:** 11:00 AM

**Flexible Options:**
• ⏰ Early check-in available (based on availability)
• ⏰ Late check-out possible (just ask!)
• 🧳 Luggage storage if arriving early/leaving late

**Arrival Experience:**
• Elena or her team greets you personally
• Full villa tour & orientation
• Welcome package waiting for you
• Local tips & recommendations shared

**Getting Here:**
• From Kamares Port: 15 min drive
• We can arrange your pickup!
• Detailed directions sent before arrival

Just let Elena know your ferry/arrival time!`,
    priority: 7,
    followUpAction: 'contact',
  },

  // ---- REVIEWS ----
  {
    category: 'reviews',
    keywords: ['review', 'rating', 'feedback', 'recommend', 'experience', 'what do guests say'],
    response: `Villa Olivia Clara has a **perfect 5/5 rating**! ⭐⭐⭐⭐⭐

**What Our Guests Say:**

*"Absolutely loved the pool and stunning views. Elena was amazing — she recommended the best restaurants and even made reservations for us!"* — **Alexis, London 🇬🇧**

*"The best accommodation we have ever had! Every detail was perfect. We didn't want to leave."* — **Li Chuen, Singapore 🇸🇬**

*"A true gem in Sifnos. The villa exceeded all expectations. Already planning our return trip!"* — **Savvas, Athens 🇬🇷**

*"Perfect for our family — the kids loved the pool, and the beach is so close. Highly recommend!"* — **Marie, Paris 🇫🇷**

**10+ years** of hosting happy guests from around the world!`,
    priority: 8,
    followUpAction: 'booking',
  },

  // ---- TRANSPORT ----
  {
    category: 'travel',
    keywords: ['ferry', 'port', 'transfer', 'airport', 'get there', 'arrive', 'transport', 'car', 'rent'],
    response: `**Getting to Villa Olivia Clara:**

**⛴️ By Ferry (Most Common):**
• From Athens (Piraeus): 4-5 hours
• High-speed ferries daily (Seajets, Golden Star)
• Book via ferryscanner.com

**✈️ By Air + Ferry:**
• Fly to Athens (ATH)
• Transfer to Piraeus port (45 min)
• Take ferry to Sifnos

**🚗 From Kamares Port:**
• 15 min scenic drive to the villa
• We can arrange pickup!

**🚙 Car Rental:**
• Recommended for exploring the island
• Elena can suggest trusted local rentals
• Free parking at the villa (2 cars)

**Pro Tip:** Book ferries early in July-August — they sell out!

Contact Elena to coordinate your arrival!`,
    priority: 7,
    followUpAction: 'contact',
  },

  // ---- THANKS ----
  {
    category: 'thanks',
    keywords: ['thank', 'thanks', 'thank you', 'bye', 'goodbye', 'helpful', 'great'],
    response: `You're very welcome! 😊

If you have any more questions about Villa Olivia Clara, just ask!

**Ready to Book?**
• 📧 elena@villaoliviaclara.com
• 📞 +30 697 191 9382
• 🌐 [book.villaoliviaclara.com](https://book.villaoliviaclara.com)

We hope to welcome you to Sifnos soon! 🌴☀️`,
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
  images?: readonly string[];
} {
  const message = userMessage.toLowerCase().trim();
  const words = message.split(/\s+/);

  // 1. EXACT MATCH OVERRIDES for Quick Actions (Guaranteed Correctness)
  const EXACT_MATCHES: Record<string, string> = {
    'how many guests can the villa fit?': 'guests',
    'how far is the villa from the beach?': 'beach',
    'show me the pool': 'pool',
    'how many bedrooms?': 'guests', // approximate match to guests/bedrooms
    'how do i book?': 'booking',
    'contact elena': 'contact',
    'tell me about villa olivia clara': 'villa_overview'
  };

  if (EXACT_MATCHES[message]) {
    const category = EXACT_MATCHES[message];
    const entry = VILLA_KNOWLEDGE_BASE.find(e => e.category === category);
    if (entry) {
      return {
        response: entry.response,
        followUpAction: entry.followUpAction,
        images: entry.images,
      };
    }
  }

  // 2. FUZZY MATCHING (Improved Algorithm)
  let bestMatch: KnowledgeEntry | null = null;
  let highestScore = 0;

  for (const entry of VILLA_KNOWLEDGE_BASE) {
    let matchedKeywords = 0;
    let phraseMatches = 0;
    let score = 0;

    for (const keyword of entry.keywords) {
      const kw = keyword.toLowerCase();
      if (message.includes(kw)) {
        matchedKeywords++;

        // Phrase keywords (with spaces) get HUGE bonus - these are very specific
        if (kw.includes(' ')) {
          phraseMatches++;
          score += 50; // Massive bonus for phrase match
        } else if (words.includes(kw)) {
          // Exact single word match
          score += entry.priority + 5;
        } else {
          // Partial match (substring)
          score += entry.priority;
        }
      }
    }

    // Bonus for multiple keywords matching
    if (matchedKeywords >= 2) {
      score += matchedKeywords * 3;
    }

    // Extra bonus if we matched any phrase keywords
    if (phraseMatches > 0) {
      score += phraseMatches * 20;
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && highestScore > 0) {
    return {
      response: bestMatch.response,
      followUpAction: bestMatch.followUpAction,
      images: bestMatch.images,
    };
  }

  return {
    response: `I'd be happy to help with Villa Olivia Clara!

I can show you:
• 🏠 The villa & amenities
• 🏊 Pool & stunning views
• 🛏️ Bedrooms (sleeps 8)
• 📅 Booking info
• 📞 Contact Elena

Try asking "show me the pool" or "tell me about bedrooms"!`,
    followUpAction: 'explore',
  };
}