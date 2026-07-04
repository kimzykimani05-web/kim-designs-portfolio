"use client";

import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

const skills = [
  { name: 'Brand Identity', level: 95, icon: '🎨', color: 'cyan' },
  { name: 'Motion Graphics', level: 90, icon: '🎬', color: 'purple' },
  { name: 'Video Editing', level: 88, icon: '🎥', color: 'pink' },
  { name: 'Web Design', level: 85, icon: '💻', color: 'indigo' },
  { name: 'Print Design', level: 92, icon: '📐', color: 'emerald' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-dark-secondary overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Expertise"
          badgeColor="blue"
          heading={
            <>
              Skills & <span className="gradient-text">Proficiencies</span>
            </>
          }
          subheading="A comprehensive skill set spanning the entire creative spectrum, from branding to motion."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 lg:p-8 card-hover">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`text-3xl`}>{skill.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-light-primary">{skill.name}</h3>
                      <span className="text-sm font-semibold text-light-muted">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.1, ease: 'easeOut' }}
                        className={`h-2.5 rounded-full bg-gradient-to-r ${
                          skill.color === 'cyan' ? 'from-brand-cyan to-brand-cyan' :
                          skill.color === 'purple' ? 'from-brand-purple to-brand-purple' :
                          skill.color === 'pink' ? 'from-pink-400 to-pink-600' :
                          skill.color === 'indigo' ? 'from-indigo-400 to-indigo-600' :
                          'from-emerald-400 to-emerald-600'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;