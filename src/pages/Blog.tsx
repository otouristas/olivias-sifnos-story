import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';
import { BlogShare } from '@/components/SocialShare';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

// Mock images using existing assets
import blogImage1 from '@/assets/Sifnos/Beaches/plats-gialos.webp';
import blogImage2 from '@/assets/Sifnos/villages/apollonia.webp';

const Blog = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLang = i18n.language;
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;

  // Blog post slugs by language
  const blogSlugs = {
    en: {
      sifnosGuide: 'ultimate-guide-sifnos-greece-luxury-villa-vacation',
      villaVsHotel: 'luxury-villa-vs-hotel-sifnos-greece-complete-comparison'
    },
    el: {
      sifnosGuide: 'οδηγος-σιφνου-ελλαδα-πολυτελης-βιλα',
      villaVsHotel: 'πολυτελης-βιλα-vs-ξενοδοχειο-σιφνος'
    },
    fr: {
      sifnosGuide: 'guide-sifnos-grece-villa-luxe',
      villaVsHotel: 'villa-luxe-vs-hotel-sifnos-grece'
    },
    it: {
      sifnosGuide: 'guida-sifnos-grecia-villa-lusso',
      villaVsHotel: 'villa-lusso-vs-hotel-sifnos-grecia'
    }
  };

  const currentSlugs = blogSlugs[currentLang as keyof typeof blogSlugs] || blogSlugs.en;

  const blogPosts = [
    {
      id: 1,
      slug: currentSlugs.sifnosGuide,
      title: t('blog.posts.sifnosGuide.title'),
      excerpt: t('blog.posts.sifnosGuide.excerpt'),
      image: blogImage1,
      author: 'Elena Philippou',
      publishDate: '2025-11-18',
      readTime: `8 ${t('blog.readTime')}`,
      category: t('blog.posts.sifnosGuide.category'),
      featured: true
    },
    {
      id: 2,
      slug: currentSlugs.villaVsHotel,
      title: t('blog.posts.villaVsHotel.title'),
      excerpt: t('blog.posts.villaVsHotel.excerpt'),
      image: blogImage2,
      author: 'Elena Philippou',
      publishDate: '2025-11-10',
      readTime: `6 ${t('blog.readTime')}`,
      category: t('blog.posts.villaVsHotel.category'),
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('seo.blog.title')}
        description={t('seo.blog.description')}
        keywords={t('seo.blog.keywords')}
        ogImage="https://villaoliviaclara.com/src/assets/villa-gallery/Villa-Olivia-Clara_034_kitchen.jpg"
        canonicalUrl={`https://villaoliviaclara.com${langPrefix}/blog`}
        alternateLanguages={[
          { lang: 'en', url: 'https://villaoliviaclara.com/blog' },
          { lang: 'el', url: 'https://villaoliviaclara.com/el/blog' },
          { lang: 'fr', url: 'https://villaoliviaclara.com/fr/blog' },
          { lang: 'it', url: 'https://villaoliviaclara.com/it/blog' },
          { lang: 'x-default', url: 'https://villaoliviaclara.com/blog' }
        ]}
      />
      <Navigation />
      
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50"
      >
        Skip to content
      </a>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-villa-olive">
            {t('blog.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map(post => (
            <Card key={post.id} className="mb-12 border-villa-stone shadow-elegant overflow-hidden animate-fade-in">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-villa-olive text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="bg-villa-olive-light text-villa-olive px-3 py-1 rounded-full text-xs font-medium">
                      {t('blog.featured')}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-villa-olive mb-4 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString(currentLang === 'el' ? 'el-GR' : currentLang === 'fr' ? 'fr-FR' : currentLang === 'it' ? 'it-IT' : 'en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                    <Button asChild variant="villa" size="lg">
                      <Link to={`${langPrefix}/blog/${post.slug}`}>
                        {t('blog.readMore')} <ArrowRight size={16} />
                      </Link>
                    </Button>
                  <BlogShare 
                    slug={post.slug}
                    title={post.title}
                    description={post.excerpt}
                  />
                </CardContent>
              </div>
            </Card>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(post => !post.featured).map(post => (
              <Card key={post.id} className="border-villa-stone shadow-soft overflow-hidden hover:shadow-elegant transition-shadow duration-200 animate-fade-in">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-villa-olive text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-villa-olive mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString(currentLang === 'el' ? 'el-GR' : currentLang === 'fr' ? 'fr-FR' : currentLang === 'it' ? 'it-IT' : 'en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button asChild variant="villa-outline" size="sm" className="w-full">
                    <Link to={`${langPrefix}/blog/${post.slug}`}>
                      {t('blog.readMore')} <ArrowRight size={14} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-villa-olive">
            {t('blog.ctaTitle')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('blog.ctaDescription')}
          </p>
          <Button asChild variant="villa" size="lg">
            <Link to={`${langPrefix}/contact`}>{t('nav.bookNow')}</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Blog;
