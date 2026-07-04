"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ProjectGallery from './ProjectGallery';
import VideoShowcase from './VideoShowcase';
import { ArrowLeft, ExternalLink, CheckCircle2, Lightbulb, Target, Users, ClipboardList, Code2, TrendingUp, Zap } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

interface CaseStudyPageProps {
  project: any;
  relatedProjects: any[];
}

const sectionIconMap: Record<string, any> = {
  overview: ClipboardList,
  clientObjective: Target,
  myRole: Users,
  designChallenges: Zap,
  researchStrategy: ClipboardList,
  designProcess: ClipboardList,
  keyFeatures: CheckCircle2,
  technologies: Code2,
  finalOutcome: CheckCircle2,
  businessImpact: TrendingUp,
  lessonsLearned: Lightbulb,
};

const sectionTitleMap: Record<string, string> = {
  overview: 'Project Overview',
  clientObjective: 'Client Objective',
  myRole: 'My Role',
  designChallenges: 'Design Challenges',
  researchStrategy: 'Research & Strategy',
  designProcess: 'Design Process',
  keyFeatures: 'Key Features',
  technologies: 'Technologies Used',
  finalOutcome: 'Final Outcome',
  businessImpact: 'Business Impact',
  lessonsLearned: 'Lessons Learned',
};

export default function CaseStudyPage({ project, relatedProjects }: CaseStudyPageProps) {
  const images = project.media.filter((m: any) => m.type === 'image');
  const videos = project.media.filter((m: any) => m.type === 'video');
  const websiteScreenshots = project.media.filter(
    (m: any) => m.type === 'image' && m.path.toLowerCase().includes('screenshot')
  );

  const caseStudy = project.caseStudy || {};
  const heroSrc = project.heroImage || project.thumbnail || images[0]?.path || '';
  const orderedScreenshots = caseStudy.screenshotsOrder
    ? caseStudy.screenshotsOrder
        .map((src: string) => project.media.find((m: any) => m.path === src))
        .filter(Boolean)
    : websiteScreenshots;

  const screenshotSections = caseStudy.screenshotSections || [];

  const renderCaseStudySection = (key: string) => {
    const value = caseStudy[key];
    if (!value) return null;
    const Icon = sectionIconMap[key] || ClipboardList;
    const title = sectionTitleMap[key] || key;

    if (Array.isArray(value)) {
      return (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 lg:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 border border-brand-cyan/20">
              <Icon className="h-5 w-5 text-brand-cyan" />
            </div>
            <h2 className="text-2xl font-bold text-light-primary">{title}</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {(value as string[]).map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-cyan mt-0.5 flex-shrink-0" />
                <span className="text-light-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      );
    }

    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-8 lg:p-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 border border-brand-cyan/20">
            <Icon className="h-5 w-5 text-brand-cyan" />
          </div>
          <h2 className="text-2xl font-bold text-light-primary">{title}</h2>
        </div>
        <p className="text-light-secondary leading-relaxed text-lg">{value as string}</p>
      </motion.section>
    );
  };

  const caseStudyOrder = [
    'overview',
    'clientObjective',
    'myRole',
    'designChallenges',
    'researchStrategy',
    'designProcess',
    'keyFeatures',
    'technologies',
    'finalOutcome',
    'businessImpact',
    'lessonsLearned',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-dark-primary"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-light-muted hover:text-brand-cyan transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <SectionHeader
          badge={project.category}
          badgeColor="purple"
          heading={
            <>
              {project.clientName}
              {project.projectTitle && (
                <span className="block text-2xl lg:text-3xl font-medium text-light-secondary mt-2">
                  {project.projectTitle}
                </span>
              )}
            </>
          }
          subheading={project.description}
        />
        <div className="flex flex-wrap gap-3 justify-center items-center">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium"
            >
              Visit Live Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          )}
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-light-muted border border-white/10">
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="my-12 lg:my-16"
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="relative aspect-video lg:aspect-[21/9]">
              <Image
                src={heroSrc}
                alt={project.clientName}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            {caseStudyOrder.map((key) => renderCaseStudySection(key))}

            {orderedScreenshots.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <h2 className="text-3xl font-bold text-light-primary mb-8">Website Showcase</h2>
                {screenshotSections.length > 0 ? (
                  screenshotSections.map((section: any, idx: number) => {
                    const sectionImages = section.images
                      .map((name: string) => orderedScreenshots.find((s: any) => s.path.endsWith(name)))
                      .filter(Boolean);
                    if (sectionImages.length === 0) return null;
                    return (
                      <div key={idx} className="space-y-6">
                        <h3 className="text-xl font-semibold text-light-primary border-b border-white/10 pb-3">
                          {section.title}
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {sectionImages.map((shot: any, i: number) => (
                            <div key={i} className="glass-card rounded-2xl overflow-hidden group">
                              <div className="relative aspect-[16/10]">
                                <Image
                                  src={shot.path}
                                  alt={`${section.title} ${i + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                    })
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {orderedScreenshots.map((shot: any, idx: number) => (
                      <div key={idx} className="glass-card rounded-2xl overflow-hidden group">
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={shot.path}
                            alt={`Website preview ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>
            )}

            {images.filter((m: any) => !m.path.toLowerCase().includes('screenshot')).length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-light-primary mb-6">Design Showcase</h2>
                <ProjectGallery
                  images={images.filter((m: any) => !m.path.toLowerCase().includes('screenshot'))}
                  title={project.clientName}
                />
              </motion.section>
            )}

            {videos.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <VideoShowcase videos={videos} title={project.clientName} />
              </motion.section>
            )}
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 lg:p-8"
            >
              <h3 className="text-xl font-bold text-light-primary mb-4">Services Provided</h3>
              <ul className="space-y-3">
                {project.deliverables.map((deliverable: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                    <span className="text-light-secondary">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-6 lg:p-8"
            >
              <h3 className="text-xl font-bold text-light-primary mb-4">Process</h3>
              <ol className="space-y-4">
                {project.process.map((step: string, idx: number) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple flex items-center justify-center text-white font-semibold text-sm">
                      {idx + 1}
                    </span>
                    <span className="text-light-secondary pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-6 lg:p-8"
            >
              <h3 className="text-xl font-bold text-light-primary mb-4">Results</h3>
              <p className="text-light-secondary leading-relaxed">{project.outcome}</p>
            </motion.div>
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 lg:mt-24"
          >
            <h2 className="text-2xl font-bold text-light-primary mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((related, idx) => (
                <Link
                  key={related.id}
                  href={`/portfolio/${related.slug}`}
                  className="group block"
                >
                  <div className="glass-card rounded-xl overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={related.thumbnail}
                        alt={related.clientName}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 via-dark-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-light-primary group-hover:text-brand-cyan transition-colors">
                        {related.clientName}
                      </h3>
                      <p className="text-sm text-light-muted">{related.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </motion.div>
  );
}
