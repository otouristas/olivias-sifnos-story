import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Cookie, Settings, BarChart, Shield, Mail, Phone } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50"
      >
        Skip to content
      </a>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-villa-olive transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-villa-olive font-medium">Cookie Policy</li>
          </ol>
        </nav>

        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="villa-ghost" size="sm">
            <Link to="/">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12" id="main-content">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">Cookie Policy</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            With this cookie policy, we would like to explain what cookies and cookie-like technologies are, how we and other service provider use them on this website, what information they collect, for how long and for what purposes we use them.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Last Updated:</strong> January 15, 2025
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Table of Contents */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="space-y-1">
                <p>• Controller of the website</p>
                <p>• Addition to the privacy policy</p>
                <p>• What are cookies and similar technologies?</p>
                <p>• What is the legal basis for setting/reading cookies?</p>
                <p>• What rights does the website visitor have?</p>
                <p>• How to manage cookies in a browser?</p>
                <p>• What types of cookies exist?</p>
                <p>• Who can set cookies on this website?</p>
                <p>• Which cookies are used on this website?</p>
              </div>
            </div>
          </section>

          {/* Controller of the website */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Controller of the Website</h2>
            <div className="bg-sand-light p-6 rounded-lg">
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Provider:</strong> Philippou Eleni & Co EE, Greece
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Email:</strong> elena@villaoliviaclara.com
              </p>
            </div>
          </section>

          {/* Addition to the privacy policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Addition to the Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              This cookie policy is a supplement to this website's privacy policy. The cookie policy specifies how a website uses cookies and what data it collects through them, while the privacy policy is a more comprehensive overview of all data processing activities on the website and beyond.
            </p>
          </section>

          {/* What are cookies and similar technologies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">What Are Cookies and Similar Technologies?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies are small pieces of information similar to text files that can be stored and read on the end device. They serve various purposes, including maintaining basic functionalities of the website, security and privacy, providing optional functions of the website, collecting statistic data on visitor flows and providing marketing systems. Practical examples of what can be stored in cookies are the storage of login status in user accounts, the content of shopping baskets in e-commerce platforms, or a user ID for tracking behavior on the website.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The information can technically be stored in various ways. The best-known examples of this are HTTP cookies and cookie-like technologies like local storage, session storage or IndexedDB. Each type of storage has different properties, which determine the technical handling, accessibility and controllers authorized to access the information. All these types of storage are usually summarized under the term "cookies" and are therefore called as such in this cookie policy.
            </p>
          </section>

          {/* Legal basis */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">What Is the Legal Basis for Setting/Reading Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              The setting and reading of cookies in the European Union (EU) and the European Economic Area (EEA) is in accordance with Art. 5 (3) ePrivacy Directive and Recital 66 ePrivacy Directive only permitted if a user has given his consent on the basis of comprehensive information about the purposes of the processing. The website operator may also set cookies if they are strictly necessary to provide you as a user with the expressly requested service, e.g. the basic content of this website or other strictly necessary cookies for basic functionality of the website to be displayed to you without your consent.
            </p>
          </section>

          {/* Rights of website visitor */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">What Rights Does the Website Visitor Have?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Services and their cookies can be set and read on the legal basis of your consent or a legitimate interest. When you first visited this website, you were asked for your consent and you had the opportunity to object to the use of certain services. We explained which legal basis is used for which service in our consent dialog.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to view the history of your decisions, change your privacy settings, object to the use of services and revoke your consent at any time. Below you find possibilities to exercise your rights:
            </p>
            <div className="space-y-2 mb-4">
              <Button asChild variant="villa-outline" size="sm">
                <a href="#" className="text-villa-olive hover:underline">Change privacy settings</a>
              </Button>
              <Button asChild variant="villa-outline" size="sm" className="ml-2">
                <a href="#" className="text-villa-olive hover:underline">Privacy settings history</a>
              </Button>
              <Button asChild variant="villa-outline" size="sm" className="ml-2">
                <a href="#" className="text-villa-olive hover:underline">Revoke consents</a>
              </Button>
            </div>
          </section>

          {/* How to manage cookies in browser */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">How to Manage Cookies in a Browser?</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-villa-olive mb-3">How to remove cookies in a browser:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To remove cookies from your device, you can clear the browsing data in the settings of your browser. This action will remove all cookies from all websites you've visited, potentially including saved login details and site preferences. In some browsers, you can just delete the cookies and similar data without deleting the whole browsing history.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-villa-olive mb-3">How to control cookies in a browser:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For more granular control over cookies specific to certain websites, navigate to the privacy and cookie settings within your used browser. Here, you can adjust preferences related to individual sites' cookie usage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-villa-olive mb-3">How to block cookies in a browser:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  It's possible to configure most modern browsers in their settings to block all cookies from being placed on your device. But blocking cookies could lead to certain services and functionalities not functioning correctly, e.g. logins as a user. You can also use extensions for many browsers which can block the setting of cookies on websites.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-villa-olive mb-3">How to manage cookies on this website:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To tailor your preferences regarding cookies on this website, you can change your preferences at any time by clicking on the link in the section "Rights of the website visitor".
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-4">
              You can find more information on the handling of cookies <a href="https://devowl.io/rcb/cookie-handling/" className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">devowl.io/rcb/cookie-handling/</a>.
            </p>
          </section>

          {/* Types of cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">What Types of Cookies Exist?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <Shield className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">Essential Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Essential cookies are indispensable for the basic functionality of a website and enable functions such as saving login information or access to secure areas of the site. These include, for example, security cookies, which can identify a bot that is not wanted on the website by storing an authentication key in a cookie.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <Settings className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">Functional Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Functional cookies improve the user experience by storing information and preferences such as language settings or appearance settings of the website to provide personalized. This includes, for example, preference cookies that store the user's preferred video quality on a website.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <BarChart className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">Statistics Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Statistics cookies collect data about the use of a website to gain insights into user behavior and optimize the performance of the site. This includes, for example, a randomly assigned user ID that makes it possible to attribute whether you have visited a subpage of the website.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-villa-stone shadow-soft">
                <CardContent className="p-6">
                  <Cookie className="text-villa-olive mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-villa-olive mb-3">Marketing Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Marketing cookies are used to track user behavior across different websites and to display personalized advertising based on the interests and surfing behavior of users. This includes, for example, advertising cookies that store an interaction with an advertisement on the website and pass it on to advertisers or a chat system for pre-sale questions and customer support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Who can set cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Who Can Set Cookies on This Website?</h2>
            <p className="text-muted-foreground leading-relaxed">
              On this website, both the operator of the website and third-party services which are used on this website may set cookies and access its content. Who can access which cookies and their content differs between first-party and third-party cookies. First-party cookies are created by the visited website and can only be read by the website operator and integrated third-party services on this website. Third-party cookies are set by usually third-party services on other domains, can be read on all websites on which the service that controls the domain is embedded and, for example, used by advertising networks to track user behavior across different websites and offer personalized advertising.
            </p>
          </section>

          {/* Which cookies are used */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Which Cookies Are Used on This Website?</h2>
            
            <div className="overflow-x-auto mb-4">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Domain</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Provider</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Marketing</td>
                    <td className="border border-gray-300 px-4 py-2">analytics_storage</td>
                    <td className="border border-gray-300 px-4 py-2">villaoliviaclara.com</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                    <td className="border border-gray-300 px-4 py-2">HTTP Cookie</td>
                    <td className="border border-gray-300 px-4 py-2">The analytics_storage parameter indicates if cookie data can be collected for behavioral analytics purposes (other modeling prerequisites apply).</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Marketing</td>
                    <td className="border border-gray-300 px-4 py-2">ad_storage</td>
                    <td className="border border-gray-300 px-4 py-2">villaoliviaclara.com</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">24 hours</td>
                    <td className="border border-gray-300 px-4 py-2">HTTP Cookie</td>
                    <td className="border border-gray-300 px-4 py-2">The ad_storage parameter indicates if cookie data can be collected for advertising purposes.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Marketing</td>
                    <td className="border border-gray-300 px-4 py-2">ad_user_data</td>
                    <td className="border border-gray-300 px-4 py-2">villaoliviaclara.com</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">1 minute</td>
                    <td className="border border-gray-300 px-4 py-2">HTTP Cookie</td>
                    <td className="border border-gray-300 px-4 py-2">The ad_user_data parameter indicates if user data can be collected for advertising and ads measurement purposes.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Marketing</td>
                    <td className="border border-gray-300 px-4 py-2">ad_personalization</td>
                    <td className="border border-gray-300 px-4 py-2">villaoliviaclara.com</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                    <td className="border border-gray-300 px-4 py-2">HTTP Cookie</td>
                    <td className="border border-gray-300 px-4 py-2">The ad_personalization parameter indicates if the user can be included in audiences exported to linked ads accounts.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8 bg-sand-light p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For any questions about this cookie policy or our data practices, please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-villa-olive" size={20} />
                <span className="text-muted-foreground">elena@villaoliviaclara.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-villa-olive" size={20} />
                <span className="text-muted-foreground">+30 697 191 9382</span>
              </div>
              <div className="text-muted-foreground">
                <strong>Villa Olivia Clara</strong><br />
                Platis Gialos, 84003<br />
                Sifnos, Cyclades, Greece
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;