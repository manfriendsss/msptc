import { motion } from 'motion/react';

const partners = [
  { name: 'Aruba', logo: '/aruba .png', category: 'Thiết bị mạng' },
  { name: 'Avigilon', logo: '/avigilon.png', category: 'Hệ thống Camera' },
  { name: 'Cisco', logo: '/cisco.png', category: 'Hạ tầng mạng' },
  { name: 'Hanwha', logo: '/hanwha.png', category: 'An ninh giám sát' },
  { name: 'Juniper', logo: '/juniper.png', category: 'Thiết bị mạng' },
  { name: 'Motorola', logo: '/motorolla.png', category: 'Thông tin liên lạc' },
  { name: 'Nagakawa', logo: '/nagakawa.png', category: 'Hệ thống HVAC' },
  { name: 'VNPT', logo: '/vnpt.jpg', category: 'Viễn thông' },
  { name: 'OEC', logo: '/KH-OEC.jpg', category: 'Đối tác chiến lược' },
  { name: 'Hikvision', logo: '/Hikvision-Logo.png', category: 'An ninh giám sát' },
  { name: 'FPT', logo: '/fpt.jpg', category: 'Công nghệ & Viễn thông' },
  { name: 'Polycom', logo: '/polycom.png', category: 'Hội nghị truyền hình' },
];

export default function Partners() {
  return (
    <div className="pb-24">
      {/* Header */}
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
            Đối tác & Khách hàng
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Sự tin tưởng của các đối tác hàng đầu là minh chứng cho chất lượng dịch vụ của MSP.
          </motion.p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-8 bg-white border border-slate-100 rounded-3xl flex flex-col items-center justify-center space-y-4 hover:shadow-xl hover:border-green-100 transition-all"
              >
                <div className="h-16 w-full flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center">
                  <div className="font-bold text-slate-900">{partner.name}</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{partner.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
