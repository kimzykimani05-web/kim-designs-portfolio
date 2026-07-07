"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Play } from 'lucide-react';
import { useState, useRef } from 'react';

interface MotionCardProps {
  project: any;
  index?: number;
}

export default function MotionCard({ project, index = 0 }: MotionCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const images = project.media?.filter((m: any) => m.type === 'image') || [];
  const videos = project.media?.filter((m: any) => m.type === 'video') || [];
  const primaryImage = project.thumbnail && !imageError ? project.thumbnail : images[0]?.path;

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

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
      <div className="glass-card rounded-3xl overflow-hidden card-hover h-full flex flex-col motion-card-accent">
        <div className="relative aspect-video overflow-hidden bg-dark-card">
          {!isPlaying && primaryImage ? (
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
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-dark-card to-brand-purple/20" />
          )}

          {!isPlaying && videos.length > 0 && (
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center z-10"
              aria-label="Play video"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-cyan/90 flex items-center justify-center shadow-lg play-button-glow transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-cyan">
                <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white ml-1" fill="white" />
              </div>
            </button>
          )}

          {isPlaying && (
            <video
              ref={videoRef}
              src={videos[0]?.path}
              controls
              className="w-full h-full object-cover"
              preload="metadata"
              onEnded={handleVideoEnd}
            >
              Your browser does not support the video tag.
            </video>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 via-dark-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute top-3 left-3">
            <span className="px-3 py-1.5 rounded-full bg-dark-card/90 backdrop-blur-sm text-xs font-semibold text-brand-blue border border-brand-blue/20">
              Motion Graphics
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full bg-dark-primary/80 backdrop-blur-sm text-xs font-semibold text-light-primary">
              {project.year}
            </span>
          </div>

          {videos.length > 0 && !isPlaying && (
            <div className="absolute bottom-3 right-3">
              <span className="px-2.5 py-1 rounded-full bg-dark-primary/80 backdrop-blur-sm text-xs font-semibold text-brand-cyan border border-brand-cyan/20">
                {videos.length} video{videos.length > 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 lg:p-8 flex-1 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-light-primary mb-2 group-hover:text-brand-blue transition-colors">
            {project.clientName}
          </h3>
          {project.projectTitle && (
            <p className="text-sm text-brand-blue font-medium mb-3">{project.projectTitle}</p>
          )}
          <p className="text-light-muted text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags?.slice(0, 4).map((tag: string) => (
              <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 text-xs font-medium text-light-muted border border-white/5">
                {tag}
              </span>
            ))}
          </div>

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
    </motion.div>
  );
}
