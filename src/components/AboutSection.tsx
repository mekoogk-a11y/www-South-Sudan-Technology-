import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, Users, MapPin, CheckCircle2, ArrowUpRight, Award, Compass, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { isArabic, company } = useApp();

  const values = [
    {
      titleEn: 'Headquartered in Juba',
      titleAr: 'المقر الرئيسي في جوبا',
      descEn: 'Physically anchored in South Sudan’s capital, providing rapid on-site engagement, institutional alignment, and immediate responsiveness.',
      descAr: 'حضور مباشر في العاصمة جوبا يضمن التفاعل الفوري مع المؤسسات والشركات وتقديم الدعم الفني الميداني المباشر.',
      icon: MapPin
    },
    {
      titleEn: 'International Engineering Network',
      titleAr: 'شبكة كفاءات هندسية دولية',
      descEn: 'Leveraging top-tier software architects and technical experts across the United States, Canada, and Africa to build world-class digital systems.',
      descAr: 'الاستفادة من خبرات نخبة من كبار مهندسي البرمجيات والأنظمة في أمريكا وكندا وأفريقيا لنقل أحدث الممارسات العالمية لجنوب السودان.',
      icon: Users
    },
    {
      titleEn: 'Sovereign Digital Security',
      titleAr: 'أمان رقمي وسيادة وطنية',
      descEn: 'Prioritizing data protection, zero-trust architectures, and strict compliance for critical government and commercial applications.',
      descAr: 'تطبيق أعلى معايير الحماية والتشفير لحماية البيانات السيادية والمؤسسية وفق أحدث بروتوكولات الأمان العالمية.',
      icon: Shield
    },
    {
      titleEn: 'Modern AI & Scalability',
      titleAr: 'ذكاء اصطناعي وأنظمة قابلة للتوسع',
      descEn: 'Building modular platforms prepared for future expansion, AI integration, and large-scale public and private workflows.',
      descAr: 'بناء منصات برمجية مرنة قابلة للتوسع والنمو ومجهزة بالكامل للدمج مع تقنيات الذكاء الاصطناعي الحديثة والأتمتة.',
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#060a16] border-y border-slate-900 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
              <Compass className="w-3.5 h-3.5" />
              <span>{isArabic ? 'عن الشركة' : 'About South Sudan Technology'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {isArabic ? (
                <>
                  رواد التحول الرقمي والحلول البرمجية المتقدمة في <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">جنوب السودان</span>
                </>
              ) : (
                <>
                  Pioneering Advanced Digital Infrastructure in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">South Sudan</span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {isArabic
                ? 'تأسست شركة تكنولوجيا جنوب السودان (South Sudan Technology) كشريك تقني استراتيجي يقدم حلولاً رقمية متطورة للحكومات والشركات والمنظمات والمؤسسات. يقع مقرنا الرئيسي في جوبا – جنوب السودان، ونعمل من خلال شبكة استثنائية من نخبة المبرمجين والخبراء التقنيين من الولايات المتحدة الأمريكية وكندا وأفريقيا.'
                : 'South Sudan Technology is a dedicated technology firm headquartered in Juba, South Sudan. We engineer and deploy advanced digital solutions for governments, companies, humanitarian organizations, and financial institutions, powered by a premier collaborative network of software engineers and system architects from the United States, Canada, and Africa.'}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {isArabic
                ? 'نهدف إلى تسريع وتيرة التحول الرقمي وبناء أنظمة برمجية ذكية، مستقرة، وفائقة الأمان تلبي الاحتياجات الميدانية المحلية مع الالتزام بأدق المعايير الهندسية الدولية.'
                : 'Our mission is to accelerate the digital evolution of South Sudan by developing scalable enterprise systems, modern mobile and web platforms, and automated AI pipelines that empower national institutions and commercial enterprises.'}
            </p>

            {/* Leadership Badge: Managed by Saeed */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 shadow-md">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-sky-600/20 flex items-center justify-center border border-cyan-500/40">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    {isArabic ? 'القيادة والإشراف' : 'Executive Management'}
                  </div>
                  <div className="text-base font-bold text-white flex items-center gap-2">
                    <span>{isArabic ? company.managedByAr : company.managedByEn}</span>
                    <span className="text-xs font-normal text-cyan-400">
                      ({isArabic ? 'إدارة سعيد' : 'Saeed Group'})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/40 transition-colors"
              >
                <span>{isArabic ? 'استكشف كافة الخدمات' : 'Explore Capabilities'}</span>
                <ArrowUpRight className={`w-4 h-4 ${isArabic ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>
          </div>

          {/* Right Column: Key Value Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-[#090f20]/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-white">
                        {isArabic ? v.titleAr : v.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {isArabic ? v.descAr : v.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
