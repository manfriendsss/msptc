import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const newsItems = [
  {
    id: 'he-thong-camera-giam-sat',
    title: 'HỆ THỐNG CAMERA GIÁM SÁT',
    date: '15/02/2022',
    author: 'Ban Dự án',
    category: 'Sơ đồ nguyên lý',
    image: '/sdnl-cctv.jpg',
    excerpt: 'Sơ đồ nguyên lý và giải pháp tích hợp hệ thống camera giám sát (CCTV) tổng thể cho công trình.',
    content: `
      <p class="mb-6 leading-relaxed">Hệ thống Camera giám sát (CCTV) là một phần không thể thiếu trong hạ tầng an ninh của các công trình hiện đại, từ tòa nhà văn phòng đến các nhà máy công nghiệp. Một hệ thống CCTV chuyên nghiệp yêu cầu sự phối hợp chặt chẽ giữa thiết bị ghi hình, hạ tầng truyền dẫn và phần mềm quản lý tập trung.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Sơ đồ hạ tầng kỹ thuật</h3>
      <p class="mb-6 leading-relaxed">Hạ tầng của hệ thống được thiết kế theo cấu trúc phân tầng để đảm bảo tính ổn định và khả năng mở rộng trong tương lai:</p>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-slate-700">
        <li><strong>Phòng Server trung tâm:</strong> Nơi đặt các thiết bị lưu trữ (NVR/Storage), máy chủ cài đặt phần mềm quản lý video (VMS) và hệ thống màn hình hiển thị tập trung (Video Wall).</li>
        <li><strong>Hệ thống truyền dẫn:</strong> Sử dụng kết hợp giữa cáp quang (Fiber Optic) cho các nhánh kết nối xa và cáp mạng CAT6/CAT6A cho các kết nối cục bộ, đảm bảo băng thông rộng cho video độ phân giải cao.</li>
        <li><strong>Thiết bị đầu cuối:</strong> Các dòng camera IP chuyên dụng (Fixed, PTZ, Panoramic) được lắp đặt tại các vị trí chiến lược như bãi xe, sảnh chính, khu vực sản xuất và tường rào.</li>
      </ul>

      <img src="/sdnl-cctv.jpg" alt="Sơ đồ nguyên lý CCTV" class="w-full rounded-3xl shadow-xl my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Tính ưu việt của giải pháp MSP</h3>
      <p class="mb-6 leading-relaxed">Giải pháp mà MSP cung cấp không chỉ dừng lại ở việc quan sát mà còn tích hợp các công nghệ thông minh:</p>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-slate-700">
        <li>Tích hợp hệ thống quản lý vào ra (Access Control).</li>
        <li>Cảnh báo xâm nhập ảo và hàng rào điện tử.</li>
        <li>Tìm kiếm thông minh dựa trên thuộc tính đối tượng.</li>
      </ul>
    `,
  },
  {
    id: 'tinh-nang-camera-avigilon',
    title: 'TÍNH NĂNG CAMERA AVIGILON',
    date: '28/11/2018',
    author: 'Phòng Kỹ thuật',
    category: 'Công nghệ',
    image: '/camera-avigilon.jpg',
    excerpt: 'Giới thiệu các công nghệ tiên tiến trên camera Avigilon dựa trên nền tảng H4 giúp tối ưu băng thông và tăng cường khả năng giám sát.',
    content: `
      <p class="mb-6 leading-relaxed">Camera Avigilon nổi tiếng thế giới với những đột phá về công nghệ nén và phân tích hình ảnh. Dòng sản phẩm dựa trên nền tảng H4 mang lại hiệu suất vượt trội, giúp hệ thống an ninh trở nên thông minh và hiệu quả hơn bao giờ hết.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Các công nghệ lõi nổi bật</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h4 class="font-bold text-green-600 mb-3 text-lg">HDSM & SmartCodec</h4>
          <p class="text-sm text-slate-600">Quản lý băng thông thông minh, chỉ gửi phần hình ảnh cần thiết đến máy xem, giúp giảm tải hệ thống mạng và lưu trữ lên đến 50%.</p>
        </div>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h4 class="font-bold text-green-600 mb-3 text-lg">Self-Learning Analytics</h4>
          <p class="text-sm text-slate-600">Công nghệ trí tuệ nhân tạo tự học, có khả năng phân biệt chính xác con người và phương tiện, giảm thiểu báo động giả.</p>
        </div>
      </div>

      <p class="mb-6 leading-relaxed">Ngoài ra, camera Avigilon còn được trang bị công nghệ <strong>LightCatcher</strong> cho phép thu được hình ảnh màu sắc rõ nét trong điều kiện ánh sáng cực yếu, cùng với dải động rộng (WDR) lên đến 120dB để xử lý tốt các tình huống ngược sáng mạnh.</p>

      <div class="bg-green-600 rounded-3xl p-10 text-white my-10">
        <h3 class="text-2xl font-bold mb-4">Quản lý tập trung siêu phân giải</h3>
        <p class="opacity-90 leading-relaxed">Hệ thống quản lý video Avigilon Control Center (ACC) có khả năng hỗ trợ các dòng camera lên đến độ phân giải 7K (30MP), cho phép zoom kỹ thuật số cực sâu mà vẫn giữ được độ chi tiết hoàn hảo.</p>
      </div>
    `,
  },
  {
    id: 'demo-camera',
    title: 'DEMO CAMERA',
    date: '30/11/2018',
    author: 'Ban Truyền thông',
    category: 'Video Dự án',
    image: '/demo-camera.jpg',
    excerpt: 'Video demo camera Avigilon với các tính năng thông minh như tự động nhận diện người và phương tiện.',
    content: `
      <p class="mb-6 leading-relaxed">Để giúp khách hàng có cái nhìn trực quan nhất về sức mạnh của công nghệ AI trên camera Avigilon, MSP xin giới thiệu các đoạn video demo thực tế tại hiện trường. Các tính năng như nhận diện đối tượng và phân tích hành vi được thực hiện hoàn toàn tự động bởi camera.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Nhận diện Người & Phương tiện (Self-learning)</h3>
      <div class="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl mb-10">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/R6wR-2UOn1k" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        ></iframe>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Góc nhìn toàn cảnh 360 độ (Fisheye)</h3>
      <div class="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl mb-10">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/7u8sIsznt_k" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        ></iframe>
      </div>

      <p class="mb-6 leading-relaxed">Các giải pháp camera 360 độ giúp loại bỏ các điểm mù thường thấy, cung cấp khả năng giám sát bao quát toàn bộ khu vực bãi xe hoặc sảnh lớn chỉ với một thiết bị duy nhất.</p>
    `,
  },
];

export default function NewsDetail() {
  const { id } = useParams();
  const article = newsItems.find(item => item.id === id);

  if (!article) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold">Không tìm thấy bài viết</h2>
        <Link to="/tin-tuc" className="text-green-600 mt-4 inline-block">Quay lại Tin tức</Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-60 -mb-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/tin-tuc" 
            className="inline-flex items-center text-green-400 text-sm font-bold mb-8 hover:text-green-300 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> QUAY LẠI TIN TỨC
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block px-3 py-1 bg-green-600/20 text-green-400 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
              {article.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center justify-center text-slate-400 space-x-6 text-sm">
              <div className="flex items-center"><Calendar size={16} className="mr-2" /> {article.date}</div>
              <div className="flex items-center"><User size={16} className="mr-2" /> {article.author}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-5xl mx-auto px-4 relative z-10 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px]"
        >
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article Content */}
          <div className="flex-grow">
            <div 
              className="prose prose-slate prose-lg max-w-none text-slate-600"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Share */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="font-bold text-slate-900">Chia sẻ bài viết:</div>
              <div className="flex space-x-3">
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-all">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-all">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-all">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-all">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 shrink-0 space-y-12">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Tin mới nhất</h4>
              <div className="space-y-6">
                {newsItems.filter(item => item.id !== id).map(item => (
                  <Link key={item.id} to={`/tin-tuc/${item.id}`} className="block group">
                    <div className="text-xs text-green-600 font-bold mb-2">{item.date}</div>
                    <div className="font-bold text-slate-900 group-hover:text-green-600 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
