"use client";

import HeroSection from '../sections/HeroSection';
import ClientResultsSection from '../sections/ClientResultsSection';
import ServicesSection from '../sections/ServicesSection';
import PortfolioSection from '../sections/PortfolioSection';
import DesignProcessSection from '../sections/DesignProcessSection';
import SkillsSection from '../sections/SkillsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import AboutSection from '../sections/AboutSection';
import WhyWorkWithMeSection from '../sections/WhyWorkWithMeSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientResultsSection />
      <ServicesSection />
      <PortfolioSection />
      <DesignProcessSection />
      <SkillsSection />
      <TestimonialsSection />
      <AboutSection />
      <WhyWorkWithMeSection />
      <ContactSection />
    </>
  );
}