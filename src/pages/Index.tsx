import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyBookingBar from '@/components/StickyBookingBar';
import CookieConsent from '@/components/CookieConsent';
import { VirtualTour } from '@/components/VirtualTour';
import { BackToTop } from '@/components/BackToTop';
import { HeroImage, VillaImage } from '@/components/LazyImage';
import { LocalBusinessStructuredData } from '@/components/StructuredData';
import SEOHead from '@/components/SEOHead';
import { ChevronDown, Calendar, Eye, Users, MapPin, Wifi, Shield, Star, Waves, Home, ChefHat } from 'lucide-react';
import heroImage from '@/assets/Sifnos/Beaches/plats-gialos.webp';
import ImageZoom from '@/components/ImageZoom';

// Villa Gallery Images
import poolView from '@/assets/villa-gallery/Villa-Olivia-Clara_001_pool-side-cabana.jpg';
import villaLinens from '@/assets/villa-gallery/Villa-Olivia-Clara_017_bedroom-linen-detail.jpg';
import elenaHost from '@/assets/villa-gallery/Villa-Olivia-Clara_040_dining-at-the-terrace.jpg';
import poolArea from '@/assets/villa-gallery/Villa-Olivia-Clara_003_the-pool-area.jpg';
import livingRoom from '@/assets/villa-gallery/Villa-Olivia-Clara_029_living-room.jpg';
import kitchen from '@/assets/villa-gallery/Villa-Olivia-Clara_034_kitchen.jpg';

const Index = () => {
  const navigate = useNavigate();
  const getDateStringPlusDays = (daysToAdd: number): string => {
    const date: Date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    const year: number = date.getFullYear();
    const month: string = String(date.getMonth() + 1).padStart(2, '0');
    const day: string = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [checkIn, setCheckIn] = useState<string>(getDateStringPlusDays(0));
  const [checkOut, setCheckOut] = useState<string>(getDateStringPlusDays(1));

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    navigate(`/contact?checkIn=${encodeURIComponent(checkIn)}&checkOut=${encodeURIComponent(checkOut)}`);
  }
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Villa Olivia Clara | Luxury Villa Rental in Sifnos, Greece | Book Now"
        description="Experience luxury at Villa Olivia Clara in Sifnos, Greece. Private pool, sea views, 4 bedrooms for 8 guests. 7 min walk to Platis Gialos beach. Book your authentic Greek island getaway today!"
        keywords="luxury villa Sifnos, private pool villa Greece, Platis Gialos accommodation, Cyclades villa rental, Greek island luxury, Sifnos beach villa, family villa Greece, private chef Sifnos"
        canonicalUrl="https://villaoliviaclara.com"
      />
      <LocalBusinessStructuredData />
      <Navigation />
      
      {/* Hero Section */}
      <section id="main-content" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster={heroImage}
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/villa-olivia-clara-intro-video.mp4" type="video/mp4" />
          {/* Fallback to image if video fails to load */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </video>
        
        {/* Hero Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-2 leading-tight">Villa Olivia Clara</h1>
          <p className="text-2xl md:text-3xl mb-6 text-white/95">Sifnos, Greece</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <VirtualTour showInModal={true} className="order-2 sm:order-1" />
          </div>
          <div className="mt-6 flex justify-center">
            <form
              onSubmit={handleSearchSubmit}
              className="bg-white/85 backdrop-blur-sm rounded-xl shadow-soft border border-white/60 px-4 py-3 md:px-6 md:py-4 flex flex-col sm:flex-row items-stretch sm:items-end gap-3"
            >
              <div className="flex-1 min-w-[220px] text-left">
                <label className="block text-xs font-semibold text-gray-700 mb-1">Check-in</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full rounded-md border border-villa-stone bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-villa-olive focus:border-villa-olive"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-[220px] text-left">
                <label className="block text-xs font-semibold text-gray-700 mb-1">Check-out</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn}
                    className="w-full rounded-md border border-villa-stone bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-villa-olive focus:border-villa-olive"
                  />
                </div>
              </div>
              <div className="sm:self-end">
                <Button type="submit" variant="villa" size="sm" className="px-6 h-10">Search</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-br from-sand-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-villa-olive mb-4">Villa Olivia Clara</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your perfect luxury retreat in Sifnos, Greece
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-villa-olive" size={32} />
                </div>
                <h3 className="text-xl font-bold text-villa-olive mb-4">Capacity</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    8 guests
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Home className="w-4 h-4" />
                    4 bedrooms
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Waves className="w-4 h-4" />
                    4.5 bathrooms
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    Parking for 5 cars
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-villa-olive" size={32} />
                </div>
                <h3 className="text-xl font-bold text-villa-olive mb-4">Location</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="font-semibold text-villa-olive">Platis Gialos, Sifnos</li>
                  <li>7 mins walk / 2 mins drive to beach</li>
                  <li>15 mins to island center</li>
                  <li>25 mins to port</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="text-villa-olive" size={32} />
                </div>
                <h3 className="text-xl font-bold text-villa-olive mb-4">Amenities</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Large pool & lounge area with bar</li>
                  <li>Garden & outdoor dining</li>
                  <li>Full kitchen, BBQ</li>
                  <li className="flex items-center justify-center gap-2">
                    <Wifi className="w-4 h-4" />
                    200+ Mbps WiFi
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ChefHat className="text-villa-olive" size={32} />
                </div>
                <h3 className="text-xl font-bold text-villa-olive mb-4">Services</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Housekeeping (2x per week)</li>
                  <li>Childcare (on request)</li>
                  <li>Private chef (on request)</li>
                  <li>Available for events</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Villa Difference Section */}
      <section className="py-20 bg-gradient-to-br from-white to-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-villa-olive mb-4">
              The Villa Olivia Clara Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here use the photos from our villa-gallery folder
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ImageZoom
                    src={poolView} 
                    alt="Pool view" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-villa-olive mb-4">Pool View</h3>
                  <h4 className="text-xl font-semibold text-villa-olive mb-3">Perfect Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Anywhere you stand, Villa Olivia Clara offers you a breathtaking view of Sifnos 
                    and just a 7 minute walk to the beach!
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ImageZoom
                    src={villaLinens} 
                    alt="Villa linens" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-villa-olive mb-4">Villa Linens</h3>
                  <h4 className="text-xl font-semibold text-villa-olive mb-3">Real Home, Luxury Amenities</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We have carefully picked every part of Villa Olivia Clara to create a luxurious 
                    experience that will still make you feel like home.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ImageZoom
                    src={elenaHost} 
                    alt="Elena, your host" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-villa-olive mb-4">Elena, Your Host</h3>
                  <h4 className="text-xl font-semibold text-villa-olive mb-3">Hosted by Elena</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Villa Olivia Clara is a family home and a family business. Being a local of the island, 
                    Elena is the perfect host for an authentic experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-gradient-to-br from-sand-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Eye className="text-villa-olive" size={40} />
              <h2 className="text-4xl font-bold text-villa-olive">Take a Virtual Tour</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Explore every corner of Villa Olivia Clara with our immersive 360° virtual tour. 
              Experience the luxury and beauty before you book.
            </p>
            <div className="text-sm text-villa-olive font-semibold">
              360° Tour • Click and drag to explore • Use mouse wheel to zoom
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-villa-stone shadow-elegant overflow-hidden hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <VirtualTour />
              </CardContent>
            </Card>
            
            {/* Tour Features */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="text-villa-olive" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-villa-olive mb-3">360° Experience</h3>
                  <p className="text-muted-foreground">Explore every room and outdoor space</p>
                </CardContent>
              </Card>
              
              <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="text-villa-olive" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-villa-olive mb-3">Book with Confidence</h3>
                  <p className="text-muted-foreground">See exactly what you're booking</p>
                </CardContent>
              </Card>
              
              <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ChevronDown className="text-villa-olive" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-villa-olive mb-3">Interactive</h3>
                  <p className="text-muted-foreground">Click, drag, and zoom to explore</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sifnos Section */}
      <section className="py-20 bg-gradient-to-br from-sand to-sand-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-6 text-villa-olive">
                Explore the Beauty of Sifnos with Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our villa is located in Sifnos, Greece—a Greek island that is popular among those who 
                appreciate good food and great sea views. Sifnos has been our family's home for centuries 
                and we're excited to show you around.
              </p>
              <Button asChild variant="villa" size="lg">
                <Link to="/sifnos">Discover Sifnos</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="border-villa-stone shadow-soft overflow-hidden group">
                  <CardContent className="p-0">
                    <ImageZoom
                      src={poolArea}
                      alt="Pool area at Villa Olivia Clara"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                    />
                  </CardContent>
                </Card>
                <Card className="border-villa-stone shadow-soft overflow-hidden group">
                  <CardContent className="p-0">
                    <ImageZoom
                      src={livingRoom}
                      alt="Living room at Villa Olivia Clara"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                    />
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4 mt-8">
                <Card className="border-villa-stone shadow-soft overflow-hidden group">
                  <CardContent className="p-0">
                    <ImageZoom
                      src={kitchen}
                      alt="Kitchen at Villa Olivia Clara"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                    />
                  </CardContent>
                </Card>
                <Card className="border-villa-stone shadow-soft overflow-hidden group">
                  <CardContent className="p-0">
                    <ImageZoom
                      src={villaLinens}
                      alt="Villa linens detail"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-villa-olive mb-4">What Our Guests Are Saying</h2>
            <p className="text-lg text-muted-foreground">Average rating of 5 stars from more than 45 reviews in the past 10 years.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-muted-foreground mb-4">
                  "Wonderful stay at the Villa Olivia Clara! The house has a perfect location near Platis Gialos, 
                  walking distance, and an amazing view on the bay. No hesitation: the best villa in Sifnos."
                </p>
                <p className="font-semibold text-villa-olive">— Alexis</p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-muted-foreground mb-4">
                  "We have literally had the most magical holiday at Elena's villa. The photos just don't do justice 
                  to this incredibly stunning home. Please do not hesitate to book!"
                </p>
                <p className="font-semibold text-villa-olive">— Li-Chuen</p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-muted-foreground mb-4">
                  "We were over the moon with our experience at Villa Olivia Clara. The photos don't even do it justice. 
                  Highly recommended."
                </p>
                <p className="font-semibold text-villa-olive">— Savvas</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="villa-outline">
              <Link to="/reviews">Read more reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            We can make your next vacation unforgettable.
          </h2>
          <p className="text-xl mb-8 text-white/90">
            From planning your trip to Sifnos, to leaving with the greatest memories, we'll be with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-white/80">Years of Hosting Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5/5</div>
              <div className="text-white/80">Review Average (40+ reviews)</div>
            </div>
          </div>
          <Button asChild size="lg" variant="villa">
            <a href="https://book.villaoliviaclara.com/" target="_blank" rel="noopener noreferrer">Let's Book Your Stay →</a>
          </Button>
        </div>
      </section>

      <Footer />
      <StickyBookingBar />
      <CookieConsent />
      <BackToTop />
    </div>
  );
};

export default Index;
