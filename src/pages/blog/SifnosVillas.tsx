import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';
import { ArticleStructuredData, FAQStructuredData } from '@/components/StructuredDataSchemas';
import { BlogShare } from '@/components/SocialShare';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

import sectionImage1 from '@/assets/Sifnos/villages/apollonia.webp';
import sectionImage2 from '@/assets/villa-gallery/Villa-Olivia-Clara_003_the-pool-area.jpg';
import sectionImage3 from '@/assets/Sifnos/Beaches/plats-gialos.webp';
import sectionImage4 from '@/assets/villa-gallery/Villa-Olivia-Clara_029_living-room.jpg';
import sectionImage5 from '@/assets/villa-gallery/Villa-Olivia-Clara_042_aerial-view-of-villa.jpg';

const blogSlugs: Record<string, string> = {
    en: 'sifnos-luxury-villas-ultimate-guide',
    el: 'sifnos-luxury-villas-ultimate-guide',
    fr: 'sifnos-luxury-villas-ultimate-guide',
    it: 'sifnos-luxury-villas-ultimate-guide',
};

const SifnosVillas = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;
    const currentSlug = blogSlugs[currentLang] || blogSlugs.en;

    const faqs = [
        {
            question: "Where are the best Sifnos villas?",
            answer: "Platis Gialos is ideal for beaches, while Apollonia is perfect for village life. Villa Olivia Clara uniquely combines easy access to both."
        },
        {
            question: "Do Sifnos luxury villas have private pools?",
            answer: "Yes, many luxury villas, including Villa Olivia Clara, feature private heated pools which are standout amenities for guests."
        },
        {
            question: "How much do Sifnos luxury villas cost?",
            answer: "Prices typically start from €220/night. Villa Olivia Clara offers premium inclusions at competitive rates, providing exceptional value."
        },
        {
            question: "Are Sifnos villas family-friendly?",
            answer: "Absolutely. Villa Olivia Clara perfectly accommodates up to 8 guests with baby cots available and child-safe areas."
        },
        {
            question: "When is the best time to book a villa in Sifnos?",
            answer: "May, June, and September are generally the best times for great weather and optimal pricing deals."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <ArticleStructuredData
                title="Ultimate Guide to Sifnos Villas: Discover Luxury at Villa Olivia Clara"
                description="Find your perfect Sifnos luxury villa. Our complete guide covers private pools, family-friendly options, and why Villa Olivia Clara is the top choice."
                image="/villa-olivia-clara-logo.webp"
                publishDate="2026-03-09"
                modifiedDate="2026-03-09"
                author="Elena Philippou"
                slug={currentSlug}
            />
            <FAQStructuredData faqs={faqs} />
            <SEOHead
                title="Ultimate Guide to Sifnos Villas | Villa Olivia Clara"
                description="Find your perfect Sifnos luxury villa. Our complete guide covers private pools, family options, and why Villa Olivia Clara is the top choice."
                keywords="sifnos villas, sifnos luxury villas, luxury villas sifnos platis gialos with pool, best family villas in sifnos, cheap luxury sifnos villas view"
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

            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50"
            >
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
                            Villas Guide
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-villa-olive mb-6 leading-tight">
                        Ultimate Guide to Sifnos Villas: Discover Luxury at Villa Olivia Clara
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Villa Olivia Clara offers the ultimate luxury villa experience in Sifnos, with its private pool, stunning sea views from Platis Gialos beach, and spacious 250m² layout perfect for families and groups. This comprehensive guide targets key searches like "Sifnos villas," "Sifnos luxury villas," and related long-tail queries to help you find your ideal Cycladic retreat while highlighting why Villa Olivia Clara stands above other options. Packed with FAQs, travel tips, and insider advice, it's your go-to resource for planning an unforgettable Sifnos getaway.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>Elena Philippou</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <time dateTime="2026-03-09">March 9, 2026</time>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>5 min read</span>
                        </div>
                    </div>

                    <img
                        src={sectionImage1}
                        alt="View of Apollonia village representing the authentic beauty surrounding Sifnos luxury villas"
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-elegant"
                        loading="eager"
                    />
                </header>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                    <h2 className="text-2xl font-bold text-villa-olive mt-12 mb-6">Why Sifnos Villas Are a Top Choice</h2>
                    <p>
                        Sifnos enchants visitors with its pristine beaches, ancient pottery tradition, over 200 Orthodox churches, and renowned gastronomy featuring chickpea stews and caper salads. Villas here provide privacy, authentic island living, and easy access to hidden coves—far superior to standard hotels for immersive stays. Demand for Sifnos villas peaks from May to October, with luxury searches focusing on private pools and sea views.
                    </p>

                    <img
                        src={sectionImage2}
                        alt="The stunning private heated pool at Villa Olivia Clara in Sifnos"
                        className="w-full h-auto rounded-xl my-8 shadow-soft"
                        loading="lazy"
                    />

                    <p>
                        <strong>Sifnos luxury villas</strong> elevate the experience with infinity-edge pools, gourmet setups, and concierge perks, setting them apart from basic rentals. While other villas offer standard amenities, Villa Olivia Clara delivers exceptional value just 7 minutes' walk from Platis Gialos beach, blending Cycladic charm with modern comforts like 200+ Mbps WiFi and daily housekeeping.
                    </p>

                    <h2 className="text-2xl font-bold text-villa-olive mt-12 mb-6">Spotlight: Villa Olivia Clara vs. Other Sifnos Villas</h2>
                    <p>
                        Villa Olivia Clara outshines other Sifnos villas with its prime location, family-focused design, and premium features. Here's how it compares:
                    </p>

                    <div className="overflow-x-auto my-8">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-villa-olive-light">
                                    <th className="p-4 font-semibold text-villa-olive border-b border-villa-stone">Feature</th>
                                    <th className="p-4 font-semibold text-villa-olive border-b border-villa-stone">Villa Olivia Clara</th>
                                    <th className="p-4 font-semibold text-villa-olive border-b border-villa-stone">Other Sifnos Villas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-villa-stone/50 hover:bg-villa-stone/20 transition-colors">
                                    <td className="p-4 font-medium text-foreground">Location</td>
                                    <td className="p-4">Platis Gialos beach (7-min walk)</td>
                                    <td className="p-4">Varies; often further inland</td>
                                </tr>
                                <tr className="border-b border-villa-stone/50 hover:bg-villa-stone/20 transition-colors">
                                    <td className="p-4 font-medium text-foreground">Capacity</td>
                                    <td className="p-4">8 guests (4BR: 2 queen, 4 single)</td>
                                    <td className="p-4">Typically 6-10; less flexible</td>
                                </tr>
                                <tr className="border-b border-villa-stone/50 hover:bg-villa-stone/20 transition-colors">
                                    <td className="p-4 font-medium text-foreground">Pool</td>
                                    <td className="p-4">Private heated pool + pool bar</td>
                                    <td className="p-4">Shared or smaller pools</td>
                                </tr>
                                <tr className="border-b border-villa-stone/50 hover:bg-villa-stone/20 transition-colors">
                                    <td className="p-4 font-medium text-foreground">Views</td>
                                    <td className="p-4">Panoramic sea views</td>
                                    <td className="p-4">Partial or none</td>
                                </tr>
                                <tr className="border-b border-villa-stone/50 hover:bg-villa-stone/20 transition-colors">
                                    <td className="p-4 font-medium text-foreground">Extras</td>
                                    <td className="p-4">BBQ garden, fast WiFi, host tips</td>
                                    <td className="p-4">Basic amenities</td>
                                </tr>
                                <tr className="hover:bg-villa-stone/20 transition-colors">
                                    <td className="p-4 font-medium text-foreground">Distance to Apollonia</td>
                                    <td className="p-4">15 mins by car</td>
                                    <td className="p-4">20+ mins</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        Explore full details at our <Link to={`${langPrefix}/villa`} className="text-villa-olive underline">villa page</Link> and read glowing guest reviews on our <Link to={`${langPrefix}/reviews`} className="text-villa-olive underline">reviews page</Link>. Unlike competitors, it emphasizes "real home luxury" with 4.5 bathrooms and space for multi-generational trips.
                    </p>

                    <img
                        src={sectionImage4}
                        alt="The spacious and luxurious living room inside a top Sifnos villa"
                        className="w-full h-auto rounded-xl my-8 shadow-soft"
                        loading="lazy"
                    />

                    <h2 className="text-2xl font-bold text-villa-olive mt-12 mb-6">What Sets Sifnos Luxury Villas Apart</h2>
                    <p>
                        <strong>Sifnos luxury villas</strong> promise unobstructed Aegean vistas, stone terraces, and proximity to hotspots like Platis Gialos and Vathy beaches. They cater to foodies, hikers, and families seeking revithada dinners or monastery treks. Villa Olivia Clara uniquely combines these with on-site perks like a garden BBQ and local insights, making it the smart choice over generic luxury listings.
                    </p>

                    <h2 className="text-2xl font-bold text-villa-olive mt-12 mb-6">Sifnos Villas FAQs</h2>
                    <p>Top questions from <strong>Sifnos villas</strong> searches:</p>

                    <ul className="space-y-4 my-6">
                        <li><strong>Where are the best Sifnos villas?</strong> Platis Gialos for beaches; Apollonia for villages—Villa Olivia Clara nails both.</li>
                        <li><strong>Do they have private pools?</strong> Yes, Villa Olivia Clara's heated pool is a standout feature.</li>
                        <li><strong>Cost of Sifnos luxury villas?</strong> From €220/night; Villa Olivia Clara offers premium inclusions at competitive rates.</li>
                        <li><strong>Family-friendly?</strong> Perfect—sleeps 8 with cots available and child-safe areas.</li>
                        <li><strong>Pet policy?</strong> Inquire directly; flexible for well-behaved pets.</li>
                        <li><strong>Best booking time?</strong> May-June/September for deals and weather.</li>
                    </ul>

                    <p>
                        Dive deeper into island adventures with the <a href="https://discovercyclades.gr" target="_blank" rel="noopener noreferrer" className="text-villa-olive underline">Sifnos travel guide at discovercyclades.gr</a>.
                    </p>

                    <img
                        src={sectionImage3}
                        alt="Platis Gialos beach, a short walk from the best Sifnos luxury villas"
                        className="w-full h-auto rounded-xl my-8 shadow-soft"
                        loading="lazy"
                    />

                    <h2 className="text-2xl font-bold text-villa-olive mt-12 mb-6">Essential Sifnos Trip Planning</h2>

                    <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4">Sifnos Hotels Comparison</h3>
                    <p>
                        For alternatives, you can browse <a href="https://discovercyclades.gr/en/hotels/sifnos" target="_blank" rel="noopener noreferrer" className="text-villa-olive underline">Sifnos hotels at discovercyclades.gr</a>—over 42 options from €50/night, though none match Villa Olivia Clara's expansive space.
                    </p>

                    <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4">Rent a Car in Sifnos</h3>
                    <p>
                        Essential for exploring pottery villages and coves. Rates are €30+/day with port pickup available via <a href="https://discovercyclades.gr/en/rent-a-car/sifnos" target="_blank" rel="noopener noreferrer" className="text-villa-olive underline">rent a car in Sifnos at discovercyclades.gr</a>.
                    </p>

                    <h3 className="text-xl font-bold text-villa-olive mt-8 mb-4">Ferry Tickets to Sifnos</h3>
                    <p>
                        Reach the island in 3-5.5 hours from Piraeus. Book easily at <a href="https://discovercyclades.gr" target="_blank" rel="noopener noreferrer" className="text-villa-olive underline">ferry tickets to Sifnos at discovercyclades.gr</a>.
                    </p>

                    <img
                        src={sectionImage5}
                        alt="Aerial view of Villa Olivia Clara showcasing its unbeatable location"
                        className="w-full h-auto rounded-xl my-8 shadow-soft"
                        loading="lazy"
                    />

                    <h2 className="text-2xl font-bold text-villa-olive mt-12 mb-6">Book Villa Olivia Clara Today</h2>
                    <p>
                        Elevate your Sifnos holiday at <Link to="/" className="text-villa-olive underline">villaoliviaclara.com</Link>—the premier choice among <strong>Sifnos luxury villas</strong>. For seamless trip planning, pair your stay with the excellent resources at discovercyclades.gr.
                    </p>

                </div>

                <div className="mt-12 pt-8 border-t border-villa-stone">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                        <h3 className="text-xl font-bold text-villa-olive">Share this article</h3>
                        <BlogShare
                            slug={currentSlug}
                            title="Ultimate Guide to Sifnos Villas"
                            description="Find your perfect Sifnos luxury villa. Discover why Villa Olivia Clara is the top choice."
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
