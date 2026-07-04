import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';
import CaseStudyPage from '../../../components/CaseStudyPage';

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudy({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p: any) => p.slug === slug);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-dark-primary"
      >
        <p className="text-light-muted">Project not found</p>
      </motion.div>
    );
  }

  const relatedProjects = portfolioData.projects
    .filter((p: any) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return <CaseStudyPage project={project} relatedProjects={relatedProjects} />;
}