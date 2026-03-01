import { ShieldCheck, Drill, Search, Clock, Zap, Hammer, Bug, Home, Shield, Activity, Target, Waves } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Cast Iron Pipe Inspection",
    description: "Our Boonton specialists provide professional sewer camera inspections to identify cracks, corrosion, and root intrusion in your Morrison County property's integrity."
  },
  {
    icon: Drill,
    title: "Sewer Line Replacement",
    description: "We deploy advanced excavation and trenchless techniques to replace failing cast iron sewer lines in your Boonton home permanently."
  },
  {
    icon: Waves,
    title: "Whole House Repiping",
    description: "Cast iron drains require expert attention. We offer comprehensive repiping across the Boonton area to eliminate backups and protect your home."
  },
  {
    icon: Shield,
    title: "Old Pipe Upgrades",
    description: "Long-term solutions allow us to replace brittle cast iron with modern PVC or HDPE without ever compromising the safety of your living space."
  },
  {
    icon: Target,
    title: "Copper/PEX Transitions",
    description: "Professional-grade water line transitions remove scale and prevent leaks, prepping your home for a leak-free environment in the heart of Boonton."
  },
  {
    icon: Activity,
    title: "Leak Diagnostics",
    description: "Minimize risk with our specialized residential-grade leak detection solutions for Boonton homes and basements."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600 border-b-4 border-indigo-600/20">cast iron pipe replacement boonton</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            Specialized pipe removal and replacement solutions designed for Boonton's unique residential architecture. We protect your New Jersey home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm italic">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
