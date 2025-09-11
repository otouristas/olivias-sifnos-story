import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { ArrowLeft, Ship, MapPin, Clock, Users, Camera, Waves, Anchor, Compass } from 'lucide-react';

const Activity = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sifnos Boat Tours | Private Island Hopping | Poliegos, Kimolos, Milos"
        description="Experience private boat tours from Sifnos to Poliegos, Kimolos, and Milos. Discover hidden coves, crystal waters, and uninhabited islands. Book your Cyclades island hopping adventure today!"
        keywords="Sifnos boat tours, island hopping Cyclades, Poliegos boat tour, Kimolos Milos cruise, private boat Sifnos, Greek island sailing, Cyclades boat trips"
        ogImage="https://villaoliviaclara.com/src/assets/villa-gallery/Villa-Olivia-Clara_043_aerial-view-of-the-villa-wide.jpg"
        canonicalUrl="https://villaoliviaclara.com/sifnos/boat-tours"
      />
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
            <li><Link to="/sifnos" className="hover:text-villa-olive transition-colors">Discover Sifnos</Link></li>
            <li>/</li>
            <li className="text-villa-olive font-medium">Boat Tours</li>
          </ol>
        </nav>

        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="villa-ghost" size="sm">
            <Link to="/sifnos">
              <ArrowLeft size={16} /> Back to Discover Sifnos
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12" id="main-content">
          <div className="flex items-center gap-3 mb-6">
            <Ship className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">Boat Tour From Sifnos</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4">
            Explore the Greek Islands By Boat
          </p>
          <p className="text-lg text-muted-foreground">
            Are you ready for the most magical boat tour around Sifnos and the Cyclades?
          </p>
        </header>

        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-villa-olive-light to-sand-light p-8 rounded-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              One of our favorite - if not our absolute favorite - activities to do when in Sifnos is to take a boat tour around Sifnos and the neighboring islands, Poliegos, Kimolos, and Milos. Each of the islands has its own personality and its own special points of interest. We would describe the experience of taking a private cruise to small Greek islands a "once-in-a-lifetime" experience. However, we do also recommend doing it more than once if you can. We have; and here's what it's like.
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Choosing Destination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Choosing Your Boat Tour Destination</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We'll be honest, choosing the destination is the easiest part. They're all worth seeing and you'll have a good time regardless of what you choose - so don't worry! Most boat tour companies starting from Sifnos have a few different choices depending on how much time (and money) you have at your disposal and how many different destinations you want to see. A few combinations of these islands are possible, with a very popular one being Poliegos and Kimolos together.
            </p>
          </section>

          {/* Island Destinations */}
          <div className="space-y-12 mb-12">
            {/* Poliegos */}
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center">
                      <Waves className="text-villa-olive" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-villa-olive mb-4">Poliegos</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      One of our favorites as taking a boat tour to Poliegos is like discovering a lost civilization. We are not exaggerating! Before being named a Natura 2000 protected area, Poliegos was a mining site. It has some staggeringly beautiful rock formations, hidden caverns and caves, stunning blue waters and goats!
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">Highlights</h4>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Natura 2000 protected area</li>
                          <li>• Stunning rock formations</li>
                          <li>• Hidden caverns and caves</li>
                          <li>• Crystal clear blue waters</li>
                          <li>• Wild goats on beaches</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">Trip Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">4-hour trip</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Camera className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Perfect for snorkeling</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Anchor className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Morning or afternoon</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>Fun Fact:</strong> Poliegos literally means "lots of goats" and you're quite likely to find some goats during your boat tour as they tend to hang out on the beaches. They are the only 'inhabitants' of the island!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kimolos */}
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center">
                      <MapPin className="text-villa-olive" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-villa-olive mb-4">Kimolos</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      After you've been to Poliegos, it's only reasonable to give Kimolos a visit. You will see it right across the northwestern coast of Poliegos, towards the end of your visit. Kimolos is the perfect place for the end of your boat tour as it features a few wonderful restaurants and fantastic spots. It's the perfect place to relax after a day of swimming around the untamed beauty of Poliegos.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">What to See</h4>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Psathi (the port)</li>
                          <li>• Chorio (central village)</li>
                          <li>• Wonderful restaurants</li>
                          <li>• Chalk rock formations</li>
                          <li>• Relaxing spots</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">Trip Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">6-hour trip (with Poliegos)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Perfect for families</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Compass className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Easy walking distance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <p className="text-green-800 text-sm">
                        <strong>Island Name:</strong> Kimolos literally means "The Island of Chalk", referring to the perlite and chalk rock formations that make up the island.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Milos */}
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center">
                      <Ship className="text-villa-olive" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-villa-olive mb-4">Milos</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you're up for a full-day ride, Milos may be the destination to pick. Milos is quite a larger island than Sifnos and features its own airport. The west part of the island was also named a Natura 2000 protected area and it will be a big focus of the trip. If you're taking the 8-hour boat tour from Sifnos to Milos, you should expect to make it the entire way around the island.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">Highlights</h4>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Limestone coves in the west</li>
                          <li>• Giant sandy slope for sand surfing</li>
                          <li>• Volcanic rock formations</li>
                          <li>• Picture-worthy spots</li>
                          <li>• Secret scenic locations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">Trip Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">8-hour full-day trip</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Camera className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Photography paradise</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Anchor className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Complete island tour</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                      <p className="text-amber-800 text-sm">
                        <strong>Adventure Alert:</strong> A highlight of this trip are the limestone coves in the west part of the island and a giant sandy slope where you can (at your own risk!) sand surf down to the water.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sifnos */}
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center">
                      <Waves className="text-villa-olive" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-villa-olive mb-4">Sifnos</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you're not looking to go too far from home, Sifnos is always an option for a boat tour. The south of Sifnos features some of its most popular swimming spots. This includes the Chryssopigi Monastery and the beaches around it, Faros and Platis Gialos. Our home, Villa Olivia Clara is just down the road from there.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">Must-See Spots</h4>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Chryssopigi Monastery</li>
                          <li>• Faros beach</li>
                          <li>• Platis Gialos beach</li>
                          <li>• Fykiada beach (boat only)</li>
                          <li>• Kitriani island</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-villa-olive mb-2">Special Access</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Anchor className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Boat-only locations</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Remote beaches</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Compass className="text-villa-olive" size={16} />
                            <span className="text-muted-foreground">Private island access</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-villa-olive-light p-4 rounded-lg">
                      <p className="text-villa-olive text-sm">
                        <strong>Exclusive Access:</strong> The boat tour will take you to spots in Sifnos that you can only reach on foot or by boat, like Fykiada beach - one of the most remote spots on the island. You'll also get to visit the island of Kitriani, the small uninhabited island across from Platis Gialos bay.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Booking Your Boat Tour on Sifnos</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Once you've decided your boat tour destination, you can start the booking process by contacting the Sifnos boat tour company of your choice.
            </p>
            
            <Card className="border-villa-olive shadow-soft">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-villa-olive mb-4">Our Recommended Partner</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We highly recommend partnering with <strong>A La Mer</strong>. Their boats are all new and their service and energy are unbeatable.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button asChild variant="villa" size="lg">
                      <a href="https://www.alamer.gr" target="_blank" rel="noopener noreferrer">
                        Book with A La Mer
                      </a>
                    </Button>
                    <Button asChild variant="villa-outline" size="lg">
                      <Link to="/contact">
                        Get More Guidance
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact CTA */}
          <section className="mb-8 bg-sand-light p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Need Help Planning Your Boat Tour?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              If you're staying with us at Villa Olivia Clara, don't hesitate to reach out if you need more guidance on choosing your destination or any advice on what to take on your boat tour from or around Sifnos.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="villa" size="lg">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="villa-outline" size="lg">
                <a href="mailto:elena@villaoliviaclara.com">
                  Email Elena
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

export default Activity;
