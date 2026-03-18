import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 'he-thong-camera-giam-sat',
    title: 'HỆ THỐNG CAMERA GIÁM SÁT',
    excerpt: 'Sơ đồ nguyên lý và giải pháp tích hợp hệ thống camera giám sát (CCTV) tổng thể cho công trình.',
    date: '15/02/2022',
    author: 'Ban Dự án',
    image: '/sdnl-cctv.jpg',
    category: 'Sơ đồ nguyên lý',
  },
  {
    id: 'tinh-nang-camera-avigilon',
    title: 'TÍNH NĂNG CAMERA AVIGILON',
    excerpt: 'Giới thiệu các công nghệ tiên tiến trên camera Avigilon dựa trên nền tảng H4 giúp tối ưu băng thông và tăng cường khả năng giám sát.',
    date: '28/11/2018',
    author: 'Phòng Kỹ thuật',
    image: '/camera-avigilon.jpg',
    category: 'Công nghệ',
  },
  {
    id: 'demo-camera',
    title: 'DEMO CAMERA',
    excerpt: 'Video demo camera Avigilon với các tính năng thông minh như tự động nhận diện người và phương tiện.',
    date: '30/11/2018',
    author: 'Ban Truyền thông',
    image: '/demo-camera.jpg',
    category: 'Video Dự án',
  },
  {
    id: 'schneider-electric',
    title: 'MSP ký kết hợp tác chiến lược với Schneider Electric Việt Nam',
    excerpt: 'Sự kiện đánh dấu bước tiến mới trong việc cung cấp các giải pháp quản lý năng lượng thông minh tại thị trường Việt Nam.',
    date: '15/03/2024',
    author: 'Ban Truyền thông',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070',
    category: 'Sự kiện',
  },
];

export default function News() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069"
            alt="News Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-green-400 mb-6"
          >
            Tin tức & Sự kiện
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Cập nhật những thông tin mới nhất về hoạt động của MSP và xu hướng công nghệ ngành xây lắp.
          </motion.p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <Link to={`/tin-tuc/${newsItems[0].id}`}>
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent p-10 flex flex-col justify-end">
                  <div className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full mb-4 w-fit uppercase tracking-wider">
                    {newsItems[0].category}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-slate-300 mb-6 line-clamp-2">
                    {newsItems[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-slate-400 space-x-6">
                    <div className="flex items-center"><Calendar size={16} className="mr-2" /> {newsItems[0].date}</div>
                    <div className="flex items-center"><User size={16} className="mr-2" /> {newsItems[0].author}</div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <div className="space-y-8">
              {newsItems.slice(1, 4).map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <Link to={`/tin-tuc/${item.id}`} className="flex gap-6">
                    <div className="w-40 h-32 rounded-2xl overflow-hidden shrink-0 shadow-md">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-green-600 uppercase tracking-wider">{item.category}</div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-xs text-slate-400 space-x-4">
                        <div className="flex items-center"><Calendar size={14} className="mr-1.5" /> {item.date}</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* More News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {newsItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <Link to={`/tin-tuc/${item.id}`}>
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="text-xs font-bold text-green-600 uppercase tracking-widest">{item.category}</div>
                    <h3 className="text-xl font-bold text-slate-900 line-clamp-2 hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                      <div className="text-xs text-slate-400">{item.date}</div>
                      <div className="text-green-600 text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                        Đọc tiếp <ArrowRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
