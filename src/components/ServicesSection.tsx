import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ServiceIcon } from './ServiceIcon';
import { ArrowUpRight, Search, CheckCircle2, Sparkles, Filter } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { isArabic, services, setSelectedServiceForQuote } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', labelEn: 'All Services', labelAr: 'كافة الخدمات' },
    { id: 'development', labelEn: 'Web & Mobile Systems', labelAr: 'البرمجيات والتطبيقات' },
    { id: 'ai_data', labelEn: 'AI & Machine Learning', labelAr: 'الذكاء الاصطناعي والبيانات' },
    { id: 'enterprise', labelEn: 'Gov & Enterprise Systems', labelAr: 'الأنظمة الحكومية والمؤسسية' },
    { id: 'infrastructure', labelEn: 'Databases & APIs', labelAr: 'قواعد البيانات والربط البرمجي' },
    { id: 'advisory', labelEn: 'Consulting & Advisory', labelAr: 'الاستشارات التقنية' },
  ];

  const filteredServices = useMemo(() => {
    return services.filter((svc) => {
      const matchesCat = selectedCategory === 'all' || svc.category === selectedCategory;
      const title = isArabic ? svc.titleAr : svc.titleEn;
      const desc = isArabic ? svc.descAr : svc.descEn;
      const matchesSearch =
        searchQuery.trim() === '' ||
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [services, selectedCategory, searchQuery, isArabic]);

  const handleRequestService = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    const element = document.getElementById('request-project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#050811] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isArabic ? 'خدماتنا وحلولنا المتطورة' : 'Comprehensive Service Portfolio'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? (
              <>
                حلول تكنولوجية متكاملة مصممة <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">للأداء العالي</span>
              </>
            ) : (
              <>
                Modern Technology Capabilities Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">High Reliability</span>
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isArabic
              ? 'تغطي خدماتنا دورة الحياة الرقمية الكاملة من التخطيط المعماري وتطوير البرمجيات إلى دمج الذكاء الاصطناعي وإدارة الأنظمة الحكومية والمؤسسية في جنوب السودان.'
              : 'Our technical offerings span the entire digital lifecycle: bespoke software architectures, AI integration, enterprise ERP, and sovereign government digital platforms.'}
          </p>
        </div>

        {/* Filter Controls: Search & Category Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 w-full md:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {isArabic ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isArabic ? 'ابحث عن خدمة...' : 'Search capabilities...'}
              className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2 text-xs text-white bg-slate-900/90 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500/80 transition-colors"
            />
          </div>
        </div>

        {/* Services Grid (All 12 items cleanly laid out) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const title = isArabic ? service.titleAr : service.titleEn;
            const desc = isArabic ? service.descAr : service.descEn;
            const features = isArabic ? service.featuresAr : service.featuresEn;

            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#091022] to-[#060a14] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                      <ServiceIcon name={service.icon} className="w-6 h-6" />
                    </div>
                    {service.featured && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                        {isArabic ? 'خدمة متميزة' : 'Core Focus'}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {desc}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-6">
                    {features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => handleRequestService(isArabic ? service.titleAr : service.titleEn)}
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-cyan-500/10 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/30 transition-all cursor-pointer"
                  >
                    <span>{isArabic ? 'طلب هذه الخدمة' : 'Request Service'}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-[-90deg]' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 p-8 rounded-xl bg-slate-900/40 border border-slate-800">
            <p className="text-slate-400 text-sm">
              {isArabic ? 'لم يتم العثور على خدمات مطابقة للبحث.' : 'No matching services found for your search query.'}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
