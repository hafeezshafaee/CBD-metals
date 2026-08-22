import { motion } from 'framer-motion';
import { CheckCircle, Phone, Recycle, DollarSign, Truck, ArrowRight, Zap, Shield, Layers } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const metalServices = [
  {
    icon: DollarSign,
    title: 'Cash For Scrap Metal',
    color: 'bg-brand-yellow',
    description: 'Turn your unwanted scrap metal into instant cash. We offer the best prices in Perth for all types of scrap metal — no matter the quantity.',
    features: ['Instant cash payment', 'Best prices guaranteed', 'All quantities welcome', 'No hidden fees'],
  },
  {
    icon: Truck,
    title: 'Scrap Metal Collection',
    color: 'bg-brand-light-green',
    description: 'Free collection service across all Perth suburbs. Got a large amount? We will bring our truck and load it ourselves — completely free of charge.',
    features: ['Free pickup service', 'All Perth suburbs', 'Same-day available', 'Large loads welcome'],
  },
  {
    icon: Recycle,
    title: 'Metal Recycling',
    color: 'bg-brand-light-blue',
    description: 'Environmentally responsible metal recycling. We process all scrap metals in compliance with WA environmental standards, keeping Perth green.',
    features: ['Eco-friendly process', 'WA compliant', 'Certified recycling', 'Responsible disposal'],
  },
  {
    icon: Layers,
    title: 'Industrial Metal Removal',
    color: 'bg-brand-light-yellow',
    description: 'Large-scale metal removal for businesses, construction sites, and industrial properties. We handle the heavy lifting so you don\'t have to.',
    features: ['Business & industrial', 'Heavy equipment welcome', 'Site clearance', 'Flexible scheduling'],
  },
];

const metalTypes = [
  { name: 'Copper', value: 'High Value', icon: '🟤', desc: 'Wiring, pipes, fittings' },
  { name: 'Aluminium', value: 'Top Rates', icon: '⬜', desc: 'Cans, frames, sheets' },
  { name: 'Steel', value: 'Best Price', icon: '🔩', desc: 'Beams, bars, sheets' },
  { name: 'Iron', value: 'Cash Ready', icon: '⚙️', desc: 'Cast iron, wrought iron' },
  { name: 'Brass', value: 'Premium Pay', icon: '🟡', desc: 'Fittings, valves, fixtures' },
  { name: 'Bronze', value: 'Top Dollar', icon: '🥉', desc: 'Statues, bearings, bushings' },
  { name: 'Stainless Steel', value: 'Great Rates', icon: '✨', desc: 'Appliances, tanks, pipes' },
  { name: 'Lead', value: 'Competitive', icon: '🔘', desc: 'Batteries, weights, sheets' },
  { name: 'Zinc', value: 'Fair Value', icon: '🔷', desc: 'Galvanised steel, die castings' },
  { name: 'Tin', value: 'Cash Paid', icon: '🥫', desc: 'Cans, roofing, containers' },
  { name: 'Car Batteries', value: 'Cash Paid', icon: '🔋', desc: 'All battery types' },
  { name: 'Mixed Metals', value: 'Accepted', icon: '♻️', desc: 'We sort it for you' },
];

const whyUs = [
  { icon: DollarSign, title: 'Best Prices in Perth', desc: 'We consistently offer the most competitive rates for all scrap metals.' },
  { icon: Zap, title: 'Same-Day Collection', desc: 'Call before noon and we\'ll collect your scrap metal the same day.' },
  { icon: Shield, title: 'Fully Licensed', desc: 'Fully licensed and insured scrap metal dealer operating in Perth WA.' },
  { icon: Recycle, title: 'Eco Responsible', desc: 'All metals are recycled responsibly, helping keep Perth clean and green.' },
];

export default function MetalsPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-brand-new-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">
              Scrap Metal Perth
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cash For <span className="text-brand-yellow">Scrap Metal</span> — Perth's Best Rates
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Max Car Removal buys all types of scrap metal across Perth. Copper, aluminium, steel, brass, and more — we pay top dollar and collect for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0475625766"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-black font-semibold px-8 py-4 rounded-xl hover:bg-brand-light-green transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Get a Metal Quote — 0475 625 766
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-brand-black transition-colors duration-300"
              >
                Get Online Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Strip */}
      <section className="py-14 bg-brand-yellow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black mb-1">{item.title}</h3>
                    <p className="text-brand-black/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Metal Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Our Scrap Metal Services</h2>
            <p className="text-brand-light-gray text-lg max-w-2xl mx-auto">
              From small household items to large industrial loads — we handle it all across the Perth metro area.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-8">
            {metalServices.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 h-full group hover:border-brand-yellow/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-brand-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-brand-black mb-3">{service.title}</h3>
                      <p className="text-brand-light-gray leading-relaxed mb-5">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                            <span className="text-sm text-brand-black/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Metal Types We Accept */}
      <section className="py-20 lg:py-28 bg-brand-new-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">All Metals Welcome</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Metals We Buy</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We accept all types of scrap metal — ferrous, non-ferrous, and everything in between. Not sure what you have? Just call us!
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {metalTypes.map((metal) => (
              <StaggerItem key={metal.name}>
                <motion.div
                  whileHover={{ y: -4, borderColor: '#f2f047' }}
                  transition={{ duration: 0.2 }}
                  className="border border-brand-dark-gray rounded-xl p-5 group hover:bg-brand-yellow/5 transition-colors duration-200 cursor-default"
                >
                  <div className="text-2xl mb-3">{metal.icon}</div>
                  <p className="font-bold text-white text-sm group-hover:text-brand-yellow transition-colors">{metal.name}</p>
                  <p className="text-xs text-brand-yellow/80 font-medium mt-0.5">{metal.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{metal.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">How It Works</h2>
            <p className="text-brand-light-gray text-lg max-w-2xl mx-auto">Selling your scrap metal is quick and easy — just 3 simple steps.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Call or Get a Quote', desc: 'Tell us what metals you have and roughly how much. We\'ll give you a price over the phone in minutes.' },
              { step: '02', title: 'We Come to You', desc: 'Our team arrives at your location at a time that suits you. We load up the metals — you don\'t lift a finger.' },
              { step: '03', title: 'Get Paid On the Spot', desc: 'Once we\'ve weighed and assessed the metal, you receive cash payment immediately. No waiting, no cheques.' },
            ].map((item) => (
              <ScrollReveal key={item.step}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <span className="text-brand-black font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-3">{item.title}</h3>
                  <p className="text-brand-light-gray leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-new-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-brand-dark-gray rounded-2xl p-10 sm:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Turn Your Metal Into Cash?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Call now for an instant quote. Free collection, same-day service, cash on the spot — anywhere in Perth.
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
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-brand-black transition-colors duration-300"
                >
                  Get Online Quote
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
