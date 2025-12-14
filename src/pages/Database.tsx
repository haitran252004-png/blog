import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, Globe, Factory, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const Database: React.FC = () => {
  const { t, language } = useLanguage();

  const fdiByYear = [
    { year: '2019', value: 7.5 },
    { year: '2020', value: 6.2 },
    { year: '2021', value: 7.0 },
    { year: '2022', value: 8.4 },
    { year: '2023', value: 8.9 },
    { year: '2024', value: 5.2 },
  ];

  const fdiByCountry = [
    { name: language === 'vi' ? 'Singapore' : 'Singapore', value: 25, color: '#2563eb' },
    { name: language === 'vi' ? 'Hàn Quốc' : 'South Korea', value: 20, color: '#059669' },
    { name: language === 'vi' ? 'Nhật Bản' : 'Japan', value: 18, color: '#d97706' },
    { name: language === 'vi' ? 'Đài Loan' : 'Taiwan', value: 12, color: '#7c3aed' },
    { name: language === 'vi' ? 'Hồng Kông' : 'Hong Kong', value: 10, color: '#dc2626' },
    { name: language === 'vi' ? 'Khác' : 'Others', value: 15, color: '#6b7280' },
  ];

  const fdiByIndustry = [
    { name: language === 'vi' ? 'Sản xuất' : 'Manufacturing', value: 35 },
    { name: language === 'vi' ? 'Bất động sản' : 'Real Estate', value: 25 },
    { name: language === 'vi' ? 'Công nghệ' : 'Technology', value: 20 },
    { name: language === 'vi' ? 'Tài chính' : 'Finance', value: 12 },
    { name: language === 'vi' ? 'Khác' : 'Others', value: 8 },
  ];

  return (
    <>
      <Helmet>
        <title>{t('database.title')} - {language === 'vi' ? 'Xúc Tiến Đầu Tư TP.HCM' : 'HCMC Investment Promotion'}</title>
        <meta name="description" content={t('database.subtitle')} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
          <div className="container-custom">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">{t('database.title')}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl text-black">
              {t('database.subtitle')}
            </p>
          </div>
        </section>

        {/* FDI by Year */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t('database.fdiByYear')}</h2>
              </div>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                {t('database.downloadReport')}
              </Button>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border border-border">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={fdiByYear}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" unit=" tỷ USD" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => [`${value} ${language === 'vi' ? 'tỷ USD' : 'billion USD'}`, 'FDI']}
                  />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* FDI by Country and Industry */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* By Country */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t('database.fdiByCountry')}</h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={fdiByCountry}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {fdiByCountry.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => [`${value}%`, '']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* By Industry */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Factory className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t('database.fdiByIndustry')}</h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={fdiByIndustry} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" unit="%" />
                    <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" width={100} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => [`${value}%`, '']}
                    />
                    <Bar dataKey="value" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Database;
