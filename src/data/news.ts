export type ContentBlock =
  | {
      type: 'text';
      value: string;
    }
  | {
      type: 'image';
      src: string;
      caption?: string;
    };

export interface NewsItem {
  id: number;
  image: string;
  title: {
    vi: string;
    en: string;
  };
  excerpt: {
    vi: string;
    en: string;
  };
  content: {
    vi: ContentBlock[];
    en: ContentBlock[];
  };
  date: string;
  category: 'investment' | 'events' | 'policy';
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    image: '/Picture2.png',
    title: {
      vi: 'VỐN FDI VÀO TPHCM TĂNG HƠN 58%',
      en: 'FDI into Ho Chi Minh City increased by over 58%.',
    },
    excerpt: {
      vi: 'Trong 8 tháng năm 2025, TPHCM ghi nhận sự gia tăng...',
      en: 'In the first eight months of 2025, Ho Chi Minh City recorded an increase....',
    },
    content: {
      "vi": [
        {
        "type": "text",
        "value": "Trong 8 tháng năm 2025, TPHCM ghi nhận sự gia tăng mạnh của dòng vốn đầu tư nước ngoài (FDI) với trên 6,8 tỷ USD, tăng hơn 58% so với cùng kỳ năm trước."
        },
        {
        "type": "text",
        "value": "Tại phiên họp của UBND TPHCM đánh giá tình hình kinh tế - xã hội tháng 8 đồng thời đề ra nhiệm vụ trọng tâm tháng 9/2025, Giám đốc Sở Tài chính Nguyễn Công Vinh cho biết, trong 8 tháng đầu năm, tổng thu ngân sách nhà nước trên địa bàn đạt 524.234 tỷ đồng, đạt 78,1% dự toán năm và tăng 15,5% so với cùng kỳ."
        },
        {
        "type": "text",
        "value": "TPHCM cũng ghi nhận sự gia tăng mạnh của dòng vốn đầu tư nước ngoài (FDI) với trên 6,8 tỷ USD, tăng 58,02% so với cùng kỳ năm 2024. Chỉ số sản xuất công nghiệp (IIP) lũy kế 8 tháng tăng 6% so với cùng kỳ, trong đó 4 ngành công nghiệp trọng điểm tăng 11%, và 3 ngành công nghiệp truyền thống tăng 10,6%."
        },
        {
        "type": "text",
        "value": "Tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng, tháng 8 ước đạt 166.243 tỷ đồng, tăng 15,8% so với cùng kỳ; lũy kế 8 tháng đạt hơn 1,2 triệu tỷ đồng, tăng 15,6% so với cùng kỳ."
        },
        {
        "type": "text",
        "value": "Tổng thu du lịch tháng 8 năm 2025 ước đạt 21.582 tỷ đồng, tăng 40,4% so với cùng kỳ năm 2024; lũy kế 8 tháng năm 2025 ước đạt 161.887 tỷ đồng, tăng 31,2% so với cùng kỳ năm 2024, đạt 62,3% so với kế hoạch năm 2025."
        },
        {
        "type": "text",
        "value": "Về chính quyền số, Thành phố tiếp tục là địa phương dẫn đầu cả nước về khối lượng hồ sơ tiếp nhận trên Cổng Dịch vụ công quốc gia với 405.648 hồ sơ."
        },
        {
        "type": "text",
        "value": "Công tác hiện đại hóa nền hành chính được triển khai quyết liệt, Thành phố đã cấu hình thành công 1.336 thủ tục hành chính phi địa giới và tổ chức tập huấn cho toàn bộ 168 đơn vị cấp xã để đưa vào vận hành. Bên cạnh đó, Thành phố đã tiên phong triển khai thí điểm 09 Kiosk thông minh phục vụ người dân tại các địa bàn đông dân cư và phối hợp với Khu phần mềm Quang Trung thử nghiệm huấn luyện robot thông minh phục vụ tiếp nhận, hướng dẫn thủ tục hành chính."
        },
        {
        "type": "text",
        "value": "Đối với hỗ trợ doanh nghiệp nhỏ và vừa nâng cao năng suất và đổi mới sáng tạo, công tác phát triển tài sản trí tuệ được đẩy mạnh. Theo đó, Thành phố đã tổ chức 3 khóa huấn luyện nâng cao năng lực quản trị tài sản trí tuệ; tư vấn, hướng dẫn cho 17 tổ chức, cá nhân thực hiện 18 hồ sơ xác lập quyền sở hữu trí tuệ. Đồng thời hỗ trợ cung cấp ý kiến chuyên môn cho các cơ quan thực thi pháp luật đối với 70 nhãn hiệu. Thành phố cũng đã làm việc với Công ty Cổ phần Sàn giao dịch tín chỉ carbon Asean (CCTPA) về định hướng kết nối và xây dựng chính sách khuyến khích doanh nghiệp tham gia thị trường tín chỉ carbon."
        },
        {
        "type": "text",
        "value": "Theo Giám đốc Sở Tài chính TPHCM, từ nay đến cuối năm 2025, UBND TPHCM xác định nhiều nhóm nhiệm vụ, giải pháp trọng tâm."
        },
        {
        "type": "text",
        "value": "Trong đó, tiếp tục thực hiện kế hoạch sắp xếp, tổ chức lại đơn vị hành chính, xây dựng mô hình chính quyền địa phương hai cấp. Cụ thể, Thành phố khẩn trương thẩm định để trình UBND TPHCM ban hành các quyết định quy định chức năng, nhiệm vụ cho các đơn vị sau sắp xếp. Hoàn thiện việc phê duyệt Đề án vị trí việc làm và giao biên chế năm 2025."
        },
        {
        "type": "text",
        "value": "Ngoài ra, Thành phố đẩy mạnh các giải pháp thúc đẩy tăng trưởng kinh tế, phấn đấu tốc độ tăng trưởng GRDP cả năm đạt 8,5%. Quản lý chặt chẽ chi tiêu, ưu tiên vốn cho các công trình trọng điểm, dự án dân sinh cấp thiết và các chính sách an sinh xã hội."
        },
        {
        "type": "text",
        "value": "Đồng thời, thành phố cũng tập trung hoàn tất điều chỉnh, bổ sung \"Đề án xây dựng trình Quốc hội ban hành Nghị quyết sửa đổi, bổ sung một số điều của Nghị quyết số 98/2023/QH15\". Đây sẽ là khung pháp lý quan trọng để thành phố triển khai các cơ chế, chính sách đặc thù trong thời gian tới."
        },
        {
        "type": "text",
        "value": "Bên cạnh đó, tập trung tháo gỡ khó khăn, đẩy nhanh dự án trọng điểm, tăng tốc giải ngân vốn đầu tư công và chuẩn bị đầu tư. Đẩy mạnh công tác xây dựng quy hoạch, phát triển hạ tầng, nhà ở xã hội; giải quyết dứt điểm các dự án tồn đọng, vướng mắc."
        },
        {
        "type": "text",
        "value": "Tác giả : Linh Anh"
        }
    ],
      en: [
        {
        "type": "text",
        "value": "In the first eight months of 2025, Ho Chi Minh City recorded a surge in foreign direct investment (FDI) with over US$6.8 billion, a more than 58% increase compared to the same period last year."
        },
        {
        "type": "text",
        "value": "At a meeting of the Ho Chi Minh City People's Committee to assess the socio-economic situation in August and set key tasks for September 2025, the Director of the Department of Finance, Nguyen Cong Vinh, stated that in the first eight months of the year, total state budget revenue in the city reached VND 524,234 billion, achieving 78.1% of the annual target and increasing by 15.5% compared to the same period last year."
        },
        {
        "type": "text",
        "value": "Ho Chi Minh City also recorded strong growth in foreign direct investment (FDI) with a rate of over US$6.8 billion, an increase of 58.02% compared to the same period in 2024. The cumulative industrial production index (IIP) for the first eight months increased by 6% compared to the same period, with four key industries increasing by 11% and three traditional industries increasing by 10.6%."
        },
        {
        "type": "text",
        "value": "Total retail sales and consumer service revenue in August reached VND 166,243 billion, an increase of 15.8% compared to the same period; the eight-month growth rate reached over VND 1.2 trillion, an increase of 15.6% compared to the same period."
        },
        {
        "type": "text",
        "value": "Total tourism revenue in August 2025 reached VND 21,582 billion, an increase of 40.4% compared to the same period in 2024. The projected revenue for the first eight months of 2025 reached VND 161.887 billion, an increase of 31.2% compared to the same period in 2024, and achieving 62.3% of the 2025 plan."
        },
        {
        "type": "text",
        "value": "Regarding the government, the city continues to be the leading city nationwide in terms of the volume of applications received on the National Public Service Portal with 405,648 applications."
        },
        {
        "type": "text",
        "value": "The modernization of the administrative system has been decisively developed. The city has successfully configured 1,336 non-geographical administrative procedures and organized training for all 168 social units to put them into operation. In addition, the city has pioneered the development of 9 smart kiosks to serve citizens in densely populated areas and collaborated with the Quang Trung Software Park to test training smart robots to serve in receiving and guiding administrative procedures."
        },
        {
        "type": "text",
        "value": "To support small and medium-sized enterprises (SMEs) in improving productivity and innovation, the development of intellectual property assets has been promoted. Accordingly, the city organized three training courses to enhance intellectual property management capacity; provided consultation and guidance to 17 organizations and individuals in preparing 18 applications for intellectual property rights. Simultaneously, it provided expert opinions to law enforcement agencies on 70 trademarks. The city also worked with the ASEAN Carbon Credit Exchange Joint Stock Company (CCTPA) on the orientation of connecting and building policies to encourage businesses to participate in the carbon credit market."
        },
        {
        "type": "text",
        "value": "According to the Director of the Ho Chi Minh City Department of Finance, from now until the end of 2025, the Ho Chi Minh City People's Committee has identified several important tasks and solutions."
        },
        {
        "type": "text",
        "value": "These include continuing to reorganize the plan, restructure key action units, and build a model at the local level. Specifically, the City is urgently reviewing and approving decisions to regulate the functions and tasks of the reorganized units for the Ho Chi Minh City People's Committee. It is also finalizing the approval of the Job Position Scheme and Staffing Protocol for 2025."
        },
        {
        "type": "text",
        "value": "In addition, the City is providing solutions to promote economic growth, striving for an annual GRDP growth rate of 8.5%. It is strictly managing expenditures, prioritizing capital for important tasks, essential infrastructure projects, and social policies."
        },
        {
        "type": "text",
        "value": "At the same time, the city is focusing on completing the adjustments and additions to the \"Proposal to submit to the National Assembly a resolution amending and supplementing some articles of Resolution No. 98/2023/QH15\". This will be important legislation for the city to develop specific mechanisms and policies in the future."
        },
        {
        "type": "text",
        "value": "Furthermore, it is focusing on resolving difficulties, accelerating important projects, increasing the disbursement of public investment capital, and preparing for investment. Strengthen the planning and development of infrastructure and social housing; definitively resolve outstanding and diagnosing projects."
        },
        {
        "type": "text",
        "value": "Author :Linh Anh"
        }
      ],
    },
    date: '10/09/2025 8:47 AM',
    category: 'investment',
  },
  {
    id: 2,
    image: '/Picture1.png',
    title: {
      vi: 'TP HỒ CHÍ MINH: THU HÚT VỐN ĐẦU TƯ FDI GIỮ VỮNG TĂNG TRƯỞNG',
      en: 'HO CHI MINH CITY: ATTRACTING FDI TO MAINTAIN SUSTAIN GROWTH',
    },
    excerpt: {
      vi: 'Dù tình hình thế giới có nhiều khó khăn, nhưng các...',
      en: 'Despite the challenging global situation, the...',
    },
    content: {
      vi: [
        {
          type: 'text',
          value:
            'Dù tình hình thế giới có nhiều khó khăn, nhưng các nhà đầu tư nước ngoài vẫn thể hiện niềm tin vững chắc vào môi trường đầu tư của TP Hồ Chí Minh.',
        },
        {
          type: 'text',
          value:
            'Sau sáp nhập, TP Hồ Chí Minh mới đã khẳng định vị thế là địa phương dẫn đầu cả nước về thu hút vốn đầu tư nước ngoài. Số liệu 9 tháng đầu năm 2025, tổng vốn đăng ký mới và tăng thêm đã đạt gần 7,13 tỷ USD, với mức tăng ấn tượng hơn 37% so với cùng kỳ năm 2024.',
        },
        {
          type: 'text',
          value:
            'Mở rộng đầu tư và phát triển tại thị trường Việt Nam cách đây 2 năm, Công ty YLF Việt Nam - doanh nghiệp thực phẩm đến từ Singapore - đang tìm kiếm cơ hội mở rộng sản xuất, đặt nhà máy tại đây. Môi trường đầu tư ổn định, kinh tế phát triển nhanh tích cực và sự gia tăng tầng lớp trung lưu với thế hệ tiêu dùng trẻ năng động... là những lợi thế thị trường giúp doanh nghiệp mạnh dạn đưa ra các quyết định đầu tư trong thời gian tới..',
        },
        {
          type: 'text',
          value:
            'Ông Lee Yi Hong - Giám đốc kinh doanh, Công ty YLF Việt Nam cho hay: "Như cơ sở hạ tầng ở Việt Nam đã tiên tiến hơn, an toàn và nhanh hơn so với các nước Đông Nam Á. Trong quá trình đầu tư ở đây, vì là doanh nghiệp mới đến thị trường Việt Nam nhưng chúng tôi đã có sự hỗ trợ về pháp lý, thủ tục hành chính khá tốt từ phía các chủ khu công nghiệp. Trong dài hạn chúng tôi vẫn rất tin tưởng vào tiềm năng tăng trưởng của Việt Nam, khi mà người tiêu dùng ngày càng ưa chuộng các sản phẩm có chất lượng ngày càng cao hơn".',
        },
        {
          type: 'text',
          value:
            'Đại diện một khu công nghiệp cho biết, năm vừa qua có khá nhiều biến động ảnh hưởng đến tâm lý các nhà đầu tư như chính sách thuế quan, điều chỉnh của tỷ giá... Tuy nhiên, với sự tiếp cận chủ động của Chính phủ với đối tác Hoa Kỳ cũng như các thị trường khác, bức tranh thuế quan đã dần rõ ràng hơn thì từ tháng 7 đến nay, dòng vốn FDI đã tích cực trở lại.',
        },
        {
          type: 'text',
          value:
            'Ông Đinh Hoài Nam - Giám đốc Phát triển kinh doanh và Thương mại, SLP Việt Nam cho biết: "Khi con số thuế quan có một bức tranh rõ ràng hơn thì dòng vốn từ góc độ của chúng tôi đối với nhà đầu tư nước ngoài đã có sự chuyển dịch, mở rộng đầu tư cũng như đăng ký mới. Thể hiện qua việc khách hàng ở Trung Quốc, Singapore, thậm chí là ở châu Âu, họ đã quay trở lại nói chuyện và có cam kết mới trong việc mở rộng sản xuất kinh doanh tại Việt Nam".',
        },
        {
          type: 'text',
          value:
            '"Thời gian đầu, chính sách thuế được cho là sẽ ảnh hưởng nhiều đến hoạt động của các doanh nghiệp, nhà máy tại Việt Nam có xuất khẩu sang Hoa Kỳ. Tuy nhiên, về phía các doanh nghiệp tôi nghĩ đã có những sự đánh giá lại, tái cấu trúc lại mô hình kinh doanh để tìm cách hoạt động hiệu quả hơn, tìm kiếm các cơ hội ở nhiều thị trường khác nữa ngoài Hoa Kỳ", ông Yee Chung - Chuyên gia Baker McKenzie Việt Nam cho hay.',
        },
        {
          type: 'text',
          value:
            'Theo các chuyên gia, dòng vốn đầu tư vẫn tích cực là do TP Hồ Chí Minh vẫn đang có những lợi thế khác biệt: Môi trường đầu tư ổn định lâu dài, Chính phủ chủ động trong việc điều chỉnh chính sách, linh hoạt tiếp cận các đối tác thương mại lớn, thủ tục pháp lý ngày một minh bạch, đẩy mạnh đầu tư hạ tầng... Những yếu tố này không chỉ giúp TP Hồ Chí Minh thu hút mà còn giữ chân các dòng vốn FDI chiến lược.',
        },
        {
          type: 'text',
          value:
            'Tác giả : Quỳnh Như',
        },
        
      ],
      en: [
        {
          type: 'text',
          value:
            "Despite the challenging global situation, foreign investors continue to express strong confidence in Ho Chi Minh City's investment environment.",
        },
        {
          type: 'text',
          value:
            'Following the merger, the new Ho Chi Minh City has affirmed its position as the leading locality in the country in attracting foreign investment. According to data from the first nine months of 2025, the total newly registered and increased capital reached nearly US$7.13 billion, an impressive increase of over 37% compared to the same period in 2024.',
        },
        {
          type: 'text',
          value:
            'Having expanded its investment and development in the Vietnamese market two years ago, YLF Vietnam, a food company from Singapore, is seeking opportunities to expand production and establish a factory here. A stable investment environment, a rapidly developing economy, and a growing middle class with a dynamic young consumer generation are market advantages that encourage the company to confidently make investment decisions in the near future.',
        },
        {
          type: 'text',
          value:
            'Mr. Lee Yi Hong, Business Director of YLF Vietnam, said: "As infrastructure in Vietnam has become more advanced, safer, and faster compared to other Southeast Asian countries, we have received excellent support regarding legal and administrative procedures from industrial park owners during our investment process here. In the long term, we remain very confident in Vietnam`s growth potential, as consumers increasingly prefer higher-quality products."',
        },
        {
          type: 'text',
          value:
            'A representative from an industrial park stated that the past year saw several fluctuations affecting investor sentiment, such as tariff policies and exchange rate adjustments. However, with the government`s proactive approach to partners in the United States and other markets, the tariff landscape has become clearer, and since July, FDI flows have become more positive.',
        },
        {
          type: 'text',
          value:
            'Mr. Dinh Hoai Nam, Director of Business Development and Trade at SLP Vietnam, stated: "With a clearer picture of the tariff figures, the flow of capital from our perspective, particularly from foreign investors, has shifted, leading to expanded investments and new registrations. This is evidenced by clients from China, Singapore, and even Europe returning to discuss and make new commitments to expand their production and business operations in Vietnam."',
        },
        {
          type: 'text',
          value:
            '"Initially, the tax policy was expected to significantly impact the operations of businesses and factories in Vietnam that export to the United States. However, I think businesses have reassessed and restructured their business models to find ways to operate more efficiently and seek opportunities in many other markets besides the United States," said Yee Chung, a Baker McKenzie Vietnam expert.',
        },
        {
          type: 'text',
          value:
            'According to experts, the continued positive flow of investment capital is due to Ho Chi Minh City`s distinct advantages: a stable long-term investment environment, a proactive government policy adjustment, flexible approach to major trading partners, increasingly transparent legal procedures, and accelerated infrastructure investment. These factors not only help Ho Chi Minh City attract but also retain strategic FDI flows.',
        },
        {
          type: 'text',
          value:
            'Author : Quynh Nhu',
        },
      ],
    },
    date: '25/11/2025 18:19 GMT+7',
    category: 'investment',
  },
  {
    id: 3,
    image: '/Picture3.png',
    title: {
      vi: 'FDI VÀO VIỆT NAM VẪN TĂNG TỐC, TP.HCM GIÀNH LẠI NGÔI QUÁN QUÂN',
      en: 'FDI into Vietnam continues to accelerate, Ho Chi Minh City reclaims the top spot.',
    },
    excerpt: {
      vi: '9 tháng, vốn đầu tư nước ngoài đăng ký vào Việt Nam đạt trên 28,5 tỷ...',
      en: 'In the first nine months of the year, registered foreign investment...',
    },
    content: {
      vi: [
        {
        "type": "text",
        "value": "9 tháng, vốn đầu tư nước ngoài đăng ký vào Việt Nam đạt trên 28,5 tỷ USD, tăng 15,2% so với cùng kỳ. Trong đó, TP.HCM thu hút được 4,8 tỷ USD, vượt lên trên Bắc Ninh để giành lại vị trí quán quân."
        },
        {
        "type": "text",
        "value": "Số liệu được Cục Đầu tư nước ngoài (Bộ Tài chính) công bố, 9 tháng năm 2025, tổng vốn đầu tư nước ngoài đăng ký vào Việt Nam đạt trên 28,5 tỷ USD, tăng 15,2% so với cùng kỳ năm trước."
        },
        {
        "type": "text",
        "value": "Trong đó, đăng ký mới có 2.926 dự án, với tổng vốn đăng ký đạt trên 12,3 tỷ USD, tăng 17,4% về số dự án và giảm 8,6% về số vốn so với cùng kỳ."
        },
        {
        "type": "text",
        "value": "Bên cạnh đó, có 1.092 dự án điều chỉnh vốn đầu tư, với tổng số vốn tăng thêm đạt trên 11,3 tỷ USD, tăng 6,3% về số lượt dự án và tăng 48% về số vốn so với cùng kỳ; và có 2.527 dự án góp vốn, mua cổ phần của nhà đầu tư nước ngoài, với tổng giá trị vốn góp đạt trên 4,8 tỷ USD, tăng 2,3% về số giao dịch và tăng 35% về số vốn so với cùng kỳ."
        },
        {
        "type": "text",
        "value": "Đánh giá về tình hình thu hút FDI của Việt Nam, Cục Đầu tư nước ngoài cho biết, trong bối cảnh chung toàn cầu, Việt Nam tiếp tục là điểm đến hấp dẫn của dòng vốn đầu tư quốc tế. Theo Cục Đầu tư nước ngoài, việc vốn đăng ký cấp mới giảm 8,6% đã cho thấy nhà đầu tư mới thận trọng hơn khi khởi động dự án tại Việt Nam do những biến động trên thị trường toàn cầu."
        },
        {
        "type": "text",
        "value": "Ngược lại, các dự án hiện hữu lại mở rộng quy mô đáng kể. Điều này cho thấy niềm tin của các nhà đầu tư hiện hữu với môi trường đầu tư tại Việt Nam trong thời gian qua."
        },
        {
        "type": "text",
        "value": "Cùng với đó, việc vốn đầu tư thực hiện đạt 18,8 tỷ USD, tăng 8,5% so với cùng kỳ, cũng đã cho thấy khả năng hấp thụ vốn và tiến độ giải ngân được cải thiện, đặc biệt khi trong bối cảnh toàn cầu FDI suy giảm."
        },
        {
        "type": "text",
        "value": "“Trong bối cảnh toàn cầu phân mảnh, Việt Nam có lợi thế chiến lược nhờ vị trí thuận lợi, sự ổn định chính trị và cam kết hội nhập sâu rộng”, Cục Đầu tư nước ngoài nhấn mạnh."
        },
        {
        "type": "text",
        "value": "Theo số liệu thống kê, trong 9 tháng qua, các nhà đầu tư nước ngoài đã đầu tư vào 18 ngành trong tổng số 21 ngành kinh tế quốc dân. Trong đó, ngành công nghiệp chế biến, chế tạo dẫn đầu với tổng vốn đầu tư đạt gần 16,8 tỷ USD, chiếm gần 58,9% tổng vốn đầu tư đăng ký, tăng 7,4% so với cùng kỳ năm 2024. Ngành kinh doanh bất động sản đứng thứ hai, với tổng vốn đầu tư trên 5,7 tỷ USD, chiếm 19,98% tổng vốn đầu tư đăng ký, tăng 30,2% so với cùng kỳ."
        },
        {
        "type": "text",
        "value": "Tiếp theo, lần lượt là các ngành hoạt động chuyên môn, khoa học - công nghệ; bán buôn, bán lẻ với tổng vốn đăng ký đạt lần lượt trên 1,5 tỷ USD và trên 1,2 tỷ USD."
        },
        {
        "type": "text",
        "value": "Có một thông tin thú vị trong báo cáo thu hút FDI 9 tháng năm 2025 của Cục Đầu tư nước ngoài, đó là TP.HCM đã giành lại ngôi quán quân trong danh sách các địa phương thu hút FDI được nhiều nhất kể từ đầu năm đến nay."
        },
        {
        "type": "text",
        "value": "Cụ thể, theo báo cáo của Cục Đầu tư nước ngoài, 9 tháng qua, các nhà đầu tư nước ngoài đã đăng ký đầu tư vào 32 tỉnh, thành phố trên cả nước."
        },
        {
        "type": "text",
        "value": "Trong đó, TP.HCM dẫn đầu với tổng vốn đầu tư đăng ký 4,8 tỷ USD, chiếm 16,8% tổng vốn đầu tư cả nước, giảm 8,9% so với cùng kỳ. Bắc Ninh đứng thứ hai với trên 4,7 tỷ USD, chiếm 16,8% tổng vốn đầu tư đăng ký. Hà Nội đứng thứ ba với tổng vốn đầu tư đăng ký hơn 3,8 tỷ USD, chiếm 13,6% tổng vốn đầu tư cả nước. Tiếp theo lần lượt là Đồng Nai, Hải Phòng, Hưng Yên…"
        },
        {
        "type": "text",
        "value": "Kể cả xét về số lượng dự án, thì TP.HCM cũng dẫn đầu cả nước cả về số dự án mới (chiếm 49,3%), số lượt dự án điều chỉnh vốn (chiếm 29,3%) và góp vốn, mua cổ phần (chiếm 71,2%)."
        },
        {
        "type": "text",
        "value": "8 tháng, Bắc Ninh bất ngờ vươn lên dẫn đầu, với tổng vốn đăng ký 4,7 tỷ USD, chiếm 17,9% tổng vốn đầu tư của cả nước. Tuy vậy, sau 9 tháng, TP.HCM lại vượt lên. Số vốn mà Bắc Ninh thu hút được trong 9 tháng là 4,799 tỷ USD, chỉ “thua” TP.HCM một số vốn rất nhỏ."
        },
        {
        "type": "text",
        "value": "Trong khi đó, về đối tác đầu tư, báo cáo của Cục Đầu tư nước ngoài cho biết, đã có 105 quốc gia và vùng lãnh thổ có đầu tư tại Việt Nam trong 9 tháng năm 2025. Trong đó, Singapore dẫn đầu với tổng vốn đầu tư hơn 6,9 tỷ USD, chiếm 24,2% tổng vốn đầu tư, giảm 5,9% so với cùng kỳ. Hàn Quốc đứng thứ hai với trên 4,3 tỷ USD, chiếm 15% tổng vốn đầu tư, tăng 48,9% so cùng kỳ. Tiếp theo là Trung Quốc, Nhật Bản, Hồng Kông (Trung Quốc) với số vốn lần lượt là 3,42 tỷ USD; 2,53 tỷ USD và 2,15 tỷ USD."
        },
        {
        "type": "text",
        "value": "Như vậy, những đối tác dẫn đầu vẫn là những đối tác truyền thống của Việt Nam. Theo Cục Đầu tư xu hướng này cho thấy niềm tin vào môi trường đầu tư tại Việt Nam được khôi phục."
        },
        {
        "type": "text",
        "value": "Tác giả :Nguyên Đức"
        }
        
      ],
      en: [
        {
        "type": "text",
        "value": "In the first nine months of the year, registered foreign investment in Vietnam reached over US$28.5 billion, a 15.2% increase compared to the same period last year. Of this, Ho Chi Minh City attracted US$4.8 billion, surpassing Bac Ninh to reclaim the top spot."
        },
        {
        "type": "text",
        "value": "According to data released by the Foreign Investment Agency (Ministry of Finance), in the first nine months of 2025, total registered foreign investment in Vietnam reached over US$28.5 billion, a 15.2% increase compared to the same period last year."
        },
        {
        "type": "text",
        "value": "Of this, 2,926 new projects were registered, with a total registered capital of over US$12.3 billion, representing a 17.4% increase in the number of projects but an 8.6% decrease in capital compared to the same period."
        },
        {
        "type": "text",
        "value": "In addition, there were 1,092 projects with adjusted investment capital, with a total increase of over US$11.3 billion, a 6.3% increase in the number of projects and a 48% increase in capital compared to the same period; and 2,527 projects involving foreign investors contributing capital or purchasing shares, with a total capital contribution value of over US$4.8 billion, a 2.3% increase in the number of transactions and a 35% increase in capital compared to the same period."
        },
        {
        "type": "text",
        "value": "Assessing Vietnam's FDI attraction situation, the Foreign Investment Agency stated that, in the global context, Vietnam continues to be an attractive destination for international investment capital. According to the Foreign Investment Agency, the 8.6% decrease in newly registered capital indicates that new investors are more cautious when starting projects in Vietnam due to fluctuations in the global market."
        },
        {
        "type": "text",
        "value": "Conversely, existing projects have significantly expanded in scale. This demonstrates the confidence of existing investors in Vietnam's investment environment over the past period."
        },
        {
        "type": "text",
        "value": "In addition, the fact that realized investment capital reached US$18.8 billion, an increase of 8.5% compared to the same period last year, also shows improved capital absorption capacity and disbursement progress, especially in the context of a global decline in FDI."
        },
        {
        "type": "text",
        "value": "“In the context of a fragmented world, Vietnam has a strategic advantage thanks to its favorable location, political stability, and commitment to deep integration,” the Foreign Investment Agency emphasized."
        },
        {
        "type": "text",
        "value": "According to statistics, in the past nine months, foreign investors have invested in 18 out of 21 national economic sectors. Of these, the manufacturing industry led with a total investment of nearly US$16.8 billion, accounting for almost 58.9% of the total registered investment, an increase of 7.4% compared to the same period in 2024. The real estate business ranked second, with a total investment of over US$5.7 billion, accounting for 19.98% of the total registered investment, an increase of 30.2% compared to the same period."
        },
        {
        "type": "text",
        "value": "Following these were the professional, scientific and technological activities; and wholesale and retail trade, with total registered capital reaching over US$1.5 billion and over US$1.2 billion respectively."
        },
        {
        "type": "text",
        "value": "An interesting piece of information in the FDI attraction report for the first nine months of 2025 by the Foreign Investment Agency is that Ho Chi Minh City has regained the top spot in the list of localities attracting the most FDI since the beginning of the year."
        },
        {
        "type": "text",
        "value": "Specifically, according to the Foreign Investment Agency's report, in the past nine months, foreign investors registered investments in 32 provinces and cities nationwide."
        },
        {
        "type": "text",
        "value": "Of these, Ho Chi Minh City led with a total registered investment capital of US$4.8 billion, accounting for 16.8% of the total national investment capital, a decrease of 8.9% compared to the same period last year. Bac Ninh ranked second with over US$4.7 billion, accounting for 16.8% of the total registered investment capital. Hanoi ranked third with a total registered investment capital of over US$3.8 billion, accounting for 13.6% of the total national investment capital. Following closely behind were Dong Nai, Hai Phong, Hung Yen, etc."
        },
        {
        "type": "text",
        "value": "Even in terms of the number of projects, Ho Chi Minh City led the country in the number of new projects (accounting for 49.3%), the number of projects with adjusted capital (accounting for 29.3%), and capital contributions and share purchases (accounting for 71.2%)."
        },
        {
        "type": "text",
        "value": "In the first eight months, Bac Ninh unexpectedly took the lead, with a total registered capital of US$4.7 billion, accounting for 17.9% of the country's total investment. However, after nine months, Ho Chi Minh City surpassed it. Bac Ninh attracted US$4.799 billion in the first nine months, only slightly less than Ho Chi Minh City."
        },
        {
        "type": "text",
        "value": "Meanwhile, regarding investment partners, the Foreign Investment Agency's report indicates that 105 countries and territories invested in Vietnam during the first nine months of 2025. Singapore led with a total investment of over US$6.9 billion, accounting for 24.2% of total investment, a decrease of 5.9% compared to the same period. South Korea ranked second with over US$4.3 billion, accounting for 15% of total investment, an increase of 48.9% compared to the same period. Following closely behind are China, Japan, and Hong Kong (China) with investments of US$3.42 billion, US$2.53 billion, and US$2.15 billion respectively."
        },
        {
        "type": "text",
        "value": "Thus, the leading partners remain Vietnam's traditional partners. According to the Investment Agency, this trend shows that confidence in Vietnam's investment environment has been restored."
        },
        {
        "type": "text",
        "value": "Author :Nguyen Duc"
        }
      ],
    },
    date: '09/10/2025 16:03',
    category: 'investment',
  },
  {
    id: 4,
    image: '/Picture4.png',
    title: {
      vi: 'ĐỘNG LỰC TĂNG TRƯỞNG MỚI CỦA TP HCM: THỎI NAM CHÂM HÚT VỐN FDI',
      en: "HO CHI MINH CITY'S NEW GROWTH DRIVERS: A MAGNET ATTRACTING FDI CAPITAL",
    },
    excerpt: {
      vi: 'Vai trò đầu tàu kinh tế của TP HCM, mục tiêu tăng trưởng 2 con số...',
      en:" Ho Chi Minh City's role as the economic locomotive, aiming for double-digit...",
    },
    content: {
      vi: [
        {
        "type": "text",
        "value": "Vai trò đầu tàu kinh tế của TP HCM, mục tiêu tăng trưởng 2 con số giai đoạn 2026-2030 gắn với các giải pháp về phát triển các lĩnh vực"
        },
        {
        "type": "text",
        "value": "L.T.S: Để góp phần cùng cả nước đạt tăng trưởng 2 con số giai đoạn 2026-2030, TP HCM sẽ đột phá vào các ngành công nghệ mũi nhọn như bán dẫn - vi mạch, trí tuệ nhân tạo (AI), sản xuất thông minh, với nền tảng là các nghị quyết trụ cột, trong đó có cú hích từ Nghị quyết số 57-NQ/TW về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia."
        },
        {
        "type": "text",
        "value": "Cuối tháng 9 vừa qua, Tập đoàn Marvell Technology, Inc., một trong 10 tập đoàn công nghệ bán dẫn hàng đầu của thế giới, chính thức khai trương 2 văn phòng mới tại TP HCM, trong đó có phòng Lab (phòng thí nghiệm) hiện đại, trị giá hàng triệu USD, tích hợp các công cụ kiểm định tiên tiến phục vụ thử nghiệm các loại chip bán dẫn tại tòa nhà eTown6 (phường Tân Bình, TP HCM)."
        },
        {
        "type": "text",
        "value": "Môi trường đầu tư hấp dẫn trở lại"
        },
        {
        "type": "text",
        "value": "Ông Sandeep Bharathi, Chủ tịch Bộ phận Trung tâm Dữ liệu Marvell toàn cầu, khẳng định phòng Lab mới thể hiện cam kết lâu dài của tập đoàn về nghiên cứu và kiểm thử chip, cũng như niềm tin vào vai trò chiến lược của Việt Nam - trung tâm đổi mới về vi mạch bán dẫn toàn cầu."
        },
        {
        "type": "text",
        "value": "Trước đó, SAP - công ty công nghệ đa quốc gia của Đức, hoạt động trong lĩnh vực phần mềm quản lý, đồng thời cung cấp các giải pháp công nghệ AI dành cho doanh nghiệp (DN), cũng đã công bố thành lập Trung tâm Nghiên cứu và Phát triển (R&D) SAP Labs Vietnam, tại TP HCM. DN này có kế hoạch đầu tư hơn 150 triệu euro (tương đương hơn 4.600 tỉ đồng) trong vòng 5 năm tới."
        },
        {
        "type": "text",
        "value": "Ông Thomas Saueressig, Thành viên Ban điều hành SAP SE, phụ trách dịch vụ & khách hàng, nhấn mạnh SAP Labs Vietnam không chỉ là một trung tâm R&D mà còn là chất xúc tác cho sự chuyển đổi một trong những thị trường công nghệ năng động nhất châu Á. \"Thành tích ấn tượng của Việt Nam trong đổi mới công nghệ cùng lực lượng kỹ sư phần mềm tăng trưởng nhanh chóng đưa TP HCM trở thành lựa chọn phù hợp cho địa điểm SAP Labs\" - ông Thomas Saueressig chia sẻ."
        },
        {
        "type": "text",
        "value": "Trước đó, một loạt dự án công nghệ lớn đã vào TP HCM như dự án Nhà máy Chế tạo thiết bị sản xuất vi mạch của Công ty BE Semiconductor Industries N.V với tổng vốn đầu tư đăng ký 42 triệu USD; dự án Amazon Data Services Việt Nam đầu tư tăng vốn thêm 48 triệu USD; dự án Dược phẩm GSK Việt Nam đầu tư tăng vốn thêm 133 triệu USD..."
        },
        {
        "type": "text",
        "value": "Tính chung 8 tháng đầu năm 2025, TP HCM thu hút gần 6,89 tỉ USD vốn đầu tư nước ngoài, tăng 58% so với cùng kỳ 2024. Trong đó có 1.156 dự án mới với vốn đăng ký hơn 1,3 tỉ USD, trên 300 dự án điều chỉnh tăng vốn thêm 2,4 tỉ USD và hơn 1.500 lượt góp vốn, mua cổ phần với tổng vốn hơn 2,9 tỉ USD. Những con số này cho thấy TP HCM tiếp tục khẳng định vai trò đầu tàu kinh tế, trở thành \"thỏi nam châm\" hút vốn ngoại, góp phần củng cố vị thế trung tâm tài chính - đầu tư hàng đầu cả nước."
        },
        {
        "type": "text",
        "value": "Phát biểu tại phiên họp kinh tế - xã hội 8 tháng năm 2025, Chủ tịch UBND TP HCM Nguyễn Văn Được đánh giá việc nhiều DN nước ngoài, trong đó có những tập đoàn lớn ở các lĩnh vực rất \"nóng\" đã lựa chọn TP HCM là điểm đến đầu tư, là tín hiệu tích cực, cho thấy niềm tin của nhà đầu tư quốc tế và triển vọng tăng trưởng kinh tế của thành phố trong thời gian tới."
        },
        {
        "type": "text",
        "value": "Sự hiện diện ngày càng sâu rộng của tập đoàn công nghệ toàn cầu chứng tỏ TP HCM đang đi đúng hướng trong chiến lược thu hút FDI chọn lọc, thu hút dòng vốn chất lượng cao... \"TP HCM đang trở thành \"thỏi nam châm\" thu hút các nhà đầu tư lớn về bán dẫn, dữ liệu lớn\" - Chủ tịch UBND TP HCM nhấn mạnh."
        },
        {
        "type": "text",
        "value": "Không gian mới cho đổi mới sáng tạo"
        },
        {
        "type": "text",
        "value": "Tại Dự thảo Báo cáo chính trị Đại hội Đại biểu Đảng bộ TP HCM lần thứ I, nhiệm kỳ 2025-2030, TP HCM nêu rõ những thành tựu đạt được trong nhiệm kỳ vừa qua là hoạt động khoa học, công nghệ và đổi mới sáng tạo từng bước đi vào chiều sâu phục vụ phát triển các ngành công nghiệp chủ lực; hỗ trợ kinh tế chia sẻ, kinh tế số, kinh tế tuần hoàn."
        },
        {
        "type": "text",
        "value": "Đặc biệt, công tác chuyển đổi số của TP HCM thời gian qua ghi nhận nhiều bước tiến rõ rệt, dần hình thành hạ tầng số hiện đại, thúc đẩy mô hình đô thị thông minh và chính quyền số. Thành phố đồng thời trở thành điểm đến quy tụ của cộng đồng khởi nghiệp và quỹ đầu tư mạo hiểm, khi lọt vào tốp 5 hệ sinh thái khởi nghiệp, đứng thứ hai về công nghệ tài chính (fintech) tại Đông Nam Á và xếp hạng 110 toàn cầu về đổi mới sáng tạo."
        },
        {
        "type": "text",
        "value": "Sau khi sáp nhập Bình Dương và Bà Rịa - Vũng Tàu, TP HCM có thêm không gian và nguồn lực để phát triển thành đô thị lớn đa trung tâm trong khu vực, mở ra cơ hội hút vốn FDI và thúc đẩy các trung tâm khởi nghiệp. Nổi bật là việc khánh thành Trung tâm Khởi nghiệp sáng tạo TP HCM với quy mô 17.000 m², được định vị là \"ngôi nhà chung\" cho cộng đồng khởi nghiệp, nơi kết nối các nguồn lực và thử nghiệm chính sách mới. Đây được xem là bước tiến quan trọng để cụ thể hóa Nghị quyết 57 của Bộ Chính trị về đột phá khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia."
        },
        {
        "type": "text",
        "value": "Ông Lâm Đình Thắng, Giám đốc Sở Khoa học và Công nghệ TP HCM, cho biết thành phố đang đẩy mạnh hoạt động kết nối quốc tế để hỗ trợ các DN start-up \"vươn biển lớn\", thông qua hợp tác với các tập đoàn công nghệ toàn cầu như AMD, NVIDIA, Qualcomm, Mitsubishi cùng nhiều đối tác từ Phần Lan, Áo, Anh, Úc, Mỹ, Hàn Quốc, Singapore... TP HCM cũng thường xuyên tổ chức các sự kiện đổi mới sáng tạo, khởi nghiệp mang tính quốc tế, tạo nền tảng cho hệ sinh thái phát triển. Đặc biệt, thành phố đã ký kết hợp tác với Hàn Quốc và Singapore, mở ra chuỗi hoạt động kết nối giao thương và thu hút vốn đầu tư. Hiện Singapore là một trong những nhà đầu tư lớn nhất, với khoảng 1.560 dự án tại TP HCM, tổng vốn đăng ký đạt 13,6 tỉ USD, góp phần khẳng định sức hút của thành phố trong lĩnh vực đổi mới sáng tạo và FDI."
        },
        {
        "type": "text",
        "value": "TS Nguyễn Thị Minh Thư, Chủ nhiệm cấp cao bộ môn khởi nghiệp kinh doanh tại Đại học RMIT Việt Nam, cho rằng với hơn 4.000 DN khởi nghiệp sáng tạo trên cả nước, trong đó có những \"kỳ lân\" trị giá hơn 1 tỉ USD như MoMo và Sky Mavis, năng lực tăng trưởng dựa trên đổi mới sáng tạo của Việt Nam đến năm 2050 đang từng bước hình thành. \"Tuy khởi đầu chậm hơn so với các nước trong khu vực, hệ sinh thái khởi nghiệp Việt Nam đang nổi lên với một nguồn lực mạnh mẽ và năng động. Hệ sinh thái này được thúc đẩy bởi lực lượng dân số trẻ, am hiểu công nghệ cùng các chính sách hỗ trợ tích cực của Chính phủ. Đặc biệt, các đô thị như TP HCM đã và đang phát triển mạnh mẽ các lĩnh vực như fintech và blockchain\" - TS Minh Thư nhấn mạnh."
        },
        {
        "type": "text",
        "value": "Theo các chuyên gia, kế hoạch phát triển thành phố thông minh và chiến lược chuyển đổi số quốc gia đã thúc đẩy nhiều bước tiến, như trung tâm giám sát đô thị, trung tâm chuyển đổi số và nhiều tiến bộ về hạ tầng. Việt Nam hiện xếp thứ 19 toàn cầu về internet di động, thứ 35 về băng thông cố định..."
        },
        {
        "type": "text",
        "value": "Tác Giả :Thái Phương - Lê Tỉnh"
        },
        
      ],
      en: [
        {
        "type": "text",
        "value": "Ho Chi Minh City's role as the economic locomotive, aiming for double-digit growth in the 2026-2030 period, is linked to solutions for developing key sectors."
        },
        {
        "type": "text",
        "value": "L.T.S: To contribute to the country's double-digit growth target in the 2026-2030 period, Ho Chi Minh City will make breakthroughs in cutting-edge technology sectors such as semiconductors - integrated circuits, artificial intelligence (AI), and smart manufacturing, based on key resolutions, including the impetus from Resolution No. 57-NQ/TW on breakthroughs in the development of science, technology, innovation, and national digital transformation."
        },
        {
        "type": "text",
        "value": "In late September, Marvell Technology, Inc., one of the world's top 10 semiconductor technology companies, officially opened two new offices in Ho Chi Minh City, including a state-of-the-art, multi-million dollar lab equipped with advanced testing tools for semiconductor chip testing, located in the eTown6 building (Tan Binh Ward, Ho Chi Minh City)."
        },
        {
        "type": "text",
        "value": "An attractive investment environment returns"
        },
        {
        "type": "text",
        "value": "Mr. Sandeep Bharathi, President of Marvell's Global Data Center division, affirmed that the new lab demonstrates the company's long-term commitment to chip research and testing, as well as its belief in Vietnam's strategic role as a global semiconductor innovation hub."
        },
        {
        "type": "text",
        "value": "Previously, SAP – a German multinational technology company operating in the field of management software and providing AI technology solutions for businesses – also announced the establishment of the SAP Labs Vietnam Research and Development (R&D) Center in Ho Chi Minh City. The company plans to invest over 150 million euros (equivalent to over 4,600 billion VND) over the next five years."
        },
        {
        "type": "text",
        "value": "Mr. Thomas Saueressig, Member of the SAP SE Executive Board, responsible for services & customers, emphasized that SAP Labs Vietnam is not only an R&D center but also a catalyst for the transformation of one of Asia's most dynamic technology markets. \"Vietnam's impressive track record in technological innovation and its rapidly growing software engineering workforce make Ho Chi Minh City a suitable location for SAP Labs,\" Mr. Thomas Saueressig shared."
        },
        {
        "type": "text",
        "value": "Previously, a series of large technology projects have entered Ho Chi Minh City, such as the Microchip Manufacturing Equipment Factory project of BE Semiconductor Industries N.V. with a total registered investment capital of 42 million USD; the Amazon Data Services Vietnam project with an additional investment of 48 million USD; the GSK Vietnam Pharmaceutical project with an additional investment of 133 million USD..."
        },
        {
        "type": "text",
        "value": "In total, in the first 8 months of 2025, Ho Chi Minh City attracted nearly 6.89 billion USD in foreign investment, an increase of 58% compared to the same period in 2024. This includes 1,156 new projects with registered capital of over 1.3 billion USD, over 300 projects with adjusted capital increases of an additional 2.4 billion USD, and more than 1,500 instances of capital contributions and share purchases with a total capital of over 2.9 billion USD. These figures show that Ho Chi Minh City continues to affirm its role as the economic locomotive, becoming a \"magnet\" attracting foreign capital, contributing to consolidating its position as the leading financial and investment center in the country."
        },
        {
        "type": "text",
        "value": "Speaking at the socio-economic review meeting for the first eight months of 2025, Chairman of the People's Committee of Ho Chi Minh City, Nguyen Van Duoc, assessed that the fact that many foreign businesses, including large corporations in very \"hot\" sectors, have chosen Ho Chi Minh City as an investment destination is a positive sign, showing the confidence of international investors and the prospects for economic growth of the city in the coming time."
        },
        {
        "type": "text",
        "value": "The increasingly widespread presence of global technology corporations proves that Ho Chi Minh City is on the right track in its strategy of attracting selective FDI, attracting high-quality capital flows... \"Ho Chi Minh City is becoming a 'magnet' attracting large investors in semiconductors and big data,\" the Chairman of the People's Committee of Ho Chi Minh City emphasized."
        },
        {
        "type": "text",
        "value": "New Space for Innovation"
        },
        {
        "type": "text",
        "value": "In the Draft Political Report of the First Congress of the Ho Chi Minh City Party Committee, term 2025-2030, Ho Chi Minh City clearly stated the achievements made in the past term, including the gradual deepening of science, technology, and innovation activities to serve the development of key industries; supporting the sharing economy, digital economy, and circular economy."
        },
        {
        "type": "text",
        "value": "In particular, Ho Chi Minh City's digital transformation efforts have made significant progress, gradually forming a modern digital infrastructure, promoting the smart city model and digital government. The city has also become a hub for the startup community and venture capital funds, ranking among the top 5 startup ecosystems, second in fintech in Southeast Asia, and 110th globally in innovation."
        },
        {
        "type": "text",
        "value": "Following the merger of Binh Duong and Ba Ria - Vung Tau, Ho Chi Minh City gained more space and resources to develop into a large, multi-centered urban area in the region, opening up opportunities to attract FDI and promote startup centers. A notable achievement is the inauguration of the Ho Chi Minh City Innovation Startup Center, spanning 17,000 m², positioned as a \"common home\" for the startup community, connecting resources and testing new policies. This is considered a significant step in concretizing Resolution 57 of the Politburo on breakthroughs in science, technology, innovation, and national digital transformation."
        },
        {
        "type": "text",
        "value": "Mr. Lam Dinh Thang, Director of the Ho Chi Minh City Department of Science and Technology, stated that the city is actively promoting international connections to support startup businesses.To \"reach the wider world,\" through cooperation with global technology corporations such as AMD, NVIDIA, Qualcomm, Mitsubishi, and many partners from Finland, Austria, the UK, Australia, the US, South Korea, Singapore, etc., Ho Chi Minh City also regularly organizes international innovation and startup events, creating a foundation for a developing ecosystem. In particular, the city has signed cooperation agreements with South Korea and Singapore, opening up a series of activities connecting trade and attracting investment capital. Currently, Singapore is one of the largest investors, with approximately 1,560 projects in Ho Chi Minh City, totaling US$13.6 billion in registered capital, further affirming the city's attractiveness in the field of innovation and FDI."
        },
        {
        "type": "text",
        "value": "Dr. Nguyen Thi Minh Thu, Senior Head of the Entrepreneurship Department at RMIT University Vietnam, believes that with over 4,000 innovative startups nationwide, including \"unicorns\" valued at over $1 billion such as MoMo and Sky Mavis, Vietnam's innovation-based growth capacity by 2050 is gradually taking shape. \"Although starting slower than other countries in the region, Vietnam's startup ecosystem is emerging with a strong and dynamic force. This ecosystem is driven by a young, tech-savvy population and positive government support policies. In particular, cities like Ho Chi Minh City have been strongly developing sectors such as fintech and blockchain,\" Dr. Minh Thu emphasized."
        },
        {
        "type": "text",
        "value": "According to experts, the smart city development plan and the national digital transformation strategy have driven many advancements, such as urban monitoring centers, digital transformation centers, and significant infrastructure improvements. Vietnam currently ranks 19th globally in mobile internet and 35th in fixed-line bandwidth..."
        },
        {
        "type": "text",
        "value": "Author :Thai Phuong - Le Tinh"
        }
      ],
    },
    date: '03/10/2025 05:30 GMT+7',
    category: 'investment',
  },
  {
    id: 5,
    image: '/Picture5.png',
    title: {
      vi: 'THÀNH PHỐ HỒ CHÍ MINH TIẾP TỤC CẢI THIỆN MÔI TRƯỜNG ĐẦU TƯ, GIÚP DOANH NGHIỆP ĐẦU TƯ DÀI HẠN',
      en: "HO CHI MINH CITY CONTINUES TO IMPROVE INVESTMENT ENVIRONMENT, HELPING BUSINESSES MAKE LONG-TERM INVESTMENTS",
    },
    excerpt: {
      vi: 'Ngày 12/12, Trung tâm Xúc tiến thương mại và Đầu tư Thành phố...',
      en: "On December 12th, the City's Trade and Investment Promotion Center...",
    },
    content: {
      vi: [
        {
        "type": "text",
        "value": "Ngày 12/12, Trung tâm Xúc tiến thương mại và Đầu tư Thành phố Hồ Chí Minh (ITPC) phối hợp Hiệp hội Doanh nghiệp Nhật Bản tại Thành phố Hồ Chí Minh (JCCH) tổ chức Hội nghị bàn tròn doanh nghiệp Nhật Bản năm 2025."
        },
        {
        "type": "text",
        "value": "Hội nghị bàn tròn nhằm đối thoại trực tiếp, tháo gỡ vướng mắc và thúc đẩy môi trường đầu tư, kinh doanh cho cộng đồng doanh nghiệp Nhật Bản đang hoạt động tại Thành phố Hồ Chí Minh."
        },
        {
        "type": "text",
        "value": "Tính đến nay, với hơn 2.200 dự án đầu tư tại Thành phố Hồ Chí Minh, với tổng vốn đăng ký hơn 15 tỷ USD, cộng đồng doanh nghiệp Nhật Bản đã trở thành một phần quan trọng trong sự phát triển kinh tế-xã hội của Thành phố Hồ Chí Minh. Đặc biệt, sự gắn bó của các doanh nghiệp Nhật Bản trong suốt thời gian qua đã tạo nên sự tin cậy chiến lược giữa Thành phố Hồ Chí Minh và Nhật Bản."
        },
        {
        "type": "text",
        "value": "Tại sự kiện, ông Nguyễn Thanh Toàn, Phó Giám đốc Sở Tài chính Thành phố Hồ Chí Minh nhấn mạnh, năm 2025 là thời điểm đặc biệt khi Thành phố Hồ Chí Minh bước vào kỷ nguyên mở rộng địa giới hành chính."
        },
        {
          type: 'image',
          src: '/Picture6.png',
          caption: '',
        },
        {
        "type": "text",
        "value": "Sự thay đổi mang tính chiến lược này tạo nên một Thành phố Hồ Chí Minh mới với quy mô chưa từng có, mở ra cơ hội to lớn về thị trường, kết nối hạ tầng và tiếp cận nguồn lực tài chính quốc tế."
        },
        {
        "type": "text",
        "value": "Trên nền tảng đó, kinh tế Thành phố Hồ Chí Minh năm 2025 tiếp tục tăng trưởng tích cực với GRDP ước đạt 8,03%, thu hút FDI đạt hơn 8,1 tỷ USD, trong đó Nhật Bản đứng thứ 5 về vốn đầu tư trong năm 2025."
        },
        {
        "type": "text",
        "value": "Cũng theo ông Nguyễn Thanh Toàn, Thành phố Hồ Chí Minh sau hợp nhất sẽ tập trung thực hiện 5 mũi nhọn đột phá để tạo động lực phát triển, đó là xây dựng Trung tâm Tài chính quốc tế tại Thành phố Hồ Chí Minh; phát triển chuỗi đô thị thông minh; tái cơ cấu kinh tế theo hướng đổi mới sáng tạo và công nghệ cao; phát triển kinh tế biển và logistics; xây dựng chuỗi du lịch sinh thái biển và nghỉ dưỡng cao cấp đạt chuẩn quốc tế."
        },
        {
        "type": "text",
        "value": "Để hiện thực hóa các mục tiêu này, bên cạnh các chính sách ưu đãi chung về thuế và đất đai theo Luật Đầu tư, Thành phố Hồ Chí Minh đang triển khai các cơ chế đặc thù vượt trội thông qua việc sửa đổi Nghị quyết 98."
        },
        {
        "type": "text",
        "value": "Theo Hiệp hội Doanh nghiệp Nhật Bản tại Thành phố Hồ Chí Minh (JCCH), JCCH hiện có gần 1.100 doanh nghiệp hội viên, là hiệp hội doanh nghiệp lớn thứ ba trên thế giới."
        },
        {
        "type": "text",
        "value": "Tại Hội nghị bàn tròn năm nay, JCCH đã trình bày 23 kiến nghị và đề xuất của các doanh nghiệp Nhật Bản trong 4 lĩnh vực: pháp lý-lao động, thuế, hải quan và môi trường đời sống."
        },
        {
        "type": "text",
        "value": "Phát biểu kết luận hội nghị, đồng chí Nguyễn Văn Được, Chủ tịch Ủy ban nhân dân Thành phố Hồ Chí Minh ghi nhận các ý kiến đóng góp từ cộng đồng doanh nghiệp Nhật Bản."
        },
        {
        "type": "text",
        "value": "Đồng chí nhấn mạnh, Thành phố Hồ Chí Minh sẽ tập trung mạnh mẽ vào cải cách thể chế, cải thiện môi trường đầu tư, kinh doanh, tinh gọn đầu mối thẩm định, rút ngắn thời gian xử lý thủ tục cho các dự án, nhất là dự án hợp tác công-tư (PPP)."
        },
        {
        "type": "text",
        "value": "Thành phố Hồ Chí Minh tiếp tục cắt giảm thủ tục hành chính, tạo môi trường đầu tư minh bạch, nhất quán và thân thiện hơn, giúp doanh nghiệp yên tâm triển khai các kế hoạch dài hạn, thúc đẩy kinh tế xanh, kinh tế tuần hoàn và tăng trưởng bền vững."
        },
        {
        "type": "text",
        "value": "Tác giả :Cao Tân"
        }
      ],
      en: [
        {
        "type": "text",
        "value": "On December 12th, the Ho Chi Minh City Trade and Investment Promotion Center (ITPC), in collaboration with the Japan Chamber of Commerce and Industry in Ho Chi Minh City (JCCH), organized the 2025 Japanese Business Roundtable Conference."
        },
        {
        "type": "text",
        "value": "The roundtable conference aimed to facilitate direct dialogue, address obstacles, and promote a favorable investment and business environment for the Japanese business community operating in Ho Chi Minh City."
        },
        {
        "type": "text",
        "value": "To date, with over 2,200 investment projects in Ho Chi Minh City and a total registered capital exceeding US$15 billion, the Japanese business community has become an important part of the city's socio-economic development. In particular, the close ties between Japanese businesses over the years have fostered strategic trust between Ho Chi Minh City and Japan."
        },
        {
        "type": "text",
        "value": "At the event, Mr. Nguyen Thanh Toan, Deputy Director of the Ho Chi Minh City Department of Finance, emphasized that 2025 is a special time as Ho Chi Minh City enters an era of administrative boundary expansion."
        },
        {
          type: 'image',
          src: '/Picture6.png',
          caption: '',
        },
        {
        "type": "text",
        "value": "This strategic change will create a new Ho Chi Minh City of unprecedented scale, opening up enormous opportunities in terms of markets, infrastructure connectivity, and access to international financial resources."
        },
        {
        "type": "text",
        "value": "Based on this foundation, Ho Chi Minh City's economy in 2025 is expected to continue its positive growth with an estimated GRDP of 8.03%, attracting FDI exceeding US$8.1 billion, with Japan ranking 5th in terms of investment capital in 2025."
        },
        {
        "type": "text",
        "value": "According to Mr. Nguyen Thanh Toan, after the merger, Ho Chi Minh City will focus on implementing five breakthrough areas to create momentum for development: building an International Financial Center in Ho Chi Minh City; developing a chain of smart cities; Restructuring the economy towards innovation and high technology; developing the marine economy and logistics; building a chain of eco-tourism and high-end resorts meeting international standards."
        },
        {
        "type": "text",
        "value": "To realize these goals, in addition to general preferential policies on taxes and land under the Investment Law, Ho Chi Minh City is implementing superior special mechanisms through the amendment of Resolution 98."
        },
        {
        "type": "text",
        "value": "According to the Japan Chamber of Commerce and Industry in Ho Chi Minh City (JCCH), JCCH currently has nearly 1,100 member businesses, making it the third largest business association in the world."
        },
        {
        "type": "text",
        "value": "At this year's roundtable conference, JCCH presented 23 recommendations and proposals from Japanese businesses in four areas: legal-labor, taxation, customs, and living environment."
        },
        {
        "type": "text",
        "value": "In his concluding remarks, Mr. Nguyen Van Duoc, Chairman of the People's Committee of Ho Chi Minh City, acknowledged the contributions from the Japanese business community."
        },
        {
        "type": "text",
        "value": "The comrade emphasized that Ho Chi Minh City will focus strongly on institutional reform, improving the investment and business environment, streamlining appraisal processes, and shortening the time for handling procedures for projects, especially public-private partnership (PPP) projects."
        },
        {
        "type": "text",
        "value": "Ho Chi Minh City will continue to reduce administrative procedures, creating a more transparent, consistent, and friendly investment environment, helping businesses confidently implement long-term plans, promoting a green economy, a circular economy, and sustainable growth."
        },
        {
        "type": "text",
        "value": "Author :Cao Tan"
        }
      ],
    },
    date: '12/12/2025',
    category: 'events',
  },
  {
    id: 6,
    image: '/Picture7.png',
    title: {
      vi: 'VIỆT NAM VỚI BÀI TOÁN HÚT ĐẦU TƯ VÀO KHU CÔNG NGHỆ SỐ',
      en: "HO CHI MINH CITY CONTINUES TO IMPROVE INVESTMENT ENVIRONMENT, HELPING BUSINESSES MAKE LONG-TERM INVESTMENTS",
    },
    excerpt: {
      vi: 'Ngày 5.12 tại TPHCM, Cục Công nghiệp Công nghệ thông tin ...',
      en: "On December 5th in Ho Chi Minh City, the Information...",
    },
    content: {
      vi: [
        {
        "type": "text",
        "value": "Ngày 5.12 tại TPHCM, Cục Công nghiệp Công nghệ thông tin - Bộ Khoa học và Công nghệ cùng Cục Đầu tư nước ngoài - Bộ Tài chính và Khu Công viên phần mềm Quang Trung (QTSC), Trung tâm Hỗ trợ và Tư vấn Chuyển đổi số TPHCM (DXCenter) tổ chức Hội thảo “Xúc tiến Đầu tư vào Khu Công nghệ số tập trung”."
        },
        {
        "type": "text",
        "value": "Sự kiện đã thu hút sự tham dự của hơn 200 đại biểu đến từ các cơ quan quản lý nhà nước, sở ban ngành, tổ chức xúc tiến đầu tư, doanh nghiệp công nghệ, nhà đầu tư cùng các đơn vị cung cấp hạ tầng và dịch vụ số."
        },
        {
        "type": "text",
        "value": "Với vai trò điều phối, đại diện Bộ Khoa học và Công nghệ cho biết, khu công nghệ số tập trung chính là hạ tầng nền tảng của ngành công nghiệp công nghệ số, là “đất lành” của doanh nghiệp, là nơi mở ra cơ hội hiện thực hóa khát vọng Việt Nam trở thành quốc gia mạnh về công nghệ."
        },
        {
        "type": "text",
        "value": "Từ năm 2006, khi mô hình khu công nghệ thông tin tập trung được luật hóa và Chính phủ ban hành Nghị định 154/2013/NĐ-CP, Việt Nam đã đặt viên gạch đầu tiên cho hệ thống khu công nghệ số tập trung ngày nay."
        },
        {
        "type": "text",
        "value": "Sau hơn 12 năm phát triển, hệ thống khu công nghệ số tập trung đã mang lại những kết quả đáng tự hào, với 8 khu công nghệ số tập trung được thành lập tại Hà Nội, TPHCM, Đà Nẵng, Cần Thơ. Quỹ đất 2,588 triệu m², tăng hơn 10 lần so với năm 2013."
        },
        {
        "type": "text",
        "value": "Ngoài ra, các khu này cũng có hơn 630 doanh nghiệp công nghệ số hoạt động, tăng trưởng 20%; thu hút hơn 42.450 lao động chất lượng cao, gấp đôi so với năm 2013. Hiệu suất sử dụng đất đạt khoảng 10 triệu USD/ha/năm - mức rất cao so với các khu chức năng khác..."
        },
        {
          type: 'image',
          src: '/Picture8.png',
          caption: '',
        },
        {
        "type": "text",
        "value": "Tại hội thảo, đại diện các đơn vị khác đã chia sẻ nhiều tham luận có giá trị. Trong đó, bài trình bày của lãnh đạo QTSC nêu bật hướng phát triển mới của đơn vị, hướng tới mô hình “Khu Công nghệ số - đô thị xanh, thông minh”, tập trung xây dựng hệ sinh thái toàn diện và phát triển các mũi nhọn công nghệ đột phá như: hạ tầng số, điện toán đám mây, dữ liệu lớn, an ninh mạng, nhân lực số, đổi mới sáng tạo, khởi nghiệp..."
        },
        {
        "type": "text",
        "value": "Đại diện Tập đoàn Becamex chia sẻ tham luận: “Khu Công nghệ số tập trung: Trung tâm công nghiệp bán dẫn & đổi mới sáng tạo”, nêu rõ định hướng phát triển khu công nghệ số gắn với công nghiệp bán dẫn - lĩnh vực được dự báo sẽ dẫn dắt tăng trưởng kinh tế trong tương lai."
        },
        {
        "type": "text",
        "value": "Bên cạnh phiên hội thảo, khu triển lãm công nghệ trưng bày và giới thiệu các giải pháp chuyển đổi số, hạ tầng trung tâm dữ liệu, AI, IoT, an toàn an ninh thông tin, ứng dụng công nghệ, đô thị thông minh… tạo không gian kết nối và chia sẻ kinh nghiệm triển khai giữa doanh nghiệp công nghệ, nhà đầu tư và đại diện các địa phương."
        },
        {
        "type": "text",
        "value": "Đại diện Bộ Khoa học và Công nghệ tin tưởng rằng, sau hội thảo, thời gian tới sẽ thêm nhiều mô hình khu công nghệ số tập trung được hình thành tại các địa phương; nhiều dự án đầu tư lớn được khởi động; nhiều ý tưởng và liên kết được nuôi dưỡng."
        },
        {
        "type": "text",
        "value": "Và quan trọng nhất, đó là một niềm tin mạnh mẽ rằng Việt Nam hoàn toàn có thể trở thành điểm đến hàng đầu của nền công nghiệp công nghệ số thế giới."
        },
        {
        "type": "text",
        "value": "Tác Giả : Nguyễn Đăng"
        }
      ],
      en: [
        {
        "type": "text",
        "value": "On December 5th in Ho Chi Minh City, the Information Technology Industry Department - Ministry of Science and Technology, together with the Foreign Investment Department - Ministry of Finance, Quang Trung Software Park (QTSC), and the Ho Chi Minh City Digital Transformation Support and Consulting Center (DXCenter), organized the workshop \"Promoting Investment in Concentrated Digital Technology Zones\"."
        },
        {
        "type": "text",
        "value": "The event attracted over 200 delegates from state management agencies, departments, investment promotion organizations, technology companies, investors, and providers of digital infrastructure and services."
        },
        {
        "type": "text",
        "value": "Acting as the coordinator, a representative from the Ministry of Science and Technology stated that concentrated digital technology zones are the foundational infrastructure of the digital technology industry, a fertile ground for businesses, and a place that opens up opportunities to realize Vietnam's aspiration to become a technologically advanced nation."
        },
        {
        "type": "text",
        "value": "Since 2006, when the model of concentrated information technology zones was legalized and the Government issued Decree 154/2013/ND-CP, Vietnam laid the first brick for the current system of concentrated digital technology zones."
        },
        {
        "type": "text",
        "value": "After more than 12 years of development, the system of concentrated digital technology zones has yielded impressive results, with 8 concentrated digital technology zones established in Hanoi, Ho Chi Minh City, Da Nang, and Can Tho. The land area is 2.588 million m², more than ten times higher than in 2013."
        },
        {
        "type": "text",
        "value": "In addition, these zones also have more than 630 operating digital technology businesses, representing a 20% growth. It attracted over 42,450 high-quality workers, double the number in 2013. Land utilization efficiency reached approximately US$10 million/hectare/year - a very high rate compared to other functional zones..."
        },
        {
          type: 'image',
          src: '/Picture8.png',
          caption: '',
        },
        {
        "type": "text",
        "value": "At the workshop, representatives from other units shared many valuable presentations. Among them, the presentation by QTSC's leadership highlighted the unit's new development direction, aiming towards a \"Digital Technology Park - Green and Smart City\" model, focusing on building a comprehensive ecosystem and developing breakthrough technology areas such as: digital infrastructure, cloud computing, big data, cybersecurity, digital workforce, innovation, and entrepreneurship..."
        },
        {
        "type": "text",
        "value": "A representative from Becamex Group shared a presentation: \"Concentrated Digital Technology Park: Semiconductor Industry & Innovation Center,\" clearly outlining the development direction of the digital technology park linked to the semiconductor industry - a sector predicted to drive economic growth in the future."
        },
        {
        "type": "text",
        "value": "Alongside the conference, the technology exhibition area showcased and introduced digital transformation solutions, data center infrastructure, AI, IoT, information security, technology applications, smart cities, etc., creating a space for networking and sharing implementation experiences among technology companies, investors, and representatives from localities."
        },
        {
        "type": "text",
        "value": "Representatives from the Ministry of Science and Technology expressed confidence that, following the conference, more concentrated digital technology zones would be established in localities; many large investment projects would be launched; and many ideas and linkages would be nurtured."
        },
        {
        "type": "text",
        "value": "And most importantly, there is a strong belief that Vietnam can absolutely become a leading destination for the global digital technology industry."
        },
        {
        "type": "text",
        "value": "Author : Nguyen Dang"
        }
      ],
    },
    date: 'Thứ sáu, 05/12/2025 12:03 (GMT+7)',
    category: 'events',
  },
  {
    id: 7,
    image: '/Picture9.png',
    title: {
      vi: 'HỖ TRỢ XÚC TIẾN ĐẦU TƯ VÀ PHÁT TRIỂN DU LỊCH TP HỒ CHÍ MINH',
      en: "SUPPORTING INVESTMENT PROMOTION AND TOURISM DEVELOPMENT IN HO CHI MINH CITY",
    },
    excerpt: {
      vi: 'Tổng thu du lịch 9 tháng năm 2025 của ...',
      en: "Total tourism revenue for the first 9 months of 2025...",
    },
    content: {
      vi: [
        {
        "type": "text",
        "value": "Tổng thu du lịch 9 tháng năm 2025 của TP Hồ Chí Minh ước đạt gần 190.000 tỷ đồng. Khách du lịch quốc tế đến TP Hồ Chí Minh ước đạt 5.883.285 lượt, đạt 69,2% so với kế hoạch năm 2025."
        },
        {
        "type": "text",
        "value": "Khách du lịch nội địa đến TP Hồ Chí Minh ước đạt 29.179.468 lượt, đạt 64,8% so với kế hoạch năm 2025; so với chỉ tiêu phấn đấu năm 2025 đạt 58,4%.Tổng thu du lịch 9 tháng năm 2025 ước đạt 184.629 tỷ đồng, đạt 71% so với kế hoạch năm 2025; so với chỉ tiêu phấn đấu năm 2025 đạt 63,7%."
        },
        {
        "type": "text",
        "value": "Giai đoạn sau sáp nhập (Từ ngày 01/7 đến nay), TP Hồ Chí Minh (mới) được thành lập trên cơ sở hợp nhất 03 địa phương gồm tỉnh Bà Rịa - Vũng Tàu, tỉnh Bình Dương và TP Hồ Chí Minh."
        },
        {
        "type": "text",
        "value": "Trong bối cảnh mới, TP Hồ Chí Minh đang đứng trước rất nhiều cơ hội để bứt phá, vươn mình cạnh tranh với các thành phố trong khu vực và trên thế giới; với mục tiêu tăng trưởng kinh tế hai con số, ngành du lịch được xác định là một trong những động lực tăng trưởng quan trọng, góp phần định hướng xây dựng thành phố trở thành một “siêu đô thị quốc tế”."
        },
        {
        "type": "text",
        "value": "Sở Du lịch đã phối hợp với Ban Kinh tế - Ngân sách HĐND Thành phố tổ chức tại Thành phố Vũng Tàu tập trung thảo luận thực trạng, cơ hội, thách thức, đề xuất chính sách hỗ trợ, giải pháp phát triển du lịch. Hoàn thiện công 3 tác tham mưu, chính sách; triển khai đồng bộ nhiệm vụ chiến lược. Trong đó xác định TP Hồ Chí Minh trong giai đoạn mới có những lợi thế về: Tài nguyên du lịch, Sản phẩm du lịch, Nguồn nhân lực, Cơ sở vật chất dịch vụ du lịch, Hạ tầng giao thông..."
        },
        {
        "type": "text",
        "value": "Công tác phát triển sản phẩm du lịch tại TP Hồ Chí Minh được triển khai đồng bộ, đa dạng và có nhiều kết quả tích cực, góp phần làm phong phú hệ sinh thái sản phẩm du lịch của Thành phố. Sở Du lịch đã tập trung phối hợp với các sở, ngành, địa phương và doanh nghiệp tổ chức khảo sát, thiết kế và phát triển nhiều tuyến, điểm và sản phẩm du lịch đặc trưng."
        },
        {
          type: 'image',
          src: '/Picture10.png',
          caption: '',
        },
        {
        "type": "text",
        "value": "Giai đoạn sau sáp nhập, TP Hồ Chí Minh tiếp tục tổ chức khảo sát, điều tra, đánh giá tài nguyên du lịch để tái định vị sản phẩm và xây dựng định hướng phát triển sản phẩm mới. Phát triển các sản phẩm du lịch đặc thù theo từng địa phương sau khi có phân cấp quản lý rõ ràng. Tập trung phát triển du lịch ban đêm gắn với thí điểm cơ chế hợp tác công tư trên lĩnh vực văn hóa và thể thao như các chương trình tham quan bảo tàng ban đêm, các chương trình biểu diễn nghệ thuật… Rà soát, kiến nghị sửa đổi các quy định về điều kiện hình thành và hoạt động của các bến thủy nội địa, cảng hành khách … để thúc đẩy doanh nghiệp đầu tư và khai thác có hiệu quả các cảng biển, bến thủy, cầu tàu… để phát triển du lịch đường thủy."
        },
        {
        "type": "text",
        "value": "Theo đánh giá, trong 9 tháng đầu năm 2025 ngành du lịch Thành phố tiếp tục phục hồi mạnh mẽ và tăng trưởng ổn định Thành phố duy trì vị thế là trung tâm du lịch lớn của cả nước, đóng vai trò đầu tàu thu hút khách quốc tế và nội địa tăng mạnh, đặc biệt ở các sản phẩm du lịch ngắn ngày, du lịch cuối tuần và du lịch đường sông. Công suất phòng tăng cao."
        },
        {
        "type": "text",
        "value": "Công tác xúc tiến, quảng bá hình ảnh du lịch Thành phố được đẩy mạnh, truyền thông du lịch Thành phố trên nhiều nền tảng số đạt hiệu ứng tích cực. Tổ chức thành công nhiều sự kiện, đặt biệt là Hội chợ Du lịch Quốc tế ITE HCMC 2025 và Đại hội đồng Tổ chức Xúc tiến Du lịch các Thành phố toàn cầu lần thứ 12 (TPO 2025), thu hút đông đảo khách quốc tế, các đối tác, doanh nghiệp và báo chí. Các sự kiện này góp phần nâng cao vị thế TP HCM trên bản đồ du lịch quốc tế, khẳng định vai trò trung tâm du lịch của cả nước."
        },
        {
        "type": "text",
        "value": "Các chiến dịch kích cầu du lịch 2025 với nhiều gói ưu đãi được tung ra, tận dụng nền tảng trực tuyến và mạng xã hội, giúp gia tăng nhận diện thương hiệu điểm đến. Định hướng rõ ràng trong phát triển sản phẩm và thị trường Tiếp tục đầu tư vào các dòng sản phẩm chiến lược: du lịch đường sông, y tế, MICE, di sản - văn hóa - lịch sử, du lịch đêm, du lịch xanh..."
        },
        {
        "type": "text",
        "value": "Quan hệ đối tác quốc tế, hợp tác liên vùng và truyền thông được triển khai đồng bộ, tạo hiệu ứng tích cực. Hướng tới các thị trường quốc tế tiềm năng và mới nổi như Ấn Độ, Trung Đông, Bắc Âu... thông qua xúc tiến hợp tác với Tổng Lãnh sự quán, các hãng hàng không và doanh nghiệp nước ngoài."
        },
        {
        "type": "text",
        "value": "Đổi mới trong công tác quản lý nhà nước và chuyển đổi số; tham mưu, triển khai hiệu quả công tác quản lý trong bối cảnh chuyển đổi mô hình chính quyền 2 cấp và hợp nhất đơn vị hành chính. Tăng cường số hóa, cải cách hành chính, xây dựng cơ sở dữ liệu ngành du lịch, hỗ trợ doanh nghiệp đăng ký, cập nhật thông tin kịp thời."
        },
        {
        "type": "text",
        "value": "Để thúc đẩy tăng trưởng kinh tế 2 con số trên địa bàn, TP Hồ Chí Minh, trong những tháng cuối năm 2025, phấn đấu đạt từ 8.500.000 đến 10.000.000 lượt khách quốc tế (chỉ tiêu đầu năm là 8,5 triệu khách); Khách du lịch nội địa phấn đấu đạt khoảng 45.000.000 đến 50.000.000 lượt khách (chỉ tiêu cũ 45 triệu khách); Tổng thu du lịch đạt khoảng 290.000 tỷ đồng (chỉ tiêu cũ 260 ngàn tỷ đồng)."
        },
        {
        "type": "text",
        "value": "TP Hồ Chí Minh lần đầu đăng cai Đại hội đồng Tổ chức Xúc tiến Du lịch các thành phố toàn cầu"
        },
        {
        "type": "text",
        "value": "Với sự kiện này, TP Hồ Chí Minh khẳng định vai trò trung tâm liên kết và thúc đẩy phát triển du lịch khu vực, hướng tới ngành du lịch hiện đại và bền vững…"
        },
        {
        "type": "text",
        "value": "Ngày 03/9, tại TP Hồ Chí Minh đã diễn ra Đại hội đồng Tổ chức Xúc tiến Du lịch các Thành phố toàn cầu (Tourism Promotion Organization for Global Cities - TPO) lần thứ 12. Lần đầu tiên tại Việt Nam, TP Hồ Chí Minh vinh dự đăng cai Đại hội đồng TPO trong khuôn khổ Hội chợ Du lịch Quốc tế TP Hồ Chí Minh (ITE HCMC)."
        },
        {
        "type": "text",
        "value": "Việc đăng cai Đại hội đồng TPO là một chiến lược \"một mũi tên trúng nhiều đích\", vừa nâng cao vị thế quốc tế, vừa tạo động lực cho phát triển kinh tế, du lịch và đổi mới sáng tạo."
        },
        {
        "type": "text",
        "value": "Với chủ đề “Định hình tương lai ngành du lịch: Hướng tới chuyển đổi số và chuyển đổi xanh”, sự kiện là diễn đàn quan trọng để các thành viên thảo luận về hai xu hướng tất yếu của du lịch hiện đại: chuyển đổi số và phát triển bền vững."
        },
        {
        "type": "text",
        "value": "Chủ tịch UBND TP Hồ Chí Minh Nguyễn Văn Được nhấn mạnh: “Là một trong những thành phố sáng lập và là thành phố duy nhất của Việt Nam giữ vai trò Ủy viên Ban Điều hành TPO, trong hành trình hơn hai thập kỷ qua, TP Hồ Chí Minh luôn tự hào đóng góp tích cực vào các hoạt động của tổ chức, không ngừng thúc đẩy liên kết và hợp tác phát triển du lịch giữa các thành viên. Đồng thời, khẳng định vai trò trung tâm trong phát triển du lịch của khu vực”."
        },
        {
        "type": "text",
        "value": "Theo Chủ tịch UBND TP Hồ Chí Minh Nguyễn Văn Được, việc đăng cai tổ chức Đại hội đồng TPO lần này là một cột mốc quan trọng, thể hiện rõ trách nhiệm, cam kết của TP Hồ Chí Minh trong việc thúc đẩy du lịch khu vực phát triển đồng bộ, sáng tạo và bền vững."
        },
        {
        "type": "text",
        "value": "Đại hội đồng TPO năm 2025 là một chương trình nghị sự quan trọng đối với ngành du lịch khi đang đứng trước những thách thức lớn như biến đổi khí hậu, nhu cầu cá nhân hóa trải nghiệm của du khách và sự bùng nổ của công nghệ và trí tuệ nhân tạo."
        },
        {
        "type": "text",
        "value": "Chuyển đổi số và chuyển đổi xanh không chỉ là xu hướng mà là yếu tố sống còn cho sự phát triển bền vững của du lịch. Chuyển đổi số giúp nâng cao quản lý, cải thiện trải nghiệm du khách và mở rộng thị trường; trong khi chuyển đổi xanh giảm tác động môi trường, bảo vệ tài nguyên và bản sắc văn hóa. Đây là hai trụ cột chiến lược định hình cấu trúc, bản dạng và hướng phát triển của ngành, phù hợp 17 mục tiêu bền vững của Liên Hợp Quốc."
        },
        {
        "type": "text",
        "value": "Bên cạnh đó, các cuộc hội thảo chuyên đề, diễn đàn cấp cao và hội nghị song phương sẽ tập trung vào các giải pháp ứng dụng công nghệ số và phát triển du lịch bền vững, giúp TP Hồ Chí Minh cập nhật xu hướng và xây dựng chiến lược du lịch phù hợp."
        },
        {
        "type": "text",
        "value": "Tư vấn hỗ trợ doanh nghiệp"
        },
        {
        "type": "text",
        "value": "TP Hồ Chí Minh hỗ trợ doanh nghiệp du lịch vay vốn với lãi suất ưu đãi cho đầu tư công nghệ, thiết bị và công trình, đồng thời chú trọng phát triển du lịch \"hấp dẫn - thông minh - bền vững\" và đẩy mạnh xúc tiến đầu tư vào các sản phẩm đa dạng. Ngành du lịch Thành phố có sự tăng trưởng mạnh mẽ, với nhiều lượt khách quốc tế và nội địa."
        },
        {
        "type": "text",
        "value": "Hỗ trợ xúc tiến đầu tư: Hỗ trợ vay vốn: Doanh nghiệp du lịch có thể nhận hỗ trợ lãi suất cho các khoản vay đầu tư công nghệ, thiết bị (hỗ trợ tối đa 85%) và xây dựng công trình (hỗ trợ tối đa 70%) từ ngân sách Thành phố."
        },
        {
        "type": "text",
        "value": "Mở rộng đối tượng thụ hưởng chính sách: Sở Du lịch TP Hồ Chí Minh đang rà soát và kiến nghị mở rộng các đối tượng hưởng lợi từ chính sách để bảo đảm triển khai hiệu quả trong bối cảnh mới của Thành phố."
        },
        {
        "type": "text",
        "value": "Định vị du lịch mới: Thành phố định hướng phát triển theo mô hình \"hấp dẫn - thông minh - bền vững\", khai thác lợi thế đa trung tâm, đa sản phẩm."
        },
        {
        "type": "text",
        "value": "Phát triển du lịch: Sản phẩm du lịch đa dạng: TP Hồ Chí Minh tập trung phát triển các loại hình du lịch từ hội nghị, văn hóa, nghỉ dưỡng ven đô đến sinh thái và nông nghiệp công nghệ cao."
        },
        {
        "type": "text",
        "value": "TP Hồ Chí Minh đã chủ động thực hiện nhiều hoạt động xúc tiến đầu tư, thương mại, du lịch qua các hội chợ, hội thảo, triển lãm, cả trong nước và quốc tế. Những chủ đề như chuyển đổi số, du lịch bền vững, kinh tế xanh đang được ưu tiên, phù hợp xu thế toàn cầu. Qua đó góp phần tăng trưởng 2 con số cho TP Hồ Chí Minh trong những tháng cuối năm 2025."
        },
        {
        "type": "text",
        "value": "Tác giả :Kim Dung"
        }
      ],
      en: [
        {
        "type": "text",
        "value": "Ho Chi Minh City's total tourism revenue for the first nine months of 2025 is estimated at nearly 190,000 billion VND. The number of international tourists to Ho Chi Minh City is estimated at 5,883,285, reaching 69.2% of the 2025 plan."
        },
        {
        "type": "text",
        "value": "The number of domestic tourists to Ho Chi Minh City is estimated at 29,179,468, reaching 64.8% of the 2025 plan; compared to the 2025 target, it is 58.4%. Total tourism revenue for the first nine months of 2025 is estimated at 184,629 billion VND, reaching 71% of the 2025 plan; compared to the 2025 target, it is 63.7%."
        },
        {
        "type": "text",
        "value": "In the post-merger period (from July 1st to the present), the (new) Ho Chi Minh City was established on the basis of merging three localities: Ba Ria - Vung Tau province, Binh Duong province, and Ho Chi Minh City."
        },
        {
        "type": "text",
        "value": "In this new context, Ho Chi Minh City is facing many opportunities to break through and compete with cities in the region and around the world; with the goal of double-digit economic growth, tourism is identified as one of the important growth drivers, contributing to the orientation of building the city into an \"international megacity\"."
        },
        {
        "type": "text",
        "value": "The Department of Tourism, in coordination with the Economic and Budget Committee of the City People's Council, organized a meeting in Vung Tau City to discuss the current situation, opportunities, challenges, and propose support policies and solutions for tourism development. This included finalizing advisory and policy work and implementing strategic tasks in a coordinated manner. The report identifies Ho Chi Minh City in the new phase as having advantages in: tourism resources, tourism products, human resources, tourism service infrastructure, and transportation infrastructure."
        },
        {
        "type": "text",
        "value": "The development of tourism products in Ho Chi Minh City has been implemented synchronously, diversely, and has yielded many positive results, contributing to enriching the city's tourism product ecosystem. The Department of Tourism has focused on coordinating with departments, agencies, localities, and businesses to conduct surveys, design, and develop many distinctive tourism routes, destinations, and products."
        },
        {
        "type": "text",
        "value": "In the post-merger phase, Ho Chi Minh City will continue to conduct surveys, investigations, and assessments of tourism resources to reposition products and build directions for the development of new products. The development of unique tourism products will be carried out according to each locality after clear management decentralization is established. Focus on developing night-time tourism linked to piloting public-private partnership mechanisms in the cultural and sports sectors, such as night-time museum tours and art performances. Review and propose amendments to regulations on the conditions for the formation and operation of inland waterways and passenger ports to encourage businesses to invest in and effectively exploit seaports, waterways, and piers to develop waterway tourism."
        },
        {
        "type": "text",
        "value": "According to assessments, in the first nine months of 2025, the city's tourism industry continued its strong recovery and stable growth. The city maintained its position as a major tourism center of the country, playing a leading role in attracting a significant increase in international and domestic tourists, especially in short-stay tours, weekend trips, and river tourism. Hotel occupancy rates increased significantly."
        },
        {
          type: 'image',
          src: '/Picture10.png',
          caption: '',
        },
        {
        "type": "text",
        "value": "Promotion and advertising of the city's tourism image were intensified, and tourism communication on various digital platforms achieved positive results. Successfully organizing numerous events, especially the ITE HCMC 2025 International Tourism Fair and the 12th General Assembly of the Tourism Promotion Organization of Global Cities (TPO 2025), attracted a large number of international visitors, partners, businesses, and the press. These events contributed to enhancing Ho Chi Minh City's position on the international tourism map and affirming its role as the country's tourism hub."
        },
        {
        "type": "text",
        "value": "Tourism stimulus campaigns for 2025, with many promotional packages launched, leveraged online platforms and social media to increase brand awareness of the destination. A clear direction in product and market development was established. Continued investment in strategic product lines: river tourism, medical tourism, MICE (Meetings, Incentives, Conferences, and Exhibitions), heritage - culture - history, night tourism, green tourism, etc."
        },
        {
        "type": "text",
        "value": "International partnerships, inter-regional cooperation, and communication were implemented synchronously, creating a positive effect. Targeting potential and emerging international markets such as India, the Middle East, and Northern Europe... through promoting cooperation with consulates general, airlines, and foreign businesses."
        },
        {
        "type": "text",
        "value": "Innovating in state management and digital transformation; advising and effectively implementing management in the context of the transition to a two-tiered government model and the consolidation of administrative units. Strengthening digitalization, administrative reform, building a tourism industry database, and supporting businesses in registering and updating information promptly."
        },
        {
        "type": "text",
        "value": "To promote double-digit economic growth in the area, Ho Chi Minh City, in the last months of 2025, aims to achieve 8,500,000 to 10,000,000 international visitors (the initial target was 8.5 million visitors); domestic tourists aim to reach approximately 45,000,000 to 50,000,000 visitors (the previous target was 45 million visitors). Total tourism revenue reached approximately 290,000 billion VND (previous target was 260,000 billion VND)."
        },
        {
        "type": "text",
        "value": "Ho Chi Minh City hosted the General Assembly of the Global Cities Tourism Promotion Organization for the first time."
        },
        {
        "type": "text",
        "value": "With this event, Ho Chi Minh City affirmed its role as a central hub for linking and promoting regional tourism development, aiming towards a leading industry.Modern and Sustainable Tourism…"
        },
        {
        "type": "text",
        "value": "On September 3rd, the 12th General Assembly of the Tourism Promotion Organization for Global Cities (TPO) took place in Ho Chi Minh City. For the first time in Vietnam, Ho Chi Minh City had the honor of hosting the TPO General Assembly within the framework of the Ho Chi Minh City International Tourism Fair (ITE HCMC)."
        },
        {
        "type": "text",
        "value": "Hosting the TPO General Assembly is a strategic move that \"hits multiple targets with one arrow,\" simultaneously enhancing international standing and creating momentum for economic development, tourism, and innovation."
        },
        {
        "type": "text",
        "value": "With the theme “Shaping the Future of Tourism: Towards Digital Transformation and Green Transformation,” the event served as an important forum for members to discuss two inevitable trends in modern tourism: digital transformation and sustainable development."
        },
        {
        "type": "text",
        "value": "Chairman of the Ho Chi Minh City People's Committee, Nguyen Van Duoc, emphasized: “As one of the founding cities and the only city in Vietnam to hold the position of a member of the TPO Executive Board, over the past two decades, Ho Chi Minh City has always been proud to actively contribute to the organization's activities, constantly promoting linkages and cooperation in tourism development among members. At the same time, it affirms its central role in the region's tourism development.”"
        },
        {
        "type": "text",
        "value": "According to Chairman Nguyen Van Duoc, hosting this TPO General Assembly is a significant milestone, clearly demonstrating Ho Chi Minh City's responsibility and commitment to promoting the region's tourism development in a comprehensive, innovative, and sustainable manner."
        },
        {
        "type": "text",
        "value": "The 2025 TPO General Assembly is a crucial agenda for the tourism industry, facing major challenges such as climate change, the demand for personalized tourist experiences, and the explosion of technology and artificial intelligence."
        },
        {
        "type": "text",
        "value": "Digital transformation and green transformation are not just trends, but vital elements for the sustainable development of tourism. Digital transformation enhances management, improves the visitor experience, and expands markets; while green transformation reduces environmental impact, protects resources, and preserves cultural identity. These are two strategic pillars shaping the structure, identity, and development direction of the industry, in line with the 17 Sustainable Development Goals of the United Nations."
        },
        {
        "type": "text",
        "value": "In addition, thematic workshops, high-level forums, and bilateral conferences will focus on solutions for applying digital technology and developing sustainable tourism, helping Ho Chi Minh City update trends and build appropriate tourism strategies."
        },
        {
        "type": "text",
        "value": "Business Support and Consulting"
        },
        {
        "type": "text",
        "value": "Ho Chi Minh City supports tourism businesses with preferential interest rates for investment in technology, equipment, and infrastructure, while focusing on developing \"attractive - smart - sustainable\" tourism and promoting investment in diverse products. The city's tourism industry is experiencing strong growth, with a large number of international and domestic visitors."
        },
        {
        "type": "text",
        "value": "Investment Promotion Support: Loan Support: Tourism businesses can receive interest rate subsidies for loans to invest in technology and equipment (up to 85% subsidy) and construction projects (up to 70% subsidy) from the city budget."
        },
        {
        "type": "text",
        "value": "Expanding the Beneficiaries of the Policy: The Ho Chi Minh City Department of Tourism is reviewing and proposing to expand the beneficiaries of the policy to ensure effective implementation in the city's new context."
        },
        {
        "type": "text",
        "value": "New Tourism Positioning: The city is orienting its development towards an \"attractive - smart - sustainable\" model, exploiting the advantages of multiple centers and multiple products."
        },
        {
        "type": "text",
        "value": "Tourism Development: Diverse Tourism Products: Ho Chi Minh City focuses on developing various types of tourism, from conferences, cultural tourism, suburban resorts to ecotourism and high-tech agriculture."
        },
        {
        "type": "text",
        "value": "Ho Chi Minh City has proactively implemented numerous activities to promote investment, trade, and tourism through fairs, seminars, and exhibitions, both domestically and internationally. Topics such as digital transformation, sustainable tourism, and the green economy are prioritized, aligning with global trends. This has contributed to double-digit growth for Ho Chi Minh City in the final months of 2025."
        },
        {
        "type": "text",
        "value": "Author : Kim Dung"
        }
      ],
    },
    date: '10/10/2025 09:31:32',
    category: 'events',
  },
  {
    id: 8,
    image: '/Picture11.png',
    title: {
      vi: 'THÀNH LẬP KHU THƯƠNG MẠI TỰ DO TP. HỒ CHÍ MINH VỚI LOẠT CHÍNH SÁCH ĐỘT PHÁ HÚT VỐN ĐẦU TƯ',
      en: "ESTABLISHING A FREE TRADE ZONE IN HO CHI MINH CITY WITH A SERIES OF BREAKTHROUGH POLICIES TO ATTRACT INVESTMENT",
    },
    excerpt: {
      vi: 'Quốc hội cho phép TP. Hồ Chí Minh thành lập Khu thương mại tự do với hệ thống...',
      en: "The National Assembly has authorized Ho Chi Minh City to establish...",
    },
    content: {
      vi: [
        {
        "type": "text",
        "value": "Quốc hội cho phép TP. Hồ Chí Minh thành lập Khu thương mại tự do với hệ thống cơ chế, chính sách vượt trội nhằm tạo cực tăng trưởng mới và thu hút mạnh mẽ nhà đầu tư chiến lược. Cùng với đó, Thành phố cũng được trao thêm thẩm quyền trong quản lý đầu tư, quy hoạch, phát triển mô hình TOD và đơn giản hóa thủ tục."
        },
        {
        "type": "text",
        "value": "Được đầu tư xây dựng kết hợp"
        },
        {
        "type": "text",
        "value": "Quốc hội vừa thông qua Nghị quyết của Quốc hội sửa đổi, bổ sung một số điều Nghị quyết số 98/2023/QH15 về thí điểm một số cơ chế, chính sách đặc thù phát triển TP. Hồ Chí Minh với đa số đại biểu tham gia biểu quyết tán thành."
        },
        {
        "type": "text",
        "value": "Nghị quyết quy định thí điểm một số cơ chế, chính sách đặc thù phát triển TP. Hồ Chí Minh về quản lý đầu tư; tài chính, ngân sách nhà nước; quản lý đô thị, tài nguyên, môi trường; danh mục ưu tiên thu hút nhà đầu tư chiến lược; thành lập và hoạt động của Khu thương mại tự do TP. Hồ Chí Minh; quản lý khoa học và công nghệ, đổi mới sáng tạo; tổ chức bộ máy của chính quyền Thành phố."
        },
        {
        "type": "text",
        "value": "Theo Nghị quyết, tại nhà ga đường sắt, khu tập kết bảo dưỡng, sửa chữa tàu và vùng phụ cận các nút giao thông dọc tuyến đường Vành đai 3 được Ủy ban nhân dân Thành phố xác định phát triển theo mô hình TOD, Ủy ban nhân dân Thành phố được quyết định việc đầu tư xây dựng kết hợp với xây dựng nhà ở, xây dựng công trình thương mại dịch vụ, công trình sự nghiệp, công trình công cộng. Ủy ban nhân dân Thành phố được quyết định các chỉ tiêu kinh tế kỹ thuật, chỉ tiêu sử dụng đất quy hoạch khác với quy định tại quy chuẩn kỹ thuật quốc gia về quy hoạch đô thị và nông thôn nhưng phải bảo đảm đáp ứng về hệ thống hạ tầng kỹ thuật, hạ tầng xã hội và quy định về an toàn môi trường đối với khu dân cư theo quy định của pháp luật"
        },
        {
        "type": "text",
        "value": "Trước đó, báo cáo tiếp thu, chỉnh lý dự thảo Nghị quyết, Bộ trưởng Bộ Tài chính Nguyễn Văn Thắng đã làm rõ việc rà soát về kết hợp nhà ở tại các dự án TOD bảo đảm đáp ứng về hệ thống hạ tầng kỹ thuật, hạ tầng xã hội. Theo Bộ trưởng, dự thảo Nghị quyết đã xác định các công trình này phải đảm bảo đáp ứng về hệ thống hạ tầng kỹ thuật, hạ tầng xã hội và quy định về an toàn môi trường đối với khu dân cư theo quy định của pháp luật. \"Đây là quan điểm xuyên suốt và hoàn toàn phù hợp đối với TP. Hồ Chí Minh. Với kinh nghiệm về quản lý quy hoạch và ban hành kịp thời các tiêu chí, tiêu chuẩn phát triển các dự án TOD, Thành phố sẽ có đủ công cụ để kiểm soát\", Bộ trưởng nêu."
        },
        {
        "type": "text",
        "value": "Liên quan đến hợp nhất quy hoạch tỉnh và quy hoạch chung thành phố, Bộ trưởng cho hay, Chính phủ tiếp thu ý kiến và bổ sung quy định trên địa bàn Thành phố chỉ lập một quy hoạch tổng thể Thành phố, đồng thời phân cấp cho Ủy ban nhân dân Thành phố phê duyệt điều chỉnh quy hoạch."
        },
        {
        "type": "text",
        "value": "Tạo điều kiện thu hút đầu tư"
        },
        {
        "type": "text",
        "value": "Về nội dung chỉ định nguyên tắc đối với danh mục nhà đầu tư chiến lược, Chính phủ đề xuất quy định cụ thể danh mục thu hút nhà đầu tư chiến lược tại dự thảo Nghị quyết nhằm bảo đảm triển khai ngay khi Nghị quyết được thông qua, đáp ứng yêu cầu cấp bách trong thu hút đầu tư của Thành phố. Đối với các dự án phát sinh trong quá trình thực hiện Nghị quyết số 98 hiện hành, giao thẩm quyền cho Hội đồng nhân dân Thành phố được quyết định điều chỉnh bổ sung danh mục và báo cáo Chính phủ để báo cáo Ủy ban thường vụ Quốc hội tại kỳ họp gần nhất."
        },
        {
        "type": "text",
        "value": "Theo Bộ trưởng Bộ Tài chính Nguyễn Văn Thắng, TP. Hồ Chí Minh đang định hướng trở thành siêu đô thị động lực, trung tâm kinh tế - tài chính hàng đầu Việt Nam. Thành phố cần khẳng định cam kết đối với nhà đầu tư về đơn giản hóa thủ tục đầu tư nhằm thu hút mạnh mẽ dòng vốn quốc tế, cạnh tranh được với các nước trong khu vực."
        },
        {
        "type": "text",
        "value": "Do đó, việc áp dụng thủ tục đầu tư đặc biệt là hiện thực hóa tinh thần Nghị quyết số 66 của Bộ Chính trị về phân cấp, phân quyền tối đa theo phương châm địa phương quyết, địa phương làm, địa phương chịu trách nhiệm, tạo động lực phát triển mới để TP. Hồ Chí Minh đạt mục tiêu tăng trưởng 2 con số trong giai đoạn tới."
        },
        {
        "type": "text",
        "value": "Bộ trưởng cũng thông tin về quy định khu thương mại tự do. Theo đó, nội dung các chính sách trong khu thương mại tự do đã được thiết kế mang tính vượt trội, đột phá để thu hút đầu tư, bảo đảm tính tương đồng giữa các khu thương mại tự do tại ba thành phố: Hồ Chí Minh, Đà Nẵng và Hải Phòng, tạo ra sự liên kết cực tăng trưởng, lan tỏa, đóng góp vào mục tiêu phát triển chung của cả nước."
        },
        {
        "type": "text",
        "value": "Ngoài ra, Chính phủ đã rà soát, đề xuất bãi bỏ các chính sách quy định tại Nghị quyết số 98 đã được luật hóa, không còn vượt trội so với quy định hiện hành và lược bỏ các chính sách đã được quy định tại các dự thảo luật, nghị quyết trình Quốc hội thông qua tại kỳ họp thứ 10."
        },
        {
        "type": "text",
        "value": "Theo quy định tại Nghị quyết, trừ các dự án đầu tư xây dựng nhà ở thương mại, Chủ tịch Ủy ban nhân dân Thành phố được giao đất, cho thuê đất không đấu giá quyền sử dụng đất, không đấu thầu lựa chọn nhà đầu tư thực hiện dự án có sử dụng đất đối với dự án đầu tư trong Khu thương mại tự do."
        },
        {
        "type": "text",
        "value": "Nghị quyết cũng quy định giảm 50% thuế thu nhập cá nhân trong 10 năm cho chuyên gia, nhà khoa học, người có tài năng, nhà quản lý, người lao động có trình độ cao có thu nhập từ tiền lương, tiền công phát sinh do thực hiện công việc tại Khu thương mại tự do. Mức ưu đãi, thời gian miễn, giảm tiền thuê đất, thuê mặt nước đối với dự án đầu tư xây dựng và kinh doanh kết cấu hạ tầng các khu chức năng thuộc Khu thương mại tự do được áp dụng như dự án đầu tư xây dựng và kinh doanh kết cấu hạ tầng các khu chức năng trong khu kinh tế..."
        },
        {
        "type": "text",
        "value": "tác giả :Trần Huyền"
        }
      ],
      en: [
        {
        "type": "text",
        "value": "The National Assembly has authorized Ho Chi Minh City to establish a Free Trade Zone with a superior system of mechanisms and policies to create a new growth pole and strongly attract strategic investors. Along with this, the city has also been granted additional authority in investment management, planning, development of the TOD (Transit-Oriented Development) model, and simplification of procedures."
        },
        {
        "type": "text",
        "value": "Investment and construction combined"
        },
        {
        "type": "text",
        "value": "The National Assembly recently passed a Resolution amending and supplementing several articles of Resolution No. 98/2023/QH15 on piloting some specific mechanisms and policies for the development of Ho Chi Minh City, with a majority of participating delegates voting in favor."
        },
        {
        "type": "text",
        "value": "The Resolution stipulates the piloting of some specific mechanisms and policies for the development of Ho Chi Minh City regarding investment management; finance, state budget; urban management, resources, and environment; priority list for attracting strategic investors; establishment and operation of the Ho Chi Minh City Free Trade Zone; Management of science and technology, innovation; organization of the city government's apparatus."
        },
        {
        "type": "text",
        "value": "According to the Resolution, at the railway station, the train maintenance and repair area and the surrounding areas of traffic junctions along the Ring Road 3, the City People's Committee has identified development according to the TOD model. The City People's Committee is authorized to decide on investment in construction combined with the construction of housing, commercial and service facilities, public works, and public facilities. The People's Committee of the City is authorized to decide on economic and technical indicators and land use planning indicators that differ from the regulations in the national technical standards on urban and rural planning, but must ensure compliance with technical infrastructure, social infrastructure, and environmental safety regulations for residential areas as prescribed by law."
        },
        {
        "type": "text",
        "value": "Previously, in the report on the acceptance and revision of the draft Resolution, Minister of Finance Nguyen Van Thang clarified the review of the integration of housing in TOD projects to ensure compliance with technical and social infrastructure. According to the Minister, the draft Resolution has determined that these projects must ensure compliance with technical infrastructure, social infrastructure, and environmental safety regulations for residential areas as prescribed by law. \"This is a consistent and entirely appropriate viewpoint for Ho Chi Minh City. With experience in planning management and the timely issuance of criteria and standards for TOD (Transit-Oriented Development) projects, the City will have sufficient tools to control it,\" the Minister stated."
        },
        {
        "type": "text",
        "value": "Regarding the consolidation of provincial and city master plans, the Minister said that the Government has incorporated feedback and added regulations stipulating that only one city master plan should be established within the city's jurisdiction, while decentralizing the authority to approve plan adjustments to the City People's Committee."
        },
        {
        "type": "text",
        "value": "Creating conditions to attract investment"
        },
        {
        "type": "text",
        "value": "Regarding the designation of principles for the list of strategic investors, the Government proposes specifying the list of strategic investors to be attracted in the draft Resolution to ensure immediate implementation upon the Resolution's adoption, meeting the urgent requirements for attracting investment to the City. For projects arising during the implementation of the current Resolution No. 98, the authority is delegated to the City People's Council to decide on adjustments and additions to the list and report to the Government for submission to the National Assembly Standing Committee at the nearest session."
        },
        {
        "type": "text",
        "value": "According to Minister of Finance Nguyen Van Thang, Ho Chi Minh City is aiming to become a dynamic megacity, a leading economic and financial center in Vietnam. The city needs to reaffirm its commitment to investors regarding the simplification of investment procedures to strongly attract international capital and compete with countries in the region."
        },
        {
        "type": "text",
        "value": "Therefore, the application of special investment procedures is to realize the spirit of Resolution No. 66 of the Politburo on maximum decentralization and delegation of power according to the principle of \"local authorities decide, local authorities do, local authorities are responsible,\" creating new development momentum for Ho Chi Minh City to achieve double-digit growth in the coming period."
        },
        {
        "type": "text",
        "value": "The Minister also provided information on regulations for free trade zones. Accordingly, the content of policies within the free trade zones has been designed to be superior and groundbreaking to attract investment, ensuring consistency between free trade zones in the three cities: Ho Chi Minh City, Da Nang, and Hai Phong, creating a growth-generating linkage that spreads and contributes to the overall development goals of the country."
        },
        {
        "type": "text",
        "value": "In addition, the Government has reviewed and proposed the repeal of policies stipulated in Resolution No. 98 that have been legalized and are no longer superior to current regulations, and has removed policies already stipulated in draft laws and resolutions submitted to the National Assembly for approval at the 10th session."
        },
        {
        "type": "text",
        "value": "According to the Resolution, except for commercial housing construction investment projects, the Chairman of the People's Committee of the City is authorized to allocate land and lease land without auctioning land use rights or bidding to select investors for projects using land within the Free Trade Zone."
        },
        {
        "type": "text",
        "value": "The resolution also stipulates a 50% reduction in personal income tax for 10 years for experts, scientists, talented individuals, managers, and highly skilled workers who earn income from salaries and wages.Due to carrying out work in the Free Trade Zone, the preferential rates and periods of exemption or reduction of land and water surface lease fees for investment projects in the construction and operation of infrastructure in functional areas within the Free Trade Zone are applied as in investment projects in the construction and operation of infrastructure in functional areas within economic zones..."
        },
        {
        "type": "text",
        "value": "Author : Tran Huyen"
        }
      ],
    },
    date: '12:00 | 11/12/2025',
    category: 'policy',
  },
  {
    id: 9,
    image: '/Picture12.png',
    title: {
      vi: 'CHÍNH PHỦ ĐỀ XUẤT 4 NHÓM GIẢI PHÁP THU HÚT VỐN ĐẦU TƯ CHO TP. HỒ CHÍ MINH',
      en: "GOVERNMENT PROPOSES 4 GROUPS OF SOLUTIONS TO ATTRACT INVESTMENT TO HO CHI MINH CITY",
    },
    excerpt: {
      vi: 'Ngày 12/12, Trung tâm Xúc tiến thương mại và Đầu tư Thành phố...',
      en: "On December 12th, the City's Trade and Investment Promotion Center...",
    },
    content: {
      vi: [
        {
        "type": "text",
        "value": "Chính phủ trình đề xuất mở rộng ưu đãi cho khu thương mại tự do nhằm tạo dư địa thu hút dòng vốn đầu tư chất lượng cao vào TP.Hồ Chí Minh. Việc hoàn thiện cơ chế đặc thù sẽ giúp nâng năng lực cạnh tranh của đô thị đặc biệt, đồng thời mở ra không gian phát triển mới cho các hoạt động chiến lược…"
        },
        {
        "type": "text",
        "value": "Chiều ngày 3/12, tiếp tục Kỳ họp thứ 10, Quốc hội khóa XV, các đại biểu Quốc hội nghe Tờ trình của Chính phủ và Báo cáo thẩm tra của Ủy ban Kinh tế và Tài chính về Dự thảo Nghị quyết sửa đổi, bổ sung một số điều Nghị quyết số 98/2023/QH15 về thí điểm một số cơ chế, chính sách đặc thù phát triển TP.Hồ Chí Minh."
        },
        {
        "type": "text",
        "value": "Trình bày Tờ trình của Chính phủ, Phó Thủ tướng Chính phủ Bùi Thanh Sơn cho biết TP. Hồ Chí Minh cần nguồn lực khoảng 1,8 triệu tỷ đồng để đạt mục tiêu tăng trưởng hai con số trong giai đoạn 5 năm tới, trong khi khả năng hiện có mới chỉ đáp ứng khoảng 30% nhu cầu vốn."
        },
        {
        "type": "text",
        "value": "“Việc bổ sung các giải pháp đột phá ngoài luật vào Nghị quyết số 98/2023/QH15 là cần thiết để thu hút nguồn lực đầu tư và thúc đẩy phát triển, hướng tới xây dựng TP. Hồ Chí Minh thành siêu đô thị lớn nhất tại Đông Nam Á”, Phó Thủ tướng Chính phủ nhấn mạnh."
        },
        {
        "type": "text",
        "value": "Theo đó, Dự thảo Nghị quyết sửa đổi, bổ sung 6 điều hiện hành; đồng thời bổ sung một điều mới là Điều 7a tập trung vào bốn nhóm chính sách:"
        },
        {
        "type": "text",
        "value": "Thứ nhất,  Dự thảo cho phép Hội đồng nhân dân Thành phố sử dụng ngân sách địa phương để bồi thường, hỗ trợ tái định cư, tạo quỹ đất đối giá hoặc thanh toán cho nhà đầu tư theo hợp đồng BT (xây dựng - chuyển giao)."
        },
        {
        "type": "text",
        "value": "Thứ hai, cho phép Thành phố sử dụng 100% khoản thu từ quỹ đất phát triển đô thị theo định hướng giao thông công cộng (TOD) để đầu tư trực tiếp cho dự án đường sắt địa phương và các dự án giao thông thuộc tuyến TOD."
        },
        {
        "type": "text",
        "value": "Thứ ba, phân cấp cho Ủy ban nhân dân Thành phố được quyết định việc đầu tư xây dựng kết hợp nhà ở, thương mại dịch vụ tại các khu ga, khu bảo dưỡng tàu và vùng phụ cận . Đồng thời, quyết định các chỉ tiêu kinh tế kỹ thuật và chỉ tiêu sử dụng đất quy hoạch tại những khu vực này khác với quy chuẩn kỹ thuật quốc gia."
        },
        {
        "type": "text",
        "value": "Thứ tư, mở rộng phạm vi áp dụng thủ tục đầu tư đặc biệt cho các dự án trong các khu chức năng, nhằm rút ngắn thời gian thực hiện."
        },
        {
        "type": "text",
        "value": "Đối với mô hình khu thương mại tự do, Điều 7a được bổ sung để thiết lập khung pháp lý đầy đủ, tương tự với cơ chế đang áp dụng tại Hải Phòng và Đà Nẵng."
        },
        {
        "type": "text",
        "value": "Theo đó, Ủy ban nhân dân Thành phố được trao thẩm quyền quyết định thành lập, mở rộng hoặc điều chỉnh ranh giới khu thương mại tự do, Phó Thủ tướng Chính phủ Bùi Thanh Sơn cho biết."
        },
        {
        "type": "text",
        "value": "Song song đó, Dự thảo cũng mở rộng thẩm quyền thu hồi đất cho các dự án phục vụ phát triển kinh tế xã hội, lợi ích quốc gia và công cộng, bao gồm các dự án trong khu thương mại tự do và dự án thu hút nhà đầu tư chiến lược tại Côn Đảo"
        },
        {
        "type": "text",
        "value": "Liên quan tới thu hút nhà đầu tư chiến lược,  phạm vi ngành nghề ưu tiên được mở rộng, chú trọng những lĩnh vực có tác động lan tỏa lớn như hạ tầng, đô thị, du lịch, văn hóa – thể thao, y tế, năng lượng sạch, logistics và bảo vệ môi trường, trong đó có cả các dự án tại Côn Đảo."
        },
        {
        "type": "text",
        "value": "Ngoài ra, các dự án hạ tầng tại địa bàn đặc biệt khó khăn được hưởng ưu đãi thuế thu nhập doanh nghiệp và ưu đãi cho hoạt động nghiên cứu, phát triển. Đồng thời, dự thảo cho phép cơ quan có thẩm quyền đồng thời chấp thuận chủ trương đầu tư và nhà đầu tư nếu chỉ có một nhà đầu tư đáp ứng điều kiện."
        },
        {
        "type": "text",
        "value": "Thẩm tra dự thảo Nghị quyết, Chủ nhiệm Ủy ban Kinh tế và Tài chính Phan Văn Mãi cho biết cơ quan thẩm tra cơ bản đồng thuận với chủ trương sửa đổi nhưng vẫn lưu ý một số nội dung cần được làm rõ trước khi hoàn thiện."
        },
        {
        "type": "text",
        "value": "Theo đánh giá của Ủy ban, phạm vi sửa đổi trong dự thảo hiện còn khá rộng, dàn trải và có những nội dung trùng lặp với hệ thống pháp luật hiện hành hoặc các dự thảo văn bản pháp luật khác."
        },
        {
        "type": "text",
        "value": "Bên cạnh đó, nhiều nội dung có tác động trực tiếp đến ngân sách nhà nước, quản lý đất đai, tài sản công và đời sống người dân. Vì vậy, cơ quan chủ trì soạn thảo cần rà soát, đánh giá kỹ lưỡng hơn nhằm bảo đảm tính khả thi và phù hợp, Chủ nhiệm Ủy ban Kinh tế và Tài chính nhấn mạnh."
        },
        {
        "type": "text",
        "value": "Về thanh toán dự án thực hiện theo hợp đồng BT, đa số ý kiến cho rằng quy định bổ sung đối với việc thanh toán cho nhà đầu tư dự án đường sắt theo loại hợp đồng này đang thu hẹp phạm vi áp dụng hoặc trùng với pháp luật hiện hành, từ đó có thể hạn chế sự chủ động của địa phương. Do đó, đề nghị cơ quan soạn thảo giải trình rõ cơ sở thay đổi này."
        },
        {
        "type": "text",
        "value": "Liên quan đến sử dụng đất kết hợp, Chủ nhiệm Ủy ban Kinh tế và Tài chính Phan Văn Mãi cho biết pháp luật đất đai hiện hành chưa cho phép kết hợp mục đích đất công cộng với đất ở. Do đó, cần rà soát và đề xuất sửa đổi mang tính áp dụng chung trên phạm vi cả nước nhằm bảo đảm sự đồng bộ của hệ thống pháp luật."
        },
        {
        "type": "text",
        "value": "Đối với chính sách thu hồi đất, Ủy ban nhận định đây là vấn đề nhạy cảm, liên quan trực tiếp đến quyền và lợi ích hợp pháp của người sử dụng đất. Việc bổ sung thêm các trường hợp thu hồi đất ngoài quy định của Luật Đất đai cần được cân nhắc kỹ lưỡng để hạn chế phát sinh vướng mắc trong quá trình triển khai."
        },
        {
        "type": "text",
        "value": "Riêng đề xuất thành lập khu thương mại tự do, Ủy ban Kinh tế và Tài chính cùng Thường trực các cơ quan của Quốc hội bày tỏ sự đồng thuận, đồng thời nhất trí áp dụng các cơ chế và chính sách tương tự mô hình khu thương mại tự do đang được vận hành tại Hải Phòng."
        },
        {
        "type": "text",
        "value": "Tác giả : Lan Nhi"
        }
      ],
      en: [
        {
        "type": "text",
        "value": "The government has submitted a proposal to expand incentives for free trade zones to create room for attracting high-quality investment capital into Ho Chi Minh City. Completing the special mechanisms will help enhance the competitiveness of this special urban area, while also opening up new development space for strategic activities…"
        },
        {
        "type": "text",
        "value": "On the afternoon of December 3rd, continuing the 10th session of the 15th National Assembly, National Assembly deputies listened to the Government's presentation and the Economic and Financial Committee's verification report on the draft Resolution amending and supplementing several articles of Resolution No. 98/2023/QH15 on piloting some special mechanisms and policies for the development of Ho Chi Minh City."
        },
        {
        "type": "text",
        "value": "Presenting the Government's presentation, Deputy Prime Minister Bui Thanh Son stated that Ho Chi Minh City needs approximately 1.8 trillion VND to achieve double-digit growth targets in the next five years, while current resources only meet about 30% of the capital needs. “Adding groundbreaking solutions beyond the law to Resolution No. 98/2023/QH15 is necessary to attract investment resources and promote development, aiming to build Ho Chi Minh City into the largest megacity in Southeast Asia,” the Deputy Prime Minister emphasized."
        },
        {
        "type": "text",
        "value": "Accordingly, the draft Resolution amends and supplements six existing articles; and adds a new article, Article 7a, focusing on four main policy groups:"
        },
        {
        "type": "text",
        "value": "Firstly, the draft allows the City People's Council to use local budget funds to compensate, support resettlement, create land funds for reciprocal exchange, or pay investors under BT (build-transfer) contracts."
        },
        {
        "type": "text",
        "value": "Secondly, it allows the City to use 100% of the revenue from urban development land funds under the Public Transport Orientation (TOD) to directly invest in local railway projects and transportation projects under TOD routes."
        },
        {
        "type": "text",
        "value": "Third, the authority to decide on investment in the construction of combined housing, commercial and service facilities in train stations, train maintenance areas, and surrounding areas is delegated to the City People's Committee. Simultaneously, the authority to determine economic and technical indicators and land use planning indicators in these areas that differ from national technical standards is also granted."
        },
        {
        "type": "text",
        "value": "Fourth, the scope of special investment procedures is expanded to projects within functional zones, aiming to shorten implementation time."
        },
        {
        "type": "text",
        "value": "Regarding the free trade zone model, Article 7a is added to establish a complete legal framework, similar to the mechanism currently applied in Hai Phong and Da Nang."
        },
        {
        "type": "text",
        "value": "Accordingly, the City People's Committee is granted the authority to decide on the establishment, expansion, or adjustment of the boundaries of free trade zones, Deputy Prime Minister Bui Thanh Son stated."
        },
        {
        "type": "text",
        "value": "Simultaneously, the draft also expands the authority to reclaim land for projects serving socio-economic development, national and public interests, including projects in free trade zones and projects attracting strategic investors in Con Dao."
        },
        {
        "type": "text",
        "value": "Regarding attracting strategic investors, the scope of priority sectors is expanded, focusing on areas with significant spillover effects such as infrastructure, urban development, tourism, culture and sports, healthcare, clean energy, logistics, and environmental protection, including projects in Con Dao."
        },
        {
        "type": "text",
        "value": "In addition, infrastructure projects in particularly difficult areas will enjoy preferential corporate income tax and incentives for research and development activities. At the same time, the draft allows the competent authority to simultaneously approve the investment policy and the investor if only one investor meets the conditions."
        },
        {
        "type": "text",
        "value": "Reviewing the draft Resolution, the Chairman of the Economic and Finance Committee, Phan Van Mai, stated that the review body generally agrees with the proposed amendments but still notes some points that need clarification before finalization."
        },
        {
        "type": "text",
        "value": "According to the Committee's assessment, the scope of amendments in the draft is still quite broad and scattered, with some content overlapping with the current legal system or other draft legal documents."
        },
        {
        "type": "text",
        "value": "In addition, many contents directly impact the state budget, land management, public assets, and people's lives. Therefore, the drafting agency needs to review and evaluate more thoroughly to ensure feasibility and appropriateness, the Chairman of the Economic and Finance Committee emphasized."
        },
        {
        "type": "text",
        "value": "Regarding payment for projects implemented under BT contracts, the majority of opinions suggest that the supplementary regulations on payment to investors in railway projects under this type of contract are narrowing the scope of application or overlapping with current laws, thereby potentially limiting the autonomy of localities. Therefore, the drafting agency is requested to clearly explain the basis for this change."
        },
        {
        "type": "text",
        "value": "Regarding combined land use, the Chairman of the Economic and Finance Committee, Phan Van Mai, stated that current land law does not allow the combination of public and residential land purposes. Therefore, a review and proposed amendments with nationwide applicability are needed to ensure the uniformity of the legal system."
        },
        {
        "type": "text",
        "value": "Regarding land acquisition policy, the Committee acknowledges that this is a sensitive issue, directly related to the legitimate rights and interests of land users. Adding cases of land acquisition beyond those stipulated in the Land Law needs careful consideration to minimize complications during implementation."
        },
        {
        "type": "text",
        "value": "Regarding the proposal to establish a free trade zone, the Committee...The Economic and Financial Committee and the Standing Committee of the National Assembly's agencies expressed their consensus and agreed to apply mechanisms and policies similar to the free trade zone model currently operating in Hai Phong."
        },
        {
        "type": "text",
        "value": "Author : Lan Nhi"
        }
      ],
    },
    date: '04/12/2025, 07:45',
    category: 'policy',
  },
  {
    id: 10,
    image: '/Picture13.png',
    title: {
      vi: '“ĐÒN BẨY” THỂ CHẾ ĐƯA THÀNH PHỐ HỒ CHÍ MINH CẤT CÁNH',
      en: "“INSTITUTIONAL LEVERAGE” DELIVERS HO CHI MINH CITY'S GROWTH",
    },
    excerpt: {
      vi: 'Nghị quyết 98 sửa đổi mở ra khuôn khổ pháp lý mới, đồng bộ và mạnh mẽ...',
      en: "Resolution 98, as amended, opens up a new, more comprehensive...",
    },
    content: {
      vi: [
        {
        "type": "text",
        "value": "Nghị quyết 98 sửa đổi mở ra khuôn khổ pháp lý mới, đồng bộ và mạnh mẽ hơn, đem đến cho Thành phố Hồ Chí Minh “chiếc áo mới” tương xứng với quy mô, tiềm lực của một siêu đô thị. Nhiều chuyên gia nhận định, đây là “đòn bẩy” thể chế giúp thành phố phát triển bứt phá trong thời gian tới."
        },
        {
        "type": "text",
        "value": "Sau hơn hai năm triển khai Nghị quyết 98 với 44 cơ chế, chính sách vượt trội, Thành phố Hồ Chí Minh đã có thêm động lực phục hồi và tăng trưởng mạnh mẽ sau đại dịch. Tuy vậy, khi thành phố bước vào giai đoạn phát triển với quy mô và tiềm lực lớn hơn nhiều sau hợp nhất địa giới, “chiếc áo thể chế” hiện nay đã trở nên chật hẹp, đòi hỏi một cơ chế mới tương xứng."
        },
        {
        "type": "text",
        "value": "Tại Kỳ họp thứ 10, Ủy ban Thường vụ Quốc hội đã thống nhất trình Quốc hội Nghị quyết 98 sửa đổi để tạo xung lực mới cho Thành phố Hồ Chí Minh. Chuyên gia kinh tế Lê Bá Chí Nhân nhận định, dự thảo Nghị quyết 98 sửa đổi đã mở ra nhiều cơ chế, chính sách theo hướng phân cấp, phân quyền mạnh hơn cho thành phố, nổi bật là mô hình khu thương mại tự do (FTZ) và phát triển đô thị theo TOD. Theo đó, Thành phố Hồ Chí Minh được trao thẩm quyền thành lập, mở rộng và điều chỉnh ranh giới FTZ; áp dụng ưu đãi thuế, giao dịch ngoại tệ; khai thác quỹ đất để huy động vốn đầu tư hạ tầng. Thành phố cũng được sử dụng 100% nguồn thu từ quỹ đất tại các dự án trong vùng phụ cận các nút giao (theo mô hình TOD) để ưu tiên đầu tư cho giao thông công cộng; được quyết định thu hồi đất phục vụ các dự án trong FTZ và các dự án chiến lược. Những cơ chế này tạo “không gian thể chế đặc biệt” nhằm thu hút dòng vốn chất lượng cao, phát triển trung tâm tài chính quốc tế và tháo gỡ nút thắt hạ tầng, qua đó giúp thành phố phát huy vai trò đầu tàu kinh tế."
        },
        {
        "type": "text",
        "value": "Nghị quyết Đại hội đảng bộ Thành phố Hồ Chí Minh lần thứ I nhiệm kỳ 2025-2030 đã đề ra mục tiêu tới năm 2045 sẽ ra nhập nhóm 100 thành phố có chất lượng sống tốt nhất thế giới, xứng tầm siêu đô thị quốc tế của Đông Nam Á, là trung tâm kinh tế, tài chính, du lịch, dịch vụ, giáo dục, y tế của châu Á, điểm đến hấp dẫn toàn cầu, kinh tế, văn hóa, xã hội phát triển đặc sắc, bền vững, chất lượng sống cao, hội nhập quốc tế sâu rộng. Nhiều chuyên gia cũng cho rằng, Nghị quyết số 98 sửa đổi không chỉ tháo gỡ những “điểm nghẽn” thể chế, mà còn là yêu cầu cấp thiết để nâng cao năng lực quản trị siêu đô thị và tạo điều kiện cho thành phố thực hiện hiệu quả mô hình chính quyền địa phương 2 cấp. Đây là “liều thuốc tăng tốc” mạnh mẽ, giúp Thành phố Hồ Chí Minh khơi thông các điểm nghẽn, khai thác tối đa vị thế đầu tàu kinh tế và hoàn toàn có thể đạt được những kết quả như kỳ vọng của Trung ương và cả nước."
        },
        {
        "type": "text",
        "value": "Giai đoạn 2026-2030, Thành phố Hồ Chí Minh đặt mục tiêu tốc độ tăng trưởng GRDP bình quân 10-11%; tổng vốn đấu tư xã hội bình quân 5 năm là 35-40% GRDP; kinh tế số chiếm 30-40% trong tổng GRDP. Đến năm 2030, GRDP bình quân người của thành phố đạt khoảng 14 nghìn đến 15 nghìn USD…"
        },
        {
        "type": "text",
        "value": "Tác giả : Vương Lê"
        }
    
      ],
      en: [
        {
        "type": "text",
        "value": "Resolution 98, as amended, opens up a new, more comprehensive and robust legal framework, giving Ho Chi Minh City a \"new look\" commensurate with the scale and potential of a megacity. Many experts believe this is an institutional \"lever\" that will help the city achieve breakthrough development in the coming period."
        },
        {
        "type": "text",
        "value": "After more than two years of implementing Resolution 98 with 44 outstanding mechanisms and policies, Ho Chi Minh City has gained further momentum for recovery and strong growth after the pandemic. However, as the city enters a phase of development with a much larger scale and potential after the administrative boundary consolidation, the current \"institutional framework\" has become too restrictive, requiring a new, more appropriate mechanism."
        },
        {
        "type": "text",
        "value": "At the 10th session, the Standing Committee of the National Assembly unanimously agreed to submit the amended Resolution 98 to the National Assembly to create new impetus for Ho Chi Minh City. Economist Le Ba Chi Nhan commented that the revised draft Resolution 98 has opened up many mechanisms and policies towards stronger decentralization and delegation of power to the city, most notably the Free Trade Zone (FTZ) model and the Transport for Development (TOD) model. Accordingly, Ho Chi Minh City is granted the authority to establish, expand, and adjust the boundaries of FTZs; apply tax incentives and foreign exchange transactions; and utilize land funds to mobilize investment capital for infrastructure. The city is also allowed to use 100% of revenue from land funds in projects in the vicinity of interchanges (according to the TOD model) to prioritize investment in public transportation; and to decide on land acquisition for projects within FTZs and strategic projects. These mechanisms create a “special institutional space” to attract high-quality capital flows, develop an international financial center, and remove infrastructure bottlenecks, thereby helping the city play its role as the leading economic engine."
        },
        {
        "type": "text",
        "value": "The Resolution of the First Congress of the Ho Chi Minh City Party Committee for the 2025-2030 term set the goal of joining the group of 100 cities with the best quality of life in the world by 2045, befitting its status as an international megacity of Southeast Asia, a center of economy, finance, tourism, services, education, and healthcare in Asia, a globally attractive destination, with distinctive and sustainable economic, cultural, and social development, a high quality of life, and deep international integration. Many experts also believe that Resolution No. 98, as amended, not only removes institutional \"bottlenecks\" but also addresses the urgent need to improve the governance capacity of the megacity and create conditions for the city to effectively implement the two-tiered local government model. This is a powerful \"accelerator\" that will help Ho Chi Minh City overcome bottlenecks, maximize its position as the leading economic hub, and fully achieve the results expected by the central government and the entire country."
        },
        {
        "type": "text",
        "value": "For the period 2026-2030, Ho Chi Minh City aims for an average GRDP growth rate of 10-11%; total social investment capital averaging 35-40% of GRDP over 5 years; and the digital economy accounting for 30-40% of total GRDP. By 2030, the city's per capita GRDP is expected to reach approximately 14,000 to 15,000 USD…"
        },
        {
        "type": "text",
        "value": "Author : Vuong Le"
        }
      ],
    },
    date: 'Thứ Sáu, ngày 12/12/2025 - 10:38',
    category: 'policy',
  },
];
