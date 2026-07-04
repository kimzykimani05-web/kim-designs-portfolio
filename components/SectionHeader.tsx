import React from 'react';
import { motion } from 'framer-motion';

type BadgeColor = 'cyan' | 'purple' | 'blue' | 'rose' | 'amber';

interface SectionHeaderProps {
  badge: string;
  badgeColor?: BadgeColor;
  heading: React.ReactNode;
  subheading?: string;
  className?: string;
}

const badgeColorClasses: Record<BadgeColor, string> = {
  cyan: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20',
  purple: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20',
  blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
  rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

export const SectionHeader = ({
  badge,
  badgeColor = 'purple',
  heading,
  subheading,
  className = '',
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-20 ${className}`}
    >
      <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border ${badgeColorClasses[badgeColor]}`}>
        {badge}
      </span>
      <h2 className="section-heading">
        {heading}
      </h2>
      {subheading && (
        <p className="section-subheading">
          {subheading}
        </p>
      )}
    </motion.div>
  );
};
