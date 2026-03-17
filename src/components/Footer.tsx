import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://api.studio.google.com/v1/projects/faxzkpxpghn737xqyx426s/files/input_file_0.png" 
                alt="MSP Logo" 
                className="h-10 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white">MSP</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Technology & Construction</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Công ty CP Công nghệ và Xây lắp MSP - Đơn vị hàng đầu trong lĩnh vực tư vấn giải pháp, cung cấp sản phẩm và thi công lắp đặt hệ thống kỹ thuật công nghệ.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Liên kết nhanh</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/gioi-thieu" className="hover:text-green-400 transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/cong-trinh" className="hover:text-green-400 transition-colors">Công trình tiêu biểu</Link></li>
              <li><Link to="/dich-vu" className="hover:text-green-400 transition-colors">Sản phẩm & Dịch vụ</Link></li>
              <li><Link to="/doi-tac" className="hover:text-green-400 transition-colors">Đối tác chiến lược</Link></li>
              <li><Link to="/tin-tuc" className="hover:text-green-400 transition-colors">Tin tức & Sự kiện</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Dịch vụ chính</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/dich-vu" className="hover:text-green-400 transition-colors">Tư vấn giải pháp công nghệ</Link></li>
              <li><Link to="/dich-vu" className="hover:text-green-400 transition-colors">Thi công hệ thống điện</Link></li>
              <li><Link to="/dich-vu" className="hover:text-green-400 transition-colors">Hệ thống thông tin liên lạc</Link></li>
              <li><Link to="/dich-vu" className="hover:text-green-400 transition-colors">Giải pháp tòa nhà thông minh</Link></li>
              <li><Link to="/dich-vu" className="hover:text-green-400 transition-colors">Bảo trì & Vận hành</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Thông tin liên hệ</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-green-500 shrink-0 mt-0.5" />
                <span>Số 31, ngõ 163, đường Trần Phú, P. Văn Quán, Q. Hà Đông, Hà Nội</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-green-500 shrink-0" />
                <span>+84 0243 2020 239</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-green-500 shrink-0" />
                <span>info@msptc.com.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© 2026 MSP Technology & Construction. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300">Chính sách bảo mật</a>
            <a href="#" className="hover:text-slate-300">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-slate-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
