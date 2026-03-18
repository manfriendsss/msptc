import { motion } from 'motion/react';
import { 
  Camera, 
  Share2, 
  Volume2, 
  Phone, 
  Video, 
  Lock, 
  FileSearch, 
  Zap, 
  Lightbulb, 
  Wind,
  CheckCircle2 
} from 'lucide-react';

const products = [
  {
    title: 'CCTV – Camera giám sát',
    description: 'Chuyên cung cấp và lắp đặt hệ thống Camera giám sát từ các thương hiệu hàng đầu thế giới.',
    icon: Camera,
    features: ['Thương hiệu: Avigilon, Hanwha Vision, Axis, Pelco', 'Công nghệ AI phân tích hình ảnh', 'Giám sát 24/7 từ xa', 'Độ phân giải cực cao'],
  },
  {
    title: 'Truyền dẫn quang',
    description: 'Cung cấp đầy đủ các vật tư và thiết bị cho hệ thống kết nối cáp quang và truyền dẫn dữ liệu.',
    icon: Share2,
    features: ['Cáp quang đơn mốt/đa mốt', 'Bộ chuyển đổi (Media Converter)', 'Hộp phối quang (ODF)', 'Dây nhảy quang chuyên dụng'],
  },
  {
    title: 'Âm thanh thông báo',
    description: 'Giải pháp hệ thống âm thanh thông báo công cộng (Public Address System) cho tòa nhà và nhà máy.',
    icon: Volume2,
    features: ['Loa âm trần/treo tường', 'Amply công suất cao', 'Hệ thống IP Audio', 'Giải pháp thông báo khẩn cấp'],
  },
  {
    title: 'Hệ thống Mạng - Điện thoại',
    description: 'Tư vấn và cung cấp thiết bị hạ tầng mạng, hệ thống điện thoại nội bộ chuyên nghiệp cho doanh nghiệp.',
    icon: Phone,
    features: ['Switch/Router công nghiệp', 'Tổng đài điện thoại IP', 'Wifi chuyên dụng diện rộng', 'Tủ Rack và phụ kiện'],
  },
  {
    title: 'Body Camera',
    description: 'Các loại camera đeo người chuyên dụng cho lực lượng an ninh và giám sát hiện trường thực tế.',
    icon: Video,
    features: ['Ghi hình Full HD/4K', 'Chống va đập IP67', 'Pin dung lượng lớn', 'Kết nối 4G/Wifi'],
  },
  {
    title: 'Kiểm soát vào ra',
    description: 'Giải pháp quản lý ra vào (Access Control) an toàn bằng thẻ, vân tay hoặc công nghệ nhận diện khuôn mặt.',
    icon: Lock,
    features: ['Nhận diện khuôn mặt AI', 'Kiểm soát bãi xe thông minh', 'Máy chấm công hiện đại', 'Cửa xoay Tripod/Màn chắn'],
  },
];

const services = [
  {
    title: 'Tư vấn thiết kế hệ thống điện nhẹ',
    description: 'Khảo sát, tư vấn và lập thiết kế kỹ thuật cho toàn bộ hệ thống điện nhẹ (ELV) của công trình.',
    icon: FileSearch,
    features: ['Khảo sát hiện trường chi tiết', 'Thiết kế sơ đồ nguyên lý', 'Dự toán vật tư chính xác', 'Tư vấn tiêu chuẩn kỹ thuật'],
  },
  {
    title: 'Triển khai hệ thống điện nhẹ ELV',
    description: 'Thi công lắp đặt và cấu hình hệ thống điện nhẹ theo tiêu chuẩn kỹ thuật cao và tiến độ cam kết.',
    icon: Zap,
    features: ['Lắp đặt chuyên nghiệp', 'Cấu hình hệ thống phần mềm', 'Đào tạo chuyển giao', 'Bảo trì sau lắp đặt'],
  },
  {
    title: 'Giải pháp cho các hệ thống ELV',
    description: 'Đưa ra các giải pháp công nghệ tích hợp giúp quản lý tòa nhà và nhà máy thông minh, an toàn hơn.',
    icon: Lightbulb,
    features: ['Tích hợp hệ thống BMS', 'Quản lý năng lượng tập trung', 'Giải pháp an ninh tổng thể', 'Tự động hóa tòa nhà'],
  },
  {
    title: 'Hệ thống điều hòa không khí (HVAC)',
    description: 'Dịch vụ trọn gói từ tư vấn, thiết kế, cung cấp thiết bị đến lắp đặt hệ thống điều hòa không khí.',
    icon: Wind,
    features: ['Hệ thống điều hòa trung tâm VRV/VRF', 'Hệ thống Chiller', 'Thông gió và xử lý không khí', 'Bảo trì hệ thống HVAC'],
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
            Giải pháp công nghệ và xây lắp kỹ thuật toàn diện cho mọi công trình hiện đại.
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Danh mục Sản phẩm</h2>
            <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <product.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-green-600 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dịch vụ Chuyên nghiệp</h2>
            <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group flex flex-col md:flex-row gap-8"
              >
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-green-600 mr-2 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
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
