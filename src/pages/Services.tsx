import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, Calendar, Info, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: MessageSquare,
      title: t('services.consulting'),
      description: t('services.consultingDesc'),
      features: language === 'vi'
        ? ['Tư vấn thủ tục đầu tư', 'Hướng dẫn đăng ký doanh nghiệp', 'Giải đáp pháp luật đầu tư']
        : ['Investment procedure consulting', 'Enterprise registration guidance', 'Investment law advisory'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: t('services.matchmaking'),
      description: t('services.matchmakingDesc'),
      features: language === 'vi'
        ? ['Kết nối đối tác Việt Nam', 'Tìm kiếm đối tác nước ngoài', 'Tổ chức gặp gỡ doanh nghiệp']
        : ['Connect with Vietnamese partners', 'Search for foreign partners', 'Organize business meetings'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Calendar,
      title: t('services.events'),
      description: t('services.eventsDesc'),
      features: language === 'vi'
        ? ['Hội nghị xúc tiến đầu tư', 'Triển lãm thương mại', 'Roadshow quốc tế']
        : ['Investment promotion conferences', 'Trade exhibitions', 'International roadshows'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Info,
      title: t('services.information'),
      description: t('services.informationDesc'),
      features: language === 'vi'
        ? ['Thông tin thị trường', 'Báo cáo ngành', 'Cơ hội đầu tư mới nhất']
        : ['Market information', 'Industry reports', 'Latest investment opportunities'],
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('services.title')} - {language === 'vi' ? 'Xúc Tiến Đầu Tư TP.HCM' : 'HCMC Investment Promotion'}</title>
        <meta name="description" content={t('services.subtitle')} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">{t('services.title')}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl text-black">
              {t('services.subtitle')}
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button variant="outline" className="group/btn">
                    {t('common.learnMore')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {language === 'vi' ? 'Cần hỗ trợ?' : 'Need assistance?'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'vi'
                ? 'Liên hệ với đội ngũ chuyên gia của chúng tôi để được tư vấn miễn phí.'
                : 'Contact our expert team for free consultation.'}
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                {language === 'vi' ? 'Liên hệ ngay' : 'Contact Us'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
