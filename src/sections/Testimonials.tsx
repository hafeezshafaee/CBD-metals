import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const testimonials = [
  {
    name: 'John M.',
    location: 'Perth',
    rating: 5,
    text: 'Excellent service! Got $4,500 for my old Honda. The team was professional and arrived on time. Highly recommend!',
  },
  {
    name: 'Sarah K.',
    location: 'Joondalup',
    rating: 5,
    text: 'So easy to deal with. Called in the morning, car was gone by afternoon with cash in hand. Thank you!',
  },
  {
    name: 'Michael T.',
    location: 'Rockingham',
    rating: 5,
    text: 'Best price I could find for my scrap car. Free towing and instant payment. Great experience!',
  },
  {
    name: 'Lisa R.',
    location: 'Cannington',
    rating: 5,
    text: 'Very professional service. They handled all the paperwork and I got paid on the spot. Would definitely use again.',
  },
  {
    name: 'David W.',
    location: 'Fremantle',
    rating: 5,
    text: 'Called them for my broken down truck. They gave me a fair price and removed it the same day. Excellent!',
  },
  {
    name: 'Emma S.',
    location: 'Midland',
    rating: 5,
    text: 'Friendly staff, quick service, and best of all - cash in hand! Couldn\'t ask for more.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-brand-light-blue">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block bg-brand-black text-white px-4 py-2 rounded-lg font-semibold text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-brand-light-gray max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers 
            who have experienced our professional car removal service.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 h-full relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
                  <Quote className="w-5 h-5 text-brand-yellow" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-brand-yellow text-brand-yellow"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-brand-black/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-brand-light-gray">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Badge */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-card">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-brand-black rounded-full border-2 border-white flex items-center justify-center"
                >
                  <span className="text-white text-xs font-semibold">
                    {String.fromCharCode(65 + i)}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-brand-black">5.0 Rating</p>
              <p className="text-sm text-brand-light-gray">Based on 500+ reviews</p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-brand-yellow text-brand-yellow"
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
