import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Youtube, Linkedin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/about', label: t('header.about') },
    { path: '/news', label: t('header.news') },
    { path: '/opportunities', label: t('header.opportunities') },
    { path: '/guide', label: t('header.guide') },
    { path: '/contact', label: t('header.contact') },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">IPC</span>
              </div>
              <h3 className="font-bold text-lg">{t('footer.about')}</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t('footer.aboutDesc')}
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  {t('footer.addressValue')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">(028) 3823 6738</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">itpc@itpc.gov.vn</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.newsletter')}</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              {t('footer.newsletterDesc')}
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={t('footer.enterEmail')}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button
                size="icon"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-4">
          <p className="text-center text-primary-foreground/70 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
