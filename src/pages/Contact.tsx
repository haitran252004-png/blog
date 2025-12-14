import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: language === 'vi' ? 'Gửi thành công!' : 'Sent successfully!',
      description: language === 'vi'
        ? 'Chúng tôi sẽ liên hệ lại với bạn sớm nhất.'
        : 'We will contact you as soon as possible.',
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('footer.address'),
      value: t('footer.addressValue'),
    },
    {
      icon: Phone,
      label: t('footer.phone'),
      value: '(028) 3823 6738 - 3829 0158',
    },
    {
      icon: Mail,
      label: t('footer.email'),
      value: 'itpc@itpc.gov.vn',
    },
    {
      icon: Clock,
      label: t('contact.workingHours'),
      value: t('contact.workingHoursValue'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('contact.title')} - {language === 'vi' ? 'Xúc Tiến Đầu Tư TP.HCM' : 'HCMC Investment Promotion'}</title>
        <meta name="description" content={t('contact.subtitle')} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">{t('contact.title')}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl text-black">
              {t('contact.subtitle')}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">{t('contact.form')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.name')}</Label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.email')}</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.phone')}</Label>
                      <Input id="phone" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{t('contact.company')}</Label>
                      <Input id="company" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('contact.subject')}</Label>
                    <Input id="subject" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.message')}</Label>
                    <Textarea id="message" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        {language === 'vi' ? 'Đang gửi...' : 'Sending...'}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        {t('contact.send')}
                      </span>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">{t('contact.info')}</h2>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="bg-card rounded-2xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4947126738547!2d106.70177897486869!3d10.77381855930897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670640001%3A0x9c0b6c9a1c7b1234!2s92%20Nguyen%20Hue%2C%20Ben%20Nghe%2C%20District%201%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
