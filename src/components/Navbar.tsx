import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Giới thiệu', path: '/gioi-thieu' },
  { name: 'Công trình', path: '/cong-trinh' },
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://api.studio.google.com/v1/projects/faxzkpxpghn737xqyx426s/files/input_file_0.png" 
              alt="MSP Logo" 
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col border-l border-slate-200 pl-3">
              <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-green-900' : 'text-green-700'}`}>MSP</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold leading-tight">Technology & <br/>Construction</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  location.pathname === link.path ? 'text-green-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/lien-he" 
              className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Yêu cầu tư vấn
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-green-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
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
              <div className="pt-4 px-3">
                <Link 
                  to="/lien-he" 
                  className="block w-full bg-green-600 text-white text-center py-4 rounded-xl font-bold shadow-lg"
                >
                  Yêu cầu tư vấn
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
