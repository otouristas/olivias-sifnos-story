import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Villa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-villa-olive">
            Tour of Our Villa In Sifnos, Greece
          </h1>
          <p className="text-xl text-muted-foreground">
            We are delighted to give you a guided tour of our villa in Sifnos, Greece. 
            Explore our outdoor spaces, bedrooms, bathrooms, and living areas.
          </p>
        </div>
      </section>

      {/* Pool & Outdoor Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-villa-olive">
            The Outdoors: Pool, Garden & Terrace
          </h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-4 text-villa-olive">Pool Cabana & Bar</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Enjoy the spectacular view of Sifnos from our private pool cabana and bar, 
              the perfect place to relax day and night.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-villa-olive mb-2">Pool Features</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 12m x 5m pool (3m depth)</li>
                  <li>• Shaded pool-side cabana</li>
                  <li>• Sunbeds & sun loungers</li>
                  <li>• Bar and dining area</li>
                  <li>• Wine cooler & mini fridge</li>
                  <li>• Dedicated pool bathroom</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-villa-olive mb-2">Garden Features</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Large stone terrace</li>
                  <li>• Stone fence garden</li>
                  <li>• Outdoor lounge and dining areas</li>
                  <li>• Parking space for 5 cars</li>
                  <li>• Indigenous plants & herbs</li>
                  <li>• Stunning views of the sea</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-villa-olive-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-villa-olive">
            Villa Amenities
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Experience our five-star service and luxury amenities, designed to make your stay perfect.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4">Bedroom & Laundry</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Washing machine & Drying rack</li>
                <li>• Hangers & Iron</li>
                <li>• Closet space</li>
                <li>• Changing table</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4">Kitchen</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Dishes and silverware</li>
                <li>• Full set of glasses</li>
                <li>• Dishwasher</li>
                <li>• Refrigerator & freezer</li>
                <li>• Microwave, oven, stove</li>
                <li>• Premium automatic coffee machine</li>
                <li>• Outdoor barbecue</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4">Entertainment</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Smart 65″ HDTV</li>
                <li>• Books and reading material</li>
                <li>• Board games, toys</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4">Safety</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Fire extinguisher</li>
                <li>• Fireplace guards</li>
                <li>• First aid kit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upon Request Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-villa-olive">Upon Request</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We can arrange a variety of premium services to enhance your stay. Just ask us!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
            <div>Transfer to / from port</div>
            <div>Private chef</div>
            <div>Private boat tour</div>
            <div>Private island transfer</div>
            <div>Local musicians</div>
            <div>Babysitter</div>
            <div>Event hosting</div>
            <div>...and more!</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for an Unforgettable Vacation?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            From planning your trip to Sifnos, to leaving with the greatest memories, 
            we'll be with you every step of the way.
          </p>
          <Button asChild size="lg" variant="villa-outline">
            <Link to="/contact">Let's Book Your Stay →</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Villa;