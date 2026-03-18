import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

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
    image: '/camera-avigilon.png',
    category: 'Công nghệ',
  },
  {
    id: 'demo-camera',
    title: 'DEMO CAMERA',
    excerpt: 'Video demo camera Avigilon với các tính năng thông minh như tự động nhận diện người và phương tiện.',
    date: '30/11/2018',
    author: 'Ban Truyền thông',
    image: '/demo-camera.png',
    category: 'Video Dự án',
  },
  {
    id: 'data-center-tech',
    title: 'Hạ tầng Data Center: Trái tim của kỷ nguyên chuyển đổi số',
    excerpt: 'Tìm hiểu về tiêu chuẩn Tier III, hệ thống làm mát DCIM và giải pháp hạ tầng máy chủ cho doanh nghiệp lớn.',
    date: '19/03/2024',
    author: 'Phòng Hạ tầng',
    image: '/data-center-tech.png',
    category: 'Hạ tầng',
  },
  {
    id: 'body-camera',
    title: 'Body Camera: Giám sát an ninh di động chuyên nghiệp',
    excerpt: 'Giải pháp camera đeo người cho lực lượng an ninh, bảo vệ với khả năng truyền phát trực tiếp và ghi hình 4K.',
    date: '18/03/2024',
    author: 'Phòng Giải pháp',
    image: '/body-camera.png',
    category: 'Sản phẩm',
  },
  {
    id: 'access-control',
    title: 'Kiểm soát vào ra: An toàn tuyệt đối bằng nhận diện khuôn mặt',
    excerpt: 'Giải pháp quản lý Access Control hiện đại sử dụng công nghệ sinh trắc học và thẻ thông minh cho tòa nhà.',
    date: '17/03/2024',
    author: 'Ban Tư vấn',
    image: '/access-control.png',
    category: 'Giải pháp',
  },
  {
    id: 'elv-solutions',
    title: 'Hệ thống ELV: Tích hợp hạ tầng thông minh cho công trình',
    excerpt: 'Giải pháp điện nhẹ tích hợp giúp quản lý tòa nhà và nhà máy một cách đồng bộ, an toàn và hiệu quả hơn.',
    date: '16/03/2024',
    author: 'Phòng Kỹ thuật',
    image: '/elv-solutions.png',
    category: 'Cốt lõi',
  },
  {
    id: 'smart-city-trend',
    title: 'Xu hướng đô thị thông minh (Smart City) tầm nhìn 2030',
    excerpt: 'Khám phá các công nghệ kết nối vạn vật (IoT) và trí tuệ nhân tạo đang thay đổi bộ mặt đô thị hiện đại.',
    date: '18/03/2024',
    author: 'Phòng Giải pháp',
    image: '/smart-city.png',
    category: 'Xu hướng',
  },
  {
    id: 'smart-home-2024',
    title: 'Nhà ở thông minh: Khi công nghệ phục vụ trải nghiệm sống',
    excerpt: 'Giải pháp Smart Home tích hợp điều khiển giọng nói và tự động hóa toàn diện cho không gian sống hiện đại.',
    date: '17/03/2024',
    author: 'Ban Tư vấn',
    image: '/smart-home.png',
    category: 'Giải pháp',
  },
  {
    id: 'ai-camera-tech',
    title: 'Công nghệ Camera AI: Tương lai của hệ thống an ninh',
    excerpt: 'Sự kết hợp giữa thị giác máy tính và học sâu (Deep Learning) mang lại khả năng phân tích hành vi thời gian thực.',
    date: '16/03/2024',
    author: 'Phòng Kỹ thuật',
    image: '/ai-camera.png',
    category: 'Công nghệ',
  },
  {
    id: 'ai-architecture',
    title: 'Ứng dụng AI trong thiết kế xây dựng nhà ở và văn phòng',
    excerpt: 'Cách trí tuệ nhân tạo tối ưu hóa quy trình thiết kế kiến trúc và quản lý hạ tầng tòa nhà chuyên nghiệp.',
    date: '15/03/2024',
    author: 'Ban Thiết kế',
    image: '/ai-design.png',
    category: 'Kiến thức',
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
  const featuredNews = newsItems[0];
  const gridNews = newsItems.slice(1);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070"
            alt="News Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            Tin tức & Sự kiện
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Cập nhật những chuyển động công nghệ mới nhất từ MSP và thế giới.
          </motion.p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 bg-white -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/tin-tuc/${featuredNews.id}`} className="block group">
            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
                <div className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                  {featuredNews.category}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-green-400 transition-colors">
                  {featuredNews.title}
                </h2>
                <div className="flex items-center text-slate-300 text-sm space-x-6">
                  <div className="flex items-center"><Calendar size={16} className="mr-2 text-green-500" /> {featuredNews.date}</div>
                  <div className="flex items-center"><User size={16} className="mr-2 text-green-500" /> {featuredNews.author}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {gridNews.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col h-full bg-slate-50 border border-slate-100 rounded-[32px] overflow-hidden hover:shadow-2xl hover:border-green-400 transition-all duration-300"
              >
                <Link to={`/tin-tuc/${item.id}`} className="block relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-green-700 text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm">
                    {item.category}
                  </div>
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs text-green-600 font-bold mb-3 flex items-center">
                    <Calendar size={12} className="mr-1" /> {item.date}
                  </div>
                  <Link to={`/tin-tuc/${item.id}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <Link 
                      to={`/tin-tuc/${item.id}`}
                      className="inline-flex items-center text-green-700 text-sm font-bold hover:text-green-800 transition-colors"
                    >
                      XEM CHI TIẾT <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
