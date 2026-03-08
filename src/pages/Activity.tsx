import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';
import { ArrowLeft, Ship, MapPin, Clock, Users, Camera, Waves, Anchor, Compass } from 'lucide-react';

const Activity = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('seo.activities.title')}
        description={t('seo.activities.description')}
        keywords={t('seo.activities.keywords')}
        ogImage="https://villaoliviaclara.com/src/assets/villa-gallery/Villa-Olivia-Clara_043_aerial-view-of-the-villa-wide.jpg"
        canonicalUrl="https://villaoliviaclara.com/sifnos/boat-tours"
        alternateLanguages={[
          { lang: 'en', url: 'https://villaoliviaclara.com/sifnos/boat-tours' },
          { lang: 'el', url: 'https://villaoliviaclara.com/el/sifnos/boat-tours' },
          { lang: 'fr', url: 'https://villaoliviaclara.com/fr/sifnos/boat-tours' },
          { lang: 'it', url: 'https://villaoliviaclara.com/it/sifnos/boat-tours' },
          { lang: 'x-default', url: 'https://villaoliviaclara.com/sifnos/boat-tours' }
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="villa-ghost" size="sm">
            <Link to="/sifnos">
              <ArrowLeft size={16} /> Back to Discover Sifnos
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12" id="main-content">
          <div className="flex items-center gap-3 mb-6">
            <Ship className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">{t('activity.boatTour.title')}</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4">
            {t('activity.boatTour.hero.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground">
            {t('activity.boatTour.hero.question')}
          </p>
        </header>

        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-villa-olive-light to-sand-light p-8 rounded-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('activity.boatTour.hero.text')}
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Choosing Destination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">{t('activity.boatTour.choosingDestination')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('activity.boatTour.choosingDestinationText')}
            </p>
          </section>

          {/* Island Destinations */}
          <div className="space-y-12 mb-12">
            {/* Poliegos */}
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center">
                      <Waves className="text-villa-olive" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-villa-olive mb-4">{t('activity.boatTour.destinations.poliegos.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('activity.boatTour.destinations.poliegos.description')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">{t('activity.boatTour.destinations.poliegos.highlights.title')}</h4>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          {(t('activity.boatTour.destinations.poliegos.highlights.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">Trip Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">4-hour trip</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Camera className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Perfect for snorkeling</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Anchor className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Morning or afternoon</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>{t('activity.boatTour.destinations.poliegos.funFact.title')}</strong> {t('activity.boatTour.destinations.poliegos.funFact.text')}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kimolos */}
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center">
                      <MapPin className="text-villa-olive" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-villa-olive mb-4">{t('activity.boatTour.destinations.kimolos.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('activity.boatTour.destinations.kimolos.description')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">{t('activity.boatTour.whatToSee')}</h4>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          {(t('activity.boatTour.destinations.kimolos.highlights', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">Trip Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">6-hour trip (with Poliegos)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Perfect for families</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Compass className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Easy walking distance</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <p className="text-green-800 text-sm">
                        <strong>Island Name:</strong> Kimolos literally means "The Island of Chalk", referring to the perlite and chalk rock formations that make up the island.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Milos */}
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center">
                      <Ship className="text-villa-olive" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-villa-olive mb-4">{t('activity.boatTour.destinations.milos.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('activity.boatTour.destinations.milos.description')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">{t('activity.boatTour.highlights')}</h4>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          {(t('activity.boatTour.destinations.milos.highlights', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">Trip Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">8-hour full-day trip</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Camera className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Photography paradise</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Anchor className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Complete island tour</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                      <p className="text-amber-800 text-sm">
                        <strong>Adventure Alert:</strong> A highlight of this trip are the limestone coves in the west part of the island and a giant sandy slope where you can (at your own risk!) sand surf down to the water.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sifnos */}
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center">
                      <Waves className="text-villa-olive" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-villa-olive mb-4">{t('activity.boatTour.destinations.sifnos.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('activity.boatTour.destinations.sifnos.description')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">{t('activity.boatTour.mustSee')}</h4>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          {(t('activity.boatTour.destinations.sifnos.highlights', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">Special Access</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Anchor className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Boat-only locations</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Remote beaches</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Compass className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Private island access</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-villa-olive-light p-4 rounded-lg">
                      <p className="text-villa-olive text-sm">
                        <strong>Exclusive Access:</strong> The boat tour will take you to spots in Sifnos that you can only reach on foot or by boat, like Fykiada beach - one of the most remote spots on the island. You'll also get to visit the island of Kitriani, the small uninhabited island across from Platis Gialos bay.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">{t('activity.boatTour.booking.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('activity.boatTour.booking.text')}
            </p>

            <Card className="border-villa-olive shadow-soft">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-villa-olive mb-4">Our Recommended Partner</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We highly recommend partnering with <strong>A La Mer</strong>. Their boats are all new and their service and energy are unbeatable.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button asChild variant="villa" size="lg">
                      <a href="https://www.alamer.gr" target="_blank" rel="noopener noreferrer">
                        Book with A La Mer
                      </a>
                    </Button>
                    <Button asChild variant="villa-outline" size="lg">
                      <Link to="/contact">
                        Get More Guidance
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact CTA */}
          <section className="mb-8 bg-sand-light p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('activity.boatTour.booking.needHelp')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              {t('activity.boatTour.booking.helpText')}
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="villa" size="lg">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="villa-outline" size="lg">
                <a href="mailto:elena@villaoliviaclara.com">
                  Email Elena
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

export default Activity;
