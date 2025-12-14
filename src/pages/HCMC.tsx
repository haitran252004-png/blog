import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, TrendingUp, Plane, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';

const HCMC: React.FC = () => {
  const { t, language } = useLanguage();

  const highlights = [
    {
      icon: Building2,
      label: language === 'vi' ? 'Diện tích' : 'Area',
      value: '2,095 km²',
    },
    {
      icon: Users,
      label: language === 'vi' ? 'Dân số' : 'Population',
      value: '10+ triệu',
    },
    {
      icon: TrendingUp,
      label: 'GDP',
      value: '67 tỷ USD',
    },
    {
      icon: Plane,
      label: language === 'vi' ? 'Sân bay' : 'Airport',
      value: 'Tân Sơn Nhất',
    },
  ];

  const sections = [
    {
      title: t('hcmc.overview'),
      description: t('hcmc.overviewDesc'),
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
    },
    {
      title: t('hcmc.economy'),
      description: t('hcmc.economyDesc'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    },
    {
      title: t('hcmc.infrastructure'),
      description: t('hcmc.infrastructureDesc'),
      image: '/hatang.jpg',
    },
    {
      title: t('hcmc.population'),
      description: t('hcmc.populationDesc'),
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('hcmc.title')} - {language === 'vi' ? 'Xúc Tiến Đầu Tư TP.HCM' : 'HCMC Investment Promotion'}</title>
        <meta name="description" content={t('hcmc.subtitle')} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-4 text-black">{t('hcmc.title')}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mb-8 text-black">
              {t('hcmc.subtitle')}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20"
                >
                  <item.icon className="w-8 h-8 text-secondary mb-2" />
                  <p className="text-primary-foreground/70 text-sm">{item.label}</p>
                  <p className="text-primary-foreground font-bold text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-background">
          <div className="container-custom space-y-16">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.description}</p>
                </div>
                <div className="flex-1">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              {language === 'vi' ? 'Vị trí địa lý' : 'Geographic Location'}
            </h2>
            <div className="bg-card rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.41842091794!2d106.36557828906247!3d10.755292899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HCMC;
