import { useState } from 'react';
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
        title="Contact Villa Olivia Clara | Book Your Sifnos Villa Stay | Elena Philippou"
        description="Contact Elena Philippou to book Villa Olivia Clara in Sifnos, Greece. Luxury villa rental with private pool, sea views, 4 bedrooms. Email elena@villaoliviaclara.com or call +30 697 1919 382."
        keywords="contact Villa Olivia Clara, book Sifnos villa, Elena Philippou host, villa rental Sifnos, luxury accommodation Greece, Platis Gialos booking"
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

      {/* Elena Philippou Host Section */}
      <section className="py-20 bg-gradient-to-br from-sand-light to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-villa-olive mb-4">Meet Your Host</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know Elena Philippou, your host at Villa Olivia Clara
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-villa-stone shadow-elegant overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Elena's Photo - Smaller, Minimal */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-villa-olive-light shadow-soft hover:shadow-elegant transition-all duration-300">
                        <ImageZoom
                          src={elenaProfile}
                          alt="Elena Philippou - Your Host at Villa Olivia Clara"
                          className="w-full h-full object-cover cursor-zoom-in"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-villa-olive rounded-full flex items-center justify-center shadow-soft">
                        <Heart className="text-white" size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Elena's Info */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-villa-olive mb-2">Elena Philippou</h3>
                      <p className="text-lg text-muted-foreground mb-2">Your Host at Villa Olivia Clara</p>
                      <p className="text-villa-olive font-semibold">Sifnos, Greece</p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Mail className="text-villa-olive" size={16} />
                        <a 
                          href="mailto:elena@villaoliviaclara.com"
                          className="text-villa-olive hover:text-villa-olive-dark transition-colors text-sm"
                        >
                          elena@villaoliviaclara.com
                        </a>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Phone className="text-villa-olive" size={16} />
                        <a 
                          href="tel:+306971919382"
                          className="text-villa-olive hover:text-villa-olive-dark transition-colors text-sm"
                        >
                          +30 697 1919 382
                        </a>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <MapPin className="text-villa-olive" size={16} />
                        <span className="text-muted-foreground text-sm">Platis Gialos, Sifnos, Greece</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Welcome Message */}
                <div className="mt-8 pt-6 border-t border-villa-stone">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-villa-olive mb-4 text-center md:text-left">
                      Welcome to Sifnos!
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                      I am delighted to welcome you to the island that has been my family's home for generations- 
                      since the 1800s! Although I only used to spend my summers here, I have now moved in permanently. 
                      I originally built Villa Olivia Clara to be my family's summer home, so it brings me immense joy 
                      to share this special place with you.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                      The Cycladic culture, the picturesque natural beauty and the hospitable people of this island 
                      are what drew me in. Life flows slowly here on Sifnos- you can take a moment to relax and listen to the waves.
                    </p>
                    <p className="text-villa-olive font-semibold text-center md:text-left">
                      I can't wait to see you there. - Elena
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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

            {/* Contact Details */}
            <div>
              <Card className="border-villa-stone shadow-soft mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-villa-olive mb-6">Contact Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-villa-olive">Villa Olivia Clara</h3>
                      <p className="text-muted-foreground">
                        Platis Gialos, Sifnos<br />
                        Cyclades, Greece
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-villa-olive">Email:</h3>
                      <a 
                        href="mailto:elena@villaoliviaclara.com"
                        className="text-villa-olive hover:text-villa-olive-dark transition-colors"
                      >
                        elena@villaoliviaclara.com
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-villa-olive">Phone:</h3>
                      <a 
                        href="tel:+306971919382"
                        className="text-villa-olive hover:text-villa-olive-dark transition-colors"
                      >
                        +30 697 191 9382
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-villa-olive">Hosted by Elena</h3>
                      <p className="text-muted-foreground">
                        As locals of Sifnos, we are here to provide you with an authentic and seamless experience. 
                        We look forward to welcoming you to our home.
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