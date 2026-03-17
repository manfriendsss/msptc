import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { motion } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow pt-32"
      >
        {children}
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  );
}
