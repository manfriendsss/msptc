import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Cpu, Network, Zap } from 'lucide-react';
import { partners } from '../data/partnersData';



export default function Partners() {
  const [selectedPartner, setSelectedPartner] = useState<typeof partners[0] | null>(null);

  useEffect(() => {
    if (!selectedPartner) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPartner(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPartner]);

  return (
    <div className="pb-24 font-primary">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070"
            alt="Partners Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-green-400 mb-6"
          >
            Äá»‘i tÃ¡c & KhÃ¡ch hÃ ng
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Sá»± tin tÆ°á»Ÿng cá»§a cÃ¡c Ä‘á»‘i tÃ¡c cÃ´ng nghá»‡ hÃ ng Ä‘áº§u lÃ  minh chá»©ng cho nÄƒng lá»±c vÃ  uy tÃ­n cá»§a MSP trÃªn thá»‹ trÆ°á»ng.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Há»‡ sinh thÃ¡i Ä‘á»‘i tÃ¡c</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedPartner(partner)}
                className="group cursor-pointer p-8 bg-white border border-slate-100 rounded-3xl flex flex-col items-center justify-center space-y-4 hover:shadow-2xl hover:border-green-400 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-16 w-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <div className="font-bold text-slate-900 group-hover:text-green-600 transition-colors">{partner.name}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{partner.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPartner(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                type="button"
                onClick={() => setSelectedPartner(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                aria-label="Close partner details"
              >
                <X size={20} />
              </button>

              <div className="p-8 pb-4 border-b border-slate-50">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-slate-50 rounded-3xl p-4 flex items-center justify-center border border-slate-100 shadow-inner">
                    <img src={selectedPartner.logo} alt={selectedPartner.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-1">{selectedPartner.name}</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100 uppercase tracking-widest">
                      {selectedPartner.category}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-grow p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
                <div className="space-y-8">
                  <div className="bg-green-50/50 p-6 rounded-3xl border border-green-100">
                    <h4 className="flex items-center text-green-800 font-bold mb-3">
                      <Shield className="mr-2" size={18} /> Giá»›i thiá»‡u chung
                    </h4>
                    <p className="text-slate-700 leading-relaxed italic">
                      {selectedPartner.description}
                    </p>
                  </div>

                  <div 
                    className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed font-primary"
                    dangerouslySetInnerHTML={{ __html: selectedPartner.detailedInfo || '' }}
                  />
                </div>
              </div>

              <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex space-x-4">
                  <div className="flex items-center text-xs text-slate-400 font-bold uppercase tracking-tight">
                    <Cpu size={14} className="mr-1 text-green-500" /> CÃ´ng nghá»‡
                  </div>
                  <div className="flex items-center text-xs text-slate-400 font-bold uppercase tracking-tight">
                    <Network size={14} className="mr-1 text-green-500" /> TÃ­ch há»£p
                  </div>
                  <div className="flex items-center text-xs text-slate-400 font-bold uppercase tracking-tight">
                    <Zap size={14} className="mr-1 text-green-500" /> Hiá»‡u quáº£
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => setSelectedPartner(null)}
                  className="px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-2xl hover:bg-green-600 transition-colors shadow-lg shadow-slate-200"
                >
                  ÄÃ³ng láº¡i
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

