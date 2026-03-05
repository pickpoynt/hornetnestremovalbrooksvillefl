import { Droplets, Zap, Wrench, Activity, Timer } from "lucide-react";

const services = [
  {
    title: "Emergency Plumbing",
    description: "24/7 rapid response for burst pipes, major leaks, and urgent plumbing failures in Stone Oak.",
    icon: Zap
  },
  {
    title: "Drain Cleaning",
    description: "Professional high-pressure hydro-jetting and rooter services for persistent clogs and slow drains.",
    icon: Droplets
  },
  {
    title: "Water Heater Service",
    description: "Expert installation and repair of tankless and traditional water heaters for consistent hot water.",
    icon: Timer
  },
  {
    title: "Leak Detection",
    description: "Non-invasive ultrasonic leak detection to locate hidden pipe failures behind walls and under foundations.",
    icon: Activity
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20 text-nowrap text-nowrap">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-[0.2em] text-[10px] font-bold text-nowrap">
            <Wrench className="w-4 h-4" />
            Stone Oak Technical Services
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight text-nowrap uppercase">
            Master Plumbing <span className="text-indigo-600">Solutions</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed italic font-medium text-nowrap">
            Providing Stone Oak with elite plumbing maintenance and <br /> rapid corrective repairs. Professional infrastructure protection 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-nowrap">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/10 text-nowrap text-nowrap">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-8 shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform text-nowrap">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight text-nowrap">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium italic text-nowrap">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
