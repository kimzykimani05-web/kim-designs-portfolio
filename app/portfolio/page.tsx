"use client";

import { motion } from 'framer-motion';
import { Layout } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { SectionHeader } from '../../components/SectionHeader';
import PortfolioFilter from '../../components/PortfolioFilter';
import PortfolioGrid from '../../components/PortfolioGrid';
import portfolioData from '../data/portfolio.json';

type CategoryId = 'all' | 'Branding' | 'Website Design' | 'Motion Graphics' | 'Marketing Campaigns' | 'Print Design' | 'Social Media' | 'Other';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [activeSubcategory, setActiveSubcategory] = useState('');

  const allProjects = useMemo(() => portfolioData.projects, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-dark-primary pt-24 lg:pt-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio"
          badgeColor="purple"
          heading={
            <>
              All <span className="gradient-text">Projects</span>
            </>
          }
          subheading="Explore my complete collection of branding, web design, motion graphics, and marketing projects."
        />

        <PortfolioFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          activeSubcategory={activeSubcategory}
          onSubcategoryChange={setActiveSubcategory}
        />

        <PortfolioGrid
          projects={allProjects}
          activeCategory={activeCategory}
          activeSubcategory={activeSubcategory}
        />

        {allProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-light-muted text-lg">No projects available yet.</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Link href="/" className="btn-outline-premium">
            <Layout className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}