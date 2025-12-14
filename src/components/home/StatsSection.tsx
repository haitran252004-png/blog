import React from 'react';
import { TrendingUp, Briefcase, Globe2, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: TrendingUp,
      value: '52',
      unit: t('stats.billion'),
      label: t('stats.fdi'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Briefcase,
      value: '11,500+',
      unit: t('stats.projectsPlus'),
      label: t('stats.projects'),
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Globe2,
      value: '115+',
      unit: t('stats.countriesPlus'),
      label: t('stats.countries'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BarChart3,
      value: '7.5',
      unit: t('stats.percent'),
      label: t('stats.growth'),
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="relative py-20 bg-card">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl lg:text-4xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.unit}</span>
              </div>

              {/* Label */}
              <p className="text-sm text-muted-foreground">{stat.label}</p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
