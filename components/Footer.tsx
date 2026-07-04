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
         <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
       </div>

       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         {/* Quick CTA Section */}
         <div className="py-10 sm:py-12 lg:py-16 border-b border-white/10">
           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
             <div>
               <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-light-primary mb-1.5 sm:mb-2">
                 Ready to elevate your brand?
               </h3>
               <p className="text-light-secondary max-w-lg text-sm sm:text-base">
                 Let's discuss your project and explore how we can help you achieve your goals.
               </p>
             </div>
             <Link 
               href="#contact" 
               className="btn-premium inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold whitespace-nowrap w-full lg:w-auto"
             >
               Book a Free Consultation
               <ChevronRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
             </Link>
           </div>
         </div>

         {/* Main Footer Content */}
         <div className="py-12 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
           {/* Brand & Description */}
           <div className="lg:col-span-4 sm:col-span-2">
             <Link href="/" className="flex items-center space-x-2 sm:space-x-3 mb-5 sm:mb-6">
               <div className="h-9 w-9 sm:h-10 sm:w-10 bg-gradient-to-br from-brand-cyan to-brand-purple rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                 JK
               </div>
               <span className="text-lg sm:text-xl font-bold text-light-primary">
                 Kim<span className="text-brand-cyan">Designs</span>
               </span>
             </Link>
             <p className="text-light-secondary leading-relaxed max-w-sm mb-5 sm:mb-6 text-sm sm:text-base">
               Nairobi-based Graphic Designer specializing in branding, visual communication, motion graphics, video editing, websites, and marketing design.
             </p>
             
             {/* Social Proof */}
             <div className="grid grid-cols-3 gap-3 sm:gap-4">
               <div className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-dark-card/50 border border-white/10">
                 <div className="text-xl sm:text-2xl font-bold text-light-primary">150+</div>
                 <div className="text-[10px] sm:text-xs text-light-muted mt-0.5 sm:mt-1">Projects</div>
               </div>
               <div className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-dark-card/50 border border-white/10">
                 <div className="text-xl sm:text-2xl font-bold text-light-primary">50+</div>
                 <div className="text-[10px] sm:text-xs text-light-muted mt-0.5 sm:mt-1">Clients</div>
               </div>
               <div className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-dark-card/50 border border-white/10">
                 <div className="text-xl sm:text-2xl font-bold text-light-primary">98%</div>
                 <div className="text-[10px] sm:text-xs text-light-muted mt-0.5 sm:mt-1">Satisfaction</div>
               </div>
             </div>
           </div>

           {/* Navigation Links */}
           <div className="lg:col-span-2">
             <h3 className="text-light-primary font-semibold mb-3.5 sm:mb-4 text-sm sm:text-base">Navigation</h3>
             <nav className="space-y-2.5 sm:space-y-3">
               <Link href="#hero" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group text-sm sm:text-base min-h-[44px]">
                 <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                 Home
               </Link>
               <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group text-sm sm:text-base min-h-[44px]">
                 <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                 Services
               </Link>
               <Link href="#portfolio" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group text-sm sm:text-base min-h-[44px]">
                 <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                 Work
               </Link>
               <Link href="#about" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group text-sm sm:text-base min-h-[44px]">
                 <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                 About
               </Link>
               <Link href="#contact" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group text-sm sm:text-base min-h-[44px]">
                 <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                 Contact
               </Link>
             </nav>
           </div>

           {/* Services */}
           <div className="lg:col-span-3">
             <h3 className="text-light-primary font-semibold mb-3.5 sm:mb-4 text-sm sm:text-base">Services</h3>
             <nav className="space-y-2.5 sm:space-y-3">
               <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group text-sm sm:text-base min-h-[44px]">
                 <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                 Brand Identity
               </Link>
               <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group text-sm sm:text-base min-h-[44px]">
                 <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                 Motion Graphics
               </Link>
               <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group text-sm sm:text-base min-h-[44px]">
                 <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                 Video Editing
               </Link>
               <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group text-sm sm:text-base min-h-[44px]">
                 <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                 Website Design
               </Link>
               <Link href="#services" className="flex items-center text-light-muted hover:text-brand-cyan transition-colors group text-sm sm:text-base min-h-[44px]">
                 <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                 Visual Content
               </Link>
             </nav>
           </div>

           {/* Contact & Social */}
           <div className="lg:col-span-3">
             <h3 className="text-light-primary font-semibold mb-3.5 sm:mb-4 text-sm sm:text-base">Connect</h3>
<div className="space-y-3.5 sm:space-y-4 mb-5 sm:mb-6">
                <a href="mailto:lesalonjames@gmail.com" className="flex items-center space-x-2.5 sm:space-x-3 text-light-muted hover:text-brand-cyan transition-colors text-sm sm:text-base min-h-[44px]">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="break-all">lesalonjames@gmail.com</span>
                </a>
                <a href="https://wa.me/254704140920" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2.5 sm:space-x-3 text-light-muted hover:text-brand-cyan transition-colors text-sm sm:text-base min-h-[44px]">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>WhatsApp</span>
                </a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2.5 sm:space-x-3 text-light-muted hover:text-brand-cyan transition-colors text-sm sm:text-base min-h-[44px]">
                 <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                 <span>LinkedIn</span>
               </a>
             </div>

             {/* Social Links */}
             <div className="flex space-x-2.5 sm:space-x-3">
               <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-dark-card hover:bg-gradient-to-br hover:from-brand-cyan hover:to-brand-purple text-light-muted hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Behance">
                 <Brush className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
               </a>
               <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-dark-card hover:bg-gradient-to-br hover:from-brand-cyan hover:to-brand-purple text-light-muted hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Dribbble">
                 <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
               </a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-dark-card hover:bg-gradient-to-br hover:from-brand-cyan hover:to-brand-purple text-light-muted hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                 <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
               </a>
             </div>
           </div>
         </div>

         {/* Bottom Bar */}
         <div className="py-6 sm:py-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
           <div className="flex items-center space-x-1.5 sm:space-x-2 text-light-muted text-xs sm:text-sm">
             <Copyright className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
             <span>{currentYear} Kim Designs. All rights reserved.</span>
           </div>
           <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-light-muted">
             <a href="#" className="hover:text-brand-cyan transition-colors min-h-[44px] flex items-center">Privacy Policy</a>
             <a href="#" className="hover:text-brand-cyan transition-colors min-h-[44px] flex items-center">Terms of Service</a>
           </div>
         </div>
       </div>
     </footer>
   );
 };

export default Footer;