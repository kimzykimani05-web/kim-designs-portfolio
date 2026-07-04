"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-b from-dark-secondary to-dark-primary overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          badgeColor="rose"
          heading={
            <>
              Let's Create Something <span className="gradient-text-alt">Amazing</span>
            </>
          }
          subheading="Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how I can help bring your vision to life."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-light-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
<div className="flex items-start space-x-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-cyan/5 flex items-center justify-center">
                     <Mail className="h-5 w-5 text-brand-cyan" />
                   </div>
                   <div>
                     <p className="text-sm text-light-muted mb-1">Email</p>
                     <a href="mailto:lesalonjames@gmail.com" className="text-light-primary font-semibold hover:text-brand-cyan transition-colors">
                       lesalonjames@gmail.com
                     </a>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 flex items-center justify-center">
                     <Phone className="h-5 w-5 text-brand-purple" />
                   </div>
                   <div>
                     <p className="text-sm text-light-muted mb-1">Phone</p>
                     <a href="tel:+254704140920" className="text-light-primary font-semibold hover:text-brand-cyan transition-colors">
                       +254 704 140920
                     </a>
                   </div>
                 </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-light-muted mb-1">Location</p>
                    <p className="text-light-primary font-semibold">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust indicator */}
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex -space-x-3">
                  {['SW', 'DO', 'GM'].map((initials) => (
                    <div key={initials} className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 border-2 border-dark-card flex items-center justify-center text-xs font-bold text-brand-cyan">
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-light-primary">Trusted by 50+ clients</p>
                  <p className="text-xs text-light-muted">Worldwide</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
                <span className="text-sm text-light-muted ml-2">4.9/5 average rating</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-light-primary mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-light-secondary mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3.5 rounded-xl bg-dark-card border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-light-secondary mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3.5 rounded-xl bg-dark-card border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-light-secondary mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3.5 rounded-xl bg-dark-card border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all">
                    <option>Select a service</option>
                    <option>Brand Identity</option>
                    <option>Motion Graphics</option>
                    <option>Video Editing</option>
                    <option>Web Design</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-light-secondary mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl bg-dark-card border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-premium w-full md:w-auto"
                >
                  Send Message
                  <Mail className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;