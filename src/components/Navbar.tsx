import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import { Languages, Menu, X, Shield, ArrowUpRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, isArabic, setIsAdminOpen } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', labelEn: 'About Us', labelAr: 'من نحن' },
    { href: '#services', labelEn: 'Services', labelAr: 'خدماتنا' },
    { href: '#clients', labelEn: 'Clients', labelAr: 'العملاء المستهدفون' },
    { href: '#team', labelEn: 'Expert Network', labelAr: 'فريق الخبراء' },
    { href: '#projects', labelEn: 'Projects', labelAr: 'المشاريع' },
    { href: '#contact', labelEn: 'Contact', labelAr: 'التواصل' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050811]/90 backdrop-blur-md border-b border-cyan-500/15 shadow-lg shadow-cyan-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group">
            <Logo size="md" isArabic={isArabic} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors"
              >
                {isArabic ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle Button */}
            <button
              id="lang-toggle-btn"
              onClick={toggleLang}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-all shadow-sm hover:border-cyan-500/50 active:scale-95 cursor-pointer"
              title={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <Languages className="w-4 h-4 text-cyan-400" />
              <span>{isArabic ? 'English' : 'العربية'}</span>
            </button>

            {/* Request a Project Button */}
            <a
              id="nav-request-project-btn"
              href="#request-project"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all active:scale-95"
            >
              <span>{isArabic ? 'طلب مشروع' : 'Request a Project'}</span>
              <ArrowUpRight className={`w-4 h-4 ${isArabic ? 'rotate-[-90deg]' : ''}`} />
            </a>

            {/* Discreet Admin Lock Button */}
            <button
              id="nav-admin-btn"
              onClick={() => setIsAdminOpen(true)}
              className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 rounded-lg transition-colors"
              title={isArabic ? 'لوحة إدارة النظام' : 'Management Portal'}
            >
              <Shield className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-md"
            >
              {isArabic ? 'EN' : 'عربي'}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b14]/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg"
              >
                {isArabic ? link.labelAr : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2.5">
            <a
              href="#request-project"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 rounded-lg shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isArabic ? 'طلب مشروع جديد' : 'Request a Project'}</span>
            </a>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAdminOpen(true);
                }}
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 py-1"
              >
                <Shield className="w-4 h-4 text-cyan-500" />
                <span>{isArabic ? 'دخول لوحة الإدارة' : 'Admin Management Portal'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
