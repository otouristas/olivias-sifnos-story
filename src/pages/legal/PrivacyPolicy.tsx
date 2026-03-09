import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, FileText, Globe, Server, UserCheck, AlertCircle, HelpCircle, Mail, Phone } from 'lucide-react';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('privacy.title')}
        description={t('privacy.subtitle')}
        canonicalUrl={`https://villaoliviaclara.com${langPrefix}/privacy-policy`}
        alternateLanguages={[
          { lang: 'en', url: 'https://villaoliviaclara.com/privacy-policy' },
          { lang: 'el', url: 'https://villaoliviaclara.com/el/privacy-policy' },
          { lang: 'fr', url: 'https://villaoliviaclara.com/fr/privacy-policy' },
          { lang: 'it', url: 'https://villaoliviaclara.com/it/privacy-policy' },
          { lang: 'x-default', url: 'https://villaoliviaclara.com/privacy-policy' }
        ]}
      />

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-villa-olive hover:text-villa-olive/80 mb-8 transition-colors">
          <ArrowLeft size={16} /> {t('common.backToHome')}
        </Link>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-villa-olive mb-6">{t('privacy.title')}</h1>
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
          {t('privacy.lastUpdated')}
        </p>

        <div className="bg-sand-light p-6 rounded-lg mb-10 border border-sand">
          <p className="text-villa-olive font-medium leading-relaxed">
            {t('privacy.subtitle')}
          </p>
        </div>

        <div className="prose prose-stone max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t('privacy.intro.text1')}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t('privacy.intro.text2')} <a href={t('privacy.intro.text2Link')} className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">{t('privacy.intro.text2Link')}</a>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t('privacy.intro.text3')}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {t('privacy.intro.text4')}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-villa-olive mb-4 flex items-center gap-2">
              <FileText className="text-villa-olive" size={24} />
              {t('privacy.summary.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('privacy.summary.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {(t('privacy.summary.points', { returnObjects: true }) as any[]).map((point, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border border-sand shadow-sm">
                  <h3 className="font-bold text-villa-olive mb-2 text-lg">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.text}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground italic">
              {t('privacy.summary.moreInfo')}
            </p>
          </section>

          <section className="mb-10 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('privacy.toc.title')}</h2>
            <ol className="list-decimal pl-5 space-y-2 text-villa-olive font-medium">
              {(t('privacy.toc.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}><a href={`#section-${index}`} className="hover:underline">{item}</a></li>
              ))}
            </ol>
          </section>

          {/* What Information Do We Collect? */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4 flex items-center gap-2">
              <Eye className="text-villa-olive" size={24} />
              {t('privacy.collection.title')}
            </h2>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('privacy.collection.personalInfo.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.collection.personalInfo.inShort')}</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.collection.personalInfo.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.collection.personalInfo.subtitle')}</strong> {t('privacy.collection.personalInfo.text2')}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              {(t('privacy.collection.personalInfo.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.collection.personalInfo.sensitiveInfo')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.collection.personalInfo.paymentData')} <a href={t('privacy.collection.personalInfo.paymentLink')} className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">{t('privacy.collection.personalInfo.paymentLink')}</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t('privacy.collection.personalInfo.accuracy')}
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('privacy.collection.autoInfo.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.collection.autoInfo.inShort')}</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.collection.autoInfo.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.collection.autoInfo.text2')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.collection.autoInfo.text3')}
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('privacy.collection.autoInfo.logData.title')}</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.collection.autoInfo.logData.text')}
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('privacy.collection.autoInfo.deviceData.title')}</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.collection.autoInfo.deviceData.text')}
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('privacy.collection.autoInfo.locationData.title')}</h4>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.collection.autoInfo.locationData.text')}
            </p>
          </section>

          {/* How Do We Process Your Information? */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4 flex items-center gap-2">
              <Server className="text-villa-olive" size={24} />
              {t('privacy.processing.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.processing.inShort')}</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.processing.text')}
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
              {(t('privacy.processing.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </section>

          {/* Legal Bases */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4 flex items-center gap-2">
              <Globe className="text-villa-olive" size={24} />
              {t('privacy.legalBases.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.legalBases.inShort')}</strong>
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('privacy.legalBases.euUk.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.legalBases.euUk.text')}
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
              {(t('privacy.legalBases.euUk.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3 mt-6">{t('privacy.legalBases.canada.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.legalBases.canada.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.legalBases.canada.text2')}
            </p>
          </section>

          {/* Sharing Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('privacy.sharing.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.sharing.inShort')}</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.sharing.text')}
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('privacy.cookies.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.cookies.inShort')}</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.cookies.text')}
            </p>
          </section>

          {/* Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('privacy.retention.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.retention.inShort')}</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.retention.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.retention.text2')}
            </p>
          </section>

          {/* Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4 flex items-center gap-2">
              <Lock className="text-villa-olive" size={24} />
              {t('privacy.security.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.security.inShort')}</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.security.text')}
            </p>
          </section>

          {/* Minors */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4 flex items-center gap-2">
              <UserCheck className="text-villa-olive" size={24} />
              {t('privacy.minors.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.minors.inShort')}</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.minors.text')}
            </p>
          </section>

          {/* Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4 flex items-center gap-2">
              <Shield className="text-villa-olive" size={24} />
              {t('privacy.rights.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.rights.inShort')}</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.rights.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.rights.text2')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.rights.text3')} <a href={t('privacy.rights.link1')} className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">{t('privacy.rights.link1')}</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.rights.text4')} <a href={t('privacy.rights.link2')} className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">{t('privacy.rights.link2')}</a>.
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('privacy.rights.consent.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.rights.consent.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.rights.consent.text2')}
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('privacy.rights.marketing.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.rights.marketing.text')}
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('privacy.rights.cookies.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.rights.cookies.text')} <a href={t('privacy.rights.cookies.link')} className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">{t('privacy.rights.cookies.link')}</a>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.rights.questions')}
            </p>
          </section>

          {/* Controls For Do-Not-Track Features */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('privacy.dnt.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.dnt.text')}
            </p>
          </section>

          {/* Do California Residents Have Specific Privacy Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4 flex items-center gap-2">
              <AlertCircle className="text-villa-olive" size={24} />
              {t('privacy.california.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.california.inShort')}</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.california.ShineTheLight')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.california.under18')}
            </p>
          </section>

          {/* CCPA Privacy Notice */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('privacy.ccpa.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.text1')}
            </p>
            <ol className="text-muted-foreground space-y-2 mb-4 ml-6">
              {(t('privacy.ccpa.list1', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.text2')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.text3')}
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('privacy.ccpa.collection.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.collection.text')}
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    {(t('privacy.ccpa.collection.table.headers', { returnObjects: true }) as string[]).map((header, index) => (
                      <th key={index} className="border border-gray-300 px-4 py-2 text-left">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(t('privacy.ccpa.collection.table.rows', { returnObjects: true }) as string[][]).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.collection.other')}
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('privacy.ccpa.usage.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.usage.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.usage.text2')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.usage.text3')}
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">{t('privacy.ccpa.sharing.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.sharing.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.sharing.text2')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.ccpa.sharing.text3')}
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3 pt-6">{t('privacy.ccpa.rights.title')}</h3>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('privacy.ccpa.rights.deletion.title')}</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.rights.deletion.text')}
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('privacy.ccpa.rights.informed.title')}</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.rights.informed.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.rights.informed.text2')}
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('privacy.ccpa.rights.nonDiscrimination.title')}</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.rights.nonDiscrimination.text')}
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('privacy.ccpa.rights.verification.title')}</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.rights.verification.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.rights.verification.text2')}
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">{t('privacy.ccpa.rights.other.title')}</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.ccpa.rights.other.text1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.ccpa.rights.other.text2')}
            </p>
          </section>

          {/* Do We Make Updates To This Notice */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4 flex items-center gap-2">
              <HelpCircle className="text-villa-olive" size={24} />
              {t('privacy.updates.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>{t('privacy.updates.inShort')}</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.updates.text')}
            </p>
          </section>

          {/* How Can You Contact Us About This Notice */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('privacy.contact.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.contact.text1')}
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-muted-foreground whitespace-pre-line">
                {t('privacy.contact.address1')}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.contact.text2')}
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-muted-foreground whitespace-pre-line">
                {t('privacy.contact.address2')}
              </p>
            </div>
          </section>

          {/* How Can You Review, Update, Or Delete The Data We Collect From You */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('privacy.review.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.review.text')}
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8 bg-sand-light p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">{t('privacy.footer.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('privacy.footer.text')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-villa-olive" size={20} />
                <span className="text-muted-foreground">{t('privacy.footer.email')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-villa-olive" size={20} />
                <span className="text-muted-foreground">{t('privacy.footer.phone')}</span>
              </div>
              <div className="text-muted-foreground whitespace-pre-line">
                <strong>Villa Olivia Clara</strong><br />
                {t('privacy.footer.address')}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;