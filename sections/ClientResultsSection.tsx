"use client";

import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

const stats = [
  { 
    number: '150+', 
    label: 'Projects Delivered',
    description: 'Across branding, web, and motion',
    icon: '🎯'
  },
  { 
    number: '8+', 
    label: 'Years Experience',
    description: 'Crafting visual excellence',
    icon: '⭐'
  },
  { 
    number: '50+', 
    label: 'Happy Clients',
    description: 'Worldwide partnerships',
    icon: '🤝'
  },
  { 
    number: '98%', 
    label: 'Client Satisfaction',
    description: 'Consistently exceeding expectations',
    icon: '💎'
  },
];

const ClientResultsSection = () => {
   return (
     <section id="client-results" className="relative py-20 sm:py-24 lg:py-32 bg-dark-secondary overflow-hidden">
       {/* Background decoration */}
       <div className="absolute inset-0 -z-10">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
       </div>

       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <SectionHeader
           badge="Proven Results"
           badgeColor="cyan"
           heading={
             <>
               Trusted by Businesses <br className="hidden sm:block" />
               <span className="gradient-text-alt">Across the Globe</span>
             </>
           }
           subheading="Numbers that reflect our commitment to delivering exceptional creative solutions that drive real business impact."
         />

         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
           {stats.map((stat, index) => (
             <motion.div
               key={stat.number}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               whileHover={{ y: -8 }}
               className="group relative"
             >
               <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center card-hover">
                 <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{stat.icon}</div>
                 <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-primary mb-1.5 sm:mb-2 tracking-tight">
                   {stat.number}
                 </div>
                 <div className="text-sm sm:text-base font-semibold text-light-secondary mb-0.5 sm:mb-1">{stat.label}</div>
                 <div className="text-xs sm:text-sm text-light-muted">{stat.description}</div>
                 
                 {/* Hover gradient overlay */}
                 <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
               </div>
             </motion.div>
           ))}
         </div>

         {/* Trust bar */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="mt-16 sm:mt-20 lg:mt-24 pt-10 sm:pt-12 border-t border-white/10"
         >
           <p className="text-center text-xs sm:text-sm font-medium text-light-muted uppercase tracking-widest mb-6 sm:mb-8">
             Trusted by innovative companies
           </p>
           <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-4 sm:gap-y-6 opacity-40">
             <span className="text-lg sm:text-xl lg:text-2xl font-bold text-light-secondary">TechStart</span>
             <span className="text-lg sm:text-xl lg:text-2xl font-bold text-light-secondary">Safi Homes</span>
             <span className="text-lg sm:text-xl lg:text-2xl font-bold text-light-secondary">Bloom Beauty</span>
             <span className="text-lg sm:text-xl lg:text-2xl font-bold text-light-secondary">Urban Co.</span>
             <span className="text-lg sm:text-xl lg:text-2xl font-bold text-light-secondary">NexGen</span>
           </div>
         </motion.div>
       </div>
     </section>
   );
 };

export default ClientResultsSection;