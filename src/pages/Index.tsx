import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyBookingBar from '@/components/StickyBookingBar';
import CookieConsent from '@/components/CookieConsent';
import { ChevronDown, Calendar } from 'lucide-react';
import heroImage from '@/assets/Sifnos/Beaches/plats-gialos.webp';
import poolView from '@/assets/Sifnos/Beaches/vathi.webp';
import villaLinens from '@/assets/Sifnos/Beaches/chrysopigi.webp';
import elenaHost from '@/assets/Sifnos/villages/apollonia.webp';

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
          <div className="mt-2 flex justify-center">
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
                    className="w-full rounded-md border border-villa-stone bg-white px-3 py-2 pr-9 text-gray-900 focus:outline-none focus:ring-2 focus:ring-villa-olive focus:border-villa-olive"
                  />
                  <Calendar size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
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
                    className="w-full rounded-md border border-villa-stone bg-white px-3 py-2 pr-9 text-gray-900 focus:outline-none focus:ring-2 focus:ring-villa-olive focus:border-villa-olive"
                  />
                  <Calendar size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <div className="sm:self-end">
                <Button type="submit" variant="villa" size="sm" className="px-6">Search</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-villa-olive mb-2">Capacity</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>8 guests</li>
                <li>4 bedrooms (2 queen, 4 single, 1 baby cot)</li>
                <li>4.5 bathrooms</li>
                <li>Parking for 5 cars</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-villa-olive mb-2">Location</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Platis Gialos, Sifnos</li>
                <li>7 mins walk / 2 mins drive to beach</li>
                <li>15 mins to island center</li>
                <li>25 mins to port</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-villa-olive mb-2">Amenities</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Large pool & lounge area with bar</li>
                <li>Garden & outdoor dining</li>
                <li>Full kitchen, BBQ</li>
                <li>200+ Mbps WiFi</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-villa-olive mb-2">Services</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Housekeeping (2x per week)</li>
                <li>Childcare (on request)</li>
                <li>Private chef (on request)</li>
                <li>Available for events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Difference Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            The Villa Olivia Clara Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <img 
                  src={poolView} 
                  alt="Pool view" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-villa-olive mb-2">Perfect Location</h3>
                <p className="text-muted-foreground">
                  Anywhere you stand, Villa Olivia Clara offers you a breathtaking view of Sifnos 
                  and just a 7 minute walk to the beach!
                </p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <img 
                  src={villaLinens} 
                  alt="Villa linens" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-villa-olive mb-2">Real Home, Luxury Amenities</h3>
                <p className="text-muted-foreground">
                  We have carefully picked every part of Villa Olivia Clara to create a luxurious 
                  experience that will still make you feel like home.
                </p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <img 
                  src={elenaHost} 
                  alt="Elena, your host" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-villa-olive mb-2">Hosted by Locals</h3>
                <p className="text-muted-foreground">
                  Villa Olivia Clara is a family home and a family business. Being a local of the island, 
                  Elena is the perfect host for an authentic experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sifnos Section */}
      <section className="py-20 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-villa-olive">
            Explore the Beauty of Sifnos with Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our villa is located in Sifnos, Greece—a Greek island that is popular among those who 
            appreciate good food and great sea views. Sifnos has been our family's home for centuries 
            and we're excited to show you around.
          </p>
          <Button asChild variant="villa">
            <Link to="/sifnos">Discover Sifnos</Link>
          </Button>
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
          <Button asChild size="lg" variant="villa-outline">
            <Link to="/contact">Let's Book Your Stay →</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <StickyBookingBar />
      <CookieConsent />
    </div>
  );
};

export default Index;
