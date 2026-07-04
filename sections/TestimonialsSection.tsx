"use client";

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useRef } from 'react';
import { SectionHeader } from '../components/SectionHeader';

const testimonials = [
  {
    quote: 'Kim transformed our brand identity completely. The attention to detail and creative vision exceeded all expectations.',
    author: 'Sarah Wanjiku',
    role: 'CEO, TechStart Kenya',
    initials: 'SW',
    rating: 5,
  },
  {
    quote: 'Exceptional motion graphics and video editing. Our social media engagement increased by 300% after the rebrand.',
    author: 'David Omondi',
    role: 'Marketing Director, Safi Homes',
    initials: 'DO',
    rating: 5,
  },
  {
    quote: 'Working with Kim was seamless. The website design perfectly captures our brand essence while being incredibly user-friendly.',
    author: 'Grace Muthoni',
    role: 'Founder, Bloom Beauty',
    initials: 'GM',
    rating: 5,
  },
  {
    quote: 'The brand guidelines delivered were comprehensive and easy to implement across all our touchpoints.',
    author: 'James Kariuki',
    role: 'CMO, NexGen Solutions',
    initials: 'JK',
    rating: 5,
  },
  {
    quote: 'Professional, creative, and incredibly talented. The motion graphics series boosted our product launch visibility.',
    author: 'Amina Hassan',
    role: 'Product Lead, Urban Co.',
    initials: 'AH',
    rating: 5,
  },
];

const TestimonialsSection = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const containerRef = useRef<HTMLDivElement>(null);

   const handleDragEnd = (e: any, { offset, velocity }: { offset: { x: number }; velocity: { x: number } }) => {
     const swipeThreshold = 50;
     if (offset.x > swipeThreshold && activeIndex > 0) {
       setActiveIndex(prev => prev - 1);
     } else if (offset.x < -swipeThreshold && activeIndex < testimonials.length - 1) {
       setActiveIndex(prev => prev + 1);
     }
   };

   const scrollToIndex = (index: number) => {
     setActiveIndex(index);
     const container = containerRef.current;
     if (container) {
       const cardWidth = container.querySelector('[data-card-index="0"]')?.getBoundingClientRect().width || 0;
       const gap = 24;
       const scrollPosition = index * (cardWidth + gap);
       container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
     }
   };

   return (
     <section id="testimonials" className="relative py-20 sm:py-24 lg:py-32 bg-dark-primary overflow-hidden">
       <div className="absolute inset-0 -z-10">
         <div className="absolute top-1/4 left-0 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-1/4 right-0 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
       </div>

       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <SectionHeader
           badge="Client Love"
           badgeColor="amber"
           heading={
             <>
               What <span className="gradient-text-alt">Clients Say</span>
             </>
           }
           subheading="Don't just take my word for it. Here's what my clients have to say about working together."
         />

         {/* Mobile Carousel */}
         <div className="sm:hidden">
           <motion.div
             ref={containerRef}
             className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 -mx-4"
             drag="x"
             dragConstraints={{ left: 0, right: 0 }}
             onDragEnd={handleDragEnd}
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
           >
             {testimonials.map((t, idx) => (
               <motion.div
                 key={t.author}
                 data-card-index={idx}
                 className="flex-shrink-0 w-[85vw] max-w-sm snap-center"
               >
                 <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full flex flex-col card-hover relative">
                   <div className="text-4xl sm:text-5xl text-brand-cyan/30 mb-3 sm:mb-4 leading-none">"</div>
                  
                   <div className="flex space-x-1 mb-4 sm:mb-6">
                     {[...Array(t.rating)].map((_, i) => (
                       <span key={i} className="text-amber-400 text-sm sm:text-base">★</span>
                     ))}
                   </div>

                   <p className="text-light-secondary leading-relaxed mb-6 sm:mb-8 flex-grow italic text-base sm:text-lg">"{t.quote}"</p>
                  
                   <div className="flex items-center space-x-3 sm:space-x-4 pt-4 sm:pt-6 border-t border-white/10">
                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 flex items-center justify-center text-base sm:text-lg font-bold text-brand-cyan">
                       {t.initials}
                     </div>
                     <div>
                       <p className="font-bold text-light-primary text-sm sm:text-base">{t.author}</p>
                       <p className="text-xs sm:text-sm text-light-muted">{t.role}</p>
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </motion.div>

           {/* Pagination Dots */}
           <div className="flex justify-center items-center space-x-2 mt-6 sm:mt-8">
             {testimonials.map((_, idx) => (
               <button
                 key={idx}
                 onClick={() => scrollToIndex(idx)}
                 className={`transition-all duration-300 rounded-full ${
                   idx === activeIndex
                     ? 'w-8 h-2.5 bg-gradient-to-r from-brand-cyan to-brand-purple'
                     : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/30'
                 }`}
                 aria-label={`Go to testimonial ${idx + 1}`}
               />
             ))}
           </div>
         </div>

         {/* Desktop Grid */}
         <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
           {testimonials.map((t, idx) => (
             <motion.div
               key={t.author}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.15 }}
               whileHover={{ y: -8 }}
               className="group"
             >
               <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 h-full flex flex-col card-hover relative">
                 <div className="text-4xl sm:text-5xl text-brand-cyan/20 mb-4 sm:mb-6 leading-none">"</div>
                
                 <div className="flex space-x-1 mb-4 sm:mb-6">
                   {[...Array(t.rating)].map((_, i) => (
                     <span key={i} className="text-amber-400">★</span>
                   ))}
                 </div>

                 <p className="text-light-secondary leading-relaxed mb-6 sm:mb-8 flex-grow italic text-sm sm:text-base lg:text-lg">"{t.quote}"</p>
                
                 <div className="flex items-center space-x-3 sm:space-x-4 pt-4 sm:pt-6 border-t border-white/10">
                   <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 flex items-center justify-center text-base sm:text-lg font-bold text-brand-cyan">
                     {t.initials}
                   </div>
                   <div>
                     <p className="font-bold text-light-primary text-sm sm:text-base">{t.author}</p>
                     <p className="text-xs sm:text-sm text-light-muted">{t.role}</p>
                   </div>
                 </div>

                 <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };

export default TestimonialsSection;