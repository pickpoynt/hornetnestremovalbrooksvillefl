import { ShieldCheck, Clock, Award, Hammer } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "No-Dig Efficiency",
    description: "Why dig up your Scottsdale hardscaping? Our trenchless methods restore your pipes from the inside, saving time and money."
  },
  {
    icon: Hammer,
    title: "Next-Gen Materials",
    description: "From epoxy resins to HDPE piping, we use industrial-grade materials that resist corrosion and root intrusion for decades."
  },
  {
    icon: Award,
    title: "Maricopa County Certified",
    description: "Fully licensed and insured specifically for trenchless sewer restoration in Arizona. Your luxury property is in expert hands."
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Pipe Guarantee",
    description: "We don't consider the job complete until your flow is 100% restored. We stand by our pipe lining and bursting work for life."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Premium <span className="text-indigo-600 border-b-4 border-indigo-600/20">Trenchless</span> <br />
            Experts in Scottsdale AZ
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Providing Scottsdale and the surrounding Paradise Valley communities with specialized, no-dig sewer repair and property protection services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative text-center">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
            <img
              src="/1.jpeg"
              alt="Professional Trenchless Sewer Repair in Scottsdale AZ"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white mx-auto"
            />
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl z-20 border border-indigo-500 max-w-[240px]">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest leading-tight">No-Dig Guarantee in Scottsdale</p>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Preserve Your Landscaping",
                desc: "Our trenchless technology eliminates the need for massive excavation, keeping your desert landscaping and pool decks perfectly intact."
              },
              {
                title: "Desert Soil Expertise",
                desc: "We understand how Scottsdale's unique caliche and expanding soils create specific challenges for buried sewer infrastructure."
              },
              {
                title: "Accelerated Service",
                desc: "Our technicians implement rapid-cure resins and specialized pull-systems, ensuring that your lines are back in service in hours, not days."
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
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 text-center sm:text-left">Ready to fix your sewer?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none text-center sm:text-left">Call Scottsdale's Best</h4>
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
