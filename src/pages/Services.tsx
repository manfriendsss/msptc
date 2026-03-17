import { motion } from 'motion/react';
import { Cpu, Zap, Radio, Building, Settings, ShieldCheck, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Tư vấn giải pháp công nghệ',
    description: 'Cung cấp các giải pháp công nghệ tiên tiến, tối ưu hóa chi phí và hiệu quả vận hành cho các công trình xây dựng hiện đại.',
    icon: Cpu,
    features: ['Khảo sát thực tế', 'Thiết kế hệ thống', 'Dự toán kinh tế', 'Tư vấn kỹ thuật'],
  },
  {
    title: 'Thi công hệ thống cơ điện (M&E)',
    description: 'Lắp đặt chuyên nghiệp các hệ thống điện động lực, chiếu sáng, điều hòa không khí và thông gió cho tòa nhà, nhà máy.',
    icon: Zap,
    features: ['Hệ thống điện nhẹ', 'Hệ thống HVAC', 'PCCC & Cấp thoát nước', 'Trạm biến áp'],
  },
  {
    title: 'Hệ thống thông tin liên lạc',
    description: 'Triển khai hạ tầng mạng, tổng đài, âm thanh thông báo và các giải pháp truyền thông tích hợp.',
    icon: Radio,
    features: ['Mạng LAN/WAN', 'Hệ thống Camera giám sát', 'Âm thanh công cộng', 'Kiểm soát vào ra'],
  },
  {
    title: 'Giải pháp tòa nhà thông minh',
    description: 'Tích hợp các công nghệ tự động hóa BMS, iBMS giúp quản lý tòa nhà thông minh, tiết kiệm năng lượng và an toàn.',
    icon: Building,
    features: ['Tự động hóa chiếu sáng', 'Kiểm soát năng lượng', 'Quản lý an ninh tập trung', 'Giao diện điều khiển trực quan'],
  },
  {
    title: 'Bảo trì & Vận hành hệ thống',
    description: 'Dịch vụ bảo dưỡng định kỳ, sửa chữa và vận hành hệ thống kỹ thuật đảm bảo hoạt động liên tục và ổn định.',
    icon: Settings,
    features: ['Bảo trì định kỳ', 'Sửa chữa khẩn cấp 24/7', 'Tối ưu hóa vận hành', 'Đào tạo chuyển giao'],
  },
  {
    title: 'Cung cấp thiết bị công nghệ',
    description: 'Phân phối các thiết bị kỹ thuật, công nghệ từ các thương hiệu hàng đầu thế giới với đầy đủ CO/CQ.',
    icon: ShieldCheck,
    features: ['Thiết bị điện tử', 'Vật tư xây lắp', 'Phần mềm quản lý', 'Linh kiện thay thế'],
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2070"
            alt="Services Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-green-400"
          >
            Sản phẩm & Dịch vụ
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Giải pháp toàn diện cho mọi nhu cầu về công nghệ và xây lắp kỹ thuật.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Quy trình làm việc chuyên nghiệp</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Chúng tôi áp dụng quy trình chuẩn hóa để đảm bảo chất lượng và tiến độ cho mọi dự án.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Tiếp nhận & Khảo sát', desc: 'Lắng nghe nhu cầu và khảo sát thực tế công trình.' },
              { step: '02', title: 'Tư vấn & Thiết kế', desc: 'Đề xuất giải pháp tối ưu và thiết kế chi tiết.' },
              { step: '03', title: 'Thi công & Lắp đặt', desc: 'Triển khai thi công đúng tiến độ và tiêu chuẩn.' },
              { step: '04', title: 'Nghiệm thu & Bàn giao', desc: 'Kiểm tra kỹ thuật và bàn giao hướng dẫn sử dụng.' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-white/10 mb-4">{item.step}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-green-50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
