"use client";

import { motion } from 'framer-motion';
import { Layout } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import PortfolioFilter from '../components/PortfolioFilter';
import PortfolioGrid from '../components/PortfolioGrid';

import portfolioData from '../app/data/portfolio.json';

type CategoryId = 'all' | 'Branding' | 'Website Design' | 'Motion Graphics' | 'Marketing Campaigns' | 'Print Design' | 'Social Media' | 'Other';

export default function PortfolioSection() {
   const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
   const [activeSubcategory, setActiveSubcategory] = useState('');

   const featuredProjects = useMemo(
     () => portfolioData.projects.filter((p: any) => p.featured),
     []
   );

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
           subheading="Selected work demonstrating strategic thinking and creative excellence across various design disciplines."
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