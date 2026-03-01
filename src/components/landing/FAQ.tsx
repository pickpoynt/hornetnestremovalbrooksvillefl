import { HelpCircle, Search, ShieldCheck, Zap, Droplets, Clock, Hammer, Award, Info, CheckCircle, AlertCircle, TrendingUp, DollarSign, Home, Waves, Activity, Wrench, FileText, Scissors, Target, LucideIcon } from "lucide-react";

const faqs = [
  {
    icon: HelpCircle,
    question: "How much does it cost to replace cast iron pipes?",
    answer: "Costs typically range from $15,000 to $30,000 for a whole-house replacement, depending on home size and access in Boonton."
  },
  {
    icon: ShieldCheck,
    question: "Does homeowners insurance cover replacing cast iron pipes?",
    answer: "Generally, no. Insurance covers sudden water damage but rarely the cost of replacing old, worn-out cast iron pipes themselves."
  },
  {
    icon: DollarSign,
    question: "How much will a plumber charge to replace a pipe?",
    answer: "Boonton plumbers usually charge between $150 and $400 per linear foot for cast iron replacement, depending on the pipe's location and depth."
  },
  {
    icon: Info,
    question: "Can you still get cast iron pipes?",
    answer: "Yes, cast iron is still used in high-end projects and commercial buildings for its quiet operation, but PVC and PEX are standard for modern residential replacements."
  },
  {
    icon: FileText,
    question: "Can you sell a house with cast iron pipes?",
    answer: "Yes, but many Boonton buyers will request a sewer scope, and aging pipes can often complicate financing or property insurance."
  },
  {
    icon: Clock,
    question: "What is the life expectancy of cast iron pipes?",
    answer: "Cast iron pipes are generally rated for a 50 to 75-year lifespan. Most Boonton homes built before 1970 are now at high risk of failure."
  },
  {
    icon: AlertCircle,
    question: "Why do insurance companies not like cast iron plumbing?",
    answer: "Insurers view cast iron as a high-risk liability due to frequent leaks, collapses, and expensive water damage claims in older NJ homes."
  },
  {
    icon: Hammer,
    question: "Should I replace old cast iron pipes?",
    answer: "If you experience frequent backups, slow drains, or sewer smells, it is highly recommended to replace them before a major collapse occurs."
  },
  {
    icon: TrendingUp,
    question: "Is it cheaper to replace or repair pipes?",
    answer: "Repairs are cheaper upfront, but repeated fixes for failing cast iron quickly exceed the cost of a one-time permanent replacement."
  },
  {
    icon: Home,
    question: "How much does it cost to repipe a 2500 square foot house?",
    answer: "In Boonton, a full repipe for a 2,500 sq ft home typically ranges from $12,000 to $25,000 depending on the number of fixtures and floor plan."
  },
  {
    icon: ShieldCheck,
    question: "Do most homeowners insurance cover broken water pipes?",
    answer: "They usually cover the damage caused by the break, but not the repair or replacement of the pipe itself unless you have a specific rider."
  },
  {
    icon: Clock,
    question: "What year did plumbers stop using cast iron pipes?",
    answer: "Residential use of cast iron mostly ended in the mid-1970s as PVC became the industry standard for Boonton area construction."
  },
  {
    icon: AlertCircle,
    question: "What is the most expensive plumbing issue?",
    answer: "A main sewer line collapse under a slab foundation is consistently ranked as one of the most expensive and invasive repairs."
  },
  {
    icon: Clock,
    question: "How long does it take to replace cast iron pipes?",
    answer: "A full house repipe typically takes 3 to 7 days, depending on the complexity and size of your Boonton property."
  },
  {
    icon: ShieldCheck,
    question: "Will homeowners insurance cover cast iron pipe replacement?",
    answer: "Unless the failure was sudden and accidental (and not due to age), most standard policies will not pay for the replacement."
  },
  {
    icon: Search,
    question: "How to tell if cast iron pipe needs to be replaced?",
    answer: "Signs include persistent slow drains, sewage odors, rust spots on exposed pipes, frequent backups, and lush patches in the yard."
  },
  {
    icon: Droplets,
    question: "What is the healthiest pipe for drinking water?",
    answer: "Copper and PEX are currently considered the best options for modern residential water delivery in New Jersey."
  },
  {
    icon: TrendingUp,
    question: "What decreases property value the most?",
    answer: "Major structural issues and outdated infrastructure, including failing cast iron plumbing, can significantly decrease a property's market value."
  },
  {
    icon: Hammer,
    question: "What not to fix before selling your house?",
    answer: "Cosmetic issues are often left for buyers, but major functional systems like failing plumbing are usually mandatory fixes in Boonton."
  },
  {
    icon: AlertCircle,
    question: "What is the most common reason a property fails to sell?",
    answer: "Failed inspections—often due to aging roofs or deteriorating cast iron sewer lines—are the primary cause of deal cancellations."
  },
  {
    icon: DollarSign,
    question: "How much to replumb a 2000 square foot house?",
    answer: "Expect to pay $8,000 to $18,000 for a full repiping of a 2,000 sq ft home in the Boonton area."
  },
  {
    icon: DollarSign,
    question: "What does it cost to replace cast iron pipes?",
    answer: "For specific sections, expect $300-$600 per linear foot. Full house replacement projects are quoted by custom assessment."
  },
  {
    icon: Info,
    question: "Is cast iron 100% steel?",
    answer: "No, cast iron contains 2-4% carbon and other alloys, making it more brittle than steel but more resistant to certain types of corrosion."
  }
];


const FAQCard = ({ icon: Icon, question, answer }: { icon: LucideIcon, question: string, answer: string }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-indigo-200 transition-all group h-full">
    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight leading-tight">{question}</h3>
    <p className="text-slate-500 leading-relaxed text-sm font-medium italic">{answer}</p>
  </div>
);

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
            Expert Knowledge Base
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Boonton <span className="text-indigo-600">Repiping FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Everything you need to know about Boonton cast iron pipe replacement. Have more questions? Call our experts at (877) 792-1410.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
