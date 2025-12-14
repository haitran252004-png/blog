import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-orange-600">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
              {language === 'vi'
                ? 'Sẵn sàng đầu tư tại TP. Hồ Chí Minh?'
                : 'Ready to invest in Ho Chi Minh City?'}
            </h2>
            <p className="text-secondary-foreground/90 text-lg max-w-xl">
              {language === 'vi'
                ? 'Liên hệ với chúng tôi ngay hôm nay để được tư vấn và hỗ trợ miễn phí về cơ hội đầu tư.'
                : 'Contact us today for free consultation and support on investment opportunities.'}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 px-8"
            >
              <Link to="/contact">
                {language === 'vi' ? 'Liên hệ tư vấn' : 'Contact Us'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <div className="flex items-center gap-4 text-secondary-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-medium">(028) 3823 6738</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
