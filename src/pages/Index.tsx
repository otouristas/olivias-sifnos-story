import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { generateBookingUrl, parseDate } from '@/utils/booking';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
import poolSunbathing from '@/assets/villa-gallery/Villa-Olivia-Clara_011_pool-sunbathing-area.jpg';
import poolSideCabana from '@/assets/villa-gallery/Villa-Olivia-Clara_001_pool-side-cabana.jpg';
import diningAtTerrace from '@/assets/villa-gallery/Villa-Olivia-Clara_040_dining-at-the-terrace.jpg';

const Index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
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
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    
    // Generate booking URL with parameters
    const bookingUrl = generateBookingUrl({
      checkin: checkIn,
      checkout: checkOut,
      rooms: 1,
      adults,
      children,
      infants,
    });
    
    // Open booking URL in new tab
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
        ogImage="https://villaoliviaclara.com/src/assets/villa-gallery/Villa-Olivia-Clara_001_pool-side-cabana.jpg"
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
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-2 leading-tight">{t('hero.title')}</h1>
          <p className="text-2xl md:text-3xl mb-6 text-white/95">{t('hero.subtitle')}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <VirtualTour showInModal={true} className="order-2 sm:order-1" />
          </div>
          <div className="mt-6 flex justify-center">
            <form
              onSubmit={handleSearchSubmit}
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-soft border border-white/60 px-4 py-3 sm:px-4 sm:py-3 w-full max-w-sm sm:max-w-none overflow-hidden"
            >
              {/* Mobile Layout - Stacked */}
              <div className="flex flex-col sm:hidden gap-3">
                <div className="space-y-3">
                  <div className="text-left">
                    <label htmlFor="checkIn-mobile" className="block text-xs font-medium text-gray-600 mb-1">{t('common.checkIn')}</label>
                    <input
                      id="checkIn-mobile"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full rounded-md border border-gray-300 bg-white pl-2 pr-0.5 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-villa-olive focus:border-villa-olive"
                    />
                  </div>
                  <div className="text-left">
                    <label htmlFor="checkOut-mobile" className="block text-xs font-medium text-gray-600 mb-1">{t('common.checkOut')}</label>
                    <input
                      id="checkOut-mobile"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn}
                      className="w-full rounded-md border border-gray-300 bg-white pl-2 pr-0.5 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-villa-olive focus:border-villa-olive"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-left">
                    <label htmlFor="adults-mobile" className="block text-xs font-medium text-gray-600 mb-1">{t('common.adults')}</label>
                    <select
                      id="adults-mobile"
                      value={adults}
                      onChange={(e) => setAdults(parseInt(e.target.value))}
                      className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-villa-olive focus:border-villa-olive"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text-left">
                    <label htmlFor="children-mobile" className="block text-xs font-medium text-gray-600 mb-1">{t('common.children')}</label>
                    <select
                      id="children-mobile"
                      value={children}
                      onChange={(e) => setChildren(parseInt(e.target.value))}
                      className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-villa-olive focus:border-villa-olive"
                    >
                      {[0, 1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text-left">
                    <label htmlFor="infants-mobile" className="block text-xs font-medium text-gray-600 mb-1">{t('common.infants')}</label>
                    <select
                      id="infants-mobile"
                      value={infants}
                      onChange={(e) => setInfants(parseInt(e.target.value))}
                      className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-villa-olive focus:border-villa-olive"
                    >
                      {[0, 1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <Button type="submit" variant="villa" size="sm" className="w-full py-2 text-sm">{t('common.bookNow')}</Button>
              </div>

              {/* Desktop Layout - Horizontal */}
              <div className="hidden sm:flex items-end gap-3">
                <div className="flex-1 text-left">
                  <label htmlFor="checkIn-desktop" className="block text-xs font-medium text-gray-600 mb-1">{t('common.checkIn')}</label>
                  <input
                    id="checkIn-desktop"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-villa-olive focus:border-villa-olive"
                  />
                </div>
                <div className="flex-1 text-left">
                  <label htmlFor="checkOut-desktop" className="block text-xs font-medium text-gray-600 mb-1">{t('common.checkOut')}</label>
                  <input
                    id="checkOut-desktop"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn}
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-villa-olive focus:border-villa-olive"
                  />
                </div>
                <div className="flex-1 text-left">
                  <label htmlFor="adults-desktop" className="block text-xs font-medium text-gray-600 mb-1">{t('common.adults')}</label>
                  <select
                    id="adults-desktop"
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-villa-olive focus:border-villa-olive"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 text-left">
                  <label htmlFor="children-desktop" className="block text-xs font-medium text-gray-600 mb-1">{t('common.children')}</label>
                  <select
                    id="children-desktop"
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-villa-olive focus:border-villa-olive"
                  >
                    {[0, 1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 text-left">
                  <label htmlFor="infants-desktop" className="block text-xs font-medium text-gray-600 mb-1">{t('common.infants')}</label>
                  <select
                    id="infants-desktop"
                    value={infants}
                    onChange={(e) => setInfants(parseInt(e.target.value))}
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-villa-olive focus:border-villa-olive"
                  >
                    {[0, 1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <Button type="submit" variant="villa" size="sm" className="px-4 py-1.5 h-8 text-sm">{t('common.bookNow')}</Button>
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
              {t('villaDifference.title')}
          </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('villaDifference.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ImageZoom
                    src={poolSunbathing} 
                    alt="Pool sunbathing area at Villa Olivia Clara" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-villa-olive mb-4">{t('villaDifference.poolView.subtitle')}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('villaDifference.poolView.description')}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ImageZoom
                    src={poolSideCabana} 
                    alt="Pool side cabana at Villa Olivia Clara" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-villa-olive mb-4">{t('villaDifference.villaLinens.subtitle')}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('villaDifference.villaLinens.description')}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ImageZoom
                    src={diningAtTerrace} 
                    alt="Dining at the terrace at Villa Olivia Clara" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-villa-olive mb-4">{t('villaDifference.elenaHost.subtitle')}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('villaDifference.elenaHost.description')}
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
            <h2 className="text-4xl font-bold text-villa-olive mb-4">{t('testimonials.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('testimonials.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-muted-foreground mb-4">
                  "{t('testimonials.alexis.text')}"
                </p>
                <p className="font-semibold text-villa-olive">{t('testimonials.alexis.author')}</p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-muted-foreground mb-4">
                  "{t('testimonials.liChuen.text')}"
                </p>
                <p className="font-semibold text-villa-olive">{t('testimonials.liChuen.author')}</p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-muted-foreground mb-4">
                  "{t('testimonials.savvas.text')}"
                </p>
                <p className="font-semibold text-villa-olive">{t('testimonials.savvas.author')}</p>
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
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-white/80">{t('cta.yearsHosting')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5/5</div>
              <div className="text-white/80">{t('cta.reviewAverage')}</div>
            </div>
          </div>
          <Button asChild size="lg" variant="villa">
            <a href="https://book.villaoliviaclara.com/" target="_blank" rel="noopener noreferrer">{t('cta.bookStay')}</a>
          </Button>
        </div>
      </section>

      <Footer />
      <CookieConsent />
      <BackToTop />
    </div>
  );
};

export default Index;
