import { ShieldCheck, Zap, Droplets, MapPin, Search, Hammer, Clock, Wrench, Home, Target, Activity } from "lucide-react";

const TrenchlessInfo = () => {
    const knowledgeItems = [
        {
            icon: Search,
            title: "Corrosion & Scaling",
            desc: "Why understanding cast iron is essential: These pipes corrode from the inside out, creating scales that snag debris and lead to chronic Boonton basement backups."
        },
        {
            icon: Target,
            title: "Channeling & Cracks",
            desc: "Understanding pipe failure: Over decades, the bottom of cast iron pipes can wear away completely (channeling), allowing sewage to erode the soil beneath your Boonton home."
        },
        {
            icon: ShieldCheck,
            title: "Modern Polymer Liners",
            desc: "How we seal out leaks: Our specialized epoxy liners create a pipe-within-a-pipe, sealing cracks and preventing root intrusion without the mess of Boonton yard excavation."
        },
        {
            icon: MapPin,
            title: "Boonton Infrastructure Experts",
            desc: "Navigating local plumbing hotspot: From historic main streets to hillside NJ developments, we handle cast iron failures of all sizes in Boonton."
        },
        {
            icon: Clock,
            title: "Rapid Replumb Cycles",
            desc: "Managing replacement in NJ winter: We use specialized bypass systems that maintain your home's functionality even during a full Boonton cast iron swap."
        },
        {
            icon: Activity,
            title: "Pipe Health Certification",
            desc: "Verification via expert scope: We provide thorough video documentation before and after replacement so you can be sure your Boonton property is protected."
        }
    ];

    return (
        <div className="bg-white py-24">
            <div className="container mx-auto px-4">
                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
                            <MapPin className="w-4 h-4" />
                            Boonton Service Excellence
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight uppercase tracking-tight">
                            Leading <span className="text-indigo-600">cast iron pipe replacement boonton</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                            <p>
                                In the historic neighborhoods of Boonton, New Jersey, aging cast iron plumbing often reaches its breaking point. Our targeted pipe replacement technology eliminates these dangerous failures, providing a secure solution for Morris County's most prestigious properties.
                            </p>
                            <p>
                                Whether you're dealing with a single sluggish drain or a complete sewer collapse, our specialized epoxy residues and pipe-bursting methods offer a permanent fix without the worry of recurring backups in Boonton.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-sm">Boonton Area Ready</h4>
                                    <p className="text-xs text-slate-500">Specialized equipment for NJ Homes</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <Zap className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-sm">48-Hour Replacement</h4>
                                    <p className="text-xs text-slate-500">Rapid response across Boonton</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl opacity-30" />
                        <img
                            src="/3.jpeg"
                            alt="Cast Iron Pipe Replacement in Boonton"
                            className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-square"
                        />
                    </div>
                </div>

                {/* Knowledge Base Section */}
                <div id="knowledge-base" className="pt-24 border-t border-slate-100">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Repiping <span className="text-indigo-600">Expertise Center</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium italic">
                            Critical information for Boonton homeowners exploring cast iron pipe replacement options.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {knowledgeItems.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 bg-slate-900 rounded-[3rem] p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight">Need a Repiping Consultation?</h3>
                                <p className="text-slate-400 font-medium italic">Our Boonton technicians provide expert inspections and written replacement plans.</p>
                            </div>
                            <a
                                href="tel:8777921410"
                                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-indigo-600 hover:text-white transition-all shadow-xl"
                            >
                                (877) 792-1410
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrenchlessInfo;
