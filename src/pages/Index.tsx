import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WildlifeRemovalInfo from "@/components/landing/WildlifeRemovalInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>wildlife removal gastonia nc | Gastonia Wildlife Removal Pros</title>
        <meta name="description" content="Looking for professional wildlife removal gastonia nc? Specialist animal control, damage repair, and humane exclusion services for Gastonia properties. Call 3238801224 today!" />
        <meta name="keywords" content="wildlife removal gastonia nc, Gastonia animal control, raccoon removal Gastonia, squirrel removal Gastonia NC, pest control Gastonia" />
        <link rel="canonical" href="https://wildliferemovalgastonianc.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Gastonia Wildlife Removal Pros",
            "image": "/1.jpeg",
            "@id": "https://wildliferemovalgastonianc.vercel.app/",
            "url": "https://wildliferemovalgastonianc.vercel.app/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main St",
              "addressLocality": "Gastonia",
              "addressRegion": "NC",
              "postalCode": "28052",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.2621",
              "longitude": "-81.1873"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Wildlife Removal & Animal Control",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gastonia Wildlife Removal Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Gastonia, NC"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Wildlife Control Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Raccoon Removal" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Squirrel Exclusion" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Attic Restoration" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dead Animal Removal" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="wildlife removal gastonia nc | Gastonia Wildlife Removal Pros" />
        <meta property="og:description" content="Expert wildlife removal services in Gastonia, NC. Protect your home and family with professional trapping and humane exclusion." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wildliferemovalgastonianc.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Wildlife <br />
              <span className="text-white drop-shadow-sm uppercase">Removal in Gastonia NC</span>
            </>
          }
          subtitle="Gastonia's premier specialists in professional wildlife removal. We provide advanced trapping, humane exclusion techniques, and comprehensive property protection to keep your home animal-free. Dedicated to Gastonia's safety and peace of mind. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="GASTONIA WILDLIFE REMOVAL PROS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <WildlifeRemovalInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Local Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://earwigexterminatordenver.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Earwig Exterminator Denver</a>
              <a href="https://centipederepellenthawaii.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Centipede Repellent Hawaii</a>
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Pest Control South Point Ohio</a>
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Rodent Control Corvallis Oregon</a>
            </div>
          </div>
        </section>

        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;






