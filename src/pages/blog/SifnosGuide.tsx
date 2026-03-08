import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';
import { ArticleStructuredData } from '@/components/StructuredDataSchemas';
import { Calendar, User, Clock, ArrowLeft, MapPin, Star, Camera } from 'lucide-react';

// Using existing images
import heroImage from '@/assets/Sifnos/Beaches/plats-gialos.webp';
import beachImage1 from '@/assets/Sifnos/Beaches/chrysopigi.webp';
import beachImage2 from '@/assets/Sifnos/Beaches/vathi.webp';
import villageImage from '@/assets/Sifnos/villages/apollonia.webp';

const blogSlugs: Record<string, string> = {
  en: 'ultimate-guide-sifnos-greece-luxury-villa-vacation',
  el: 'οδηγος-σιφνου-ελλαδα-πολυτελης-βιλα',
  fr: 'guide-sifnos-grece-villa-luxe',
  it: 'guida-sifnos-grecia-villa-lusso',
};

const SifnosGuide = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;
  const currentSlug = blogSlugs[currentLang] || blogSlugs.en;

  return (
    <div className="min-h-screen bg-background">
      <ArticleStructuredData
        title="The Ultimate Guide to Sifnos, Greece 2026: Your Perfect Luxury Villa Vacation"
        description="Discover why Sifnos is the Greek island paradise you've been searching for. Beaches, cuisine, and tips for a luxury villa stay."
        image="/villa-olivia-clara-logo.webp"
        publishDate="2025-11-18"
        modifiedDate="2025-11-18"
        author="Elena Philippou"
        slug="sifnos-guide-greece-luxury-villa"
      />
      <SEOHead
        title="The Ultimate Guide to Sifnos, Greece 2026 | Villa Olivia Clara"
        description="Discover why Sifnos is the Greek island paradise you've been searching for. Beaches, cuisine, and tips for a luxury villa stay."
        keywords="Sifnos guide, Greece travel, Cyclades islands, luxury villa, Greek beaches, Apollonia, Platis Gialos"
        ogImage="/villa-olivia-clara-logo.webp"
        canonicalUrl={`https://villaoliviaclara.com${langPrefix}/blog/${currentSlug}`}
        alternateLanguages={[
          { lang: 'en', url: `https://villaoliviaclara.com/blog/${blogSlugs.en}` },
          { lang: 'el', url: `https://villaoliviaclara.com/el/blog/${blogSlugs.el}` },
          { lang: 'fr', url: `https://villaoliviaclara.com/fr/blog/${blogSlugs.fr}` },
          { lang: 'it', url: `https://villaoliviaclara.com/it/blog/${blogSlugs.it}` },
          { lang: 'x-default', url: `https://villaoliviaclara.com/blog/${blogSlugs.en}` }
        ]}
      />
      <Navigation />
      
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50"
      >
        Skip to content
      </a>

      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Button asChild variant="villa-ghost" size="sm">
            <Link to="/blog">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12" id="main-content">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="bg-villa-olive text-white px-3 py-1 rounded-full font-medium">
              Travel Guide
            </span>
            <span className="bg-villa-olive-light text-villa-olive px-3 py-1 rounded-full font-medium">
              Featured
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-villa-olive mb-6 leading-tight">
            The Ultimate Guide to Sifnos, Greece 2026: Your Perfect Luxury Villa Vacation
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover why Sifnos is the Greek island paradise you've been searching for. From pristine beaches to authentic cuisine, learn everything you need to know for an unforgettable luxury villa stay.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Elena Philippou</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2025-11-18">November 18, 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>8 min read</span>
            </div>
          </div>

          <img 
            src={heroImage} 
            alt="Beautiful Platis Gialos beach in Sifnos, Greece with crystal clear waters"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-elegant mb-8"
          />
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Nestled in the heart of the Cyclades, Sifnos is a hidden gem that offers the perfect blend of authentic Greek culture, stunning natural beauty, and luxurious accommodations. As your hosts at Villa Olivia Clara, we've called this magical island home for generations, and we're excited to share our insider knowledge with you.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Unlike the more touristy Greek islands, Sifnos maintains its authentic charm while providing all the amenities modern travelers expect. With its renowned culinary scene, pristine beaches, and rich cultural heritage, Sifnos is the ideal destination for discerning travelers seeking an authentic Greek island experience.
            </p>
          </div>

          {/* Why Choose Sifnos Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Why Sifnos Should Be Your Next Greek Island Destination</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <Star className="text-villa-olive mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Culinary Paradise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sifnos is renowned throughout Greece for its exceptional cuisine. The island's chefs have perfected traditional recipes passed down through generations, creating dishes that showcase the finest local ingredients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <MapPin className="text-villa-olive mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Perfect Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategically located in the western Cyclades, Sifnos offers easy access to neighboring islands while maintaining its peaceful, authentic atmosphere away from mass tourism.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Beaches Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">The Most Beautiful Beaches in Sifnos</h2>
            
            <div className="space-y-8">
              <div className="md:flex gap-8 items-center">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <img 
                    src={beachImage1} 
                    alt="Chrysopigi Beach, famous monastery beach in Sifnos"
                    className="w-full h-64 object-cover rounded-lg shadow-soft"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-villa-olive mb-3">Chrysopigi Beach</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Home to the iconic Chrysopigi Monastery, this beach combines spiritual significance with natural beauty. The crystal-clear waters and dramatic cliff formations make it one of Sifnos' most photographed locations.
                  </p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Perfect for photography enthusiasts</li>
                    <li>• Excellent snorkeling opportunities</li>
                    <li>• Traditional tavernas nearby</li>
                  </ul>
                </div>
              </div>

              <div className="md:flex gap-8 items-center">
                <div className="md:w-1/2 order-2 mb-4 md:mb-0">
                  <img 
                    src={beachImage2} 
                    alt="Vathi Beach, secluded bay perfect for swimming in Sifnos"
                    className="w-full h-64 object-cover rounded-lg shadow-soft"
                  />
                </div>
                <div className="md:w-1/2 order-1">
                  <h3 className="text-2xl font-semibold text-villa-olive mb-3">Vathi Beach</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A secluded bay surrounded by hills, Vathi offers the perfect escape for those seeking tranquility. The protected waters make it ideal for families and those looking for a peaceful swimming experience.
                  </p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Calm, protected waters</li>
                    <li>• Family-friendly environment</li>
                    <li>• Stunning sunset views</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cultural Experiences */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Cultural Experiences You Can't Miss</h2>
            
            <div className="bg-sand-light p-8 rounded-lg mb-8">
              <img 
                src={villageImage} 
                alt="Traditional Cycladic architecture in Apollonia village, Sifnos"
                className="w-full h-48 object-cover rounded-lg shadow-soft mb-6"
              />
              <h3 className="text-2xl font-semibold text-villa-olive mb-4">Explore Apollonia</h3>
              <p className="text-muted-foreground leading-relaxed">
                The capital of Sifnos, Apollonia, is a perfect example of Cycladic architecture with its white-washed buildings, narrow cobblestone streets, and vibrant local life. Spend an evening wandering through the village, discovering local artisan shops and traditional tavernas.
              </p>
            </div>
          </section>

          {/* Villa Olivia Clara Connection */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-villa-olive-light to-sand p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-villa-olive mb-6">Experience Sifnos from Villa Olivia Clara</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Located in the heart of Platis Gialos, Villa Olivia Clara offers the perfect base for exploring all that Sifnos has to offer. With stunning views of the bay and easy access to the island's best beaches, restaurants, and cultural sites, our villa provides the luxury and comfort you deserve.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-villa-olive mb-2">From Our Villa:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 7-minute walk to Platis Gialos beach</li>
                    <li>• 15 minutes to Apollonia center</li>
                    <li>• 25 minutes to the port of Kamares</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-villa-olive mb-2">Villa Features:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Panoramic sea views</li>
                    <li>• Private pool and cabana</li>
                    <li>• Luxury accommodations for 8 guests</li>
                  </ul>
                </div>
              </div>
              
              <Button asChild variant="villa" size="lg">
                <Link to="/villa">Explore Our Villa</Link>
              </Button>
            </div>
          </section>

          {/* Planning Your Visit */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Planning Your Sifnos Vacation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Best Time to Visit</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    May through October offers the best weather, with July and August being peak season. For fewer crowds and perfect weather, consider visiting in May, June, or September.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Getting There</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ferries run regularly from Piraeus (Athens) and other Cycladic islands. The journey from Athens takes approximately 3-5 hours depending on the ferry type.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Getting Around</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Rent a car or ATV for maximum flexibility. Public buses connect major villages, and taxis are available for shorter distances.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Author Bio */}
        <div className="border-t border-villa-stone pt-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center">
              <User size={24} className="text-villa-olive" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-2">Elena Philippou</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Elena has been spending her summers in Sifnos since she was young. She has been welcoming guests to Villa Olivia Clara for over a decade. Her deep knowledge of the island and passion for hospitality ensure every guest experiences the authentic beauty of Sifnos.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-subtle p-8 rounded-lg text-center border border-villa-stone">
          <h3 className="text-2xl font-bold mb-4 text-villa-olive">Ready to Discover Sifnos?</h3>
          <p className="mb-6 text-muted-foreground">
            Book your stay at Villa Olivia Clara and experience the magic of Sifnos with the comfort of luxury accommodations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="villa">
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="villa-outline">
              <Link to="/villa">Tour Our Villa</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default SifnosGuide;