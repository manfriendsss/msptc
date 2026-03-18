import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, X } from 'lucide-react';
import { newsItems } from '../data/newsData';



export default function NewsDetail() {
  const { id } = useParams();
  const article = newsItems.find(item => item.id === id);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) {
      return;
    }

    const images = container.querySelectorAll('img');
    images.forEach((image) => {
      if (!(image instanceof HTMLImageElement)) {
        return;
      }

      image.classList.add('cursor-zoom-in', 'transition-transform', 'duration-300', 'hover:scale-[1.01]');
    });
  }, [article]);

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement)) {
      return;
    }

    setSelectedImage({
      src: target.getAttribute('src') || '',
      alt: target.getAttribute('alt') || article?.title || 'Article image',
    });
  };

  if (!article) {
    return (
      <div className="py-32 text-center font-primary">
        <h2 className="text-2xl font-bold">KhÃ´ng tÃ¬m tháº¥y bÃ i viáº¿t</h2>
        <Link to="/tin-tuc" className="text-green-600 mt-4 inline-block font-bold">Quay láº¡i Tin tá»©c</Link>
      </div>
    );
  }

  return (
    <div className="pb-24 font-primary">
      <div className="bg-slate-900 pt-32 pb-60 -mb-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Link 
            to="/tin-tuc" 
            className="inline-flex items-center text-green-400 text-sm font-bold mb-8 hover:text-green-300 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> QUAY Láº I TIN Tá»¨C
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block px-3 py-1 bg-green-600/20 text-green-400 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
              {article.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center justify-center text-slate-400 space-x-6 text-sm">
              <div className="flex items-center font-medium"><Calendar size={16} className="mr-2 text-green-500" /> {article.date}</div>
              <div className="flex items-center font-medium"><User size={16} className="mr-2 text-green-500" /> {article.author}</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] bg-slate-100"
        >
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover cursor-zoom-in"
            onClick={() => setSelectedImage({ src: article.image, alt: article.title })}
          />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 font-primary">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-grow">
            <div 
              ref={contentRef}
              onClick={handleContentClick}
              className="prose prose-slate prose-lg max-w-none text-slate-700 pb-16"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="font-bold text-slate-900">Chia sáº» bÃ i viáº¿t:</div>
              <div className="flex space-x-3">
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-80 shrink-0 space-y-12">
            <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 sticky top-32">
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest border-b border-green-500 pb-2 inline-block">Tin liÃªn quan</h4>
              <div className="space-y-8">
                {newsItems.filter(item => item.id !== id).slice(0, 4).map(item => (
                  <Link key={item.id} to={`/tin-tuc/${item.id}`} className="block group">
                    <div className="text-[10px] text-green-600 font-bold mb-2 uppercase tracking-tighter">{item.date}</div>
                    <div className="font-bold text-slate-800 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight text-sm">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label="Xem áº£nh lá»›n">
          <div
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          />
          <div
            className="relative z-10 w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg transition-colors hover:bg-white"
              aria-label="ÄÃ³ng"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[88vh] w-full rounded-3xl object-contain bg-white/5 shadow-2xl"
            />
            {selectedImage.alt && (
              <p className="mt-4 text-center text-sm font-medium text-white/85">
                {selectedImage.alt}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

