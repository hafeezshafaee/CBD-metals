import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

// Car brand names - using text instead of logos for simplicity and copyright
const brands = [
  'Toyota',
  'Mitsubishi',
  'Nissan',
  'Mazda',
  'BMW',
  'Volkswagen',
  'Volvo',
  'Holden',
  'Ford',
  'Kia',
  'Subaru',
  'Honda',
  'Hyundai',
  'Mercedes',
  'Audi',
  'Renault',
];

export default function CarBrands() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">
            We Buy All Brands
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            We Buy All Makes & Models
          </h2>
          <p className="text-lg text-brand-light-gray max-w-2xl mx-auto">
            We accept all vehicle brands, regardless of condition. From Japanese 
            imports to European luxury cars, we buy them all.
          </p>
        </ScrollReveal>

        {/* Brands Grid */}
        <StaggerContainer className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
          {brands.map((brand) => (
            <StaggerItem key={brand}>
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#f2f047',
                  color: '#000000'
                }}
                transition={{ duration: 0.2 }}
                className="bg-gray-100 rounded-xl p-4 flex items-center justify-center h-16 cursor-pointer group"
              >
                <span className="font-semibold text-sm text-brand-black/70 group-hover:text-brand-black transition-colors duration-200">
                  {brand}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Note */}
        <ScrollReveal delay={0.3} className="text-center mt-10">
          <p className="text-brand-light-gray">
            Don't see your brand?{' '}
            <Link
              to="/contact"
              className="text-brand-black font-semibold hover:underline"
            >
              Contact us
            </Link>{' '}
            - we buy all vehicles!
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
