"use client";

import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

type CategoryId = 'all' | 'Branding' | 'Website Design' | 'Motion Graphics' | 'Marketing Campaigns' | 'Print Design' | 'Social Media' | 'Other';

interface PortfolioGridProps {
  projects: any[];
  activeCategory: CategoryId;
  activeSubcategory: string;
}

export default function PortfolioGrid({
  projects,
  activeCategory,
  activeSubcategory,
}: PortfolioGridProps) {
  const filteredProjects = projects.filter((project) => {
    if (activeCategory !== 'all' && project.category !== activeCategory) {
      return false;
    }
    if (activeCategory === 'Marketing Campaigns' && activeSubcategory) {
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

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <AnimatePresence mode="popLayout">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </AnimatePresence>
    </div>
  );
}