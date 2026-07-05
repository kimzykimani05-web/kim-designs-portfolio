"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 bg-dark-secondary overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 lg:self-stretch"
          >
            <div className="h-full lg:max-w-lg">
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-0 rounded-2xl sm:rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl shadow-black/40 overflow-hidden">
                <Image
                  src="/my-profile-image.png"
                  alt="James Kimani - Brand Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div>
              <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs sm:text-sm font-semibold mb-5 sm:mb-6 border border-rose-500/20">
                About Me
              </span>
              <h2 className="section-heading text-left md:text-center lg:text-left">
                Creative <span className="gradient-text-alt">Visionary</span> with a Purpose
              </h2>
            </div>

            <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-light-secondary leading-relaxed">
              <p>
                I'm a Nairobi-based graphic designer with over 8 years of experience crafting visual identities that help brands stand out.
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
              className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden card-hover"
            >
              <div className="flex items-center p-5 sm:p-6">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/my-logo.png"
                    alt="Kim Designs Logo"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3 className="text-lg sm:text-xl font-bold text-light-primary mb-1">James Kimani</h3>
                  <p className="text-xs sm:text-sm text-light-muted font-medium">
                    Brand Designer & Motion Graphics Specialist
                  </p>
                  <p className="text-xs sm:text-sm text-light-secondary mt-1">Nairobi, Kenya</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 pt-3 sm:pt-4">
              <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center card-hover">
                <p className="text-2xl sm:text-3xl font-bold text-light-primary mb-1">150+</p>
                <p className="text-xs sm:text-sm text-light-muted">Projects Delivered</p>
              </div>
              <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center card-hover">
                <p className="text-2xl sm:text-3xl font-bold text-light-primary mb-1">98%</p>
                <p className="text-xs sm:text-sm text-light-muted">Client Satisfaction</p>
              </div>
            </div>

            <div className="pt-3 sm:pt-4">
              <Link href="#contact" className="btn-premium">
                Let's Work Together
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;