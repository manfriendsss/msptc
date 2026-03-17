import { motion } from 'motion/react';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Tòa nhà văn phòng Techcombank',
    category: 'Hệ thống điện & CNTT',
    location: 'Hà Nội',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Khu đô thị Vinhomes Ocean Park',
    category: 'Hệ thống chiếu sáng thông minh',
    location: 'Gia Lâm, Hà Nội',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Nhà máy Samsung Thái Nguyên',
    category: 'Hệ thống cơ điện M&E',
    location: 'Thái Nguyên',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Khách sạn JW Marriott',
    category: 'Hệ thống âm thanh & Hình ảnh',
    location: 'Hà Nội',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Trung tâm dữ liệu Viettel',
    category: 'Hệ thống hạ tầng mạng',
    location: 'Hòa Lạc, Hà Nội',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Bệnh viện Đa khoa Tâm Anh',
    category: 'Hệ thống gọi y tá & CNTT',
    location: 'Hà Nội',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2070',
  },
];

export default function Projects() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-green-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Công trình tiêu biểu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-green-100 max-w-3xl mx-auto"
          >
            Những dự án trọng điểm khẳng định năng lực và uy tín của MSP trên thị trường.
          </motion.p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-bold flex items-center shadow-xl">
                      Xem chi tiết <ExternalLink size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3">{project.category}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">{project.title}</h3>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1.5" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1.5" />
                      {project.year}
                    </div>
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
