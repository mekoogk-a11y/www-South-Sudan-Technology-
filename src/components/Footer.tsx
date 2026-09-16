import React from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import { Shield, MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { isArabic, company, setIsAdminOpen } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03060d] border-t border-slate-900 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" isArabic={isArabic} />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {isArabic
                ? 'شركة تكنولوجيا متخصصة في تقديم الحلول الرقمية المتقدمة للحكومات والشركات والمنظمات، بمقرها في جوبا – جنوب السودان، من خلال شبكة من الخبراء التقنيين من أمريكا وكندا وأفريقيا.'
                : 'Pioneering advanced digital solutions for governments, enterprise businesses, and international organizations. Headquartered in Juba, South Sudan.'}
            </p>

            <div className="pt-2 text-slate-300">
              <span className="text-cyan-400 font-semibold">{isArabic ? 'الإشراف والإدارة: ' : 'Executive Leadership: '}</span>
              <span className="font-bold text-white">{isArabic ? company.managedByAr : company.managedByEn}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isArabic ? 'روابط سريعة' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  {isArabic ? 'من نحن' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {isArabic ? 'الخدمات والحلول' : 'Our Services'}
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-cyan-400 transition-colors">
                  {isArabic ? 'العملاء المستهدفون' : 'Target Clients'}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-cyan-400 transition-colors">
                  {isArabic ? 'شبكة الخبراء' : 'Expert Network'}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  {isArabic ? 'سجل المشاريع' : 'Projects Portfolio'}
                </a>
              </li>
            </ul>
          </div>

          {/* Target Audience */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isArabic ? 'القطاعات' : 'Sectors'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#clients" className="hover:text-cyan-400 transition-colors">
                  {isArabic ? 'الحكومات (Government)' : 'Government'}
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-cyan-400 transition-colors">
                  {isArabic ? 'الشركات (Companies)' : 'Companies'}
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-cyan-400 transition-colors">
                  {isArabic ? 'المنظمات (Organizations)' : 'Organizations'}
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-cyan-400 transition-colors">
                  {isArabic ? 'المؤسسات (Institutions)' : 'Institutions'}
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Summary */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isArabic ? 'المقر والتواصل' : 'Location'}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{isArabic ? company.locationAr : company.locationEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{company.email}</span>
              </div>
              <div className="pt-2">
                <a
                  href="#request-project"
                  className="inline-block px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                >
                  {isArabic ? 'طلب مشروع جديد' : 'Submit Project Brief'}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright Bar as strictly required */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="space-y-1.5">
            {/* 1. Copyright Statement */}
            <p className="text-slate-300 font-medium">
              © 2026 South Sudan Technology. All Rights Reserved.
            </p>
            {/* 2. Saeed Group Statement in English and Arabic */}
            <p className="text-slate-300 text-xs font-semibold">
              جميع الحقوق محفوظة لمجموعة سعيد للأنشطة المتعددة
            </p>
            <p className="text-slate-400 text-[11px]">
              All Rights Reserved to Saeed Group for Multiple Activities
            </p>
            <p className="text-cyan-400/90 text-[11px] font-semibold pt-0.5">
              {isArabic ? 'إدارة سعيد' : 'Managed by Saeed'}
            </p>

            {/* 3. Developer Attribution & WhatsApp Contact */}
            <div className="pt-2 border-t border-slate-900/80">
              <p className="text-slate-400 text-xs flex flex-wrap items-center gap-1.5 justify-center md:justify-start">
                <span>تم تصميم الموقع بواسطة</span>
                <span className="text-cyan-300 font-bold">كمال جعفر زكريا للبرمجيات</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">واتساب:</span>
                <a
                  href="https://wa.me/249919980435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-mono font-semibold hover:underline inline-flex items-center gap-1 dir-ltr"
                >
                  00249919980435
                </a>
              </p>
            </div>
          </div>

          {/* Right Actions: Back to Top & Admin Access */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer text-[11px]"
            >
              <Shield className="w-3.5 h-3.5 text-cyan-500" />
              <span>{isArabic ? 'لوحة تحكم الإدارة' : 'Admin Portal'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              title={isArabic ? 'العودة للأعلى' : 'Back to top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
