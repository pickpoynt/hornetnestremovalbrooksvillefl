import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "What do local plumbers charge per hour?",
    answer: "In the Stone Oak area, local master plumbers typically charge between $75 and $150 per hour, depending on the complexity of the task and the equipment required. Emergency after-hours calls may carry a higher rate."
  },
  {
    question: "How much should a plumber charge an hour?",
    answer: "A fair hourly rate for a licensed and insured plumber generally ranges from $85 to $125. This rate covers their technical expertise, specialized tools, and insurance to protect your property."
  },
  {
    question: "What is the 135 rule in plumbing?",
    answer: "The 135 rule is a common guideline for pipe sizing and drainage. It refers to specific slope and diameter ratios used to ensure proper waste flow and prevent clogs in residential plumbing systems."
  },
  {
    question: "Are you supposed to tip a plumber?",
    answer: "Tipping is not required or expected in the plumbing industry. However, if a technician provides exceptional service or handles a particularly difficult emergency, a small tip or a positive online review is always appreciated."
  },
  {
    question: "What are the signs of a good plumber?",
    answer: "A good plumber is licensed, insured, arrives on time, provides a clear upfront estimate, and uses professional-grade tools. They should also explain the issue clearly and offer long-term solutions, not just quick fixes."
  },
  {
    question: "How do I negotiate plumber rates?",
    answer: "While standard rates are often fixed, you can negotiate by bundling multiple small repairs into one visit, asking about seasonal specials, or requesting a discount for repeat business or referrals."
  },
  {
    question: "What is the average cost to unclog a drain?",
    answer: "Unclogging a standard drain typically costs between $150 and $350. The price varies based on the severity of the blockage and whether professional hydro-jetting or specialized rooter equipment is needed."
  },
  {
    question: "Is it normal for a plumber to charge for a quote?",
    answer: "Many reputable plumbing firms charge a small dispatch or diagnostic fee to cover the time and travel of a technician. This fee is often waived or applied toward the total cost if you choose to proceed with the repair."
  },
  {
    question: "Is it cheaper to DIY or hire a plumber?",
    answer: "For minor issues like a loose faucet handle, DIY can save money. However, for major repairs, improper installations can lead to thousands in water damage. Hiring a pro ensures the job is done right the first time and includes a warranty."
  },
  {
    question: "What are common hidden plumbing costs?",
    answer: "Common hidden costs include permits for major work, discovering underlying pipe rot once walls are opened, or the need to bring old systems up to current San Antonio building codes."
  },
  {
    question: "What is flat rate pricing for plumbing?",
    answer: "Flat rate pricing means you pay a fixed price for a specific task regardless of how long it takes. This provides the homeowner with price certainty and eliminates the worry of hourly fees adding up if a job takes longer than expected."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-nowrap">
        <div className="grid lg:grid-cols-2 gap-16 items-start text-nowrap">

          <div className="text-nowrap">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-[0.2em] text-[10px] font-bold text-nowrap">
              <HelpCircle className="w-4 h-4" />
              Expert Knowledge Base
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight text-nowrap uppercase">
              Plumbing <span className="text-indigo-600">Intelligence</span> <br />
              & Local Expert FAQ
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 italic font-medium text-nowrap">
              We believe in transparency and empowering Stone Oak <br /> residents with the knowledge they need to make <br /> informed decisions about their home's infrastructure.
            </p>

            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 text-nowrap text-nowrap">
              <div className="flex items-center gap-4 mb-6 text-nowrap text-nowrap">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-nowrap">
                  <MessageSquare className="w-6 h-6 text-indigo-600 text-nowrap" />
                </div>
                <div className="text-nowrap">
                  <h4 className="font-bold text-slate-900 text-nowrap">Have more questions?</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest text-nowrap">Our Stone Oak techs are ready</p>
                </div>
              </div>
              <a href="tel:8777921410" className="text-3xl font-black text-indigo-600 block mb-8 hover:opacity-80 transition-opacity text-nowrap uppercase">(877) 792-1410</a>
              <Button className="w-full bg-slate-900 hover:bg-indigo-600 text-white h-14 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all text-nowrap" asChild>
                <a href="tel:8777921410">Ask a Specialist</a>
              </Button>
            </div>
          </div>

          <div className="text-nowrap">
            <Accordion type="single" collapsible className="w-full space-y-4 text-nowrap">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none bg-slate-50 rounded-3xl px-8 transition-all hover:bg-indigo-50/50 data-[state=open]:bg-indigo-50 data-[state=open]:shadow-xl data-[state=open]:shadow-indigo-900/5 text-nowrap"
                >
                  <AccordionTrigger className="hover:no-underline py-6 text-left text-slate-900 font-bold text-lg uppercase tracking-tight text-nowrap">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-6 font-medium italic text-nowrap text-nowrap">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
