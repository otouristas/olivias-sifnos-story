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
import { Mail, Phone, MapPin } from 'lucide-react';
import elenaProfile from '@/assets/elena-philippou-profile-picture-2048x2048.webp';
import { sendContactEmail, ContactFormData } from '@/lib/resend';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    infants: 0,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields (Name, Email, Message).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await sendContactEmail(formData as ContactFormData);
      
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your inquiry. Elena will get back to you soon!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          adults: 2,
          children: 0,
          infants: 0,
          message: ''
        });
      } else {
        toast({
          title: "Failed to send message",
          description: result.error || "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(value) || 0 : value
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+30 123 456 7890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkIn">Check-in Date</Label>
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="checkOut">Check-out Date</Label>
                      <Input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="adults">Adults</Label>
                      <Input
                        id="adults"
                        name="adults"
                        type="number"
                        min="1"
                        max="8"
                        value={formData.adults}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="children">Children</Label>
                      <Input
                        id="children"
                        name="children"
                        type="number"
                        min="0"
                        max="6"
                        value={formData.children}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="infants">Infants</Label>
                      <Input
                        id="infants"
                        name="infants"
                        type="number"
                        min="0"
                        max="4"
                        value={formData.infants}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
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
                  
                  <Button 
                    type="submit" 
                    variant="villa" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Elena & Contact Details Combined - Two Columns Inside */}
            <div>
              <Card className="border-villa-stone shadow-elegant overflow-hidden mb-8">
                <CardContent className="p-8">
                  {/* Two Column Layout Inside */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Elena's Profile */}
                    <div>
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
                        </div>

                        {/* Elena's Info */}
                        <div className="text-center">
                          <h2 className="text-2xl font-bold text-villa-olive mb-2">{t('contact.elena')}</h2>
                          <p className="text-lg text-muted-foreground mb-1">{t('contact.hostTitle')}</p>
                          <p className="text-villa-olive font-semibold">{t('contact.location')}</p>
                        </div>
                      </div>

                      {/* Contact Details */}
                      <div className="space-y-4">
                        <div className="text-center">
                          <h3 className="font-semibold text-villa-olive mb-3">Villa Olivia Clara</h3>
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
                    </div>

                    {/* Right Column - Welcome Message */}
                    <div>
                      <div className="space-y-4">
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
                      allow="fullscreen"
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