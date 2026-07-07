"use client";

import BrandIdentityCard from './BrandIdentityCard';
import PosterGalleryCard from './PosterGalleryCard';
import MotionCard from './MotionCard';
import WebsiteCard from './WebsiteCard';

interface ProjectCardProps {
  project: any;
  index?: number;
}

function getDisplayCategory(project: any): string {
  if (project.category === 'Branding') return 'Brand Identity';
  if (project.category === 'Marketing Campaigns' && project.subcategory === 'Posters') return 'Posters';
  if (project.category === 'Motion Graphics') return 'Motion Graphics';
  if (project.category === 'Website Design') return 'Websites';
  return 'Other';
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const displayCategory = getDisplayCategory(project);

  switch (displayCategory) {
    case 'Brand Identity':
      return <BrandIdentityCard project={project} index={index} />;
    case 'Posters':
      return <PosterGalleryCard project={project} index={index} />;
    case 'Motion Graphics':
      return <MotionCard project={project} index={index} />;
    case 'Websites':
      return <WebsiteCard project={project} index={index} />;
    default:
      return <BrandIdentityCard project={project} index={index} />;
  }
}
