import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Clock, 
  Truck, 
  CheckCircle, 
  Users, 
  Recycle, 
  Phone,
  ArrowRight
} from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const features = [
  {
    icon: DollarSign,
    title: 'Competitive Cash Offers',
    description: 'Tell us your vehicle details and request a quote with no obligation.',
  },
  {
    icon: Clock,
    title: 'Convenient Collection',
    description: 'Arrange a collection time that works for your location and schedule.',
  },
  {
    icon: Truck,
    title: 'Free Towing',
    description: 'No hidden fees. Our car removal service is completely free.',
  },
  {
    icon: CheckCircle,
    title: 'All Vehicles Accepted',
    description: 'We buy cars, trucks, 4x4s, vans, and buses in any condition.',
  },
  {
    icon: DollarSign,
    title: 'Instant Cash Payment',
    description: 'Get paid cash on the spot when we pick up your vehicle.',
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Our experienced team handles everything from quote to removal.',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly Recycling',
    description: 'We recycle vehicles responsibly, protecting the environment.',
  },
  {
    icon: Phone,
    title: 'Helpful Support',
    description: 'Speak with our team about your vehicle and collection options.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-new-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <ScrollReveal direction="left">
              <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose{' '}
                <span className="text-brand-yellow">CBD Scrap Car Removal?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                We help Perth vehicle owners arrange cash offers and collection for unwanted, damaged and end-of-life vehicles.
              </p>
            </ScrollReveal>

            {/* Features Grid */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <StaggerItem key={feature.title} direction="left">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-yellow/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Image */}
          <ScrollReveal direction="right" className="relative">
            <div className="relative pb-10">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-yellow/20 rounded-2xl z-0" />
              <div className="absolute -bottom-2 -left-6 w-24 h-24 bg-brand-light-green/20 rounded-2xl z-0" />

              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/why-choose-us.jpg"
                  alt="Scrap car removal and vehicle collection service in Perth"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <motion.a
                href="tel:0475625766"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-black font-semibold px-6 py-4 rounded-xl hover:bg-brand-light-green transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Call 0475 625 766
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-4 rounded-xl hover:border-brand-yellow hover:text-brand-yellow transition-colors duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
