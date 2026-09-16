import React from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import { HeroParticlesBackground } from './HeroParticlesBackground';
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Globe2,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  Server
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { isArabic } = useApp();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden tech-grid-pattern">
      {/* Subtle Framer Motion Particle Animation Background representing Digital Connectivity & AI */}
      <HeroParticlesBackground />

      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-sky-500/10 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs text-slate-300 backdrop-blur-md shadow-inner shadow-cyan-500/10">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-semibold text-cyan-300">
              {isArabic ? 'جوبا، جنوب السودان' : 'Juba, South Sudan'}
            </span>
            <span className="text-slate-600">•</span>
            <span>
              {isArabic ? 'شبكة خبراء عالمية (أمريكا، كندا، أفريقيا)' : 'Global Expert Network (USA, Canada, Africa)'}
            </span>
          </div>

          {/* Centered Large Company Brand & Emblem */}
          <div className="flex flex-col items-center">
            <Logo size="xl" showText={false} isArabic={isArabic} />
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              South Sudan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">Technology</span>
            </h1>
            {isArabic && (
              <p className="text-xl sm:text-2xl font-bold text-slate-200 mt-2">
                تكنولوجيا جنوب السودان
              </p>
            )}
          </div>

          {/* Core Marketing Headlines as requested */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-semibold text-cyan-200/90 max-w-3xl leading-snug">
              {isArabic
                ? 'حلول تقنية متطورة للحكومات والشركات والمنظمات والمؤسسات'
                : 'Technology Solutions for Government, Business & Organizations'}
            </h2>
            <p className="text-base sm:text-xl font-medium text-slate-400 tracking-wide">
              {isArabic
                ? 'بناء المستقبل الرقمي لجنوب السودان'
                : 'Building the Digital Future of South Sudan'}
            </p>
          </div>

          {/* Action Buttons: Our Services, Contact Us, Request a Project */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            {/* 1. Request a Project */}
            <a
              id="hero-request-project-btn"
              href="#request-project"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>{isArabic ? 'طلب مشروع' : 'Request a Project'}</span>
            </a>

            {/* 2. Our Services */}
            <a
              id="hero-services-btn"
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-xl shadow-sm transition-all active:scale-95"
            >
              <span>{isArabic ? 'خدماتنا' : 'Our Services'}</span>
              <ArrowIcon className="w-4 h-4 text-cyan-400" />
            </a>

            {/* 3. Contact Us */}
            <a
              id="hero-contact-btn"
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800 rounded-xl transition-all active:scale-95"
            >
              <span>{isArabic ? 'اتصل بنا' : 'Contact Us'}</span>
            </a>
          </div>

          {/* Interactive Tech Architecture HUD / System Telemetry Showcase */}
          <div className="w-full mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0a1022]/90 to-[#060914]/90 border border-cyan-500/25 shadow-2xl shadow-cyan-950/40 text-left">
            {/* Console Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 pl-2">
                  southsudantechnology.com — Juba Core Node
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {isArabic ? 'الأمان والسيادة' : 'Sovereign Security'}
                  </span>
                </div>
                <p className="text-lg font-bold text-white">AES-256 / TLS 1.3</p>
                <p className="text-[11px] text-slate-400">
                  {isArabic ? 'تشفير حكومي ومؤسسي معتمد' : 'Enterprise & Gov Grade Isolation'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2 text-sky-400 mb-1">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {isArabic ? 'الذكاء الاصطناعي' : 'Applied AI & ML'}
                  </span>
                </div>
                <p className="text-lg font-bold text-white">LLMs & Automation</p>
                <p className="text-[11px] text-slate-400">
                  {isArabic ? 'معالجة الوثائق والأتمتة الذكية' : 'Document OCR & Workflow Agents'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <Server className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {isArabic ? 'البنية التحتية' : 'Infrastructure'}
                  </span>
                </div>
                <p className="text-lg font-bold text-white">Cloud & On-Prem</p>
                <p className="text-[11px] text-slate-400">
                  {isArabic ? 'سحابية وهجينة مع دعم دون إنترنت' : 'Hybrid Deployments & Offline Sync'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2 text-cyan-300 mb-1">
                  <Globe2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {isArabic ? 'الشبكة العالمية' : 'Engineering Talent'}
                  </span>
                </div>
                <p className="text-lg font-bold text-white">USA • CA • Africa</p>
                <p className="text-[11px] text-slate-400">
                  {isArabic ? 'نخبة من المهندسين العالميين' : 'Senior Distributed Engineering'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
