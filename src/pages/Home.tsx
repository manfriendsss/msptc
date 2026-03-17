import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { ArrowRight, Shield, Zap, TrendingUp, CheckCircle2, Users, Building2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { 
        duration,
        ease: [0.33, 1, 0.68, 1] // Custom easeOutExpo
      });
      return controls.stop;
    }
  }, [count, to, duration, isInView]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [rounded]);

  return <span ref={ref}>{displayValue}</span>;
}

const coreValues = [
  {
    title: 'Minh bạch',
    description: 'Lấy sự minh bạch làm nền tảng trong mọi hoạt động của Công ty, từ quản lý đến thi công.',
    icon: Shield,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Sáng tạo',
    description: 'Lấy sự sáng tạo làm nòng cốt trong công việc, luôn tìm kiếm giải pháp tối ưu nhất.',
    icon: Zap,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Phát triển',
    description: 'Lấy sự phát triển làm phương hướng hoạt động, bền vững và đồng hành cùng khách hàng.',
    icon: TrendingUp,
    color: 'bg-green-50 text-green-600',
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();
  const yearsExp = currentYear - 2020;
  const projects = 300 + (currentYear - 2024) * 50;
  const customers = 200 + (currentYear - 2024) * 20;
  const partners = 20 + (currentYear - 2024) * 2;

  const stats = [
    { label: 'Năm kinh nghiệm', value: yearsExp, icon: Award, suffix: '+' },
    { label: 'Dự án hoàn thành', value: projects, icon: Building2, suffix: '+' },
    { label: 'Khách hàng tin tưởng', value: customers, icon: Users, suffix: '+' },
    { label: 'Đối tác chiến lược', value: partners, icon: CheckCircle2, suffix: '+' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-green-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-transparent to-green-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center flex flex-col items-center"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-bold uppercase tracking-widest mb-8">
              MSP TECHNOLOGY & CONSTRUCTION
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-12 tracking-tight">
              Minh bạch <br />
              <span className="text-green-400">Sáng tạo</span> <br />
              Phát triển
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/cong-trinh" 
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center transition-all shadow-2xl hover:shadow-green-500/40 hover:-translate-y-1"
              >
                Xem dự án tiêu biểu <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/gioi-thieu" 
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-bold flex items-center justify-center transition-all hover:-translate-y-1"
              >
                Về chúng tôi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-24 max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center space-y-4 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-green-50 text-green-600 mb-2 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
                <stat.icon size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                <CountUp to={stat.value} />{stat.suffix}
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] leading-relaxed px-4">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-green-600 uppercase tracking-[0.3em] mb-4">Giá trị cốt lõi</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Nền tảng vững chắc cho mọi thành công</h3>
            <p className="text-slate-600 leading-relaxed">
              Tại MSP, chúng tôi tin rằng sự kết hợp giữa tính minh bạch, tinh thần sáng tạo và định hướng phát triển bền vững là chìa khóa để mang lại giá trị thực sự cho khách hàng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-xl group"
              >
                <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-8 transition-transform group-hover:scale-110`}>
                  <value.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070" 
                  alt="Construction Site" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-green-600 text-white p-8 rounded-3xl shadow-2xl hidden md:block max-w-xs">
                <p className="text-lg font-medium italic">
                  "MSP là cầu nối đưa các giải pháp công nghệ tiên tiến, kinh tế góp phần hoàn thiện các công trình."
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-xs font-bold text-green-600 uppercase tracking-[0.3em]">Về chúng tôi</h2>
              <h3 className="text-4xl font-bold text-slate-900 leading-tight">
                Đội ngũ chuyên gia dày dặn kinh nghiệm và tâm huyết
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Công ty CP công nghệ và xây lắp MSP được thành lập bởi các thành viên có bề dày kinh nghiệm trong chuyên môn và quản lý. Với niềm đam mê và sáng tạo cùng sự tin tưởng, hợp tác của các đối tác và khách hàng, chúng tôi mong muốn xây dựng lên một tổ chức hoạt động có quy trình đồng bộ và hiệu quả.
              </p>
              <ul className="space-y-4">
                {[
                  'Tư vấn giải pháp công nghệ tối ưu',
                  'Cung cấp sản phẩm chất lượng cao',
                  'Thi công lắp đặt chuyên nghiệp',
                  'Đảm bảo tiến độ và an toàn lao động'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/gioi-thieu" 
                className="inline-flex items-center text-green-600 font-bold hover:text-green-700 transition-colors group"
              >
                Tìm hiểu thêm về MSP <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Sẵn sàng cho dự án tiếp theo của bạn?
          </h2>
          <p className="text-green-100 text-lg mb-12 leading-relaxed">
            Hãy để MSP đồng hành cùng bạn trong việc kiến tạo những công trình bền vững và hiện đại với các giải pháp công nghệ hàng đầu.
          </p>
          <Link 
            to="/lien-he" 
            className="bg-white text-green-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            Liên hệ với chúng tôi ngay
          </Link>
        </div>
      </section>
    </div>
  );
}
