import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { useTranslation } from 'react-i18next';
import { 
  Home, 
  Search, 
  ArrowLeft, 
  MapPin, 
  Calendar,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const NotFound = () => {
  const { t } = useTranslation();
  
  const helpfulLinks = [
    {
      title: t('notFound.ourVilla'),
      description: t('notFound.exploreVilla'),
      href: '/villa',
      icon: Home
    },
    {
      title: t('notFound.sifnosGuide'),
      description: t('notFound.discoverIsland'),
      href: '/sifnos',
      icon: MapPin
    },
    {
      title: t('notFound.guestReviews'),
      description: t('notFound.readTestimonials'),
      href: '/reviews',
      icon: MessageCircle
    },
    {
      title: t('notFound.bookStay'),
      description: t('notFound.planVacation'),
      href: '/contact',
      icon: Calendar
    }
  ];

  const popularPages = [
    { name: t('notFound.villaTour'), href: '/villa' },
    { name: t('notFound.sifnosIslandGuide'), href: '/sifnos' },
    { name: t('notFound.sifnosBeaches'), href: '/sifnos/beaches' },
    { name: t('notFound.guestReviews'), href: '/reviews' },
    { name: t('notFound.blog'), href: '/blog' },
    { name: t('notFound.contactUs'), href: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-white/20 mb-4">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('notFound.title')}
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('notFound.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="villa-outline">
              <Link to="/">
                <Home className="mr-2" size={20} />
                {t('notFound.backToHome')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="villa">
              <Link to="/contact">
                <MessageCircle className="mr-2" size={20} />
                {t('common.contactUs')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-villa-olive mb-4">
              Let's Get You Back on Track
            </h3>
            <p className="text-lg text-muted-foreground">
              Here are some popular pages to help you find what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpfulLinks.map((link, index) => (
              <Card 
                key={index} 
                className="border-villa-stone shadow-soft hover:shadow-elegant transition-shadow duration-200 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-villa-olive-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-villa-olive transition-colors duration-200">
                    <link.icon className="text-villa-olive group-hover:text-white transition-colors duration-200" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-villa-olive mb-2">
                    {link.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {link.description}
                  </p>
                  <Button asChild variant="villa-outline" size="sm" className="w-full">
                    <Link to={link.href}>
                      Explore
                      <ExternalLink className="ml-1" size={14} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Pages */}
          <Card className="border-villa-stone shadow-soft">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-villa-olive mb-6 text-center">
                Popular Pages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {popularPages.map((page, index) => (
                  <Link
                    key={index}
                    to={page.href}
                    className="flex items-center justify-between p-3 rounded-lg border border-villa-stone hover:bg-villa-olive-light hover:border-villa-olive transition-all duration-200 group"
                  >
                    <span className="text-muted-foreground group-hover:text-villa-olive transition-colors duration-200">
                      {page.name}
                    </span>
                    <ArrowLeft className="text-villa-stone group-hover:text-villa-olive transition-colors duration-200 rotate-180" size={16} />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Search Suggestion */}
      <section className="py-20 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Search className="text-villa-olive" size={32} />
            <h3 className="text-3xl font-bold text-villa-olive">
              Can't Find What You're Looking For?
            </h3>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is here to help you plan the perfect Sifnos vacation. 
            Get in touch and we'll assist you with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="villa">
              <Link to="/contact">
                <MessageCircle className="mr-2" size={20} />
                Contact Our Team
              </Link>
            </Button>
            <Button asChild size="lg" variant="villa-outline">
              <a href="mailto:elena@villaoliviaclara.com">
                <MessageCircle className="mr-2" size={20} />
                Email Elena
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default NotFound;