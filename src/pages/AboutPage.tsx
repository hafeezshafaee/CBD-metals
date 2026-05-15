import { motion } from 'framer-motion';
import { Award, Users, Recycle, Shield, CheckCircle, Phone } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5,000+', label: 'Cars Removed' },
  { value: '$9,999', label: 'Max Cash Paid' },
  { value: '500+', label: '5-Star Reviews' },
];

const values = [
  {
    icon: Award,
    title: 'Best Price Guaranteed',
    description: 'We consistently offer Perth\'s highest cash prices for unwanted vehicles. Our market expertise ensures you get maximum value every time.',
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Our experienced, licensed team handles everything from quote to removal — professionally, punctually, and with zero hassle for you.',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly Disposal',
    description: 'We responsibly recycle and dispose of all vehicles, ensuring minimal environmental impact. Every car we collect is processed sustainably.',
  },
  {
    icon: Shield,
    title: 'Trusted & Licensed',
    description: 'Fully licensed and insured car removal company operating across Perth. We handle all transfer paperwork so you\'re fully protected.',
  },
];

const team = [
  { initials: 'MK', name: 'Max K.', role: 'Founder & CEO', exp: '15 years in automotive' },
  { initials: 'JS', name: 'James S.', role: 'Head of Operations', exp: '10 years experience' },
  { initials: 'RT', name: 'Ryan T.', role: 'Senior Removalist', exp: '8 years experience' },
  { initials: 'AP', name: 'Alex P.', role: 'Customer Relations', exp: '6 years experience' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-brand-new-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Perth's Most Trusted <span className="text-brand-yellow">Car Removal</span> Company
            </h1>
            <p className="text-lg text-gray-400 mb-10">
              With over 10 years of experience, CDB Scrap Car Removal has become Perth's go-to service for hassle-free car removal and top cash payments. We've helped thousands of Perth residents get rid of their unwanted vehicles quickly, easily, and for maximum cash.
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

      {/* Stats */}
      <section className="py-16 bg-brand-yellow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl font-bold text-brand-black mb-2">{stat.value}</p>
                  <p className="text-brand-black/70 font-medium">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
                <p>CDB Scrap Car Removal was founded with a simple mission: to give Perth residents the easiest, most rewarding way to sell their unwanted vehicles. No dealership runaround, no lowball offers, no complicated paperwork.</p>
                <p>Over the past decade, we've grown from a small local operation to Perth's most trusted car removal service — handling thousands of vehicles per year across all Perth suburbs and surrounding areas.</p>
                <p>Our success comes from one thing: treating every customer fairly. We offer the best prices, show up on time, and pay cash on the spot. It's that simple.</p>
              </div>
              <div className="mt-8 space-y-3">
                {['Licensed & fully insured operation', 'All makes, models & conditions accepted', 'Same-day service available', 'Eco-friendly vehicle recycling'].map((point) => (
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
                  <img src="/images/why-choose-us.jpg" alt="CDB Scrap Car Removal team" className="w-full h-auto object-cover" />
                </motion.div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-yellow/20 rounded-2xl -z-0" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-light-green/20 rounded-2xl -z-0" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-8 left-8 bg-brand-yellow rounded-xl p-5 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-brand-black font-bold text-2xl">10+</p>
                      <p className="text-brand-black/70 text-sm">Years Experience</p>
                    </div>
                  </div>
                </motion.div>
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

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Meet the Experts</h2>
            <p className="text-lg text-brand-light-gray max-w-2xl mx-auto">
              Our professional team brings decades of combined experience in the automotive and car removal industry.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-brand-yellow/50 transition-colors duration-300"
                >
                  <div className="w-20 h-20 bg-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{member.initials}</span>
                  </div>
                  <h3 className="font-bold text-brand-black text-lg">{member.name}</h3>
                  <p className="text-brand-yellow font-semibold text-sm mt-1">{member.role}</p>
                  <p className="text-brand-light-gray text-sm mt-2">{member.exp}</p>
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
            <p className="text-brand-black/70 text-lg mb-8 max-w-xl mx-auto">Call us today and get a free, no-obligation quote in minutes. Same-day service available.</p>
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
