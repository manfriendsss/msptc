import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users2, Lightbulb } from 'lucide-react';

const values = [
  {
    title: 'Chất lượng hàng đầu',
    description: 'Cam kết mang đến những sản phẩm và dịch vụ tốt nhất, vượt qua mong đợi của khách hàng.',
    icon: ShieldCheck,
  },
  {
    title: 'Đội ngũ chuyên gia',
    description: 'Hội tụ những kỹ sư, chuyên gia có bề dày kinh nghiệm và tâm huyết với nghề.',
    icon: Users2,
  },
  {
    title: 'Giải pháp sáng tạo',
    description: 'Luôn cập nhật và ứng dụng những công nghệ tiên tiến nhất vào thực tiễn.',
    icon: Lightbulb,
  },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
            alt="Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-green-400"
          >
            Giới thiệu về MSP
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Kiến tạo giá trị bền vững thông qua công nghệ và sự tận tâm.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                Câu chuyện của chúng tôi
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Công ty CP công nghệ và xây lắp MSP được thành lập bởi các thành viên có bề dày kinh nghiệm trong chuyên môn và quản lý. Với niềm đam mê và sáng tạo cùng sự tin tưởng, hợp tác của các đối tác và khách hàng, chúng tôi mong muốn xây dựng lên một tổ chức hoạt động có quy trình đồng bộ và hiệu quả, bền vững trong tương lai.
                </p>
                <p>
                  Với phương châm: <span className="text-green-600 font-bold whitespace-nowrap">MINH BẠCH – SÁNG TẠO – PHÁT TRIỂN</span>.<br />
                  MSP hướng tới mục tiêu: làm hài lòng khách hàng khi sử dụng sản phẩm và dịch của công ty; đáp ứng sự mong muốn cả về vật chất và tinh thần của các thành viên công ty.
                </p>
                <p>
                  Lựa chọn lĩnh vực hoạt động tư vấn giải pháp, cung cấp sản phẩm và thi công lắp đặt các hệ thống kĩ thuật, công nghệ trong các công trình xây dựng, MSP sẽ là cầu nối đưa các giải pháp công nghệ tiên tiến, kinh tế góp phần hoàn thiện các công trình xây dựng đảm bảo tiến độ, chất lượng và hiệu quả cao nhất.
                </p>
              </div>
            </div>
            <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl bg-slate-100">
              <motion.img 
                style={{ y, scale: 1.5 }}
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070" 
                alt="Construction Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
              <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Sứ mệnh</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Cung cấp các giải pháp công nghệ và xây lắp tối ưu, giúp khách hàng tối đa hóa hiệu quả đầu tư và đảm bảo sự bền vững cho mọi công trình. Chúng tôi cam kết mang lại giá trị tốt nhất cho cộng đồng và xã hội.
              </p>
            </div>
            <div className="bg-green-600 p-12 rounded-3xl text-white shadow-xl shadow-green-200">
              <div className="w-16 h-16 bg-white text-green-600 rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Tầm nhìn</h3>
              <p className="text-green-50 leading-relaxed text-lg">
                Trở thành đơn vị hàng đầu tại Việt Nam trong lĩnh vực tư vấn giải pháp công nghệ và thi công xây lắp, được khách hàng tin tưởng lựa chọn bởi sự minh bạch, sáng tạo và chất lượng vượt trội.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-green-600 uppercase tracking-[0.3em] mb-4">Tại sao chọn MSP?</h2>
            <h3 className="text-4xl font-bold text-slate-900">Cam kết của chúng tôi</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 text-green-600">
                  <value.icon size={36} />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
