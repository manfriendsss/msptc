import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const quickLinks = [
  { to: '/gioi-thieu', label: 'Về chúng tôi' },
  { to: '/dich-vu', label: 'Sản phẩm & Dịch vụ' },
  { to: '/doi-tac', label: 'Đối tác chiến lược' },
  { to: '/tin-tuc', label: 'Tin tức & Sự kiện' },
];

const primaryServices = [
  'Tư vấn giải pháp công nghệ',
  'Thi công hệ thống điện',
  'Hệ thống thông tin liên lạc',
  'Giải pháp tòa nhà thông minh',
  'Bảo trì & Vận hành',
];

const socialLinks = [
  { href: '#', label: 'Facebook', icon: Facebook },
  { href: '#', label: 'Twitter', icon: Twitter },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 text-white">
              <img
                src="/logoMSP.png"
                alt="MSP Logo"
                className="h-12 w-auto brightness-0 invert"
              />
              <div className="flex flex-col border-l border-slate-700 pl-3">
                <span className="font-bold text-xl tracking-tight text-white uppercase">MSP</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold leading-tight">Technology & <br/>Construction</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Công ty CP Công nghệ và Xây lắp MSP - Đơn vị hàng đầu trong lĩnh vực tư vấn giải pháp, cung cấp sản phẩm và thi công lắp đặt hệ thống kỹ thuật công nghệ.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Liên kết nhanh</h3>
            <ul className="space-y-4 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-green-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Dịch vụ chính</h3>
            <ul className="space-y-4 text-sm">
              {primaryServices.map((service) => (
                <li key={service}>
                  <Link to="/dich-vu" className="hover:text-green-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
        </div>
      </div>
    </footer>
  );
}
