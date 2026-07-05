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
          ? 'bg-dark-primary/70 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-dark-primary/50 backdrop-blur-xl border-b border-transparent'
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24" style={{ maxWidth: 'min(100%, 1200px)' }}>
          <Link href="/" className="flex items-center group" aria-label="Kim Designs - Home">
            <div className="relative h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12 rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/my-logo.png"
                alt="Kim Designs Logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center" role="navigation" aria-label="Main navigation">
            <div className="flex items-center space-x-1 bg-dark-card/80 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10 shadow-2xl shadow-black/40">
              {sections.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => scrollTo(e, `#${id}`)}
                  className={`relative px-3 sm:px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 ${
                    activeSection === id
                      ? 'text-brand-cyan'
                      : 'text-light-secondary hover:text-brand-cyan'
                  }`}
                  aria-current={activeSection === id ? 'page' : undefined}
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

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="primary" size="sm" className="hidden md:inline-flex shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 transition-shadow duration-300 focus:ring-2 focus:ring-brand-cyan/50">
              Hire Me
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-dark-card transition-colors border border-transparent hover:border-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-light-primary" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-light-primary" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
              id="mobile-menu"
            >
              <nav className="flex flex-col space-y-1.5 py-4 sm:py-5 border-t border-white/10 mt-2 bg-dark-primary/95 backdrop-blur-2xl rounded-2xl px-3 sm:px-4" role="navigation" aria-label="Mobile navigation">
                {sections.map(({ id, label }) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => scrollTo(e, `#${id}`)}
                    className={`px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-200 min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 ${
                      activeSection === id
                        ? 'text-brand-cyan bg-brand-cyan/12 border border-brand-cyan/20'
                        : 'text-light-secondary hover:text-brand-cyan hover:bg-dark-card'
                    }`}
                    aria-current={activeSection === id ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pt-3">
                  <Button variant="primary" size="sm" className="w-full focus:ring-2 focus:ring-brand-cyan/50">
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
