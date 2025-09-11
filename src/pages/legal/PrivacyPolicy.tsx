import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
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
            <li className="text-villa-olive font-medium">Privacy Policy</li>
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
            <Shield className="text-villa-olive" size={32} />
            <h1 className="text-4xl font-display font-bold text-villa-olive">Privacy Policy</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            This privacy notice for Philippou Eleni & Co L.P. (doing business as Villa Olivia Clara) describes how and why we might collect, store, use, and/or share ("process") your information when you use our services.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Last Updated:</strong> January 15, 2025
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at elena@villaoliviaclara.com.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To manage the cookies and similar technologies used (tracking pixels, web beacons, etc.) and related consents, we use the consent tool "Real Cookie Banner". Details on how "Real Cookie Banner" works can be found at <a href="https://devowl.io/rcb/data-processing" className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">https://devowl.io/rcb/data-processing</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The legal basis for the processing of personal data in this context are Art. 6 (1) (c) GDPR and Art. 6 (1) (f) GDPR. Our legitimate interest is the management of the cookies and similar technologies used and the related consents.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The provision of personal data is neither contractually required nor necessary for the conclusion of a contract. You are not obliged to provide the personal data. If you do not provide the personal data, we will not be able to manage your consents.
            </p>
          </section>

          {/* Summary of Key Points */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Summary of Key Points</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-villa-olive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Villa Olivia Clara and the Services, the choices you make, and the products and features you use.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-villa-olive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground"><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-villa-olive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground"><strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-villa-olive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-villa-olive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground"><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-villa-olive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground"><strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-villa-olive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-villa-olive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground"><strong>How do I exercise my rights?</strong> The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us.</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Want to learn more about what Villa Olivia Clara does with any information we collect? Click here to review the notice in full.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="space-y-1">
                <p>• Summary of Key Points</p>
                <p>• What Information Do We Collect?</p>
                <p>• How Do We Process Your Information?</p>
                <p>• What Legal Bases Do We Rely On To Process Your Information?</p>
                <p>• When And With Whom Do We Share Your Personal Information?</p>
                <p>• Do We Use Cookies And Other Tracking Technologies?</p>
                <p>• How Long Do We Keep Your Information?</p>
                <p>• Do We Keep Your Information Safe?</p>
                <p>• Do We Collect Information From Minors?</p>
                <p>• What Are Your Privacy Rights?</p>
                <p>• Controls For Do-Not-Track Features</p>
                <p>• Do California Residents Have Specific Privacy Rights?</p>
                <p>• CCPA Privacy Notice</p>
                <p>• Do We Make Updates To This Notice?</p>
                <p>• How Can You Contact Us About This Notice?</p>
                <p>• How Can You Review, Update, Or Delete The Data We Collect From You?</p>
              </div>
            </div>
          </section>

          {/* What Information Do We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">What Information Do We Collect?</h2>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Personal information you disclose to us</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> We collect personal information that you provide to us.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">Personal Information Provided by You</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
              <li>• names</li>
              <li>• phone numbers</li>
              <li>• email addresses</li>
              <li>• bank account information</li>
              <li>• contact preferences</li>
              <li>• debit/credit card numbers</li>
              <li>• billing addresses</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Sensitive Information.</strong> We do not process sensitive information.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Stripe. You may find their privacy notice link(s) here: <a href="https://stripe.com/privacy" className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
            </p>
          </section>

          {/* Information automatically collected */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-villa-olive mb-3">Information automatically collected</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Like many businesses, we also collect information through cookies and similar technologies.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The information we collect includes:
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">Log and Usage Data</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">Device Data</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">Location Data</h4>
            <p className="text-muted-foreground leading-relaxed">
              We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
            </p>
          </section>

          {/* How Do We Process Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">How Do We Process Your Information?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
              <li>• To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.</li>
              <li>• To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
              <li>• To fulfill and manage your orders. We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
              <li>• To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
            </ul>
          </section>

          {/* Legal Bases */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">What Legal Bases Do We Rely On To Process Your Information?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">If you are located in the EU or UK, this section applies to you.</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
            </p>
            <ul className="text-muted-foreground space-y-2 mb-4 ml-6">
              <li>• <strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
              <li>• <strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
              <li>• <strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
              <li>• <strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
            </ul>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">If you are located in Canada, this section applies to you.</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example: If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way, For investigations and fraud detection and prevention, For business transactions provided certain conditions are met, If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim, For identifying injured, ill, or deceased persons and communicating with next of kin, If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse, If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province, If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records, If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced, If the collection is solely for journalistic, artistic, or literary purposes, If the information is publicly available and is specified by the regulations.
            </p>
          </section>

          {/* When And With Whom Do We Share Your Personal Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">When And With Whom Do We Share Your Personal Information?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We may need to share your personal information in the following situations: Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Do We Use Cookies And Other Tracking Technologies?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
            </p>
          </section>

          {/* How Long Do We Keep Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">How Long Do We Keep Your Information?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
            </p>
          </section>

          {/* Do We Keep Your Information Safe */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Do We Keep Your Information Safe?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
            </p>
          </section>

          {/* Do We Collect Information From Minors */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Do We Collect Information From Minors?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at elena@villaoliviaclara.com.
            </p>
          </section>

          {/* What Are Your Privacy Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">What Are Your Privacy Rights?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We will consider and act upon any request in accordance with applicable data protection laws.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              If you are located in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Withdrawing your consent</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Opting out of marketing and promotional communications</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Cookies and similar technologies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit <a href="http://www.aboutads.info/choices/" className="text-villa-olive hover:underline" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              If you have questions or comments about your privacy rights, you may email us at elena@villaoliviaclara.com.
            </p>
          </section>

          {/* Controls For Do-Not-Track Features */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Controls For Do-Not-Track Features</h2>
            <p className="text-muted-foreground leading-relaxed">
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
            </p>
          </section>

          {/* Do California Residents Have Specific Privacy Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Do California Residents Have Specific Privacy Rights?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
            </p>
          </section>

          {/* CCPA Privacy Notice */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">CCPA Privacy Notice</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The California Code of Regulations defines a "resident" as:
            </p>
            <ol className="text-muted-foreground space-y-2 mb-4 ml-6">
              <li>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</li>
              <li>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All other individuals are defined as "non-residents."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">What categories of personal information do we collect?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We have collected the following categories of personal information in the past twelve (12) months:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Collected</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">A. Identifiers</td>
                    <td className="border border-gray-300 px-4 py-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                    <td className="border border-gray-300 px-4 py-2">YES</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">B. Personal information categories listed in the California Customer Records statute</td>
                    <td className="border border-gray-300 px-4 py-2">Name, contact information, education, employment, employment history, and financial information</td>
                    <td className="border border-gray-300 px-4 py-2">YES</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">C. Protected classification characteristics under California or federal law</td>
                    <td className="border border-gray-300 px-4 py-2">Gender and date of birth</td>
                    <td className="border border-gray-300 px-4 py-2">YES</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">D. Commercial information</td>
                    <td className="border border-gray-300 px-4 py-2">Transaction information, purchase history, financial details, and payment information</td>
                    <td className="border border-gray-300 px-4 py-2">YES</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">E. Biometric information</td>
                    <td className="border border-gray-300 px-4 py-2">Fingerprints and voiceprints</td>
                    <td className="border border-gray-300 px-4 py-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">F. Internet or other similar network activity</td>
                    <td className="border border-gray-300 px-4 py-2">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                    <td className="border border-gray-300 px-4 py-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">G. Geolocation data</td>
                    <td className="border border-gray-300 px-4 py-2">Device location</td>
                    <td className="border border-gray-300 px-4 py-2">YES</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                    <td className="border border-gray-300 px-4 py-2">Images and audio, video or call recordings created in connection with our business activities</td>
                    <td className="border border-gray-300 px-4 py-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">I. Professional or employment-related information</td>
                    <td className="border border-gray-300 px-4 py-2">Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                    <td className="border border-gray-300 px-4 py-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">J. Education Information</td>
                    <td className="border border-gray-300 px-4 py-2">Student records and directory information</td>
                    <td className="border border-gray-300 px-4 py-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">K. Inferences drawn from other personal information</td>
                    <td className="border border-gray-300 px-4 py-2">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                    <td className="border border-gray-300 px-4 py-2">NO</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of: Receiving help through our customer support channels; Participation in customer surveys or contests; and Facilitation in the delivery of our Services and to respond to your inquiries.
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">How do we use and share your personal information?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              More information about our data collection and sharing practices can be found in this privacy notice.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              You may contact us by email at elena@villaoliviaclara.com, or by referring to the contact details at the bottom of this document.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
            </p>

            <h3 className="text-xl font-semibold text-villa-olive mb-3">Will your information be shared with anyone else?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Villa Olivia Clara has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Villa Olivia Clara will not sell personal information in the future belonging to website visitors, users, and other consumers.
            </p>
          </section>

          {/* Your rights with respect to your personal data */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-villa-olive mb-3">Your rights with respect to your personal data</h3>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">Right to request deletion of the data — Request to delete</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">Right to be informed — Request to know</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on the circumstances, you have a right to know: whether we collect and use your personal information; the categories of personal information that we collect; the purposes for which the collected personal information is used; whether we sell your personal information to third parties; the categories of personal information that we sold or disclosed for a business purpose; the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and the business or commercial purpose for collecting or selling personal information.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We will not discriminate against you if you exercise your privacy rights.
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">Verification process</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
            </p>

            <h4 className="text-lg font-semibold text-villa-olive mb-3">Other privacy rights</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may object to the processing of your personal information. You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information. You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA. You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, you can contact us by email at elena@villaoliviaclara.com, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
            </p>
          </section>

          {/* Do We Make Updates To This Notice */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Do We Make Updates To This Notice?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
            </p>
          </section>

          {/* How Can You Contact Us About This Notice */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">How Can You Contact Us About This Notice?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO), Elena Philippou, by email at elena@villaoliviaclara.com, by phone at +306971919382, or by post to:
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-muted-foreground">
                <strong>Elena Philippou</strong><br />
                Platis Gialos<br />
                Sifnos, South Aegean 84003<br />
                Greece
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              If you are a resident in the European Economic Area, the "data controller" of your personal information is Elena Philippou. You can contact them directly regarding the processing of your information by email at elena@villaoliviaclara.com, by visiting https://www.villaoliviaclara.com, by phone at +306971919382, or by post to:
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-muted-foreground">
                Platis Gialos<br />
                Sifnos, South Aegean 84003<br />
                Greece
              </p>
            </div>
          </section>

          {/* How Can You Review, Update, Or Delete The Data We Collect From You */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">How Can You Review, Update, Or Delete The Data We Collect From You?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Please see above for our contact information. We will be happy to assist you.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8 bg-sand-light p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-villa-olive mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For any privacy-related questions or to exercise your rights, please contact us:
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

export default PrivacyPolicy;