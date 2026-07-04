export type ProjectCategory =
  | 'Branding'
  | 'Website Design'
  | 'Motion Graphics'
  | 'Marketing Campaigns'
  | 'Print Design'
  | 'Social Media'
  | 'Other';

export type MediaFile = {
  path: string;
  type: 'image' | 'video' | 'document';
  ext: string;
};

export type ProjectCaseStudy = {
  project: Project;
  relatedProjects: Project[];
};

export type CaseStudyContent = {
  overview?: string;
  clientObjective?: string;
  myRole?: string;
  designChallenges?: string;
  researchStrategy?: string;
  designProcess?: string;
  keyFeatures?: string[];
  technologies?: string[];
  finalOutcome?: string;
  businessImpact?: string;
  lessonsLearned?: string;
  screenshotsOrder?: string[];
  screenshotSections?: { title: string; images: string[] }[];
};

export type Project = {
  id: string;
  slug: string;
  clientName: string;
  projectTitle?: string;
  category: ProjectCategory;
  subcategory?: string;
  description: string;
  tags: string[];
  year: string;
  featured: boolean;
  media: MediaFile[];
  thumbnail: string;
  heroImage?: string;
  featuredImage?: string;
  deliverables: string[];
  process: string[];
  outcome: string;
  liveUrl?: string;
  caseStudy?: CaseStudyContent;
};

export type PortfolioData = {
  projects: Project[];
  categories: { id: ProjectCategory | 'all'; label: string }[];
  generatedAt: string;
};
