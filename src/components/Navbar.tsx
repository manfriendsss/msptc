import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Giới thiệu', path: '/gioi-thieu' },
  { name: 'Dịch vụ', path: '/dich-vu' },
  { name: 'Đối tác', path: '/doi-tac' },
  { name: 'Tin tức', path: '/tin-tuc' },
  { name: 'Liên hệ', path: '/lien-he' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logoMSP.png" 
              alt="MSP Logo" 
              className="h-14 w-auto"
            />
            <div className="flex flex-col border-l border-slate-200 pl-3">
              <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-green-900' : 'text-green-700'}`}>MSP</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold leading-tight">Technology & <br/>Construction</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-semibold transition-colors hover:text-green-600 ${
                  location.pathname === link.path ? 'text-green-600' : (scrolled ? 'text-slate-700' : 'text-slate-800')
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-green-600 transition-colors"
              aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-4 text-base font-medium border-b border-slate-50 flex justify-between items-center ${
                    location.pathname === link.path ? 'text-green-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                  <ChevronRight size={16} className="text-slate-300" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
