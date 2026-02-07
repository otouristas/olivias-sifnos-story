import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';
import { ArrowLeft, Leaf, Target, Zap, Recycle, Globe, TrendingDown, CheckCircle } from 'lucide-react';

const Sustainability = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('seo.sustainability.title')}
        description={t('seo.sustainability.description')}
        keywords={t('seo.sustainability.keywords')}
        ogImage="https://villaoliviaclara.com/src/assets/villa-gallery/Villa-Olivia-Clara_043_aerial-view-of-the-villa-wide.jpg"
        canonicalUrl="https://villaoliviaclara.com/sustainability"
        alternateLanguages={[
          { lang: 'en', url: 'https://villaoliviaclara.com/sustainability' },
          { lang: 'el', url: 'https://villaoliviaclara.com/el/sustainability' },
          { lang: 'fr', url: 'https://villaoliviaclara.com/fr/sustainability' },
          { lang: 'it', url: 'https://villaoliviaclara.com/it/sustainability' },
          { lang: 'x-default', url: 'https://villaoliviaclara.com/sustainability' }
        ]}
      />
      <Navigation />
      
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50"
      >
        Skip to content
      </a>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="villa-ghost" size="sm">
            <Link to="/">
              <ArrowLeft size={16} /> {t('common.backToHome')}
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12" id="main-content">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">{t('sustainability.title')}</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {t('sustainability.subtitle')}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Carbon Footprint Disclosure */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Carbon Footprint Disclosure</h2>
            
            {/* Our Climate Commitment */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-villa-olive mb-4">Our Climate Commitment</h3>
              <div className="bg-villa-olive-light p-6 rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Villa Olivia Clara is committed to set science-based emissions reduction targets across all scopes, in line with the 1.5°C emissions scenarios and set a long-term science-based target to reach net-zero scope 1 & 2 greenhouse gas (GHG) emissions by no later than 2030. We will strive to achieve net-zero in scope 3 emissions by no later than 2050, in line with the criteria and recommendations of the Science Based Targets initiative.
                </p>
              </div>
            </div>

            {/* Current Carbon Footprint */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-villa-olive mb-4">Villa Olivia Clara's Carbon Footprint Today</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Scope 1/2 (direct & indirect emissions):</strong>
              </p>
              
              <div className="space-y-4 mb-6">
                <Card className="border-villa-stone shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-villa-olive mb-3">⚡ Electricity</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We consume electricity from the Sifnos independent power network that has the following energy mix (for the year 2021): ~85% conventional fossil fuel generators and ~15% renewable energy (mostly solar panels). Our main consumption of energy is for cooling, water heating, standard household appliances, and water treatment for the pool.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-villa-stone shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-villa-olive mb-3">🔥 Heating Oil</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We consume annually heating oil for heating and water heating purposes during winter.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-villa-stone shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-villa-olive mb-3">🚗 Gasoline</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We consume diesel gasoline for transportation of goods and provision of services to/from Villa Olivia Clara (e.g., cleaning, check-in/check-out).
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-sand-light p-6 rounded-lg text-center">
                <p className="text-2xl font-bold text-villa-olive mb-2">~8.6 metric tons of CO2 annually</p>
                <p className="text-muted-foreground">We estimate Villa Olivia Clara's carbon footprint</p>
              </div>
            </div>
          </section>

          {/* Carbon Neutral since 2021 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Carbon Neutral Since 2021</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-villa-olive" size={24} />
                    <h3 className="text-xl font-semibold text-villa-olive">1. Carbon Offsetting</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We are offsetting all our emissions. Since 2021, we have been investing in offsetting our scope 1 & 2 carbon footprint. All offset projects in our portfolio are verified to the Verified Carbon Standard (VCS). Our projects are selected predominantly within developing countries, where they assist carbon emission reduction as well as bringing local community benefits.
                  </p>
                  <div className="bg-gray-100 p-3 rounded text-center">
                    <p className="text-sm font-medium text-villa-olive">Verified Carbon Standard (VCS)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="text-villa-olive" size={24} />
                    <h3 className="text-xl font-semibold text-villa-olive">2. Renewable Energy</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All electricity consumed is sourced from renewable energy sources. We hold a Guarantee of Origin produced by renewable energy sources for the amount of energy that we consume (certificate #DSX1000008 of PPC at DAPEEP S.A.). This means that the equivalent amount of energy consumed has been generated and preserved from renewable energy sources.
                  </p>
                  <div className="bg-gray-100 p-3 rounded text-center">
                    <p className="text-sm font-medium text-villa-olive">GreenPass Certificate</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown className="text-villa-olive" size={24} />
                    <h3 className="text-xl font-semibold text-villa-olive">3. Carbon Removal</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We contribute 0.5% of our revenue to fund carbon removal technologies. Through Stripe, we contribute 0.5% of our revenue to help scale emerging carbon removal technologies.
                  </p>
                  <div className="bg-gray-100 p-3 rounded text-center">
                    <p className="text-sm font-medium text-villa-olive">Stripe Climate Program</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Recycle className="text-villa-olive" size={24} />
                    <h3 className="text-xl font-semibold text-villa-olive">4. Waste Management</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We manage waste generation and disposal. In addition, we are reducing the use of single-use plastics, including replacing tiny single-use toiletry bottles of shampoo, conditioner and bath gel in guestroom showers with larger pump-topped bottles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Path to Net Zero */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Our Path to Net Zero Scope 1 & 2 by 2030</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">1. Reduction in Energy Consumption</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-villa-olive" size={20} />
                      <span className="text-muted-foreground">Replacement of electric water heater with solar-powered</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-villa-olive" size={20} />
                      <span className="text-muted-foreground">Replacement of A/C units and standard appliances with energy-efficient units</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-villa-olive" size={20} />
                      <span className="text-muted-foreground">Replacement of heating oil unit with heat pump system</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-villa-olive" size={20} />
                      <span className="text-muted-foreground">Better insulation of walls, windows, and roof</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-villa-olive" size={20} />
                      <span className="text-muted-foreground">Replacement of car with electric vehicle</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">2. Installation of Renewable Energy Generation</h3>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-villa-olive" size={20} />
                  <span className="text-muted-foreground">Installation of self-generating solar unit to cover full energy needs (net metering)</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">3. Support for Local Projects Promoting Renewable Energy & Decarbonization</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-villa-olive" size={20} />
                    <span className="text-muted-foreground">We are strong supporters of decarbonization projects, including the installation of renewable energy for the complete Sifnos energy system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-villa-olive" size={20} />
                    <span className="text-muted-foreground">We are also strong supporters of projects at the national, EU, and global level to support net zero</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">4. Promotion of Sustainable Practices to Villa Olivia Clara Guests</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are actively encouraging our guests to contribute to our carbon footprint reduction efforts by managing the use of cooling (air conditioning), reusing towels, and closing doors and windows for better insulation of the house.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-8 bg-villa-olive-light p-8 rounded-lg text-center">
            <Globe className="text-villa-olive mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Join Us in Our Sustainability Journey</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              Experience a truly sustainable vacation at Villa Olivia Clara. Together, we can make a positive impact on our planet while enjoying the beauty of Sifnos.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="villa" size="lg">
                <a href="https://book.villaoliviaclara.com/" target="_blank" rel="noopener noreferrer">
                  Book Your Stay
                </a>
              </Button>
              <Button asChild variant="villa-outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Sustainability;
