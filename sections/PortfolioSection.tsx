"use client";

import { motion } from 'framer-motion';
import { Layout } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import PortfolioFilter from '../components/PortfolioFilter';
import PortfolioGrid from '../components/PortfolioGrid';
import { FilterCategory } from '../components/PortfolioFilter';

import portfolioData from '../app/data/portfolio.json';

function getDisplayCategory(project: any): string {
  if (project.category === 'Branding') return 'Brand Identity';
  if (project.category === 'Marketing Campaigns' && project.subcategory === 'Posters') return 'Posters';
  if (project.category === 'Motion Graphics') return 'Motion Graphics';
  if (project.category === 'Website Design') return 'Websites';
  return 'Other';
}

const CATEGORY_LABELS: Record<string, string> = {
  'Brand Identity': 'Brand Identity',
  'Posters': 'Poster Design',
  'Motion Graphics': 'Motion Graphics',
  'Websites': 'Website Design',
};

export default function PortfolioSection() {
   const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
   const [activeSubcategory, setActiveSubcategory] = useState('');

   const featuredProjects = useMemo(
     () => portfolioData.projects.filter((p: any) => p.featured),
     []
   );

   const otherProjectsByCategory = useMemo(() => {
     const nonFeatured = portfolioData.projects.filter((p: any) => !p.featured);
     const groups: Record<string, any[]> = {};
     nonFeatured.forEach((p) => {
       const cat = getDisplayCategory(p);
       if (!groups[cat]) groups[cat] = [];
       groups[cat].push(p);
     });
     return groups;
   }, []);

   return (
     <section id="portfolio" className="relative py-20 sm:py-24 lg:py-32 bg-dark-primary overflow-hidden">
       <div className="absolute inset-0 -z-10">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
       </div>

       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <SectionHeader
           badge="Selected Work"
           badgeColor="purple"
           heading={
             <>
               Featured <span className="gradient-text-alt">Case Studies</span>
             </>
           }
            subheading="A curated selection of brand identity, poster design, motion graphics, and web design projects."
         />

         <PortfolioFilter
           activeCategory={activeCategory}
           onCategoryChange={setActiveCategory}
           activeSubcategory={activeSubcategory}
           onSubcategoryChange={setActiveSubcategory}
         />

         <PortfolioGrid
           projects={featuredProjects}
           activeCategory={activeCategory}
           activeSubcategory={activeSubcategory}
         />

         {Object.entries(otherProjectsByCategory).map(([category, projects]) => (
           <div key={category} className="mt-20 sm:mt-24">
             <h3 className="text-2xl sm:text-3xl font-bold text-light-primary mb-8 text-center">
               {CATEGORY_LABELS[category] || category}
             </h3>
             <PortfolioGrid
               projects={projects}
               activeCategory="all"
               activeSubcategory=""
             />
           </div>
         ))}

         {featuredProjects.length > 0 && (
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="mt-16 sm:mt-20 text-center"
           >
             <Link href="/portfolio" className="btn-outline-premium">
               View All Projects
               <Layout className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
             </Link>
           </motion.div>
         )}
       </div>
     </section>
   );
  }