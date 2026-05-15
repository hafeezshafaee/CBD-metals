import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Car, 
  Truck, 
  Recycle, 
  Wrench, 
  Handshake,
  CheckCircle,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const services = [
  {
    icon: DollarSign,
    title: 'Cash For Cars',
    description: 'Get top cash for any car, any condition. We pay up to $9,999 on the spot.',
    color: 'bg-brand-yellow',
  },
  {
    icon: Wrench,
    title: 'Car Wrecking',
    description: 'Professional car wrecking services. We dismantle and recycle all vehicle parts.',
    color: 'bg-brand-light-green',
  },
  {
    icon: Truck,
    title: 'Free Car Removal',
    description: 'Free towing service across Perth. We\'ll come to you and remove your vehicle at no cost.',
    color: 'bg-brand-light-blue',
  },
  {
    icon: Car,
    title: 'Cash For Trucks',
    description: 'We buy all types of trucks, utes, and commercial vehicles for cash.',
    color: 'bg-brand-light-yellow',
  },
  {
    icon: CheckCircle,
    title: 'Cash For 4x4s',
    description: 'Sell your 4WD for top dollar. All makes and models accepted.',
    color: 'bg-brand-yellow',
  },
  {
    icon: Recycle,
    title: 'Car Recycling',
    description: 'Eco-friendly car recycling. We dispose of vehicles responsibly.',
    color: 'bg-brand-light-green',
  },
  {
    icon: Clock,
    title: 'Scrap Car Removal',
    description: 'Get rid of your scrap car and get paid. We handle all the paperwork.',
    color: 'bg-brand-light-blue',
  },
  {
    icon: Handshake,
    title: 'Sell My Car',
    description: 'Quick and easy car selling process. Get a quote in minutes.',
    color: 'bg-brand-light-yellow',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-brand-light-gray max-w-2xl mx-auto">
            We offer comprehensive car removal and wrecking services across Perth. 
            From cash for cars to free towing, we've got you covered.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 h-full group cursor-pointer"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-brand-black" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-light-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <Link to="/contact">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-brand-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-brand-dark-gray transition-colors duration-300"
            >
              Get Your Free Quote
              <CheckCircle className="w-5 h-5" />
            </motion.span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
