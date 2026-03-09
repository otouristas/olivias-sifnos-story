import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ArrowLeft, FileText, Shield, AlertTriangle, Phone, Mail, Clock } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const RentalConditions = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('rental.title')}
        description={t('rental.intro')}
        canonicalUrl={`https://villaoliviaclara.com${langPrefix}/rental-conditions`}
        alternateLanguages={[
          { lang: 'en', url: 'https://villaoliviaclara.com/rental-conditions' },
          { lang: 'el', url: 'https://villaoliviaclara.com/el/rental-conditions' },
          { lang: 'fr', url: 'https://villaoliviaclara.com/fr/rental-conditions' },
          { lang: 'it', url: 'https://villaoliviaclara.com/it/rental-conditions' },
          { lang: 'x-default', url: 'https://villaoliviaclara.com/rental-conditions' }
        ]}
      />
      <Navigation />

      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50"
      >
        {t('common.skipToContent') || 'Skip to content'}
      </a>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            <h1 className="text-4xl font-display font-bold text-villa-olive">{t('rental.title')}</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {t('rental.intro')}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Section 1: Agreement & Legal Framework */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">{t('rental.section1.title')}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section1.parties.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('rental.section1.parties.text')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section1.property.title')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('rental.section1.property.text')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section1.governing.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('rental.section1.governing.text')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section1.booking.title')}</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-sand shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-villa-olive mb-2">{t('rental.section1.booking.minStay.title')}</h4>
                        <p className="text-muted-foreground text-sm">{t('rental.section1.booking.minStay.text')}</p>
                      </CardContent>
                    </Card>
                    <Card className="border-sand shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-villa-olive mb-2">{t('rental.section1.booking.rent.title')}</h4>
                        <p className="text-muted-foreground text-sm">{t('rental.section1.booking.rent.text')}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('rental.section1.booking.schedule.title')}</h4>
                    <ul className="text-muted-foreground space-y-2 ml-6">
                      {(t('rental.section1.booking.schedule.list', { returnObjects: true }) as string[]).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('rental.section1.booking.cancellation.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('rental.section1.booking.cancellation.text')}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section1.payments.title')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('rental.section1.payments.text')}
                </p>
                <ul className="text-muted-foreground space-y-2 ml-6 mb-4">
                  {(t('rental.section1.payments.list', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section1.taxes.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('rental.section1.taxes.text')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Operational & Financial Policies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">{t('rental.section2.title')}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section2.deposit.title')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('rental.section2.deposit.text')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section2.services.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-sand shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">{t('rental.section2.services.included.title')}</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        {(t('rental.section2.services.included.list', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-sand shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">{t('rental.section2.services.additional.title')}</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        {(t('rental.section2.services.additional.list', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section2.failure.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('rental.section2.failure.text')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Guest Conduct & Use of Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">{t('rental.section3.title')}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section3.rules.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {(t('rental.section3.rules.items', { returnObjects: true }) as string[]).slice(0, 4).map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Shield className="text-villa-olive" size={16} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {(t('rental.section3.rules.items', { returnObjects: true }) as string[]).slice(4).map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Shield className="text-villa-olive" size={16} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section3.checkIn.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-sand shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">{t('rental.section3.checkIn.in.title')}</h4>
                      <ul className="text-muted-foreground text-sm space-y-2">
                        {(t('rental.section3.checkIn.in.list', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-sand shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">{t('rental.section3.checkIn.out.title')}</h4>
                      <ul className="text-muted-foreground text-sm space-y-2">
                        {(t('rental.section3.checkIn.out.list', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section3.quiet.title')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('rental.section3.quiet.text')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section3.minors.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('rental.section3.minors.text')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Health, Safety & Risk */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">{t('rental.section4.title')}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section4.liability.title')}</h3>
                <ul className="text-muted-foreground space-y-2 ml-6">
                  {(t('rental.section4.liability.list', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section4.pool.title')}</h3>
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-amber-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-3">{t('rental.section4.pool.important')}</h4>
                      <ul className="text-amber-700 text-sm space-y-1">
                        {(t('rental.section4.pool.list', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section4.environment.title')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('rental.section4.environment.text')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    {(t('rental.section4.environment.list1', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    {(t('rental.section4.environment.list2', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section4.forceMajeure.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('rental.section4.forceMajeure.text')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Guest Support & Communication */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">{t('rental.section5.title')}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section5.info.title')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-villa-olive mb-2">{t('rental.section5.info.privacy.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('rental.section5.info.privacy.text')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-villa-olive mb-2">{t('rental.section5.info.welcome.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('rental.section5.info.welcome.text')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-villa-olive mb-2">{t('rental.section5.info.lost.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('rental.section5.info.lost.text')}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section5.emergency.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-sand shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">{t('rental.section5.emergency.services.title')}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t('rental.section5.emergency.services.fire')}</span>
                          <span className="font-medium">199</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t('rental.section5.emergency.services.medical')}</span>
                          <span className="font-medium">166</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t('rental.section5.emergency.services.police')}</span>
                          <span className="font-medium">100</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-sand shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">{t('rental.section5.emergency.villa.title')}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="text-villa-olive" size={14} />
                          <span className="text-muted-foreground">{t('rental.section5.emergency.villa.urgent')}</span>
                        </div>
                        <p className="font-medium ml-6">+30 697 191 9382</p>
                        <div className="flex items-center gap-2">
                          <Mail className="text-villa-olive" size={14} />
                          <span className="text-muted-foreground">{t('rental.section5.emergency.villa.nonUrgent')}</span>
                        </div>
                        <p className="font-medium ml-6">elena@villaoliviaclara.com</p>
                        <div className="flex items-center gap-2">
                          <Clock className="text-villa-olive" size={14} />
                          <span className="text-muted-foreground">{t('rental.section5.emergency.villa.response')}</span>
                        </div>
                        <p className="text-muted-foreground ml-6">{t('rental.section5.emergency.villa.responseTime')}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section5.wifi.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('rental.section5.wifi.text')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">{t('rental.section5.language.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('rental.section5.language.text')}
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8 bg-sand-light p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('rental.questions.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('rental.questions.text')}
            </p>
            <div className="flex gap-4">
              <Button asChild variant="default" className="bg-villa-olive hover:bg-villa-olive-dark text-white">
                <a href="mailto:elena@villaoliviaclara.com">
                  <Mail size={16} className="mr-2" />
                  {t('rental.questions.contact')}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-villa-olive text-villa-olive hover:bg-sand">
                <a href="tel:+306971919382">
                  <Phone size={16} className="mr-2" />
                  {t('rental.questions.call')}
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default RentalConditions;
