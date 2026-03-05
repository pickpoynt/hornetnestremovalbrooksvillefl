const links = [
  { text: "Emergency Tree Service Dallas", url: "https://emergencytreeservicedallas.vercel.app/" },
  { text: "Cast Iron Pipe Replacement Akron", url: "https://castironpipereplacementakron.vercel.app/" },
  { text: "Galvanized Pipe Replacement Akron", url: "https://galvanizedpipereplacementakron.vercel.app/" },
  { text: "Slab Leak Repair Boonton NJ", url: "https://slableakrepairboontonnj.vercel.app/" },
  { text: "Cast Iron Pipe Replacement Boonton", url: "https://castironpipereplacementboonton.vercel.app/" },
  { text: "Polybutylene Pipe Replacement Boonton", url: "https://polybutylenepipereplacementboonton.vercel.app/" },
  { text: "Emergency Plumber Boonton NJ", url: "https://emergencyplumberboontonnj.vercel.app/" }
];

const RandomLinks = () => {
  // Get 4 random links
  const randomLinks = [...links].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 text-center">Industry Partners & Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {randomLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="group p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-center"
            >
              <span className="text-sm font-bold text-slate-600 group-hover:text-indigo-600 transition-colors uppercase tracking-tight text-nowrap">
                {link.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
