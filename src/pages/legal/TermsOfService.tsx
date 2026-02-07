import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, FileText, AlertTriangle, Euro, Calendar } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const TermsOfService = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('terms.title')}
        description={t('terms.intro')}
      />
      <Navigation />

      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50"
      >
        {t('common.skipToContent') || 'Skip to content'}
      </a>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="hover:bg-sand-light text-villa-olive">
            <Link to="/">
              <ArrowLeft size={16} className="mr-2" /> {t('common.backToHome')}
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12" id="main-content">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">{t('terms.title')}</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {t('terms.intro')}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>{t('terms.lastUpdated')}</strong>
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('terms.acceptance.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('terms.acceptance.text')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('terms.booking.title')}</h2>

            <div className="bg-sand-light p-6 rounded-lg mb-6 border border-sand">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-villa-olive" size={24} />
                <h3 className="text-xl font-semibold text-villa-olive">{t('terms.booking.process.title')}</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                {(t('terms.booking.process.list', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('terms.booking.minStay.title')}</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              {(t('terms.booking.minStay.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('terms.booking.checkIn.title')}</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              {(t('terms.booking.checkIn.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('terms.payment.title')}</h2>

            <div className="bg-villa-olive/5 p-6 rounded-lg mb-6 border border-villa-olive/10">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="text-villa-olive" size={24} />
                <h3 className="text-xl font-semibold text-villa-olive">{t('terms.payment.schedule.title')}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-villa-olive mb-2">{t('terms.payment.schedule.deposit.title')}</h4>
                  <p className="text-muted-foreground text-sm">{t('terms.payment.schedule.deposit.text')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-villa-olive mb-2">{t('terms.payment.schedule.final.title')}</h4>
                  <p className="text-muted-foreground text-sm">{t('terms.payment.schedule.final.text')}</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('terms.payment.methods.title')}</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              {(t('terms.payment.methods.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('terms.payment.fees.title')}</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              {(t('terms.payment.fees.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('terms.cancellation.title')}</h2>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">{t('terms.cancellation.important.title')}</h3>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    {t('terms.cancellation.important.text')}
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('terms.cancellation.schedule.title')}</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              {(t('terms.cancellation.schedule.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>• <span dangerouslySetInnerHTML={{ __html: item.replace(':', ':</strong>').replace(/^/, '<strong>') }} /></li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('terms.cancellation.forceMajeure.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('terms.cancellation.forceMajeure.text')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('terms.responsibilities.title')}</h2>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('terms.responsibilities.occupancy.title')}</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              {(t('terms.responsibilities.occupancy.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('terms.responsibilities.care.title')}</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              {(t('terms.responsibilities.care.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('terms.responsibilities.safety.title')}</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              {(t('terms.responsibilities.safety.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('terms.liability.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('terms.liability.text')}
            </p>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">{t('terms.liability.limitation.title')}</h3>
                  <p className="text-red-700 text-sm leading-relaxed">
                    {t('terms.liability.limitation.text')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('terms.privacy.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('terms.privacy.text')} <Link to="/privacy-policy" className="text-villa-olive hover:underline">{t('privacy.title')}</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('terms.governing.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('terms.governing.text')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('terms.changes.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('terms.changes.text')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('terms.contact.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('terms.contact.text')}
            </p>
            <div className="bg-sand p-6 rounded-lg border border-sand-dark">
              <div className="space-y-2 text-muted-foreground">
                <div><strong>{t('terms.contact.name')}</strong></div>
                <div>{t('terms.contact.address')}</div>
                <div>{t('terms.contact.email')}</div>
                <div>{t('terms.contact.phone')}</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-hero text-white p-8 rounded-lg text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{t('terms.cta.title')}</h3>
            <p className="mb-6 text-white/90">
              {t('terms.cta.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="default" className="bg-white text-villa-olive hover:bg-white/90 border-0">
                <Link to="/contact">{t('terms.cta.book')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white bg-transparent">
                <Link to="/villa">{t('terms.cta.tour')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;