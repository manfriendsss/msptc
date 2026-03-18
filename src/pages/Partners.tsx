import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Shield, Cpu, Network, Zap } from 'lucide-react';

const partners = [
  { 
    name: 'Aruba', 
    logo: '/aruba .png', 
    category: 'Thiết bị mạng',
    description: 'Aruba Networks là công ty con của Hewlett Packard Enterprise, chuyên cung cấp các giải pháp mạng không dây (WLAN) và thiết bị chuyển mạch biên cho doanh nghiệp.',
    detailedInfo: `
      <p class="mb-4">Aruba dẫn đầu thị trường về giải pháp mạng không dây thông minh, tích hợp trí tuệ nhân tạo để tối ưu hóa hiệu suất và bảo mật. Các sản phẩm của Aruba giúp doanh nghiệp xây dựng hạ tầng mạng linh hoạt, sẵn sàng cho kỷ nguyên di động và IoT.</p>
      <h4 class="font-bold text-slate-900 mb-2">Sản phẩm & Dịch vụ tiêu biểu:</h4>
      <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
        <li>Aruba Access Points (Wi-Fi 6/6E)</li>
        <li>Aruba Switches (CX Series)</li>
        <li>Aruba ClearPass Policy Manager (Bảo mật truy cập)</li>
        <li>Aruba Central (Quản lý mạng trên đám mây)</li>
      </ul>
      <p>MSP là đối tác tích hợp hệ thống chính thức của Aruba tại Việt Nam, chuyên tư vấn và triển khai hạ tầng mạng không dây cho các tòa nhà văn phòng và khu công nghiệp.</p>
    `
  },
  { 
    name: 'Avigilon', 
    logo: '/avigilon.png', 
    category: 'Hệ thống Camera',
    description: 'Avigilon, một công ty của Motorola Solutions, thiết kế và sản xuất giải pháp an ninh video, kiểm soát truy cập và phân tích video hàng đầu thế giới.',
    detailedInfo: `
      <p class="mb-4">Avigilon nổi tiếng với các dòng camera độ phân giải siêu cao (lên đến 7K) và công nghệ phân tích hình ảnh dựa trên AI giúp phát hiện đối tượng và hành vi bất thường chính xác tuyệt đối.</p>
      <h4 class="font-bold text-slate-900 mb-2">Công nghệ đặc sắc:</h4>
      <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
        <li>Self-Learning Video Analytics (AI tự học)</li>
        <li>Appearance Search™ (Tìm kiếm đối tượng thông minh)</li>
        <li>High Definition Stream Management (HDSM™)</li>
        <li>Avigilon Control Center (VMS ACC 7)</li>
      </ul>
      <p>MSP hiện là nhà phân phối và triển khai các giải pháp an ninh cao cấp của Avigilon cho các dự án trọng điểm, yêu cầu tính an ninh nghiêm ngặt.</p>
    `
  },
  { 
    name: 'Cisco', 
    logo: '/cisco.png', 
    category: 'Hạ tầng mạng',
    description: 'Cisco Systems là tập đoàn đa quốc gia chuyên về công nghệ mạng, thiết bị viễn thông và giải pháp bảo mật hạ tầng số.',
    detailedInfo: `
      <p class="mb-4">Với vị thế là "ông lớn" trong ngành IT, Cisco cung cấp hệ sinh thái thiết bị mạng toàn diện từ Router, Switch đến giải pháp Cộng tác (Webex) và Bảo mật đám mây.</p>
      <h4 class="font-bold text-slate-900 mb-2">Dòng sản phẩm cốt lõi:</h4>
      <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
        <li>Cisco Catalyst Switches & Routers</li>
        <li>Cisco DNA (Hạ tầng mạng dựa trên phần mềm)</li>
        <li>Cisco Meraki (Quản lý hạ tầng qua đám mây)</li>
        <li>Giải pháp bảo mật Cisco Firepower</li>
      </ul>
      <p>MSP đồng hành cùng Cisco mang đến hạ tầng mạng vững chắc cho các tổ chức tài chính, ngân hàng và cơ quan chính phủ.</p>
    `
  },
  { 
    name: 'Hanwha', 
    logo: '/hanwha.png', 
    category: 'An ninh giám sát',
    description: 'Hanwha Vision (trước đây là Samsung Techwin) chuyên cung cấp các sản phẩm camera giám sát và giải pháp an ninh Wisenet chất lượng cao.',
    detailedInfo: `
      <p class="mb-4">Dòng sản phẩm Wisenet của Hanwha Vision được tin dùng nhờ độ bền vượt trội, hình ảnh sắc nét và tích hợp nhiều tính năng thông minh hữu ích cho quản lý đô thị và bán lẻ.</p>
      <h4 class="font-bold text-slate-900 mb-2">Sản phẩm tiêu biểu:</h4>
      <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
        <li>Wisenet X, P, Q, L Series (Camera IP)</li>
        <li>Wisenet WAVE (VMS hiện đại)</li>
        <li>Camera AI nhận diện khuôn mặt và biển số xe</li>
        <li>Giải pháp lưu trữ NVR chuyên dụng</li>
      </ul>
    `
  },
  { 
    name: 'Juniper', 
    logo: '/juniper.png', 
    category: 'Thiết bị mạng',
    description: 'Juniper Networks dẫn đầu trong việc đơn giản hóa mạng lưới thông qua các sản phẩm và giải pháp mạng dựa trên AI tiên tiến.',
    detailedInfo: `
      <p class="mb-4">Juniper nổi tiếng với hệ điều hành Junos duy nhất và giải pháp Mist AI giúp tự động hóa vận hành mạng, đảm bảo trải nghiệm người dùng tốt nhất.</p>
      <h4 class="font-bold text-slate-900 mb-2">Giải pháp chính:</h4>
      <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
        <li>Juniper Mist AI (Wi-Fi & Wired Assurance)</li>
        <li>EX Series Ethernet Switches</li>
        <li>MX Series Universal Routing Platforms</li>
        <li>SRX Series Firewalls</li>
      </ul>
    `
  },
  { 
    name: 'Motorola', 
    logo: '/motorolla.png', 
    category: 'Thông tin liên lạc',
    description: 'Motorola Solutions là nhà cung cấp toàn cầu về giải pháp truyền thông và phân tích dữ liệu quan trọng cho các tổ chức an ninh công cộng.',
    detailedInfo: `
      <p class="mb-4">Giải pháp của Motorola giúp kết nối và bảo vệ con người thông qua hệ thống vô tuyến, video giám sát và phần mềm điều hành chỉ huy.</p>
      <h4 class="font-bold text-slate-900 mb-2">Hệ sinh thái:</h4>
      <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
        <li>Máy bộ đàm MOTOTRBO Digital</li>
        <li>Hệ thống liên lạc vô tuyến dải rộng</li>
        <li>Phần mềm điều hành trung tâm chỉ huy</li>
        <li>Giải pháp video giám sát diện rộng</li>
      </ul>
    `
  },
  { 
    name: 'Nagakawa', 
    logo: '/nagakawa.png', 
    category: 'Hệ thống HVAC',
    description: 'Nagakawa là tập đoàn kinh tế đa ngành, nổi tiếng với các sản phẩm điện lạnh và điều hòa không khí công nghiệp.',
    detailedInfo: `
      <p class="mb-4">Nagakawa cung cấp các hệ thống điều hòa trung tâm VRF và cục bộ cho các công trình cao ốc, khách sạn và nhà máy sản xuất.</p>
      <p>MSP hợp tác cùng Nagakawa trong các dự án cơ điện (M&E), triển khai hệ thống thông gió và điều hòa không khí tổng thể.</p>
    `
  },
  { 
    name: 'VNPT', 
    logo: '/vnpt.jpg', 
    category: 'Viễn thông',
    description: 'Tập đoàn Bưu chính Viễn thông Việt Nam là doanh nghiệp cung cấp hạ tầng viễn thông và CNTT hàng đầu tại Việt Nam.',
    detailedInfo: `
      <p class="mb-4">VNPT cung cấp mạng lưới Internet băng rộng, dịch vụ di động Vinaphone và các giải pháp chuyển đổi số cho Chính phủ và doanh nghiệp.</p>
      <p>MSP là đối tác chiến lược của VNPT trong việc triển khai hạ tầng viễn thông cho các dự án bất động sản và khu đô thị thông minh.</p>
    `
  },
  { 
    name: 'OEC', 
    logo: '/KH-OEC.jpg', 
    category: 'Đối tác chiến lược',
    description: 'OEC Group là đối tác quan trọng trong việc triển khai các dự án khoa học công nghệ và hạ tầng thông tin.',
    detailedInfo: `<p>MSP và OEC cùng phối hợp thực hiện các dự án nghiên cứu, ứng dụng công nghệ mới vào quản lý tài nguyên và an toàn năng lượng.</p>`
  },
  { 
    name: 'Hikvision', 
    logo: '/Hikvision-Logo.png', 
    category: 'An ninh giám sát',
    description: 'Hikvision là nhà sản xuất sản phẩm an ninh video lớn nhất thế giới, cung cấp đa dạng các giải pháp giám sát thông minh.',
    detailedInfo: `
      <p class="mb-4">Hikvision cung cấp dải sản phẩm rộng khắp từ dân dụng đến chuyên dụng cao cấp cho các giải pháp an toàn đô thị.</p>
      <h4 class="font-bold text-slate-900 mb-2">Dòng sản phẩm:</h4>
      <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
        <li>Camera ColorVu (Ghi hình có màu ban đêm)</li>
        <li>Camera AcuSense (Lọc báo động giả thông minh)</li>
        <li>Hệ thống bãi xe thông minh</li>
        <li>Giải pháp kiểm soát cửa bằng nhận diện khuôn mặt</li>
      </ul>
    `
  },
  { 
    name: 'FPT', 
    logo: '/fpt.jpg', 
    category: 'Công nghệ & Viễn thông',
    description: 'Tập đoàn FPT dẫn đầu trong lĩnh vực dịch vụ CNTT, phần mềm và viễn thông tại Việt Nam và khu vực.',
    detailedInfo: `<p>MSP phối hợp cùng FPT Telecom và FPT IS trong việc tích hợp hệ thống phần mềm quản lý và truyền dẫn internet cho các đối tác khách hàng khối doanh nghiệp.</p>`
  },
  { 
    name: 'Polycom', 
    logo: '/polycom.png', 
    category: 'Hội nghị truyền hình',
    description: 'Poly (trước đây là Polycom) chuyên về các thiết bị âm thanh và video truyền hình hội nghị chất lượng cao.',
    detailedInfo: `
      <p class="mb-4">Poly cung cấp giải pháp làm việc từ xa chuyên nghiệp, giúp kết nối mọi người với chất lượng âm thanh và hình ảnh trung thực nhất.</p>
      <h4 class="font-bold text-slate-900 mb-2">Thiết bị tiêu biểu:</h4>
      <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
        <li>Poly Studio (Video Soundbar cho phòng họp)</li>
        <li>Poly RealPresence Group Series</li>
        <li>Điện thoại hội nghị SoundStation</li>
      </ul>
    `
  },
];

export default function Partners() {
  const [selectedPartner, setSelectedPartner] = useState<typeof partners[0] | null>(null);

  return (
    <div className="pb-24 font-primary">
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
            Sự tin tưởng của các đối tác công nghệ hàng đầu là minh chứng cho năng lực và uy tín của MSP trên thị trường.
          </motion.p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Hệ sinh thái đối tác</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedPartner(partner)}
                className="group cursor-pointer p-8 bg-white border border-slate-100 rounded-3xl flex flex-col items-center justify-center space-y-4 hover:shadow-2xl hover:border-green-400 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-16 w-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <div className="font-bold text-slate-900 group-hover:text-green-600 transition-colors">{partner.name}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{partner.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPartner(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPartner(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
              >
                <X size={20} />
              </button>

              {/* Header with Logo */}
              <div className="p-8 pb-4 border-b border-slate-50">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-slate-50 rounded-3xl p-4 flex items-center justify-center border border-slate-100 shadow-inner">
                    <img src={selectedPartner.logo} alt={selectedPartner.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-1">{selectedPartner.name}</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100 uppercase tracking-widest">
                      {selectedPartner.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="flex-grow p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
                <div className="space-y-8">
                  <div className="bg-green-50/50 p-6 rounded-3xl border border-green-100">
                    <h4 className="flex items-center text-green-800 font-bold mb-3">
                      <Shield className="mr-2" size={18} /> Giới thiệu chung
                    </h4>
                    <p className="text-slate-700 leading-relaxed italic">
                      {selectedPartner.description}
                    </p>
                  </div>

                  <div 
                    className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed font-primary"
                    dangerouslySetInnerHTML={{ __html: selectedPartner.detailedInfo || '' }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex space-x-4">
                  <div className="flex items-center text-xs text-slate-400 font-bold uppercase tracking-tight">
                    <Cpu size={14} className="mr-1 text-green-500" /> Công nghệ
                  </div>
                  <div className="flex items-center text-xs text-slate-400 font-bold uppercase tracking-tight">
                    <Network size={14} className="mr-1 text-green-500" /> Tích hợp
                  </div>
                  <div className="flex items-center text-xs text-slate-400 font-bold uppercase tracking-tight">
                    <Zap size={14} className="mr-1 text-green-500" /> Hiệu quả
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPartner(null)}
                  className="px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-2xl hover:bg-green-600 transition-colors shadow-lg shadow-slate-200"
                >
                  Đóng lại
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
