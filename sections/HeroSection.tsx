"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, Palette } from 'lucide-react';
import portfolioData from '../app/data/portfolio.json';

const trustStats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

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

  return <span ref={ref} aria-label={`${value}${suffix}`}>{count}{suffix || ''}</span>;
};

const FloatingOrb = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <div
    className={`absolute rounded-full pointer-events-none ${className || ''}`}
    style={{
      background:
        'radial-gradient(circle at 30% 30%, rgba(0,198,255,0.18), rgba(59,130,246,0.08), transparent 70%)',
      filter: 'blur(40px)',
      ...style,
    }}
  />
);

const FeaturedProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -24 }}
    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    className="relative h-full w-full rounded-3xl overflow-hidden group"
  >
    <div
      className="relative w-full h-full rounded-3xl overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(19, 28, 49, 0.92) 0%, rgba(15, 23, 42, 0.96) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow:
          '0 40px 100px -25px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 80px -20px rgba(0, 198, 255, 0.2)',
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={project.thumbnail}
          alt={`${project.clientName} - ${project.category} project`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/95 via-dark-primary/40 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #00C6FF 0%, #8B5CF6 100%)',
                boxShadow:
                  '0 0 20px rgba(0, 198, 255, 0.3), 0 0 0 1px rgba(255,255,255,0.1) inset',
              }}
            >
              <Palette className="h-4 w-4 text-white" aria-hidden="true" />
            </div>
            <span className="text-xs font-bold text-light-primary uppercase tracking-widest">
              {project.category}
            </span>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <span className="text-xs font-semibold text-light-muted bg-dark-primary/60 backdrop-blur-md px-3 py-1.5 rounded-full">
            {project.year}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-light-primary mb-2 tracking-tight">
            {project.clientName}
          </h3>
          {project.projectTitle && (
            <p className="text-sm text-light-muted font-medium mb-3">{project.projectTitle}</p>
          )}
          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-brand-purple transition-colors min-h-[48px] focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 rounded-full"
            aria-label={`View case study for ${project.clientName}`}
          >
            <span>View Project</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

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

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    updateDeviceType();
    window.addEventListener('resize', updateDeviceType, { passive: true });
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  const featuredProjects = useMemo(() => {
    const projects = portfolioData.projects.filter((p: any) => p.featured);
    const categories: Record<string, any> = {};
    for (const p of projects) {
      const cat = p.category || 'Other';
      if (!categories[cat]) categories[cat] = p;
    }
    return Object.values(categories).slice(0, 6);
  }, []);

  useEffect(() => {
    if (featuredProjects.length <= 1) return;

    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setHeroMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: 'clamp(520px, 100svh - 64px, 980px)',
        background: `
          radial-gradient(ellipse 120% 80% at 20% 20%, rgba(0, 198, 255, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 80% 100% at 80% 10%, rgba(139, 92, 246, 0.07) 0%, transparent 45%),
          radial-gradient(ellipse 100% 60% at 50% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, #070B14 0%, #0A1020 35%, #070B14 100%)
        `,
      }}
    >
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-60 transition-opacity duration-700"
        style={{
          background: `radial-gradient(700px circle at ${heroMouse.x}px ${heroMouse.y}px, rgba(0,198,255,0.06), rgba(139,92,246,0.03), transparent 50%)`,
          mixBlendMode: 'screen',
        }}
      />

      <div className="absolute inset-0 -z-20 opacity-[0.02]">
        <div className="absolute inset-0 grain-texture" />
      </div>

      <FloatingOrb
        className="hidden lg:block"
        style={{ width: 420, height: 420, top: '8%', left: '52%', opacity: 0.35 }}
      />
      <FloatingOrb
        className="hidden lg:block"
        style={{ width: 260, height: 260, top: '55%', left: '68%', opacity: 0.4 }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ opacity }}
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16 w-full relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            className="lg:col-span-5 2xl:col-span-5 space-y-7 sm:space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full relative group w-fit"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 198, 255, 0.1) 0%, rgba(139, 92, 246, 0.06) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 30px -8px rgba(0, 198, 255, 0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan shadow-[0_0_12px_rgba(0,198,255,0.9)]" />
              </span>
              <span className="text-xs sm:text-sm font-bold text-brand-cyan tracking-wider uppercase" style={{ letterSpacing: '0.08em' }}>
                Available for Freelance
              </span>
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,198,255,0.12) 0%, transparent 70%)' }}
              />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-extrabold leading-[1.08] tracking-tight text-balance"
              style={{
                fontSize: 'clamp(2.6rem, 5.8vw, 5.2rem)',
              }}
            >
              <span className="block" style={{ textShadow: '0 0 80px rgba(0, 198, 255, 0.05)' }}>
                Building Brands
              </span>
              <span
                className="block mt-2 text-balance"
                style={{
                  background: 'linear-gradient(135deg, #00C6FF 0%, #3B82F6 35%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(0,198,255,0.12))',
                }}
              >
                People Remember
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                lineHeight: 1.7,
              }}
            >
              I partner with visionary Kenyan businesses and entrepreneurs to craft brand identities,
              motion graphics, and high-converting websites that transform first impressions into
              lasting customer loyalty.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-1">
              <Link
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="block w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 rounded-full"
              >
                <span
                  className="group relative inline-flex items-center justify-center px-7 sm:px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all duration-300 min-h-[48px] w-full"
                  style={{
                    background: 'linear-gradient(135deg, #00C6FF 0%, #3B82F6 40%, #8B5CF6 100%)',
                    backgroundSize: '200% 200%',
                    boxShadow: '0 10px 40px -8px rgba(59, 130, 246, 0.5)',
                  }}
                >
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'radial-gradient(circle at 50% 120%, rgba(255,255,255,0.25) 0%, transparent 60%)' }}
                  />
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                    <span className="whitespace-nowrap" style={{ fontSize: 'clamp(0.95rem, 1vw, 1.05rem)' }}>
                      Let&apos;s Build Your Brand
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </span>
              </Link>

              <Link
                href="#portfolio"
                onClick={(e) => scrollToSection(e, '#portfolio')}
                className="group relative inline-flex items-center justify-center px-7 sm:px-8 py-4 rounded-full font-bold text-light-primary transition-all duration-300 hover:border-brand-blue/40 hover:text-brand-cyan focus:outline-none focus:ring-2 focus:ring-white/20 min-h-[48px] w-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '2px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: 'radial-gradient(circle at 50% 120%, rgba(0, 198, 255, 0.1) 0%, transparent 60%)',
                    border: '2px solid rgba(0, 198, 255, 0.25)',
                  }}
                />
                <span className="relative flex items-center justify-center">
                  <span className="whitespace-nowrap" style={{ fontSize: 'clamp(0.95rem, 1vw, 1.05rem)' }}>
                    View Portfolio
                  </span>
                </span>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 sm:gap-y-5 pt-2"
            >
              {trustStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex items-center space-x-3 group cursor-default min-w-0"
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-2xl transition-all duration-300 group-hover:scale-110 shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 198, 255, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 0 20px -6px rgba(0, 198, 255, 0.1)',
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_12px_rgba(0,198,255,0.9)]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg sm:text-xl font-extrabold text-light-primary leading-tight tracking-tight">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] sm:text-xs text-light-muted font-medium leading-tight truncate">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 2xl:col-span-7 relative"
            style={{ marginTop: isMobile ? 'clamp(2rem, 6vw, 3.5rem)' : '0' }}
          >
            <motion.div
              className="relative w-full mx-auto"
              style={{
                height: 'clamp(320px, 56svh, 560px)',
                maxWidth: 'clamp(320px, 38vw, 520px)',
              }}
            >
              <motion.div
                className="relative h-full rounded-3xl overflow-hidden"
                style={{
                  boxShadow:
                    '0 40px 100px -25px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 80px -20px rgba(0, 198, 255, 0.2)',
                  willChange: 'transform',
                }}
              >
                <motion.div
                  key={carouselIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <FeaturedProjectCard project={featuredProjects[carouselIndex]} index={carouselIndex} />
                </motion.div>

                {featuredProjects.length > 1 && (
                  <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2"
                    role="tablist"
                    aria-label="Featured projects carousel"
                  >
                    {featuredProjects.map((_: any, i: number) => (
                      <button
                        key={i}
                        onClick={() => setCarouselIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 ${
                          i === carouselIndex ? 'bg-brand-cyan w-6' : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                        aria-selected={i === carouselIndex}
                        role="tab"
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
