import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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
  <nav className="sticky top-20 z-40 bg-background/90 backdrop-blur border-b border-villa-stone">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="flex flex-wrap items-center gap-4 py-3 text-sm">
        <li><a href="#outdoors" className="text-foreground hover:text-villa-olive">Outdoors</a></li>
        <li><a href="#bedrooms" className="text-foreground hover:text-villa-olive">Bedrooms</a></li>
        <li><a href="#bathrooms" className="text-foreground hover:text-villa-olive">Bathrooms</a></li>
        <li><a href="#living" className="text-foreground hover:text-villa-olive">Living Spaces</a></li>
        <li><a href="#amenities" className="text-foreground hover:text-villa-olive">Amenities</a></li>
      </ul>
    </div>
  </nav>
);

const FeatureList = ({ title, items }: { title?: string; items: string[] }) => (
  <div>
    {title && (
      <h4 className="text-lg font-semibold text-villa-olive mb-3">{title}</h4>
    )}
    <ul className="space-y-2 text-muted-foreground">
      {items.map((item, i) => (
        <li key={i} className="flex items-start">
          <span className="text-villa-olive mr-2 mt-1">•</span>
          <span>{item}</span>
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
      <figure key={i} className="overflow-hidden rounded-lg border border-villa-stone bg-card">
        <img
          src={g.src}
          alt={g.alt}
          loading="lazy"
          className="w-full h-60 object-cover"
        />
        {g.caption && (
          <figcaption className="px-4 py-3 text-sm text-muted-foreground">
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
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <header className="py-14 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 text-villa-olive">
            Tour of Our Villa In Sifnos, Greece
          </h1>
          <p className="text-lg text-muted-foreground">
            We are delighted to give you a guided tour of our villa in Sifnos, Greece.
          </p>
        </div>
      </header>

      <SectionNav />

      <main className="py-16 space-y-20">
        <section id="outdoors" className="scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-villa-olive mb-8">Outdoors</h2>

            {/* Pool Cabana & Bar */}
            <article className="mb-14">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-villa-olive mb-2">Pool Cabana & Bar</h3>
                  <p className="text-muted-foreground mb-6">
                    Enjoy the view of Sifnos from our pool cabana and bar
                  </p>
                  <FeatureList
                    title="Pool Features"
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
                <Card className="border-villa-stone shadow-soft">
                  <CardContent className="p-0">
                    <img
                      src={platsGialos}
                      alt="The large pool at Villa Olivia Clara is surrounded by the hills of Sifnos, Greece"
                      loading="lazy"
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Gallery
                  items={[
                    { src: vathi, alt: 'Pool-side cabana', caption: 'Pool-side cabana' },
                    { src: chrysopigi, alt: 'View from the pool-side cabana', caption: 'View from the pool-side cabana' },
                    { src: kamares, alt: 'The pool area at night', caption: 'The pool area at night' },
                    { src: faros, alt: 'Pool dining area at night', caption: 'Pool dining area at night' },
                    { src: heronissos, alt: 'View from the pool bar', caption: 'View from the pool bar' },
                    { src: fykiada, alt: 'At the pool during the day', caption: 'At the pool during the day' },
                    { src: vroulidia, alt: 'View from the pool lounge area', caption: 'View from the pool lounge area' },
                    { src: apollonia, alt: 'Behind the pool bar', caption: 'Behind the pool bar' },
                    { src: kastro, alt: 'Detail: Our house dolphins', caption: 'Detail: Our house dolphins' },
                  ]}
                />
              </div>
            </article>

            {/* Garden & Terrace */}
            <article>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-villa-olive mb-2">Garden & Terrace</h3>
                  <p className="text-muted-foreground mb-6">
                    Enjoy the nature of Sifnos from our rich mediterranean garden
                  </p>
                  <FeatureList
                    title="Garden Features"
                    items={[
                      'Large stone terrace',
                      'Stone fence garden',
                      'Outdoor lounge and dining areas',
                      'Parking space for 5 cars',
                      'Indigenous plants & herbs',
                      'Stunning views of the sea',
                    ]}
                  />
                </div>
                <Card className="border-villa-stone shadow-soft">
                  <CardContent className="p-0">
                    <img
                      src={apollonia}
                      alt="The view of Sifnos from our villa’s stone terrace is unbeatable."
                      loading="lazy"
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Gallery
                  items={[
                    { src: artemonas, alt: 'Upper terrace at night', caption: 'Upper terrace at night' },
                    { src: exampela, alt: 'The back garden near the pool', caption: 'The back garden near the pool' },
                    { src: katavati, alt: 'The villa from the garden', caption: 'The villa from the garden' },
                    { src: panoPetali, alt: 'View from the terrace', caption: 'View from the terrace' },
                    { src: troullaki, alt: 'Dining at the terrace', caption: 'Dining at the terrace' },
                    { src: katoPetali, alt: 'Detail: Small part of our garden', caption: 'Detail: Small part of our garden' },
                  ]}
                />
              </div>

              {/* Brand detail callout */}
              <Card className="border-villa-stone shadow-soft mt-10">
                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img
                    src={kamares}
                    alt="The majestic olive tree adorns our premium towels and linens"
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The majestic olive tree, found everywhere in Greece and Sifnos, adorns our premium towels and linens.
                  </p>
                </CardContent>
              </Card>
            </article>
          </div>
        </section>

        {/* Bedrooms */}
        <section id="bedrooms" className="scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Bedrooms</h2>
            <p className="text-muted-foreground mb-6">
              Wake up to views of Platis Gialos, the most popular beach in Sifnos
            </p>

            <FeatureList
              title="Features"
              items={[
                '2 king beds (200 x 200)',
                '4 single beds (100 x 200)',
                '1 baby crib (70 x 130)',
                'Air conditioning in all living areas',
                'Extra pillows and blankets',
                'Linen changes weekly¹',
              ]}
            />

            <div className="mt-8">
              <Gallery
                items={[
                  { src: apollonia, alt: 'Master bedroom', caption: 'Master bedroom' },
                  { src: platsGialos, alt: 'View from the master bedroom', caption: 'View from the master bedroom' },
                  { src: artemonas, alt: 'Standard bedroom', caption: 'Standard bedroom' },
                  { src: kastro, alt: 'View from the standard bedroom', caption: 'View from the standard bedroom' },
                  { src: exampela, alt: 'Guest master bedroom', caption: 'Guest master bedroom' },
                  { src: vathi, alt: 'View from the guest master bedroom', caption: 'View from the guest master bedroom' },
                  { src: panoPetali, alt: 'Terrace access from guest master bedroom', caption: 'Terrace access from guest master bedroom' },
                  { src: katavati, alt: 'Guest standard bedroom', caption: 'Guest standard bedroom' },
                ]}
              />
            </div>

            <Card className="border-villa-stone shadow-soft mt-10">
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <img
                  src={faros}
                  alt="Experience comfortable and personable service at Villa Olivia Clara in Sifnos, Greece."
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-muted-foreground">
                  Experience comfortable and personable service at Villa Olivia Clara in Sifnos, Greece.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bathrooms */}
        <section id="bathrooms" className="scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Bathrooms</h2>
            <p className="text-muted-foreground mb-6">
              Feel at home in the luxury of our villa’s elegant bathrooms
            </p>

            <FeatureList
              title="Features"
              items={[
                '3 full bathrooms, 1 WC',
                'Hot water',
                'Bathroom essentials',
                'Hair dryer',
                'Dedicated pool bathroom',
                'Towel changes twice a week²',
              ]}
            />

            <div className="mt-8">
              <Gallery
                items={[
                  { src: kastro, alt: 'Master bathroom (en suite)', caption: 'Master bathroom (en suite)' },
                  { src: apollonia, alt: 'Standard bathroom', caption: 'Standard bathroom' },
                  { src: artemonas, alt: 'Standard bathroom', caption: 'Standard bathroom' },
                  { src: exampela, alt: 'Guest master bathroom', caption: 'Guest master bathroom' },
                  { src: katavati, alt: 'Guest master bathroom', caption: 'Guest master bathroom' },
                  { src: troullaki, alt: 'Guest standard WC', caption: 'Guest standard WC' },
                  { src: vathi, alt: 'Dedicated pool bathroom', caption: 'Dedicated pool bathroom' },
                  { src: chrysopigi, alt: 'Dedicated pool bathroom', caption: 'Dedicated pool bathroom' },
                  { src: kamares, alt: 'Detail: Pool towel', caption: 'Detail: Pool towel' },
                ]}
                columns="md:grid-cols-3"
              />
            </div>

            <Card className="border-villa-stone shadow-soft mt-10">
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <img
                  src={kamares}
                  alt="Fine dining at Villa Olivia Clara using Sifnos Stoneware"
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-muted-foreground">
                  Fine dining at Villa Olivia Clara using our dinner set from Sifnos Stoneware, handmade in Greece.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Living Spaces */}
        <section id="living" className="scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-villa-olive mb-6">Living Spaces</h2>
            <p className="text-muted-foreground mb-6">
              Wine and dine like a Greek god in one of our three dining spaces
            </p>

            <FeatureList
              title="Features"
              items={[
                'Indoor dining area',
                'Large outdoor dining area',
                'Pool-side dining area',
                'Fully-equipped kitchen',
                'Working space',
                'Spacious living room with large TV',
              ]}
            />

            <div className="mt-8">
              <Gallery
                items={[
                  { src: apollonia, alt: 'Indoor dining area', caption: 'Indoor dining area' },
                  { src: troullaki, alt: 'Outdoor dining area', caption: 'Outdoor dining area' },
                  { src: vathi, alt: 'Pool dining area', caption: 'Pool dining area' },
                  { src: artemonas, alt: 'The living room', caption: 'The living room' },
                  { src: kastro, alt: 'The living room sitting area', caption: 'The living room sitting area' },
                  { src: platsGialos, alt: 'The view from the living room', caption: 'The view from the living room' },
                  { src: exampela, alt: 'The kitchen', caption: 'The kitchen' },
                  { src: faros, alt: 'The kitchen cooking area', caption: 'The kitchen cooking area' },
                  { src: heronissos, alt: 'The view from the kitchen', caption: 'The view from the kitchen' },
                ]}
              />
            </div>

            <Card className="border-villa-stone shadow-soft mt-10">
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <img
                  src={vroulidia}
                  alt="Villa Olivia Clara provides one of the best views in Sifnos, Greece"
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-muted-foreground">
                  Villa Olivia Clara provides one of the best views in Sifnos, Greece due to its excellent location.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-villa-olive mb-8">Villa Amenities</h2>
            <p className="text-muted-foreground mb-10">
              Experience our five-star service and luxury amenities
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-villa-stone">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Bedroom & Laundry</h3>
                  <FeatureList
                    items={[
                      'Washing machine',
                      'Hangers',
                      'Iron',
                      'Drying rack for clothing',
                      'Closet space',
                      'Changing table',
                    ]}
                  />
                </CardContent>
              </Card>

              <Card className="border-villa-stone">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Safety</h3>
                  <FeatureList items={[
                    'Fire extinguisher',
                    'Fireplace guards',
                    'First aid kit',
                  ]} />
                </CardContent>
              </Card>

              <Card className="border-villa-stone">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Kitchen</h3>
                  <FeatureList
                    items={[
                      'Dishes and silverware',
                      'Wine glasses, champagne glasses and more',
                      'Dishwasher',
                      'Refrigerator & freezer',
                      'Microwave, oven, stove',
                      'Premium automatic coffee machine (50+ drinks)',
                      'Outdoor barbecue',
                      '…and more',
                    ]}
                  />
                </CardContent>
              </Card>

              <Card className="border-villa-stone">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Entertainment</h3>
                  <FeatureList items={[
                    'Smart 65″ HDTV',
                    'Books and reading material',
                    'Board games, toys',
                  ]} />
                </CardContent>
              </Card>

              <Card className="border-villa-stone">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-villa-olive mb-3">Upon Request</h3>
                  <FeatureList
                    items={[
                      'Transfer to / from port',
                      'Private chef',
                      'Private boat tour',
                      'Private island transfer',
                      'Local musicians',
                      'Babysitter',
                      'Event hosting',
                      '…and more, just ask us!',
                    ]}
                  />
                </CardContent>
              </Card>
            </div>

            <Separator className="my-10" />
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                ¹ Our standard is to change linens every week. We are happy to provide more frequent service at extra charge.
              </p>
              <p>
                ² Our standard is to change towels twice a week. We are happy to provide more frequent service at extra charge.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Villa;
