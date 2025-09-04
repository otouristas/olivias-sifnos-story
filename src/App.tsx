import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import CanonicalLink from "@/components/CanonicalLink";
import Index from "./pages/Index";
import Villa from "./pages/Villa";
import Sifnos from "./pages/Sifnos";
import SifnosBeaches from "./pages/SifnosBeaches";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import SifnosGuide from "./pages/blog/SifnosGuide";
import VillaVsHotel from "./pages/blog/VillaVsHotel";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiePolicy from "./pages/legal/CookiePolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CanonicalLink />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/villa" element={<Villa />} />
          <Route path="/sifnos" element={<Sifnos />} />
          <Route path="/sifnos/beaches" element={<SifnosBeaches />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/ultimate-guide-sifnos-greece-luxury-villa-vacation" element={<SifnosGuide />} />
          <Route path="/blog/luxury-villa-vs-hotel-sifnos-greece-complete-comparison" element={<VillaVsHotel />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
