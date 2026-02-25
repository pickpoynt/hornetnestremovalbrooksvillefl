import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How much does Animal Control charge to remove a raccoon?",
    answer: "Most municipal animal control services specialized in domestic animals (dogs/cats) and often do not remove wildlife from private property. For professional removal, private wildlife specialists typically charge based on the entry points and number of animals."
  },
  {
    question: "Should I call Animal Control if I see a raccoon?",
    answer: "Only call municipal animal control if the raccoon is acting rabid or poses an immediate threat in a public space. For raccoons on your property or in your attic, a private wildlife removal service in Gastonia is your best option."
  },
  {
    question: "How do you get rid of a raccoon asap?",
    answer: "The fastest way is professional live-trapping and immediate exclusion. Closing entry points and removing attractants are critical steps to take alongside trapping."
  },
  {
    question: "What month are raccoons most active?",
    answer: "Raccoons are active year-round but peak activity occurs during their breeding season (February-March) and when mothers are raising young (April-June)."
  },
  {
    question: "How to get a raccoon to leave your property?",
    answer: "Remove all food sources (pet food, unsecured trash, fallen fruit) and use professional-grade deterrents or exclusion methods to block access to nesting sites like attics or decks."
  },
  {
    question: "Do raccoons return to the same place?",
    answer: "Yes, raccoons are highly territorial and have excellent memories. If a nesting site is not properly sealed (excluded), they or other raccoons will return to the same location."
  },
  {
    question: "How much does it cost to get rid of a raccoon?",
    answer: "Costs vary depending on the complexity of the removal, the number of entry points that need sealing, and any necessary attic restoration. Contact us for a precise Gastonia-area quote."
  },
  {
    question: "What will animal control do with a raccoon?",
    answer: "Private wildlife companies typically humanely trap and relocate raccoons according to North Carolina state regulations, or use exclusion methods to let them leave naturally."
  },
  {
    question: "What do raccoons hate the most?",
    answer: "Raccoons dislike strong scents (peppermint, ammonia), bright flashing lights, and loud, unfamiliar noises. However, these are often only temporary fixes compared to professional exclusion."
  },
  {
    question: "Will raccoons leave if you scare them?",
    answer: "They might leave temporarily if startled, but a raccoon with a food source or a nest with babies will almost certainly return once they feel the 'threat' has passed."
  },
  {
    question: "What attracts raccoons to your property?",
    answer: "Easy access to food is the primary driver. This includes bird feeders, outdoor pet bowls, compost piles, and trash cans that aren't secured with locking lids."
  },
  {
    question: "What food is poisonous to raccoons?",
    answer: "While raccoons are scavengers, foods like chocolate, onions, garlic, and macadamia nuts can be toxic to them, much like they are to dogs and cats."
  },
  {
    question: "Will leaving a porch light on keep raccoons away?",
    answer: "While raccoons prefer darkness, they are highly adaptable. Leaving a light on may deter them for a few nights, but they will eventually get used to it if there is a reward (food/shelter)."
  },
  {
    question: "How can I prevent raccoons from returning?",
    answer: "The only permanent solution is professional exclusion: sealing all potential entry points with heavy-gauge materials and removing all local food attractants."
  },
  {
    question: "What time of night are raccoons most active?",
    answer: "Raccoons are nocturnal and are typically most active from dusk until dawn, with peak activity often occurring in the middle of the night."
  },
  {
    question: "What smell makes raccoons go away?",
    answer: "Strong, pungent smells like cayenne pepper, peppermint oil, or vinegar can act as temporary deterrents, but they must be reapplied frequently."
  },
  {
    question: "Can exterminators get rid of raccoons?",
    answer: "Traditional pest control 'exterminators' focus on insects. You need a specialized wildlife removal professional who has the licensing and equipment for large mammal trapping and exclusion."
  },
  {
    question: "Do raccoons sleep in the same place every night?",
    answer: "Raccoons often have several 'denning' sites within their territory and may rotate between them, though a mother with kits will stay in one place until the young are mobile."
  },
  {
    question: "What is a raccoon's biggest enemy?",
    answer: "In urban areas like Gastonia, their biggest threats are automobiles, domestic dogs, and larger predators like coyotes or owls (for the kits)."
  },
  {
    question: "What are raccoons doing in October?",
    answer: "In October, raccoons are focused on 'hyperphagia'—eating as much as possible to build up fat reserves for the winter months when food becomes scarce."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Wildlife Removal <span className="text-indigo-600">in Gastonia NC FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about raccoon removal, animal exclusion techniques, and wildlife protection in Gastonia.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 uppercase tracking-tight text-xs">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
