import Seo from '@/components/Seo';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import WhyChooseUs from '@/sections/WhyChooseUs';
import HowItWorks from '@/sections/HowItWorks';
import CarBrands from '@/sections/CarBrands';
import ServiceAreas from '@/sections/ServiceAreas';
import FAQ from '@/sections/FAQ';
import Contact from '@/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Seo
      title="Scrap Car Removal Perth | Cash for Cars & Free Car Removal"
      description="Need scrap car removal in Perth? Get a free cash offer for unwanted, damaged and old cars. Free vehicle pickup across Perth. Call CBD Scrap Car Removal on 0475 625 766."
      path="/"
      keywords={['scrap car Perth', 'scrap car removal Perth', 'car removal Perth', 'cash for cars Perth', 'cash for scrap cars', 'free car removal Perth', 'sell my scrap car', 'cash on delivery scrap car Perth']}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'AutomotiveBusiness',
        name: 'CBD Scrap Car Removal',
        telephone: '+61475625766',
        email: 'cbdscrapcarremoval@gmail.com',
        areaServed: { '@type': 'City', name: 'Perth' },
        address: { '@type': 'PostalAddress', addressLocality: 'Perth', addressRegion: 'WA', addressCountry: 'AU' },
        priceRange: 'Free quotes',
        description: 'Scrap car buying and vehicle removal service in Perth, Western Australia.'
      }}
    />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <CarBrands />
      <ServiceAreas />
      <FAQ />
      <Contact />
    </>
  );
}
