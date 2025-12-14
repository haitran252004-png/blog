import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, History, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const functions = [
    t('about.function1'),
    t('about.function2'),
    t('about.function3'),
    t('about.function4'),
    t('about.function5'),
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.title')} - {language === 'vi' ? 'Xúc Tiến Đầu Tư TP.HCM' : 'HCMC Investment Promotion'}</title>
        <meta name="description" content={t('about.intro')} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">{t('about.title')}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl text-black">
              {t('about.subtitle')}
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.intro')}
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.vision')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.visionDesc')}
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.mission')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.missionDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <History className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.history')}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.historyDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Functions */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-foreground mb-8">{t('about.functions')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {functions.map((func, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{func}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
