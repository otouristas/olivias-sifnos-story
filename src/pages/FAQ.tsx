import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';
import { ArrowLeft, HelpCircle, MapPin, Car, Wifi, Clock, Phone, Utensils, Waves, Plane, Ship } from 'lucide-react';

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('seo.faq.title')}
        description={t('seo.faq.description')}
        keywords={t('seo.faq.keywords')}
        ogImage="https://villaoliviaclara.com/src/assets/villa-gallery/Villa-Olivia-Clara_017_bedroom-linen-detail.jpg"
        canonicalUrl="https://villaoliviaclara.com/faq"
        alternateLanguages={[
          { lang: 'en', url: 'https://villaoliviaclara.com/faq' },
          { lang: 'el', url: 'https://villaoliviaclara.com/el/faq' },
          { lang: 'fr', url: 'https://villaoliviaclara.com/fr/faq' },
          { lang: 'it', url: 'https://villaoliviaclara.com/it/faq' },
          { lang: 'x-default', url: 'https://villaoliviaclara.com/faq' }
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="villa-ghost" size="sm">
            <Link to="/">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12" id="main-content">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">{t('faq.title')}</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {t('faq.subtitle')}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Travel to Sifnos */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Ship className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">How can I travel to Sifnos?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The only ways to travel to Sifnos is by ferry, private boat, or private helicopter. Using the ferry, you arrive at the port of Kamares.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-villa-olive mb-2">Closest Airports</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-villa-olive-light text-villa-olive rounded-full text-sm font-medium">Athens (ATH)</span>
                          <span className="px-3 py-1 bg-villa-olive-light text-villa-olive rounded-full text-sm font-medium">Milos (MLO)</span>
                          <span className="px-3 py-1 bg-villa-olive-light text-villa-olive rounded-full text-sm font-medium">Paros (PAS)</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          From there, we recommend checking <a href="https://www.ferryhopper.com" className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">Ferry Hopper</a> to book your ferry tickets. Transfer from the airport to the port using public transport is usually easy, but we recommend taking a taxi to avoid delays and complications.
                        </p>
                      </div>
                      
                      <div className="bg-sand-light p-4 rounded-lg">
                        <h4 className="font-semibold text-villa-olive mb-2">Private Transfer Service</h4>
                        <p className="text-muted-foreground text-sm">
                          We also offer an island transfer service by private speedboat at additional cost.
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
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">Where can I rent a car in Sifnos?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      There are a few car rental services in Sifnos, depending on your needs:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-villa-olive mb-3">Automatic and Manual Transmission</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">Rent A Car Sifnos</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">Proto Moto Car</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">Suntrail</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-villa-olive mb-3">Manual Transmission Only</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">Aperent</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">Auto Moto Apollo</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-villa-olive rounded-full"></div>
                            <span className="text-muted-foreground">Sifnos Drive</span>
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
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">How can I arrive at Villa Olivia Clara?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      After you travel to Sifnos, we recommend that you rent a car - if you do, here are driving directions from the port to Villa Olivia Clara.
                    </p>
                    
                    <div className="bg-sand-light p-4 rounded-lg">
                      <h4 className="font-semibold text-villa-olive mb-2">Port Transfer Service</h4>
                      <p className="text-muted-foreground text-sm">
                        We also offer a port transfer service with a trusted driver who will bring you right to us. This service is at additional cost.
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
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">What are the phone numbers of Sifnos public services?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-red-800 mb-3">Medical Emergencies</h3>
                        <div className="space-y-1">
                          <p className="text-red-700 text-sm font-mono">+30 2284031315</p>
                          <p className="text-red-700 text-sm font-mono">+30 6984420013</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-3">Police Station</h3>
                        <div className="space-y-1">
                          <p className="text-blue-700 text-sm font-mono">+30 2284031210</p>
                          <p className="text-blue-700 text-sm font-mono">+30 2284031901</p>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-3">Coast Guard</h3>
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
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">Is there WiFi throughout the property?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Yes, there is high-speed (&gt;200 Mbps) WiFi throughout the property. See all our <Link to="/villa" className="text-villa-olive hover:underline">amenities</Link>.
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
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">Can I drop off my luggage before my check-in time?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Usually yes, but it depends on the timing and individual situation. Before you travel to Sifnos, please get in touch with us and we will accommodate you as best we can.
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
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">Are pets allowed on the property?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      No, pets are not allowed. We cannot make any exceptions at this time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Distance to Beach */}
          <section className="mb-12">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Waves className="text-villa-olive mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">How is Villa Olivia Clara to the beach?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The closest beach to Villa Olivia Clara is Platis Gialos. It is approximately 7 minutes on foot or 2 minutes by car.
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
                    <h2 className="text-2xl font-bold text-villa-olive mb-4">Where is the closest place to eat?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The closest restaurants are at the beachfront in Platis Gialos (700m). There are many options to choose from there, including traditional Greek, Italian and fusion cuisines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact CTA */}
          <section className="mb-8 bg-villa-olive-light p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? We're here to help! Contact us directly and we'll get back to you as soon as possible.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="villa" size="lg">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="villa-outline" size="lg">
                <a href="mailto:elena@villaoliviaclara.com">
                  <Phone size={16} className="mr-2" />
                  Email Us
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
