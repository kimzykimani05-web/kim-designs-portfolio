"use client";

import { motion } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';

type CategoryId = 'all' | 'Branding' | 'Website Design' | 'Motion Graphics' | 'Marketing Campaigns' | 'Print Design' | 'Social Media' | 'Other';

interface PortfolioFilterProps {
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
  activeSubcategory: string;
  onSubcategoryChange: (subcategory: string) => void;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'Branding', label: 'Branding' },
  { id: 'Website Design', label: 'Websites' },
  { id: 'Motion Graphics', label: 'Motion Graphics' },
  { id: 'Marketing Campaigns', label: 'Campaigns' },
  { id: 'Print Design', label: 'Print' },
  { id: 'Social Media', label: 'Social Media' },
] as const;

const marketingSubcategories = ['Posters', 'Flyers'];

export default function PortfolioFilter({
  activeCategory,
  onCategoryChange,
  activeSubcategory,
  onSubcategoryChange,
}: PortfolioFilterProps) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleCategoryClick = (id: CategoryId) => {
    onCategoryChange(id);
    if (id === 'Marketing Campaigns') {
      setShowSubMenu(!showSubMenu);
    } else {
      onSubcategoryChange('');
      setShowSubMenu(false);
    }
  };

  const clearFilters = () => {
    onCategoryChange('all');
    onSubcategoryChange('');
    setShowSubMenu(false);
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
          <div key={cat.id} className="relative">
            <button
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-cyan to-brand-purple text-white shadow-lg shadow-brand-blue/30'
                  : 'bg-dark-card border border-white/10 text-light-muted hover:text-light-primary hover:border-brand-blue/50'
              }`}
            >
              {cat.label}
              {cat.id === 'Marketing Campaigns' && (
                <ChevronDown className={`inline-block ml-1.5 h-3.5 w-3.5 transition-transform ${showSubMenu ? 'rotate-180' : ''}`} />
              )}
            </button>

            {cat.id === 'Marketing Campaigns' && showSubMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 left-0 bg-dark-card border border-white/10 rounded-2xl p-2 shadow-xl z-20 min-w-[160px]"
              >
                {marketingSubcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => {
                      onSubcategoryChange(sub);
                      setShowSubMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeSubcategory === sub
                        ? 'bg-brand-cyan/20 text-brand-cyan'
                        : 'text-light-muted hover:text-light-primary hover:bg-white/5'
                    }`}
                  >
                    {sub}
                    {activeSubcategory === sub && (
                      <X className="inline-block ml-2 h-3 w-3" />
                    )}
                  </button>
                ))}
                {activeSubcategory && (
                  <button
                    onClick={() => {
                      onSubcategoryChange('');
                      setShowSubMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 rounded-xl text-sm font-medium text-light-muted hover:text-light-primary hover:bg-white/5 transition-all duration-200"
                  >
                    Clear Filter
                  </button>
                )}
              </motion.div>
            )}
          </div>
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