import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How much can I get for my car?',
    answer: 'We pay up to $9,999 depending on your vehicle\'s make, model, year, and condition. Call us for a free quote and we\'ll give you an instant offer based on current market values.',
  },
  {
    question: 'Is the car removal really free?',
    answer: 'Yes! Our towing service is completely free with no hidden charges. We come to your location, remove your vehicle, and you pay nothing for the removal service.',
  },
  {
    question: 'What types of vehicles do you accept?',
    answer: 'We accept all vehicles including cars, trucks, 4x4s, vans, utes, buses, and commercial vehicles in any condition - old, new, damaged, scrap, or broken down.',
  },
  {
    question: 'How quickly can you remove my car?',
    answer: 'We offer same-day service throughout Perth and surrounding areas. Call us early in the day for same-day pickup, or schedule a time that works best for you.',
  },
  {
    question: 'Do I need to be present when you collect the car?',
    answer: 'Yes, you or an authorized person should be present to sign the necessary paperwork and receive payment. The process typically takes 15-30 minutes.',
  },
  {
    question: 'What documents do I need?',
    answer: 'You\'ll need a valid photo ID (driver\'s license or passport) and the vehicle registration papers if available. We handle all the transfer paperwork for you.',
  },
  {
    question: 'Do you buy cars without registration?',
    answer: 'Yes, we buy unregistered vehicles. As long as you can prove ownership with appropriate documentation, we can purchase your unregistered car.',
  },
  {
    question: 'When do I get paid?',
    answer: 'You receive instant cash payment on the spot when we pick up your vehicle. No waiting, no delays - cash in hand immediately.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-brand-light-gray">
            Got questions? We've got answers. If you don't find what you're looking 
            for, feel free to contact us.
          </p>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
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
        </ScrollReveal>

        {/* Contact CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <p className="text-brand-light-gray mb-4">
            Still have questions?
          </p>
          <Link to="/contact">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-brand-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-dark-gray transition-colors duration-300"
            >
              Contact Us
            </motion.span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
