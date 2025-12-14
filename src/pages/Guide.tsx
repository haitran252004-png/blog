import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ClipboardList, Building, Gift, HelpCircle, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Guide: React.FC = () => {
  const { t, language } = useLanguage();

  const steps = [
    {
      step: 1,
      title: language === 'vi' ? 'Nghiên cứu thị trường' : 'Market Research',
      description: language === 'vi'
        ? 'Tìm hiểu về môi trường kinh doanh, pháp luật và cơ hội đầu tư tại Việt Nam.'
        : 'Learn about the business environment, laws and investment opportunities in Vietnam.',
    },
    {
      step: 2,
      title: language === 'vi' ? 'Lựa chọn hình thức đầu tư' : 'Choose Investment Form',
      description: language === 'vi'
        ? 'Quyết định hình thức đầu tư: 100% vốn nước ngoài, liên doanh, hoặc hợp đồng hợp tác kinh doanh.'
        : 'Decide on investment form: 100% foreign-owned, joint venture, or business cooperation contract.',
    },
    {
      step: 3,
      title: language === 'vi' ? 'Chuẩn bị hồ sơ' : 'Prepare Documents',
      description: language === 'vi'
        ? 'Chuẩn bị các tài liệu cần thiết cho việc đăng ký đầu tư và thành lập doanh nghiệp.'
        : 'Prepare necessary documents for investment registration and enterprise establishment.',
    },
    {
      step: 4,
      title: language === 'vi' ? 'Nộp hồ sơ' : 'Submit Application',
      description: language === 'vi'
        ? 'Nộp hồ sơ đăng ký đầu tư tại Sở Kế hoạch và Đầu tư hoặc Ban Quản lý các KCN-KCX.'
        : 'Submit investment registration at Department of Planning and Investment or Industrial Zone Management Board.',
    },
    {
      step: 5,
      title: language === 'vi' ? 'Nhận giấy chứng nhận' : 'Receive Certificate',
      description: language === 'vi'
        ? 'Nhận Giấy chứng nhận đăng ký đầu tư và Giấy chứng nhận đăng ký doanh nghiệp.'
        : 'Receive Investment Registration Certificate and Enterprise Registration Certificate.',
    },
    {
      step: 6,
      title: language === 'vi' ? 'Triển khai dự án' : 'Implement Project',
      description: language === 'vi'
        ? 'Thực hiện các thủ tục tiếp theo và triển khai dự án đầu tư.'
        : 'Complete subsequent procedures and implement the investment project.',
    },
  ];

  const businessTypes = [
    {
      type: language === 'vi' ? 'Công ty TNHH một thành viên' : 'Single-member LLC',
      description: language === 'vi'
        ? 'Doanh nghiệp do một tổ chức hoặc cá nhân làm chủ sở hữu, chịu trách nhiệm về các khoản nợ trong phạm vi vốn điều lệ.'
        : 'Enterprise owned by one organization or individual, liable for debts within charter capital.',
    },
    {
      type: language === 'vi' ? 'Công ty TNHH hai thành viên trở lên' : 'Multi-member LLC',
      description: language === 'vi'
        ? 'Doanh nghiệp có từ 2-50 thành viên góp vốn, chịu trách nhiệm trong phạm vi vốn góp.'
        : 'Enterprise with 2-50 contributing members, liable within contributed capital.',
    },
    {
      type: language === 'vi' ? 'Công ty cổ phần' : 'Joint Stock Company',
      description: language === 'vi'
        ? 'Doanh nghiệp có vốn điều lệ được chia thành nhiều phần bằng nhau gọi là cổ phần.'
        : 'Enterprise with charter capital divided into equal shares.',
    },
    {
      type: language === 'vi' ? 'Chi nhánh' : 'Branch Office',
      description: language === 'vi'
        ? 'Đơn vị phụ thuộc của doanh nghiệp nước ngoài, được phép hoạt động kinh doanh.'
        : 'Dependent unit of foreign enterprise, permitted to conduct business.',
    },
  ];

  const faqs = [
    {
      question: language === 'vi'
        ? 'Vốn đầu tư tối thiểu để thành lập doanh nghiệp FDI là bao nhiêu?'
        : 'What is the minimum investment capital to establish an FDI enterprise?',
      answer: language === 'vi'
        ? 'Pháp luật Việt Nam không quy định mức vốn đầu tư tối thiểu cho đa số ngành nghề. Tuy nhiên, vốn cần đủ để thực hiện dự án và một số ngành nghề có quy định riêng.'
        : 'Vietnamese law does not stipulate minimum investment capital for most industries. However, capital must be sufficient to implement the project and some industries have specific requirements.',
    },
    {
      question: language === 'vi'
        ? 'Thời gian xử lý hồ sơ đăng ký đầu tư là bao lâu?'
        : 'How long does it take to process investment registration?',
      answer: language === 'vi'
        ? 'Thời gian xử lý hồ sơ thông thường là 15-20 ngày làm việc kể từ khi nhận đủ hồ sơ hợp lệ. Một số dự án đặc biệt có thể cần thời gian dài hơn.'
        : 'Processing time is usually 15-20 working days from receipt of complete valid documents. Some special projects may require longer.',
    },
    {
      question: language === 'vi'
        ? 'Nhà đầu tư nước ngoài có được sở hữu 100% vốn doanh nghiệp không?'
        : 'Can foreign investors own 100% of enterprise capital?',
      answer: language === 'vi'
        ? 'Có, đa số ngành nghề cho phép sở hữu 100% vốn nước ngoài. Tuy nhiên, một số ngành nghề có hạn chế về tỷ lệ sở hữu theo cam kết WTO và pháp luật Việt Nam.'
        : 'Yes, most industries allow 100% foreign ownership. However, some industries have ownership restrictions under WTO commitments and Vietnamese law.',
    },
    {
      question: language === 'vi'
        ? 'Các loại thuế chính mà doanh nghiệp FDI phải nộp?'
        : 'What are the main taxes for FDI enterprises?',
      answer: language === 'vi'
        ? 'Các loại thuế chính bao gồm: Thuế thu nhập doanh nghiệp (20%), thuế VAT (0-10%), thuế thu nhập cá nhân, và các loại thuế khác tùy ngành nghề.'
        : 'Main taxes include: Corporate income tax (20%), VAT (0-10%), personal income tax, and other taxes depending on industry.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('guide.title')} - {language === 'vi' ? 'Xúc Tiến Đầu Tư TP.HCM' : 'HCMC Investment Promotion'}</title>
        <meta name="description" content={t('guide.subtitle')} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">{t('guide.title')}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl text-black">
              {t('guide.subtitle')}
            </p>
          </div>
        </section>

        {/* Investment Procedures */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{t('guide.procedures')}</h2>
                <p className="text-muted-foreground">{t('guide.proceduresDesc')}</p>
              </div>
            </div>
            
            <div className="relative">
              {steps.map((item, index) => (
                <div
                  key={item.step}
                  className="flex gap-6 mb-8 last:mb-0 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative flex flex-col items-center">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg z-10">
                      {item.step}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 absolute top-10" />
                    )}
                  </div>
                  <div className="flex-1 bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Types */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Building className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{t('guide.businessTypes')}</h2>
                <p className="text-muted-foreground">{t('guide.businessTypesDesc')}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {businessTypes.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.type}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{t('guide.faq')}</h2>
              </div>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Guide;
