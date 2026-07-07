"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface PosterGalleryCardProps {
  project: any;
  index?: number;
}

export default function PosterGalleryCard({ project, index = 0 }: PosterGalleryCardProps) {
  const [imageError, setImageError] = useState(false);
  const images = project.media?.filter((m: any) => m.type === 'image') || [];
  const primaryImage = project.thumbnail && !imageError ? project.thumbnail : images[0]?.path;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="glass-card rounded-3xl overflow-hidden card-hover h-full flex flex-col poster-card-accent">
        <div className="relative aspect-[3/4] sm:aspect-[3/4] overflow-hidden bg-dark-card">
          {primaryImage ? (
            <Image
              src={primaryImage}
              alt={project.clientName}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-dark-card to-brand-cyan/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 via-dark-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute top-3 left-3">
            <span className="px-3 py-1.5 rounded-full bg-dark-card/90 backdrop-blur-sm text-xs font-semibold text-brand-purple border border-brand-purple/20">
              Poster Design
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full bg-dark-primary/80 backdrop-blur-sm text-xs font-semibold text-light-primary">
              {project.year}
            </span>
          </div>

          <div className="absolute inset-0 flex items-end p-5 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-wrap gap-2">
              <Link
                href={`/portfolio/${project.slug}`}
                className="btn-premium text-xs sm:text-sm py-2 px-4 sm:py-2.5 sm:px-5"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6 lg:p-8 flex-1 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-light-primary mb-2 group-hover:text-brand-purple transition-colors">
            {project.clientName}
          </h3>
          {project.projectTitle && (
            <p className="text-sm text-brand-purple font-medium mb-3">{project.projectTitle}</p>
          )}
          <p className="text-light-muted text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags?.slice(0, 4).map((tag: string) => (
              <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 text-xs font-medium text-light-muted border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-purple hover:text-brand-cyan transition-colors min-h-[44px]"
          >
            View Case Study
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
