"use client";

import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'client-results', label: 'Results' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Work' },
    { id: 'design-process', label: 'Process' },
    { id: 'skills', label: 'Skills' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'about', label: 'About' },
    { id: 'why-work-with-me', label: 'Why Me' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-primary/80 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-dark-primary/60 backdrop-blur-xl border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-11 w-11 rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10">
              <Image
                src="/Kim Designs/Branding For Portfolio/WhatsApp Image 2025-02-09 at 12.23.41 PM.jpeg"
                alt="Kim Designs Logo"
                fill
                sizes="44px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-light-primary tracking-tight">
              Kim<span className="gradient-text">Designs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-dark-card/90 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10 shadow-2xl shadow-black/40">
              {sections.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => scrollTo(e, `#${id}`)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeSection === id
                      ? 'text-brand-cyan'
                      : 'text-light-secondary hover:text-brand-cyan'
                  }`}
                >
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-dark-secondary rounded-full shadow-sm border border-white/5"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Button variant="primary" size="sm" className="hidden md:inline-flex shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 transition-shadow duration-300">
              Hire Me
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-dark-card transition-colors border border-transparent hover:border-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-light-primary" />
              ) : (
                <Menu className="h-6 w-6 text-light-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-1.5 py-5 border-t border-white/10 mt-2 bg-dark-primary/95 backdrop-blur-2xl rounded-2xl px-4">
                {sections.map(({ id, label }) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => scrollTo(e, `#${id}`)}
                    className={`px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-200 ${
                      activeSection === id
                        ? 'text-brand-cyan bg-brand-cyan/12 border border-brand-cyan/20'
                        : 'text-light-secondary hover:text-brand-cyan hover:bg-dark-card'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pt-3">
                  <Button variant="primary" size="sm" className="w-full">
                    Hire Me
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
