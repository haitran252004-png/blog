import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Landmark, Building2, Truck, Plane, Factory, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const InvestmentAreasSection: React.FC = () => {
  const { t } = useLanguage();

  const areas = [
    {
      icon: Cpu,
      title: t('areas.technology'),
      description: t('areas.technologyDesc'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: Landmark,
      title: t('areas.finance'),
      description: t('areas.financeDesc'),
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    },
    {
      icon: Building2,
      title: t('areas.realestate'),
      description: t('areas.realestateDesc'),
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    },
    {
      icon: Truck,
      title: t('areas.logistics'),
      description: t('areas.logisticsDesc'),
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
    {
      icon: Plane,
      title: t('areas.tourism'),
      description: t('areas.tourismDesc'),
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50 dark:bg-pink-950/30',
    },
    {
      icon: Factory,
      title: t('areas.manufacturing'),
      description: t('areas.manufacturingDesc'),
      color: 'from-slate-500 to-gray-600',
      bgColor: 'bg-slate-50 dark:bg-slate-950/30',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('sections.investmentAreas')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('opportunities.subtitle')}
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`group relative ${area.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 animate-slide-up border border-border overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Decoration */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${area.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
              
              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <area.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {area.description}
              </p>

              {/* Link */}
              <Link
                to="/opportunities"
                className="inline-flex items-center text-primary font-medium text-sm group/link"
              >
                {t('common.learnMore')}
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentAreasSection;
