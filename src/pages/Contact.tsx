import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
    const mailtoLink = `mailto:reservations@villaoliviaclara.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
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
                        href="mailto:reservations@villaoliviaclara.com"
                        className="text-villa-olive hover:text-villa-olive-dark transition-colors"
                      >
                        reservations@villaoliviaclara.com
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-villa-olive">Hosted by Elena & George</h3>
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
    </div>
  );
};

export default Contact;