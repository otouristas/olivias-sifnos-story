import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/villa-hero.jpg';
import poolView from '@/assets/pool-view.jpg';
import villaLinens from '@/assets/villa-linens.jpg';
import elenaHost from '@/assets/elena-host.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Elegant Villa in Sifnos, Greece
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Villa Olivia Clara is an elegant, 250m² villa in Platis Gialos, Sifnos, Greece. 
            Perfect for groups or families up to 8 people looking for luxurious accommodations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="villa">
              <Link to="/villa">Take the Tour</Link>
            </Button>
            <Button asChild size="lg" variant="villa-outline">
              <Link to="/contact">Book Now →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-villa-olive mb-2">Capacity</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>8 guests</li>
                <li>4 bedrooms (2 queen, 4 single, 1 baby cot)</li>
                <li>4.5 bathrooms</li>
                <li>Parking for 5 cars</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-villa-olive mb-2">Location</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Platis Gialos, Sifnos</li>
                <li>7 mins walk / 2 mins drive to beach</li>
                <li>15 mins to island center</li>
                <li>25 mins to port</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-villa-olive mb-2">Amenities</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Large pool & lounge area with bar</li>
                <li>Garden & outdoor dining</li>
                <li>Full kitchen, BBQ</li>
                <li>200+ Mbps WiFi</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-villa-olive mb-2">Services</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Housekeeping (2x per week)</li>
                <li>Childcare (on request)</li>
                <li>Private chef (on request)</li>
                <li>Available for events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Difference Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            The Villa Olivia Clara Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <img 
                  src={poolView} 
                  alt="Pool view" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-villa-olive mb-2">Perfect Location</h3>
                <p className="text-muted-foreground">
                  Anywhere you stand, Villa Olivia Clara offers you a breathtaking view of Sifnos 
                  and just a 7 minute walk to the beach!
                </p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <img 
                  src={villaLinens} 
                  alt="Villa linens" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-villa-olive mb-2">Real Home, Luxury Amenities</h3>
                <p className="text-muted-foreground">
                  We have carefully picked every part of Villa Olivia Clara to create a luxurious 
                  experience that will still make you feel like home.
                </p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <img 
                  src={elenaHost} 
                  alt="Elena, your host" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-villa-olive mb-2">Hosted by Locals</h3>
                <p className="text-muted-foreground">
                  Villa Olivia Clara is a family home and a family business. Being a local of the island, 
                  Elena is the perfect host for an authentic experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sifnos Section */}
      <section className="py-20 bg-villa-olive-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-villa-olive">
            Explore the Beauty of Sifnos with Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our villa is located in Sifnos, Greece—a Greek island that is popular among those who 
            appreciate good food and great sea views. Sifnos has been our family's home for centuries 
            and we're excited to show you around.
          </p>
          <Button asChild variant="villa">
            <Link to="/sifnos">Discover Sifnos</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-villa-olive mb-4">What Our Guests Are Saying</h2>
            <p className="text-lg text-muted-foreground">Average rating of 5 stars from more than 45 reviews in the past 10 years.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-muted-foreground mb-4">
                  "Wonderful stay at the Villa Olivia Clara! The house has a perfect location near Platis Gialos, 
                  walking distance, and an amazing view on the bay. No hesitation: the best villa in Sifnos."
                </p>
                <p className="font-semibold text-villa-olive">— Alexis</p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-muted-foreground mb-4">
                  "We have literally had the most magical holiday at Elena's villa. The photos just don't do justice 
                  to this incredibly stunning home. Please do not hesitate to book!"
                </p>
                <p className="font-semibold text-villa-olive">— Li-Chuen</p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-muted-foreground mb-4">
                  "We were over the moon with our experience at Villa Olivia Clara. The photos don't even do it justice. 
                  Highly recommended."
                </p>
                <p className="font-semibold text-villa-olive">— Savvas</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="villa-outline">
              <Link to="/reviews">Read more reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            We can make your next vacation unforgettable.
          </h2>
          <p className="text-xl mb-8 text-white/90">
            From planning your trip to Sifnos, to leaving with the greatest memories, we'll be with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-white/80">Years of Hosting Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5/5</div>
              <div className="text-white/80">Review Average (40+ reviews)</div>
            </div>
          </div>
          <Button asChild size="lg" variant="villa-outline">
            <Link to="/contact">Let's Book Your Stay →</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
