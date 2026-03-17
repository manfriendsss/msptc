import { motion } from 'motion/react';

const partners = [
  { name: 'Schneider Electric', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schneider_Electric_2007.svg/2560px-Schneider_Electric_2007.svg.png', category: 'Thiết bị điện' },
  { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png', category: 'Tự động hóa' },
  { name: 'ABB', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/2560px-ABB_logo.svg.png', category: 'Hạ tầng điện' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png', category: 'Hạ tầng mạng' },
  { name: 'Hikvision', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Hikvision_logo.svg/2560px-Hikvision_logo.svg.png', category: 'An ninh giám sát' },
  { name: 'Daikin', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Daikin_logo.svg/2560px-Daikin_logo.svg.png', category: 'Hệ thống HVAC' },
  { name: 'Honeywell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Honeywell_logo.svg/2560px-Honeywell_logo.svg.png', category: 'Giải pháp tòa nhà' },
  { name: 'Legrand', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Legrand_logo.svg/2560px-Legrand_logo.svg.png', category: 'Thiết bị điện' },
];

export default function Partners() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Đối tác & Khách hàng
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
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
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
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

      {/* Testimonial */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-600 skew-x-12 translate-x-1/2 opacity-10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="text-6xl font-serif text-green-500 mb-8">“</div>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-12 italic">
            Chúng tôi đánh giá cao sự chuyên nghiệp và tinh thần trách nhiệm của đội ngũ MSP. Các giải pháp công nghệ mà MSP cung cấp không chỉ hiện đại mà còn rất thực tế và hiệu quả kinh tế.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden border-2 border-green-500">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070" 
                alt="Client" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">Nguyễn Văn A</div>
              <div className="text-green-400 text-sm">Giám đốc Kỹ thuật - Tập đoàn X</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
