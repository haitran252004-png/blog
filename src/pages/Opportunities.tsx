import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Building2, MapPin, ArrowRight, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Opportunities: React.FC = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: language === 'vi' ? 'Khu đô thị thông minh Thủ Đức' : 'Thu Duc Smart City',
      location: language === 'vi' ? 'TP. Thủ Đức' : 'Thu Duc City',
      investment: '5-10',
      sector: language === 'vi' ? 'Bất động sản' : 'Real Estate',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800',
    },
    {
      id: 2,
      title: language === 'vi' ? 'Trung tâm Fintech TP.HCM' : 'HCMC Fintech Center',
      location: language === 'vi' ? 'Quận 1' : 'District 1',
      investment: '2-5',
      sector: language === 'vi' ? 'Tài chính' : 'Finance',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800',
    },
    {
      id: 3,
      title: language === 'vi' ? 'Khu công nghệ cao Sài Gòn' : 'Saigon Hi-Tech Park Expansion',
      location: language === 'vi' ? 'Quận 9' : 'District 9',
      investment: '10-20',
      sector: language === 'vi' ? 'Công nghệ cao' : 'High-Tech',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    },
    {
      id: 4,
      title: language === 'vi' ? 'Cảng container Cát Lái mở rộng' : 'Cat Lai Container Port Expansion',
      location: language === 'vi' ? 'Quận 2' : 'District 2',
      investment: '8-15',
      sector: language === 'vi' ? 'Logistics' : 'Logistics',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800',
    },
  ];

  const industrialZones = [
    {
      name: language === 'vi' ? 'Khu chế xuất Tân Thuận' : 'Tan Thuan Export Processing Zone',
      area: '300 ha',
      occupancy: '95%',
    },
    {
      name: language === 'vi' ? 'Khu công nghiệp Hiệp Phước' : 'Hiep Phuoc Industrial Park',
      area: '2,000 ha',
      occupancy: '70%',
    },
    {
      name: language === 'vi' ? 'Khu công nghệ cao TP.HCM' : 'HCMC Hi-Tech Park',
      area: '913 ha',
      occupancy: '85%',
    },
    {
      name: language === 'vi' ? 'Khu công nghiệp Cát Lái' : 'Cat Lai Industrial Park',
      area: '124 ha',
      occupancy: '90%',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('opportunities.title')} - {language === 'vi' ? 'Xúc Tiến Đầu Tư TP.HCM' : 'HCMC Investment Promotion'}</title>
        <meta name="description" content={t('opportunities.subtitle')} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">{t('opportunities.title')}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl text-black">
              {t('opportunities.subtitle')}
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-foreground mb-8">{t('opportunities.projects')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full mb-2">
                        {project.sector}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <DollarSign className="w-4 h-4" />
                        <span>{project.investment} {language === 'vi' ? 'tỷ USD' : 'B USD'}</span>
                      </div>
                    </div>
                    <Button className="w-full">
                      {t('opportunities.learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Zones */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-foreground mb-8">{t('opportunities.industrialZones')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industrialZones.map((zone, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
                >
                  <Building2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-4">{zone.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{language === 'vi' ? 'Diện tích' : 'Area'}</span>
                      <span className="font-medium text-foreground">{zone.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{language === 'vi' ? 'Tỷ lệ lấp đầy' : 'Occupancy'}</span>
                      <span className="font-medium text-foreground">{zone.occupancy}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'vi' ? 'Quan tâm đến dự án?' : 'Interested in a project?'}
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {language === 'vi'
                ? 'Liên hệ với chúng tôi để được tư vấn chi tiết về các cơ hội đầu tư.'
                : 'Contact us for detailed consultation on investment opportunities.'}
            </p>
            <Button asChild variant="secondary" size="lg">
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

export default Opportunities;
