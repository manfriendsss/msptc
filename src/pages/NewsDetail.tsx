import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const newsItems = [
  {
    id: 'smart-city-trend',
    title: 'Xu xu hướng đô thị thông minh (Smart City) tầm nhìn 2030',
    date: '18/03/2024',
    author: 'Phòng Giải pháp',
    category: 'Xu hướng',
    image: '/smart-city.png',
    excerpt: 'Khám phá các công nghệ kết nối vạn vật (IoT) và trí tuệ nhân tạo đang thay đổi bộ mặt đô thị hiện đại.',
    content: `
      <p class="mb-6 leading-relaxed">Đô thị thông minh (Smart City) không còn là khái niệm xa vời mà đang trở thành hiện thực tại Việt Nam. Sự kết hợp giữa hạ tầng viễn thông mạnh mẽ và trí tuệ nhân tạo (AI) đang tạo ra những không gian sống an toàn, tiện nghi và bền vững hơn.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Hạ tầng kết nối 5G và IoT</h3>
      <p class="mb-6 leading-relaxed">Hệ thống mạng 5G đóng vai trò là mạch máu của đô thị, cho phép hàng triệu thiết bị IoT (Internet of Things) kết nối và trao đổi dữ liệu trong thời gian thực. Điều này giúp quản lý giao thông thông minh, giảm thiểu ùn tắc và tối ưu hóa hệ thống đèn đường dựa trên lưu lượng thực tế.</p>
      
      <img src="/smart-city.png" alt="Smart City Future" class="w-full rounded-3xl shadow-xl my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Quản lý năng lượng và môi trường</h3>
      <p class="mb-6 leading-relaxed">Các tòa nhà thông minh được tích hợp hệ thống cảm biến đo lường mức độ tiêu thụ điện năng và chất lượng không khí. Dữ liệu này được AI phân tích để tự động điều chỉnh hệ thống HVAC (điều hòa không khí) và chiếu sáng, giúp tiết kiệm đến 30% năng lượng vận hành.</p>
    `,
  },
  {
    id: 'smart-home-2024',
    title: 'Nhà ở thông minh: Khi công nghệ phục vụ trải nghiệm sống',
    date: '17/03/2024',
    author: 'Ban Tư vấn',
    category: 'Giải pháp',
    image: '/smart-home.png',
    excerpt: 'Giải pháp Smart Home tích hợp điều khiển giọng nói và tự động hóa toàn diện cho không gian sống hiện đại.',
    content: `
      <p class="mb-6 leading-relaxed">Sống trong một ngôi nhà thông minh mang lại trải nghiệm tiện nghi hoàn toàn khác biệt. Từ việc điều khiển ánh sáng bằng giọng nói đến hệ thống an ninh nhận diện khuôn mặt người quen, công nghệ đang thực sự hiểu và phục vụ nhu cầu của từng gia chủ.</p>
      
      <img src="/smart-home.png" alt="Modern Smart Home Interior" class="w-full rounded-3xl shadow-xl my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Tự động hóa kịch bản sống</h3>
      <p class="mb-6 leading-relaxed">Bạn có thể thiết lập các kịch bản như "Chào buổi sáng" (rèm mở, đèn sáng dần, nhạc nhẹ nổi lên) hoặc "Rời khỏi nhà" (tất cả khóa cửa tự đóng, hệ thống an ninh kích hoạt). Mọi thứ đều được điều khiển dễ dàng qua smartphone hoặc máy tính bảng.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">An ninh thông minh đa lớp</h3>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-slate-700">
        <li>Cảm biến vỡ kính và xâm nhập vùng cấm.</li>
        <li>Hệ thống chuông cửa màn hình tích hợp đàm thoại từ xa.</li>
        <li>Khóa điện tử vân tay và nhận diện khuôn mặt AI.</li>
      </ul>
    `,
  },
  {
    id: 'ai-camera-tech',
    title: 'Công nghệ Camera AI: Tương lai của hệ thống an ninh',
    date: '16/03/2024',
    author: 'Phòng Kỹ thuật',
    category: 'Công nghệ',
    image: '/ai-camera.png',
    excerpt: 'Sự kết hợp giữa thị giác máy tính và học sâu (Deep Learning) mang lại khả năng phân tích hành vi thời gian thực.',
    content: `
      <p class="mb-6 leading-relaxed">Sự chuyển mình từ camera giám sát truyền thống sang Camera AI đã tạo ra một cuộc cách mạng trong ngành an ninh. Thay vì chỉ ghi lại sự kiện đã xảy ra, Camera AI có khả năng ngăn chặn sự cố trước khi chúng kịp bắt đầu.</p>
      
      <img src="/ai-camera.png" alt="AI Camera Interface" class="w-full rounded-3xl shadow-xl my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Nhận diện đối tượng siêu chính xác</h3>
      <p class="mb-6 leading-relaxed">Sử dụng thuật toán Deep Learning, camera có thể phân biệt chính xác con người, động vật, phương tiện và cả các vật dụng cầm tay. Điều này giúp loại bỏ hoàn toàn báo động giả do lá rơi hay thời tiết gây ra.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Phân tích hành vi thời gian thực</h3>
      <p class="mb-6 leading-relaxed">Hệ thống có thể phát hiện các hành vi bất thường như đột nhập, chạy trốn hoặc đánh nhau để gửi thông báo tức thời đến đội ngũ bảo vệ, giúp phản ứng nhanh chóng và hiệu quả.</p>
    `,
  },
  {
    id: 'ai-architecture',
    title: 'Ứng dụng AI trong thiết kế xây dựng nhà ở và văn phòng',
    date: '15/03/2024',
    author: 'Ban Thiết kế',
    category: 'Kiến thức',
    image: '/ai-design.png',
    excerpt: 'Cách trí tuệ nhân tạo tối ưu hóa quy trình thiết kế kiến trúc và quản lý hạ tầng tòa nhà chuyên nghiệp.',
    content: `
      <p class="mb-6 leading-relaxed">Trong lĩnh vực kiến trúc và xây dựng, AI đang giúp các kiến trúc sư thực hiện những ý tưởng táo bạo mà trước đây rất khó để tính toán chính xác. Công nghệ thiết kế dựa trên dữ liệu (Data-driven Design) đang trở thành tiêu chuẩn mới.</p>
      
      <img src="/ai-design.png" alt="AI in Architectural Design" class="w-full rounded-3xl shadow-xl my-10" />

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Tối ưu hóa không gian và cấu kiện</h3>
      <p class="mb-6 leading-relaxed">AI có thể mô phỏng hàng nghìn kịch bản bố trí nội thất để tìm ra phương án tối ưu nhất về ánh sáng tự nhiên và luồng gió. Đối với kết cấu, AI giúp tính toán khối lượng vật liệu chính xác, giảm thiểu lãng phí và tăng độ bền cho công trình.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Mô hình BIM thông minh</h3>
      <p class="mb-6 leading-relaxed">Sự kết hợp giữa AI và mô hình thông tin công trình (BIM) cho phép quản lý vòng đời công trình trọn vẹn, từ giai đoạn thiết kế, thi công đến vận hành bảo trì tòa nhà tự động.</p>
    `,
  },
  {
    id: 'he-thong-camera-giam-sat',
    title: 'HỆ THỐNG CAMERA GIÁM SÁT',
    date: '15/02/2022',
    author: 'Ban Dự án',
    category: 'Sơ đồ nguyên lý',
    image: '/sdnl-cctv.jpg',
    excerpt: 'Sơ đồ nguyên lý và giải pháp tích hợp hệ thống camera giám sát (CCTV) tổng thể cho công trình.',
    content: `
      <p class="mb-6 leading-relaxed">Hệ thống Camera giám sát (CCTV) hiện đại không chỉ đơn thuần là việc ghi hình, mà là một hệ thống hạ tầng an ninh phức hợp đòi hỏi tính ổn định và khả năng xử lý dữ liệu lớn. MSP tự hào mang đến giải pháp sơ đồ nguyên lý tối ưu, giúp khách hàng quản lý an ninh một cách toàn diện từ trung tâm điều hành đến từng mắt camera đầu cuối.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">1. Hạ tầng Server Điều khiển & Lưu trữ</h3>
      <p class="mb-6 leading-relaxed">Tại trung tâm của hệ thống (Control Room), các máy chủ ghi hình chuyên dụng (NVR/Server) được cấu hình chạy dự phòng (Failover) để đảm bảo dữ liệu không bị gián đoạn. Hệ thống lưu trữ mở rộng (External Storage) cho phép lưu giữ video chất lượng cao trong thời gian dài (30-90 ngày hoặc hơn) theo yêu cầu đặc thù của dự án.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">2. Hệ thống truyền dẫn đa lớp</h3>
      <p class="mb-6 leading-relaxed">Dựa trên sơ đồ nguyên lý, chúng tôi triển khai hạ tầng mạng LAN/WAN chuyên biệt cho CCTV:</p>
      <ul class="list-disc pl-6 mb-8 space-y-4 text-slate-700">
        <li><strong>Truyền tín hiệu đường trục:</strong> Sử dụng công nghệ cáp quang đơn mode (Single-mode Fiber) kết nối giữa các tòa nhà hoặc các khu vực xa (như xưởng sản xuất, bãi xe diện rộng) về trung tâm thông qua các bộ chuyển đổi Switch Layer 3.</li>
        <li><strong>Mạng phối quang & Switch POE:</strong> Tín hiệu từ camera được hội tụ tại các tủ Rack trung gian, sử dụng Switch POE (Power over Ethernet) công suất cao để vừa cấp nguồn vừa truyền dữ liệu trên cùng một sợi cáp mạng, giúp tinh giản hệ thống dây dẫn và dễ dàng bảo trì.</li>
      </ul>

      <div class="my-12 p-2 bg-slate-100 rounded-[32px] shadow-inner">
        <img src="/sdnl-cctv.jpg" alt="Sơ đồ nguyên lý CCTV chuyên sâu" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Hình 1: Sơ đồ nguyên lý kết nối hạ tầng hệ thống CCTV tổng thể do MSP thiết kế</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">3. Giải pháp hiển thị Video Wall</h3>
      <p class="mb-6 leading-relaxed">Video Wall tại phòng trực an ninh được thiết kế với các màn hình chuyên dụng 24/7, cho phép tùy biến giao diện quan sát linh hoạt theo vị trí camera hoặc theo kịch bản báo động. Phần mềm quản lý tập trung (VMS) tích hợp bản đồ điện tử (E-map) giúp nhân viên an ninh xác định chính xác vị trí sự cố ngay khi có cảnh báo xảy ra.</p>
    `,
  },
  {
    id: 'tinh-nang-camera-avigilon',
    title: 'TÍNH NĂNG CAMERA AVIGILON',
    date: '28/11/2018',
    author: 'Phòng Kỹ thuật',
    category: 'Công nghệ',
    image: '/camera-avigilon.png',
    excerpt: 'Giới thiệu các công nghệ tiên tiến trên camera Avigilon dựa trên nền tảng H4 giúp tối ưu băng thông và tăng cường khả năng giám sát.',
    content: `
      <p class="mb-6 leading-relaxed">Dòng Camera Avigilon đại diện cho phân khúc an ninh cao cấp, hội tụ những công nghệ xử lý hình ảnh và trí tuệ nhân tạo (AI) hàng đầu hiện nay. Việc ứng dụng nền tảng phần cứng H4 không chỉ cải thiện độ sắc nét mà còn thay đổi hoàn toàn cách chúng ta tương tác với hệ thống camera giám sát.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">1. Công nghệ HDSM™ (High Definition Stream Management)</h3>
      <p class="mb-6 leading-relaxed">Đây là "vũ khí bí mật" của Avigilon giúp giải quyết bài toán băng thông khi sử dụng camera độ phân giải lớn (từ 5K đến 7K). Thay vì gửi toàn bộ khung hình nặng nề, HDSM chỉ truyền tải những phần hình ảnh mà người dùng đang quan sát trên màn hình, giúp hệ thống vận hành mượt mà ngay cả trên hạ tầng mạng cơ bản.</p>

      <div class="my-10">
        <img src="/avi-1.png" alt="Công nghệ nén SmartCodec" class="w-full rounded-3xl shadow-lg border border-slate-100" />
        <p class="text-center text-sm text-slate-500 mt-4">Công nghệ quản lý băng thông thông minh HDSM™</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 my-12">
        <div class="space-y-4">
          <h4 class="font-bold text-green-700 text-lg">SmartCodec Technology</h4>
          <p class="text-slate-600 leading-relaxed text-sm">Tự động nén vùng hình ảnh không có chuyển động và giữ nguyên chất lượng vùng có đối tượng, giúp giảm dung lượng lưu trữ lên đến 50% mà không làm mất độ phân giải.</p>
        </div>
        <div class="space-y-4">
          <h4 class="font-bold text-green-700 text-lg">LightCatcher™ & WDR</h4>
          <p class="text-slate-600 leading-relaxed text-sm">Khả năng thu nhận ánh sáng vượt trội trong đêm tối, cho phép nhìn thấy màu sắc rõ ràng ở những nơi mà camera thông thường chỉ thấy một màu đen.</p>
        </div>
      </div>

      <div class="my-10">
        <img src="/avi-2.png" alt="Quản lý lưu trữ thông minh" class="w-full rounded-3xl shadow-lg border border-slate-100" />
        <p class="text-center text-sm text-slate-500 mt-4">Biểu đồ so sánh hiệu suất nén SmartCodec</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">2. Trí tuệ nhân tạo tự học (Self-Learning Analytics)</h3>
      <p class="mb-6 leading-relaxed">Điểm khác biệt lớn nhất của Avigilon là khả năng phân tích hành vi trực tiếp ngay tại "cạnh" (Edge Processing). Hệ thống có thể tự định nghĩa thế nào là con người, xe máy hay ô tô để đưa ra cảnh báo chính xác tuyệt đối:</p>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-slate-700">
        <li><strong>Appearance Search:</strong> Tìm kiếm đối tượng cụ thể dựa trên đặc điểm nhận dạng trên toàn hệ thống chỉ trong vài giây.</li>
        <li><strong>Hàng rào ảo:</strong> Cảnh báo xâm nhập vùng cấm thông minh.</li>
      </ul>

      <div class="bg-green-600 rounded-3xl p-10 text-white my-10 font-medium">
        <h3 class="text-2xl font-bold mb-4">Quản lý tập trung siêu phân giải</h3>
        <p class="opacity-90 leading-relaxed">Hệ thống quản lý video Avigilon Control Center (ACC) có khả năng hỗ trợ các dòng camera lên đến độ phân giải 7K (30MP), cho phép zoom kỹ thuật số tích hợp mà vẫn giữ được độ chi tiết hoàn hảo.</p>
      </div>
    `,
  },
  {
    id: 'demo-camera',
    title: 'DEMO CAMERA',
    date: '30/11/2018',
    author: 'Ban Truyền thông',
    category: 'Video Dự án',
    image: '/demo-camera.png',
    excerpt: 'Video demo camera Avigilon với các tính năng thông minh như tự động nhận diện người và phương tiện.',
    content: `
      <p class="mb-6 leading-relaxed">Để giúp khách hàng có cái nhìn trực quan nhất về sức mạnh của công nghệ AI trên camera Avigilon, MSP xin giới thiệu các đoạn video demo thực tế tại hiện trường. Các tính năng như nhận diện đối tượng và phân tích hành vi được thực hiện hoàn toàn tự động bởi camera.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">Nhận diện Người & Phương tiện (Self-learning)</h3>
      <div class="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl mb-10">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/BV4dWXQqALE" 
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
          src="https://www.youtube.com/embed/c856QUSIm7Q" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        ></iframe>
      </div>

      <p class="mb-6 leading-relaxed">Các giải pháp camera 360 độ giúp loại bỏ các điểm mù thường thấy, cung cấp khả năng giám sát bao quát toàn bộ khu vực bãi xe hoặc sảnh lớn chỉ với một thiết bị duy nhất.</p>
    `,
  },
  {
    id: 'schneider-electric',
    title: 'MSP ký kết hợp tác chiến lược với Schneider Electric Việt Nam',
    date: '15/03/2024',
    author: 'Ban Truyền thông',
    category: 'Sự kiện',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070',
    excerpt: 'Sự kiện đánh dấu bước tiến mới trong việc cung cấp các giải pháp quản lý năng lượng thông minh tại thị trường Việt Nam.',
    content: `
      <p class="mb-6 leading-relaxed">Sự kiện ký kết hợp tác giữa MSP và Schneider Electric Việt Nam đánh dấu một cột mốc quan trọng, mở ra hướng đi mới trong việc cung cấp các giải pháp quản lý năng lượng và tự động hóa tòa nhà thông minh.</p>
      <p class="mb-6 leading-relaxed">Theo thỏa thuận hợp tác, MSP sẽ trở thành đối tác chiến lược trong việc triển khai các dòng sản phẩm EcoStruxure của Schneider Electric, mang lại sự tối ưu hóa vận hành và tiết kiệm năng lượng bền vững cho các công trình tại Việt Nam.</p>
    `,
  },
];

export default function NewsDetail() {
  const { id } = useParams();
  const article = newsItems.find(item => item.id === id);

  if (!article) {
    return (
      <div className="py-32 text-center font-primary">
        <h2 className="text-2xl font-bold">Không tìm thấy bài viết</h2>
        <Link to="/tin-tuc" className="text-green-600 mt-4 inline-block font-bold">Quay lại Tin tức</Link>
      </div>
    );
  }

  return (
    <div className="pb-24 font-primary">
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-60 -mb-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center justify-center text-slate-400 space-x-6 text-sm">
              <div className="flex items-center font-medium"><Calendar size={16} className="mr-2 text-green-500" /> {article.date}</div>
              <div className="flex items-center font-medium"><User size={16} className="mr-2 text-green-500" /> {article.author}</div>
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
          className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] bg-slate-100"
        >
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 font-primary">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article Content */}
          <div className="flex-grow">
            <div 
              className="prose prose-slate prose-lg max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Share */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="font-bold text-slate-900">Chia sẻ bài viết:</div>
              <div className="flex space-x-3">
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 shrink-0 space-y-12">
            <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 sticky top-32">
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest border-b border-green-500 pb-2 inline-block">Tin liên quan</h4>
              <div className="space-y-8">
                {newsItems.filter(item => item.id !== id).slice(0, 3).map(item => (
                  <Link key={item.id} to={`/tin-tuc/${item.id}`} className="block group">
                    <div className="text-[10px] text-green-600 font-bold mb-2 uppercase tracking-tighter">{item.date}</div>
                    <div className="font-bold text-slate-800 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight text-sm">
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
