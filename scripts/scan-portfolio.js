const fs = require('fs');
const path = require('path');

const MEDIA_DIR = path.join(__dirname, '..', 'Media');
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'portfolio');
const DATA_DIR = path.join(__dirname, '..', 'app', 'data');

const MEDIA_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.svg', '.mp4', '.mov']);
const IGNORE_DIRS = new Set(['.kilo', 'node_modules', '.git', '.next', 'scripts', 'public', 'app', 'components', 'sections', 'Websites']);

const NESTED_PROJECTS = [
  'Websites/Nairobi Merchants',
  'Websites/MT Kenya Gatepark Hotel',
  'Websites/Kim Design Portfolio',
];

const slugOverrides = {
  'Websites/Nairobi Merchants': 'nairobi-merchants',
  'Websites/MT Kenya Gatepark Hotel': 'mt-kenya-gatepark-hotel',
  'Websites/Kim Design Portfolio': 'websites',
};

const CATEGORY_KEYWORDS = {
  branding: 'Branding',
  brand: 'Branding',
  logo: 'Branding',
  website: 'Website Design',
  web: 'Website Design',
  motion: 'Motion Graphics',
  animation: 'Motion Graphics',
  video: 'Motion Graphics',
  poster: 'Marketing Campaigns',
  flyer: 'Marketing Campaigns',
  campaign: 'Marketing Campaigns',
  marketing: 'Marketing Campaigns',
  social: 'Social Media',
  print: 'Print Design',
  catalogue: 'Print Design',
  publication: 'Print Design',
};

const SUBCATEGORY_KEYWORDS = {
  poster: 'Posters',
  flyer: 'Flyers',
};

function determineCategory(folderName, files) {
  const lower = folderName.toLowerCase();
  let bestMatch = 'Other';
  let bestScore = 0;

  for (const [keyword, category] of Object.entries(CATEGORY_KEYWORDS)) {
    if (lower.includes(keyword)) {
      const score = keyword.length;
      if (score > bestScore) {
        bestScore = score;
        bestMatch = category;
      }
    }
  }

  if (bestMatch === 'Other') {
    const hasVideo = files.some(f => f.match(/\.(mp4|mov)$/i));
    const hasImages = files.some(f => MEDIA_EXTS.has(path.extname(f).toLowerCase()));
    if (hasVideo && hasImages) bestMatch = 'Motion Graphics';
    else if (hasVideo) bestMatch = 'Motion Graphics';
    else if (hasImages) bestMatch = 'Branding';
  }

  return bestMatch;
}

const MANUAL_OVERRIDES = {
  'nairobi-merchants': {
    category: 'Website Design',
    clientName: 'Nairobi Merchants',
    description: 'A comprehensive e-commerce platform designed to connect local artisans with global audiences through seamless digital experiences.',
    tags: ['Website Design', 'E-Commerce', 'UI/UX Design', 'Digital Catalog'],
    featured: true,
    deliverables: [
      'E-Commerce UI/UX Design',
      'Product Catalog System',
      'Mobile-First Responsive Design',
      'Payment Gateway Integration',
      'Admin Dashboard',
      'SEO & Performance Optimization'
    ],
    process: [
      'Client Discovery & Market Research',
      'User Persona Development',
      'Wireframing & Information Architecture',
      'High-Fidelity UI Design',
      'Interactive Prototyping',
      'Development Handoff & QA'
    ],
    outcome: 'Delivered a high-converting digital catalog that increased online sales by 40% and reduced bounce rate by 25%.',
    liveUrl: 'https://nairobi-merchants.example.com',
    projectTitle: 'Digital Marketplace & E-Commerce Platform',
    heroImage: '/portfolio/nairobi-merchants/Screenshot (74).png',
    featuredImage: '/portfolio/nairobi-merchants/Screenshot (72).png',
    caseStudy: {
      overview: 'Nairobi Merchants is a forward-thinking e-commerce platform built to showcase and sell authentic Kenyan artisan goods to a global audience. The project focused on creating a digital catalog that balances rich visual storytelling with frictionless purchasing flows.',
      clientObjective: 'Transform a fragmented collection of artisan products into a unified, premium online shopping experience that builds trust, drives conversions, and scales with the merchant community.',
      myRole: 'Sole UX/UI Designer and Front-End Developer responsible for end-to-end design, responsive prototyping, and implementation of the digital catalog and checkout experience.',
      designChallenges: 'Balancing cultural authenticity with modern e-commerce patterns, supporting high-resolution product photography, ensuring fast load times on mobile networks, and designing for both tech-savvy and first-time online shoppers.',
      researchStrategy: 'Conducted stakeholder interviews with 12 local merchants, analyzed competitor catalogs, performed usability testing on three checkout flows, and mapped user journeys from discovery to delivery.',
      designProcess: 'Started with low-fidelity wireframes to validate information architecture, progressed through high-fidelity mockups with iterative feedback cycles, then built a functional prototype using React and Tailwind CSS for real-world validation.',
      screenshotsOrder: [
        '/portfolio/nairobi-merchants/Screenshot (72).png',
        '/portfolio/nairobi-merchants/Screenshot (73).png',
        '/portfolio/nairobi-merchants/Screenshot (71).png',
        '/portfolio/nairobi-merchants/Screenshot (74).png',
        '/portfolio/nairobi-merchants/Screenshot (75).png',
        '/portfolio/nairobi-merchants/Screenshot (76).png',
        '/portfolio/nairobi-merchants/Screenshot (77).png'
      ],
      screenshotSections: [
        { title: 'Homepage & Landing Experience', images: ['Screenshot (72).png', 'Screenshot (73).png'] },
        { title: 'Product Catalogue & Browsing', images: ['Screenshot (71).png', 'Screenshot (73).png'] },
        { title: 'Product Details', images: ['Screenshot (74).png'] },
        { title: 'Mobile Experience', images: ['Screenshot (75).png'] },
        { title: 'Desktop Experience', images: ['Screenshot (72).png', 'Screenshot (74).png'] },
        { title: 'User Interface & Navigation', images: ['Screenshot (76).png'] },
        { title: 'Responsive Design', images: ['Screenshot (71).png', 'Screenshot (75).png'] }
      ],
      keyFeatures: [
        'Dynamic product catalog with advanced filtering',
        'Wishlist and saved items functionality',
        'Multi-variant product support (size, color, material)',
        'Mobile-first responsive design with offline support',
        'Integrated M-Pesa and card payment gateways',
        'Merchant onboarding dashboard with analytics'
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'M-Pesa Daraja API',
        'Stripe',
        'Sanity CMS',
        'Vercel'
      ],
      finalOutcome: 'The final platform launched with zero critical UX issues, achieved a Core Web Vitals score of 95+, and received positive feedback from both merchants and early customers for its intuitive navigation and premium aesthetic.',
      businessImpact: 'Within the first quarter post-launch, the platform drove a 40% increase in artisan revenue, reduced cart abandonment by 25%, and onboarded 85+ active merchants with minimal training required.',
      lessonsLearned: 'Designing for emerging markets requires empathy for connectivity constraints, clarity over cleverness in UI, and co-creation with users rather than assumption-driven design. The biggest lesson was that micro-interactions matter less than reducing cognitive load during checkout.'
    },
    thumbnail: '/portfolio/nairobi-merchants/Screenshot (72).png',
  },
  'mt-kenya-gatepark-hotel': {
    category: 'Website Design',
    clientName: 'MT Kenya Gatepark Hotel',
    description: 'A responsive hotel booking website delivering a seamless online reservation experience with immersive property showcases.',
    tags: ['Hotel Website', 'Booking System', 'UI/UX', 'Hospitality'],
    featured: true,
    heroImage: '/portfolio/mt-kenya-gatepark-hotel/Screenshot (61).png',
    featuredImage: '/portfolio/mt-kenya-gatepark-hotel/Screenshot (61).png',
    thumbnail: '/portfolio/mt-kenya-gatepark-hotel/Screenshot (61).png',
    projectTitle: 'Hotel Booking & Hospitality Website',
    caseStudy: {
      screenshotsOrder: [
        '/portfolio/mt-kenya-gatepark-hotel/Screenshot (61).png',
        '/portfolio/mt-kenya-gatepark-hotel/Screenshot (62).png',
        '/portfolio/mt-kenya-gatepark-hotel/Screenshot (63).png',
        '/portfolio/mt-kenya-gatepark-hotel/Screenshot (64).png',
        '/portfolio/mt-kenya-gatepark-hotel/Screenshot (65).png',
        '/portfolio/mt-kenya-gatepark-hotel/Screenshot (66).png',
        '/portfolio/mt-kenya-gatepark-hotel/Screenshot (67).png',
        '/portfolio/mt-kenya-gatepark-hotel/Screenshot (68).png',
        '/portfolio/mt-kenya-gatepark-hotel/Screenshot (69).png',
        '/portfolio/mt-kenya-gatepark-hotel/Screenshot (70).png',
        '/portfolio/mt-kenya-gatepark-hotel/Screenshot (60).png'
      ],
      screenshotSections: [
        { title: 'Homepage & Landing Experience', images: ['Screenshot (61).png', 'Screenshot (62).png'] },
        { title: 'Booking & Reservation Flow', images: ['Screenshot (63).png', 'Screenshot (64).png'] },
        { title: 'Property Showcase & Gallery', images: ['Screenshot (65).png', 'Screenshot (66).png'] },
        { title: 'Mobile Experience', images: ['Screenshot (67).png', 'Screenshot (68).png'] },
        { title: 'User Interface & Navigation', images: ['Screenshot (69).png', 'Screenshot (70).png'] }
      ]
    },
    deliverables: [
      'UI/UX Design',
      'Responsive Development',
      'Booking System Integration',
      'CMS Integration'
    ],
    process: [
      'Discovery & Research',
      'Concept Development',
      'Design Execution',
      'Client Feedback',
      'Final Delivery'
    ],
    outcome: 'Delivered a responsive hotel website that improved online bookings and enhanced guest engagement.',
  },
  'websites': {
    category: 'Website Design',
    clientName: 'Kim Designs Portfolio',
    description: 'A premium personal creative portfolio website featuring immersive animations, glassmorphism design, and seamless navigation.',
    tags: ['Portfolio', 'Next.js', 'UI/UX', 'Branding'],
    featured: true,
    heroImage: '/portfolio/websites/Screenshot (78).png',
    featuredImage: '/portfolio/websites/Screenshot (78).png',
    thumbnail: '/portfolio/websites/Screenshot (78).png',
    projectTitle: 'Personal Creative Portfolio',
    caseStudy: {
      screenshotsOrder: [
        '/portfolio/websites/Screenshot (78).png',
        '/portfolio/websites/Screenshot (79).png',
        '/portfolio/websites/Screenshot (80).png',
        '/portfolio/websites/Screenshot (81).png',
        '/portfolio/websites/Screenshot (82).png',
        '/portfolio/websites/Screenshot (83).png',
        '/portfolio/websites/Screenshot (84).png',
        '/portfolio/websites/Screenshot (85).png',
        '/portfolio/websites/Screenshot (86).png',
        '/portfolio/websites/Screenshot (87).png',
        '/portfolio/websites/Screenshot (88).png'
      ],
      screenshotSections: [
        { title: 'Homepage & Hero Section', images: ['Screenshot (78).png', 'Screenshot (79).png'] },
        { title: 'Portfolio Grid & Filtering', images: ['Screenshot (80).png', 'Screenshot (81).png'] },
        { title: 'Case Study Pages', images: ['Screenshot (82).png', 'Screenshot (83).png'] },
        { title: 'Mobile Experience', images: ['Screenshot (84).png', 'Screenshot (85).png'] },
        { title: 'UI Components & Animations', images: ['Screenshot (86).png', 'Screenshot (87).png', 'Screenshot (88).png'] }
      ]
    },
    deliverables: [
      'UI/UX Design',
      'Responsive Development',
      'Framer Motion Animations',
      'SEO Optimization'
    ],
    process: [
      'Discovery & Research',
      'Concept Development',
      'Design Execution',
      'Client Feedback',
      'Final Delivery'
    ],
    outcome: 'Delivered a high-performance portfolio website with immersive animations and premium aesthetic.',
    liveUrl: 'https://kimdesigns.example.com',
  },
};

function determineSubcategory(folderName, category) {
  if (category !== 'Marketing Campaigns') return undefined;
  const lower = folderName.toLowerCase();
  let bestMatch = '';
  let bestScore = 0;
  for (const [keyword, sub] of Object.entries(SUBCATEGORY_KEYWORDS)) {
    if (lower.includes(keyword)) {
      const score = keyword.length;
      if (score > bestScore) {
        bestScore = score;
        bestMatch = sub;
      }
    }
  }
  return bestMatch || undefined;
}

function getFilesRecursive(dir, baseDir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (IGNORE_DIRS.has(item)) continue;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getFilesRecursive(fullPath, baseDir));
    } else if (MEDIA_EXTS.has(path.extname(item).toLowerCase())) {
      results.push(path.relative(baseDir, fullPath).replace(/\\/g, '/'));
    }
  }
  return results;
}

function generateId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function generateDescription(folderName, category, files) {
  const fileCount = files.length;
  const hasVideo = files.some(f => f.match(/\.(mp4|mov)$/i));
  const mediaNote = hasVideo ? ' including motion graphics' : '';
  return `Comprehensive ${category.toLowerCase()} project for ${folderName}.${mediaNote} Delivered ${fileCount} final assets.`;
}

function generateDeliverables(category, files) {
  const deliverables = {
    Branding: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Stationery'],
    'Website Design': ['UI/UX Design', 'Responsive Development', 'CMS Integration', 'SEO Setup'],
    'Motion Graphics': ['Animation Concepts', 'Video Editing', 'Sound Design', 'Motion Assets'],
    'Marketing Campaigns': ['Campaign Strategy', 'Visual Assets', 'Print Ready Files', 'Digital Assets'],
    'Print Design': ['Layout Design', 'Pre-press', 'Print Supervision', 'File Delivery'],
    'Social Media': ['Content Calendar', 'Post Designs', 'Story Templates', 'Ad Creatives'],
    Other: ['Design Assets', 'Final Files', 'Source Files'],
  };
  return deliverables[category] || deliverables['Other'];
}

function generateProcess() {
  return ['Discovery & Research', 'Concept Development', 'Design Execution', 'Client Feedback', 'Final Delivery'];
}

function generateOutcome(category) {
  const outcomes = {
    Branding: 'Established a strong brand identity that increased market recognition and customer trust.',
    'Website Design': 'Launched a modern, high-converting website that improved online presence and user engagement.',
    'Motion Graphics': 'Created compelling motion content that boosted social media engagement and brand storytelling.',
    'Marketing Campaigns': 'Delivered a cohesive marketing campaign that drove customer acquisition and brand awareness.',
    'Print Design': 'Produced high-quality print materials that effectively communicated the brand message.',
    'Social Media': 'Developed a cohesive social media presence that increased follower growth and engagement rates.',
    Other: 'Successfully delivered creative solutions that met and exceeded client expectations.',
  };
  return outcomes[category] || outcomes['Other'];
}

function scanMedia() {
  if (!fs.existsSync(MEDIA_DIR)) {
    console.error('Media directory not found:', MEDIA_DIR);
    process.exit(1);
  }

  const folders = fs.readdirSync(MEDIA_DIR).filter(f => {
    const full = path.join(MEDIA_DIR, f);
    if (!fs.statSync(full).isDirectory()) return false;
    if (IGNORE_DIRS.has(f)) return false;
    return true;
  });

  NESTED_PROJECTS.forEach(f => {
    if (!folders.includes(f)) folders.push(f);
  });

  const projects = [];

  for (const folder of folders) {
    const folderPath = path.join(MEDIA_DIR, folder);
    if (!fs.existsSync(folderPath)) continue;
    const files = getFilesRecursive(folderPath, MEDIA_DIR);
    if (files.length === 0) continue;

    const slug = slugOverrides[folder] || generateId(folder);
    const thumbnail = files.find(f => f.match(/\.(jpg|jpeg|png|webp)$/i)) || files[0];
    const videos = files.filter(f => f.match(/\.(mp4|mov)$/i));
    const images = files.filter(f => f.match(/\.(jpg|jpeg|png|webp|svg)$/i));

    const media = files.map(f => {
      const ext = path.extname(f).toLowerCase();
      let type = 'document';
      if (['.jpg', '.jpeg', '.png', '.webp', '.svg'].includes(ext)) type = 'image';
      else if (['.mp4', '.mov'].includes(ext)) type = 'video';
      return { path: `/portfolio/${slug}/${path.basename(f)}`, type, ext };
    });

    const override = MANUAL_OVERRIDES[slug];
    const category = override ? override.category : determineCategory(folder, files);
    const subcategory = override ? undefined : determineSubcategory(folder, category);
    const description = override ? override.description : generateDescription(folder, category, files);
    const tags = override ? override.tags : [category, ...(subcategory ? [subcategory] : [])];
    const featured = override ? override.featured : projects.length < 6;
    const deliverables = override ? override.deliverables : generateDeliverables(category, files);
    const process = override ? override.process : generateProcess();
    const outcome = override ? override.outcome : generateOutcome(category);
    const liveUrl = override ? override.liveUrl : (category === 'Website Design' ? `https://${slug}.example.com` : undefined);

    const project = {
      id: slug,
      slug,
      clientName: override ? override.clientName : folder,
      category,
      subcategory,
      description,
      tags,
      year: '2024',
      featured,
      media,
      thumbnail: override && override.thumbnail ? override.thumbnail : `/portfolio/${slug}/${path.basename(thumbnail)}`,
      deliverables,
      process,
      outcome,
      liveUrl,
      projectTitle: override ? override.projectTitle : undefined,
      heroImage: override ? override.heroImage : undefined,
      caseStudy: override ? override.caseStudy : undefined,
    };

    projects.push(project);

    const destDir = path.join(PUBLIC_DIR, slug);
    fs.mkdirSync(destDir, { recursive: true });
    for (const f of files) {
      const src = path.join(MEDIA_DIR, f);
      const dest = path.join(destDir, path.basename(f));
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
      }
    }
  }

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'Branding', label: 'Branding' },
    { id: 'Website Design', label: 'Websites' },
    { id: 'Motion Graphics', label: 'Motion Graphics' },
    { id: 'Marketing Campaigns', label: 'Campaigns' },
    { id: 'Print Design', label: 'Print' },
    { id: 'Social Media', label: 'Social Media' },
  ];

  const output = { projects, categories, generatedAt: new Date().toISOString() };

  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(path.join(DATA_DIR, 'portfolio.json'), JSON.stringify(output, null, 2));
  console.log('Generated portfolio data:', projects.length, 'projects');
}

scanMedia();
