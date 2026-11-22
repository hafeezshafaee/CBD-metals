import Seo from '@/components/Seo';
import { motion } from 'framer-motion';
import { MapPin, Phone, CheckCircle, Clock, Truck } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const areas = [
  'Perth CBD', 'Joondalup', 'Fremantle', 'Rockingham', 'Midland',
  'Armadale', 'Cannington', 'Canning Vale', 'Ellenbrook', 'Bibra Lake',
  'Osborne Park', 'Mandurah', 'Baldivis', 'Byford', 'Cockburn',
  'Dianella', 'Girrawheen', 'High Wycombe', 'Kalamunda', 'Kelmscott',
  'Malaga', 'Morley', 'Thornlie', 'Willetton', 'Yangebup',
  'Claremont', 'Subiaco', 'Victoria Park',
];

const highlights = [
  { icon: Clock, title: 'Collection Options', description: 'Call us before noon and we\'ll have your car collected the same day in most Perth suburbs.' },
  { icon: Truck, title: 'Free Towing', description: 'No matter where you are in the Perth metro area, our towing service is 100% free.' },
  { icon: MapPin, title: 'All Perth Suburbs', description: 'We list a range of Perth metro suburbs. Contact us to confirm your exact location.' },
  { icon: CheckCircle, title: 'No Job Too Far', description: 'Even in outer suburbs or regional areas nearby, we\'ll do our best to come to you.' },
];

export default function ServiceAreasPage() {
  return (
    <div className="pt-20">
      <Seo title="Perth Car Removal Areas | Free Scrap Car Pickup" description="Check Perth suburbs covered by CBD Scrap Car Removal. Contact us to arrange a quote and confirm vehicle collection in your area." path="/service-areas" keywords={['car removal Perth suburbs', 'scrap car removal near me Perth', 'free car pickup Perth']} />
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-brand-new-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">Service Areas</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              We Come to <span className="text-brand-yellow">You</span> — Anywhere in Perth
            </h1>
            <p className="text-lg text-gray-400 mb-8">
            CBD Scrap Car Removal serves Perth metro suburbs and surrounding areas. Contact us to confirm pickup availability and payment arrangements.
            </p>
            <motion.a
              href="tel:0475625766"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black font-semibold px-8 py-4 rounded-xl hover:bg-brand-light-green transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              Check Your Area — 0475 625 766
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-brand-yellow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black mb-1">{item.title}</h3>
                    <p className="text-brand-black/70 text-sm">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Areas We Service</h2>
            <p className="text-brand-light-gray text-lg max-w-2xl mx-auto">
              We service a range of Perth metro suburbs. Contact us to confirm collection availability in your area.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area) => (
              <StaggerItem key={area}>
                <motion.div
                  whileHover={{ y: -4, borderColor: '#f2f047' }}
                  transition={{ duration: 0.2 }}
                  className="border border-gray-200 rounded-xl p-4 group transition-colors duration-200 hover:bg-brand-yellow/5"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-black text-sm group-hover:text-brand-black">{area}</p>

                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3} className="text-center mt-10">
            <p className="text-brand-light-gray text-lg">
              Don't see your suburb?{' '}
              <a href="tel:0475625766" className="text-brand-black font-bold hover:text-brand-yellow transition-colors duration-300">
                Call us anyway
              </a>{' '}
              — we'll likely still cover your area!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-new-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-brand-dark-gray rounded-2xl p-10 sm:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need Your Car Collected?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Call now and we'll arrange pickup at a time that suits you. Confirm the quote and collection arrangements with our team.
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
