import { motion } from 'framer-motion';
import { Phone, Calendar, Truck, DollarSign, ArrowRight } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Get a Free Quote',
    description: 'Call us or fill out our online form. We\'ll give you an instant quote based on your vehicle details.',
    color: 'bg-brand-yellow',
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Schedule Pickup',
    description: 'Choose a convenient time. We offer same-day service across Perth and surrounding areas.',
    color: 'bg-brand-light-green',
  },
  {
    number: '03',
    icon: Truck,
    title: 'We Pick Up Your Car',
    description: 'Our professional team arrives on time, handles all paperwork, and tows your vehicle for free.',
    color: 'bg-brand-light-blue',
  },
  {
    number: '04',
    icon: DollarSign,
    title: 'Get Paid Cash',
    description: 'Receive instant cash payment on the spot. No waiting, no delays.',
    color: 'bg-brand-light-yellow',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-brand-light-yellow">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block bg-brand-black text-white px-4 py-2 rounded-lg font-semibold text-sm mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            Get Cash For Your Car in{' '}
            <span className="text-brand-yellow bg-brand-black px-3 py-1 rounded-lg">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-lg text-brand-light-gray max-w-2xl mx-auto">
            Our streamlined process makes selling your car quick and hassle-free. 
            From quote to cash in hand, we handle everything.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Connector Line - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-brand-black/10 -z-0">
                    <ArrowRight className="absolute right-0 -top-2 w-4 h-4 text-brand-black/30" />
                  </div>
                )}

                <div className="bg-white rounded-2xl p-6 h-full shadow-card hover:shadow-card-hover transition-shadow duration-300">
                  {/* Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-brand-black/10">
                      {step.number}
                    </span>
                    <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center`}>
                      <step.icon className="w-7 h-7 text-brand-black" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand-light-gray text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <motion.a
            href="tel:0475625766"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-brand-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-brand-dark-gray transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Now: 0475 625 766
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
