// Villa Olivia Clara - Image Imports for AI Chatbot
// These are properly imported so Vite can process them

// Pool Images
import poolArea from '@/assets/villa-gallery/Villa-Olivia-Clara_003_the-pool-area.jpg';
import poolCabana from '@/assets/villa-gallery/Villa-Olivia-Clara_001_pool-side-cabana.jpg';
import poolSunbathing from '@/assets/villa-gallery/Villa-Olivia-Clara_011_pool-sunbathing-area.jpg';
import poolAreaNight from '@/assets/villa-gallery/Villa-Olivia-Clara_004_the-pool-area-at-night.jpg';

// Views Images
import viewFromPoolCabana from '@/assets/villa-gallery/Villa-Olivia-Clara_002_view-from-the-pool-cabana.jpg';
import viewFromPoolSunbathing from '@/assets/villa-gallery/Villa-Olivia-Clara_012_view-from-the-pool-sunbathing-area.jpg';
import aerialViewWide from '@/assets/villa-gallery/Villa-Olivia-Clara_043_aerial-view-of-the-villa-wide.jpg';
import aerialView from '@/assets/villa-gallery/Villa-Olivia-Clara_042_aerial-view-of-villa.jpg';

// Bedroom Images
import masterBedroom from '@/assets/villa-gallery/Villa-Olivia-Clara_014_master-bedroom.jpg';
import standardBedroom from '@/assets/villa-gallery/Villa-Olivia-Clara_015_standard-bedroom.jpg';
import guestMasterBedroom from '@/assets/villa-gallery/Villa-Olivia-Clara_022_guest-master-bedroom.jpg';
import guestStandardBedroom from '@/assets/villa-gallery/Villa-Olivia-Clara_024_guest-standard-bedroom.jpg';

// Bathroom Images
import masterBathroom from '@/assets/villa-gallery/Villa-Olivia-Clara_018_master-bathroom.jpg';
import standardBathroom from '@/assets/villa-gallery/Villa-Olivia-Clara_020_standard-bathroom.jpg';
import guestMasterBathroom from '@/assets/villa-gallery/Villa-Olivia-Clara_025_guest-master-bathroom.jpg';

// Living Space Images
import livingRoom from '@/assets/villa-gallery/Villa-Olivia-Clara_029_living-room.jpg';
import kitchen from '@/assets/villa-gallery/Villa-Olivia-Clara_034_kitchen.jpg';
import indoorDining from '@/assets/villa-gallery/Villa-Olivia-Clara_032_indoor-dining-area.jpg';

// Terrace & Outdoor Images
import terraceDining from '@/assets/villa-gallery/Villa-Olivia-Clara_040_dining-at-the-terrace.jpg';
import upperTerraceNight from '@/assets/villa-gallery/Villa-Olivia-Clara_013_upper-terrace-at-night.jpg';
import poolDining from '@/assets/villa-gallery/Villa-Olivia-Clara_008_pool-dining-area.jpg';
import backGarden from '@/assets/villa-gallery/Villa-Olivia-Clara_041_back-garden.jpg';

// ============================================================================
// VILLA GALLERY IMAGES (for chatbot carousels)
// ============================================================================
export const VILLA_IMAGES = {
    pool: [poolArea, poolCabana, poolSunbathing, poolAreaNight],
    views: [viewFromPoolCabana, viewFromPoolSunbathing, aerialViewWide, aerialView],
    bedrooms: [masterBedroom, standardBedroom, guestMasterBedroom, guestStandardBedroom],
    bathrooms: [masterBathroom, standardBathroom, guestMasterBathroom],
    living: [livingRoom, kitchen, indoorDining],
    terrace: [terraceDining, upperTerraceNight, poolDining, backGarden],
    overview: [aerialViewWide, poolArea, masterBedroom, livingRoom],
} as const;

export type ImageCategory = keyof typeof VILLA_IMAGES;
