"use client";

import { motion } from 'framer-motion';
import { Sparkles, Target, Users, Zap } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

const reasons = [
  {
    title: 'Strategic Thinking',
    description: 'Every design decision is backed by research and aligned with your business goals.',
    icon: Sparkles,
    gradient: 'from-brand-cyan/10 to-brand-blue/10',
    iconColor: 'text-brand-cyan',
  },
  {
    title: 'Full-Service Creative',
    description: 'From branding to motion graphics, video editing to web design — all under one roof.',
    icon: Target,
    gradient: 'from-brand-purple/10 to-pink-500/10',
    iconColor: 'text-brand-purple',
  },
  {
    title: 'Client-Centered Process',
    description: 'Collaborative workflows with clear timelines and transparent communication.',
    icon: Users,
    gradient: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-400',
  },
  {
    title: 'Passion for Details',
    description: 'Pixel-perfect execution and obsessive attention to typography, spacing, and color.',
    icon: Zap,
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-400',
  },
];

const WhyWorkWithMeSection = () => {
  return (
    <section id="why-work-with-me" className="relative py-24 lg:py-32 bg-dark-primary overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Me"
          badgeColor="cyan"
          heading={
            <>
              The <span className="gradient-text">Kim Designs</span> Difference
            </>
          }
          subheading="I bring a rare combination of creative vision and strategic execution to every project."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-8 text-center card-hover h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <reason.icon className={`h-7 w-7 ${reason.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-light-primary mb-3">{reason.title}</h3>
                <p className="text-light-muted text-sm leading-relaxed">{reason.description}</p>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMeSection;