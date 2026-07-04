"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-dark-secondary overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 -right-6 lg:-right-12 glass rounded-2xl p-6 shadow-2xl z-10"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-light-primary">8+</div>
                <div className="text-xs text-light-muted uppercase tracking-wider font-semibold">Years Exp.</div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="w-full aspect-square max-w-lg mx-auto lg:mx-0 rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl shadow-black/40 overflow-hidden">
                <Image
                  src="/portfolio/ace-africana/WhatsApp Image 2025-06-08 at 7.11.43 PM (1).jpeg"
                  alt="James Kimani - Brand Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-sm font-semibold mb-6 border border-rose-500/20">
                About Me
              </span>
              <h2 className="section-heading">
                Creative <span className="gradient-text-alt">Visionary</span> with a Purpose
              </h2>
            </div>

            <div className="space-y-6 text-lg text-light-secondary leading-relaxed">
              <p>
                I&apos;m a Nairobi-based graphic designer with over 8 years of experience crafting visual identities that help brands stand out.
              </p>
              <p>
                My approach combines strategic thinking with creative execution, ensuring every design decision serves a purpose. From startups to established businesses, I help clients communicate their vision through compelling visual storytelling.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-3xl overflow-hidden card-hover"
            >
              <div className="flex items-center p-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/portfolio/ace-africana/WhatsApp Image 2025-06-08 at 7.11.43 PM (1).jpeg"
                    alt="James Kimani"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-light-primary">James Kimani</h3>
                  <p className="text-sm text-light-muted font-medium">
                    Brand Designer & Motion Graphics Specialist
                  </p>
                  <p className="text-sm text-light-secondary mt-1">Nairobi, Kenya</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card rounded-2xl p-6 text-center card-hover">
                <p className="text-3xl font-bold text-light-primary mb-1">150+</p>
                <p className="text-sm text-light-muted">Projects Delivered</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center card-hover">
                <p className="text-3xl font-bold text-light-primary mb-1">98%</p>
                <p className="text-sm text-light-muted">Client Satisfaction</p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="#contact" className="btn-premium">
                Let&apos;s Work Together
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;