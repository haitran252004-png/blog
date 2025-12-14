import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-primary-foreground pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Official Investment Portal</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
            {t('hero.title')}
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.subtitle')}
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/opportunities">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                {t('hero.ctaSecondary')}
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
