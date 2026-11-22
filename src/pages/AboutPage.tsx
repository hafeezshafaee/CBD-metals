import Seo from '@/components/Seo';
import { motion } from 'framer-motion';
import { Award, Users, Recycle, Shield, CheckCircle, Phone } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const values = [
  {
    icon: Award,
    title: 'Fair Vehicle Quotes',
    description: 'We consider your vehicle details and condition when preparing a cash offer.',
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Our team can guide you through the quote and vehicle collection process.',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly Disposal',
    description: 'We responsibly recycle and dispose of all vehicles, ensuring minimal environmental impact. Every car we collect is processed sustainably.',
  },
  {
    icon: Shield,
    title: 'Clear Collection Process',
    description: 'We explain the collection arrangements and paperwork before your vehicle is picked up.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Seo title="About CBD Scrap Car Removal | Perth WA" description="Learn about CBD Scrap Car Removal, serving Perth with cash offers for unwanted vehicles and convenient car collection. Contact our team for a free quote." path="/about" keywords={['CBD Scrap Car Removal', 'Perth car removal company', 'scrap car buyers Perth']} />
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-brand-new-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Scrap Car Removal & <span className="text-brand-yellow">Cash for Cars</span> in Perth
            </h1>
            <p className="text-lg text-gray-400 mb-10">
              CBD Scrap Car Removal helps Perth vehicle owners get quotes for unwanted, damaged and end-of-life cars. Contact our team to discuss your vehicle and arrange collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0475625766"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-black font-semibold px-8 py-4 rounded-xl hover:bg-brand-light-green transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Call 0475 625 766
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6">
                Built on Trust, Driven by <span className="text-brand-yellow bg-brand-black px-2 rounded">Results</span>
              </h2>
              <div className="space-y-4 text-brand-light-gray leading-relaxed">
                <p>CBD Scrap Car Removal was founded with a simple mission: to give Perth residents the easiest, most rewarding way to sell their unwanted vehicles. No dealership runaround, no lowball offers, no complicated paperwork.</p>
                <p>Over the past decade, we've grown from a small local operation to Perth's most trusted car removal service — handling thousands of vehicles per year across all Perth suburbs and surrounding areas.</p>
                <p>Our success comes from one thing: treating every customer fairly. We offer the best prices, show up on time, and pay cash on the spot. It's that simple.</p>
              </div>
              <div className="mt-8 space-y-3">
                {['Quotes for unwanted vehicles', 'Collection arranged across Perth', 'Options for damaged and scrap cars', 'Vehicle recycling options'].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                    <span className="text-brand-black font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 rounded-2xl overflow-hidden"
                >
                  <img src="/images/why-choose-us.jpg" alt="Vehicle ready for scrap car removal" className="w-full h-auto object-cover" />
                </motion.div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-yellow/20 rounded-2xl -z-0" />
                <div className="absolute -bottom-8 -left-6 w-24 h-24 bg-brand-light-green/20 rounded-2xl -z-0" />

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-brand-new-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">Our Values</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These core values guide everything we do — from how we quote vehicles to how we treat our customers.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-brand-dark-gray rounded-2xl p-6 h-full"
                >
                  <div className="w-14 h-14 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-5">
                    <value.icon className="w-7 h-7 text-brand-yellow" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Ready to Sell Your Car?</h2>
            <p className="text-brand-black/70 text-lg mb-8 max-w-xl mx-auto">Call us today for a free, no-obligation quote and to discuss collection availability.</p>
            <motion.a
              href="tel:0475625766"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-brand-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-brand-dark-gray transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              Call 0475 625 766
            </motion.a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
