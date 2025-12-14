import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { newsData } from '@/data/news';

const News: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t('news.all') },
    { id: 'investment', label: t('news.investment') },
    { id: 'events', label: t('news.events') },
    { id: 'policy', label: t('news.policy') },
  ];

  const news = newsData;
  const filteredNews = activeFilter === 'all'
    ? news
    : news.filter(item => item.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>{t('news.title')} - {language === 'vi' ? 'Xúc Tiến Đầu Tư TP.HCM' : 'HCMC Investment Promotion'}</title>
        <meta name="description" content={t('news.subtitle')} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">{t('news.title')}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl text-black">
              {t('news.subtitle')}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-card border-b border-border sticky top-[120px] z-40">
          <div className="container-custom">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {filters.map(filter => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className="flex-shrink-0"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12 bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <article
                  key={item.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up border border-border"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title[language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full capitalize">
                        {t(`news.${item.category}`)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title[language]}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {item.excerpt[language]}
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
      </Layout>
    </>
  );
};

export default News;
