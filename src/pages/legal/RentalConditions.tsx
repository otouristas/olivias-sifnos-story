import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ArrowLeft, FileText, Shield, AlertTriangle, Phone, Mail, Clock } from 'lucide-react';

const RentalConditions = () => {
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-villa-olive transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-villa-olive font-medium">Rental Conditions</li>
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
            <FileText className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">Rental Conditions</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Welcome to Villa Olivia Clara! We've crafted these terms to ensure a safe, comfortable, and enjoyable stay for all our guests while respecting our beautiful island environment. Please read them carefully. By confirming your reservation, you agree to comply with these terms.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Section 1: Agreement & Legal Framework */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Section 1: Agreement & Legal Framework</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">1.1. Parties Involved</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement is between the lead guest making the reservation on the Villa Olivia Clara website ("Tenant") and Philippou Eleni & Co LP, operating as Villa Olivia Clara ("Villa Olivia Clara"). The Tenant is responsible for ensuring all guests comply with this Agreement and is jointly and severally liable for any breaches of these terms by any member of their party or invited third parties.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">1.2. Property Overview</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Property is a fully furnished, private villa located in Platis Gialos, Sifnos, Greece, for non-commercial use. It includes a private swimming pool and designated parking. Maximum occupancy: 8 guests. GNTO number: 1172K9220077301. The Property is registered as a non-primary tourist accommodation under Greek hospitality regulations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">1.3. Governing Law & Dispute Resolution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement is governed by Greek law. Any disputes shall be resolved by Greek courts. Parties agree to attempt amicable resolution first.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">1.4. Booking Details</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-villa-stone shadow-soft">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-villa-olive mb-2">Minimum Stay</h4>
                        <p className="text-muted-foreground text-sm">3 consecutive nights</p>
                      </CardContent>
                    </Card>
                    <Card className="border-villa-stone shadow-soft">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-villa-olive mb-2">Rent</h4>
                        <p className="text-muted-foreground text-sm">Total rent (including taxes and applicable tourism taxes & fees) is confirmed in writing at the time of reservation</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-villa-olive mb-3">Payment Schedule</h4>
                    <ul className="text-muted-foreground space-y-2 ml-6">
                      <li>• 30% due within 3 business days</li>
                      <li>• Balance due 60 days prior to check-in</li>
                      <li>• Late or missed payments will result in cancellation without refund</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-villa-olive mb-3">Cancellation Policy</h4>
                    <p className="text-muted-foreground leading-relaxed">
                    Reservations are fully refundable up to 60 days prior to check-in date.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">1.5. Payments & Receipts</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In accordance with Greek tax regulations:
                </p>
                <ul className="text-muted-foreground space-y-2 ml-6 mb-4">
                  <li>• Payments over €500 must be made via bank transfer, debit/credit card, or an approved online processor</li>
                  <li>• Cash payments above this amount are not permitted</li>
                  <li>• A certified POS system is used to process card payments (Visa, Mastercard)</li>
                  <li>• All payments will be accompanied by official receipts issued through Villa Olivia Clara's certified invoicing system</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">1.6. Taxes & Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All rental prices include VAT (13%) and municipal taxes (0.5%). A Climate Resilience Fee of €15 per night (April–October) is charged in addition to the rental price. Receipts for this fee will be issued separately.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Operational & Financial Policies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Section 2: Operational & Financial Policies</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">2.1. Security Deposit</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Tenant agrees to cover the full cost of repairs or replacements for damages, based on valid third-party quotes or invoices provided by Villa Olivia Clara. Villa Olivia Clara has the right to place a €1,000 credit card pre-authorization prior to check-in. It covers damages, rule violations, or lost items. The hold will be released within 7 days post check-out after inspection.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">2.2. Services Provided</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-villa-stone shadow-soft">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">Included Services</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Cleaning every 3 days</li>
                        <li>• Towel change every 3 days</li>
                        <li>• Linen change once a week</li>
                        <li>• Pool and garden maintenance</li>
                        <li>• Washing machine use (once every 3.5 days)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-villa-stone shadow-soft">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">Additional Charges</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Extra washing machine use: €25 per use</li>
                        <li>• Additional cleaning services</li>
                        <li>• Third-party services (chefs, excursions)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">2.3. Facility Failure Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If essential amenities such as air conditioning, hot water, electricity, or pool filtration systems fail during your stay, Villa Olivia Clara will make reasonable efforts to resolve the issue within 24 hours. If not resolved within that time, partial refunds may be offered at management's discretion.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Guest Conduct & Use of Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Section 3: Guest Conduct & Use of Property</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">3.1. House Rules</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="text-villa-olive" size={16} />
                      <span className="text-muted-foreground">Max occupancy: 8 guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="text-villa-olive" size={16} />
                      <span className="text-muted-foreground">No smoking on premises</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="text-villa-olive" size={16} />
                      <span className="text-muted-foreground">No pets allowed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="text-villa-olive" size={16} />
                      <span className="text-muted-foreground">No parties or events</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="text-villa-olive" size={16} />
                      <span className="text-muted-foreground">No modifications to property</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="text-villa-olive" size={16} />
                      <span className="text-muted-foreground">Up to 5 vehicles in parking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="text-villa-olive" size={16} />
                      <span className="text-muted-foreground">Respect quiet hours</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">3.2. Check-In & Check-Out</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-villa-stone shadow-soft">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">Check-In</h4>
                      <ul className="text-muted-foreground text-sm space-y-2">
                        <li>• From 4:00 pm (early check-in subject to availability)</li>
                        <li>• Valid passport or EU national ID required</li>
                        <li>• Guest data recorded per Greek law</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-villa-stone shadow-soft">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">Check-Out</h4>
                      <ul className="text-muted-foreground text-sm space-y-2">
                        <li>• By 10:00 am</li>
                        <li>• Property must be returned in original condition</li>
                        <li>• Lost keys may result in charges</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">3.3. Quiet Hours & Legal Conduct</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Guests must respect Greek quiet hours: April 1 – September 30 (3:30 pm–5:30 pm and 10:00 pm–7:30 am). All guests must comply with Greek law during their stay. Discrimination or illegal behavior will not be tolerated.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">3.4. Minors & Supervision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Villa Olivia Clara does not accept unaccompanied minors under the age of 18. All minors must be accompanied by a responsible adult guest and remain under their supervision throughout the stay. Special attention must be paid near the swimming pool and around elevated outdoor areas.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Health, Safety & Risk */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Section 4: Health, Safety & Risk</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">4.1. Liability & Insurance</h3>
                <ul className="text-muted-foreground space-y-2 ml-6">
                  <li>• Villa Olivia Clara is not liable for theft, injuries, or damages unless caused by gross negligence</li>
                  <li>• Guests are encouraged to have personal travel insurance</li>
                  <li>• The property is insured against fire, natural disasters, and civil liability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">4.2. Swimming Pool Policy</h3>
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-amber-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-3">Important Pool Safety Rules</h4>
                      <ul className="text-amber-700 text-sm space-y-1">
                        <li>• No diving or running around the pool area</li>
                        <li>• Continuously supervise children using the pool</li>
                        <li>• Follow health and safety signage</li>
                        <li>• Observe quiet hours (3:30 pm–5:30 pm and 10:00 pm–7:30 am)</li>
                        <li>• Shower before entering the pool</li>
                        <li>• No glass containers near the pool</li>
                        <li>• Avoid using the pool during inclement weather</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">4.3. Environmental Practices</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In accordance with waste management and environmental protection laws, we kindly request guests to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Minimize water use and avoid washing vehicles</li>
                    <li>• Reuse towels to conserve energy</li>
                    <li>• Turn off air conditioning when rooms are unoccupied</li>
                    <li>• Keep windows and doors closed during AC use</li>
                  </ul>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Switch off lights and appliances when not in use</li>
                    <li>• Follow recycling and waste sorting instructions</li>
                    <li>• Only flush toilet paper (septic system)</li>
                    <li>• Dispose of other items in waste bins</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">4.4. Force Majeure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Villa Olivia Clara is not liable for disruptions, cancellations, or early termination caused by external events outside its control, including but not limited to natural disasters, government-imposed restrictions, strikes, or pandemics. No refunds or credits will be issued for force majeure events.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Guest Support & Communication */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Section 5: Guest Support & Communication</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">5.1. Guest Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-villa-olive mb-2">Privacy</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Guest data is handled in compliance with GDPR Regulation and Greek Privacy Laws. Data is collected only as required for legal compliance and check-in procedures and is securely stored.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-villa-olive mb-2">Welcome Book</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Includes appliance instructions, house rules, emergency contacts, and local tips. A digital copy is available via QR code on site or by request prior to arrival.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-villa-olive mb-2">Lost & Found</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Items found at the property will be kept for 30 days. Courier returns are offered at the guest's expense; please email elena@villaoliviaclara.com to arrange return.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">5.2. Emergency Contacts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-villa-stone shadow-soft">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">Emergency Services</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fire Department:</span>
                          <span className="font-medium">199</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Medical Emergency:</span>
                          <span className="font-medium">166</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Police:</span>
                          <span className="font-medium">100</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-villa-stone shadow-soft">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-villa-olive mb-3">Villa Olivia Clara</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="text-villa-olive" size={14} />
                          <span className="text-muted-foreground">Urgent matters:</span>
                        </div>
                        <p className="font-medium ml-6">+30 697 191 9382</p>
                        <div className="flex items-center gap-2">
                          <Mail className="text-villa-olive" size={14} />
                          <span className="text-muted-foreground">Non-urgent:</span>
                        </div>
                        <p className="font-medium ml-6">elena@villaoliviaclara.com</p>
                        <div className="flex items-center gap-2">
                          <Clock className="text-villa-olive" size={14} />
                          <span className="text-muted-foreground">Response time:</span>
                        </div>
                        <p className="text-muted-foreground ml-6">Within 2 hours (8:00 am – 8:00 pm)</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">5.3. WiFi & Internet Use</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Guests may access the property's Wi-Fi solely for legal and private use. Accessing or distributing pirated digital content, including IPTV, torrents, or unauthorized streaming services, is prohibited and may result in guest removal and legal reporting to the relevant authorities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-villa-olive mb-4">5.4. Language of Agreement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement is provided in English. In case of discrepancy between translated versions and the original English version, the English version shall prevail.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8 bg-sand-light p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Questions About These Terms?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have any questions about these rental conditions or need clarification on any terms, please don't hesitate to contact us. We're here to help ensure your stay is comfortable and enjoyable.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="villa">
                <a href="mailto:elena@villaoliviaclara.com">
                  <Mail size={16} className="mr-2" />
                  Contact Us
                </a>
              </Button>
              <Button asChild variant="villa-outline">
                <a href="tel:+306971919382">
                  <Phone size={16} className="mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RentalConditions;
