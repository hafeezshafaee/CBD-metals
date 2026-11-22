import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, DollarSign, Truck, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { submitQuote } from '@/lib/quote';

const benefits = [
  { icon: DollarSign, text: 'Cash offers for unwanted cars' },
  { icon: Truck, text: 'Free car removal' },
  { icon: Clock, text: 'Collection arranged to suit you' },
  { icon: CheckCircle, text: 'All vehicles accepted' },
];

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carMake: '',
    year: '',
    message: '',
  });

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
      setFormData({ name: '', phone: '', email: '', carMake: '', year: '', message: '' });
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
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%), url('/images/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-semibold text-sm mb-6"
            >
              Scrap Car Removal Across Perth
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Scrap Car Removal Perth &{' '}
              <span className="text-brand-yellow">Cash for Cars</span>
              Made Simple
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 max-w-xl"
            >
              Get a competitive cash offer for your unwanted vehicle, with convenient car collection across Perth and surrounding areas.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => window.location.href = '/contact'}
                className="bg-brand-yellow text-brand-black font-semibold px-8 py-6 rounded-lg hover:bg-brand-light transition-all duration-300 text-lg"
              >
                Get a Free Quote
              </Button>
              <a
                href="tel:0475625766"
                className="bg-brand-yellow text-brand-black font-semibold px-8 py-2 rounded-lg hover:bg-brand-light-green transition-all duration-300 text-lg inline-flex items-center justify-center gap-1"
              >
                <Phone className="w-5 h-5" />
                Call 0475 625 766
              </a>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="bg-brand-dark-gray/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Get A Free Quote
            </h3>
            <p className="text-gray-400 mb-6">
              Enter your vehicle details and we will get back to you with a free quote.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="New website quote request - Homepage" />
              <input type="hidden" name="form_source" value="Homepage hero quote form" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    aria-label="Your name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-white/30 text-white placeholder:text-gray-500 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    aria-label="Phone number"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-white/30 text-white placeholder:text-gray-500 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow"
                  />
                </div>
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                    aria-label="Email address"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-white/30 text-white placeholder:text-gray-500 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="carMake"
                    aria-label="Car make and model"
                    placeholder="Car Make/Model"
                    value={formData.carMake}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-white/30 text-white placeholder:text-gray-500 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="year"
                    aria-label="Vehicle year"
                    placeholder="Year"
                    value={formData.year}
                    onChange={handleChange}
                    className="bg-transparent border-white/30 text-white placeholder:text-gray-500 h-12 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow"
                  />
                </div>
              </div>

              <div>
                <Textarea
                  name="message"
                    aria-label="Additional vehicle information"
                  placeholder="Additional Information (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="bg-transparent border-white/30 text-white placeholder:text-gray-500 rounded-lg focus:border-brand-yellow focus:ring-brand-yellow resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-yellow text-brand-black font-semibold py-6 rounded-lg hover:bg-brand-light-green transition-all duration-300 text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
              </Button>

              {submitStatus && (
                <p role="status" aria-live="polite" className={`text-sm text-center ${submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {submitStatus.message}
                </p>
              )}

              <p className="text-center text-gray-500 text-sm">
                Or call us directly:{' '}
                <a href="tel:0475625766" className="text-brand-yellow hover:underline">
                  0475 625 766
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
