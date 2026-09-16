import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { targetClients } from '../data/content';
import { Landmark, Building2, Briefcase, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const TargetClientsSection: React.FC = () => {
  const { isArabic, setSelectedServiceForQuote } = useApp();
  const [activeTab, setActiveTab] = useState<string>(targetClients[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark className="w-6 h-6 text-cyan-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-sky-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      default:
        return <Building2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  const selectedClient = targetClients.find((c) => c.id === activeTab) || targetClients[0];

  return (
    <section id="clients" className="py-24 relative bg-[#050811] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <span>{isArabic ? 'القطاعات والعملاء المستهدفون' : 'Target Sectors & Clients'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? (
              <>
                حلول رقمية متخصصة تلائم احتياجات <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">كافة القطاعات</span>
              </>
            ) : (
              <>
                Engineered Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Key Sectors</span>
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {isArabic
              ? 'نقدم تقنيات مصممة بدقة لتلبي المتطلبات التشغيلية والأمنية للجهات الحكومية، الشركات التجارية، والمنظمات الدولية والمؤسسات العامة.'
              : 'Delivering tailored digital systems built to meet the operational rigor, security standards, and reliability required across primary sectors.'}
          </p>
        </div>

        {/* 4 Cards / Selector Tabs for Government, Companies, Organizations, Institutions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {targetClients.map((client) => {
            const isSelected = client.id === activeTab;
            return (
              <button
                key={client.id}
                onClick={() => setActiveTab(client.id)}
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0c152a] to-[#070d1a] border-cyan-500/80 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-500/40'
                    : 'bg-[#090e1c]/60 border-slate-800 hover:border-slate-700 hover:bg-[#0c1326]/60'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    {getIcon(client.icon)}
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {isArabic ? client.typeAr : client.typeEn}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {isArabic ? client.subtitleAr : client.subtitleEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Focused Interactive Details Panel */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#090f22] to-[#060a16] border border-cyan-500/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/40">
                  {getIcon(selectedClient.icon)}
                </div>
                <div>
                  <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                    {isArabic ? 'القطاع المستهدف' : 'Target Client Profile'}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {isArabic ? selectedClient.typeAr : selectedClient.typeEn}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {isArabic ? selectedClient.descAr : selectedClient.descEn}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  {isArabic ? 'القدرات والحلول المتاحة لهذا القطاع:' : 'Tailored Core Deliverables:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(isArabic ? selectedClient.deliverablesAr : selectedClient.deliverablesEn).map(
                    (del, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#request-project"
                  onClick={() => setSelectedServiceForQuote(selectedClient.typeEn)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-md active:scale-95"
                >
                  <span>
                    {isArabic
                      ? `طلب استشارة لقطاع ${selectedClient.typeAr}`
                      : `Request Consultation for ${selectedClient.typeEn}`}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 ${isArabic ? 'rotate-[-90deg]' : ''}`} />
                </a>
              </div>
            </div>

            {/* Right Graphic Preview Box */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4 font-mono text-xs text-slate-400">
              <div className="flex items-center justify-between text-cyan-400 border-b border-slate-800 pb-3">
                <span className="font-bold">SYSTEM_DEPLOYMENT_TARGET</span>
                <span className="text-[10px] bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 text-cyan-300">
                  SOUTH SUDAN REGION
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span>Audience Classification:</span>
                  <span className="text-white font-bold">{selectedClient.typeEn}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span>Data Sovereignty:</span>
                  <span className="text-emerald-400 font-bold">100% In-Country Enforced</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span>Architecture:</span>
                  <span className="text-slate-200">High-Availability Microservices</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span>Offline Sync:</span>
                  <span className="text-cyan-400 font-bold">Enabled for Field Ops</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>SLA Support:</span>
                  <span className="text-white">Juba Direct Team (24/7 Dedicated)</span>
                </div>
              </div>

              <div className="p-3 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                <span className="text-cyan-400 font-bold">Note: </span>
                {isArabic
                  ? 'يتم تخصيص البنية التحتية ومعايير الأمان بدقة لتناسب القوانين واللوائح التنظيمية في جنوب السودان.'
                  : 'Infrastructure architecture and security controls are adapted to South Sudan institutional frameworks.'}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
