import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Cookie, Settings, BarChart, Shield, Mail, Phone } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const CookiePolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('cookies.title')}
        description={t('cookies.intro')}
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
            <Cookie className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">{t('cookies.title')}</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {t('cookies.intro')}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>{t('cookies.lastUpdated')}</strong>
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Table of Contents */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('cookies.toc.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="space-y-1 text-muted-foreground">
                {(t('cookies.toc.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <p key={index}>• {item}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Controller of the website */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('cookies.controller.title')}</h2>
            <div className="bg-sand-light p-6 rounded-lg border border-sand">
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>{t('cookies.controller.provider')}</strong> {t('cookies.controller.providerName')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>{t('cookies.controller.email')}</strong> {t('cookies.controller.emailAddress')}
              </p>
            </div>
          </section>

          {/* Addition to the privacy policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('cookies.addition.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('cookies.addition.text')}
            </p>
          </section>

          {/* What are cookies and similar technologies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('cookies.whatAre.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('cookies.whatAre.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('cookies.whatAre.text2')}
            </p>
          </section>

          {/* Legal basis */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('cookies.legalBasis.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('cookies.legalBasis.text')}
            </p>
          </section>

          {/* Rights of website visitor */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('cookies.rights.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('cookies.rights.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('cookies.rights.text2')}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Button variant="outline" size="sm" className="text-villa-olive border-villa-olive hover:bg-villa-olive hover:text-white">
                {t('cookies.rights.change')}
              </Button>
              <Button variant="outline" size="sm" className="text-villa-olive border-villa-olive hover:bg-villa-olive hover:text-white">
                {t('cookies.rights.history')}
              </Button>
              <Button variant="outline" size="sm" className="text-villa-olive border-villa-olive hover:bg-villa-olive hover:text-white">
                {t('cookies.rights.revoke')}
              </Button>
            </div>
          </section>

          {/* How to manage cookies in browser */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('cookies.manage.title')}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('cookies.manage.remove.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('cookies.manage.remove.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('cookies.manage.control.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('cookies.manage.control.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('cookies.manage.block.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('cookies.manage.block.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('cookies.manage.website.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('cookies.manage.website.text')}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-4">
              {t('cookies.manage.moreInfo')} <a href={`https://${t('cookies.manage.link')}`} className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">{t('cookies.manage.link')}</a>.
            </p>
          </section>

          {/* Types of cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('cookies.types.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-sand shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Shield className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">{t('cookies.types.essential.title')}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('cookies.types.essential.text')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-sand shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Settings className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">{t('cookies.types.functional.title')}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('cookies.types.functional.text')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-sand shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <BarChart className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">{t('cookies.types.statistics.title')}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('cookies.types.statistics.text')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-sand shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Cookie className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">{t('cookies.types.marketing.title')}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('cookies.types.marketing.text')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Who can set cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('cookies.whoSets.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('cookies.whoSets.text')}
            </p>
          </section>

          {/* Which cookies are used */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('cookies.used.title')}</h2>

            <div className="overflow-x-auto mb-4 bg-white rounded-lg border border-sand">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-sand-light border-b border-sand">
                    {(t('cookies.used.headers', { returnObjects: true }) as string[]).map((header, index) => (
                      <th key={index} className="px-4 py-3 text-left font-semibold text-villa-olive">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(t('cookies.used.rows', { returnObjects: true }) as string[][]).map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-sand last:border-0 hover:bg-gray-50">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 text-muted-foreground align-top">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8 bg-sand-light p-6 rounded-lg border border-sand">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('cookies.contact.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('cookies.contact.text')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-villa-olive" size={20} />
                <span className="text-muted-foreground">{t('cookies.contact.email')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-villa-olive" size={20} />
                <span className="text-muted-foreground">{t('cookies.contact.phone')}</span>
              </div>
              <div className="text-muted-foreground whitespace-pre-line pl-8">
                <strong>Villa Olivia Clara</strong><br />
                {t('cookies.contact.address')}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;