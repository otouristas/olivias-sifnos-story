import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BackToTop } from '@/components/BackToTop';
import Breadcrumb from '@/components/Breadcrumb';
import { VillaStructuredData } from '@/components/StructuredData';
import SEOHead from '@/components/SEOHead';
import ImageZoom from '@/components/ImageZoom';
import { Waves, TreePine, Bed, Bath, Utensils, Tv, Wifi, Car, Shield, Shirt, ChefHat, Music, Baby, Calendar, Coffee, Flame, Refrigerator, Microwave, BookDashed as Dishwasher, Wine, UtensilsCrossed, BookOpen, Gamepad2, Plane, Users, MapPin, Phone, Eye, Star, Mail, Flower, ChevronDown } from 'lucide-react';
import { VirtualTour } from '@/components/VirtualTour';

// Villa Gallery Images
import aerialViewWide from '@/assets/villa-gallery/Villa-Olivia-Clara_043_aerial-view-of-the-villa-wide.jpg';
import aerialView from '@/assets/villa-gallery/Villa-Olivia-Clara_042_aerial-view-of-villa.jpg';
import poolSunbathing from '@/assets/villa-gallery/Villa-Olivia-Clara_011_pool-sunbathing-area.jpg';
import poolArea from '@/assets/villa-gallery/Villa-Olivia-Clara_003_the-pool-area.jpg';
import poolDetail from '@/assets/villa-gallery/Villa-Olivia-Clara_005_pool-detail.jpg';
import poolCabana from '@/assets/villa-gallery/Villa-Olivia-Clara_001_pool-side-cabana.jpg';
import poolBarNight from '@/assets/villa-gallery/Villa-Olivia-Clara_007_the-pool-bar-at-night.jpg';
import poolDining from '@/assets/villa-gallery/Villa-Olivia-Clara_008_pool-dining-area.jpg';
import poolDiningNight from '@/assets/villa-gallery/Villa-Olivia-Clara_010_pool-dining-area-at-night.jpg';
import upperTerraceNight from '@/assets/villa-gallery/Villa-Olivia-Clara_013_upper-terrace-at-night.jpg';
import backGarden from '@/assets/villa-gallery/Villa-Olivia-Clara_041_back-garden.jpg';
import masterBedroom from '@/assets/villa-gallery/Villa-Olivia-Clara_014_master-bedroom.jpg';
import standardBedroom from '@/assets/villa-gallery/Villa-Olivia-Clara_015_standard-bedroom.jpg';
import guestMasterBedroom from '@/assets/villa-gallery/Villa-Olivia-Clara_022_guest-master-bedroom.jpg';
import guestStandardBedroom from '@/assets/villa-gallery/Villa-Olivia-Clara_024_guest-standard-bedroom.jpg';
import masterBathroom from '@/assets/villa-gallery/Villa-Olivia-Clara_018_master-bathroom.jpg';
import standardBathroom from '@/assets/villa-gallery/Villa-Olivia-Clara_020_standard-bathroom.jpg';
import guestMasterBathroom from '@/assets/villa-gallery/Villa-Olivia-Clara_025_guest-master-bathroom.jpg';
import livingRoom from '@/assets/villa-gallery/Villa-Olivia-Clara_029_living-room.jpg';
import livingRoomView from '@/assets/villa-gallery/Villa-Olivia-Clara_030_living-room-view.jpg';
import kitchen from '@/assets/villa-gallery/Villa-Olivia-Clara_034_kitchen.jpg';
import kitchenDetail from '@/assets/villa-gallery/Villa-Olivia-Clara_035_kitchen-detail.jpg';
import indoorDining from '@/assets/villa-gallery/Villa-Olivia-Clara_032_indoor-dining-area.jpg';
import poolHouse from '@/assets/villa-gallery/Villa-Olivia-Clara_038_pool-house.jpg';

// Additional Villa Gallery Images
import viewFromPoolCabana from '@/assets/villa-gallery/Villa-Olivia-Clara_002_view-from-the-pool-cabana.jpg';
import poolAreaNight from '@/assets/villa-gallery/Villa-Olivia-Clara_004_the-pool-area-at-night.jpg';
import viewFromPoolBar from '@/assets/villa-gallery/Villa-Olivia-Clara_006_view-from-the-pool-bar.jpg';
import viewFromPoolDining from '@/assets/villa-gallery/Villa-Olivia-Clara_009_view-from-the-pool-dining-area.jpg';
import viewFromPoolSunbathing from '@/assets/villa-gallery/Villa-Olivia-Clara_012_view-from-the-pool-sunbathing-area.jpg';
import viewFromStandardBedroom from '@/assets/villa-gallery/Villa-Olivia-Clara_016_view-from-the-standard-bedroom.jpg';
import bedroomLinenDetail from '@/assets/villa-gallery/Villa-Olivia-Clara_017_bedroom-linen-detail.jpg';
import bathroomDetail from '@/assets/villa-gallery/Villa-Olivia-Clara_019_bathroom-detail.jpg';
import standardBathroom2 from '@/assets/villa-gallery/Villa-Olivia-Clara_021_standard-bathroom.jpg';
import guestMasterBedroomView from '@/assets/villa-gallery/Villa-Olivia-Clara_023_guest-master-bedroom-view.jpg';
import guestMasterBathroom2 from '@/assets/villa-gallery/Villa-Olivia-Clara_026_guest-master-bathroom.jpg';
import guestMasterBathroomDetail from '@/assets/villa-gallery/Villa-Olivia-Clara_027_guest-master-bathroom-detail.jpg';
import guestStandardWC from '@/assets/villa-gallery/Villa-Olivia-Clara_028_guest-standard-WC.jpg';
import livingRoomBackyardView from '@/assets/villa-gallery/Villa-Olivia-Clara_031_living-room-backyard-view.jpg';
import indoorDiningDetail from '@/assets/villa-gallery/Villa-Olivia-Clara_033_indoor-dining-detail.jpg';
import viewFromKitchen from '@/assets/villa-gallery/Villa-Olivia-Clara_036_view-from-the-kitchen.jpg';
import poolTowelDetail from '@/assets/villa-gallery/Villa-Olivia-Clara_037_pool-towel-detail.jpg';
import poolHouse2 from '@/assets/villa-gallery/Villa-Olivia-Clara_039_pool-house.jpg';
import diningAtTerrace from '@/assets/villa-gallery/Villa-Olivia-Clara_040_dining-at-the-terrace.jpg';

const Villa = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead
        title={t('seo.villa.title')}
        description={t('seo.villa.description')}
        keywords={t('seo.villa.keywords')}
        ogImage="https://villaoliviaclara.com/src/assets/villa-gallery/Villa-Olivia-Clara_003_the-pool-area.jpg"
        canonicalUrl="https://villaoliviaclara.com/villa"
      />
      <VillaStructuredData />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={poolCabana}
            alt="Pool side cabana at Villa Olivia Clara in Sifnos, Greece"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('villa.title')}
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-white/95 font-light">
            {t('villa.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Bed className="w-5 h-5" />
              <span>{t('villa.bedrooms')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Bath className="w-5 h-5" />
              <span>{t('villa.bathrooms')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span>{t('villa.guests')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Waves className="w-5 h-5" />
              <span>{t('villa.privatePool')}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#pool-outdoor"
              className="bg-villa-olive hover:bg-villa-olive/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {t('villa.exploreVilla')}
            </a>
            <a
              href="#virtual-tour"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30 flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              {t('villa.virtualTourButton')}
            </a>
          </div>
        </div>
        
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />

          {/* Villa Overview */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-villa-olive mb-6">
                {t('villa.overviewTitle')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('villa.overviewDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-villa-olive mb-4">
                  {t('villa.whyChoose')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Star className="text-villa-olive mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-lg">{t('villa.primeLocation')}</h4>
                      <p className="text-muted-foreground">{t('villa.primeLocationDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="text-villa-olive mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-lg">{t('villa.luxuryAmenities')}</h4>
                      <p className="text-muted-foreground">{t('villa.luxuryAmenitiesDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="text-villa-olive mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-lg">{t('villa.personalizedService')}</h4>
                      <p className="text-muted-foreground">{t('villa.personalizedServiceDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={aerialView}
                  alt="Aerial view of Villa Olivia Clara showing the pool and outdoor areas"
                  className="w-full h-96 object-cover rounded-lg shadow-elegant"
                />
              </div>
        </div>
          </section>

          {/* Pool & Outdoor Areas */}
          <section id="pool-outdoor" className="mb-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Waves className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">{t('villa.poolOutdoorAreas')}</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                {t('villa.poolOutdoorDesc')}
              </p>
              
              {/* Pool Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Waves className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">12m x 5m Pool</h4>
                  <p className="text-xs text-muted-foreground">3m depth with dolphin decorations</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Utensils className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">{t('villa.poolFeatures.cabana')}</h4>
                  <p className="text-xs text-muted-foreground">{t('villa.poolFeatures.cabanaDesc')}</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Shirt className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">{t('villa.poolFeatures.sunbeds')}</h4>
                  <p className="text-xs text-muted-foreground">{t('villa.poolFeatures.sunbedsDesc')}</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Wine className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">{t('villa.poolFeatures.wineCooler')}</h4>
                  <p className="text-xs text-muted-foreground">{t('villa.poolFeatures.wineCoolerDesc')}</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Bath className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">{t('villa.poolFeatures.poolBathroom')}</h4>
                  <p className="text-xs text-muted-foreground">{t('villa.poolFeatures.poolBathroomDesc')}</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Eye className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">{t('villa.poolFeatures.seaViews')}</h4>
                  <p className="text-xs text-muted-foreground">{t('villa.poolFeatures.seaViewsDesc')}</p>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolArea}
                    alt="The main pool area at Villa Olivia Clara with sunbeds and sea views"
                    className="w-full h-80 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolCabana}
                    alt="Pool-side cabana with bar area at Villa Olivia Clara"
                    className="w-full h-80 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolAreaNight}
                    alt="Pool area at night with beautiful lighting"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolDetail}
                    alt="Pool detail showing the beautiful design"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolSunbathing}
                    alt="Pool sunbathing area with comfortable loungers"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolDining}
                    alt="Pool dining area at Villa Olivia Clara"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolDiningNight}
                    alt="Pool dining area at night"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolBarNight}
                    alt="Pool bar at night with beautiful lighting"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Garden & Terrace */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TreePine className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Garden & Terrace</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Enjoy the nature of Sifnos from our rich mediterranean garden with stunning views
              </p>
              
              {/* Garden Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <TreePine className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">{t('villa.gardenFeatures.stoneTerrace')}</h4>
                  <p className="text-xs text-muted-foreground">{t('villa.gardenFeatures.stoneTerraceDesc')}</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Shield className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">{t('villa.gardenFeatures.stoneFence')}</h4>
                  <p className="text-xs text-muted-foreground">{t('villa.gardenFeatures.stoneFenceDesc')}</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Utensils className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">{t('villa.gardenFeatures.outdoorDining')}</h4>
                  <p className="text-xs text-muted-foreground">{t('villa.gardenFeatures.outdoorDiningDesc')}</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Car className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">{t('villa.gardenFeatures.parkingSpace')}</h4>
                  <p className="text-xs text-muted-foreground">{t('villa.gardenFeatures.parkingSpaceDesc')}</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Flower className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Indigenous Plants</h4>
                  <p className="text-xs text-muted-foreground">Herbs & mediterranean flora</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Eye className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Stunning Views</h4>
                  <p className="text-xs text-muted-foreground">Platis Gialos bay</p>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={backGarden}
                    alt="Back garden with mediterranean plants"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={upperTerraceNight}
                    alt="Upper terrace at night with lanterns"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={diningAtTerrace}
                    alt="Dining at the terrace with sea view"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Bedrooms */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Bed className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Bedrooms</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Wake up to views of Platis Gialos, the most popular beach in Sifnos
              </p>
              
              {/* Bedroom Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Bed className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">2 King Beds</h4>
                  <p className="text-xs text-muted-foreground">200 x 200 cm</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Users className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">4 Single Beds</h4>
                  <p className="text-xs text-muted-foreground">100 x 200 cm</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Baby className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">1 Baby Crib</h4>
                  <p className="text-xs text-muted-foreground">70 x 130 cm</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Wifi className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Air Conditioning</h4>
                  <p className="text-xs text-muted-foreground">All living areas</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Shirt className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Extra Pillows</h4>
                  <p className="text-xs text-muted-foreground">And blankets</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Calendar className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Linen Changes</h4>
                  <p className="text-xs text-muted-foreground">Weekly</p>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={masterBedroom}
                    alt="Master bedroom at Villa Olivia Clara"
                    className="w-full h-80 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={standardBedroom}
                    alt="Standard bedroom at Villa Olivia Clara"
                    className="w-full h-80 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={guestMasterBedroom}
                    alt="Guest master bedroom at Villa Olivia Clara"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={guestStandardBedroom}
                    alt="Guest standard bedroom at Villa Olivia Clara"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={bedroomLinenDetail}
                    alt="Bedroom linen detail showing luxury quality"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={viewFromStandardBedroom}
                    alt="View from standard bedroom"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={guestMasterBedroomView}
                    alt="View from guest master bedroom"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Bathrooms */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Bath className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Bathrooms</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Feel at home in the luxury of our villa's elegant bathrooms
              </p>
              
              {/* Bathroom Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Bath className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">3 Full Bathrooms</h4>
                  <p className="text-xs text-muted-foreground">1 WC</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Waves className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Hot Water</h4>
                  <p className="text-xs text-muted-foreground">Always available</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Shirt className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Bathroom Essentials</h4>
                  <p className="text-xs text-muted-foreground">Hair dryer included</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Waves className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Pool Bathroom</h4>
                  <p className="text-xs text-muted-foreground">Dedicated pool area</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Calendar className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Towel Changes</h4>
                  <p className="text-xs text-muted-foreground">Twice a week</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Star className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Luxury Design</h4>
                  <p className="text-xs text-muted-foreground">Modern fixtures</p>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={masterBathroom}
                    alt="Master bathroom at Villa Olivia Clara"
                    className="w-full h-80 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={standardBathroom}
                    alt="Standard bathroom at Villa Olivia Clara"
                    className="w-full h-80 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={guestMasterBathroom}
                    alt="Guest master bathroom at Villa Olivia Clara"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={guestMasterBathroom2}
                    alt="Guest master bathroom detail"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={bathroomDetail}
                    alt="Bathroom detail showing luxury fixtures"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={standardBathroom2}
                    alt="Standard bathroom detail"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={guestStandardWC}
                    alt="Guest standard WC"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Living Spaces */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Utensils className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Living Spaces</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Wine and dine like a Greek god in one of our three dining spaces
              </p>
              
              {/* Living Space Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Utensils className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Indoor Dining</h4>
                  <p className="text-xs text-muted-foreground">Round glass table</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <UtensilsCrossed className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Outdoor Dining</h4>
                  <p className="text-xs text-muted-foreground">Granite table with sea view</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Waves className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Pool Dining</h4>
                  <p className="text-xs text-muted-foreground">Hexagonal wooden table</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Utensils className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Fully-equipped Kitchen</h4>
                  <p className="text-xs text-muted-foreground">Green tiles & modern appliances</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Tv className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Smart 65" HDTV</h4>
                  <p className="text-xs text-muted-foreground">Spacious living room</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <BookOpen className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Working Space</h4>
                  <p className="text-xs text-muted-foreground">Books & reading material</p>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={livingRoom}
                    alt="Living room at Villa Olivia Clara"
                    className="w-full h-80 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={kitchen}
                    alt="Kitchen at Villa Olivia Clara"
                    className="w-full h-80 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={indoorDining}
                    alt="Indoor dining area at Villa Olivia Clara"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={livingRoomView}
                    alt="Living room view at Villa Olivia Clara"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={livingRoomBackyardView}
                    alt="Living room backyard view"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={indoorDiningDetail}
                    alt="Indoor dining detail"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={kitchenDetail}
                    alt="Kitchen detail showing modern appliances"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Additional Amenities */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Star className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Additional Amenities</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Everything you need for a perfect stay in luxury and comfort
              </p>
              
              {/* Additional Amenities Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Car className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Parking</h4>
                  <p className="text-xs text-muted-foreground">Free on-site</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Shield className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Security</h4>
                  <p className="text-xs text-muted-foreground">Safe & secure</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Music className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Sound System</h4>
                  <p className="text-xs text-muted-foreground">Bluetooth speakers</p>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Baby className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Family Friendly</h4>
                  <p className="text-xs text-muted-foreground">Child-safe</p>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={poolHouse}
                    alt="Pool house at Villa Olivia Clara"
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={poolHouse2}
                    alt="Pool house interior"
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={diningAtTerrace}
                    alt="Dining at the terrace"
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Villa Amenities */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Star className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Villa Amenities</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Experience our five-star service and luxury amenities
              </p>
            </div>

            {/* Bedroom and Laundry */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-villa-olive mb-6 text-center">Bedroom and Laundry</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Refrigerator className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Washing Machine</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Shirt className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Hangers</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Shirt className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Iron</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Shirt className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Drying Rack</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Shirt className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Closet Space</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Baby className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Changing Table</h4>
                </Card>
              </div>
            </div>

            {/* Safety */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-villa-olive mb-6 text-center">Safety</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Flame className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Fire Extinguisher</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Shield className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Fireplace Guards</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Shield className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">First Aid Kit</h4>
                </Card>
              </div>
            </div>

            {/* Kitchen */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-villa-olive mb-6 text-center">Kitchen</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Utensils className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Dishes & Silverware</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Wine className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Wine Glasses</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Dishwasher className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Dishwasher</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Refrigerator className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Refrigerator & Freezer</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Microwave className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Microwave, Oven, Stove</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Coffee className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Premium Coffee Machine</h4>
                </Card>
              </div>
            </div>

            {/* Entertainment */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-villa-olive mb-6 text-center">Entertainment</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Tv className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Smart 65" HDTV</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <BookOpen className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Books & Reading Material</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Gamepad2 className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Board Games & Toys</h4>
                </Card>
              </div>
            </div>

            {/* Upon Request Services */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-villa-olive mb-6 text-center">Upon Request</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Plane className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Transfer to/from Port</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <ChefHat className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Private Chef</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Waves className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Private Boat Tour</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Plane className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Private Island Transfer</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Music className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Local Musicians</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Baby className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Babysitter</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Calendar className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">Event Hosting</h4>
                </Card>
                <Card className="border-villa-stone shadow-soft p-4 text-center">
                  <Star className="text-villa-olive mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm text-villa-olive">And More...</h4>
                </Card>
              </div>
            </div>
          </section>

          {/* Complete Photo Gallery */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Eye className="text-villa-olive" size={32} />
                <h2 className="text-4xl font-bold text-villa-olive">Complete Photo Gallery</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Explore every corner of Villa Olivia Clara through our comprehensive photo collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Pool & Outdoor Photos */}
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolCabana}
                    alt="Pool side cabana"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={viewFromPoolCabana}
                    alt="View from pool cabana"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolArea}
                    alt="Pool area"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolAreaNight}
                    alt="Pool area at night"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolDetail}
                    alt="Pool detail"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={viewFromPoolBar}
                    alt="View from pool bar"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolBarNight}
                    alt="Pool bar at night"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolDining}
                    alt="Pool dining area"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={viewFromPoolDining}
                    alt="View from pool dining"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolDiningNight}
                    alt="Pool dining at night"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={poolSunbathing}
                    alt="Pool sunbathing area"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={viewFromPoolSunbathing}
                    alt="View from pool sunbathing"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={upperTerraceNight}
                    alt="Upper terrace at night"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={backGarden}
                    alt="Back garden"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={aerialView}
                    alt="Aerial view of villa"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
              <Card className="border-0 shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <ImageZoom
                    src={aerialViewWide}
                    alt="Wide aerial view of villa"
                    className="w-full h-64 object-cover cursor-zoom-in"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Virtual Tour Section */}
          <section id="virtual-tour" className="py-20 bg-gradient-to-br from-sand-light to-white">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Eye className="text-villa-olive" size={40} />
                <h2 className="text-4xl font-bold text-villa-olive">{t('virtualTour.title')}</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                {t('virtualTour.subtitle')}
              </p>
              <div className="text-sm text-villa-olive font-semibold">
                {t('virtualTour.instructions')}
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="border-villa-stone shadow-elegant overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <VirtualTour />
                </CardContent>
              </Card>
              
              {/* Tour Features */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="text-villa-olive" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-villa-olive mb-3">{t('virtualTour.features.experience')}</h3>
                    <p className="text-muted-foreground">{t('virtualTour.features.experienceDesc')}</p>
                  </CardContent>
                </Card>
                
                <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="text-villa-olive" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-villa-olive mb-3">{t('virtualTour.features.confidence')}</h3>
                    <p className="text-muted-foreground">{t('virtualTour.features.confidenceDesc')}</p>
                  </CardContent>
                </Card>
                
                <Card className="border-villa-stone shadow-soft hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-villa-olive-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <ChevronDown className="text-villa-olive" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-villa-olive mb-3">{t('virtualTour.features.interactive')}</h3>
                    <p className="text-muted-foreground">{t('virtualTour.features.interactiveDesc')}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Villa;