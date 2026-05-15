import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import WhyChooseUs from '@/sections/WhyChooseUs';
import HowItWorks from '@/sections/HowItWorks';
import CarBrands from '@/sections/CarBrands';
import ServiceAreas from '@/sections/ServiceAreas';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import Contact from '@/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <CarBrands />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
