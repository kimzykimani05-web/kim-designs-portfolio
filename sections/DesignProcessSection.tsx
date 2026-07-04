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
    <section id="design-process" className="relative py-24 lg:py-32 bg-dark-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan/30 via-brand-purple/30 to-brand-cyan/30 -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 0 ? '' : 'lg:text-right'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark-card border-2 border-brand-cyan/30 items-center justify-center text-xl shadow-lg z-10">
                  {step.icon}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`glass-card rounded-2xl p-8 lg:p-10 card-hover ${
                    index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 flex items-center justify-center text-xl lg:hidden`}>
                      {step.icon}
                    </div>
                    <div className={index % 2 === 0 ? '' : 'lg:text-left'}>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Step {step.id}</span>
                      </div>
                      <h3 className="text-xl font-bold text-light-primary mb-3">{step.title}</h3>
                      <p className="text-light-secondary leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Empty spacer for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
