import { motion } from 'framer-motion';
import { DollarSign, Car, Truck, Recycle, Wrench, Handshake, CheckCircle, Clock, Phone, ArrowRight } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const services = [
  {
    icon: DollarSign,
    title: 'Cash For Cars',
    color: 'bg-brand-yellow',
    description: 'Get top cash for any car in any condition. We pay up to $9,999 on the spot for all makes and models — running, damaged, or written off.',
    features: ['Instant cash payment', 'All makes & models', 'Any condition accepted', 'No hidden fees'],
  },
  {
    icon: Wrench,
    title: 'Car Wrecking',
    color: 'bg-brand-light-green',
    description: 'Professional car wrecking and dismantling services. We harvest and recycle usable parts, keeping more money in your pocket.',
    features: ['Full dismantling service', 'Parts harvested & recycled', 'Eco-friendly process', 'Documentation provided'],
  },
  {
    icon: Truck,
    title: 'Free Car Removal',
    color: 'bg-brand-light-blue',
    description: 'Free towing service across all Perth suburbs. Our team comes to your location, handles the vehicle, and pays you on the spot.',
    features: ['100% free towing', 'All Perth suburbs', 'Same-day available', 'No obligation'],
  },
  {
    icon: Car,
    title: 'Cash For Trucks',
    color: 'bg-brand-light-yellow',
    description: 'We buy all types of trucks, utes, and commercial vehicles. From small pickups to large commercial trucks, we pay top dollar.',
    features: ['All truck types', 'Commercial vehicles', 'Competitive pricing', 'Fast same-day service'],
  },
  {
    icon: CheckCircle,
    title: 'Cash For 4x4s',
    color: 'bg-brand-yellow',
    description: 'Sell your 4WD or SUV for top dollar. All makes including Toyota Land Cruiser, Jeep, Ford Ranger, and more.',
    features: ['All 4WD brands', 'Working or damaged', 'Instant valuation', 'On-the-spot payment'],
  },
  {
    icon: Recycle,
    title: 'Car Recycling',
    color: 'bg-brand-light-green',
    description: 'Environmentally responsible vehicle recycling. We process all vehicles in compliance with environmental standards.',
    features: ['Environmentally safe', 'Fluid disposal included', 'Parts reused', 'Certificate provided'],
  },
  {
    icon: Clock,
    title: 'Scrap Car Removal',
    color: 'bg-brand-light-blue',
    description: 'Got a scrap car taking up space? We\'ll remove it and pay you cash, no matter how old or damaged the vehicle is.',
    features: ['Any age accepted', 'No RWC required', 'Same-day pickup', 'All paperwork handled'],
  },
  {
    icon: Handshake,
    title: 'Sell My Car',
    color: 'bg-brand-light-yellow',
    description: 'The quickest way to sell your car in Perth. Get a quote in minutes, agree on a price, and receive cash the same day.',
    features: ['Quote in minutes', 'Best market price', 'No advertising needed', 'Instant payment'],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-brand-new-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Everything You Need to <span className="text-brand-yellow">Sell Your Car</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              From cash for cars to free towing and eco-friendly recycling — we offer Perth's most comprehensive car removal services, all under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0475625766"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-black font-semibold px-8 py-4 rounded-xl hover:bg-brand-light-green transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Get a Free Quote
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
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

          {/* CTA */}
          <ScrollReveal delay={0.4} className="text-center mt-16">
            <div className="bg-brand-new-black rounded-2xl p-10 sm:p-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Just call us — we'll figure out the best solution for your situation and give you a free quote in minutes.
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
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
