import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
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
            Liên hệ với chúng tôi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-green-100 max-w-3xl mx-auto"
          >
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ giải pháp cho dự án của bạn.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Thông tin liên hệ</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">Địa chỉ trụ sở</div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Số 31, ngõ 163, đường Trần Phú, P. Văn Quán, Q. Hà Đông, TP. Hà Nội.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">Văn phòng đại diện TP.HCM</div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Số 1166/52 Quốc Lộ 1A, Phường Tân Tạo A, Quận Bình Tân, TP.HCM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">Điện thoại</div>
                      <p className="text-slate-600 text-sm">+84 0243 2020 239</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">Email</div>
                      <p className="text-slate-600 text-sm">info@msptc.com.vn</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">Giờ làm việc</div>
                      <p className="text-slate-600 text-sm">Thứ 2 - Thứ 7: 08:00 - 17:30</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-6">Theo dõi chúng tôi</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-all">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Gửi tin nhắn cho chúng tôi</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Họ và tên *</label>
                    <input 
                      type="text" 
                      placeholder="Nguyễn Văn A"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Số điện thoại *</label>
                    <input 
                      type="tel" 
                      placeholder="0901 234 567"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email *</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Chủ đề</label>
                    <select className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white appearance-none">
                      <option>Tư vấn giải pháp công nghệ</option>
                      <option>Yêu cầu báo giá thi công</option>
                      <option>Hợp tác đối tác</option>
                      <option>Tuyển dụng</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Nội dung tin nhắn *</label>
                    <textarea 
                      rows={5}
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white resize-none"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit"
                      className="w-full md:w-fit bg-green-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-500/20 flex items-center justify-center group"
                    >
                      Gửi tin nhắn <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-slate-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin size={48} className="text-green-600 mx-auto" />
            <p className="text-slate-500 font-medium">Bản đồ Google Maps sẽ được tích hợp tại đây</p>
          </div>
        </div>
        {/* In a real app, you'd embed an iframe here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.195748362061!2d105.78193!3d20.98476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad99%3A0xefc4512d41b09ad5!2zMzEgTmfDtSAxNjMgVHLhuqduIFBow7osIFbEg24gUXXDoW4sIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1710670000000!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-80 contrast-125"
        ></iframe>
      </section>
    </div>
  );
}
