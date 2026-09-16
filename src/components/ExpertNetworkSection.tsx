import React from 'react';
import { useApp } from '../context/AppContext';
import { globalExpertNetwork } from '../data/content';
import { Globe, Code2, Network, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react';

export const ExpertNetworkSection: React.FC = () => {
  const { isArabic } = useApp();

  return (
    <section id="team" className="py-24 relative bg-[#060a16] border-t border-slate-900 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-cyan-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Globe className="w-3.5 h-3.5" />
            <span>{isArabic ? 'شبكة الخبراء والمهندسين' : 'Global Technical Talent Network'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? (
              <>
                كفاءات برمجية عالمية تعمل من أجل <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">جنوب السودان</span>
              </>
            ) : (
              <>
                Global Engineering Caliber Serving <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">South Sudan</span>
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isArabic
              ? 'تعتمد South Sudan Technology على نموذج تقني متطور يربط نخبة من مهندسي البرمجيات وخبراء الذكاء الاصطناعي من أمريكا وكندا وأفريقيا لتطوير أنظمة رقمية رفيعة المستوى بمقرها في جوبا.'
              : 'South Sudan Technology leverages a high-caliber distributed collaborative network of senior software engineers, AI specialists, and cloud architects from the United States, Canada, and Africa to build world-standard digital platforms.'}
          </p>
        </div>

        {/* 3 Regional Pillars: USA, Canada, Africa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {globalExpertNetwork.map((node, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0a1224] to-[#070b16] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-lg group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Region & Flag */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl select-none" role="img" aria-label={node.region}>
                    {node.flag}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                    HUB {idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {isArabic ? node.regionAr : node.region}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 mt-1">
                    {isArabic ? node.headlineAr : node.headlineEn}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isArabic ? node.descAr : node.descEn}
                </p>
              </div>

              {/* Competencies */}
              <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-2">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                  {isArabic ? 'أبرز مجالات الخبرة:' : 'Core Engineering Domains:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {node.competencies.map((comp, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 border border-slate-800 text-slate-200"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Connection & Real Deployment Guarantee */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-sky-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-900/40 border border-cyan-500/40 text-cyan-400 flex-shrink-0">
              <Network className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {isArabic
                  ? 'معايير هندسية عالمية مع تنفيذ محلي مباشر في جوبا'
                  : 'Global Engineering Standards with Direct Local Execution in Juba'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                {isArabic
                  ? 'نضمن استمرارية الدعم الفني، سلامة البيانات، وسرعة الاستجابة على أرض الواقع داخل دولة جنوب السودان.'
                  : 'Ensuring on-site project management, continuous technical oversight, and zero disconnect between design and deployment.'}
              </p>
            </div>
          </div>

          <a
            href="#request-project"
            className="flex-shrink-0 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            {isArabic ? 'ابدأ مشروعك معنا' : 'Collaborate With Us'}
          </a>
        </div>

      </div>
    </section>
  );
};
