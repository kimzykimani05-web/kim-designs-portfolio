"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Palette, Video, Film, Layout, Monitor, Image, Sparkles } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

const services = [
  {
    title: 'Brand Identity & Logo Design',
    description: 'Creating distinctive brand identities that resonate with your audience and differentiate you from competitors.',
    deliverables: ['Logo Design', 'Brand Systems', 'Brand Guidelines', 'Rebranding'],
    icon: Palette,
    gradient: 'from-brand-cyan/10 to-brand-blue/10',
    iconColor: 'text-brand-cyan',
    accent: 'cyan',
  },
  {
    title: 'Motion Graphics & Animation',
    description: 'Bringing ideas to life with engaging animations that capture attention and communicate complex messages simply.',
    deliverables: ['Social Media Animations', 'Promotional Videos', 'Animated Logos', 'Explainer Animations'],
    icon: Video,
    gradient: 'from-brand-purple/10 to-pink-500/10',
    iconColor: 'text-brand-purple',
    accent: 'purple',
  },
  {
    title: 'Video Editing & Post Production',
    description: 'Professional video editing that transforms raw footage into polished, engaging content for any platform.',
    deliverables: ['Commercial Editing', 'YouTube Editing', 'Reels & Shorts', 'Color Correction'],
    icon: Film,
    gradient: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-400',
    accent: 'amber',
  },
  {
    title: 'Print & Digital Design',
    description: 'High-quality print and digital designs that make an impact across all marketing channels.',
    deliverables: ['Brochures', 'Catalogues', 'Flyers', 'Posters', 'Company Profiles'],
    icon: Layout,
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-400',
    accent: 'emerald',
  },
  {
    title: 'Website Design',
    description: 'Modern, responsive websites that provide exceptional user experience and drive conversions.',
    deliverables: ['Portfolio Websites', 'Business Websites', 'Landing Pages', 'Responsive Design'],
    icon: Monitor,
    gradient: 'from-indigo-500/10 to-violet-500/10',
    iconColor: 'text-indigo-400',
    accent: 'indigo',
  },
  {
    title: 'Visual Content Creation',
    description: 'Compelling visual content for social media, marketing campaigns, and brand storytelling.',
    deliverables: ['Social Media Content', 'Marketing Assets', 'Ad Creatives', 'Campaign Visuals'],
    icon: Image,
    gradient: 'from-rose-500/10 to-pink-500/10',
    iconColor: 'text-rose-400',
    accent: 'rose',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-dark-primary overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="What I Do"
          badgeColor="purple"
          heading={
            <>
              Services that <span className="gradient-text">Elevate Brands</span>
            </>
          }
          subheading="From concept to execution, I deliver end-to-end creative solutions that help businesses thrive in the digital age."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="glass-card rounded-3xl p-8 lg:p-10 h-full flex flex-col card-hover">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-light-primary mb-3">{service.title}</h3>
                <p className="text-light-secondary leading-relaxed mb-6 flex-grow">{service.description}</p>

                {/* Deliverables */}
                <div className="space-y-2.5 mb-6">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center space-x-2.5 text-sm text-light-muted">
                      <span className={`h-1.5 w-1.5 rounded-full bg-${service.accent}-400`}></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  href="#contact" 
                  className={`inline-flex items-center text-sm font-semibold text-${service.accent}-400 hover:text-${service.accent}-300 transition-colors mt-auto group/link`}
                >
                  Get Started
                  <Sparkles className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;