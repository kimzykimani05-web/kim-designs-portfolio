"use client";

import { motion } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';

export type FilterCategory = 'all' | 'Brand Identity' | 'Posters' | 'Motion Graphics' | 'Websites';

interface PortfolioFilterProps {
  activeCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
  activeSubcategory: string;
  onSubcategoryChange: (subcategory: string) => void;
}

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'Brand Identity', label: 'Brand Identity' },
  { id: 'Posters', label: 'Posters' },
  { id: 'Motion Graphics', label: 'Motion Graphics' },
  { id: 'Websites', label: 'Websites' },
] as const;

export default function PortfolioFilter({
  activeCategory,
  onCategoryChange,
  activeSubcategory,
  onSubcategoryChange,
}: PortfolioFilterProps) {
  const handleCategoryClick = (id: FilterCategory) => {
    onCategoryChange(id);
    if (id !== 'Posters') {
      onSubcategoryChange('');
    }
  };

  const clearFilters = () => {
    onCategoryChange('all');
    onSubcategoryChange('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-12"
    >
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-brand-cyan to-brand-purple text-white shadow-lg shadow-brand-blue/30'
                : 'bg-dark-card border border-white/10 text-light-muted hover:text-light-primary hover:border-brand-blue/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {(activeCategory !== 'all' || activeSubcategory) && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-medium border border-brand-cyan/20">
            Showing: {activeSubcategory || activeCategory}
            <button
              onClick={clearFilters}
              className="hover:text-white transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}
