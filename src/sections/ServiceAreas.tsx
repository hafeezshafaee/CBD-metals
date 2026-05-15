import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const serviceAreas = [
  'Perth CBD',
  'Armadale',
  'Bibra Lake',
  'Cannington',
  'Canning Vale',
  'Ellenbrook',
  'Joondalup',
  'Fremantle',
  'Midland',
  'Osborne Park',
  'Rockingham',
  'Mandurah',
  'Baldivis',
  'Byford',
  'Cockburn',
  'Dianella',
  'Girrawheen',
  'High Wycombe',
  'Kalamunda',
  'Kelmscott',
  'Malaga',
  'Morley',
  'Thornlie',
  'Willetton',
  'Yangebup',
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 lg:py-28 bg-brand-new-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <ScrollReveal direction="left">
              <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">
                Service Areas
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                We Service{' '}
                <span className="text-brand-yellow">All of Perth</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We provide car removal services across Perth and all surrounding 
                suburbs. No matter where you are, we'll come to you.
              </p>
            </ScrollReveal>

            {/* Areas Grid */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceAreas.map((area) => (
                <StaggerItem key={area} direction="left">
                  <motion.div
                    whileHover={{ x: 5, backgroundColor: 'rgba(242, 240, 71, 0.1)' }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-brand-yellow transition-colors duration-300 py-2 px-3 rounded-lg cursor-default"
                  >
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{area}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right - Contact Card */}
          <ScrollReveal direction="right" className="flex items-center">
            <div className="bg-brand-dark-gray rounded-2xl p-8 w-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                Need Car Removal?
              </h3>
              <p className="text-gray-400 mb-8">
                We offer same-day service across all Perth suburbs. Call us now 
                for a free quote and we'll be there within hours.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Call us anytime</p>
                    <a 
                      href="tel:0475625766" 
                      className="text-white font-bold text-lg hover:text-brand-yellow transition-colors duration-300"
                    >
                      0475 625 766
                    </a>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full bg-brand-yellow text-brand-black font-semibold py-4 rounded-xl text-center hover:bg-brand-light-green transition-colors duration-300"
              >
                Get a Free Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
