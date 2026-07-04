import Link from 'next/link';
import { 
  Mail, 
  MessageCircle,
  Users,
  Brush,
  Camera,
  ExternalLink,
  ChevronRight,
  Copyright
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-primary text-light-muted overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Quick CTA Section */}
        <div className="py-12 lg:py-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-light-primary mb-2">
                Ready to elevate your brand?
              </h3>
              <p className="text-light-secondary max-w-lg">
                Let's discuss your project and explore how we can help you achieve your goals.
              </p>
            </div>
            <Link 
              href="#contact" 
              className="btn-premium inline-flex items-center justify-center px-8 py-4 text-base font-semibold whitespace-nowrap"
            >
              Book a Free Consultation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 bg-gradient-to-br from-brand-cyan to-brand-purple rounded-xl flex items-center justify-center text-white font-bold text-sm">
                JK
              </div>
              <span className="text-xl font-bold text-light-primary">
                Kim<span className="text-brand-cyan">Designs</span>
              </span>
            </Link>
            <p className="text-light-secondary leading-relaxed max-w-sm mb-6">
              Nairobi-based Graphic Designer specializing in branding, visual communication, motion graphics, video editing, websites, and marketing design.
            </p>
            
            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-2xl bg-dark-card/50 border border-white/10">
                <div className="text-2xl font-bold text-light-primary">150+</div>
                <div className="text-xs text-light-muted mt-1">Projects</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-dark-card/50 border border-white/10">
                <div className="text-2xl font-bold text-light-primary">50+</div>
                <div className="text-xs text-light-muted mt-1">Clients</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-dark-card/50 border border-white/10">
                <div className="text-2xl font-bold text-light-primary">98%</div>
                <div className="text-xs text-light-muted mt-1">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-light-primary font-semibold mb-4">Navigation</h3>
            <nav className="space-y-3">
              <Link href="#hero" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group">
                <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Home
              </Link>
              <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group">
                <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Services
              </Link>
              <Link href="#portfolio" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group">
                <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Work
              </Link>
              <Link href="#about" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group">
                <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                About
              </Link>
              <Link href="#contact" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group">
                <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-light-primary font-semibold mb-4">Services</h3>
            <nav className="space-y-3">
              <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group">
                <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Brand Identity
              </Link>
              <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group">
                <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Motion Graphics
              </Link>
              <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group">
                <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Video Editing
              </Link>
              <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group">
                <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Website Design
              </Link>
              <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group">
                <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Visual Content
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-3">
            <h3 className="text-light-primary font-semibold mb-4">Connect</h3>
<div className="space-y-4 mb-6">
               <a href="mailto:lesalonjames@gmail.com" className="flex items-center space-x-3 text-light-muted hover:text-brand-cyan transition-colors">
                 <Mail className="h-4 w-4" />
                 <span>lesalonjames@gmail.com</span>
               </a>
               <a href="https://wa.me/254704140920" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-light-muted hover:text-brand-cyan transition-colors">
                 <MessageCircle className="h-4 w-4" />
                 <span>WhatsApp</span>
               </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-light-muted hover:text-brand-cyan transition-colors">
                <Users className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-xl bg-dark-card hover:bg-gradient-to-br hover:from-brand-cyan hover:to-brand-purple text-light-muted hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Behance">
                <Brush className="h-4 w-4" />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-xl bg-dark-card hover:bg-gradient-to-br hover:from-brand-cyan hover:to-brand-purple text-light-muted hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Dribbble">
                <Camera className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-xl bg-dark-card hover:bg-gradient-to-br hover:from-brand-cyan hover:to-brand-purple text-light-muted hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-2 text-light-muted text-sm">
            <Copyright className="h-4 w-4" />
            <span>{currentYear} Kim Designs. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-light-muted">
            <a href="#" className="hover:text-brand-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;