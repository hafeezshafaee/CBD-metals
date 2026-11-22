import { useState } from 'react';
import Seo from '@/components/Seo';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { submitQuote } from '@/lib/quote';
import ScrollReveal from '@/components/ScrollReveal';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '0475 625 766', href: 'tel:0475625766' },
  { icon: Mail, label: 'Email', value: 'cbdscrapcarremoval@gmail.com', href: 'mailto:cbdscrapcarremoval@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'Perth, Western Australia', href: 'https://maps.app.goo.gl/WgD84uHtJ1oPJNQt6' },
  { icon: Clock, label: 'Hours', value: 'Mon – Sat: 7:00 AM – 7:00 PM', href: null },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', carDetails: '', message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await submitQuote(form);
      setSubmitStatus({ type: 'success', message: 'Thanks! Your quote request has been sent. We will contact you shortly.' });
      setFormData({ name: '', phone: '', email: '', carDetails: '', message: '' });
      form.reset();
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error instanceof Error ? error.message : 'Something went wrong. Please call us instead.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      <Seo title="Contact CBD Scrap Car Removal | Get a Free Perth Quote" description="Contact CBD Scrap Car Removal for a free quote on your unwanted car. Call 0475 625 766 or request a scrap car pickup in Perth." path="/contact" keywords={['scrap car quote Perth', 'cash for cars contact Perth', 'car removal phone number']} />
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-brand-new-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-4">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get Your <span className="text-brand-yellow">Free Quote</span> Today
            </h1>
            <p className="text-lg text-gray-400">
              Call us now or fill out the form below. Request a quote for your vehicle and our team will respond as soon as possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Info */}
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-brand-black mb-4">Contact Information</h2>
                  <p className="text-brand-light-gray leading-relaxed">
                    Reach out through any of the channels below. Our friendly team is ready to give you a fast, fair quote for your vehicle — no pressure, no obligation.
                  </p>
                </div>

                <div className="space-y-5">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-brand-yellow" />
                      </div>
                      <div>
                        <p className="text-brand-light-gray text-sm mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-brand-black font-semibold hover:text-brand-yellow transition-colors duration-300">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-brand-black font-semibold">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick steps */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-brand-black mb-4">What Happens After You Contact Us?</h3>
                  <div className="space-y-3">
                    {[
                      'We review your vehicle details and respond',
                      'You get a free, no-obligation quote',
                      'We schedule a convenient pickup time',
                      'Cash paid on the spot at pickup',
                    ].map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-brand-black text-xs font-bold">{i + 1}</span>
                        </div>
                        <span className="text-brand-black/80 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-brand-light-gray mb-4">Prefer to call? We're available now:</p>
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
              <div className="bg-brand-new-black rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Request a Free Quote</h3>
                <p className="text-gray-400 mb-8">Enter your vehicle details and we will get back to you with a free quote.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="_subject" value="New website quote request - Contact page" />
                  <input type="hidden" name="form_source" value="Contact page" />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Your Name *</label>
                      <Input type="text" name="name" placeholder="John Smith" value={formData.name} onChange={handleChange} required className="bg-brand-dark-gray border-white/10 text-white placeholder:text-gray-600 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow" />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Phone Number *</label>
                      <Input type="tel" name="phone" placeholder="04XX XXX XXX" value={formData.phone} onChange={handleChange} required className="bg-brand-dark-gray border-white/10 text-white placeholder:text-gray-600 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                    <Input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} className="bg-brand-dark-gray border-white/10 text-white placeholder:text-gray-600 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Car Make / Model / Year *</label>
                    <Input type="text" name="carDetails" placeholder="e.g., Toyota Camry 2010" value={formData.carDetails} onChange={handleChange} required className="bg-brand-dark-gray border-white/10 text-white placeholder:text-gray-600 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Additional Information</label>
                    <Textarea name="message" placeholder="Any details about your vehicle condition, location, etc..." value={formData.message} onChange={handleChange} rows={4} className="bg-brand-dark-gray border-white/10 text-white placeholder:text-gray-600 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow resize-none" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-yellow text-brand-black font-semibold py-6 rounded-lg hover:bg-brand-light-green transition-all duration-300 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
                  </Button>
                  {submitStatus && (
                    <p role="status" aria-live="polite" className={`text-sm text-center ${submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {submitStatus.message}
                    </p>
                  )}
                  <p className="text-center text-gray-500 text-sm">Your details are sent securely so our team can prepare your quote.</p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
}
