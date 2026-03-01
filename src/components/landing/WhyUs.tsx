import { ShieldCheck, Clock, Award, Hammer, Wrench, Shield, Search, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Hammer,
    title: "Morrison County Certified",
    description: "Fully licensed and insured specifically for residential plumbing and pipe replacement in New Jersey. Your Boonton home is in expert hands."
  },
  {
    icon: Zap,
    title: "Advanced Repiping",
    description: "From specialized trenchless liners to complete house repiping, we use industrial-grade materials that provide a multi-decade barrier against leaks."
  },
  {
    icon: Shield,
    title: "Clean Execution Guarantee",
    description: "We protect your historic Boonton flooring and landscaping. Our team treats your property with the utmost respect throughout the project."
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Protection",
    description: "We don't consider the job complete until your plumbing is 100% leak-free. We stand by our replacement and installation work for life."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Premium <span className="text-indigo-600 border-b-4 border-indigo-600/20">Cast Iron</span> <br />
            Experts in Boonton NJ
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Providing Boonton and the surrounding New Jersey communities with specialized, targeted cast iron pipe replacement and home protection services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative text-center">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
            <img
              src="/2.jpeg"
              alt="Professional Cast Iron Pipe Replacement in Boonton NJ"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white mx-auto"
            />
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl z-20 border border-indigo-500 max-w-[240px]">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest leading-tight">Leak-Free Guarantee in Boonton</p>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Safe Home Protection",
                desc: "Our targeted technology eliminates the need for massive excavation, keeping your historic Boonton architecture perfectly safe."
              },
              {
                title: "NJ Climate Expertise",
                desc: "We understand how New Jersey's freeze-thaw cycles and aging infrastructure create specific challenges for cast iron plumbing management."
              },
              {
                title: "Accelerated Service",
                desc: "Our technicians implement rapid-action pipe bursting and specialized detection systems, ensuring that your home is secure in days."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xl border border-slate-100 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 text-center sm:text-left">Ready to fix your home?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none text-center sm:text-left">Call Boonton's Best</h4>
                </div>
                <a
                  href="tel:8777921410"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 inline-flex items-center justify-center w-full sm:w-auto text-nowrap"
                >
                  (877) 792-1410
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
