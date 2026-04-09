import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';
import { ArticleStructuredData, FAQStructuredData } from '@/components/StructuredDataSchemas';
import { BlogShare } from '@/components/SocialShare';
import { Calendar, User, Clock, ArrowLeft, MapPin, Waves, UtensilsCrossed, Footprints, Mountain, Church, Palette } from 'lucide-react';

import platisGialos from '@/assets/Sifnos/Beaches/plats-gialos.webp';
import chrysopigi from '@/assets/Sifnos/Beaches/chrysopigi.webp';
import vathi from '@/assets/Sifnos/Beaches/vathi.webp';
import faros from '@/assets/Sifnos/Beaches/faros.webp';
import apollonia from '@/assets/Sifnos/villages/apollonia.webp';
import kastro from '@/assets/Sifnos/villages/kastro.webp';
import artemonas from '@/assets/Sifnos/villages/artemonas.webp';
import poolArea from '@/assets/villa-gallery/Villa-Olivia-Clara_003_the-pool-area.jpg';
import terraceDining from '@/assets/villa-gallery/Villa-Olivia-Clara_040_dining-at-the-terrace.jpg';

const blogSlugs: Record<string, string> = {
  en: 'things-to-do-in-sifnos-greece-guide',
  el: 'τι-να-κανετε-στη-σιφνο-οδηγος',
  fr: 'activites-sifnos-grece-guide',
  it: 'cosa-fare-a-sifnos-grecia-guida',
};

const ThingsToDoSifnos = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;
  const currentSlug = blogSlugs[currentLang] || blogSlugs.en;

  const alternateLanguages = [
    { lang: 'en', url: `https://villaoliviaclara.com/blog/${blogSlugs.en}` },
    { lang: 'el', url: `https://villaoliviaclara.com/el/blog/${blogSlugs.el}` },
    { lang: 'fr', url: `https://villaoliviaclara.com/fr/blog/${blogSlugs.fr}` },
    { lang: 'it', url: `https://villaoliviaclara.com/it/blog/${blogSlugs.it}` },
    { lang: 'x-default', url: `https://villaoliviaclara.com/blog/${blogSlugs.en}` },
  ];

  const faqs = [
    { question: t('blogThingsToDo.faq.q1'), answer: t('blogThingsToDo.faq.a1') },
    { question: t('blogThingsToDo.faq.q2'), answer: t('blogThingsToDo.faq.a2') },
    { question: t('blogThingsToDo.faq.q3'), answer: t('blogThingsToDo.faq.a3') },
    { question: t('blogThingsToDo.faq.q4'), answer: t('blogThingsToDo.faq.a4') },
    { question: t('blogThingsToDo.faq.q5'), answer: t('blogThingsToDo.faq.a5') },
    { question: t('blogThingsToDo.faq.q6'), answer: t('blogThingsToDo.faq.a6') },
    { question: t('blogThingsToDo.faq.q7'), answer: t('blogThingsToDo.faq.a7') },
    { question: t('blogThingsToDo.faq.q8'), answer: t('blogThingsToDo.faq.a8') },
    { question: t('blogThingsToDo.faq.q9'), answer: t('blogThingsToDo.faq.a9') },
    { question: t('blogThingsToDo.faq.q10'), answer: t('blogThingsToDo.faq.a10') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('blogThingsToDo.seo.title')}
        description={t('blogThingsToDo.seo.description')}
        keywords={t('blogThingsToDo.seo.keywords')}
        ogImage={poolArea}
        canonicalUrl={`https://villaoliviaclara.com${langPrefix}/blog/${currentSlug}`}
        alternateLanguages={alternateLanguages}
      />
      <ArticleStructuredData
        title={t('blogThingsToDo.seo.title')}
        description={t('blogThingsToDo.seo.description')}
        image={`https://villaoliviaclara.com${poolArea}`}
        publishDate="2026-04-09"
        modifiedDate="2026-04-09"
        author="Elena Philippou"
        slug={currentSlug}
        lang={currentLang}
      />
      <FAQStructuredData faqs={faqs} />
      <Navigation />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to blog */}
        <Link
          to={`${langPrefix}/blog`}
          className="inline-flex items-center gap-2 text-villa-olive hover:text-villa-olive/80 mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>{t('blog.title')}</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-villa-olive mb-6 leading-tight">
            {t('blogThingsToDo.h1')}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Elena Philippou</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2026-04-09">
                {new Date('2026-04-09').toLocaleDateString(
                  currentLang === 'el' ? 'el-GR' : currentLang === 'fr' ? 'fr-FR' : currentLang === 'it' ? 'it-IT' : 'en-US',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                )}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>12 {t('blog.readTime')}</span>
            </div>
          </div>
          <BlogShare
            slug={currentSlug}
            title={t('blogThingsToDo.h1')}
            description={t('blogThingsToDo.seo.description')}
          />
        </header>

        {/* Hero Image */}
        <img
          src={platisGialos}
          alt={t('blogThingsToDo.images.hero')}
          className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-12"
          loading="eager"
        />

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed text-foreground">
            {t('blogThingsToDo.intro.p1')}
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            {t('blogThingsToDo.intro.p2')}
          </p>
        </div>

        {/* Section 1: Beaches */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-villa-olive mb-6 flex items-center gap-3">
            <Waves className="text-villa-blue" size={28} />
            {t('blogThingsToDo.beaches.title')}
          </h2>
          <p className="text-foreground leading-relaxed mb-6">{t('blogThingsToDo.beaches.intro')}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <img src={platisGialos} alt={t('blogThingsToDo.images.platisGialos')} className="w-full h-48 object-cover rounded-xl mb-4" loading="lazy" />
              <h3 className="text-xl font-bold text-villa-olive mb-2">{t('blogThingsToDo.beaches.platis.title')}</h3>
              <p className="text-foreground leading-relaxed">{t('blogThingsToDo.beaches.platis.desc')}</p>
            </div>
            <div>
              <img src={chrysopigi} alt={t('blogThingsToDo.images.chrysopigi')} className="w-full h-48 object-cover rounded-xl mb-4" loading="lazy" />
              <h3 className="text-xl font-bold text-villa-olive mb-2">{t('blogThingsToDo.beaches.chrysopigi.title')}</h3>
              <p className="text-foreground leading-relaxed">{t('blogThingsToDo.beaches.chrysopigi.desc')}</p>
            </div>
            <div>
              <img src={vathi} alt={t('blogThingsToDo.images.vathi')} className="w-full h-48 object-cover rounded-xl mb-4" loading="lazy" />
              <h3 className="text-xl font-bold text-villa-olive mb-2">{t('blogThingsToDo.beaches.vathi.title')}</h3>
              <p className="text-foreground leading-relaxed">{t('blogThingsToDo.beaches.vathi.desc')}</p>
            </div>
            <div>
              <img src={faros} alt={t('blogThingsToDo.images.faros')} className="w-full h-48 object-cover rounded-xl mb-4" loading="lazy" />
              <h3 className="text-xl font-bold text-villa-olive mb-2">{t('blogThingsToDo.beaches.faros.title')}</h3>
              <p className="text-foreground leading-relaxed">{t('blogThingsToDo.beaches.faros.desc')}</p>
            </div>
          </div>
          <p className="text-foreground leading-relaxed">
            {t('blogThingsToDo.beaches.villaLink')}{' '}
            <Link to={`${langPrefix}/sifnos/beaches`} className="text-villa-olive font-semibold underline hover:text-villa-olive/80">
              {t('blogThingsToDo.beaches.villaLinkText')}
            </Link>
          </p>
        </section>

        {/* Section 2: Villages & Culture */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-villa-olive mb-6 flex items-center gap-3">
            <MapPin className="text-villa-terracotta" size={28} />
            {t('blogThingsToDo.villages.title')}
          </h2>
          <p className="text-foreground leading-relaxed mb-6">{t('blogThingsToDo.villages.intro')}</p>

          <div className="space-y-8">
            <div className="md:flex gap-6">
              <img src={apollonia} alt={t('blogThingsToDo.images.apollonia')} className="w-full md:w-1/3 h-48 object-cover rounded-xl mb-4 md:mb-0" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-villa-olive mb-2">{t('blogThingsToDo.villages.apollonia.title')}</h3>
                <p className="text-foreground leading-relaxed">{t('blogThingsToDo.villages.apollonia.desc')}</p>
              </div>
            </div>
            <div className="md:flex gap-6">
              <img src={kastro} alt={t('blogThingsToDo.images.kastro')} className="w-full md:w-1/3 h-48 object-cover rounded-xl mb-4 md:mb-0" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-villa-olive mb-2">{t('blogThingsToDo.villages.kastro.title')}</h3>
                <p className="text-foreground leading-relaxed">{t('blogThingsToDo.villages.kastro.desc')}</p>
              </div>
            </div>
            <div className="md:flex gap-6">
              <img src={artemonas} alt={t('blogThingsToDo.images.artemonas')} className="w-full md:w-1/3 h-48 object-cover rounded-xl mb-4 md:mb-0" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-villa-olive mb-2">{t('blogThingsToDo.villages.artemonas.title')}</h3>
                <p className="text-foreground leading-relaxed">{t('blogThingsToDo.villages.artemonas.desc')}</p>
              </div>
            </div>
          </div>
          <p className="text-foreground leading-relaxed mt-6">
            {t('blogThingsToDo.villages.sifnosLink')}{' '}
            <Link to={`${langPrefix}/sifnos`} className="text-villa-olive font-semibold underline hover:text-villa-olive/80">
              {t('blogThingsToDo.villages.sifnosLinkText')}
            </Link>
          </p>
        </section>

        {/* Section 3: Hiking */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-villa-olive mb-6 flex items-center gap-3">
            <Footprints className="text-villa-olive" size={28} />
            {t('blogThingsToDo.hiking.title')}
          </h2>
          <p className="text-foreground leading-relaxed mb-4">{t('blogThingsToDo.hiking.intro')}</p>

          <div className="bg-villa-olive/5 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-villa-olive mb-4">{t('blogThingsToDo.hiking.trails.title')}</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-foreground">
                <Mountain size={18} className="text-villa-olive mt-1 shrink-0" />
                <div><strong>{t('blogThingsToDo.hiking.trails.t1.name')}</strong> — {t('blogThingsToDo.hiking.trails.t1.desc')}</div>
              </li>
              <li className="flex gap-3 text-foreground">
                <Mountain size={18} className="text-villa-olive mt-1 shrink-0" />
                <div><strong>{t('blogThingsToDo.hiking.trails.t2.name')}</strong> — {t('blogThingsToDo.hiking.trails.t2.desc')}</div>
              </li>
              <li className="flex gap-3 text-foreground">
                <Mountain size={18} className="text-villa-olive mt-1 shrink-0" />
                <div><strong>{t('blogThingsToDo.hiking.trails.t3.name')}</strong> — {t('blogThingsToDo.hiking.trails.t3.desc')}</div>
              </li>
              <li className="flex gap-3 text-foreground">
                <Mountain size={18} className="text-villa-olive mt-1 shrink-0" />
                <div><strong>{t('blogThingsToDo.hiking.trails.t4.name')}</strong> — {t('blogThingsToDo.hiking.trails.t4.desc')}</div>
              </li>
            </ul>
          </div>
          <p className="text-foreground leading-relaxed">{t('blogThingsToDo.hiking.tips')}</p>
        </section>

        {/* Section 4: Food & Gastronomy */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-villa-olive mb-6 flex items-center gap-3">
            <UtensilsCrossed className="text-villa-gold" size={28} />
            {t('blogThingsToDo.food.title')}
          </h2>
          <img src={terraceDining} alt={t('blogThingsToDo.images.dining')} className="w-full h-64 object-cover rounded-xl mb-6" loading="lazy" />
          <p className="text-foreground leading-relaxed mb-4">{t('blogThingsToDo.food.intro')}</p>

          <h3 className="text-xl font-bold text-villa-olive mb-3">{t('blogThingsToDo.food.dishes.title')}</h3>
          <ul className="list-disc list-inside space-y-2 text-foreground mb-6">
            <li><strong>{t('blogThingsToDo.food.dishes.d1.name')}</strong> — {t('blogThingsToDo.food.dishes.d1.desc')}</li>
            <li><strong>{t('blogThingsToDo.food.dishes.d2.name')}</strong> — {t('blogThingsToDo.food.dishes.d2.desc')}</li>
            <li><strong>{t('blogThingsToDo.food.dishes.d3.name')}</strong> — {t('blogThingsToDo.food.dishes.d3.desc')}</li>
            <li><strong>{t('blogThingsToDo.food.dishes.d4.name')}</strong> — {t('blogThingsToDo.food.dishes.d4.desc')}</li>
          </ul>

          <h3 className="text-xl font-bold text-villa-olive mb-3">{t('blogThingsToDo.food.cooking.title')}</h3>
          <p className="text-foreground leading-relaxed">{t('blogThingsToDo.food.cooking.desc')}</p>
        </section>

        {/* Section 5: Pottery */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-villa-olive mb-6 flex items-center gap-3">
            <Palette className="text-villa-terracotta" size={28} />
            {t('blogThingsToDo.pottery.title')}
          </h2>
          <p className="text-foreground leading-relaxed mb-4">{t('blogThingsToDo.pottery.intro')}</p>
          <p className="text-foreground leading-relaxed mb-4">{t('blogThingsToDo.pottery.workshops')}</p>
          <p className="text-foreground leading-relaxed">{t('blogThingsToDo.pottery.tradition')}</p>
        </section>

        {/* Section 6: Monasteries & Churches */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-villa-olive mb-6 flex items-center gap-3">
            <Church className="text-villa-blue" size={28} />
            {t('blogThingsToDo.monasteries.title')}
          </h2>
          <p className="text-foreground leading-relaxed mb-4">{t('blogThingsToDo.monasteries.intro')}</p>

          <div className="space-y-4">
            <div className="bg-villa-olive/5 rounded-xl p-5">
              <h3 className="text-lg font-bold text-villa-olive mb-2">{t('blogThingsToDo.monasteries.chrysopigi.title')}</h3>
              <p className="text-foreground leading-relaxed">{t('blogThingsToDo.monasteries.chrysopigi.desc')}</p>
            </div>
            <div className="bg-villa-olive/5 rounded-xl p-5">
              <h3 className="text-lg font-bold text-villa-olive mb-2">{t('blogThingsToDo.monasteries.vryssi.title')}</h3>
              <p className="text-foreground leading-relaxed">{t('blogThingsToDo.monasteries.vryssi.desc')}</p>
            </div>
            <div className="bg-villa-olive/5 rounded-xl p-5">
              <h3 className="text-lg font-bold text-villa-olive mb-2">{t('blogThingsToDo.monasteries.prophet.title')}</h3>
              <p className="text-foreground leading-relaxed">{t('blogThingsToDo.monasteries.prophet.desc')}</p>
            </div>
          </div>
        </section>

        {/* Section 7: Boat Tours */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-villa-olive mb-6 flex items-center gap-3">
            <Waves className="text-villa-blue" size={28} />
            {t('blogThingsToDo.boatTours.title')}
          </h2>
          <p className="text-foreground leading-relaxed mb-4">{t('blogThingsToDo.boatTours.intro')}</p>
          <p className="text-foreground leading-relaxed mb-4">{t('blogThingsToDo.boatTours.destinations')}</p>
          <p className="text-foreground leading-relaxed">
            {t('blogThingsToDo.boatTours.linkText')}{' '}
            <Link to={`${langPrefix}/sifnos/boat-tours`} className="text-villa-olive font-semibold underline hover:text-villa-olive/80">
              {t('blogThingsToDo.boatTours.linkLabel')}
            </Link>
          </p>
        </section>

        {/* Section 8: Where to Stay */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-villa-olive mb-6">
            {t('blogThingsToDo.whereToStay.title')}
          </h2>
          <img src={poolArea} alt={t('blogThingsToDo.images.villa')} className="w-full h-64 object-cover rounded-xl mb-6" loading="lazy" />
          <p className="text-foreground leading-relaxed mb-4">{t('blogThingsToDo.whereToStay.intro')}</p>
          <p className="text-foreground leading-relaxed mb-4">{t('blogThingsToDo.whereToStay.villaHighlight')}</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Button asChild variant="villa" size="lg">
              <Link to={`${langPrefix}/villa`}>{t('blogThingsToDo.whereToStay.ctaVilla')}</Link>
            </Button>
            <Button asChild variant="villa-outline" size="lg">
              <Link to={`${langPrefix}/blog/best-sifnos-villas-with-pool-guide`}>{t('blogThingsToDo.whereToStay.ctaVillas')}</Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-villa-olive mb-8">
            {t('blogThingsToDo.faqTitle')}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-villa-stone rounded-xl p-6">
                <h3 className="text-lg font-bold text-villa-olive mb-3">{faq.question}</h3>
                <p className="text-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-subtle rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-villa-olive mb-4">
            {t('blogThingsToDo.cta.title')}
          </h2>
          <p className="text-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            {t('blogThingsToDo.cta.desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="villa" size="lg">
              <Link to={`${langPrefix}/contact`}>{t('nav.bookNow')}</Link>
            </Button>
            <Button asChild variant="villa-outline" size="lg">
              <Link to={`${langPrefix}/reviews`}>{t('common.readMoreReviews')}</Link>
            </Button>
          </div>
        </section>
      </article>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ThingsToDoSifnos;
