import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Sifnos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-villa-olive">
            Sifnos Island Travel Guide
          </h1>
          <p className="text-xl text-muted-foreground">
            Welcome to Sifnos! Nestled in the heart of the Cyclades, Sifnos is a treasure trove 
            of authentic Greek experiences waiting to be discovered.
          </p>
        </div>
      </section>

      {/* Essential Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            Essential Sifnos Travel Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-villa-olive mb-4">Getting to Sifnos</h3>
              <p className="text-muted-foreground">
                Sifnos is accessible by ferry from Piraeus port in Athens, with daily connections 
                in summer. The journey takes 2.5 to 5 hours. There is no airport on the island.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-villa-olive mb-4">Best Time to Visit</h3>
              <p className="text-muted-foreground">
                Visit from May to October. For a more peaceful experience with pleasant weather 
                and warm seas, consider June or September. July and August are the busiest months.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-villa-olive mb-4">Getting Around</h3>
              <p className="text-muted-foreground">
                The local bus network connects all major villages and beaches. We recommend renting 
                a car, scooter, or ATV to explore the island at your own pace.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-villa-olive mb-4">Beaches</h3>
              <p className="text-muted-foreground">
                Sifnos boasts a variety of beautiful beaches, from organized sandy shores like 
                Platis Gialos to secluded coves. There's a perfect spot for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-villa-olive mb-4">Cuisine</h3>
              <p className="text-muted-foreground">
                Sifnos is the gastronomic capital of the Cyclades. Don't miss local specialties 
                like revithada (chickpea soup) and mastelo (lamb cooked in red wine).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-villa-olive mb-4">Cultural Highlights</h3>
              <p className="text-muted-foreground">
                Discover over 200 blue-domed churches, visit the Archaeological Museum in Kastro, 
                and experience traditional music and dance at a summer festival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Villages Section */}
      <section className="py-20 bg-villa-olive-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            Charming Villages of Sifnos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-4">Apollonia</h3>
                <p className="text-muted-foreground">
                  The capital and main hub of Sifnos, Apollonia is a charming village with narrow alleys, 
                  white Cycladic houses, and a vibrant nightlife.
                </p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-4">Kastro</h3>
                <p className="text-muted-foreground">
                  A medieval settlement built on top of ancient Sifnos, Kastro features well-preserved 
                  Venetian architecture and breathtaking views of the Aegean Sea.
                </p>
              </CardContent>
            </Card>
            <Card className="border-villa-stone shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-villa-olive mb-4">Artemonas</h3>
                <p className="text-muted-foreground">
                  Known for its neoclassical mansions and traditional architecture, Artemonas is one 
                  of the most elegant villages on the island.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Sifnos?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Begin your Sifnos adventure from the perfect home base. Villa Olivia Clara in Platis Gialos 
            is ideally located for exploring all the wonders the island has to offer.
          </p>
          <Button asChild size="lg" variant="villa-outline">
            <Link to="/contact">Book Your Stay at Villa Olivia Clara →</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sifnos;