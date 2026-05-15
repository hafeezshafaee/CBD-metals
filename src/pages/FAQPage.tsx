import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqCategories = [
  {
    category: 'Pricing & Payment',
    faqs: [
      {
        question: 'How much can I get for my car?',
        answer: 'We pay up to $9,999 depending on your vehicle\'s make, model, year, and condition. Call us for a free quote and we\'ll give you an instant offer based on current market values. Even scrap cars and non-runners receive competitive cash offers.',
      },
      {
        question: 'When do I get paid?',
        answer: 'You receive instant cash payment on the spot when we pick up your vehicle. No waiting, no bank transfers, no delays — cash in hand the moment we take your car.',
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'Absolutely none. The quote we give you is the amount you receive. We never deduct towing fees, paperwork fees, or any other costs. What we quote is what you get.',
      },
      {
        question: 'Do you negotiate on price?',
        answer: 'We always aim to give you our best price upfront. Our quotes are based on real market data so they\'re already competitive. However, feel free to call and discuss — we\'re always happy to talk.',
      },
    ],
  },
  {
    category: 'Vehicle Requirements',
    faqs: [
      {
        question: 'What types of vehicles do you accept?',
        answer: 'We accept all vehicles including cars, trucks, 4x4s, vans, utes, buses, and commercial vehicles in any condition — old, new, damaged, scrap, written-off, or completely broken down.',
      },
      {
        question: 'Do you buy cars without registration?',
        answer: 'Yes, we buy unregistered vehicles. As long as you can prove ownership with appropriate documentation, we can purchase your unregistered car without any issue.',
      },
      {
        question: 'Do you accept non-running or damaged cars?',
        answer: 'Yes! In fact, many of the vehicles we collect are non-runners, flood damaged, fire damaged, or accident write-offs. Condition doesn\'t matter — we buy them all.',
      },
      {
        question: 'Do you buy very old vehicles?',
        answer: 'Yes, we accept vehicles of any age. Whether it\'s a 5-year-old car or a 30-year-old classic, we\'ll make you a fair cash offer.',
      },
    ],
  },
  {
    category: 'The Process',
    faqs: [
      {
        question: 'How quickly can you remove my car?',
        answer: 'We offer same-day service throughout Perth and surrounding areas. Call us early in the day for same-day pickup, or schedule a time that works best for you — we work around your schedule.',
      },
      {
        question: 'Is the car removal really free?',
        answer: 'Yes! Our towing service is completely free with no hidden charges. We come to your location, remove your vehicle, and you pay nothing for the removal service.',
      },
      {
        question: 'Do I need to be present when you collect the car?',
        answer: 'Yes, you or an authorized person should be present to sign the necessary paperwork and receive payment. The whole process typically takes just 15–30 minutes.',
      },
      {
        question: 'What documents do I need?',
        answer: 'You\'ll need a valid photo ID (driver\'s license or passport) and vehicle registration papers if available. We handle all the transfer paperwork for you — you don\'t need to worry about anything.',
      },
    ],
  },
  {
    category: 'Service & Coverage',
    faqs: [
      {
        question: 'What areas do you cover?',
        answer: 'We service all Perth suburbs and surrounding areas, including Joondalup, Fremantle, Rockingham, Midland, Armadale, Cannington, and many more. If you\'re not sure if we cover your area, just call us.',
      },
      {
        question: 'Do you operate on weekends?',
        answer: 'Yes, we operate Monday to Saturday, 7:00 AM – 7:00 PM. We can also arrange pickups outside these hours in special circumstances — just ask.',
      },
      {
        question: 'How do I get a quote?',
        answer: 'You can call us on 0475 625 766 for an instant quote over the phone, or fill out the form on our Contact page and we\'ll get back to you within minutes.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-brand-new-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">FAQ</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-brand-yellow">Questions</span>
            </h1>
            <p className="text-lg text-gray-400">
              Everything you need to know about our car removal service. Can't find your answer? Just call us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {faqCategories.map((cat, catIndex) => (
              <ScrollReveal key={cat.category} delay={catIndex * 0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-8 bg-brand-yellow rounded-full" />
                    <h2 className="text-2xl font-bold text-brand-black">{cat.category}</h2>
                  </div>
                  <Accordion type="single" collapsible className="space-y-3">
                    {cat.faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <AccordionItem
                          value={`${catIndex}-${index}`}
                          className="bg-gray-50 rounded-xl border-none overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-5 text-left font-semibold text-brand-black hover:text-brand-black hover:no-underline hover:bg-gray-100 transition-colors duration-200">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-5 text-brand-light-gray leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.4} className="text-center mt-16">
            <div className="bg-brand-new-black rounded-2xl p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-gray-400 mb-8">Our team is ready to help. Call us now for a free quote and answers to any questions you have.</p>
              <motion.a
                href="tel:0475625766"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black font-semibold px-8 py-4 rounded-xl hover:bg-brand-light-green transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Call 0475 625 766
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
