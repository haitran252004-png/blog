import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: t('header.home') },
    { path: '/about', label: t('header.about') },
    { path: '/news', label: t('header.news') },
    { path: '/policies', label: t('header.policies') },
    { path: '/opportunities', label: t('header.opportunities') },
    { path: '/guide', label: t('header.guide') },
    { path: '/database', label: t('header.database') },
    { path: '/services', label: t('header.services') },
    { path: '/hcmc', label: t('header.hcmc') },
    { path: '/contact', label: t('header.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-1.5">
        <div className="container-custom flex items-center justify-between text-sm">
          <div className="hidden sm:flex items-center gap-4">
            <span>Hotline: (030) 303 0303</span>
            <span>Email: itpc@itpc.gov.vn</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-light h-7 px-2"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  {language === 'vi' ? 'Tiếng Việt' : 'English'}
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('vi')}>
                  🇻🇳 Tiếng Việt
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-black w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-black text-primary-foreground font-bold text-xl">IPC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-lg leading-tight ${isScrolled ? 'text-foreground' : 'text-primary'}`}>
                {language === 'vi' ? 'Xúc Tiến Đầu Tư' : 'Investment Promotion'}
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-primary/70'}`}>
                {language === 'vi' ? 'TP. Hồ Chí Minh' : 'Ho Chi Minh City'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : isScrolled
                    ? 'text-foreground hover:bg-muted'
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-3 py-2 text-sm font-medium ${
                    isScrolled ? 'text-foreground' : 'text-primary'
                  }`}
                >
                  {language === 'vi' ? 'Thêm' : 'More'}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {navItems.slice(6).map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="w-full">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? 'text-foreground' : 'text-primary'}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isScrolled ? 'text-foreground' : 'text-primary'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-down">
          <nav className="container-custom py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
