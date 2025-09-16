import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import SEOHead from '@/components/SEOHead';
import ImageZoom from '@/components/ImageZoom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import elenaProfile from '@/assets/elena-philippou-profile-picture-2048x2048.webp';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Villa Olivia Clara Booking Inquiry',
    preferredDates: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:elena@villaoliviaclara.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Preferred Dates: ${formData.preferredDates}\n\n` +
      `Message:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "We'll get back to you as soon as possible!",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        keywords={t('seo.contact.keywords')}
        ogImage="https://villaoliviaclara.com/src/assets/villa-gallery/Villa-Olivia-Clara_040_dining-at-the-terrace.jpg"
        canonicalUrl="https://villaoliviaclara.com/contact"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-villa-olive">
            Book Your Stay
          </h1>
          <p className="text-xl text-muted-foreground">
            We would be delighted to host you at Villa Olivia Clara. Whether you have a question 
            about the villa, need help planning your trip to Sifnos, or are ready to book your vacation, 
            please get in touch.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-villa-olive mb-6">Send Us an Inquiry</h2>
                <p className="text-muted-foreground mb-6">
                  Please fill out the form with your details and preferred dates, and we will get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="preferredDates">Preferred Dates</Label>
                    <Input
                      id="preferredDates"
                      name="preferredDates"
                      type="text"
                      placeholder="e.g., July 15-22, 2024"
                      value={formData.preferredDates}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your group, special requests, or any questions you have..."
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" variant="villa" size="lg" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Elena & Contact Details Combined */}
            <div>
              <Card className="border-villa-stone shadow-elegant overflow-hidden mb-8">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-6 mb-8">
                    {/* Elena's Photo */}
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-villa-olive-light shadow-soft">
                        <ImageZoom
                          src={elenaProfile}
                          alt="Elena Philippou - Your Host at Villa Olivia Clara"
                          className="w-full h-full object-cover cursor-zoom-in"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-villa-olive rounded-full flex items-center justify-center shadow-soft">
                        <Heart className="text-white" size={12} />
                      </div>
                    </div>

                    {/* Elena's Info */}
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-villa-olive mb-2">{t('contact.elena')}</h2>
                      <p className="text-lg text-muted-foreground mb-1">{t('contact.hostTitle')}</p>
                      <p className="text-villa-olive font-semibold">{t('contact.location')}</p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-4 mb-6">
                    <div className="text-center">
                      <h3 className="font-semibold text-villa-olive mb-3">Villa Olivia Clara</h3>
                      <p className="text-muted-foreground mb-3">
                        Platis Gialos, Sifnos<br />
                        Cyclades, Greece
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2">
                        <Mail className="text-villa-olive" size={16} />
                        <a 
                          href="mailto:elena@villaoliviaclara.com"
                          className="text-villa-olive hover:text-villa-olive-dark transition-colors text-sm hover:underline"
                        >
                          elena@villaoliviaclara.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="text-villa-olive" size={16} />
                        <a 
                          href="tel:+306971919382"
                          className="text-villa-olive hover:text-villa-olive-dark transition-colors text-sm hover:underline"
                        >
                          +30 697 191 9382
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="text-villa-olive" size={16} />
                        <span className="text-muted-foreground text-sm">Platis Gialos, Sifnos</span>
                      </div>
                    </div>
                  </div>

                  {/* Welcome Message */}
                  <div className="pt-6 border-t border-villa-stone">
                    <div className="space-y-4 text-center">
                      <h4 className="text-xl font-bold text-villa-olive mb-4">
                        {t('contact.welcome')}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {t('contact.welcomeMessage')}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {t('contact.cultureMessage')}
                      </p>
                      <p className="text-villa-olive font-semibold">
                        {t('contact.signature')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Map */}
              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-0">
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      title="Villa Olivia Clara on Google Maps"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.346087785217!2d24.72047107638427!3d36.929896260376985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1498f3af72130097%3A0x80714f4ef96841f0!2sVilla%20Olivia%20Clara!5e0!3m2!1sen!2sgr!4v1756997977998!5m2!1sen!2sgr"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;