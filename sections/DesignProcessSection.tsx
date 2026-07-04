"use client";

import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

const steps = [
  { 
    id: 1, 
    title: 'Discovery', 
    description: 'Understanding your business, goals, target audience, and competitive landscape.',
    icon: '🔍'
  },
  { 
    id: 2, 
    title: 'Research', 
    description: 'Industry analysis, trend research, and gathering inspiration for the project direction.',
    icon: '📊'
  },
  { 
    id: 3, 
    title: 'Concept Development', 
    description: 'Creating initial concepts and exploring different visual directions.',
    icon: '💡'
  },
  { 
    id: 4, 
    title: 'Design Execution', 
    description: 'Refining the chosen concept and creating detailed designs.',
    icon: '✏️'
  },
  { 
    id: 5, 
    title: 'Feedback & Refinement', 
    description: 'Presenting designs, gathering feedback, and making necessary revisions.',
    icon: '🔄'
  },
  { 
    id: 6, 
    title: 'Final Delivery', 
    description: 'Providing final files in all required formats and offering implementation support.',
    icon: '🚀'
  },
];

const DesignProcessSection = () => {
   return (
     <section id="design-process" className="relative py-20 sm:py-24 lg:py-32 bg-dark-primary overflow-hidden">
       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <SectionHeader
           badge="How I Work"
           badgeColor="amber"
           heading={
             <>
               My Design <span className="gradient-text-alt">Process</span>
             </>
           }
           subheading="A proven, collaborative process that ensures exceptional results aligned with your business objectives."
         />

         <div className="space-y-8 sm:space-y-10 lg:space-y-12">
           {steps.map((step, index) => (
             <motion.div
               key={step.id}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="relative"
             >
               <motion.div
                 whileHover={{ y: -4 }}
                 className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 card-hover"
               >
                 <div className="flex items-start space-x-3.5 sm:space-x-4">
                   <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 flex items-center justify-center text-xl sm:text-2xl">
                     {step.icon}
                   </div>
                   <div>
                     <div className="flex items-center space-x-2.5 sm:space-x-3 mb-2.5 sm:mb-3">
                       <span className="text-[10px] sm:text-xs font-bold text-brand-cyan uppercase tracking-wider">Step {step.id}</span>
                     </div>
                     <h3 className="text-xl sm:text-2xl font-bold text-light-primary mb-2 sm:mb-3">{step.title}</h3>
                     <p className="text-light-secondary leading-relaxed text-sm sm:text-base">{step.description}</p>
                   </div>
                 </div>
               </motion.div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };

export default DesignProcessSection;
