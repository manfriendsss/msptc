export const newsItems = [
  {
    id: 'he-thong-camera-giam-sat',
    title: 'HỆ THỐNG CAMERA GIÁM SÁT',
    date: '15/02/2022',
    author: 'Ban Dự án',
    category: 'Sơ đồ nguyên lý',
    image: '/ai-street-camera.png',
    excerpt: 'Sơ đồ nguyên lý và giải pháp tích hợp hệ thống camera giám sát (CCTV) tổng thể cho công trình.',
    content: `
      <p class="mb-6 leading-relaxed">Hệ thống Camera giám sát (CCTV) hiện đại không chỉ đơn thuần là việc ghi hình, mà là một hệ thống hạ tầng an ninh phức hợp đòi hỏi tính ổn định và khả năng xử lý dữ liệu lớn. MSP tự hào mang đến giải pháp sơ đồ nguyên lý tối ưu, giúp khách hàng quản lý an ninh một cách toàn diện từ trung tâm điều hành đến từng mắt camera đầu cuối.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">1. Hạ tầng Server Điều khiển & Lưu trữ</h3>
      <p class="mb-6 leading-relaxed">Tại trung tâm của hệ thống (Control Room), các máy chủ ghi hình chuyên dụng (NVR/Server) được cấu hình chạy dự phòng (Failover) để đảm bảo dữ liệu không bị gián đoạn. Hệ thống lưu trữ mở rộng (External Storage) cho phép lưu giữ video chất lượng cao trong thời gian dài (30-90 ngày hoặc hơn) theo yêu cầu đặc thù của dự án.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">2. Hệ thống truyền dẫn đa lớp</h3>
      <p class="mb-6 leading-relaxed">Dựa trên sơ đồ nguyên lý, chúng tôi triển khai hạ tầng mạng LAN/WAN chuyên biệt cho CCTV:</p>
      <ul class="list-disc pl-6 mb-8 space-y-4 text-slate-700">
        <li><strong>Truyền tín hiệu đường trục:</strong> Sử dụng công nghệ cáp quang đơn mode (Single-mode Fiber) kết nối giữa các tòa nhà hoặc các khu vực xa (như xưởng sản xuất, bãi xe diện rộng) về trung tâm thông qua các bộ chuyển đổi Switch Layer 3.</li>
        <li><strong>Mạng phối quang & Switch POE:</strong> Tín hiệu từ camera được hội tụ tại các tủ Rack trung gian, sử dụng Switch POE (Power over Ethernet) công suất cao để vừa cấp nguồn vừa truyền dữ liệu trên cùng một sợi cáp mạng, giúp tinh giản hệ thống dây dẫn và dễ dàng bảo trì.</li>
      </ul>

      <div class="my-12 p-2 bg-slate-100 rounded-[32px] shadow-inner">
        <img src="/sdnl-cctv.jpg" alt="Sơ đồ nguyên lý CCTV chuyên sâu" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Hình 1: Sơ đồ nguyên lý kết nối hạ tầng hệ thống CCTV tổng thể do MSP thiết kế</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">3. Giải pháp hiển thị Video Wall</h3>
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
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">1. Công nghệ HDSM™ (High Definition Stream Management)</h3>
      <p class="mb-6 leading-relaxed">Đây là "vũ khí bí mật" của Avigilon giúp giải quyết bài toán băng thông khi sử dụng camera độ phân giải lớn (từ 5K đến 7K). Thay vì gửi toàn bộ khung hình nặng nề, HDSM chỉ truyền tải những phần hình ảnh mà người dùng đang quan sát trên màn hình, giúp hệ thống vận hành mượt mà ngay cả trên hạ tầng mạng cơ bản.</p>

      <div class="my-10">
        <img src="/avi-1.png" alt="Công nghệ nén SmartCodec" class="w-full rounded-3xl shadow-lg border border-slate-100" />
        <p class="text-center text-sm text-slate-500 mt-4">Công nghệ quản lý băng thông thông minh HDSM™</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 my-12">
        <div class="space-y-4 p-6 bg-slate-50 rounded-3xl">
          <h4 class="font-bold text-green-700 text-lg">SmartCodec Technology</h4>
          <p class="text-slate-600 leading-relaxed text-sm">Tự động nén vùng hình ảnh không có chuyển động và giữ nguyên chất lượng vùng có đối tượng, giúp giảm dung lượng lưu trữ lên đến 50% mà không làm mất độ phân giải.</p>
        </div>
        <div class="space-y-4 p-6 bg-slate-50 rounded-3xl">
          <h4 class="font-bold text-green-700 text-lg">LightCatcher™ & WDR</h4>
          <p class="text-slate-600 leading-relaxed text-sm">Khả năng thu nhận ánh sáng vượt trội trong đêm tối, cho phép nhìn thấy màu sắc rõ ràng ở những nơi mà camera thông thường chỉ thấy một màu đen.</p>
        </div>
      </div>

      <div class="my-10">
        <img src="/avi-2.png" alt="Quản lý lưu trữ thông minh" class="w-full rounded-3xl shadow-lg border border-slate-100" />
        <p class="text-center text-sm text-slate-500 mt-4">Biểu đồ so sánh hiệu suất nén SmartCodec</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">2. Trí tuệ nhân tạo tự học (Self-Learning Analytics)</h3>
      <p class="mb-6 leading-relaxed">Điểm khác biệt lớn nhất của Avigilon là khả năng phân tích hành vi trực tiếp ngay tại "cạnh" (Edge Processing). Hệ thống có thể tự định nghĩa thế nào là con người, xe máy hay ô tô để đưa ra cảnh báo chính xác tuyệt đối:</p>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-slate-700">
        <li><strong>Appearance Search:</strong> Tìm kiếm đối tượng cụ thể dựa trên đặc điểm nhận dạng trên toàn hệ thống chỉ trong vài giây.</li>
        <li><strong>Hàng rào ảo:</strong> Cảnh báo xâm nhập vùng cấm thông minh.</li>
      </ul>

      <div class="bg-green-600 rounded-3xl p-10 text-white my-10 font-medium">
        <h3 class="text-2xl font-bold mb-4 font-primary">Quản lý tập trung siêu phân giải</h3>
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
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Nhận diện Người & Phương tiện (Self-learning)</h3>
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

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Góc nhìn toàn cảnh 360 độ (Fisheye)</h3>
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
    id: 'data-center-tech',
    title: 'Hạ tầng Data Center: Trái tim của kỷ nguyên chuyển đổi số',
    date: '19/03/2024',
    author: 'Phòng Hạ tầng',
    category: 'Hạ tầng',
    image: '/data-center-tech.png',
    excerpt: 'Tìm hiểu về tiêu chuẩn Tier III, hệ thống làm mát DCIM và giải pháp hạ tầng máy chủ cho doanh nghiệp lớn.',
    content: `
      <p class="mb-6 leading-relaxed">Trong thời đại kinh tế số, Data Center (TTDL) đóng vai trò là "bộ não" lưu trữ và xử lý dữ liệu khổng lồ của doanh nghiệp. Việc xây dựng một hạ tầng TTDL đạt chuẩn quốc tế đòi hỏi sự kết hợp khắt khe giữa kỹ thuật điện lực, nhiệt lạnh và viễn thông.</p>
      
      <div class="my-10">
        <img src="/data-center-tech.png" alt="Modern Data Center" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Trung tâm dữ liệu hiện đại với kiến trúc hạ tầng đồng bộ</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Tiêu chuẩn Tier III & Khả năng sẵn sàng 99.98%</h3>
      <p class="mb-6 leading-relaxed">Một Data Center đạt chuẩn Tier III (Uptime Institute) phải đảm bảo hệ thống bảo trì không gây gián đoạn dịch vụ. Điều này yêu cầu hạ tầng nguồn điện N+1, hệ thống máy phát điện dự phòng và đường truyền băng rộng đa hướng.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Hệ thống DCIM & Hiệu quả năng lượng PUE</h3>
      <p class="mb-6 leading-relaxed">Quản lý cơ sở hạ tầng trung tâm dữ liệu (DCIM) giúp giám sát thời gian thực từ mức tiêu thụ điện của từng cabinet đến độ ẩm môi trường. Việc tối ưu hóa chỉ số PUE (Power Usage Effectiveness) xuống mức dưới 1.5 là mục tiêu hàng đầu của các Data Center "xanh" hiện nay, giúp tiết kiệm chi phí vận hành và bảo vệ môi trường.</p>

      <div class="bg-slate-900 rounded-3xl p-10 text-white my-10 border-l-4 border-green-500">
        <h4 class="text-xl font-bold mb-4 font-primary text-green-400">Các thành phần cốt lõi:</h4>
        <ul class="list-disc pl-5 space-y-3 opacity-90">
          <li>Thiết bị chuyển mạch Switch Layer 3 tốc độ cao (100Gbps+).</li>
          <li>Hệ thống chữa cháy khí sạch (FM200/Novec 1230).</li>
          <li>Hệ thống làm mát chính xác (Precision Cooling).</li>
        </ul>
      </div>
    `,
  },
  {
    id: 'body-camera',
    title: 'Body Camera: Giám sát an ninh di động chuyên nghiệp',
    date: '18/03/2024',
    author: 'Phòng Giải pháp',
    category: 'Sản phẩm',
    image: '/body-camera.png',
    excerpt: 'Giải pháp camera đeo người cho lực lượng an ninh, bảo vệ với khả năng truyền phát trực tiếp và ghi hình 4K.',
    content: `
      <p class="mb-6 leading-relaxed">Body Camera (Camera đeo người) đang trở thành trang bị không thể thiếu cho các lực lượng an ninh, CSGT và nhân viên giám sát hiện trường. Thiết bị này đảm bảo tính minh bạch, hỗ trợ thu thập bằng chứng thực tế và bảo vệ an toàn cho người thực thi nhiệm vụ.</p>
      
      <div class="my-10">
        <img src="/body-camera.png" alt="High-tech Body Camera" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Thiết bị Body Camera chuyên dụng tích hợp công nghệ AI</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Ghi hình 4K và Truyền phát Live Stream</h3>
      <p class="mb-6 leading-relaxed">Các dòng Body Camera hiện nay hỗ trợ độ phân giải 4K cực kỳ sắc nét ngay cả trong điều kiện thiếu sáng. Đặc biệt, tính năng truyền phát trực tiếp qua mạng 4G/5G/Wi-Fi cho phép trung tâm chỉ huy quan sát hiện trường thời gian thực, đưa ra chỉ đạo kịp thời cho các tình huống khẩn cấp.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Bền bỉ trong mọi môi trường</h3>
      <p class="mb-6 leading-relaxed">Thiết kế đạt chuẩn quân đội (MIL-STD-810G) và chống nước IP67 giúp Body Camera vận hành ổn định dưới trời mưa, khói bụi hay các va đập mạnh. Thời lượng pin lên đến 12 giờ liên tục đảm bảo bao phủ trọn vẹn ca làm việc dài của nhân viên.</p>

      <div class="bg-green-50 p-8 rounded-3xl border border-green-100 my-10">
        <h4 class="text-lg font-bold text-green-900 mb-4 font-primary">Ưu điểm nổi bật:</h4>
        <ul class="space-y-3 text-green-800">
          <li class="flex items-start"><span class="mr-2 mt-1 font-bold">✓</span> Tích hợp GPS xác định vị trí nhân viên trên bản đồ E-map.</li>
          <li class="flex items-start"><span class="mr-2 mt-1 font-bold">✓</span> Công nghệ nén H.265 tiết kiệm 50% dung lượng lưu trữ.</li>
          <li class="flex items-start"><span class="mr-2 mt-1 font-bold">✓</span> Nút bấm báo động khẩn cấp (Panic Button) gửi tín hiệu về trung tâm.</li>
        </ul>
      </div>
    `,
  },
  {
    id: 'access-control',
    title: 'Kiểm soát vào ra: An toàn tuyệt đối bằng nhận diện khuôn mặt',
    date: '17/03/2024',
    author: 'Ban Tư vấn',
    category: 'Giải pháp',
    image: '/access-control.png',
    excerpt: 'Giải pháp quản lý Access Control hiện đại sử dụng công nghệ sinh trắc học và thẻ thông minh cho tòa nhà.',
    content: `
      <p class="mb-6 leading-relaxed">Hệ thống Kiểm soát vào ra (Access Control) là chốt chặn an ninh quan trọng nhất của mọi công trình. Việc chuyển dịch từ thẻ từ sang công nghệ nhận diện khuôn mặt (FaceID) không chỉ tăng cường bảo mật mà còn mang lại trải nghiệm ra vào rảnh tay (Hands-free) hiện đại.</p>
      
      <div class="my-10">
        <img src="/access-control.png" alt="Facial Recognition Access Control" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Giao diện nhận diện khuôn mặt AI tại sảnh tòa nhà văn phòng</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Công nghệ AI Chống giả mạo (Anti-Spoofing)</h3>
      <p class="mb-6 leading-relaxed">Một trong những lo ngại lớn nhất của FaceID là việc sử dụng ảnh chụp hoặc video để đánh lừa hệ thống. Giải pháp của chúng tôi tích hợp cảm biến 3D và AI phát hiện sự sống (Liveness Detection), đảm bảo chỉ người thực mới có thể đi qua, loại bỏ hoàn toàn rủi ro giả mạo bằng hình ảnh.</p>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Tích hợp đa nền tảng</h3>
      <p class="mb-6 leading-relaxed">Hệ thống kiểm soát ra vào có thể kết nối đồng bộ với hệ thống chấm công, quản lý thang máy và báo cháy tòa nhà. Khi có sự cố cháy, toàn bộ các cửa sẽ tự động mở để đảm bảo lối thoát nạn an toàn cho cư dân và nhân viên.</p>
    `,
  },
  {
    id: 'elv-solutions',
    title: 'Hệ thống ELV: Tích hợp hạ tầng thông minh cho công trình',
    date: '16/03/2024',
    author: 'Phòng Kỹ thuật',
    category: 'Cốt lõi',
    image: '/elv-solutions.png',
    excerpt: 'Giải pháp điện nhẹ tích hợp giúp quản lý tòa nhà và nhà máy một cách đồng bộ, an toàn và hiệu quả hơn.',
    content: `
      <p class="mb-6 leading-relaxed">Hệ thống ELV (Extra Low Voltage - Điện nhẹ) đóng vai trò là "hệ thần kinh" cho các tòa nhà và nhà máy hiện đại. Việc tích hợp các hệ thống đơn lẻ vào một nền tảng duy nhất giúp tối ưu hóa công tác quản lý và vận hành công trình.</p>
      
      <div class="my-10">
        <img src="/elv-solutions.png" alt="Integrated ELV Systems" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Trung tâm điều hành tích hợp toàn bộ hệ thống ELV của tòa nhà</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Hệ sinh thái hạ tầng ELV toàn diện</h3>
      <p class="mb-6 leading-relaxed">Hệ thống ELV bao quát nhiều lĩnh vực quan trọng như camera giám sát, âm thanh thông báo (PA), tổng đài điện thoại, mạng nội bộ và hệ thống quản lý tòa nhà trung tâm (BMS).</p>
      <ul class="list-disc pl-6 mb-8 space-y-4 text-slate-700">
        <li><strong>Truyền tín hiệu:</strong> Hạ tầng cáp mạng đồng và cáp quang tốc độ cao.</li>
        <li><strong>An ninh tích hợp:</strong> Kết nối liên thông giữa CCTV, Access Control và báo cháy.</li>
        <li><strong>Giải pháp thông minh:</strong> Tích hợp cảm biến môi trường và điều khiển chiếu sáng tự động.</li>
      </ul>

      <p class="mb-6 leading-relaxed">Với năng lực của MSP, chúng tôi cung cấp giải pháp ELV trọn gói từ tư vấn thiết kế, cung cấp thiết bị đến thi công lắp đặt và bảo trì định kỳ, đảm bảo hệ thống luôn hoạt động bền bỉ 24/7.</p>
    `,
  },
  {
    id: 'smart-city-trend',
    title: 'Xu hướng đô thị thông minh (Smart City) tầm nhìn 2030',
    date: '18/03/2024',
    author: 'Phòng Giải pháp',
    category: 'Xu hướng',
    image: '/smart-city.png',
    excerpt: 'Khám phá các công nghệ kết nối vạn vật (IoT) và trí tuệ nhân tạo đang thay đổi bộ mặt đô thị hiện đại.',
    content: `
      <p class="mb-6 leading-relaxed font-medium text-slate-900">Đến năm 2030, hơn 60% dân số thế giới sẽ sống trong các đô thị. Bài mẫu đặt ra là làm thế nào để quản lý cơ sở hạ tầng, giao thông và an ninh một cách hiệu quả nhất? Câu trả lời chính là Đô thị thông minh (Smart City).</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Hạ tầng kết nối 5G và IoT</h3>
      <p class="mb-6 leading-relaxed">Hệ thống mạng 5G đóng vai trò là mạch máu của đô thị, cho phép hàng triệu thiết bị IoT (Internet of Things) kết nối và trao đổi dữ liệu trong thời gian thực với độ trễ gần như bằng không. Điều này giúp quản lý giao thông thông minh thông qua hệ thống đèn tín hiệu tự động điều chỉnh theo mật độ xe cộ, giúp giảm 25% thời gian di chuyển trong giờ cao điểm.</p>
      
      <div class="my-10">
        <img src="/smart-city.png" alt="Smart City Future" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Hệ thống cảm biến kết nối vạn vật trong lõi đô thị hiện đại</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Trung tâm điều hành thông minh (IOC)</h3>
      <p class="mb-6 leading-relaxed">Trái tim của một đô thị thông minh là Trung tâm điều hành thông minh (IOC). Tại đây, AI sẽ tổng hợp dữ liệu từ camera an ninh, cảm biến môi trường và hệ thống hạ tầng để đưa ra các dự báo chính xác về ô nhiễm không khí hoặc rủi ro ngập lụt. Khả năng phản ứng nhanh với các tình huống khẩn cấp được tăng cường gấp 3 lần nhờ quy trình tự động hóa.</p>

      <div class="my-10">
        <img src="/smart-city-2.png" alt="Smart City Data Center" class="w-full rounded-3xl shadow-xl border border-slate-100" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Cơ sở dữ liệu tập trung phục vụ quản lý đô thị thời gian thực</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Quản lý năng lượng và tòa nhà xanh</h3>
      <p class="mb-6 leading-relaxed">Các tòa nhà thông minh được tích hợp hệ thống cảm biến đo lường mức độ tiêu thụ điện năng và chất lượng không khí. Dữ liệu này được AI phân tích để tự động điều chỉnh hệ thống HVAC (điều hòa không khí) và chiếu sáng, giúp tiết kiệm đến 30% năng lượng vận hành và giảm lượng khí thải carbon đáng kể.</p>
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
      <p class="mb-6 leading-relaxed font-medium text-slate-900">Căn nhà thông minh giờ đây không chỉ dừng lại ở việc tắt mở đèn qua điện thoại, mà là một hệ sinh thái thấu hiểu thói quen và cảm xúc của gia chủ thông qua trí tuệ nhân tạo.</p>
      
      <div class="my-10">
        <img src="/smart-home.png" alt="Modern Smart Home Interior" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Không gian sống hiện đại với sự tích hợp công nghệ tinh tế</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Tự động hóa kịch bản sống thông minh</h3>
      <p class="mb-6 leading-relaxed">Hệ thống Smart Home tự học hành vi của người dùng. Ví dụ, căn nhà sẽ biết khi nào bạn thức dậy để mở rèm, pha cà phê và điều chỉnh nhiệt độ phòng tắm. Mọi thiết bị từ tivi, điều hòa đến máy lọc không khí đều được kết nối đồng bộ và vận hành theo các kịch bản tùy biến cá nhân hóa tuyệt đối.</p>
      
      <div class="my-10">
        <img src="/smart-home-2.png" alt="Smart Home Kitchen Automation" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Giải pháp bếp thông minh tích hợp điều khiển chạm và giọng nói</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">An ninh thông minh đa lớp với AI</h3>
      <p class="mb-6 leading-relaxed">Hệ thống an ninh Smart Home thế hệ mới tích hợp camera AI nhận diện khuôn mặt người lạ ngay lập tức. Khả năng cảnh báo sớm các nguy cơ cháy nổ, rò rỉ nước hay khí gas thông qua smartphone giúp bạn hoàn toàn an tâm dù có đang ở bất kỳ nơi đâu trên thế giới.</p>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-slate-700">
        <li>Cảm biến vỡ kính và xâm nhập vùng cấm thông qua AI.</li>
        <li>Hệ thống chuông cửa màn hình tích hợp AI nhận diện người giao hàng.</li>
        <li>Khóa điện tử vân tay đa điểm kết hợp mật mã ảo bảo mật cao.</li>
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
      <p class="mb-6 leading-relaxed font-medium text-slate-900">Kỷ nguyên của camera ghi hình thuần túy đã kết thúc. Giờ đây, camera an ninh đóng vai trò như một bộ não phân tích dữ liệu hình ảnh, có khả năng suy luận và đưa ra quyết định hành động trong tích tắc.</p>
      
      <div class="my-10">
        <img src="/ai-camera.png" alt="AI Camera Interface" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Giao diện phân tích đối tượng trực tiếp trên luồng video AI</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Nhận diện đối tượng siêu chính xác bằng Deep Learning</h3>
      <p class="mb-6 leading-relaxed">Sử dụng thuật toán học sâu (Deep Learning), Camera AI có thể phân biệt chính xác con người, động vật, phương tiện và cả các đặc điểm cụ thể như màu áo, loại phương tiện hay biển số xe. Khả năng này giúp loại bỏ hoàn toàn các báo động giả lên đến 98%, giúp lực lượng an ninh tập trung vào các tình huống thực sự nguy cấp.</p>
      
      <div class="my-10">
        <img src="/ai-camera-2.png" alt="AI Facial Recognition" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Công nghệ nhận diện khuôn mặt và định danh đối tượng siêu việt</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Phân tích hành vi và cảnh báo sớm</h3>
      <p class="mb-6 leading-relaxed">Vượt xa việc nhận diện, AI còn có khả năng phân tích hành vi như: lảng vảng quanh vùng cấm quá lâu, đánh nhau, đám đông tụ tập bất thường hoặc phát hiện người ngã quỵ. Hệ thống sẽ tự động gửi thông báo đến trung tâm điều hành kèm theo tọa độ chính xác của sự cố, giúp phản ứng nhanh chóng và hiệu quả.</p>
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
      <p class="mb-6 leading-relaxed font-medium text-slate-900">Trong lĩnh vực kiến trúc và xây dựng, Generative AI đang mở ra những cánh cửa mới cho sự sáng tạo vô biên kết hợp cùng tính toán kỹ thuật chính xác tuyệt đối.</p>
      
      <div class="my-10">
        <img src="/ai-design.png" alt="AI in Architectural Design" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Kiến trúc sư sử dụng AI để hiện thực hóa các ý tưởng phức tạp</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Thiết kế tối ưu hóa (Generative Design)</h3>
      <p class="mb-6 leading-relaxed">AI có thể mô phỏng hàng nghìn kịch bản bố trí nội thất để tìm ra phương án tối ưu nhất về ánh sáng tự nhiên, luồng gió và phong thủy. Đối với kết cấu, AI giúp tính toán khối lượng vật liệu chính xác, dự báo các điểm chịu lực yếu dưới tác động của thời khắc nghiệt, giúp tăng độ bền cho công trình lên đến 50 năm.</p>
      
      <div class="my-10">
        <img src="/ai-design-2.png" alt="AI Generative Building Model" class="w-full rounded-3xl shadow-xl" />
        <p class="text-center text-sm text-slate-500 mt-4 italic">Mô hình 3D do AI tạo sinh và tính toán kết cấu tự động</p>
      </div>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 font-primary">Quản lý vòng đời công trình với BIM 5.0</h3>
      <p class="mb-6 leading-relaxed">Sự kết hợp giữa AI và mô hình thông tin công trình (BIM) cho phép quản lý vòng đời công trình trọn vẹn. Từ việc dự báo bảo trì các thiết bị máy móc trong tòa nhà đến việc quản lý ngân sách vận hành, AI giúp các chủ đầu tư kiểm soát dự án một cách khoa học và minh bạch nhất.</p>
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
]

