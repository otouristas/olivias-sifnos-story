import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyBookingBar from '@/components/StickyBookingBar';
import { Calendar, User, Clock, ArrowLeft, Check, X, Home, Users, Utensils, Car } from 'lucide-react';

// Using existing images
import villaImage from '@/assets/Sifnos/villages/apollonia.webp';
import poolImage from '@/assets/Sifnos/Beaches/vathi.webp';

const VillaVsHotel = () => {
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

      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-villa-olive transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/blog" className="hover:text-villa-olive transition-colors">Blog</Link></li>
            <li>/</li>
            <li className="text-villa-olive font-medium">Villa vs Hotel</li>
          </ol>
        </nav>

        {/* Back to Blog */}
        <div className="mb-8">
          <Button asChild variant="villa-ghost" size="sm">
            <Link to="/blog">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12" id="main-content">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="bg-villa-olive text-white px-3 py-1 rounded-full font-medium">
              Villa Experience
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-villa-olive mb-6 leading-tight">
            Luxury Villa vs Hotel in Sifnos: Why Villa Olivia Clara Offers the Perfect Greek Island Experience
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Planning your Sifnos getaway? Discover the advantages of staying in a private luxury villa versus a hotel, and why Villa Olivia Clara provides the authentic Greek island experience you're looking for.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Elena Papadakis</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2024-02-10">February 10, 2024</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>6 min read</span>
            </div>
          </div>

          <img 
            src={villaImage} 
            alt="Villa Olivia Clara exterior showcasing luxury private accommodation in Sifnos"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-elegant mb-8"
          />
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              When planning your dream vacation to Sifnos, one of the most important decisions you'll make is where to stay. While hotels offer convenience and standardized services, a luxury private villa like Villa Olivia Clara provides a completely different level of experience that transforms your vacation from a simple getaway to an authentic Greek island lifestyle immersion.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              As hosts who have welcomed hundreds of guests over the years, we've seen firsthand how staying in a private villa enhances the overall vacation experience. Let's explore the key differences and why Villa Olivia Clara might be the perfect choice for your Sifnos adventure.
            </p>
          </div>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-8 text-center">Villa vs Hotel: At-a-Glance Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-villa-stone rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-villa-olive text-white">
                    <th className="border border-villa-stone p-4 text-left">Feature</th>
                    <th className="border border-villa-stone p-4 text-center">Villa Olivia Clara</th>
                    <th className="border border-villa-stone p-4 text-center">Hotel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-sand-light/30">
                    <td className="border border-villa-stone p-4 font-medium">Privacy</td>
                    <td className="border border-villa-stone p-4 text-center">
                      <Check className="text-green-600 mx-auto" size={20} />
                      <div className="text-sm text-muted-foreground mt-1">Complete privacy</div>
                    </td>
                    <td className="border border-villa-stone p-4 text-center">
                      <X className="text-red-500 mx-auto" size={20} />
                      <div className="text-sm text-muted-foreground mt-1">Shared spaces</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-villa-stone p-4 font-medium">Space</td>
                    <td className="border border-villa-stone p-4 text-center">
                      <Check className="text-green-600 mx-auto" size={20} />
                      <div className="text-sm text-muted-foreground mt-1">250m² villa</div>
                    </td>
                    <td className="border border-villa-stone p-4 text-center">
                      <X className="text-red-500 mx-auto" size={20} />
                      <div className="text-sm text-muted-foreground mt-1">Standard room</div>
                    </td>
                  </tr>
                  <tr className="bg-sand-light/30">
                    <td className="border border-villa-stone p-4 font-medium">Kitchen Access</td>
                    <td className="border border-villa-stone p-4 text-center">
                      <Check className="text-green-600 mx-auto" size={20} />
                      <div className="text-sm text-muted-foreground mt-1">Full luxury kitchen</div>
                    </td>
                    <td className="border border-villa-stone p-4 text-center">
                      <X className="text-red-500 mx-auto" size={20} />
                      <div className="text-sm text-muted-foreground mt-1">Restaurant only</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-villa-stone p-4 font-medium">Parking</td>
                    <td className="border border-villa-stone p-4 text-center">
                      <Check className="text-green-600 mx-auto" size={20} />
                      <div className="text-sm text-muted-foreground mt-1">Free for 5 cars</div>
                    </td>
                    <td className="border border-villa-stone p-4 text-center">
                      <X className="text-red-500 mx-auto" size={20} />
                      <div className="text-sm text-muted-foreground mt-1">Limited/paid</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Advantages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-8">Why Choose Villa Olivia Clara Over a Hotel</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <Home className="text-villa-olive mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Your Own Private Paradise</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Imagine having an entire luxury villa to yourself—no crowded pools, no noise from neighboring rooms, no waiting for elevators. Villa Olivia Clara offers you complete privacy and freedom to enjoy your vacation on your own terms.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Private 12m x 5m swimming pool</li>
                    <li>• Exclusive use of all facilities</li>
                    <li>• No crowds or queues</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <Users className="text-villa-olive mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Perfect for Groups & Families</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Hotels charge per room, which can become expensive for families or groups. Our villa accommodates up to 8 guests in luxury, often providing better value than multiple hotel rooms.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 4 bedrooms with sea views</li>
                    <li>• Multiple living spaces</li>
                    <li>• Cost-effective for groups</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <Utensils className="text-villa-olive mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Culinary Freedom</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Explore Sifnos' famous food culture by cooking with local ingredients in your own luxury kitchen, or dine al fresco with breathtaking views—something impossible in a hotel setting.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fully equipped modern kitchen</li>
                    <li>• BBQ and outdoor dining areas</li>
                    <li>• Wine cooler and bar setup</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <Car className="text-villa-olive mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Complete Convenience</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    No need to worry about parking fees or availability. Our villa includes free parking for up to 5 vehicles, making island exploration effortless for your entire group.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Free private parking</li>
                    <li>• Easy beach and village access</li>
                    <li>• No resort restrictions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Visual Showcase */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-8">See the Villa Olivia Clara Difference</h2>
            
            <div className="bg-sand-light p-8 rounded-lg">
              <img 
                src={poolImage} 
                alt="Private pool area at Villa Olivia Clara with panoramic sea views"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-elegant mb-6"
              />
              <h3 className="text-2xl font-semibold text-villa-olive mb-4">Your Private Pool Paradise</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While hotel pools are often crowded and have restricted hours, your private pool at Villa Olivia Clara is available 24/7. Enjoy morning swims with sunrise views, afternoon relaxation with complete privacy, and romantic evening dips under the stars.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-villa-olive mb-2">Hotel Pool Experience:</h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Crowded during peak hours</li>
                    <li>• Limited operating hours</li>
                    <li>• No privacy for relaxation</li>
                    <li>• Strict pool rules and policies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-villa-olive mb-2">Villa Pool Experience:</h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Complete privacy and exclusivity</li>
                    <li>• Available 24/7 at your convenience</li>
                    <li>• Poolside bar and dining area</li>
                    <li>• Panoramic views of Sifnos coastline</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Personalized Service */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Personal Touch vs. Standardized Service</h2>
            
            <div className="bg-gradient-to-r from-villa-olive-light to-sand p-8 rounded-lg">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Hotels provide standardized service that treats every guest the same. At Villa Olivia Clara, Elena and her family offer personalized hospitality that adapts to your unique needs and preferences. As locals born and raised in Sifnos, we provide insider knowledge and recommendations that no hotel concierge can match.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-villa-olive mb-3">Our Personalized Services:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Pre-arrival grocery shopping</li>
                    <li>• Local restaurant reservations</li>
                    <li>• Customized island tour recommendations</li>
                    <li>• Private chef arrangements</li>
                    <li>• Airport/port transfer coordination</li>
                    <li>• Child care services upon request</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-villa-olive mb-3">Local Expertise:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Hidden beaches only locals know</li>
                    <li>• Best times to visit popular sites</li>
                    <li>• Traditional festivals and events</li>
                    <li>• Authentic dining experiences</li>
                    <li>• Cultural insights and history</li>
                    <li>• Weather and seasonal advice</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">The True Value of Villa Living</h2>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              When you calculate the cost of multiple hotel rooms, parking fees, restaurant meals for every meal, and limited amenities, Villa Olivia Clara often provides superior value. But beyond the financial aspect, the value lies in the experience—the freedom, privacy, and authentic connection to Sifnos that simply cannot be replicated in a hotel environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">Financial Value</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Cost-effective for 4+ guests</li>
                    <li>• Save on restaurant meals</li>
                    <li>• No parking fees</li>
                    <li>• No resort fees or hidden costs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">Experience Value</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Authentic local living</li>
                    <li>• Complete privacy and freedom</li>
                    <li>• Personalized service</li>
                    <li>• Memorable unique experience</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">Lifestyle Value</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Live like a local</li>
                    <li>• Flexible schedule</li>
                    <li>• Group bonding opportunities</li>
                    <li>• Create lasting memories</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Author Bio */}
        <div className="border-t border-villa-stone pt-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center">
              <User size={24} className="text-villa-olive" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-2">Elena Papadakis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Elena has been hosting guests at Villa Olivia Clara for over 10 years. Her passion for hospitality and deep love for Sifnos ensures that every guest experiences the authentic charm and beauty of the island through personalized service and local expertise.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-hero text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Experience Villa Olivia Clara</h3>
          <p className="mb-6 text-white/90">
            Ready to experience the difference of private villa luxury in Sifnos? Book your stay and discover why our guests choose us over hotels, time and time again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="villa-outline">
              <Link to="/contact">Book Your Villa Stay</Link>
            </Button>
            <Button asChild size="lg" variant="villa-ghost">
              <Link to="/villa">Take the Villa Tour</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
      <StickyBookingBar />
    </div>
  );
};

export default VillaVsHotel;