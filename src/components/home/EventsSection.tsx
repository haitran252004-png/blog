import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const EventsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const events = [
    {
      id: 1,
      title: language === 'vi'
        ? 'Hội nghị Xúc tiến Đầu tư TP.HCM 2024'
        : 'HCMC Investment Promotion Conference 2024',
      date: '20/04/2024',
      time: '08:00 - 17:00',
      location: language === 'vi' ? 'Trung tâm Hội nghị Quốc gia' : 'National Convention Center',
      type: 'conference',
    },
    {
      id: 2,
      title: language === 'vi'
        ? 'Triển lãm Công nghệ & Đổi mới sáng tạo'
        : 'Technology & Innovation Exhibition',
      date: '15/05/2024',
      time: '09:00 - 18:00',
      location: language === 'vi' ? 'SECC, Quận 7' : 'SECC, District 7',
      type: 'exhibition',
    },
    {
      id: 3,
      title: language === 'vi'
        ? 'Roadshow Singapore - Thu hút đầu tư'
        : 'Singapore Roadshow - Investment Attraction',
      date: '25/05/2024',
      time: '14:00 - 18:00',
      location: 'Singapore',
      type: 'roadshow',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'conference':
        return 'bg-blue-500';
      case 'exhibition':
        return 'bg-green-500';
      case 'roadshow':
        return 'bg-purple-500';
      default:
        return 'bg-primary';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {t('sections.events')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
            <Link to="/news">
              {t('sections.viewAll')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Date Box */}
              <div className="flex md:flex-col items-center gap-2 md:gap-0 md:w-20 md:text-center">
                <div className={`w-3 h-3 md:w-4 md:h-4 ${getTypeColor(event.type)} rounded-full`} />
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  {event.date.split('/')[0]}
                </span>
                <span className="text-muted-foreground text-sm md:text-base">
                  {event.date.split('/').slice(1).join('/')}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-border" />

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                </div>
              </div>

              {/* Action */}
              <Button variant="outline" className="md:self-center">
                {t('common.viewDetails')}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
