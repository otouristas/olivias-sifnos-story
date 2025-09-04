import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyBookingBar from '@/components/StickyBookingBar';
import { ArrowLeft, Shield, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
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
            <li className="text-villa-olive font-medium">Privacy Policy</li>
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
            <Shield className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">Privacy Policy</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Your privacy is important to us. This policy explains how Villa Olivia Clara collects, uses, and protects your personal information.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Last Updated:</strong> February 15, 2024
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information you provide directly to us when you make a booking, contact us, or use our services:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• Personal information (name, email address, phone number)</li>
              <li>• Booking details (dates, number of guests, special requests)</li>
              <li>• Payment information (processed securely through our payment partners)</li>
              <li>• Communication records (emails, messages, feedback)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• Process and manage your villa bookings</li>
              <li>• Communicate with you about your reservation</li>
              <li>• Provide customer support and respond to inquiries</li>
              <li>• Send booking confirmations and important updates</li>
              <li>• Improve our services and website functionality</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties, except:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• To trusted service providers who assist in operating our website and business</li>
              <li>• When required by law or to protect our rights</li>
              <li>• With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Cookies and Website Analytics</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• Remember your preferences and settings</li>
              <li>• Analyze website traffic and usage patterns</li>
              <li>• Improve website functionality and user experience</li>
              <li>• Provide relevant content and recommendations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You can control cookie settings through your browser preferences. For more details, see our <Link to="/cookie-policy" className="text-villa-olive hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• Secure SSL encryption for data transmission</li>
              <li>• Regular security assessments and updates</li>
              <li>• Limited access to personal information on a need-to-know basis</li>
              <li>• Secure payment processing through certified partners</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4">
              <li>• Access and review your personal information</li>
              <li>• Request corrections to inaccurate information</li>
              <li>• Request deletion of your personal data</li>
              <li>• Opt out of marketing communications</li>
              <li>• Withdraw consent for data processing</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements. Booking information may be retained for tax and accounting purposes as required by Greek law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website may contain links to third-party services or integrate with external platforms for booking and payments. These third parties have their own privacy policies, and we are not responsible for their practices. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes indicates your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8 bg-sand-light p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-villa-olive" size={20} />
                <span className="text-muted-foreground">info@villaoliviaclara.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-villa-olive" size={20} />
                <span className="text-muted-foreground">+30 22840 71234</span>
              </div>
              <div className="text-muted-foreground">
                <strong>Villa Olivia Clara</strong><br />
                Platis Gialos, 84003<br />
                Sifnos, Cyclades, Greece
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <StickyBookingBar />
    </div>
  );
};

export default PrivacyPolicy;