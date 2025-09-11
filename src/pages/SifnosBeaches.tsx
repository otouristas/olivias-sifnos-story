import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

// Import beach photos
import platsGialos from '@/assets/Sifnos/Beaches/plats-gialos.webp';
import kamares from '@/assets/Sifnos/Beaches/kamares.webp';
import vathi from '@/assets/Sifnos/Beaches/vathi.webp';
import chrysopigi from '@/assets/Sifnos/Beaches/chrysopigi.webp';
import faros from '@/assets/Sifnos/Beaches/faros.webp';
import heronissos from '@/assets/Sifnos/Beaches/heronissos.webp';
import vroulidia from '@/assets/Sifnos/Beaches/vroulidia.webp';
import fykiada from '@/assets/Sifnos/Beaches/fykiada.webp';

const SifnosBeaches = () => {
  const beaches = [
    {
      name: 'Platis Gialos',
      location: 'Southern Sifnos',
      description: 'One of the largest and most popular sandy beaches on Sifnos, especially beloved by Greek visitors. It consistently earns the Blue Flag from the FEE, thanks to its compliance with 32 strict environmental and quality criteria.',
      highlights: [
        'Blue Flag awarded beach',
        'White Tower (ancient beacon) nearby',
        'Hiking routes to southern villages',
        'View of Kitriani islet with ancient church'
      ],
      facilities: [
        'Sunbeds & Umbrellas',
        'Restaurants',
        'Water Sports',
        'Beach Bars',
        'Shops',
        'Pottery Studios'
      ],
      access: 'Bus service from Apollonia or by car with parking available',
      windProtection: 'Moderate - protected from north winds',
      perfectFor: ['Families', 'Swimming', 'Food Lovers', 'Blue Flag Beach'],
      image: platsGialos
    },
    {
      name: 'Kamares',
      location: 'Western Sifnos (Port)',
      description: 'The main port of Sifnos and the island\'s largest coastal village, just 5 km from the capital Apollonia. As the main arrival point, it offers the highest concentration of hotels, rooms to let, tavernas, grocery stores, cafés, bakeries, pottery workshops, and tourist services.',
      highlights: [
        'Main arrival port for ferries',
        'Starting point for scenic hiking routes',
        'Trails to Church of the Nymfon and Mavri Spilia (Black Cave)',
        'Connection to NATURA protected areas'
      ],
      facilities: [
        'Sunbeds & Umbrellas',
        'Restaurants',
        'Beach Bars',
        'Shops',
        'Natural Shade',
        'Port Authority',
        'Municipal Information Office',
        'Grocery Stores',
        'Bakeries',
        'Pottery Workshops'
      ],
      access: 'Main port arrival point, walking distance from the port, bus service from Apollonia',
      windProtection: 'Good - protected bay',
      perfectFor: ['Convenience', 'Families', 'Port Proximity', 'Hiking'],
      image: kamares
    },
    {
      name: 'Vathi',
      location: 'Western Sifnos',
      description: 'Located 10 km west of Apollonia, Vathi is a peaceful coastal village known for its wide, sandy beach and tranquil vibe. Once a major pottery hub, the village retains its artisanal charm.',
      highlights: [
        'Prehistoric archaeological site',
        'Rare sand lilies (August blooming)',
        '16th-century Church of Taxiarches',
        'Hiking trails to Platy Gialos and Fykiada'
      ],
      facilities: [
        'Sunbeds & Umbrellas',
        'Restaurants',
        'Beach Bars',
        'Natural Shade',
        'Pottery Studios'
      ],
      access: 'Bus service from Apollonia, road access with parking',
      windProtection: 'Excellent - one of the most sheltered beaches',
      perfectFor: ['Tranquility', 'Scenery', 'Swimming', 'Archaeology', 'Nature'],
      image: vathi
    },
    {
      name: 'Chrysopigi',
      location: 'Southeastern Sifnos',
      description: 'Located 10 km from Apollonia, near Platy Gialos, Chrysopigi is the most photographed and revered location on the island. It\'s home to the Monastery of Panagia Chrysopigi (1523), the patron saint of Sifnos.',
      highlights: [
        'Monastery of Panagia Chrysopigi (1523)',
        'Patron saint of Sifnos',
        'Annual religious festival',
        'Nearby White Tower ancient beacon'
      ],
      facilities: [
        'Restaurant',
        'Limited Sunbeds',
        'Monastery'
      ],
      access: 'Bus to Faros then 15-minute walk, or drive with limited parking',
      windProtection: 'Moderate - depends on which side of the peninsula',
      perfectFor: ['Photography', 'Snorkeling', 'Natural Beauty', 'Religious Interest'],
      image: chrysopigi
    },
    {
      name: 'Faros',
      location: 'Southeastern Sifnos',
      description: 'Seven kilometers from Apollonia, Faros is a traditional fishing village and once the main port of Sifnos. Named after the ancient lighthouse (\'faros\'), it offers serene beaches and cultural experiences.',
      highlights: [
        'Traditional fishing village',
        'Ancient lighthouse history',
        'Monastery of Stavros on Fasolou beach',
        'Hiking trails to Agios Andreas Acropolis and Kastro'
      ],
      facilities: [
        'Sunbeds & Umbrellas',
        'Restaurants',
        'Natural Shade',
        'Lit Walking Path'
      ],
      access: 'Bus service from Apollonia, road access with parking',
      windProtection: 'Good - sheltered bay',
      perfectFor: ['Relaxation', 'Swimming', 'Local Atmosphere', 'Coastal Walks'],
      image: faros
    },
    {
      name: 'Herronisos',
      location: 'Northern Sifnos',
      description: 'The northernmost beach of Sifnos, 15 km from Apollonia, Herronisos is a secluded fishing village famed for its peaceful atmosphere, traditional pottery, and small beach.',
      highlights: [
        'Northernmost beach on the island',
        'Traditional fishing village',
        'Ancient beacon tower',
        'Agios Georgios church'
      ],
      facilities: [
        'Small Tavernas',
        'Traditional Pottery'
      ],
      access: 'Limited bus service, better accessible by car with parking',
      windProtection: 'Moderate - exposed to north winds',
      perfectFor: ['Seclusion', 'Traditional Charm', 'Pottery'],
      image: heronissos
    },
    {
      name: 'Vroulidia',
      location: 'Northern Sifnos',
      description: 'Located just 1 km from Herronisos and 14 km from Apollonia, Vroulidia is a tranquil pebble beach ideal for relaxation. It offers two seaside cafés that provide umbrellas and sunbeds for visitors.',
      highlights: [
        'Tranquil pebble beach',
        'Crystal clear waters',
        'Unspoiled natural setting'
      ],
      facilities: [
        'Two Seaside Cafés',
        'Umbrellas & Sunbeds'
      ],
      access: 'Dirt road access with limited parking, then 10-minute hike down',
      windProtection: 'Poor - exposed to south winds',
      perfectFor: ['Seclusion', 'Natural Beauty', 'Snorkeling', 'Peace and Quiet'],
      image: vroulidia
    },
    {
      name: 'Fykiada',
      location: 'Between Platy Gialos and Vathi',
      description: 'A secluded sandy beach accessible only by sea or hiking trails from Platy Gialos and Vathi. Near the beach stands the chapel of Agios Georgios and one of the island\'s oldest olive trees.',
      highlights: [
        'Completely undeveloped beach',
        'Ancient olive tree',
        'Chapel of Agios Georgios',
        'Only accessible by hiking or boat'
      ],
      facilities: [
        'None - Unspoiled Beach'
      ],
      access: 'Only by foot via hiking trails from Platy Gialos or Vathi, or by boat',
      windProtection: 'Variable - somewhat exposed',
      perfectFor: ['Adventure', 'Hiking', 'Complete Seclusion'],
      image: fykiada
    }
  ];

  const faqs = [
    {
      question: 'Which is the best beach for families on Sifnos?',
      answer: 'Platy Gialos and Kamares are ideal for families thanks to their wide sandy shores, shallow waters, and full amenities.'
    },
    {
      question: 'Where can I find traditional pottery workshops?',
      answer: 'Pottery lovers should visit Kamares, Faros, and Herronisos, where authentic workshops operate year-round.'
    },
    {
      question: 'Are there hiking trails starting from the beach villages?',
      answer: 'Yes! Kamares, Faros, Vathi, and Platy Gialos all serve as trailheads for scenic routes across Sifnos.'
    },
    {
      question: 'What is the most famous church on Sifnos?',
      answer: 'The Monastery of Panagia Chrysopigi is the island\'s most iconic religious site and patron saint, celebrated with a major annual festival.'
    },
    {
      question: 'Can I access Fykiada beach by car?',
      answer: 'No, Fykiada is only reachable by foot or by boat, offering a serene, crowd-free experience.'
    },
    {
      question: 'Are there Blue Flag beaches on Sifnos?',
      answer: 'Yes, Platy Gialos consistently earns the Blue Flag award for cleanliness, safety, and eco-friendliness.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sifnos Beaches Guide | Best Beaches in Sifnos, Greece | Blue Flag Beaches"
        description="Discover the best beaches in Sifnos, Greece. Blue Flag Platis Gialos, Chrysopigi, Vathi, Kamares, Faros, Heronissos. Complete beach guide with photos, amenities, and access info."
        keywords="Sifnos beaches, Platis Gialos beach, Chrysopigi Sifnos, Vathi beach, Kamares beach, Blue Flag beaches Greece, Cyclades beaches, Greek island beaches"
        canonicalUrl="https://villaoliviaclara.com/sifnos/beaches"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-villa-olive">
            Beaches of Sifnos Island
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover the pristine golden shores, crystal clear waters, and hidden coves of this enchanting Cycladic island
          </p>
          <div className="text-lg text-muted-foreground space-y-4">
            <p>
              Sifnos is blessed with some of the most beautiful beaches in the Cyclades, ranging from long stretches of golden sand to intimate coves framed by dramatic cliffs. The island's varied coastline offers options for every preference – whether you seek vibrant beach bars and water sports or secluded spots for quiet relaxation.
            </p>
            <p>
              Most beaches on Sifnos feature crystal-clear waters in stunning shades of blue and turquoise. Many are easily accessible by car or public transportation, while others reward adventurous travelers with natural beauty and privacy after a short hike. Regardless of where you choose to swim, Sifnos beaches offer unforgettable experiences with their unique Cycladic charm.
            </p>
          </div>
        </div>
      </section>

      {/* Beaches Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            Explore Our Beautiful Beaches
          </h2>
          
          <div className="space-y-16">
            {beaches.map((beach, index) => (
              <Card key={index} className="border-villa-stone shadow-soft overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image Section */}
                  <div className="lg:col-span-1 bg-villa-olive-light p-0 overflow-hidden relative">
                    <img 
                      src={beach.image} 
                      alt={`${beach.name} beach in Sifnos`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{beach.name}</h3>
                      <p className="text-white/90 font-medium">{beach.location}</p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:col-span-2 p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {beach.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Key Highlights */}
                      <div>
                        <h4 className="text-lg font-semibold text-villa-olive mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {beach.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <span className="text-villa-olive mr-2 mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Facilities */}
                      <div>
                        <h4 className="text-lg font-semibold text-villa-olive mb-3">Facilities</h4>
                        <div className="flex flex-wrap gap-2">
                          {beach.facilities.map((facility, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {facility}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-villa-olive mb-1">Access</h5>
                        <p className="text-muted-foreground">{beach.access}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-villa-olive mb-1">Wind Protection</h5>
                        <p className="text-muted-foreground">{beach.windProtection}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-villa-olive mb-1">Perfect For</h5>
                        <div className="flex flex-wrap gap-1">
                          {beach.perfectFor.map((item, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-villa-olive-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            Frequently Asked Questions About Sifnos Beaches
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            Beach Safety Tips
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-villa-stone shadow-soft">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-villa-olive">Stay Safe at Sifnos Beaches</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2 mt-1">•</span>
                    Use sunscreen (SPF 30+) and reapply every 2 hours, especially after swimming
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2 mt-1">•</span>
                    Stay hydrated by drinking plenty of water throughout the day
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2 mt-1">•</span>
                    Be cautious of strong winds which can create challenging swimming conditions
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2 mt-1">•</span>
                    Not all beaches have lifeguards - supervise children at all times
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-villa-olive">Environmental Consciousness</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2 mt-1">•</span>
                    Take all trash with you when leaving the beach
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2 mt-1">•</span>
                    Avoid removing pebbles, shells, or any natural elements
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2 mt-1">•</span>
                    Use reef-safe sunscreen to protect marine life
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2 mt-1">•</span>
                    Respect local wildlife and marine ecosystems
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Boat Tours Section */}
      <section className="py-20 bg-villa-olive-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-villa-olive mb-4">
              Explore Beyond the Beaches
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take your Sifnos experience to the next level with private boat tours to neighboring islands and hidden coastal gems.
            </p>
          </div>
          
          <Card className="border-villa-stone shadow-soft">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-villa-olive mb-4">Private Boat Tours</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Discover the magic of island hopping with private boat tours to Poliegos, Kimolos, and Milos. 
                    Each island offers unique experiences - from the wild beauty of Poliegos to the charming villages of Kimolos.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-villa-olive">⛵</span>
                      <span className="text-muted-foreground">Visit uninhabited islands and hidden coves</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-villa-olive">🏊</span>
                      <span className="text-muted-foreground">Snorkel in crystal-clear waters</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-villa-olive">📸</span>
                      <span className="text-muted-foreground">Capture stunning coastal landscapes</span>
                    </div>
                  </div>
                  <Button asChild variant="villa" size="lg">
                    <Link to="/sifnos/boat-tours">Discover Boat Tours</Link>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-villa-olive-light to-sand-light p-6 rounded-lg text-center">
                  <div className="text-6xl mb-4">🏝️</div>
                  <h4 className="text-lg font-semibold text-villa-olive mb-2">Island Hopping</h4>
                  <p className="text-muted-foreground text-sm">
                    Experience the authentic beauty of the Cyclades with our recommended boat tour partners.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore Sifnos Beaches?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Stay at Villa Olivia Clara in Platis Gialos and enjoy easy access to some of the most beautiful beaches on Sifnos Island.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="villa-outline">
              <Link to="/contact">Book Your Stay →</Link>
            </Button>
            <Button asChild size="lg" variant="villa-outline">
              <Link to="/sifnos">Discover More About Sifnos →</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SifnosBeaches;
