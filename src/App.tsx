import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import EnUsRedirect from "@/components/EnUsRedirect";
import { LanguageRoute } from "@/components/LanguageRoute";
// import { OliviaClaraAIPremium } from "@/components/OliviaClaraAIPremium";
import Index from "./pages/Index";
import Villa from "./pages/Villa";
import Sifnos from "./pages/Sifnos";
import SifnosBeaches from "./pages/SifnosBeaches";
import Activity from "./pages/Activity";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import SifnosGuide from "./pages/blog/SifnosGuide";
import VillaVsHotel from "./pages/blog/VillaVsHotel";
import SifnosVillas from "./pages/blog/SifnosVillas";
import ThingsToDoSifnos from "./pages/blog/ThingsToDoSifnos";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiePolicy from "./pages/legal/CookiePolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import RentalConditions from "./pages/legal/RentalConditions";
import FAQ from "./pages/FAQ";
import Sustainability from "./pages/Sustainability";
import NotFound from "./pages/NotFound";
import Sitemap from "./pages/Sitemap";
import SitemapEn from "./pages/SitemapEn";
import SitemapEl from "./pages/SitemapEl";
import SitemapFr from "./pages/SitemapFr";
import SitemapIt from "./pages/SitemapIt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <ScrollToTop />
        <EnUsRedirect />

        <Routes>
          {/* English routes (default - no prefix) */}
          <Route path="/" element={<Index />} />
          <Route path="/villa" element={<Villa />} />
          <Route path="/sifnos" element={<Sifnos />} />
          <Route path="/sifnos/beaches" element={<SifnosBeaches />} />
          <Route path="/sifnos/boat-tours" element={<Activity />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/ultimate-guide-sifnos-greece-luxury-villa-vacation" element={<SifnosGuide />} />
          <Route path="/blog/luxury-villa-vs-hotel-sifnos-greece-complete-comparison" element={<VillaVsHotel />} />
          <Route path="/blog/sifnos-luxury-villas-ultimate-guide" element={<SifnosVillas />} />
          <Route path="/blog/best-sifnos-villas-with-pool-guide" element={<SifnosVillas />} />
          <Route path="/blog/things-to-do-in-sifnos-greece-guide" element={<ThingsToDoSifnos />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/rental-conditions" element={<RentalConditions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sustainability" element={<Sustainability />} />

          {/* Greek routes (/el/) */}
          <Route path="/el" element={<LanguageRoute><Index /></LanguageRoute>} />
          <Route path="/el/villa" element={<LanguageRoute><Villa /></LanguageRoute>} />
          <Route path="/el/sifnos" element={<LanguageRoute><Sifnos /></LanguageRoute>} />
          <Route path="/el/sifnos/beaches" element={<LanguageRoute><SifnosBeaches /></LanguageRoute>} />
          <Route path="/el/sifnos/boat-tours" element={<LanguageRoute><Activity /></LanguageRoute>} />
          <Route path="/el/reviews" element={<LanguageRoute><Reviews /></LanguageRoute>} />
          <Route path="/el/contact" element={<LanguageRoute><Contact /></LanguageRoute>} />
          <Route path="/el/blog" element={<LanguageRoute><Blog /></LanguageRoute>} />
          <Route path="/el/blog/ultimate-guide-sifnos-greece-luxury-villa-vacation" element={<LanguageRoute><SifnosGuide /></LanguageRoute>} />
          <Route path="/el/blog/luxury-villa-vs-hotel-sifnos-greece-complete-comparison" element={<LanguageRoute><VillaVsHotel /></LanguageRoute>} />
          <Route path="/el/blog/οδηγος-σιφνου-ελλαδα-πολυτελης-βιλα" element={<LanguageRoute><SifnosGuide /></LanguageRoute>} />
          <Route path="/el/blog/πολυτελης-βιλα-vs-ξενοδοχειο-σιφνος" element={<LanguageRoute><VillaVsHotel /></LanguageRoute>} />
          <Route path="/el/blog/sifnos-luxury-villas-ultimate-guide" element={<LanguageRoute><SifnosVillas /></LanguageRoute>} />
          <Route path="/el/blog/καλυτερες-βιλες-σιφνος-με-πισινα" element={<LanguageRoute><SifnosVillas /></LanguageRoute>} />
          <Route path="/el/blog/τι-να-κανετε-στη-σιφνο-οδηγος" element={<LanguageRoute><ThingsToDoSifnos /></LanguageRoute>} />
          <Route path="/el/faq" element={<LanguageRoute><FAQ /></LanguageRoute>} />
          <Route path="/el/sustainability" element={<LanguageRoute><Sustainability /></LanguageRoute>} />
          <Route path="/el/privacy-policy" element={<LanguageRoute><PrivacyPolicy /></LanguageRoute>} />
          <Route path="/el/cookie-policy" element={<LanguageRoute><CookiePolicy /></LanguageRoute>} />
          <Route path="/el/terms-of-service" element={<LanguageRoute><TermsOfService /></LanguageRoute>} />
          <Route path="/el/rental-conditions" element={<LanguageRoute><RentalConditions /></LanguageRoute>} />

          {/* French routes (/fr/) */}
          <Route path="/fr" element={<LanguageRoute><Index /></LanguageRoute>} />
          <Route path="/fr/villa" element={<LanguageRoute><Villa /></LanguageRoute>} />
          <Route path="/fr/sifnos" element={<LanguageRoute><Sifnos /></LanguageRoute>} />
          <Route path="/fr/sifnos/beaches" element={<LanguageRoute><SifnosBeaches /></LanguageRoute>} />
          <Route path="/fr/sifnos/boat-tours" element={<LanguageRoute><Activity /></LanguageRoute>} />
          <Route path="/fr/reviews" element={<LanguageRoute><Reviews /></LanguageRoute>} />
          <Route path="/fr/contact" element={<LanguageRoute><Contact /></LanguageRoute>} />
          <Route path="/fr/blog" element={<LanguageRoute><Blog /></LanguageRoute>} />
          <Route path="/fr/blog/ultimate-guide-sifnos-greece-luxury-villa-vacation" element={<LanguageRoute><SifnosGuide /></LanguageRoute>} />
          <Route path="/fr/blog/luxury-villa-vs-hotel-sifnos-greece-complete-comparison" element={<LanguageRoute><VillaVsHotel /></LanguageRoute>} />
          <Route path="/fr/blog/guide-sifnos-grece-villa-luxe" element={<LanguageRoute><SifnosGuide /></LanguageRoute>} />
          <Route path="/fr/blog/villa-luxe-vs-hotel-sifnos-grece" element={<LanguageRoute><VillaVsHotel /></LanguageRoute>} />
          <Route path="/fr/blog/sifnos-luxury-villas-ultimate-guide" element={<LanguageRoute><SifnosVillas /></LanguageRoute>} />
          <Route path="/fr/blog/meilleures-villas-sifnos-piscine-guide" element={<LanguageRoute><SifnosVillas /></LanguageRoute>} />
          <Route path="/fr/blog/activites-sifnos-grece-guide" element={<LanguageRoute><ThingsToDoSifnos /></LanguageRoute>} />
          <Route path="/fr/faq" element={<LanguageRoute><FAQ /></LanguageRoute>} />
          <Route path="/fr/sustainability" element={<LanguageRoute><Sustainability /></LanguageRoute>} />
          <Route path="/fr/privacy-policy" element={<LanguageRoute><PrivacyPolicy /></LanguageRoute>} />
          <Route path="/fr/cookie-policy" element={<LanguageRoute><CookiePolicy /></LanguageRoute>} />
          <Route path="/fr/terms-of-service" element={<LanguageRoute><TermsOfService /></LanguageRoute>} />
          <Route path="/fr/rental-conditions" element={<LanguageRoute><RentalConditions /></LanguageRoute>} />

          {/* Italian routes (/it/) */}
          <Route path="/it" element={<LanguageRoute><Index /></LanguageRoute>} />
          <Route path="/it/villa" element={<LanguageRoute><Villa /></LanguageRoute>} />
          <Route path="/it/sifnos" element={<LanguageRoute><Sifnos /></LanguageRoute>} />
          <Route path="/it/sifnos/beaches" element={<LanguageRoute><SifnosBeaches /></LanguageRoute>} />
          <Route path="/it/sifnos/boat-tours" element={<LanguageRoute><Activity /></LanguageRoute>} />
          <Route path="/it/reviews" element={<LanguageRoute><Reviews /></LanguageRoute>} />
          <Route path="/it/contact" element={<LanguageRoute><Contact /></LanguageRoute>} />
          <Route path="/it/blog" element={<LanguageRoute><Blog /></LanguageRoute>} />
          <Route path="/it/blog/ultimate-guide-sifnos-greece-luxury-villa-vacation" element={<LanguageRoute><SifnosGuide /></LanguageRoute>} />
          <Route path="/it/blog/luxury-villa-vs-hotel-sifnos-greece-complete-comparison" element={<LanguageRoute><VillaVsHotel /></LanguageRoute>} />
          <Route path="/it/blog/guida-sifnos-grecia-villa-lusso" element={<LanguageRoute><SifnosGuide /></LanguageRoute>} />
          <Route path="/it/blog/villa-lusso-vs-hotel-sifnos-grecia" element={<LanguageRoute><VillaVsHotel /></LanguageRoute>} />
          <Route path="/it/blog/sifnos-luxury-villas-ultimate-guide" element={<LanguageRoute><SifnosVillas /></LanguageRoute>} />
          <Route path="/it/blog/migliori-ville-sifnos-piscina-guida" element={<LanguageRoute><SifnosVillas /></LanguageRoute>} />
          <Route path="/it/blog/cosa-fare-a-sifnos-grecia-guida" element={<LanguageRoute><ThingsToDoSifnos /></LanguageRoute>} />
          <Route path="/it/faq" element={<LanguageRoute><FAQ /></LanguageRoute>} />
          <Route path="/it/sustainability" element={<LanguageRoute><Sustainability /></LanguageRoute>} />
          <Route path="/it/privacy-policy" element={<LanguageRoute><PrivacyPolicy /></LanguageRoute>} />
          <Route path="/it/cookie-policy" element={<LanguageRoute><CookiePolicy /></LanguageRoute>} />
          <Route path="/it/terms-of-service" element={<LanguageRoute><TermsOfService /></LanguageRoute>} />
          <Route path="/it/rental-conditions" element={<LanguageRoute><RentalConditions /></LanguageRoute>} />

          {/* Sitemaps */}
          <Route path="/sitemap.xml" element={<Sitemap />} />
          <Route path="/sitemap-en.xml" element={<SitemapEn />} />
          <Route path="/sitemap-el.xml" element={<SitemapEl />} />
          <Route path="/sitemap-fr.xml" element={<SitemapFr />} />
          <Route path="/sitemap-it.xml" element={<SitemapIt />} />

          {/* 404 catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Olivia Clara AI Premium - Available on every page */}
        {/* <OliviaClaraAIPremium /> */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
