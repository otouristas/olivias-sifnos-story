import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Reviews = () => {
  const reviews = [
    {
      rating: 5,
      author: "Alexis",
      text: "Wonderful stay at the Villa Olivia Clara! The house has a perfect location near Platis Gialos, walking distance, and an amazing view on the bay. The house is clean, big and has a lot of accommodation. Elena made our stay just perfect when we asked for baby equipment and got everything ready for us. Elena is such a great host! It is the 2nd time in 3 years the we book the villa and we should do it again soon for sure. No hesitation: the best villa in Sifnos."
    },
    {
      rating: 5,
      author: "Li-Chuen",
      text: "We are family of 5, with three young adult/adolescent children. We have literally had the most magical holiday at Elena's villa. The photos just don't do justice to this incredibly stunning home. The view is breath-taking and it's just 5 min walk to downtown Platis Gialos, where you will find a great beach and many restaurants. Elena's villa is a home, with nothing wanting at all. I actually cannot believe we have had the privilege to stay at this exceptional place. Please do not hesitate to book!"
    },
    {
      rating: 5,
      author: "Savvas",
      text: "We were over the moon with our experience at Villa Olivia Clara in Sifnos Greece. The photos don't even do it justice. When we arrived, we were so surprised to see that it looked even better than the images. There's a high rate sense of style throughout, beautiful design, every corner is a moment. And on top of it all, an incredible view as well! It truly elevated our Sifnos experience. Highly recommended."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-villa-olive">
            What Our Guests Are Saying
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            We are proud to have hosted guests from all over the world for over 10 years. 
            Their wonderful experiences are the best testament to the magic of Villa Olivia Clara.
          </p>
          <p className="text-lg font-semibold text-villa-olive">
            Average rating of 5 stars from more than 45 reviews.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-villa-stone shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-500 text-xl mr-4">
                      {"★".repeat(review.rating)}
                    </div>
                    <h3 className="text-xl font-semibold text-villa-olive">
                      {review.author}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let Us Host Your Unforgettable Vacation
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join our family of happy guests and create memories that will last a lifetime.
          </p>
          <Button asChild size="lg" variant="villa-outline">
            <Link to="/contact">Book Your Stay →</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;