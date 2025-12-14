import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const NewsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const news = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      title: language === 'vi'
        ? 'TP.HCM thu hút 1,5 tỷ USD vốn FDI trong quý I/2024'
        : 'HCMC attracts $1.5 billion FDI in Q1/2024',
      excerpt: language === 'vi'
        ? 'Thành phố tiếp tục là điểm đến hấp dẫn cho các nhà đầu tư nước ngoài với nhiều dự án lớn...'
        : 'The city continues to be an attractive destination for foreign investors with many large projects...',
      date: '15/03/2024',
      category: language === 'vi' ? 'Đầu tư' : 'Investment',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800',
      title: language === 'vi'
        ? 'Hội nghị xúc tiến đầu tư Việt Nam - Nhật Bản 2024'
        : 'Vietnam - Japan Investment Promotion Conference 2024',
      excerpt: language === 'vi'
        ? 'Sự kiện quy tụ hơn 200 doanh nghiệp Nhật Bản tìm kiếm cơ hội đầu tư tại Việt Nam...'
        : 'The event gathered more than 200 Japanese enterprises seeking investment opportunities in Vietnam...',
      date: '10/03/2024',
      category: language === 'vi' ? 'Sự kiện' : 'Event',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      title: language === 'vi'
        ? 'Chính sách ưu đãi mới cho doanh nghiệp công nghệ cao'
        : 'New incentive policies for high-tech enterprises',
      excerpt: language === 'vi'
        ? 'UBND TP.HCM vừa ban hành chính sách hỗ trợ đặc biệt cho các doanh nghiệp công nghệ cao...'
        : 'HCMC People\'s Committee has issued special support policies for high-tech enterprises...',
      date: '05/03/2024',
      category: language === 'vi' ? 'Chính sách' : 'Policy',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {t('sections.latestNews')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
            <Link to="/news">
              {t('sections.viewAll')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  {t('news.readMore')}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
