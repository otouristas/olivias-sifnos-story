import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';

// Import village photos
import apollonia from '@/assets/Sifnos/villages/apollonia.webp';
import kastro from '@/assets/Sifnos/villages/kastro.webp';
import artemonas from '@/assets/Sifnos/villages/artemonas.webp';
import exampela from '@/assets/Sifnos/villages/exampela.webp';
import katavati from '@/assets/Sifnos/villages/katavati.webp';
import katoPetali from '@/assets/Sifnos/villages/kato-petali.webp';
import panoPetali from '@/assets/Sifnos/villages/panopetali.webp';
import troullaki from '@/assets/Sifnos/villages/troullaki.webp';
import agiosLoukas from '@/assets/Sifnos/villages/agios-loukaswebp.webp';

// Import beach photos for coastal villages
import kamaresBeach from '@/assets/Sifnos/Beaches/kamares.webp';
import platsGialosBeach from '@/assets/Sifnos/Beaches/plats-gialos.webp';
import vathiBeach from '@/assets/Sifnos/Beaches/vathi.webp';
import farosBeach from '@/assets/Sifnos/Beaches/faros.webp';
import heronissosBeach from '@/assets/Sifnos/Beaches/heronissos.webp';
import chrysopigiBeach from '@/assets/Sifnos/Beaches/chrysopigi.webp';

const Sifnos = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('seo.sifnos.title')}
        description={t('seo.sifnos.description')}
        keywords={t('seo.sifnos.keywords')}
        ogImage="https://villaoliviaclara.com/src/assets/villa-gallery/Villa-Olivia-Clara_043_aerial-view-of-the-villa-wide.jpg"
        canonicalUrl="https://villaoliviaclara.com/sifnos"
        alternateLanguages={[
          { lang: 'en', url: 'https://villaoliviaclara.com/sifnos' },
          { lang: 'el', url: 'https://villaoliviaclara.com/el/sifnos' },
          { lang: 'fr', url: 'https://villaoliviaclara.com/fr/sifnos' },
          { lang: 'it', url: 'https://villaoliviaclara.com/it/sifnos' },
          { lang: 'x-default', url: 'https://villaoliviaclara.com/sifnos' }
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-villa-olive">
            {t('sifnos.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('sifnos.subtitle')}
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-villa-olive">
            Welcome to Sifnos
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Nestled in the heart of the Cyclades, Sifnos is a treasure trove of authentic Greek experiences waiting to be discovered. With its whitewashed villages, golden beaches, vibrant culinary scene, and rich pottery tradition, this island offers a perfect blend of relaxation, culture, and adventure.
            </p>
            <p>
              Unlike its more famous neighbors Mykonos and Santorini, Sifnos has maintained its traditional charm and provides visitors with a more authentic Greek island experience. The island's landscape is a captivating mix of terraced hills, olive groves, and dramatic coastlines dotted with enchanting villages that seem to tumble down to the sea.
            </p>
            <p>
              This travel guide aims to help you navigate the island's many delights, from its pristine beaches and hiking trails to its celebrated restaurants and cultural landmarks. Whether you're planning a family vacation, a romantic getaway, or a solo adventure, Sifnos offers something special for every type of traveler.
            </p>
          </div>
        </div>
      </section>

      {/* Essential Information */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            Why Choose Sifnos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">Authentic Greek Experience</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Unlike its famous neighbors Mykonos and Santorini, Sifnos offers an authentic Greek island experience with traditional charm, world-class cuisine, and peaceful atmosphere.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">Culinary Capital</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Known as the gastronomic capital of the Cyclades, Sifnos offers incredible local cuisine, traditional pottery cooking, and some of Greece's best restaurants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Villages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            Charming Villages of Sifnos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={apollonia} 
                  alt="Apollonia village in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Apollonia</h3>
                <p className="text-muted-foreground mb-3">
                  The capital of Sifnos, known for its picturesque streets and vibrant nightlife. This charming village features narrow alleys, white Cycladic houses, and serves as the main hub for shopping, dining, and island administration.
                </p>
                <p className="text-sm text-villa-olive font-medium">Central Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={kastro} 
                  alt="Kastro village in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Kastro</h3>
                <p className="text-muted-foreground mb-3">
                  The medieval capital of Sifnos with impressive architecture and stunning sea views. This historic settlement features well-preserved Venetian architecture, ancient ruins, and the Archaeological Museum.
                </p>
                <p className="text-sm text-villa-olive font-medium">Eastern Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={artemonas} 
                  alt="Artemonas village in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Artemonas</h3>
                <p className="text-muted-foreground mb-3">
                  An elegant village known for its neoclassical mansions and beautiful architecture. Enjoy walking through its narrow streets and beautiful gardens while experiencing authentic island charm.
                </p>
                <p className="text-sm text-villa-olive font-medium">Northern Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={kamaresBeach} 
                  alt="Kamares village and beach in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Kamares</h3>
                <p className="text-muted-foreground mb-3">
                  The main port of Sifnos with a beautiful sandy beach and waterfront restaurants. This coastal village serves as the main arrival point and offers excellent amenities for visitors.
                </p>
                <p className="text-sm text-villa-olive font-medium">Western Sifnos (Port)</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={platsGialosBeach} 
                  alt="Platis Gialos village and beach in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Platis Gialos</h3>
                <p className="text-muted-foreground mb-3">
                  One of the most popular beaches with golden sand and shallow waters perfect for families. This coastal area offers excellent swimming conditions and family-friendly amenities.
                </p>
                <p className="text-sm text-villa-olive font-medium">Southern Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={vathiBeach} 
                  alt="Vathi village and beach in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Vathi</h3>
                <p className="text-muted-foreground mb-3">
                  A tranquil fishing village with a sheltered bay, sandy beach, and peaceful atmosphere. This coastal settlement offers visitors a serene escape with authentic island charm.
                </p>
                <p className="text-sm text-villa-olive font-medium">Western Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={farosBeach} 
                  alt="Faros village and beach in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Faros</h3>
                <p className="text-muted-foreground mb-3">
                  A charming coastal settlement with three beautiful beaches and a relaxed atmosphere. This traditional fishing village offers visitors authentic island experiences and stunning coastal views.
                </p>
                <p className="text-sm text-villa-olive font-medium">Southeastern Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={heronissosBeach} 
                  alt="Herronisos village and beach in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Herronisos</h3>
                <p className="text-muted-foreground mb-3">
                  A remote fishing village on the northern tip of the island with authentic charm. This secluded settlement offers visitors a genuine experience of traditional island life away from tourist areas.
                </p>
                <p className="text-sm text-villa-olive font-medium">Northern Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={chrysopigiBeach} 
                  alt="Chrysopigi monastery and area in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Chrysopigi</h3>
                <p className="text-muted-foreground mb-3">
                  A scenic area famous for its iconic monastery and beautiful beaches. This picturesque location offers visitors stunning natural beauty and spiritual significance with its historic monastery.
                </p>
                <p className="text-sm text-villa-olive font-medium">Southeastern Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={exampela} 
                  alt="Exambela village in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Exambela</h3>
                <p className="text-muted-foreground mb-3">
                  A traditional village with panoramic views and authentic Cycladic character. This charming settlement offers visitors a glimpse into traditional island life with its stone houses and winding paths.
                </p>
                <p className="text-sm text-villa-olive font-medium">Central Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={katavati} 
                  alt="Katavati village in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Katavati</h3>
                <p className="text-muted-foreground mb-3">
                  A picturesque inland village with traditional character and central location. This charming settlement offers authentic island atmosphere with its traditional architecture and peaceful surroundings.
                </p>
                <p className="text-sm text-villa-olive font-medium">Central Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={katoPetali} 
                  alt="Kato Petali village in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Kato Petali</h3>
                <p className="text-muted-foreground mb-3">
                  A quiet village with traditional character near the island's capital. This peaceful settlement offers visitors a serene escape with its authentic atmosphere and close proximity to Apollonia.
                </p>
                <p className="text-sm text-villa-olive font-medium">Central Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={panoPetali} 
                  alt="Pano Petali village in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Pano Petali</h3>
                <p className="text-muted-foreground mb-3">
                  An elevated village offering spectacular views and traditional atmosphere. This charming settlement provides breathtaking panoramas of the island and authentic Cycladic architecture.
                </p>
                <p className="text-sm text-villa-olive font-medium">Central Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={troullaki} 
                  alt="Troullaki village in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Troullaki</h3>
                <p className="text-muted-foreground mb-3">
                  A small, peaceful settlement with rural charm and natural beauty. This tranquil village offers visitors an authentic experience of traditional island life away from the tourist crowds.
                </p>
                <p className="text-sm text-villa-olive font-medium">Northern Sifnos</p>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={agiosLoukas} 
                  alt="Agios Loukas village in Sifnos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-3">Agios Loukas</h3>
                <p className="text-muted-foreground mb-3">
                  A small, quiet settlement offering authentic island living and scenic views. This peaceful village provides visitors with a genuine experience of traditional Cycladic life and stunning landscapes.
                </p>
                <p className="text-sm text-villa-olive font-medium">Central Sifnos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal Travel Tips */}
      <section className="py-20 bg-villa-olive-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            Seasonal Travel Tips
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-villa-olive mb-6">Summer (June - September)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2">•</span>
                    Book accommodations well in advance as this is the peak season.
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2">•</span>
                    Temperatures range from 25°C to 35°C (77°F to 95°F). Bring lightweight clothing, sun protection, and plenty of swimwear.
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2">•</span>
                    Visit popular beaches early in the morning or late afternoon to avoid crowds.
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2">•</span>
                    Make restaurant reservations, especially in Apollonia and at popular seaside tavernas.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-villa-olive mb-6">Spring & Autumn (April-May, Oct-Nov)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2">•</span>
                    Perfect for hiking and exploring the island's nature as temperatures are mild (18°C to 25°C).
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2">•</span>
                    Less crowded, with better rates on accommodations.
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2">•</span>
                    Spring offers beautiful wildflowers, while autumn provides warmer sea temperatures.
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-olive mr-2">•</span>
                    Be prepared for reduced ferry schedules and some closed businesses, especially in late autumn.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            Island Activities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-villa-stone shadow-soft hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-villa-olive-light rounded-full flex items-center justify-center">
                    <span className="text-villa-olive text-xl">🏖️</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-villa-olive">Beach Exploration</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Discover Sifnos' stunning beaches from the golden sands of Platis Gialos to the secluded coves of Vathi.
                </p>
                <Button asChild variant="villa-outline">
                  <Link to="/sifnos/beaches">Explore Beaches</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-villa-stone shadow-soft hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-villa-olive-light rounded-full flex items-center justify-center">
                    <span className="text-villa-olive text-xl">⛵</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-villa-olive">Boat Tours</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Experience the magic of island hopping with private boat tours to Poliegos, Kimolos, and Milos.
                </p>
                <Button asChild variant="villa-outline">
                  <Link to="/sifnos/boat-tours">Discover Boat Tours</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Sifnos?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Begin your Sifnos adventure from the perfect home base. Villa Olivia Clara in Platis Gialos 
            is ideally located for exploring all the wonders the island has to offer.
          </p>
          <Button asChild size="lg" variant="villa-outline">
            <Link to="/contact">Book Your Stay at Villa Olivia Clara →</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Sifnos;