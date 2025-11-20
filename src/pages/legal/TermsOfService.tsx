import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, FileText, AlertTriangle, Euro, Calendar } from 'lucide-react';

const TermsOfService = () => {
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
            <FileText className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">Terms of Service</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            These terms govern your use of Villa Olivia Clara and our services. Please read them carefully.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Last Updated:</strong> February 15, 2024
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing and using the Villa Olivia Clara website and booking our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Booking and Reservations</h2>
            
            <div className="bg-sand-light p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-villa-olive" size={24} />
                <h3 className="text-xl font-semibold text-villa-olive">Reservation Process</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• All reservations must be confirmed in writing by Villa Olivia Clara</li>
                <li>• A deposit of 50% is required to secure your booking</li>
                <li>• The remaining balance is due 30 days before arrival</li>
                <li>• Bookings made within 30 days require full payment at time of booking</li>
                <li>• All payments must be made in Euros (EUR)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Minimum Stay Requirements</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li>• Minimum stay: 3 nights (low season)</li>
              <li>• Minimum stay: 7 nights (high season: July-August)</li>
              <li>• Special events and holidays may require extended minimum stays</li>
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Check-in and Check-out</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li>• Check-in: 4:00 PM - 8:00 PM</li>
              <li>• Check-out: 10:00 AM</li>
              <li>• Late check-in or early check-out may be arranged upon request</li>
              <li>• Photo identification required at check-in</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Payment Terms</h2>
            
            <div className="bg-villa-olive-light p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="text-villa-olive" size={24} />
                <h3 className="text-xl font-semibold text-villa-olive">Payment Schedule</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-villa-olive mb-2">Deposit (50%)</h4>
                  <p className="text-muted-foreground text-sm">Due at time of booking to secure reservation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-villa-olive mb-2">Final Payment (50%)</h4>
                  <p className="text-muted-foreground text-sm">Due 30 days before arrival date</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Accepted Payment Methods</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li>• Bank transfer (preferred method)</li>
              <li>• Credit card (Visa, MasterCard, American Express)</li>
              <li>• PayPal (subject to additional fees)</li>
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Additional Fees</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li>• Tourist tax: €4 per person per night (payable locally)</li>
              <li>• Additional cleaning: €50 per service</li>
              <li>• Lost key replacement: €50</li>
              <li>• Damage deposit: €500 (refundable, held on credit card)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Cancellation Policy</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Cancellation Information</h3>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    Cancellation terms vary based on timing and season. Please review carefully before booking.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Cancellation Schedule</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li>• <strong>More than 60 days before arrival:</strong> 10% cancellation fee</li>
              <li>• <strong>31-60 days before arrival:</strong> 50% of total booking value</li>
              <li>• <strong>15-30 days before arrival:</strong> 75% of total booking value</li>
              <li>• <strong>Less than 15 days before arrival:</strong> 100% of total booking value</li>
              <li>• <strong>No-show:</strong> 100% of total booking value</li>
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Force Majeure</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In cases of force majeure (natural disasters, government restrictions, pandemics), we will work with guests to reschedule or provide appropriate refunds on a case-by-case basis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Guest Responsibilities</h2>
            
            <h3 className="text-xl font-semibold text-villa-olive mb-3">Occupancy Limits</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li>• Maximum occupancy: 8 guests</li>
              <li>• All guests must be listed at time of booking</li>
              <li>• Day visitors must be approved in advance</li>
              <li>• Events and parties are subject to prior approval</li>
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Property Care</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li>• Treat the property with respect and care</li>
              <li>• Report any damages immediately</li>
              <li>• No smoking inside the villa</li>
              <li>• Pets require prior approval</li>
              <li>• Follow local noise regulations (quiet hours: 2:00 PM - 5:00 PM, 11:00 PM - 8:00 AM)</li>
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Safety and Security</h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li>• Keep doors and windows locked when away</li>
              <li>• Use pool facilities at your own risk (no lifeguard on duty)</li>
              <li>• Children must be supervised at all times</li>
              <li>• Emergency contact information will be provided upon arrival</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Liability and Insurance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Villa Olivia Clara maintains comprehensive property insurance; however, guests are responsible for their personal belongings and any damage caused during their stay. We strongly recommend that guests obtain travel insurance to cover personal items, cancellations, and medical emergencies.
            </p>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Limitation of Liability</h3>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Villa Olivia Clara is not liable for any injuries, accidents, or losses that occur on the property. Guests use all facilities at their own risk.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Privacy and Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your privacy is important to us. We collect and process personal information in accordance with our Privacy Policy and applicable data protection laws. By using our services, you consent to the collection and use of information as described in our <Link to="/privacy-policy" className="text-villa-olive hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of Greece. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the Greek courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. Changes will be posted on our website with an updated "Last Updated" date. Continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-sand p-6 rounded-lg">
              <div className="space-y-2 text-muted-foreground">
                <div><strong>Villa Olivia Clara</strong></div>
                <div>Platis Gialos, 84003 Sifnos, Greece</div>
                <div>Email: info@villaoliviaclara.com</div>
                <div>Phone: +30 22840 71234</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-hero text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Book Your Stay?</h3>
            <p className="mb-6 text-white/90">
              By proceeding with your booking, you agree to these terms and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="villa-outline">
                <Link to="/contact">Make a Reservation</Link>
              </Button>
              <Button asChild size="lg" variant="villa-ghost">
                <Link to="/villa">Tour Our Villa</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;