import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MouseGradient from '../components/MouseGradient';

export const metadata = {
  title: 'Kim Designs | Graphic Designer & Visual Creative',
  description: 'Nairobi-based Graphic Designer specializing in branding, visual communication, motion graphics, video editing, websites, and marketing design.',
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}