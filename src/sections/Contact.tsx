import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import ScrollReveal from '@/components/ScrollReveal';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '0475 625 766',
    href: 'tel:0475625766',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@cbdscrapcarremoval.com.au',
    href: 'mailto:info@cbdscrapcarremoval.com.au',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '4 Attwell Street, Landsdale WA 6065',
    href: 'https://maps.google.com/?q=4+Attwell+Street,+Landsdale+WA+6065',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon - Sat: 7:00 AM - 7:00 PM',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carDetails: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you shortly with your free quote.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      carDetails: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-new-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Your <span className="text-brand-yellow">Free Quote</span> Today
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Call us now or fill out the form below. We'll get back to you within 
            minutes with a competitive offer for your vehicle.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-400 mb-8">
                  Reach out to us through any of the following channels. Our team 
                  is ready to assist you 24/7.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white font-semibold hover:text-brand-yellow transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="pt-8 border-t border-brand-dark-gray">
                <p className="text-gray-400 mb-4">
                  Prefer to call? We're available now!
                </p>
                <motion.a
                  href="tel:0475625766"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-brand-yellow text-brand-black font-semibold px-6 py-4 rounded-xl hover:bg-brand-light-green transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call 0475 625 766
                </motion.a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal direction="right">
            <div className="bg-brand-dark-gray rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Request a Free Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-brand-new-black border-white/20 text-white placeholder:text-gray-600 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="04XX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-brand-new-black border-white/20 text-white placeholder:text-gray-600 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-brand-new-black border-white/20 text-white placeholder:text-gray-600 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Car Make/Model/Year *
                  </label>
                  <Input
                    type="text"
                    name="carDetails"
                    placeholder="e.g., Toyota Camry 2010"
                    value={formData.carDetails}
                    onChange={handleChange}
                    required
                    className="bg-brand-new-black border-white/20 text-white placeholder:text-gray-600 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Any details about your vehicle condition..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-brand-new-black border-white/20 text-white placeholder:text-gray-600 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-yellow text-brand-black font-semibold py-6 rounded-lg hover:bg-brand-light-green transition-all duration-300 text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Get My Free Quote
                </Button>

                <p className="text-center text-gray-500 text-sm">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
