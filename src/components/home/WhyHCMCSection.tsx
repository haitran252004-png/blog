import React from 'react';
import { MapPin, Building, Users, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyHCMCSection: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: MapPin,
      title: t('why.location'),
      description: t('why.locationDesc'),
    },
    {
      icon: Building,
      title: t('why.infrastructure'),
      description: t('why.infrastructureDesc'),
    },
    {
      icon: Users,
      title: t('why.workforce'),
      description: t('why.workforceDesc'),
    },
    {
      icon: FileCheck,
      title: t('why.policies'),
      description: t('why.policiesDesc'),
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562748825-66eb8fc7d3e7?q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            {t('sections.whyHCMC')}
          </h2>
          <div className="w-20 h-1 bg-secondary rounded-full mx-auto" />
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <reason.icon className="w-7 h-7 text-secondary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-primary-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-1">10M+</div>
            <div className="text-primary-foreground/80 text-sm">
              {t('hcmc.population').split(' ')[0]}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-1">67B$</div>
            <div className="text-primary-foreground/80 text-sm">GDP</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-1">2,095</div>
            <div className="text-primary-foreground/80 text-sm">km²</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-1">#1</div>
            <div className="text-primary-foreground/80 text-sm">
              {t('hcmc.subtitle').split(' ').slice(-2).join(' ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHCMCSection;
