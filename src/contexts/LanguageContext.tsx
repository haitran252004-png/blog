import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'vi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  vi: {
    // Header
    header: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      news: 'Tin tức & Sự kiện',
      policies: 'Chính sách',
      opportunities: 'Cơ hội đầu tư',
      guide: 'Hướng dẫn đầu tư',
      database: 'Cơ sở dữ liệu',
      services: 'Dịch vụ',
      hcmc: 'Về TP.HCM',
      contact: 'Liên hệ',
      search: 'Tìm kiếm...',
    },
    // Hero
    hero: {
      title: 'Xúc Tiến Đầu Tư',
      subtitle: 'Thành Phố Hồ Chí Minh',
      description: 'Cổng thông tin đầu tư chính thức của Thành phố Hồ Chí Minh - Trung tâm kinh tế năng động nhất Việt Nam',
      cta: 'Khám phá cơ hội',
      ctaSecondary: 'Liên hệ ngay',
    },
    // Stats
    stats: {
      fdi: 'Vốn FDI thu hút',
      projects: 'Dự án đầu tư',
      countries: 'Quốc gia & Vùng lãnh thổ',
      growth: 'Tăng trưởng GDP',
      billion: 'tỷ USD',
      projectsPlus: 'dự án',
      countriesPlus: 'quốc gia',
      percent: '%',
    },
    // Sections
    sections: {
      latestNews: 'Tin tức mới nhất',
      viewAll: 'Xem tất cả',
      events: 'Sự kiện & Hoạt động',
      opportunities: 'Cơ hội đầu tư',
      investmentAreas: 'Lĩnh vực ưu tiên',
      whyHCMC: 'Tại sao chọn TP.HCM?',
      partners: 'Đối tác',
    },
    // Investment Areas
    areas: {
      technology: 'Công nghệ cao',
      technologyDesc: 'Trung tâm công nghệ thông tin, AI, bán dẫn hàng đầu Việt Nam',
      finance: 'Tài chính - Ngân hàng',
      financeDesc: 'Trung tâm tài chính lớn nhất cả nước với hệ sinh thái fintech phát triển',
      realestate: 'Bất động sản',
      realestateDesc: 'Thị trường bất động sản sôi động với tiềm năng tăng trưởng cao',
      logistics: 'Logistics',
      logisticsDesc: 'Cửa ngõ thương mại quốc tế với hạ tầng logistics hiện đại',
      tourism: 'Du lịch - Dịch vụ',
      tourismDesc: 'Điểm đến du lịch hấp dẫn với dịch vụ đẳng cấp quốc tế',
      manufacturing: 'Sản xuất',
      manufacturingDesc: 'Trung tâm sản xuất công nghiệp với nguồn nhân lực chất lượng cao',
    },
    // Why HCMC
    why: {
      location: 'Vị trí chiến lược',
      locationDesc: 'Nằm ở trung tâm Đông Nam Á, kết nối dễ dàng với các thị trường lớn trong khu vực',
      infrastructure: 'Hạ tầng hiện đại',
      infrastructureDesc: 'Hệ thống giao thông, cảng biển, sân bay quốc tế phát triển',
      workforce: 'Nguồn nhân lực',
      workforceDesc: 'Lực lượng lao động trẻ, có trình độ và năng động',
      policies: 'Chính sách ưu đãi',
      policiesDesc: 'Nhiều chính sách ưu đãi hấp dẫn cho nhà đầu tư',
    },
    // Footer
    footer: {
      about: 'Về chúng tôi',
      aboutDesc: 'Trung tâm Xúc tiến Thương mại và Đầu tư TP. Hồ Chí Minh là cơ quan xúc tiến đầu tư chính thức của thành phố.',
      quickLinks: 'Liên kết nhanh',
      contact: 'Liên hệ',
      address: 'Địa chỉ',
      addressValue: '92 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
      phone: 'Điện thoại',
      email: 'Email',
      newsletter: 'Đăng ký nhận tin',
      newsletterDesc: 'Nhận thông tin mới nhất về cơ hội đầu tư',
      subscribe: 'Đăng ký',
      enterEmail: 'Nhập email của bạn',
      copyright: '© 2024 Trung tâm Xúc tiến Thương mại và Đầu tư TP. Hồ Chí Minh. Bản quyền thuộc về ITPC.',
    },
    // About Page
    about: {
      title: 'Giới thiệu',
      subtitle: 'Trung tâm Xúc tiến Thương mại và Đầu tư TP. Hồ Chí Minh',
      intro: 'Trung tâm Xúc tiến Thương mại và Đầu tư TP. Hồ Chí Minh (ITPC) là đơn vị sự nghiệp công lập trực thuộc UBND TP. Hồ Chí Minh, có chức năng xúc tiến thương mại, đầu tư và du lịch.',
      vision: 'Tầm nhìn',
      visionDesc: 'Trở thành trung tâm xúc tiến đầu tư hàng đầu khu vực, kết nối cơ hội đầu tư giữa Việt Nam và thế giới.',
      mission: 'Sứ mệnh',
      missionDesc: 'Hỗ trợ doanh nghiệp trong và ngoài nước tiếp cận thị trường, mở rộng hợp tác kinh doanh và đầu tư tại TP. Hồ Chí Minh.',
      history: 'Lịch sử hình thành',
      historyDesc: 'Thành lập năm 2005, ITPC đã không ngừng phát triển và khẳng định vai trò quan trọng trong việc xúc tiến đầu tư tại TP. Hồ Chí Minh.',
      functions: 'Chức năng nhiệm vụ',
      function1: 'Xúc tiến thương mại và đầu tư',
      function2: 'Hỗ trợ doanh nghiệp',
      function3: 'Tổ chức sự kiện, hội nghị',
      function4: 'Cung cấp thông tin đầu tư',
      function5: 'Kết nối đối tác',
    },
    // News Page
    news: {
      title: 'Tin tức & Sự kiện',
      subtitle: 'Cập nhật thông tin mới nhất về hoạt động xúc tiến đầu tư',
      filter: 'Lọc theo',
      all: 'Tất cả',
      investment: 'Đầu tư',
      events: 'Sự kiện',
      policy: 'Chính sách',
      readMore: 'Đọc thêm',
    },
    // Opportunities Page
    opportunities: {
      title: 'Cơ hội đầu tư',
      subtitle: 'Khám phá các dự án và lĩnh vực đầu tư tiềm năng tại TP. Hồ Chí Minh',
      projects: 'Dự án mời gọi đầu tư',
      industrialZones: 'Khu công nghiệp - Khu chế xuất',
      priorityAreas: 'Lĩnh vực ưu tiên',
      districts: 'Thông tin các quận huyện',
      investNow: 'Đầu tư ngay',
      learnMore: 'Tìm hiểu thêm',
    },
    // Guide Page
    guide: {
      title: 'Hướng dẫn đầu tư',
      subtitle: 'Thông tin hữu ích cho nhà đầu tư',
      procedures: 'Thủ tục đầu tư',
      proceduresDesc: 'Quy trình đăng ký đầu tư tại Việt Nam',
      businessTypes: 'Loại hình doanh nghiệp',
      businessTypesDesc: 'Các loại hình doanh nghiệp có vốn đầu tư nước ngoài',
      incentives: 'Ưu đãi đầu tư',
      incentivesDesc: 'Chính sách ưu đãi cho nhà đầu tư',
      faq: 'Câu hỏi thường gặp',
    },
    // Database Page
    database: {
      title: 'Cơ sở dữ liệu',
      subtitle: 'Thống kê và dữ liệu về đầu tư tại TP. Hồ Chí Minh',
      fdiByYear: 'FDI theo năm',
      fdiByCountry: 'FDI theo quốc gia',
      fdiByIndustry: 'FDI theo ngành',
      downloadReport: 'Tải báo cáo',
    },
    // Services Page
    services: {
      title: 'Dịch vụ xúc tiến',
      subtitle: 'Các dịch vụ hỗ trợ nhà đầu tư',
      consulting: 'Tư vấn đầu tư',
      consultingDesc: 'Hỗ trợ tư vấn thủ tục, quy trình đầu tư',
      matchmaking: 'Kết nối doanh nghiệp',
      matchmakingDesc: 'Kết nối với đối tác tiềm năng',
      events: 'Tổ chức sự kiện',
      eventsDesc: 'Hội nghị, triển lãm, roadshow',
      information: 'Cung cấp thông tin',
      informationDesc: 'Thông tin thị trường, cơ hội đầu tư',
    },
    // HCMC Page
    hcmc: {
      title: 'Thành phố Hồ Chí Minh',
      subtitle: 'Trung tâm kinh tế năng động nhất Việt Nam',
      overview: 'Tổng quan',
      overviewDesc: 'TP. Hồ Chí Minh là thành phố lớn nhất Việt Nam về dân số và quy mô kinh tế, đóng góp hơn 20% GDP và 30% thu ngân sách cả nước.',
      economy: 'Kinh tế',
      economyDesc: 'GDP đạt 67 tỷ USD, tăng trưởng bình quân 7-8%/năm. Là trung tâm tài chính, thương mại và dịch vụ hàng đầu.',
      infrastructure: 'Hạ tầng',
      infrastructureDesc: 'Sân bay quốc tế Tân Sơn Nhất, cảng Cát Lái, hệ thống metro đang xây dựng.',
      population: 'Dân số',
      populationDesc: 'Hơn 10 triệu người, nguồn nhân lực trẻ và có trình độ cao.',
    },
    // Contact Page
    contact: {
      title: 'Liên hệ',
      subtitle: 'Chúng tôi sẵn sàng hỗ trợ bạn',
      form: 'Gửi yêu cầu',
      name: 'Họ và tên',
      email: 'Email',
      phone: 'Số điện thoại',
      company: 'Công ty',
      subject: 'Tiêu đề',
      message: 'Nội dung',
      send: 'Gửi tin nhắn',
      info: 'Thông tin liên hệ',
      workingHours: 'Giờ làm việc',
      workingHoursValue: 'Thứ 2 - Thứ 6: 8:00 - 17:00',
    },
    // Common
    common: {
      learnMore: 'Tìm hiểu thêm',
      viewDetails: 'Xem chi tiết',
      download: 'Tải xuống',
      back: 'Quay lại',
      next: 'Tiếp theo',
      previous: 'Trước đó',
      loading: 'Đang tải...',
      error: 'Có lỗi xảy ra',
    },
  },
  en: {
    // Header
    header: {
      home: 'Home',
      about: 'About',
      news: 'News & Events',
      policies: 'Policies',
      opportunities: 'Investment Opportunities',
      guide: 'Investment Guide',
      database: 'Database',
      services: 'Services',
      hcmc: 'About HCMC',
      contact: 'Contact',
      search: 'Search...',
    },
    // Hero
    hero: {
      title: 'Investment Promotion',
      subtitle: 'Ho Chi Minh City',
      description: 'Official investment portal of Ho Chi Minh City - The most dynamic economic center of Vietnam',
      cta: 'Explore Opportunities',
      ctaSecondary: 'Contact Us',
    },
    // Stats
    stats: {
      fdi: 'FDI Attracted',
      projects: 'Investment Projects',
      countries: 'Countries & Territories',
      growth: 'GDP Growth',
      billion: 'billion USD',
      projectsPlus: 'projects',
      countriesPlus: 'countries',
      percent: '%',
    },
    // Sections
    sections: {
      latestNews: 'Latest News',
      viewAll: 'View All',
      events: 'Events & Activities',
      opportunities: 'Investment Opportunities',
      investmentAreas: 'Priority Sectors',
      whyHCMC: 'Why Ho Chi Minh City?',
      partners: 'Partners',
    },
    // Investment Areas
    areas: {
      technology: 'High Technology',
      technologyDesc: 'Leading IT, AI, and semiconductor hub in Vietnam',
      finance: 'Finance & Banking',
      financeDesc: 'Largest financial center with thriving fintech ecosystem',
      realestate: 'Real Estate',
      realestateDesc: 'Dynamic real estate market with high growth potential',
      logistics: 'Logistics',
      logisticsDesc: 'International trade gateway with modern logistics infrastructure',
      tourism: 'Tourism & Services',
      tourismDesc: 'Attractive tourism destination with world-class services',
      manufacturing: 'Manufacturing',
      manufacturingDesc: 'Industrial manufacturing center with skilled workforce',
    },
    // Why HCMC
    why: {
      location: 'Strategic Location',
      locationDesc: 'Located in the heart of Southeast Asia, easily connected to major regional markets',
      infrastructure: 'Modern Infrastructure',
      infrastructureDesc: 'Well-developed transportation, seaport, and international airport systems',
      workforce: 'Skilled Workforce',
      workforceDesc: 'Young, educated, and dynamic labor force',
      policies: 'Incentive Policies',
      policiesDesc: 'Attractive incentive policies for investors',
    },
    // Footer
    footer: {
      about: 'About Us',
      aboutDesc: 'Ho Chi Minh City Investment and Trade Promotion Center is the official investment promotion agency of the city.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      address: 'Address',
      addressValue: '92 Nguyen Hue, District 1, Ho Chi Minh City',
      phone: 'Phone',
      email: 'Email',
      newsletter: 'Newsletter',
      newsletterDesc: 'Get the latest investment opportunities',
      subscribe: 'Subscribe',
      enterEmail: 'Enter your email',
      copyright: '© 2024 Ho Chi Minh City Investment and Trade Promotion Center. All rights reserved.',
    },
    // About Page
    about: {
      title: 'About',
      subtitle: 'Ho Chi Minh City Investment and Trade Promotion Center',
      intro: 'Ho Chi Minh City Investment and Trade Promotion Center (ITPC) is a public service unit under the People\'s Committee of Ho Chi Minh City, responsible for trade, investment, and tourism promotion.',
      vision: 'Vision',
      visionDesc: 'To become a leading regional investment promotion center, connecting investment opportunities between Vietnam and the world.',
      mission: 'Mission',
      missionDesc: 'To support domestic and foreign enterprises in accessing markets, expanding business cooperation and investment in Ho Chi Minh City.',
      history: 'History',
      historyDesc: 'Established in 2005, ITPC has continuously developed and affirmed its important role in investment promotion in Ho Chi Minh City.',
      functions: 'Functions & Duties',
      function1: 'Trade and investment promotion',
      function2: 'Business support',
      function3: 'Event and conference organization',
      function4: 'Investment information provision',
      function5: 'Partner connection',
    },
    // News Page
    news: {
      title: 'News & Events',
      subtitle: 'Latest updates on investment promotion activities',
      filter: 'Filter by',
      all: 'All',
      investment: 'Investment',
      events: 'Events',
      policy: 'Policy',
      readMore: 'Read More',
    },
    // Opportunities Page
    opportunities: {
      title: 'Investment Opportunities',
      subtitle: 'Explore potential projects and investment sectors in Ho Chi Minh City',
      projects: 'Investment Projects',
      industrialZones: 'Industrial & Export Processing Zones',
      priorityAreas: 'Priority Sectors',
      districts: 'District Information',
      investNow: 'Invest Now',
      learnMore: 'Learn More',
    },
    // Guide Page
    guide: {
      title: 'Investment Guide',
      subtitle: 'Useful information for investors',
      procedures: 'Investment Procedures',
      proceduresDesc: 'Investment registration process in Vietnam',
      businessTypes: 'Business Types',
      businessTypesDesc: 'Types of foreign-invested enterprises',
      incentives: 'Investment Incentives',
      incentivesDesc: 'Incentive policies for investors',
      faq: 'Frequently Asked Questions',
    },
    // Database Page
    database: {
      title: 'Database',
      subtitle: 'Statistics and data on investment in Ho Chi Minh City',
      fdiByYear: 'FDI by Year',
      fdiByCountry: 'FDI by Country',
      fdiByIndustry: 'FDI by Industry',
      downloadReport: 'Download Report',
    },
    // Services Page
    services: {
      title: 'Promotion Services',
      subtitle: 'Services to support investors',
      consulting: 'Investment Consulting',
      consultingDesc: 'Consulting on procedures and investment processes',
      matchmaking: 'Business Matchmaking',
      matchmakingDesc: 'Connect with potential partners',
      events: 'Event Organization',
      eventsDesc: 'Conferences, exhibitions, roadshows',
      information: 'Information Provision',
      informationDesc: 'Market information and investment opportunities',
    },
    // HCMC Page
    hcmc: {
      title: 'Ho Chi Minh City',
      subtitle: 'The most dynamic economic center of Vietnam',
      overview: 'Overview',
      overviewDesc: 'Ho Chi Minh City is the largest city in Vietnam by population and economic scale, contributing over 20% of GDP and 30% of national budget revenue.',
      economy: 'Economy',
      economyDesc: 'GDP reaches 67 billion USD, average growth of 7-8% per year. Leading financial, commercial and service center.',
      infrastructure: 'Infrastructure',
      infrastructureDesc: 'Tan Son Nhat International Airport, Cat Lai Port, metro system under construction.',
      population: 'Population',
      populationDesc: 'Over 10 million people, young and highly educated workforce.',
    },
    // Contact Page
    contact: {
      title: 'Contact',
      subtitle: 'We are ready to assist you',
      form: 'Send Request',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      company: 'Company',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      info: 'Contact Information',
      workingHours: 'Working Hours',
      workingHoursValue: 'Monday - Friday: 8:00 AM - 5:00 PM',
    },
    // Common
    common: {
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      download: 'Download',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      loading: 'Loading...',
      error: 'An error occurred',
    },
  },
};
