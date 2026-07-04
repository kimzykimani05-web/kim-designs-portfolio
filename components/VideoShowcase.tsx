"use client";

import { motion } from 'framer-motion';

interface VideoShowcaseProps {
  videos: any[];
  title: string;
}

export default function VideoShowcase({ videos, title }: VideoShowcaseProps) {
  if (videos.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-light-primary mb-6"
      >
        Motion Graphics
      </motion.h3>
      
      <div className="grid gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={`${video.path}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <video
              src={video.path}
              controls
              className="w-full aspect-video object-cover"
              preload="metadata"
              poster={video.path.replace('.mp4', '-poster.jpg').replace('.mov', '-poster.jpg')}
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        ))}
      </div>
    </div>
  );
}