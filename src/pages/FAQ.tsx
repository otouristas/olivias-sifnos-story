import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';
import { FAQStructuredData } from '@/components/StructuredDataSchemas';
import { ArrowLeft, HelpCircle, MapPin, Car, Wifi, Clock, Phone, Utensils, Waves, Plane, Ship, Home, Users, Droplets, Hotel, Star } from 'lucide-react';

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;

  const faqItems = [
    { question: t('faq.travel.title'), answer: t('faq.travel.closestAirports') },
    { question: t('faq.carRental.title'), answer: t('faq.carRental.automatic') },
    { question: t('faq.arrival.title'), answer: t('faq.arrival.transferDesc') },
    { question: t('faq.wifi.title'), answer: t('faq.wifi.answer') },
    { question: t('faq.luggage.title'), answer: t('faq.luggage.answer') },
    { question: t('faq.pets.title'), answer: t('faq.pets.answer') },
    { question: t('faq.bestVilla.question'), answer: t('faq.bestVilla.answer') },
    { question: t('faq.guests.question'), answer: t('faq.guests.answer') },
    { question: t('faq.pool.question'), answer: t('faq.pool.answer') },
    { question: t('faq.beachDistance.question'), answer: t('faq.beachDistance.answer') },
    { question: t('faq.vsHotel.question'), answer: t('faq.vsHotel.answer') }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FAQStructuredData faqs={faqItems} />
      <SEOHead
        title={t('seo.faq.title')}
        description={t('seo.faq.description')}
        keywords={t('seo.faq.keywords')}
        ogImage="/villa-olivia-clara-logo.webp"
        canonicalUrl={`https://villaoliviaclara.com${langPrefix}/faq`}
        alternateLanguages={[
          { lang: 'en', url: 'https://villaoliviaclara.com/faq' },
          { lang: 'el', url: 'https://villaoliviaclara.com/el/faq' },
          { lang: 'fr', url: 'https://villaoliviaclara.com/fr/faq' },
          { lang: 'it', url: 'https://villaoliviaclara.com/it/faq' },
          { lang: 'x-default', url: 'https://villaoliviaclara.com/faq' }
        ]}
      />
      <Navigation />
      
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50"
      >
        {t('common.skipToContent', 'Skip to content')}
      </a>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button asChild variant="villa-ghost" size="sm">
            <Link to="/">
              <ArrowLeft size={16} /> {t('common.backToHome')}
            </Link>
          </Button>
        </div>

        <header className="mb-12" id="main-content">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">{t('faq.title')}</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {t('faq.subtitle')}
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          {/* Best Villa - NEW SEO section */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Star className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.bestVilla.question')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('faq.bestVilla.answer')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Guests - NEW SEO section */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.guests.question')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('faq.guests.answer')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Pool - NEW SEO section */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Droplets className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.pool.question')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('faq.pool.answer')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Beach Distance - NEW SEO section */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Waves className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.beachDistance.question')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('faq.beachDistance.answer')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Villa vs Hotel - NEW SEO section */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Hotel className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.vsHotel.question')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('faq.vsHotel.answer')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Travel to Sifnos */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Ship className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.travel.title')}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('faq.travel.answer', 'The only ways to travel to Sifnos is by ferry, private boat, or private helicopter. Using the ferry, you arrive at the port of Kamares.')}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-villa-olive mb-2">{t('faq.travel.closestAirports')}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-villa-olive-light text-villa-olive rounded-full text-sm font-medium">Athens (ATH)</span>
                          <span className="px-3 py-1 bg-villa-olive-light text-villa-olive rounded-full text-sm font-medium">Milos (MLO)</span>
                          <span className="px-3 py-1 bg-villa-olive-light text-villa-olive rounded-full text-sm font-medium">Paros (PAS)</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {t('faq.travel.ferryInfo', 'From there, we recommend checking')} <a href="https://www.ferryhopper.com" className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">Ferry Hopper</a> {t('faq.travel.ferryInfoEnd', 'to book your ferry tickets. Transfer from the airport to the port using public transport is usually easy, but we recommend taking a taxi to avoid delays and complications.')}
                        </p>
                      </div>
                      
                      <div className="bg-sand-light p-4 rounded-lg">
                        <h4 className="font-semibold text-villa-olive mb-2">{t('faq.travel.privateTransfer')}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t('faq.travel.transferDesc')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Car Rental */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Car className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.carRental.title')}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('faq.carRental.intro', 'There are a few car rental services in Sifnos, depending on your needs:')}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-villa-olive mb-3">{t('faq.carRental.automatic')}</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">{t('faq.carRental.rentACar')}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">{t('faq.carRental.protoMoto')}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">Suntrail</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-villa-olive mb-3">{t('faq.carRental.manualOnly')}</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">Aperent</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">{t('faq.carRental.autoMoto')}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">{t('faq.carRental.sifnosDrive')}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Arrival at Villa */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.arrival.title')}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('faq.arrival.answer', 'After you travel to Sifnos, we recommend that you rent a car - if you do, here are driving directions from the port to Villa Olivia Clara.')}
                    </p>
                    
                    <div className="bg-sand-light p-4 rounded-lg">
                      <h4 className="font-semibold text-villa-olive mb-2">{t('faq.arrival.portTransfer')}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t('faq.arrival.transferDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Public Services */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.emergency.title')}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-red-800 mb-3">{t('faq.emergency.medical')}</h3>
                        <div className="space-y-1">
                          <p className="text-red-700 text-sm font-mono">+30 2284031315</p>
                          <p className="text-red-700 text-sm font-mono">+30 6984420013</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-3">{t('faq.emergency.police')}</h3>
                        <div className="space-y-1">
                          <p className="text-blue-700 text-sm font-mono">+30 2284031210</p>
                          <p className="text-blue-700 text-sm font-mono">+30 2284031901</p>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-3">{t('faq.emergency.coastGuard')}</h3>
                        <div className="space-y-1">
                          <p className="text-green-700 text-sm font-mono">+30 2284033617</p>
                          <p className="text-green-700 text-sm font-mono">+30 2281082690</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* WiFi */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Wifi className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.wifi.title')}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('faq.wifi.answer')} <Link to="/villa" className="text-villa-olive hover:underline">{t('villa.amenities', 'amenities')}</Link>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Luggage Drop-off */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.luggage.title')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('faq.luggage.answer')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Pets */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <HelpCircle className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.pets.title')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('faq.pets.answer')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Restaurants */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Utensils className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.restaurants.title', 'Where is the closest place to eat?')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('faq.restaurants.answer', 'The closest restaurants are at the beachfront in Platis Gialos (700m). There are many options to choose from there, including traditional Greek, Italian and fusion cuisines.')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact CTA */}
          <section className="mb-8 bg-villa-olive-light p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('faq.stillHaveQuestions')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              {t('faq.cantFindAnswer')}
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="villa" size="lg">
                <Link to="/contact">
                  {t('faq.contactUs', 'Contact Us')}
                </Link>
              </Button>
              <Button asChild variant="villa-outline" size="lg">
                <a href="mailto:elena@villaoliviaclara.com">
                  <Phone size={16} className="mr-2" />
                  {t('faq.emailUs', 'Email Us')}
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default FAQ;
