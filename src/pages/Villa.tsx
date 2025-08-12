import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Waves, 
  TreePine, 
  Bed, 
  Bath, 
  Utensils, 
  Tv, 
  Wifi, 
  Car, 
  Shield, 
  Shirt, 
  ChefHat, 
  Music, 
  Baby, 
  Calendar,
  Coffee,
  Flame,
  Refrigerator,
  Microwave,
  Dishwasher,
  Wine,
  UtensilsCrossed,
  BookOpen,
  Gamepad2,
  Plane,
  Users,
  MapPin,
  Phone
} from 'lucide-react';

// Mock images (placeholders) — feel free to replace with real villa photos
import apollonia from '@/assets/Sifnos/villages/apollonia.webp';
import kastro from '@/assets/Sifnos/villages/kastro.webp';
import artemonas from '@/assets/Sifnos/villages/artemonas.webp';
import exampela from '@/assets/Sifnos/villages/exampela.webp';
import katavati from '@/assets/Sifnos/villages/katavati.webp';
import katoPetali from '@/assets/Sifnos/villages/kato-petali.webp';
import panoPetali from '@/assets/Sifnos/villages/panopetali.webp';
import troullaki from '@/assets/Sifnos/villages/troullaki.webp';

import platsGialos from '@/assets/Sifnos/Beaches/plats-gialos.webp';
import kamares from '@/assets/Sifnos/Beaches/kamares.webp';
import vathi from '@/assets/Sifnos/Beaches/vathi.webp';
import faros from '@/assets/Sifnos/Beaches/faros.webp';
import heronissos from '@/assets/Sifnos/Beaches/heronissos.webp';
import chrysopigi from '@/assets/Sifnos/Beaches/chrysopigi.webp';
import vroulidia from '@/assets/Sifnos/Beaches/vroulidia.webp';
import fykiada from '@/assets/Sifnos/Beaches/fykiada.webp';

const SectionNav = () => (
  <nav className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-villa-stone shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="flex flex-wrap items-center gap-6 py-4 text-sm font-medium">
        <li><a href="#outdoors" className="text-foreground hover:text-villa-olive transition-colors flex items-center gap-2"><Waves size={16} />Outdoors</a></li>
        <li><a href="#bedrooms" className="text-foreground hover:text-villa-olive transition-colors flex items-center gap-2"><Bed size={16} />Bedrooms</a></li>
        <li><a href="#bathrooms" className="text-foreground hover:text-villa-olive transition-colors flex items-center gap-2"><Bath size={16} />Bathrooms</a></li>
        <li><a href="#living" className="text-foreground hover:text-villa-olive transition-colors flex items-center gap-2"><Utensils size={16} />Living Spaces</a></li>
        <li><a href="#amenities" className="text-foreground hover:text-villa-olive transition-colors flex items-center gap-2"><Wifi size={16} />Amenities</a></li>
      </ul>
    </div>
  </nav>
);

const FeatureList = ({ title, items, icon: Icon }: { title?: string; items: string[]; icon?: any }) => (
  <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
    {title && (
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="text-villa-olive" size={24} />}
        <h4 className="text-xl font-semibold text-villa-olive">{title}</h4>
      </div>
    )}
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-villa-olive mt-2 flex-shrink-0"></div>
          <span className="text-gray-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Gallery = ({
  items,
  columns = 'md:grid-cols-3',
}: {
  items: { src: string; alt: string; caption?: string }[];
  columns?: string;
}) => (
  <div className={`grid grid-cols-1 ${columns} gap-6`}>
    {items.map((g, i) => (
      <figure key={i} className="group overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300">
        <div className="overflow-hidden">
          <img
            src={g.src}
            alt={g.alt}
            loading="lazy"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {g.caption && (
          <figcaption className="px-4 py-3 text-sm text-gray-600 bg-white">
            {g.caption}
          </figcaption>
        )}
      </figure>
    ))}
  </div>
);

const Villa = () => {
  // SEO
  useEffect(() => {
    document.title = 'Tour of Our Villa | Villa Olivia Clara, Sifnos';
    const meta = document.querySelector('meta[name="description"]');
    const content =
      'Guided tour of Villa Olivia Clara in Sifnos: pool cabana & bar, garden & terrace, bedrooms, bathrooms, living spaces, and full amenities.';
    if (meta) meta.setAttribute('content', content);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Page Header */}
      <header className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Tour of Our Villa In Sifnos, Greece
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            We are delighted to give you a guided tour of our villa in Sifnos, Greece. 
            Discover luxury, comfort, and breathtaking views in every corner.
          </p>
        </div>
      </header>

      <SectionNav />

      <main className="py-20 space-y-32">
        <section id="outdoors" className="scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Waves className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Outdoors</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the beauty of Sifnos from our stunning outdoor spaces
              </p>
            </div>

            {/* Pool Cabana & Bar */}
            <article className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-semibold text-villa-olive mb-4">Pool Cabana & Bar</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Enjoy the panoramic view of Sifnos from our luxurious pool cabana and bar area, 
                      designed for ultimate relaxation and entertainment.
                    </p>
                  </div>
                  <FeatureList
                    title="Pool Features"
                    icon={Waves}
                    items={[
                      '12m x 5m pool (3m depth)',
                      'Shaded pool-side cabana',
                      'Sunbeds & sun loungers',
                      'Bar and dining area',
                      'Wine cooler & mini fridge',
                      'Dedicated pool bathroom',
                    ]}
                  />
                </div>
                <Card className="border-0 shadow-elegant overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={platsGialos}
                      alt="The large pool at Villa Olivia Clara is surrounded by the hills of Sifnos, Greece"
                      loading="lazy"
                      className="w-full h-96 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>

              <Gallery
                items={[
                  { src: vathi, alt: 'Pool-side cabana', caption: 'Pool-side cabana with stunning views' },
                  { src: chrysopigi, alt: 'View from the pool-side cabana', caption: 'Breathtaking view from the pool-side cabana' },
                  { src: kamares, alt: 'The pool area at night', caption: 'Magical pool area illuminated at night' },
                  { src: faros, alt: 'Pool dining area at night', caption: 'Elegant pool dining area at night' },
                  { src: heronissos, alt: 'View from the pool bar', caption: 'Spectacular view from the pool bar' },
                  { src: fykiada, alt: 'At the pool during the day', caption: 'Perfect pool setting during the day' },
                  { src: vroulidia, alt: 'View from the pool lounge area', caption: 'Relaxing view from the pool lounge area' },
                  { src: apollonia, alt: 'Behind the pool bar', caption: 'Well-equipped area behind the pool bar' },
                  { src: kastro, alt: 'Detail: Our house dolphins', caption: 'Charming detail: Our signature house dolphins' },
                ]}
              />
            </article>

            {/* Garden & Terrace */}
            <article>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-semibold text-villa-olive mb-4">Garden & Terrace</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Immerse yourself in the natural beauty of Sifnos through our rich Mediterranean garden 
                      and expansive stone terraces.
                    </p>
                  </div>
                  <FeatureList
                    title="Garden Features"
                    icon={TreePine}
                    items={[
                      'Large stone terrace with panoramic views',
                      'Stone fence garden with native plants',
                      'Multiple outdoor lounge and dining areas',
                      'Parking space for 5 cars',
                      'Indigenous Mediterranean plants & herbs',
                      'Stunning unobstructed views of the sea',
                    ]}
                  />
                </div>
                <Card className="border-0 shadow-elegant overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={apollonia}
                      alt="The view of Sifnos from our villa's stone terrace is unbeatable."
                      loading="lazy"
                      className="w-full h-96 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>

              <Gallery
                items={[
                  { src: artemonas, alt: 'Upper terrace at night', caption: 'Enchanting upper terrace at night' },
                  { src: exampela, alt: 'The back garden near the pool', caption: 'Lush back garden near the pool area' },
                  { src: katavati, alt: 'The villa from the garden', caption: 'Beautiful villa view from the garden' },
                  { src: panoPetali, alt: 'View from the terrace', caption: 'Spectacular panoramic view from the terrace' },
                  { src: troullaki, alt: 'Dining at the terrace', caption: 'Al fresco dining at the terrace' },
                  { src: katoPetali, alt: 'Detail: Small part of our garden', caption: 'Charming detail of our Mediterranean garden' },
                ]}
              />

              {/* Brand detail callout */}
              <Card className="border-0 shadow-elegant mt-16" style={{ backgroundColor: '#716a63' }}>
                <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <img
                    src={kamares}
                    alt="The majestic olive tree adorns our premium towels and linens"
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="text-white">
                    <h4 className="text-2xl font-semibold mb-4">Our Signature Touch</h4>
                    <p className="text-white/90 leading-relaxed">
                      The majestic olive tree, found everywhere in Greece and Sifnos, adorns our premium towels and linens, 
                      connecting you to the authentic spirit of the island.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>
        </section>

        {/* Bedrooms */}
        <section id="bedrooms" className="scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Bed className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Bedrooms</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Wake up to breathtaking views of Platis Gialos, the most popular beach in Sifnos
              </p>
            </div>

            <div className="mb-12">
              <FeatureList
                title="Bedroom Features"
                icon={Bed}
                items={[
                  '2 king beds (200 x 200cm) with premium mattresses',
                  '4 single beds (100 x 200cm) perfect for children or adults',
                  '1 baby crib (70 x 130cm) with safety features',
                  'Air conditioning in all living areas for comfort',
                  'Extra pillows and blankets for personalized comfort',
                  'Weekly linen changes with premium Egyptian cotton¹',
                ]}
              />
            </div>

            <Gallery
              items={[
                { src: apollonia, alt: 'Master bedroom', caption: 'Luxurious master bedroom with sea views' },
                { src: platsGialos, alt: 'View from the master bedroom', caption: 'Wake up to this stunning view from the master bedroom' },
                { src: artemonas, alt: 'Standard bedroom', caption: 'Comfortable standard bedroom with elegant décor' },
                { src: kastro, alt: 'View from the standard bedroom', caption: 'Beautiful view from the standard bedroom' },
                { src: exampela, alt: 'Guest master bedroom', caption: 'Spacious guest master bedroom' },
                { src: vathi, alt: 'View from the guest master bedroom', caption: 'Panoramic view from the guest master bedroom' },
                { src: panoPetali, alt: 'Terrace access from guest master bedroom', caption: 'Direct terrace access from guest master bedroom' },
                { src: katavati, alt: 'Guest standard bedroom', caption: 'Cozy guest standard bedroom' },
              ]}
            />

            <Card className="border-0 shadow-elegant mt-16" style={{ backgroundColor: '#716a63' }}>
              <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                  src={faros}
                  alt="Experience comfortable and personable service at Villa Olivia Clara in Sifnos, Greece."
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="text-white">
                  <h4 className="text-2xl font-semibold mb-4">Personalized Comfort</h4>
                  <p className="text-white/90 leading-relaxed">
                    Experience comfortable and personable service at Villa Olivia Clara in Sifnos, Greece. 
                    Every detail is carefully curated for your perfect stay.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bathrooms */}
        <section id="bathrooms" className="scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Bath className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Bathrooms</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Feel at home in the luxury of our villa's elegant and well-appointed bathrooms
              </p>
            </div>

            <div className="mb-12">
              <FeatureList
                title="Bathroom Features"
                icon={Bath}
                items={[
                  '3 full bathrooms with modern fixtures, 1 convenient WC',
                  'Unlimited hot water with efficient heating system',
                  'Premium bathroom essentials and toiletries provided',
                  'Professional hair dryer in each bathroom',
                  'Dedicated pool bathroom for convenience',
                  'Twice-weekly towel changes with luxury linens²',
                ]}
              />
            </div>

            <Gallery
              items={[
                { src: kastro, alt: 'Master bathroom (en suite)', caption: 'Elegant master bathroom (en suite)' },
                { src: apollonia, alt: 'Standard bathroom', caption: 'Well-appointed standard bathroom' },
                { src: artemonas, alt: 'Standard bathroom', caption: 'Modern standard bathroom with quality fixtures' },
                { src: exampela, alt: 'Guest master bathroom', caption: 'Spacious guest master bathroom' },
                { src: katavati, alt: 'Guest master bathroom', caption: 'Luxurious guest master bathroom' },
                { src: troullaki, alt: 'Guest standard WC', caption: 'Convenient guest standard WC' },
                { src: vathi, alt: 'Dedicated pool bathroom', caption: 'Practical dedicated pool bathroom' },
                { src: chrysopigi, alt: 'Dedicated pool bathroom', caption: 'Pool bathroom with outdoor access' },
                { src: kamares, alt: 'Detail: Pool towel', caption: 'Premium pool towels with signature design' },
              ]}
              columns="md:grid-cols-3"
            />

            <Card className="border-0 shadow-elegant mt-16" style={{ backgroundColor: '#716a63' }}>
              <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                  src={kamares}
                  alt="Fine dining at Villa Olivia Clara using Sifnos Stoneware"
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="text-white">
                  <h4 className="text-2xl font-semibold mb-4">Authentic Greek Dining</h4>
                  <p className="text-white/90 leading-relaxed">
                    Fine dining at Villa Olivia Clara using our exquisite dinner set from Sifnos Stoneware, 
                    handmade in Greece with centuries-old techniques.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Living Spaces */}
        <section id="living" className="scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Utensils className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Living Spaces</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Wine and dine like a Greek god in one of our three distinctive dining spaces
              </p>
            </div>

            <div className="mb-12">
              <FeatureList
                title="Living Space Features"
                icon={Utensils}
                items={[
                  'Elegant indoor dining area with sea views',
                  'Large outdoor dining area perfect for al fresco meals',
                  'Pool-side dining area for casual entertaining',
                  'Fully-equipped gourmet kitchen with premium appliances',
                  'Dedicated working space with high-speed internet',
                  'Spacious living room with 65" smart TV and entertainment system',
                ]}
              />
            </div>

            <Gallery
              items={[
                { src: apollonia, alt: 'Indoor dining area', caption: 'Elegant indoor dining area with panoramic views' },
                { src: troullaki, alt: 'Outdoor dining area', caption: 'Spacious outdoor dining area under the stars' },
                { src: vathi, alt: 'Pool dining area', caption: 'Casual pool dining area for relaxed meals' },
                { src: artemonas, alt: 'The living room', caption: 'Comfortable living room with modern amenities' },
                { src: kastro, alt: 'The living room sitting area', caption: 'Cozy living room sitting area' },
                { src: platsGialos, alt: 'The view from the living room', caption: 'Breathtaking view from the living room' },
                { src: exampela, alt: 'The kitchen', caption: 'Fully-equipped gourmet kitchen' },
                { src: faros, alt: 'The kitchen cooking area', caption: 'Professional kitchen cooking area' },
                { src: heronissos, alt: 'The view from the kitchen', caption: 'Inspiring view from the kitchen' },
              ]}
            />

            <Card className="border-0 shadow-elegant mt-16" style={{ backgroundColor: '#716a63' }}>
              <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                  src={vroulidia}
                  alt="Villa Olivia Clara provides one of the best views in Sifnos, Greece"
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="text-white">
                  <h4 className="text-2xl font-semibold mb-4">Unmatched Views</h4>
                  <p className="text-white/90 leading-relaxed">
                    Villa Olivia Clara provides one of the best views in Sifnos, Greece due to its excellent location 
                    and thoughtful architectural design that maximizes every vista.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Wifi className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Villa Amenities</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience our five-star service and luxury amenities designed for your ultimate comfort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-elegant" style={{ backgroundColor: '#716a63' }}>
                <CardContent className="p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Shirt className="text-white" size={28} />
                    <h3 className="text-2xl font-semibold">Bedroom & Laundry</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { icon: Shirt, text: 'Professional washing machine' },
                      { icon: Shirt, text: 'Quality hangers provided' },
                      { icon: Shirt, text: 'Iron and ironing board' },
                      { icon: Shirt, text: 'Drying rack for clothing' },
                      { icon: Shirt, text: 'Ample closet space' },
                      { icon: Baby, text: 'Baby changing table' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <item.icon size={16} className="text-white/80 flex-shrink-0" />
                        <span className="text-white/90">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant" style={{ backgroundColor: '#716a63' }}>
                <CardContent className="p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="text-white" size={28} />
                    <h3 className="text-2xl font-semibold">Safety & Security</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { icon: Shield, text: 'Fire extinguisher' },
                      { icon: Shield, text: 'Fireplace safety guards' },
                      { icon: Shield, text: 'Complete first aid kit' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <item.icon size={16} className="text-white/80 flex-shrink-0" />
                        <span className="text-white/90">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant" style={{ backgroundColor: '#716a63' }}>
                <CardContent className="p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <ChefHat className="text-white" size={28} />
                    <h3 className="text-2xl font-semibold">Gourmet Kitchen</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { icon: UtensilsCrossed, text: 'Complete dishes and silverware' },
                      { icon: Wine, text: 'Wine glasses, champagne glasses and more' },
                      { icon: Dishwasher, text: 'Professional dishwasher' },
                      { icon: Refrigerator, text: 'Large refrigerator & freezer' },
                      { icon: Microwave, text: 'Microwave, oven, stove' },
                      { icon: Coffee, text: 'Premium automatic coffee machine (50+ drinks)' },
                      { icon: Flame, text: 'Outdoor barbecue area' },
                      { icon: ChefHat, text: '…and much more' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <item.icon size={16} className="text-white/80 flex-shrink-0" />
                        <span className="text-white/90">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant" style={{ backgroundColor: '#716a63' }}>
                <CardContent className="p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Tv className="text-white" size={28} />
                    <h3 className="text-2xl font-semibold">Entertainment</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { icon: Tv, text: 'Smart 65″ HDTV with streaming' },
                      { icon: BookOpen, text: 'Books and reading material' },
                      { icon: Gamepad2, text: 'Board games and toys' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <item.icon size={16} className="text-white/80 flex-shrink-0" />
                        <span className="text-white/90">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant" style={{ backgroundColor: '#716a63' }}>
                <CardContent className="p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Phone className="text-white" size={28} />
                    <h3 className="text-2xl font-semibold">Concierge Services</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { icon: Car, text: 'Transfer to / from port' },
                      { icon: ChefHat, text: 'Private chef services' },
                      { icon: MapPin, text: 'Private boat tours' },
                      { icon: Plane, text: 'Private island transfers' },
                      { icon: Music, text: 'Local musicians' },
                      { icon: Baby, text: 'Professional babysitter' },
                      { icon: Calendar, text: 'Event hosting services' },
                      { icon: Phone, text: '…and more, just ask us!' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <item.icon size={16} className="text-white/80 flex-shrink-0" />
                        <span className="text-white/90">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-16" />
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <h4 className="text-xl font-semibold text-villa-olive mb-4">Service Notes</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-start gap-2">
                  <Badge variant="outline" className="text-xs">1</Badge>
                  Our standard is to change linens every week. We are happy to provide more frequent service at extra charge.
                </p>
                <p className="flex items-start gap-2">
                  <Badge variant="outline" className="text-xs">2</Badge>
                  Our standard is to change towels twice a week. We are happy to provide more frequent service at extra charge.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Villa;