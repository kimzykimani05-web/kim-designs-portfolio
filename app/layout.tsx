import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MouseGradient from '../components/MouseGradient';

export const metadata = {
  title: 'Kim Designs | Graphic Designer & Visual Creative',
  description: 'Nairobi-based Graphic Designer specializing in branding, visual communication, motion graphics, video editing, websites, and marketing design.',
  openGraph: {
    title: 'Kim Designs | Building Brands People Remember',
    description: 'Nairobi-based Graphic Designer specializing in branding, motion graphics, and high-converting websites for visionary businesses.',
    url: 'https://kimdesigns.com',
    siteName: 'Kim Designs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kim Designs - Premium Brand Identity & Motion Graphics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kim Designs | Building Brands People Remember',
    description: 'Nairobi-based Graphic Designer specializing in branding, motion graphics, and high-converting websites.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MouseGradient />
        <a href="#hero" className="sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-cyan focus:text-white focus:rounded-full">Skip to main content</a>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}