import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TrenchlessInfo from "@/components/landing/TrenchlessInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Droplets, Zap, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>plumber stone oak (877) 792-1410 | Stone Oak Plumbing Pros</title>
        <meta name="description" content="Professional plumber stone oak. Call (877) 792-1410. Expert residential & commercial plumbing repair, drain cleaning, and water heater service in Stone Oak, San Antonio. Free estimates." />
        <meta name="keywords" content="plumber stone oak, stone oak plumbing repair, plumbing services san antonio, drain cleaning stone oak, local plumber near me" />
        <link rel="canonical" href="https://plumberstoneoak.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Stone Oak Plumbing Pros",
            "image": "/2.jpeg",
            "@id": "https://plumberstoneoak.vercel.app/",
            "url": "https://plumberstoneoak.vercel.app/",
            "telephone": "(877) 792-1410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Stone Oak Pkwy",
              "addressLocality": "San Antonio",
              "addressRegion": "TX",
              "postalCode": "78258",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "29.6450",
              "longitude": "-98.4840"
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
            "serviceType": "Plumbing Maintenance & Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Stone Oak Plumbing Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "San Antonio"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services in Stone Oak",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Plumbing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain Cleaning & Clog Removal" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency 24/7 Plumbing" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="plumber stone oak (877) 792-1410 | Stone Oak Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing services in Stone Oak, San Antonio. Professional repair, drain cleaning, and water heater service. Call (877) 792-1410!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://plumberstoneoak.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={<>Best Local <br /><span className="text-indigo-600">Plumber Stone Oak</span></>}
          subtitle="San Antonio's most trusted elite plumbing specialists. We provide rapid, high-precision repairs for Stone Oak families and businesses. Available 24/7 for all your plumbing emergencies."
          badge="STONE OAK PLUMBING PROS"
          phone="8777921410"
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          features={[
            { icon: Droplets, text: "Advanced Leak Detection" },
            { icon: Zap, text: "Same-Day Emergency Fix" },
            { icon: Activity, text: "Full System Maintenance" }
          ]}
        />
        <Services />
        <WhyUs />
        <TrenchlessInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4 text-nowrap">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Professional Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://earwigexterminatordenver.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Earwig Exterminator Denver</a>
              <a href="https://centipederepellenthawaii.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Centipede Repellent Hawaii</a>
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Pest Control South Point Ohio</a>
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Rodent Control Corvallis Oregon</a>
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
