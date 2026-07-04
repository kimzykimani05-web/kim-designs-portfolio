"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  Palette,
  Layout,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  ExternalLink,
  Play,
} from 'lucide-react';
import portfolioData from '../app/data/portfolio.json';

const trustStats = [
  { icon: Award, value: 150, suffix: '+', label: 'Projects Delivered' },
  { icon: Star, value: 8, suffix: '+', label: 'Years Experience' },
  { icon: Users, value: 50, suffix: '+', label: 'Happy Clients' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const featuredProjects = portfolioData.projects.filter((p: any) => p.featured);
const brandingProject = featuredProjects.find((p: any) => p.category === 'Branding');
const websiteProject = featuredProjects.find((p: any) => p.category === 'Website Design');
const motionProject = featuredProjects.find((p: any) => p.category === 'Motion Graphics');

const scrollToSection = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const AnimatedCounter = ({ value, suffix, duration = 2.5 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix || ''}</span>;
};

const MagneticButton = ({ children, className, onClick, style, title }: { children: React.ReactNode; className?: string; onClick?: (e: React.MouseEvent<HTMLDivElement>) => void; style?: React.CSSProperties; title?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    onClick?.(e);
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={style}
      title={title}
    >
      {children}
    </motion.div>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroFloat = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setHeroMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const handle = () => window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handle();
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 20% 20%, rgba(0, 198, 255, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 80% 100% at 80% 10%, rgba(139, 92, 246, 0.07) 0%, transparent 45%),
          radial-gradient(ellipse 100% 60% at 50% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, #070B14 0%, #0A1020 35%, #070B14 100%)
        `,
      }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-60 transition-opacity duration-700"
        style={{
          background: `radial-gradient(700px circle at ${heroMouse.x}px ${heroMouse.y}px, rgba(0,198,255,0.06), rgba(139,92,246,0.03), transparent 50%)`,
          mixBlendMode: 'screen',
        }}
      />
      
      <div className="absolute inset-0 -z-20 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 70%)',
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ opacity }}
        className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 w-full relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div variants={containerVariants} className="lg:col-span-6 space-y-6 sm:space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full relative group cursor-default"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 198, 255, 0.1) 0%, rgba(139, 92, 246, 0.06) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 30px -8px rgba(0, 198, 255, 0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
              whileHover={{ y: -2, scale: 1.02 }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan shadow-[0_0_12px_rgba(0,198,255,0.9)]"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-brand-cyan tracking-wide uppercase" style={{ letterSpacing: '0.08em' }}>
                Available for Freelance
              </span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,198,255,0.12) 0%, transparent 70%)' }}
              />
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-extrabold text-[clamp(2rem,6vw,4rem)] leading-[1.1] tracking-tight" style={{ color: 'var(--text-primary)' }}>
              <span className="block text-balance" style={{ textShadow: '0 0 80px rgba(0, 198, 255, 0.05)' }}>Building Brands</span>
              <span className="block mt-1.5 sm:mt-2 text-balance"
                style={{
                  background: 'linear-gradient(135deg, #00C6FF 0%, #3B82F6 35%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(0,198,255,0.12))',
                }}>
                People Remember
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="responsive-text-lg max-w-[540px] lg:max-w-[580px] mt-3 sm:mt-4" style={{ color: 'var(--text-secondary)' }}>
              I partner with visionary Kenyan businesses and entrepreneurs to craft brand identities, motion graphics, and high-converting websites that transform first impressions into lasting customer loyalty.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="block w-full sm:w-auto">
                <MagneticButton className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-white overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-cyan"
                  style={{
                    background: 'linear-gradient(135deg, #00C6FF 0%, #3B82F6 40%, #8B5CF6 100%)',
                    backgroundSize: '200% 200%',
                    boxShadow: '0 10px 40px -8px rgba(59, 130, 246, 0.5)',
                    willChange: 'transform',
                    width: '100%',
                  }}>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'radial-gradient(circle at 50% 120%, rgba(255,255,255,0.25) 0%, transparent 60%)' }}
                  />
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
                  />
                  <span className="relative flex items-center justify-center">
                    <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="mr-2 text-sm sm:text-base lg:text-lg whitespace-nowrap">Let's Build Your Brand</span>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </MagneticButton>
              </Link>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }} className="w-full sm:w-auto">
                <Link href="#portfolio" onClick={(e) => scrollToSection(e, '#portfolio')}
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-light-primary transition-all duration-300 hover:border-brand-blue/40 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '2px solid rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(12px)',
                    width: '100%',
                  }}>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ background: 'radial-gradient(circle at 50% 120%, rgba(0, 198, 255, 0.1) 0%, transparent 60%)', border: '2px solid rgba(0, 198, 255, 0.25)' }}
                  />
                  <span className="relative flex items-center justify-center">
                    <Layout className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base lg:text-lg whitespace-nowrap">View Portfolio</span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 lg:gap-8 pt-4">
              {trustStats.map((stat, index) => {
                const StatIcon: any = stat.icon;
                return (
                  <motion.div key={stat.label} variants={itemVariants} whileHover={{ y: -3, scale: 1.02 }} className="flex items-center space-x-2.5 sm:space-x-3.5 group cursor-default">
                    <div className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 198, 255, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 0 20px -6px rgba(0, 198, 255, 0.1)',
                      }}>
                      <StatIcon className="h-4 w-4 sm:h-5 sm:w-5 text-brand-cyan" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base lg:text-lg font-extrabold text-light-primary leading-tight tracking-tight">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-[10px] sm:text-xs text-light-muted font-medium leading-tight">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-6 relative h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[540px] mt-12 lg:mt-0">
            <motion.div {...(!prefersReducedMotion ? heroFloat : {})}
              className="relative w-full h-full rounded-3xl overflow-hidden z-20 group mx-auto max-w-sm sm:max-w-md lg:max-w-none"
              style={{
                boxShadow: '0 40px 100px -25px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 80px -20px rgba(0, 198, 255, 0.2)',
                willChange: 'transform',
              }}>
              {brandingProject && (
                <div className="relative w-full h-full">
                  <Image src={brandingProject.thumbnail} alt={`${brandingProject.clientName} Brand Identity`} fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 448px" className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/95 via-dark-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
                    <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, #00C6FF 0%, #8B5CF6 100%)',
                          boxShadow: '0 0 20px rgba(0, 198, 255, 0.3), 0 0 0 1px rgba(255,255,255,0.1) inset',
                        }}>
                        <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-light-primary uppercase tracking-widest">Brand Identity</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-light-primary mb-1 tracking-tight">{brandingProject.clientName}</h3>
                    <p className="text-xs sm:text-sm text-light-muted font-medium">Logo Design & Brand Guidelines</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center space-y-2 opacity-50 pointer-events-none">
        <motion.div animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="flex flex-col items-center">
          <span className="text-[10px] font-bold text-light-muted uppercase tracking-[0.2em] mb-1.5">Scroll</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border border-white/25 flex items-start justify-center p-1 sm:p-1.5">
            <motion.div animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="w-1 h-1.5 sm:h-2 rounded-full bg-brand-cyan" />
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;