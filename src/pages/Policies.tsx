"use client"; 

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Policies: React.FC = () => {
  const { t, language } = useLanguage();

  const documents = [
    {
      id: 1,
      title: language === 'vi' ? 'Luật Đầu tư 2020 (Luật số 61/2020/QH14)' : 'Investment Law 2020',
      date: '17/06/2020',
      type: language === 'vi' ? 'Luật' : 'Law',
      url: 'https://vanban.chinhphu.vn/?pageid=27160&docid=200358',
    },
    {
      id: 2,
      title: language === 'vi' ? 'Luật Doanh nghiệp 2020 (Luật số 59/2020/QH14)' : 'Enterprise Law 2020',
      date: '17/06/2020',
      type: language === 'vi' ? 'Luật' : 'Law',
      url: 'https://vanban.chinhphu.vn/?pageid=27160&docid=200357',
    },
    {
      id: 3,
      title: language === 'vi' ? 'Nghị định 31/2021/NĐ-CP hướng dẫn Luật Đầu tư' : 'Decree 31/2021/ND-CP',
      date: '26/03/2021',
      type: language === 'vi' ? 'Nghị định' : 'Decree',
      url: 'https://vanban.chinhphu.vn/?pageid=27160&docid=203063',
    },
    {
      id: 4,
      title: language === 'vi' ? 'Nghị định 01/2021/NĐ-CP về đăng ký doanh nghiệp' : 'Decree 01/2021/ND-CP',
      date: '04/01/2021',
      type: language === 'vi' ? 'Nghị định' : 'Decree',
      url: 'https://vanban.chinhphu.vn/?pageid=27160&docid=202306',
    },
    {
      id: 5,
      title: language === 'vi' ? 'Thông tư 03/2021/TT-BKHĐT hướng dẫn đầu tư nước ngoài' : 'Circular 03/2021/TT-BKHDT',
      date: '09/04/2021',
      type: language === 'vi' ? 'Thông tư' : 'Circular',
      url: 'https://thuvienphapluat.vn/van-ban/Dau-tu/Thong-tu-03-2021-TT-BKHDT-mau-van-ban-thuc-hien-thu-tuc-dau-tu-tai-Viet-Nam-469601.aspx',
    },
  ];

  const incentives = [
    {
      title: language === 'vi' ? 'Ưu đãi thuế thu nhập doanh nghiệp' : 'Corporate Income Tax Incentives',
      description: language === 'vi'
        ? 'Thuế suất 10% trong 15 năm cho dự án công nghệ cao, miễn thuế 4 năm đầu, giảm 50% trong 9 năm tiếp theo.'
        : '10% tax rate for 15 years for high-tech projects, 4-year tax exemption, 50% reduction for the next 9 years.',
    },
    {
      title: language === 'vi' ? 'Miễn thuế nhập khẩu' : 'Import Tax Exemption',
      description: language === 'vi'
        ? 'Miễn thuế nhập khẩu cho máy móc, thiết bị tạo tài sản cố định của dự án đầu tư.'
        : 'Import tax exemption for machinery and equipment to create fixed assets of investment projects.',
    },
    {
      title: language === 'vi' ? 'Hỗ trợ thuê đất' : 'Land Rental Support',
      description: language === 'vi'
        ? 'Miễn, giảm tiền thuê đất tùy theo lĩnh vực và địa bàn đầu tư.'
        : 'Land rental exemption and reduction depending on sector and investment location.',
    },
    {
      title: language === 'vi' ? 'Hỗ trợ đào tạo' : 'Training Support',
      description: language === 'vi'
        ? 'Hỗ trợ chi phí đào tạo nguồn nhân lực cho các dự án công nghệ cao.'
        : 'Training cost support for human resources in high-tech projects.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('header.policies')} - {language === 'vi' ? 'Xúc Tiến Đầu Tư TP.HCM' : 'HCMC Investment Promotion'}</title>
        <meta name="description" content="Chính sách đầu tư" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">{t('header.policies')}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl text-black">
              {language === 'vi'
                ? 'Văn bản pháp luật và chính sách ưu đãi đầu tư tại Việt Nam và TP. Hồ Chí Minh'
                : 'Legal documents and investment incentive policies in Vietnam and Ho Chi Minh City'}
            </p>
          </div>
        </section>

        {/* Legal Documents Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {language === 'vi' ? 'Văn bản pháp luật' : 'Legal Documents'}
            </h2>
            <div className="space-y-4">
              {/* --- BẮT ĐẦU SỬA: Dùng thẻ <a> thay vì div --- */}
              {documents.map((doc, index) => (
                <a
                  key={doc.id}
                  href={doc.url}             // Link đích
                  target="_blank"            // Mở tab mới
                  rel="noopener noreferrer"  // Bảo mật
                  className="block group"    // block để thẻ a bao trùm toàn bộ
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow animate-slide-up cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        {/* Thêm group-hover để đổi màu khi di chuột vào thẻ a */}
                        <h3 className="font-medium text-foreground group-hover:text-blue-600 transition-colors">
                          {doc.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {/* Vì thẻ Button nằm trong thẻ a nên cần chuyển thành div để tránh lỗi HTML lồng nhau */}
                      <div className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Download className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
              {/* --- KẾT THÚC SỬA --- */}
            </div>
          </div>
        </section>

        {/* Investment Incentives Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {language === 'vi' ? 'Chính sách ưu đãi đầu tư' : 'Investment Incentive Policies'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {incentives.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Policies;
