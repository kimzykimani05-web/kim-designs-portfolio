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

const featuredProjects = portfolioData.projects.filter((p: any) => p.featured).slice(0, 4);
const brandingProject = featuredProjects[0];
const websiteProject = featuredProjects[1] || portfolioData.projects.find((p: any) => p.category === 'Website Design');
const motionProject = featuredProjects[2] || portfolioData.projects.find((p: any) => p.category === 'Motion Graphics');

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

const premiumFloat = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 0.5, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
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
      className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
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
        animate={{
          x: [0, 40, -25, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[15%] left-[5%] w-[28rem] h-[28rem] bg-brand-cyan/[0.07] rounded-full blur-[120px] -z-20"
      />
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[10%] right-[5%] w-[32rem] h-[32rem] bg-brand-purple/[0.06] rounded-full blur-[160px] -z-20"
      />
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[45%] left-[40%] w-[22rem] h-[22rem] bg-brand-blue/[0.05] rounded-full blur-[100px] -z-20"
      />
      <motion.div
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 20, -25, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[60%] right-[20%] w-72 h-72 bg-brand-cyan/[0.04] rounded-full blur-[100px] -z-20"
      />

      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent blur-sm" />
        <div className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent blur-sm" />
        <div className="absolute top-[45%] -left-20 w-40 h-px bg-gradient-to-r from-brand-cyan/20 to-transparent blur-sm rotate-12" />
      </div>

      <div className="absolute inset-0 -z-20 opacity-[0.022] pointer-events-none grain-texture"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ opacity }}
        className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 w-full relative z-10"
      >
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-20 items-center">
          <motion.div variants={containerVariants} className="xl:col-span-6 space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full relative group cursor-default"
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
              <span className="text-sm font-bold text-brand-cyan tracking-wide uppercase" style={{ letterSpacing: '0.08em' }}>
                Available for Freelance
              </span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,198,255,0.12) 0%, transparent 70%)' }}
              />
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.08] tracking-tight" style={{ color: 'var(--text-primary)' }}>
              <span className="block text-balance" style={{ textShadow: '0 0 120px rgba(0, 198, 255, 0.06)' }}>Building Brands</span>
              <span className="block mt-2 text-balance"
                style={{
                  background: 'linear-gradient(135deg, #00C6FF 0%, #3B82F6 35%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 30px rgba(0,198,255,0.15))',
                }}>
                People Remember
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base lg:text-lg leading-relaxed max-w-[540px] lg:max-w-[580px] mt-4" style={{ color: 'var(--text-secondary)' }}>
              I partner with visionary Kenyan businesses and entrepreneurs to craft brand identities, motion graphics, and high-converting websites that transform first impressions into lasting customer loyalty.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="block">
                <MagneticButton className="group relative inline-flex items-center px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-cyan"
                  style={{
                    background: 'linear-gradient(135deg, #00C6FF 0%, #3B82F6 40%, #8B5CF6 100%)',
                    backgroundSize: '200% 200%',
                    boxShadow: '0 10px 40px -8px rgba(59, 130, 246, 0.5)',
                    willChange: 'transform',
                  }}>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'radial-gradient(circle at 50% 120%, rgba(255,255,255,0.25) 0%, transparent 60%)' }}
                  />
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
                  />
                  <span className="relative flex items-center">
                    <Sparkles className="mr-2.5 h-5 w-5" />
                    <span className="mr-2 text-base lg:text-lg">Let&apos;s Build Your Brand</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </MagneticButton>
              </Link>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                <Link href="#portfolio" onClick={(e) => scrollToSection(e, '#portfolio')}
                  className="group relative inline-flex items-center px-8 py-4 rounded-full font-bold text-light-primary transition-all duration-300 hover:border-brand-blue/40 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '2px solid rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(12px)',
                  }}>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ background: 'radial-gradient(circle at 50% 120%, rgba(0, 198, 255, 0.1) 0%, transparent 60%)', border: '2px solid rgba(0, 198, 255, 0.25)' }}
                  />
                  <span className="relative flex items-center">
                    <Layout className="mr-2.5 h-5 w-5" />
                    <span className="text-base lg:text-lg">View Portfolio</span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 lg:gap-8 pt-4">
              {trustStats.map((stat, index) => {
                const StatIcon: any = stat.icon;
                return (
                  <motion.div key={stat.label} variants={itemVariants} whileHover={{ y: -3, scale: 1.02 }} className="flex items-center space-x-3.5 group cursor-default">
                    <div className="flex items-center justify-center w-11 h-11 rounded-2xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 198, 255, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 0 20px -6px rgba(0, 198, 255, 0.1)',
                      }}>
                      <StatIcon className="h-5 w-5 text-brand-cyan" />
                    </div>
                    <div>
                      <div className="text-base lg:text-lg font-extrabold text-light-primary leading-tight tracking-tight">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs text-light-muted font-medium leading-tight">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="xl:col-span-6 relative h-[480px] sm:h-[520px] md:h-[540px] lg:h-[560px] xl:h-[600px]">
            <motion.div {...(!prefersReducedMotion ? premiumFloat : {})}
              className="absolute inset-0 top-0 right-0 lg:right-8 w-full sm:w-[22rem] md:w-[26rem] lg:w-[28rem] h-full rounded-[2.5rem] overflow-hidden z-30 group"
              style={{
                boxShadow: '0 50px 100px -25px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 120px -30px rgba(0, 198, 255, 0.25)',
                willChange: 'transform',
              }}>
              {brandingProject && (
                <div className="relative w-full h-full">
                  <Image src={brandingProject.thumbnail} alt={`${brandingProject.clientName} Brand Identity`} fill
                    sizes="(max-width: 768px) 384px, 448px" className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/95 via-dark-primary/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/15 via-transparent to-brand-purple/15 opacity-60 mix-blend-soft-light" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/8 to-transparent backdrop-blur-[3px] pointer-events-none rounded-b-[2.5rem]" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, #00C6FF 0%, #8B5CF6 100%)',
                          boxShadow: '0 0 28px rgba(0, 198, 255, 0.4), 0 0 0 1px rgba(255,255,255,0.1) inset',
                        }}>
                        <Palette className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xs lg:text-sm font-bold text-light-primary uppercase tracking-widest">Brand Identity</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-light-primary mb-1.5 tracking-tight">{brandingProject.clientName}</h3>
                    <p className="text-sm text-light-muted font-medium">Logo Design & Brand Guidelines</p>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                          {[1,2,3].map((i) => (
                            <div key={i} className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-dark-primary transition-transform duration-300 group-hover:scale-110"
                              style={{ background: `linear-gradient(135deg, rgba(0, 198, 255, ${0.3 + i * 0.15}) 0%, rgba(139, 92, 246, ${0.3 + i * 0.15}) 100%)` }} />
                          ))}
                        </div>
                        <span className="text-xs lg:text-sm text-light-muted font-medium group-hover:text-brand-cyan transition-colors duration-300">View Project</span>
                      </div>
                      <ExternalLink className="h-4 w-4 lg:h-5 lg:w-5 text-light-muted group-hover:text-brand-cyan transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.05) 55%, transparent 60%)',
                      backgroundSize: '250% 100%',
                      animation: 'shimmer 2.5s infinite',
                    }}
                  />
                </div>
              )}
            </motion.div>

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute -top-4 -right-4 sm:top-0 sm:right-24 md:top-4 md:right-28 lg:top-8 lg:right-32 w-[16rem] sm:w-[18rem] md:w-[20rem] lg:w-[22rem] h-[10rem] sm:h-[12rem] lg:h-[14rem] rounded-2xl overflow-hidden z-20 group shadow-2xl"
              style={{
                rotate: '-2deg',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 40px 80px -30px rgba(0, 0, 0, 0.8)',
                willChange: 'transform',
              }}>
              {websiteProject && (
                <div className="relative w-full h-full">
                  <Image src={websiteProject.thumbnail} alt="Website Design" fill
                    sizes="(max-width: 768px) 288px, 384px" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/85 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-9 flex items-center px-4 space-x-3"
                    style={{
                      background: 'rgba(15, 23, 42, 0.9)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(12px)',
                    }}>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="w-36 lg:w-44 h-4 rounded-md bg-dark-secondary/70 border border-white/5 flex items-center px-2">
                        <span className="text-[8px] lg:text-[10px] text-light-muted truncate font-mono">{websiteProject.clientName.toLowerCase().replace(/\s/g, '')}.co.ke</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-bold text-light-primary tracking-wide">Website Design</p>
                    <p className="text-[10px] lg:text-xs text-light-muted mt-0.5">{websiteProject.clientName}</p>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="absolute bottom-20 -right-4 sm:bottom-24 sm:right-12 md:bottom-20 md:right-16 lg:bottom-24 lg:right-20 w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] h-[10rem] sm:h-[11rem] lg:h-[13rem] rounded-2xl overflow-hidden z-10 group"
              style={{
                rotate: '1deg',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 60px -20px rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(20px)',
              }}>
              {motionProject && (
                <div className="relative w-full h-full">
                  <Image src={motionProject.thumbnail} alt="Motion Graphics" fill
                    sizes="(max-width: 768px) 256px, 320px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.5)',
                      }}>
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-bold text-light-primary tracking-wide">Motion Graphics</p>
                    <p className="text-[11px] text-light-muted mt-0.5">{motionProject.clientName}</p>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 -translate-y-1/2 -right-2 sm:right-2 lg:right-4 xl:right-8 z-10 hidden sm:block">
              <div className="flex items-center space-x-3 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(19, 28, 49, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(32px)',
                  boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05) inset',
                }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 198, 255, 0.2) 0%, rgba(139, 92, 246, 0.12) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}>
                  <Sparkles className="h-4 w-4 text-brand-cyan" />
                </div>
                <div>
                  <div className="text-xs font-bold text-light-primary leading-tight">Award-Winning</div>
                  <div className="text-[10px] text-light-muted leading-tight">Creative Design</div>
                </div>
              </div>
            </motion.div>

            <div className="absolute top-12 -right-4 sm:top-8 sm:right-16 lg:top-16 lg:right-24 w-28 h-28 opacity-12">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="42" fill="none" stroke="url(#gradient2)" strokeWidth="0.5" strokeDasharray="3 5" className="animate-spin" style={{ animationDuration: '25s' }} />
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#gradient3)" strokeWidth="0.3" strokeDasharray="2 7" className="animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00C6FF" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center space-y-3 opacity-60 pointer-events-none">
        <motion.div animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="flex flex-col items-center">
          <span className="text-[10px] font-bold text-light-muted uppercase tracking-[0.2em] mb-2">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-white/25 flex items-start justify-center p-1.5">
            <motion.div animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="w-1 h-2 rounded-full bg-brand-cyan" />
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