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
import { ShieldCheck, Zap, Droplets } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>trenchless sewer repair scottsdale az | Scottsdale Trenchless Sewer Repair Pros</title>
        <meta name="description" content="Professional trenchless sewer repair scottsdale az. Expert pipe lining, sewer replacement, and drain repair. Call (877) 792-1410 for a free estimate in Scottsdale, AZ." />
        <meta name="keywords" content="trenchless sewer repair scottsdale az, Scottsdale pipe lining, sewer repair Scottsdale, no-dig sewer repair Scottsdale, pipe bursting Arizona" />
        <link rel="canonical" href="https://trenchlesssewerrepairscottsdaleaz.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Scottsdale Trenchless Sewer Repair Pros",
            "image": "/4.jpeg",
            "@id": "https://trenchlesssewerrepairscottsdaleaz.vercel.app/",
            "url": "https://trenchlesssewerrepairscottsdaleaz.vercel.app/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7014 E Camelback Rd",
              "addressLocality": "Scottsdale",
              "addressRegion": "AZ",
              "postalCode": "85251",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.4942",
              "longitude": "-111.9261"
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
            "serviceType": "Trenchless Sewer Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Scottsdale Trenchless Sewer Repair Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Scottsdale, AZ"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Trenchless Sewer Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CIPP Pipe Lining" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pipe Bursting" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewer Camera Inspection" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hydro Jetting" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="trenchless sewer repair scottsdale az | Scottsdale Trenchless Sewer Repair Pros" />
        <meta property="og:description" content="Expert trenchless sewer repair in Scottsdale, AZ. Professional pipe lining and no-dig solutions for Scottsdale homes. Call (877) 792-1410!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trenchlesssewerrepairscottsdaleaz.vercel.app/" />
        <meta property="og:image" content="/4.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              TRENCHLESS SEWER REPAIR <br />
              <span className="text-white drop-shadow-sm uppercase">in SCOTTSDALE AZ</span>
            </>
          }
          subtitle="Scottsdale's designated specialists in professional no-dig sewer repair and pipe lining. From the luxury estates of Paradise Valley to the desert landscapes of North Scottsdale, we protect your landscaping with advanced trenchless technology."
          image="/3.jpeg"
          overlayImage="/4.jpeg"
          badge="SCOTTSDALE TRENCHLESS PROS"
          phone="(877) 792-1410"
          features={[
            { icon: ShieldCheck, text: "No-Dig Technology" },
            { icon: Zap, text: "Rapid Pipe Restoration" },
            { icon: Droplets, text: "High-Def Camera Exams" }
          ]}
        />
        <Services />
        <WhyUs />
        <TrenchlessInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Professional Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://pestcontrolbatonrouge.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Pest Control Baton Rouge</a>
              <a href="https://plumbermontellowi.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Plumber Montello WI</a>
              <a href="https://wildliferemovaldouglasvillega.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Wildlife Removal Douglasville GA</a>
              <a href="https://toxicblackmoldcleanupgulfbreeze.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Toxic Black Mold Cleanup Gulf Breeze</a>
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
