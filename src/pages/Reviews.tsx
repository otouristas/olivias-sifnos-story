import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { reviewsData, type GuestReview } from './reviews-data';
import SeoJsonLd from '@/components/SeoJsonLd';
import { ReviewsStructuredData } from '@/components/StructuredData';
import Breadcrumb from '@/components/Breadcrumb';
import SEOHead from '@/components/SEOHead';
import { ChevronDown } from 'lucide-react';

function formatDate(input: string): string {
  const d: Date = new Date(input);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
  return new Intl.DateTimeFormat('en-GB', options).format(d);
}

function getYear(date: string): number { return new Date(date).getFullYear(); }

export default function Reviews(): JSX.Element {
  const [showAll, setShowAll] = useState(false);
  const sorted: ReadonlyArray<GuestReview> = [...reviewsData].sort((a, b) => (a.date < b.date ? 1 : -1));
  const grouped: Record<number, ReadonlyArray<GuestReview>> = sorted.reduce((acc, r) => {
    const y: number = getYear(r.date);
    const arr: ReadonlyArray<GuestReview> = acc[y] ?? [];
    return { ...acc, [y]: [...arr, r] };
  }, {} as Record<number, ReadonlyArray<GuestReview>>);

  const years = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a));
  const visibleYears = showAll ? years : years.slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead
        title="Villa Olivia Clara Guest Reviews | 5-Star Sifnos Villa Testimonials"
        description="Read authentic guest reviews for Villa Olivia Clara in Sifnos, Greece. 5-star luxury villa with private pool, sea views, excellent service. See why guests love our villa!"
        keywords="Villa Olivia Clara reviews, Sifnos villa testimonials, luxury villa guest feedback, Greek island accommodation reviews, Platis Gialos villa ratings"
        canonicalUrl="https://villaoliviaclara.com/reviews"
      />
      <ReviewsStructuredData />
      <SeoJsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Villa Olivia Clara',
        description: 'Luxury villa in Sifnos with private pool, sea views, and concierge services.',
        url: (import.meta.env.VITE_SITE_URL ?? 'https://villaoliviaclara.com') + '/reviews',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: (reviewsData.reduce((s, r) => s + r.rating, 0) / reviewsData.length).toFixed(2),
          reviewCount: reviewsData.length
        },
        review: reviewsData.slice(0, 12).map(r => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.author },
          reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
          datePublished: r.date,
          reviewBody: r.text
        }))
      }} />
      <Navigation />
      <header className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">Kind Words From Our Guests</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">Thoughtfully curated impressions from recent stays at Villa Olivia Clara.</p>
        </div>
      </header>
      <main className="py-20 space-y-20">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          {visibleYears.map((year) => {
            const items = grouped[parseInt(year)];
            return (
            <div key={year} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-villa-stone" />
                <h2 className="text-2xl font-semibold text-villa-olive">{year}</h2>
                <div className="h-px flex-1 bg-villa-stone" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {items.map((r, i) => (
                  <Card key={`${year}-${i}`} className="border-0 shadow-elegant bg-white/80 backdrop-blur">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="text-villa-olive text-xl" aria-label={`${r.rating} out of 5`}>{'★'.repeat(r.rating)}</div>
                          <h3 className="mt-2 text-lg font-semibold text-villa-olive">{r.author}</h3>
                        </div>
                        <time className="text-sm text-gray-500" dateTime={r.date}>{formatDate(r.date)}</time>
                      </div>
                      <blockquote className="text-gray-700 leading-relaxed">“{r.text}”</blockquote>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            );
          })}
          
          {years.length > 2 && (
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="villa-outline"
                size="lg"
                className="gap-2"
              >
                {showAll ? 'Show Less' : 'Read More Reviews'}
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} 
                />
              </Button>
            </div>
          )}
        </section>
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-semibold text-villa-olive mb-4">Plan Your Stay</h2>
            <p className="text-lg text-gray-600 mb-8">We would be honored to welcome you to our home in Sifnos.</p>
            <Button asChild size="lg" variant="villa-outline"><Link to="/contact">Get In Touch →</Link></Button>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}