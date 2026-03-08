import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';
import { ArrowLeft, Leaf, Target, Zap, Recycle, Globe, TrendingDown, CheckCircle } from 'lucide-react';

const Sustainability = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('seo.sustainability.title')}
        description={t('seo.sustainability.description')}
        keywords={t('seo.sustainability.keywords')}
        ogImage="/villa-olivia-clara-logo.webp"
        canonicalUrl={`https://villaoliviaclara.com${langPrefix}/sustainability`}
        alternateLanguages={[
          { lang: 'en', url: 'https://villaoliviaclara.com/sustainability' },
          { lang: 'el', url: 'https://villaoliviaclara.com/el/sustainability' },
          { lang: 'fr', url: 'https://villaoliviaclara.com/fr/sustainability' },
          { lang: 'it', url: 'https://villaoliviaclara.com/it/sustainability' },
          { lang: 'x-default', url: 'https://villaoliviaclara.com/sustainability' }
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
            <Link to="/">
              <ArrowLeft size={16} /> {t('common.backToHome')}
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12" id="main-content">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">{t('sustainability.title')}</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {t('sustainability.subtitle')}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Carbon Footprint Disclosure */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">{t('sustainability.carbonFootprint.title')}</h2>

            {/* Our Climate Commitment */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('sustainability.carbonFootprint.commitment.title')}</h3>
              <div className="bg-villa-olive-light p-6 rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  {t('sustainability.carbonFootprint.commitment.text')}
                </p>
              </div>
            </div>

            {/* Current Carbon Footprint */}
            {/* Current Carbon Footprint */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('sustainability.carbonFootprint.current.title')}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>{t('sustainability.carbonFootprint.current.scope')}</strong>
              </p>

              <div className="space-y-4 mb-6">
                <Card className="border-villa-stone shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('sustainability.carbonFootprint.current.electricity.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('sustainability.carbonFootprint.current.electricity.text')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-villa-stone shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('sustainability.carbonFootprint.current.heatingOil.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('sustainability.carbonFootprint.current.heatingOil.text')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-villa-stone shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('sustainability.carbonFootprint.current.gasoline.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('sustainability.carbonFootprint.current.gasoline.text')}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-sand-light p-6 rounded-lg text-center">
                <p className="text-2xl font-bold text-villa-olive mb-2">{t('sustainability.carbonFootprint.current.total')}</p>
                <p className="text-muted-foreground">{t('sustainability.carbonFootprint.current.totalDesc')}</p>
              </div>
            </div>
          </section>

          {/* Carbon Neutral since 2021 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">{t('sustainability.neutral.title')}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-villa-olive" size={24} />
                    <h3 className="text-xl font-semibold text-villa-olive">{t('sustainability.neutral.offsetting.title')}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('sustainability.neutral.offsetting.text')}
                  </p>
                  <div className="bg-gray-100 p-3 rounded text-center">
                    <p className="text-sm font-medium text-villa-olive">{t('sustainability.neutral.offsetting.cert')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="text-villa-olive" size={24} />
                    <h3 className="text-xl font-semibold text-villa-olive">{t('sustainability.neutral.renewable.title')}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('sustainability.neutral.renewable.text')}
                  </p>
                  <div className="bg-gray-100 p-3 rounded text-center">
                    <p className="text-sm font-medium text-villa-olive">{t('sustainability.neutral.renewable.cert')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown className="text-villa-olive" size={24} />
                    <h3 className="text-xl font-semibold text-villa-olive">{t('sustainability.neutral.removal.title')}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('sustainability.neutral.removal.text')}
                  </p>
                  <div className="bg-gray-100 p-3 rounded text-center">
                    <p className="text-sm font-medium text-villa-olive">{t('sustainability.neutral.removal.cert')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Recycle className="text-villa-olive" size={24} />
                    <h3 className="text-xl font-semibold text-villa-olive">{t('sustainability.neutral.waste.title')}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('sustainability.neutral.waste.text')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Path to Net Zero */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">{t('sustainability.path.title')}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('sustainability.path.energy.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    {(t('sustainability.path.energy.items', { returnObjects: true }) as string[]).slice(0, 3).map((item: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-villa-olive" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {(t('sustainability.path.energy.items', { returnObjects: true }) as string[]).slice(3).map((item: string, index: number) => (
                      <div key={index + 3} className="flex items-center gap-3">
                        <CheckCircle className="text-villa-olive" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('sustainability.path.generation.title')}</h3>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-villa-olive" size={20} />
                  <span className="text-muted-foreground">{t('sustainability.path.generation.text')}</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('sustainability.path.projects.title')}</h3>
                <div className="space-y-3">
                  {(t('sustainability.path.projects.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-villa-olive" size={20} />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('sustainability.path.guests.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('sustainability.path.guests.text')}
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-8 bg-villa-olive-light p-8 rounded-lg text-center">
            <Globe className="text-villa-olive mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('sustainability.cta.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              {t('sustainability.cta.description')}
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="villa" size="lg">
                <a href="https://book.villaoliviaclara.com/" target="_blank" rel="noopener noreferrer">
                  Book Your Stay
                </a>
              </Button>
              <Button asChild variant="villa-outline" size="lg">
                <Link to="/contact">Contact Us</Link>
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

export default Sustainability;
