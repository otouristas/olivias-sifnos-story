import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyBookingBar from '@/components/StickyBookingBar';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

// Mock images using existing assets
import blogImage1 from '@/assets/Sifnos/Beaches/plats-gialos.webp';
import blogImage2 from '@/assets/Sifnos/villages/apollonia.webp';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: 'ultimate-guide-sifnos-greece-luxury-villa-vacation',
      title: 'The Ultimate Guide to Sifnos, Greece: Your Perfect Luxury Villa Vacation',
      excerpt: 'Discover why Sifnos is the Greek island paradise you\'ve been searching for. From pristine beaches to authentic cuisine, learn everything you need to know for an unforgettable luxury villa stay.',
      image: blogImage1,
      author: 'Elena Philippou',
      publishDate: '2024-02-15',
      readTime: '8 min read',
      category: 'Travel Guide',
      featured: true
    },
    {
      id: 2,
      slug: 'luxury-villa-vs-hotel-sifnos-greece-complete-comparison',
      title: 'Luxury Villa vs Hotel in Sifnos: Why Villa Olivia Clara Offers the Perfect Greek Island Experience',
      excerpt: 'Planning your Sifnos getaway? Discover the advantages of staying in a private luxury villa versus a hotel, and why Villa Olivia Clara provides the authentic Greek island experience you\'re looking for.',
      image: blogImage2,
      author: 'Elena Philippou',
      publishDate: '2024-02-10',
      readTime: '6 min read',
      category: 'Villa Experience',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50"
      >
        Skip to content
      </a>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Villa Olivia Clara Blog
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Your guide to the perfect Sifnos vacation experience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map(post => (
            <Card key={post.id} className="mb-12 border-villa-stone shadow-elegant overflow-hidden animate-fade-in">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-villa-olive text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="bg-villa-olive-light text-villa-olive px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-villa-olive mb-4 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button asChild variant="villa" size="lg">
                    <Link to={`/blog/${post.slug}`}>
                      Read Full Article <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(post => !post.featured).map(post => (
              <Card key={post.id} className="border-villa-stone shadow-soft overflow-hidden hover:shadow-elegant transition-shadow duration-200 animate-fade-in">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-villa-olive text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-villa-olive mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button asChild variant="villa-outline" size="sm" className="w-full">
                    <Link to={`/blog/${post.slug}`}>
                      Read More <ArrowRight size={14} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-villa-olive">
            Ready to Experience Villa Olivia Clara?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your luxury villa vacation in Sifnos and create memories that will last a lifetime.
          </p>
          <Button asChild variant="villa" size="lg">
            <Link to="/contact">Book Your Stay</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <StickyBookingBar />
    </div>
  );
};

export default Blog;