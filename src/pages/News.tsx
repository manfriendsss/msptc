import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    title: 'MSP ký kết hợp tác chiến lược với Schneider Electric Việt Nam',
    excerpt: 'Sự kiện đánh dấu bước tiến mới trong việc cung cấp các giải pháp quản lý năng lượng thông minh tại thị trường Việt Nam.',
    date: '15/03/2024',
    author: 'Ban Truyền thông',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070',
    category: 'Sự kiện',
  },
  {
    title: 'Xu hướng tòa nhà thông minh (Smart Building) năm 2024',
    excerpt: 'Khám phá những công nghệ mới nhất đang định hình tương lai của ngành xây dựng và quản lý tòa nhà.',
    date: '10/03/2024',
    author: 'Phòng Kỹ thuật',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069',
    category: 'Kiến thức',
  },
  {
    title: 'MSP hoàn thành bàn giao hệ thống cơ điện tại dự án Techcombank Tower',
    excerpt: 'Dự án được hoàn thành đúng tiến độ với các tiêu chuẩn kỹ thuật khắt khe nhất, nhận được đánh giá cao từ chủ đầu tư.',
    date: '05/03/2024',
    author: 'Ban Dự án',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
    category: 'Dự án',
  },
  {
    title: 'Giải pháp tiết kiệm năng lượng cho nhà máy công nghiệp',
    excerpt: 'Làm thế nào để tối ưu hóa chi phí vận hành thông qua việc ứng dụng các hệ thống điều khiển thông minh.',
    date: '01/03/2024',
    author: 'Phòng Giải pháp',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2070',
    category: 'Kiến thức',
  },
];

export default function News() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Tin tức & Sự kiện
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl"
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
              className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
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
            </motion.div>

            <div className="space-y-8">
              {newsItems.slice(1, 4).map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* More News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Repeat items for grid layout */}
            {[...newsItems, ...newsItems].slice(0, 6).map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
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
                  <h3 className="text-xl font-bold text-slate-900 line-clamp-2 hover:text-green-600 transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div className="text-xs text-slate-400">{item.date}</div>
                    <button className="text-green-600 text-sm font-bold flex items-center hover:translate-x-1 transition-transform">
                      Đọc tiếp <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
