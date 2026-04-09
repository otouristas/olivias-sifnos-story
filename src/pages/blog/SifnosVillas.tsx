import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';
import { ArticleStructuredData, FAQStructuredData } from '@/components/StructuredDataSchemas';
import { BlogShare } from '@/components/SocialShare';
import { Calendar, User, Clock, ArrowLeft, CheckCircle, MapPin, Sun, Waves, UtensilsCrossed, Footprints } from 'lucide-react';

import poolArea from '@/assets/villa-gallery/Villa-Olivia-Clara_003_the-pool-area.jpg';
import poolCabana from '@/assets/villa-gallery/Villa-Olivia-Clara_001_pool-side-cabana.webp';
import livingRoom from '@/assets/villa-gallery/Villa-Olivia-Clara_029_living-room.jpg';
import masterBedroom from '@/assets/villa-gallery/Villa-Olivia-Clara_014_master-bedroom.jpg';
import kitchen from '@/assets/villa-gallery/Villa-Olivia-Clara_034_kitchen.webp';
import terraceDining from '@/assets/villa-gallery/Villa-Olivia-Clara_040_dining-at-the-terrace.jpg';
import aerialView from '@/assets/villa-gallery/Villa-Olivia-Clara_042_aerial-view-of-villa.jpg';
import platisGialos from '@/assets/Sifnos/Beaches/plats-gialos.webp';
import apollonia from '@/assets/Sifnos/villages/apollonia.webp';
import vathi from '@/assets/Sifnos/Beaches/vathi.webp';
import kastro from '@/assets/Sifnos/villages/kastro.webp';
import chrysopigi from '@/assets/Sifnos/Beaches/chrysopigi.webp';

const blogSlugs: Record<string, string> = {
  en: 'best-sifnos-villas-with-pool-guide',
  el: 'καλυτερες-βιλες-σιφνος-με-πισινα',
  fr: 'meilleures-villas-sifnos-piscine-guide',
  it: 'migliori-ville-sifnos-piscina-guida',
};

const SifnosVillas = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;
  const currentSlug = blogSlugs[currentLang] || blogSlugs.en;

  const faqs = [
    {
      question: t('blog.sifnosVillas.faq1q', 'Where are the best Sifnos villas with private pool?'),
      answer: t('blog.sifnosVillas.faq1a', 'The best Sifnos villas with private pools are located in Platis Gialos, Apollonia, and Vathi. Platis Gialos offers beach proximity, while Apollonia provides village charm. Villa Olivia Clara combines both—a heated private pool with panoramic sea views, just 7 minutes from Platis Gialos beach.')
    },
    {
      question: t('blog.sifnosVillas.faq2q', 'How much does a luxury villa in Sifnos cost per night?'),
      answer: t('blog.sifnosVillas.faq2a', 'Luxury villas in Sifnos range from €200 to €800 per night depending on season, size, and amenities. Peak season (July-August) commands premium rates. For a family of 6-8, a villa often costs less per person than equivalent hotel rooms, with the added benefit of a private pool, kitchen, and living space.')
    },
    {
      question: t('blog.sifnosVillas.faq3q', 'Are Sifnos villas family-friendly for children?'),
      answer: t('blog.sifnosVillas.faq3a', 'Yes, most Sifnos villas are excellent for families. Villa Olivia Clara accommodates up to 8 guests with baby cots, high chairs, and child-safe pool areas available on request. The private garden and outdoor spaces give children room to play safely while parents relax.')
    },
    {
      question: t('blog.sifnosVillas.faq4q', 'Can I bring pets to a Sifnos villa?'),
      answer: t('blog.sifnosVillas.faq4a', 'Pet policies vary by villa. Some Sifnos villas welcome well-behaved pets, while others do not allow animals to maintain allergy-free environments for all guests. Always confirm with your host before booking. Villa Olivia Clara does not accept pets to ensure the highest comfort standards.')
    },
    {
      question: t('blog.sifnosVillas.faq5q', 'How far is Platis Gialos from the best Sifnos villas?'),
      answer: t('blog.sifnosVillas.faq5a', 'Platis Gialos is the most popular beach area for villa rentals. Villa Olivia Clara is just a 7-minute walk from Platis Gialos beach. Other villas in the area range from 5-20 minutes by car. Platis Gialos also has restaurants, shops, and pottery workshops within walking distance.')
    },
    {
      question: t('blog.sifnosVillas.faq6q', 'Is a villa in Sifnos better than a hotel?'),
      answer: t('blog.sifnosVillas.faq6a', 'For families and groups, a Sifnos villa offers significantly more value than a hotel. You get a private pool, full kitchen, multiple bedrooms, outdoor dining areas, and authentic island atmosphere. The cost per person is often lower than hotel rooms, especially for groups of 4-8. Read our detailed villa vs hotel comparison for more insights.')
    },
    {
      question: t('blog.sifnosVillas.faq7q', 'When is the best time to book a Sifnos villa?'),
      answer: t('blog.sifnosVillas.faq7a', 'Book 3-6 months ahead for peak season (July-August). May, June, and September offer the best balance of warm weather, lower prices, and fewer crowds. Shoulder season temperatures reach 25-28°C with warm sea water, making it ideal for villa holidays with pool use.')
    },
    {
      question: t('blog.sifnosVillas.faq8q', 'How do I get to Sifnos from Athens?'),
      answer: t('blog.sifnosVillas.faq8a', 'Sifnos is reached by ferry from Piraeus port in Athens. High-speed ferries take approximately 2.5 hours, while conventional ferries take 5-6 hours. Ferries run daily during summer, with multiple departures. You can also reach Sifnos from Mykonos or Santorini via inter-island ferries.')
    },
    {
      question: t('blog.sifnosVillas.faq9q', 'Do Sifnos villas include daily housekeeping?'),
      answer: t('blog.sifnosVillas.faq9a', 'Housekeeping frequency varies by villa. Villa Olivia Clara includes housekeeping twice per week, with daily service available on request. Fresh linens and towels are provided regularly. Some budget villas only offer cleaning at check-in and check-out.')
    },
    {
      question: t('blog.sifnosVillas.faq10q', 'Can I book a villa in Sifnos for a wedding or event?'),
      answer: t('blog.sifnosVillas.faq10a', 'Yes, several Sifnos villas cater to special events. Villa Olivia Clara is available for intimate weddings, anniversary celebrations, and small gatherings. The pool terrace and garden provide a stunning backdrop for events with up to 30 guests. Contact us directly for event packages.')
    },
    {
      question: t('blog.sifnosVillas.faq11q', 'What is there to do near villas in Sifnos?'),
      answer: t('blog.sifnosVillas.faq11a', 'Sifnos offers exceptional activities: visit 20+ beaches, hike ancient trails connecting villages, take pottery workshops, enjoy cooking classes featuring local cuisine, explore 365 churches and monasteries, and dine at award-winning restaurants. Boat tours to nearby islands are also popular.')
    },
    {
      question: t('blog.sifnosVillas.faq12q', 'Is Sifnos good for a family holiday?'),
      answer: t('blog.sifnosVillas.faq12a', 'Sifnos is one of the best Cycladic islands for families. It is safe, walkable, with calm beaches suitable for children (especially Platis Gialos and Vathi). The island has a family-friendly atmosphere without the party scene of Mykonos or Ios. Renting a villa with pool adds comfort and convenience for families with young children.')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ArticleStructuredData
        title={t('blog.sifnosVillas.seoTitle', 'Best Sifnos Villas with Pool | 2026 Guide')}
        description={t('blog.sifnosVillas.seoDescription', 'Find the best Sifnos villas with private pool. Compare areas, prices, and amenities. Complete 2026 guide to luxury villa rentals in Sifnos, Greece.')}
        image="/villa-olivia-clara-logo.webp"
        publishDate="2026-03-09"
        modifiedDate="2026-04-08"
        author="Elena Philippou"
        slug={currentSlug}
      />
      <FAQStructuredData faqs={faqs} />
      <SEOHead
        title={t('blog.sifnosVillas.seoTitle', 'Best Sifnos Villas with Pool | 2026 Guide')}
        description={t('blog.sifnosVillas.seoDescription', 'Find the best Sifnos villas with private pool. Compare areas, prices, and amenities. Complete 2026 guide to luxury villa rentals in Sifnos, Greece.')}
        keywords={t('blog.sifnosVillas.seoKeywords', 'sifnos villas, sifnos villas with pool, luxury villa sifnos, best villas sifnos, sifnos villa rental, sifnos accommodation, villa sifnos pool')}
        ogImage="/villa-olivia-clara-logo.webp"
        canonicalUrl={`https://villaoliviaclara.com${langPrefix}/blog/${currentSlug}`}
        alternateLanguages={[
          { lang: 'en', url: `https://villaoliviaclara.com/blog/${blogSlugs.en}` },
          { lang: 'el', url: `https://villaoliviaclara.com/el/blog/${blogSlugs.el}` },
          { lang: 'fr', url: `https://villaoliviaclara.com/fr/blog/${blogSlugs.fr}` },
          { lang: 'it', url: `https://villaoliviaclara.com/it/blog/${blogSlugs.it}` },
          { lang: 'x-default', url: `https://villaoliviaclara.com/blog/${blogSlugs.en}` }
        ]}
      />
      <Navigation />

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50">
        Skip to content
      </a>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="main-content">
        <div className="mb-8 mt-20">
          <Button asChild variant="villa-ghost" size="sm">
            <Link to={`${langPrefix}/blog`}>
              <ArrowLeft size={16} /> {t('common.back', 'Back to Blog')}
            </Link>
          </Button>
        </div>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="bg-villa-olive text-white px-3 py-1 rounded-full font-medium">
              {t('blog.sifnosVillas.category', 'Villas Guide')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-villa-olive mb-6 leading-tight">
            {t('blog.sifnosVillas.h1', 'Best Sifnos Villas with Private Pool — Complete 2026 Guide')}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {t('blog.sifnosVillas.intro', 'Looking for the perfect villa in Sifnos with a private pool? This guide covers everything you need to know — from the best areas and price ranges to what amenities matter most. Whether you\'re planning a family holiday, a romantic getaway, or a group trip to the Cyclades, we\'ll help you find the right Sifnos villa for your needs.')}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Elena Philippou</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2026-04-08">{t('blog.sifnosVillas.date', 'April 8, 2026')}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{t('blog.sifnosVillas.readTime', '15 min read')}</span>
            </div>
          </div>

          <img
            src={aerialView}
            alt={t('blog.sifnosVillas.heroAlt', 'Aerial view of a luxury villa with pool in Sifnos Greece')}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-elegant"
            loading="eager"
            width="1200"
            height="800"
          />
        </header>

        <div className="prose prose-lg max-w-none text-muted-foreground">

          {/* ===== SECTION 1: Why Choose a Villa ===== */}
          <h2 className="text-2xl font-bold text-villa-olive mt-12 mb-6">
            {t('blog.sifnosVillas.whyVillaTitle', 'Why Choose a Villa in Sifnos Over a Hotel')}
          </h2>
          <p>
            {t('blog.sifnosVillas.whyVilla1', 'Sifnos is one of the most authentic islands in the Cyclades — known for its pottery tradition, exceptional cuisine, hiking trails connecting whitewashed villages, and over 365 churches dotted across the landscape. Unlike Mykonos or Santorini, Sifnos has preserved its traditional character, making it ideal for travellers who want a genuine Greek island experience.')}
          </p>
          <p>
            {t('blog.sifnosVillas.whyVilla2', 'A villa gives you something no hotel can: space, privacy, and the feeling of living like a local. With your own private pool, kitchen for preparing meals with fresh local ingredients, and outdoor terraces for dining under the stars, a Sifnos villa transforms your holiday from a trip into an experience.')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="bg-villa-olive-light/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-villa-olive mb-3">{t('blog.sifnosVillas.villaAdvTitle', 'Villa Advantages')}</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-villa-olive mt-0.5 shrink-0" /> {t('blog.sifnosVillas.villaAdv1', 'Private pool — swim whenever you want')}</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-villa-olive mt-0.5 shrink-0" /> {t('blog.sifnosVillas.villaAdv2', 'Full kitchen — cook local recipes at home')}</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-villa-olive mt-0.5 shrink-0" /> {t('blog.sifnosVillas.villaAdv3', 'Multiple bedrooms — perfect for families/groups')}</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-villa-olive mt-0.5 shrink-0" /> {t('blog.sifnosVillas.villaAdv4', 'Outdoor living spaces — terraces, gardens, BBQ')}</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-villa-olive mt-0.5 shrink-0" /> {t('blog.sifnosVillas.villaAdv5', 'Lower cost per person for groups of 4+')}</li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-villa-olive mb-3">{t('blog.sifnosVillas.hotelLimitTitle', 'Hotel Limitations')}</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-muted-foreground">✗ {t('blog.sifnosVillas.hotelLimit1', 'Shared pool with other guests')}</li>
                <li className="flex items-start gap-2 text-muted-foreground">✗ {t('blog.sifnosVillas.hotelLimit2', 'No kitchen — eating out for every meal')}</li>
                <li className="flex items-start gap-2 text-muted-foreground">✗ {t('blog.sifnosVillas.hotelLimit3', 'Small rooms — limited space for families')}</li>
                <li className="flex items-start gap-2 text-muted-foreground">✗ {t('blog.sifnosVillas.hotelLimit4', 'Fixed meal times and resort rules')}</li>
                <li className="flex items-start gap-2 text-muted-foreground">✗ {t('blog.sifnosVillas.hotelLimit5', 'Higher cost per person for groups')}</li>
              </ul>
            </div>
          </div>

          <p>
            {t('blog.sifnosVillas.whyVilla3', 'For a detailed comparison, read our')} <Link to={`${langPrefix}/blog/luxury-villa-vs-hotel-sifnos-greece-complete-comparison`} className="text-villa-olive underline font-medium">{t('blog.sifnosVillas.villaVsHotelLink', 'villa vs hotel comparison guide')}</Link>.
          </p>

          {/* ===== SECTION 2: Best Areas ===== */}
          <h2 className="text-2xl font-bold text-villa-olive mt-16 mb-6">
            {t('blog.sifnosVillas.bestAreasTitle', 'Best Areas in Sifnos for Villa Rentals')}
          </h2>
          <p>
            {t('blog.sifnosVillas.bestAreasIntro', 'Sifnos is a compact island — you can drive from one end to the other in 30 minutes. But each area has a distinct character. Here\'s where to look for your ideal Sifnos villa with pool:')}
          </p>

          <h3 className="text-xl font-bold text-villa-olive mt-10 mb-4 flex items-center gap-2">
            <Waves size={20} /> {t('blog.sifnosVillas.platisTitle', 'Platis Gialos — Best for Beach Lovers')}
          </h3>
          <img
            src={platisGialos}
            alt={t('blog.sifnosVillas.platisAlt', 'Platis Gialos beach near the best Sifnos villas')}
            className="w-full h-auto rounded-xl my-6 shadow-soft"
            loading="lazy"
            width="1200"
            height="800"
          />
          <p>
            {t('blog.sifnosVillas.platisDesc', 'Platis Gialos is Sifnos\'s longest sandy beach and the most popular area for villa rentals. The beach has sun loungers, tavernas, and calm shallow waters perfect for children. Pottery workshops line the road behind the beach — Sifnos is famous for its ceramic tradition dating back to the 3rd millennium BC. Villas here offer the convenience of walking to the beach, restaurants, and shops without needing a car.')}
          </p>

          <h3 className="text-xl font-bold text-villa-olive mt-10 mb-4 flex items-center gap-2">
            <MapPin size={20} /> {t('blog.sifnosVillas.apolloniaTitle', 'Apollonia — Best for Village Life & Nightlife')}
          </h3>
          <img
            src={apollonia}
            alt={t('blog.sifnosVillas.apolloniaAlt', 'Apollonia village centre with traditional Cycladic architecture in Sifnos')}
            className="w-full h-auto rounded-xl my-6 shadow-soft"
            loading="lazy"
            width="1200"
            height="800"
          />
          <p>
            {t('blog.sifnosVillas.apolloniaDesc', 'Apollonia is the capital of Sifnos and the island\'s social hub. The main pedestrian street (Steno) is lined with boutique shops, bars, and restaurants. Villas near Apollonia suit travellers who want to explore on foot, enjoy evening dining, and experience authentic Cycladic village life. It\'s a 10-minute drive to most beaches.')}
          </p>

          <h3 className="text-xl font-bold text-villa-olive mt-10 mb-4 flex items-center gap-2">
            <Sun size={20} /> {t('blog.sifnosVillas.vathiTitle', 'Vathi — Best for Seclusion & Nature')}
          </h3>
          <img
            src={vathi}
            alt={t('blog.sifnosVillas.vathiAlt', 'Vathi bay in Sifnos, a secluded beach perfect for nature lovers')}
            className="w-full h-auto rounded-xl my-6 shadow-soft"
            loading="lazy"
            width="1200"
            height="800"
          />
          <p>
            {t('blog.sifnosVillas.vathiDesc', 'Vathi is a sheltered bay on the southwest coast, reachable by car or a scenic 45-minute hike from Apollonia. It has a handful of excellent tavernas right on the sand and a monastery at the edge of the beach. Villas near Vathi offer maximum privacy and tranquility — ideal for couples or those wanting a digital detox.')}
          </p>

          <h3 className="text-xl font-bold text-villa-olive mt-10 mb-4 flex items-center gap-2">
            <MapPin size={20} /> {t('blog.sifnosVillas.kastroTitle', 'Kastro — Best for History & Views')}
          </h3>
          <img
            src={kastro}
            alt={t('blog.sifnosVillas.kastroAlt', 'Kastro medieval village in Sifnos with dramatic clifftop views')}
            className="w-full h-auto rounded-xl my-6 shadow-soft"
            loading="lazy"
            width="1200"
            height="800"
          />
          <p>
            {t('blog.sifnosVillas.kastroDesc', 'Kastro is the ancient capital of Sifnos, perched on a cliff overlooking the sea. Its medieval walls, narrow alleys, and archaeological museum make it the island\'s most atmospheric village. Accommodation here tends to be traditional houses rather than modern villas, but the views and history are unmatched.')}
          </p>

          {/* ===== SECTION 3: What to Look For ===== */}
          <h2 className="text-2xl font-bold text-villa-olive mt-16 mb-6">
            {t('blog.sifnosVillas.whatToLookTitle', 'What to Look for in a Sifnos Villa with Pool')}
          </h2>
          <p>
            {t('blog.sifnosVillas.whatToLookIntro', 'Not all Sifnos villa pools are equal. Here\'s a practical checklist to help you compare options:')}
          </p>

          <div className="bg-villa-olive-light/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-villa-olive mb-4">{t('blog.sifnosVillas.checklistTitle', 'Villa Pool Checklist')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-villa-olive mt-0.5 shrink-0" /> <strong>{t('blog.sifnosVillas.check1Label', 'Heated pool:')}</strong> {t('blog.sifnosVillas.check1', 'Essential for May, June, September when air temperatures are warm but unheated pools can be cold')}</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-villa-olive mt-0.5 shrink-0" /> <strong>{t('blog.sifnosVillas.check2Label', 'Pool size:')}</strong> {t('blog.sifnosVillas.check2', 'For families, look for pools at least 8m x 4m so children can swim properly')}</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-villa-olive mt-0.5 shrink-0" /> <strong>{t('blog.sifnosVillas.check3Label', 'Sea views from pool:')}</strong> {t('blog.sifnosVillas.check3', 'Many villas advertise "sea views" but the pool faces inland — check photos carefully')}</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-villa-olive mt-0.5 shrink-0" /> <strong>{t('blog.sifnosVillas.check4Label', 'Pool furniture:')}</strong> {t('blog.sifnosVillas.check4', 'Sun loungers, umbrellas, and a shaded area (cabana or pergola) for midday heat')}</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-villa-olive mt-0.5 shrink-0" /> <strong>{t('blog.sifnosVillas.check5Label', 'Privacy:')}</strong> {t('blog.sifnosVillas.check5', 'Ensure the pool area is not overlooked by neighbouring properties or roads')}</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-villa-olive mt-0.5 shrink-0" /> <strong>{t('blog.sifnosVillas.check6Label', 'Beach proximity:')}</strong> {t('blog.sifnosVillas.check6', 'Even with a pool, you\'ll want beach access — under 10 minutes walk is ideal')}</li>
            </ul>
          </div>

          {/* ===== SECTION 4: Villa Olivia Clara Spotlight ===== */}
          <h2 className="text-2xl font-bold text-villa-olive mt-16 mb-6">
            {t('blog.sifnosVillas.spotlightTitle', 'Villa Olivia Clara: A Closer Look')}
          </h2>
          <p>
            {t('blog.sifnosVillas.spotlightIntro', 'Villa Olivia Clara is a 250m² luxury villa located between Platis Gialos and Apollonia. Built in traditional Cycladic style with modern comforts, it\'s designed for families and groups who want space, privacy, and convenience.')}
          </p>

          <img
            src={poolArea}
            alt={t('blog.sifnosVillas.poolAlt', 'Private heated pool at a luxury Sifnos villa with sea views')}
            className="w-full h-auto rounded-xl my-8 shadow-soft"
            loading="lazy"
            width="1200"
            height="800"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <img
              src={poolCabana}
              alt={t('blog.sifnosVillas.cabanaAlt', 'Sifnos villa with pool bar and cabana overlooking the Aegean')}
              className="w-full h-64 object-cover rounded-xl shadow-soft"
              loading="lazy"
              width="600"
              height="400"
            />
            <img
              src={livingRoom}
              alt={t('blog.sifnosVillas.livingAlt', 'Spacious living room inside a family-friendly Sifnos villa')}
              className="w-full h-64 object-cover rounded-xl shadow-soft"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <img
              src={masterBedroom}
              alt={t('blog.sifnosVillas.bedroomAlt', 'Master bedroom with sea view at Villa Olivia Clara Sifnos')}
              className="w-full h-64 object-cover rounded-xl shadow-soft"
              loading="lazy"
              width="600"
              height="400"
            />
            <img
              src={kitchen}
              alt={t('blog.sifnosVillas.kitchenAlt', 'Fully equipped kitchen in a luxury Sifnos villa rental')}
              className="w-full h-64 object-cover rounded-xl shadow-soft"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-villa-olive-light">
                  <th className="p-4 font-semibold text-villa-olive border-b border-villa-stone">{t('blog.sifnosVillas.tableFeature', 'Feature')}</th>
                  <th className="p-4 font-semibold text-villa-olive border-b border-villa-stone">Villa Olivia Clara</th>
                  <th className="p-4 font-semibold text-villa-olive border-b border-villa-stone">{t('blog.sifnosVillas.tableOther', 'Other Sifnos Villas')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [t('blog.sifnosVillas.row1', 'Location'), t('blog.sifnosVillas.row1a', 'Platis Gialos (7-min walk to beach)'), t('blog.sifnosVillas.row1b', 'Varies; often further inland')],
                  [t('blog.sifnosVillas.row2', 'Capacity'), t('blog.sifnosVillas.row2a', '8 guests (4 bedrooms, 4.5 bathrooms)'), t('blog.sifnosVillas.row2b', 'Typically 4-6 guests')],
                  [t('blog.sifnosVillas.row3', 'Pool'), t('blog.sifnosVillas.row3a', 'Private heated pool with pool bar'), t('blog.sifnosVillas.row3b', 'Shared or unheated pools')],
                  [t('blog.sifnosVillas.row4', 'Sea Views'), t('blog.sifnosVillas.row4a', 'Panoramic views from pool & terraces'), t('blog.sifnosVillas.row4b', 'Partial or none')],
                  [t('blog.sifnosVillas.row5', 'WiFi'), t('blog.sifnosVillas.row5a', '200+ Mbps fibre (remote work ready)'), t('blog.sifnosVillas.row5b', 'Basic 10-50 Mbps')],
                  [t('blog.sifnosVillas.row6', 'Outdoor Space'), t('blog.sifnosVillas.row6a', 'BBQ garden, terrace dining, pool lounge'), t('blog.sifnosVillas.row6b', 'Basic terrace')],
                  [t('blog.sifnosVillas.row7', 'Housekeeping'), t('blog.sifnosVillas.row7a', '2x/week included, daily on request'), t('blog.sifnosVillas.row7b', 'Check-in/out only')],
                  [t('blog.sifnosVillas.row8', 'Parking'), t('blog.sifnosVillas.row8a', 'Private parking for 5 cars'), t('blog.sifnosVillas.row8b', '1-2 spaces or street parking')],
                  [t('blog.sifnosVillas.row9', 'Size'), t('blog.sifnosVillas.row9a', '250m² interior + 500m² outdoor'), t('blog.sifnosVillas.row9b', '80-150m² typical')],
                  [t('blog.sifnosVillas.row10', 'Events'), t('blog.sifnosVillas.row10a', 'Available for weddings & events'), t('blog.sifnosVillas.row10b', 'Rarely available')],
                ].map(([feature, ours, others], i) => (
                  <tr key={i} className="border-b border-villa-stone/50 hover:bg-villa-stone/20 transition-colors">
                    <td className="p-4 font-medium text-foreground">{feature}</td>
                    <td className="p-4">{ours}</td>
                    <td className="p-4">{others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            {t('blog.sifnosVillas.spotlightCta', 'Explore the full property on our')} <Link to={`${langPrefix}/villa`} className="text-villa-olive underline font-medium">{t('blog.sifnosVillas.villaPageLink', 'villa page')}</Link>{t('blog.sifnosVillas.spotlightCta2', ', or read what guests say on our')} <Link to={`${langPrefix}/reviews`} className="text-villa-olive underline font-medium">{t('blog.sifnosVillas.reviewsLink', 'reviews page')}</Link>.
          </p>

          {/* ===== SECTION 5: Cost ===== */}
          <h2 className="text-2xl font-bold text-villa-olive mt-16 mb-6">
            {t('blog.sifnosVillas.costTitle', 'How Much Do Sifnos Villas Cost?')}
          </h2>
          <p>
            {t('blog.sifnosVillas.costIntro', 'Villa prices in Sifnos vary significantly by season, location, and amenities. Here\'s a realistic breakdown to help you budget:')}
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-villa-olive-light">
                  <th className="p-4 font-semibold text-villa-olive border-b border-villa-stone">{t('blog.sifnosVillas.season', 'Season')}</th>
                  <th className="p-4 font-semibold text-villa-olive border-b border-villa-stone">{t('blog.sifnosVillas.priceRange', 'Price Range (per night)')}</th>
                  <th className="p-4 font-semibold text-villa-olive border-b border-villa-stone">{t('blog.sifnosVillas.costPerPerson', 'Cost per Person (8 guests)')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-villa-stone/50">
                  <td className="p-4 font-medium text-foreground">{t('blog.sifnosVillas.peakSeason', 'Peak (Jul-Aug)')}</td>
                  <td className="p-4">€350 – €800</td>
                  <td className="p-4">€44 – €100</td>
                </tr>
                <tr className="border-b border-villa-stone/50">
                  <td className="p-4 font-medium text-foreground">{t('blog.sifnosVillas.shoulderSeason', 'Shoulder (May-Jun, Sep-Oct)')}</td>
                  <td className="p-4">€200 – €500</td>
                  <td className="p-4">€25 – €63</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">{t('blog.sifnosVillas.offSeason', 'Off-Season (Nov-Apr)')}</td>
                  <td className="p-4">€120 – €300</td>
                  <td className="p-4">€15 – €38</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            {t('blog.sifnosVillas.costCompare', 'Compare this to hotel rooms at €120-250 per room per night. For a family of 4-8, a villa almost always offers better value — and you get a private pool, kitchen, and multiple living spaces included.')}
          </p>

          {/* ===== SECTION 6: Best Time to Visit ===== */}
          <h2 className="text-2xl font-bold text-villa-olive mt-16 mb-6">
            {t('blog.sifnosVillas.bestTimeTitle', 'Best Time to Visit Sifnos')}
          </h2>

          <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4">
            {t('blog.sifnosVillas.peakTitle', 'Peak Season: July & August')}
          </h3>
          <p>
            {t('blog.sifnosVillas.peakDesc', 'Temperatures reach 30-35°C with virtually no rain. Beaches are at their busiest, restaurants are in full swing, and the island hosts cultural festivals including the famous Nikolaos Tselementes cooking festival. Book your villa 4-6 months in advance for peak season — popular properties sell out by March.')}
          </p>

          <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4">
            {t('blog.sifnosVillas.shoulderTitle', 'Shoulder Season: May-June & September-October')}
          </h3>
          <p>
            {t('blog.sifnosVillas.shoulderDesc', 'This is when experienced travellers visit Sifnos. Temperatures of 22-28°C, warm sea water (especially September), fewer crowds, and lower villa prices. Wildflowers bloom in May, and September offers the warmest sea temperatures of the year. Many consider this the ideal time for a Sifnos villa holiday.')}
          </p>

          <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4">
            {t('blog.sifnosVillas.offSeasonTitle', 'Off-Season Benefits')}
          </h3>
          <p>
            {t('blog.sifnosVillas.offSeasonDesc', 'Winter Sifnos is a different experience entirely — quiet, atmospheric, and deeply local. Some villas remain open year-round with heated pools. It\'s perfect for writers, remote workers, or anyone seeking solitude. Note that ferry schedules are reduced and some restaurants close from November to April.')}
          </p>

          {/* ===== SECTION 7: Getting to Sifnos ===== */}
          <h2 className="text-2xl font-bold text-villa-olive mt-16 mb-6">
            {t('blog.sifnosVillas.gettingThereTitle', 'Getting to Sifnos')}
          </h2>

          <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4">
            {t('blog.sifnosVillas.ferryPiraeusTitle', 'Ferry from Piraeus (Athens)')}
          </h3>
          <p>
            {t('blog.sifnosVillas.ferryPiraeusDesc', 'The most common route. High-speed ferries (Aegean Speed Lines, SeaJets) take 2.5-3 hours. Conventional ferries take 5-6 hours but cost less. During summer, there are 3-5 departures daily. Tickets range from €35-55 per person. The ferry arrives at Kamares port on the west coast.')}
          </p>

          <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4">
            {t('blog.sifnosVillas.ferryIslandsTitle', 'Ferry from Other Cycladic Islands')}
          </h3>
          <p>
            {t('blog.sifnosVillas.ferryIslandsDesc', 'Sifnos connects easily to Milos (30 min), Serifos (30 min), Kimolos (1 hour), and Folegandros (1.5 hours). From Mykonos or Santorini, expect 2-4 hours depending on the route. Island-hopping itineraries that include Sifnos are increasingly popular.')}
          </p>

          <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4">
            {t('blog.sifnosVillas.gettingAroundTitle', 'Getting Around the Island')}
          </h3>
          <p>
            {t('blog.sifnosVillas.gettingAroundDesc', 'Renting a car is recommended — rates start from €30/day with port pickup available. Sifnos also has a reliable bus service connecting Kamares, Apollonia, Platis Gialos, Vathi, and other villages. Scooter rental is another option for experienced riders. The island has well-maintained roads and parking is generally easy outside Apollonia centre.')}
          </p>
          <p>
            {t('blog.sifnosVillas.gettingAroundMore', 'For more practical travel tips, visit our')} <Link to={`${langPrefix}/faq`} className="text-villa-olive underline font-medium">{t('blog.sifnosVillas.faqLink', 'FAQ page')}</Link>.
          </p>

          {/* ===== SECTION 8: Things to Do ===== */}
          <h2 className="text-2xl font-bold text-villa-olive mt-16 mb-6">
            {t('blog.sifnosVillas.thingsToDoTitle', 'Things to Do Near Your Sifnos Villa')}
          </h2>

          <img
            src={chrysopigi}
            alt={t('blog.sifnosVillas.chrysopigiAlt', 'Chrysopigi monastery and beach in Sifnos, one of the most photographed spots in the Cyclades')}
            className="w-full h-auto rounded-xl my-6 shadow-soft"
            loading="lazy"
            width="1200"
            height="800"
          />

          <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4 flex items-center gap-2">
            <Waves size={20} /> {t('blog.sifnosVillas.beachesTitle', 'Beaches')}
          </h3>
          <p>
            {t('blog.sifnosVillas.beachesDesc', 'Sifnos has over 20 beaches, each with its own character. Platis Gialos is the longest and most organised. Chrysopigi is dramatic with its monastery on a rocky peninsula. Vathi offers a sheltered bay with tavernas on the sand. Faros has three small coves connected by a coastal path. Discover them all on our')} <Link to={`${langPrefix}/sifnos/beaches`} className="text-villa-olive underline font-medium">{t('blog.sifnosVillas.beachesLink', 'Sifnos beaches guide')}</Link>.
          </p>

          <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4 flex items-center gap-2">
            <Footprints size={20} /> {t('blog.sifnosVillas.hikingTitle', 'Hiking Trails')}
          </h3>
          <p>
            {t('blog.sifnosVillas.hikingDesc', 'Sifnos has over 100 km of marked hiking trails — ancient paths that once connected the island\'s villages before roads existed. The most popular routes include Apollonia to Kastro (45 min), Apollonia to Vathi (1.5 hours), and the circular trail through Artemonas and Cheronissos. Trails are well-marked and suitable for moderate fitness levels.')}
          </p>

          <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4 flex items-center gap-2">
            <UtensilsCrossed size={20} /> {t('blog.sifnosVillas.foodTitle', 'Food & Cooking Classes')}
          </h3>
          <p>
            {t('blog.sifnosVillas.foodDesc', 'Sifnos is considered the gastronomic capital of the Cyclades. The island is famous for revithada (slow-cooked chickpea stew), mastelo (lamb or goat cooked in red wine), and local cheeses. Several cooking schools offer hands-on classes where you learn to prepare traditional Sifniot dishes using local ingredients. Your villa kitchen is perfect for practising afterwards.')}
          </p>

          <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4">
            {t('blog.sifnosVillas.potteryTitle', 'Pottery Workshops')}
          </h3>
          <p>
            {t('blog.sifnosVillas.potteryDesc', 'Sifnos\'s pottery tradition spans over 5,000 years. Several working studios in Platis Gialos and Vathi offer workshops where you can try your hand at the potter\'s wheel and create your own souvenir. Studios also sell beautiful handmade ceramics — the traditional "flaskes" (flasks) and cooking pots make excellent gifts.')}
          </p>

          <p className="mt-8">
            {t('blog.sifnosVillas.exploreMore', 'Learn more about the island on our')} <Link to={`${langPrefix}/sifnos`} className="text-villa-olive underline font-medium">{t('blog.sifnosVillas.sifnosLink', 'Sifnos guide')}</Link>{t('blog.sifnosVillas.exploreMore2', ', or discover')} <Link to={`${langPrefix}/sifnos/boat-tours`} className="text-villa-olive underline font-medium">{t('blog.sifnosVillas.boatToursLink', 'boat tours from Sifnos')}</Link>.
          </p>

          {/* ===== SECTION 9: FAQs ===== */}
          <h2 className="text-2xl font-bold text-villa-olive mt-16 mb-6">
            {t('blog.sifnosVillas.faqTitle', 'Frequently Asked Questions About Sifnos Villas')}
          </h2>

          <div className="space-y-6 my-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-villa-stone/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-villa-olive mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* ===== SECTION 10: Book CTA ===== */}
          <h2 className="text-2xl font-bold text-villa-olive mt-16 mb-6">
            {t('blog.sifnosVillas.bookTitle', 'Ready to Book Your Sifnos Villa?')}
          </h2>

          <img
            src={terraceDining}
            alt={t('blog.sifnosVillas.terraceAlt', 'Outdoor dining terrace at a Sifnos villa near Platis Gialos')}
            className="w-full h-auto rounded-xl my-6 shadow-soft"
            loading="lazy"
            width="1200"
            height="800"
          />

          <p>
            {t('blog.sifnosVillas.bookDesc', 'Villa Olivia Clara offers everything you need for an unforgettable Sifnos holiday — a heated private pool with panoramic sea views, four bedrooms for up to 8 guests, and a location just minutes from the best beach on the island. Whether you\'re planning a family vacation, a friends\' getaway, or a special celebration, we\'d love to welcome you.')}
          </p>
          <p>
            {t('blog.sifnosVillas.bookCta', 'Check availability and get in touch with Elena, your host, on our')} <Link to={`${langPrefix}/contact`} className="text-villa-olive underline font-medium">{t('blog.sifnosVillas.contactLink', 'contact page')}</Link>.
          </p>

        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-villa-stone">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <h3 className="text-xl font-bold text-villa-olive">{t('blog.shareArticle', 'Share this article')}</h3>
            <BlogShare
              slug={currentSlug}
              title={t('blog.sifnosVillas.h1', 'Best Sifnos Villas with Private Pool — Complete 2026 Guide')}
              description={t('blog.sifnosVillas.seoDescription', 'Find the best Sifnos villas with private pool. Compare areas, prices, and amenities.')}
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="villa" size="lg">
            <Link to={`${langPrefix}/contact`}>{t('common.bookNow', 'Book Now')}</Link>
          </Button>
        </div>
      </article>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default SifnosVillas;
