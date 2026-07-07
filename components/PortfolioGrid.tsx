"use client";

import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

export type FilterCategory = 'all' | 'Brand Identity' | 'Posters' | 'Motion Graphics' | 'Websites';

interface PortfolioGridProps {
  projects: any[];
  activeCategory: FilterCategory;
  activeSubcategory: string;
}

function getDisplayCategory(project: any): string {
  if (project.category === 'Branding') return 'Brand Identity';
  if (project.category === 'Marketing Campaigns' && project.subcategory === 'Posters') return 'Posters';
  if (project.category === 'Motion Graphics') return 'Motion Graphics';
  if (project.category === 'Website Design') return 'Websites';
  return 'Other';
}

export default function PortfolioGrid({
  projects,
  activeCategory,
  activeSubcategory,
}: PortfolioGridProps) {
  const filteredProjects = projects.filter((project) => {
    const displayCategory = getDisplayCategory(project);
    if (activeCategory !== 'all' && displayCategory !== activeCategory) {
      return false;
    }
    if (activeCategory === 'Posters' && activeSubcategory) {
      return project.subcategory === activeSubcategory;
    }
    return true;
  });

  if (filteredProjects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-light-muted text-lg">No projects found in this category.</p>
      </motion.div>
    );
  }

  const getGridCols = () => {
    if (activeCategory === 'Brand Identity') return 'grid-cols-1 md:grid-cols-2';
    if (activeCategory === 'Posters') return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    if (activeCategory === 'Motion Graphics') return 'grid-cols-1 md:grid-cols-2';
    if (activeCategory === 'Websites') return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  };

  const getGap = () => {
    if (activeCategory === 'Brand Identity') return 'gap-6 sm:gap-8';
    if (activeCategory === 'Posters') return 'gap-5 sm:gap-6 lg:gap-8';
    if (activeCategory === 'Motion Graphics') return 'gap-6 sm:gap-8';
    return 'gap-5 sm:gap-6 lg:gap-8';
  };

  return (
    <div className={`grid ${getGridCols()} ${getGap()}`}>
      <AnimatePresence mode="popLayout">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </AnimatePresence>
    </div>
  );
}
