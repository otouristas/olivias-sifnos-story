import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyBookingBar from '@/components/StickyBookingBar';
import { ArrowLeft, Cookie, Settings, BarChart, Shield } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50"
      >
        Skip to content
      </a>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-villa-olive transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-villa-olive font-medium">Cookie Policy</li>
          </ol>
        </nav>

        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="villa-ghost" size="sm">
            <Link to="/">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12" id="main-content">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">Cookie Policy</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            This policy explains how Villa Olivia Clara uses cookies and similar technologies to enhance your website experience.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Last Updated:</strong> February 15, 2024
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help us make your experience better by remembering your preferences and understanding how you use our site.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cookies cannot harm your computer or mobile device and do not contain any personal information that can identify you directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Types of Cookies We Use</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <Shield className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">Essential Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Session management</li>
                    <li>• Security tokens</li>
                    <li>• Load balancing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <BarChart className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">Analytics Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Page view statistics</li>
                    <li>• User behavior analysis</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <Settings className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">Functional Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Language preferences</li>
                    <li>• User interface settings</li>
                    <li>• Accessibility options</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <Cookie className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">Marketing Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    These cookies track visitors across websites to display relevant and engaging ads for individual users.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Personalized advertising</li>
                    <li>• Social media integration</li>
                    <li>• Conversion tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Villa Olivia Clara uses cookies for the following purposes:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• <strong>Website Functionality:</strong> To ensure our website works properly and provide you with the features and services you expect</li>
              <li>• <strong>User Experience:</strong> To remember your preferences and provide a personalized browsing experience</li>
              <li>• <strong>Analytics:</strong> To understand how our website is used and improve our content and services</li>
              <li>• <strong>Communication:</strong> To remember your communication preferences and provide relevant information</li>
              <li>• <strong>Security:</strong> To protect our website and users from fraud and abuse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some cookies on our website are set by third-party services that appear on our pages. We do not control these cookies, and you should check the relevant third party's website for more information about their cookies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Third-party services we may use include:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• <strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li>• <strong>Social Media Platforms:</strong> For social sharing functionality</li>
              <li>• <strong>Payment Processors:</strong> For secure payment processing</li>
              <li>• <strong>Booking Platforms:</strong> For reservation and booking services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Managing Your Cookie Preferences</h2>
            
            <div className="bg-sand-light p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-villa-olive mb-3">Browser Settings</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies through your web browser settings. Most browsers allow you to:
              </p>
              <ul className="text-muted-foreground space-y-2 mb-4">
                <li>• View cookies stored on your device</li>
                <li>• Delete existing cookies</li>
                <li>• Block cookies from specific websites</li>
                <li>• Block all cookies</li>
                <li>• Get notified when a cookie is set</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed text-sm">
                <strong>Note:</strong> Disabling cookies may affect the functionality of our website and your user experience.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Cookie Consent</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you first visit our website, we will ask for your consent to use certain types of cookies. You can change your mind at any time by:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• Clearing your browser cookies and revisiting our website</li>
              <li>• Using your browser's cookie management settings</li>
              <li>• Contacting us directly to update your preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Cookie Retention</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Different cookies have different retention periods:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• <strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li>• <strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
              <li>• <strong>Analytics Cookies:</strong> Typically expire after 2 years</li>
              <li>• <strong>Functional Cookies:</strong> May last from a few hours to several years depending on their purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Changes to This Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this cookie policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically for any changes.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8 bg-villa-olive-light p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Questions About Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about our use of cookies or this cookie policy, please feel free to contact us. We're happy to help you understand how we use cookies and assist with any concerns you may have.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="villa">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="villa-outline">
                <Link to="/privacy-policy">View Privacy Policy</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <StickyBookingBar />
    </div>
  );
};

export default CookiePolicy;