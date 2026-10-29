import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

// Import logo
import logo from '/villa-olivia-clara-logo.webp';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const currentLang = i18n.language;
  const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;

  return (
    <footer className="relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-villa-olive-light via-villa-olive-light to-sand opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Logo and Tagline */}
          <div className="text-center mb-12">
            <img
              src={logo}
              alt="Villa Olivia Clara"
              className="h-20 w-auto mx-auto mb-6"
              width="620"
              height="165"
            />
            <p className="text-villa-olive text-lg font-medium mb-2">{t('footer.tagline')}</p>
            <p className="text-muted-foreground max-w-md mx-auto">
              {t('footer.description')}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4">{t('footer.experience')}</h3>
              <div className="space-y-3">
                <Link to={`${langPrefix}/villa`} className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  {t('footer.villaTour')}
                </Link>
                <Link to={`${langPrefix}/reviews`} className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  {t('footer.guestStories')}
                </Link>
                <Link to={`${langPrefix}/sifnos`} className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  {t('footer.discoverSifnos')}
                </Link>
                <Link to={`${langPrefix}/blog`} className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  {t('footer.travelBlog')}
                </Link>
              </div>
            </div>

            {/* Legal & Info */}
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4">{t('footer.information')}</h3>
              <div className="space-y-3">
                <Link to={`${langPrefix}/sustainability`} className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  {t('footer.sustainability')}
                </Link>
                <Link to={`${langPrefix}/rental-conditions`} className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  {t('footer.rentalConditions')}
                </Link>
                <Link to={`${langPrefix}/faq`} className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  {t('footer.faq')}
                </Link>
                <Link to={`${langPrefix}/privacy-policy`} className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
                <Link to={`${langPrefix}/cookie-policy`} className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  {t('footer.cookiePolicy')}
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4">{t('footer.contactElena')}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-villa-olive mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium">Villa Olivia Clara</p>
                    <p>Platis Gialos, Sifnos</p>
                    <p>Cyclades, Greece</p>
                  </div>
                </div>

                <a
                  href="mailto:elena@villaoliviaclara.com"
                  className="flex items-center gap-3 text-sm text-villa-olive hover:text-villa-olive-dark transition-colors group"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  <span className="group-hover:underline">elena@villaoliviaclara.com</span>
                </a>

                <a
                  href="tel:+306971919382"
                  className="flex items-center gap-3 text-sm text-villa-olive hover:text-villa-olive-dark transition-colors group"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  <span className="group-hover:underline">+30 697 191 9382</span>
                </a>
              </div>
            </div>

            {/* Booking CTA */}
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4">{t('footer.readyToBook')}</h3>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {t('footer.planGetaway')}
                </p>
                <a
                  href="https://book.villaoliviaclara.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-villa-olive text-white text-sm font-medium rounded-lg hover:bg-villa-olive/90 transition-colors"
                >
                  {t('footer.bookNow')}
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer with Branding */}
        <div className="border-t border-villa-olive/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Villa Olivia Clara. {t('footer.allRightsReserved')}
              </p>
            </div>

            {/* Branding */}
            <div className="text-center lg:text-right">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-muted-foreground">
                <a
                  href="https://anotherseoGuru.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-villa-olive transition-colors group"
                >
                  <span>{t('footer.designedBy')}</span>
                  <span className="font-semibold group-hover:underline">AnotherSEOGuru</span>
                  <ExternalLink size={10} />
                </a>

                <span className="hidden sm:inline text-villa-olive/40">•</span>

                <a
                  href="https://touristas.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-villa-olive transition-colors group"
                >
                  <span>{t('footer.poweredBy')}</span>
                  <span className="font-semibold group-hover:underline">Touristas AI</span>
                  <ExternalLink size={10} />
                </a>

                <span className="hidden sm:inline text-villa-olive/40">•</span>

                <a className="flex-shrink-0 group relative z-[101]" href="https://discovercyclades.gr/en" target="_blank" rel="noopener noreferrer">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                    <div className="relative transition-transform duration-500 group-hover:-translate-y-1">
                      <div className="flex items-center gap-1.5">
                        <img alt="Discover Cyclades" loading="lazy" width="24" height="24" decoding="async" className="text-blue-600" src="https://discovercyclades.gr/favicon.svg" />
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-bold leading-tight bg-gradient-to-r from-[#1E2E48] to-[#E3D7C3] bg-clip-text text-transparent">Discover Cyclades</span>
                          <div className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-cyan-600" aria-hidden="true">
                              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                              <path d="M20 2v4"></path>
                              <path d="M22 4h-4"></path>
                              <circle cx="4" cy="20" r="2"></circle>
                            </svg>
                            <span className="text-[9px] tracking-wider uppercase font-medium text-gray-500 block">PARTNER</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Centered Credits and Legal Info */}
          <div className="text-center space-y-3 pt-6 border-t border-villa-olive/10">
            <p className="text-xs text-muted-foreground">
              {t('footer.photoCredit')}:
              <a
                href="https://www.instagram.com/vivikofinaki/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-medium text-villa-olive hover:text-villa-olive-dark transition-colors hover:underline"
              >
                Vivi Kofinaki
              </a>
            </p>
            <p className="text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('footer.registryInfo')} (MHTE: 1172K92001077301CRBAGRAA).
            </p>
          </div>
        </div>
      </div>
    
      <p data-asg-copyright="notice" style={{ maxWidth: "80rem", margin: "1rem auto 0", padding: "0 1rem 1rem", fontSize: "0.75rem", lineHeight: 1.6 }}>
        <a href="/intellectual-property.html" style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "0.2em" }}>Code &amp; development: AnotherSEOGuru, a company of Touristas Technologies. Copyright &amp; permitted use.</a>
      </p>
    </footer>
  );
};

export default Footer;
