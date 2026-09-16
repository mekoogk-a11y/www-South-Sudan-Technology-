import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Layers, CheckCircle2, Clock, Calendar, ArrowUpRight, PlusCircle, Shield } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { isArabic, projects, setIsAdminOpen, isAdminAuthenticated } = useApp();
  const [statusFilter, setStatusFilter] = useState<'all' | 'Completed' | 'Upcoming'>('all');
  const [sectorFilter, setSectorFilter] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchStatus =
        statusFilter === 'all'
          ? true
          : statusFilter === 'Completed'
          ? p.status === 'Completed'
          : p.status === 'Upcoming' || p.status === 'In Development';

      const matchSector = sectorFilter === 'all' || p.clientTypeEn === sectorFilter;
      return matchStatus && matchSector;
    });
  }, [projects, statusFilter, sectorFilter]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" />
            <span>{isArabic ? 'مشروع منجز' : 'Delivered'}</span>
          </span>
        );
      case 'In Development':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-950/80 text-sky-400 border border-sky-500/30">
            <Clock className="w-3 h-3 animate-pulse" />
            <span>{isArabic ? 'قيد التطوير والتشغيل' : 'In Active Build'}</span>
          </span>
        );
      case 'Upcoming':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-950/80 text-amber-400 border border-amber-500/30">
            <Calendar className="w-3 h-3" />
            <span>{isArabic ? 'مشروع قادم' : 'Upcoming Release'}</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-[#060a16] border-y border-slate-900 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
              <Layers className="w-3.5 h-3.5" />
              <span>{isArabic ? 'سجل المشاريع الرقمية' : 'Initiatives & Solutions Portfolio'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isArabic ? (
                <>
                  مشاريع سابقة وقادمة لتطوير <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">البنية التحتية</span>
                </>
              ) : (
                <>
                  Previous & Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Digital Systems</span>
                </>
              )}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {isArabic
                ? 'استعراض معماري للأنظمة والبرمجيات المطورة لحكومات، شركات ومؤسسات جنوب السودان. يمكن لإدارة الشركة تحديث هذا القسم دورياً من لوحة التحكم.'
                : 'Architectural showcase of scalable software platforms and upcoming digital public infrastructure. Directly manageable via the executive admin console.'}
            </p>
          </div>

          {/* Quick Admin Shortcut Button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 rounded-lg transition-colors cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isArabic ? 'إدارة المشاريع باللوحة' : 'Admin Project Editor'}</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
          
          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
              }`}
            >
              {isArabic ? 'كافة المشاريع' : 'All Projects'}
            </button>
            <button
              onClick={() => setStatusFilter('Completed')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                statusFilter === 'Completed'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
              }`}
            >
              {isArabic ? 'المشاريع السابقة (المنجزة)' : 'Delivered Systems'}
            </button>
            <button
              onClick={() => setStatusFilter('Upcoming')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                statusFilter === 'Upcoming'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
              }`}
            >
              {isArabic ? 'المشاريع القادمة وقيد التطوير' : 'Upcoming & In Development'}
            </button>
          </div>

          {/* Target Sector Quick Filter */}
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <span className="hidden sm:inline font-medium">{isArabic ? 'القطاع:' : 'Sector:'}</span>
            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              aria-label={isArabic ? 'تصفية حسب القطاع' : 'Filter by sector'}
              className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-cyan-500"
            >
              <option value="all">{isArabic ? 'الكل' : 'All Sectors'}</option>
              <option value="Government">{isArabic ? 'الحكومات (Government)' : 'Government'}</option>
              <option value="Companies">{isArabic ? 'الشركات (Companies)' : 'Companies'}</option>
              <option value="Organizations">{isArabic ? 'المنظمات (Organizations)' : 'Organizations'}</option>
              <option value="Institutions">{isArabic ? 'المؤسسات (Institutions)' : 'Institutions'}</option>
            </select>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const title = isArabic ? project.titleAr : project.titleEn;
            const desc = isArabic ? project.descAr : project.descEn;
            const category = isArabic ? project.categoryAr : project.categoryEn;
            const clientType = isArabic ? project.clientTypeAr : project.clientTypeEn;

            return (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#091122] to-[#070c18] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Top Header: Client Sector & Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2 py-0.5 rounded">
                      {clientType}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>

                  {/* Project Category Tag */}
                  <div className="text-xs text-slate-400 font-semibold mb-1">
                    {category}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {desc}
                  </p>
                </div>

                {/* Tech Stack Tags & Timeline */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-semibold uppercase tracking-wider">
                      {isArabic ? 'التقنيات المستخدمة:' : 'Tech Stack:'}
                    </span>
                    {project.timeline && (
                      <span className="font-mono text-slate-400">{project.timeline}</span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-xl bg-slate-900/40 border border-slate-800">
            <p className="text-slate-400 text-sm">
              {isArabic ? 'لا توجد مشاريع مطابقة للفلتر المحدد.' : 'No projects found matching the selected filter.'}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
