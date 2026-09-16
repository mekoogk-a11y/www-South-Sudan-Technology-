import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Project, ProjectRequest, ContactMessage } from '../types';
import {
  X,
  Lock,
  Unlock,
  Layers,
  Inbox,
  MessageSquare,
  Settings,
  Plus,
  Trash2,
  Edit3,
  Check,
  Search,
  Download,
  ExternalLink,
  Shield,
  Activity,
  AlertCircle,
  FileText
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    isArabic,
    isAdminOpen,
    setIsAdminOpen,
    isAdminAuthenticated,
    setIsAdminAuthenticated,
    requests,
    updateRequestStatus,
    deleteRequest,
    projects,
    addProject,
    updateProject,
    deleteProject,
    messages,
    updateMessageStatus,
    deleteMessage,
    company,
    updateCompanyInfo,
    services
  } = useApp();

  const [activeTab, setActiveTab] = useState<'requests' | 'projects' | 'messages' | 'services' | 'settings'>('requests');
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Project Editor State
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [projectForm, setProjectForm] = useState<{
    id?: string;
    titleEn: string;
    titleAr: string;
    categoryEn: string;
    categoryAr: string;
    clientTypeEn: 'Government' | 'Companies' | 'Organizations' | 'Institutions';
    clientTypeAr: 'الحكومات' | 'الشركات' | 'المنظمات' | 'المؤسسات';
    descEn: string;
    descAr: string;
    techStack: string;
    status: 'Completed' | 'In Development' | 'Upcoming';
    timeline: string;
  }>({
    titleEn: '',
    titleAr: '',
    categoryEn: '',
    categoryAr: '',
    clientTypeEn: 'Government',
    clientTypeAr: 'الحكومات',
    descEn: '',
    descAr: '',
    techStack: 'React, Node.js, PostgreSQL',
    status: 'In Development',
    timeline: '2026',
  });

  // Requests Filter & Search
  const [requestSearch, setRequestSearch] = useState('');
  const [requestStatusFilter, setRequestStatusFilter] = useState<string>('all');
  const [selectedRequestDetails, setSelectedRequestDetails] = useState<ProjectRequest | null>(null);

  // Settings Form State
  const [settingsForm, setSettingsForm] = useState({
    email: company.email,
    phone: company.phone,
    managedByEn: company.managedByEn,
    managedByAr: company.managedByAr,
  });
  const [settingsSaved, setSettingsSaved] = useState(false);

  if (!isAdminOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default passcodes for management: "saeed2026" or "sst2026" or "admin2026"
    if (passcode.trim() === 'saeed2026' || passcode.trim() === 'sst2026' || passcode.trim() === 'admin2026') {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('sst_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError(isArabic ? 'رمز الدخول غير صحيح. الرمز الافتراضي للإدارة: saeed2026' : 'Invalid passcode. Default management PIN: saeed2026');
    }
  };

  const handleLogout = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('sst_admin_auth');
    setPasscode('');
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const techArray = projectForm.techStack
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (projectForm.id) {
      updateProject(projectForm.id, {
        titleEn: projectForm.titleEn,
        titleAr: projectForm.titleAr,
        categoryEn: projectForm.categoryEn,
        categoryAr: projectForm.categoryAr,
        clientTypeEn: projectForm.clientTypeEn,
        clientTypeAr: projectForm.clientTypeAr,
        descEn: projectForm.descEn,
        descAr: projectForm.descAr,
        techStack: techArray,
        status: projectForm.status,
        timeline: projectForm.timeline,
      });
    } else {
      addProject({
        titleEn: projectForm.titleEn,
        titleAr: projectForm.titleAr,
        categoryEn: projectForm.categoryEn || 'Digital System',
        categoryAr: projectForm.categoryAr || 'نظام رقمي',
        clientTypeEn: projectForm.clientTypeEn,
        clientTypeAr: projectForm.clientTypeAr,
        descEn: projectForm.descEn,
        descAr: projectForm.descAr,
        techStack: techArray,
        status: projectForm.status,
        timeline: projectForm.timeline,
        featured: true,
      });
    }

    setIsEditingProject(false);
    setProjectForm({
      titleEn: '',
      titleAr: '',
      categoryEn: '',
      categoryAr: '',
      clientTypeEn: 'Government',
      clientTypeAr: 'الحكومات',
      descEn: '',
      descAr: '',
      techStack: 'React, Node.js, PostgreSQL',
      status: 'In Development',
      timeline: '2026',
    });
  };

  const openEditProject = (proj: Project) => {
    setProjectForm({
      id: proj.id,
      titleEn: proj.titleEn,
      titleAr: proj.titleAr,
      categoryEn: proj.categoryEn,
      categoryAr: proj.categoryAr,
      clientTypeEn: proj.clientTypeEn,
      clientTypeAr: proj.clientTypeAr,
      descEn: proj.descEn,
      descAr: proj.descAr,
      techStack: proj.techStack.join(', '),
      status: proj.status,
      timeline: proj.timeline || '2026',
    });
    setIsEditingProject(true);
  };

  const exportRequestsToCSV = () => {
    if (requests.length === 0) return;
    const headers = ['ID', 'Date', 'Status', 'Client Name', 'Organization', 'Email', 'Phone', 'Service Type', 'Budget', 'Deadline', 'Description'];
    const rows = requests.map((r) => [
      r.id,
      new Date(r.createdAt).toLocaleDateString(),
      r.status,
      `"${r.clientName.replace(/"/g, '""')}"`,
      `"${r.organization.replace(/"/g, '""')}"`,
      r.email,
      r.phone,
      `"${r.serviceType.replace(/"/g, '""')}"`,
      `"${r.estimatedBudget.replace(/"/g, '""')}"`,
      `"${r.deadline.replace(/"/g, '""')}"`,
      `"${r.description.replace(/"/g, '""')}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `SST_Project_Requests_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyInfo({
      email: settingsForm.email,
      phone: settingsForm.phone,
      managedByEn: settingsForm.managedByEn,
      managedByAr: settingsForm.managedByAr,
    });
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 2500);
  };

  const filteredRequests = requests.filter((r) => {
    const matchStatus = requestStatusFilter === 'all' || r.status === requestStatusFilter;
    const matchSearch =
      requestSearch === '' ||
      r.clientName.toLowerCase().includes(requestSearch.toLowerCase()) ||
      r.organization.toLowerCase().includes(requestSearch.toLowerCase()) ||
      r.serviceType.toLowerCase().includes(requestSearch.toLowerCase()) ||
      r.email.toLowerCase().includes(requestSearch.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#070c18] border border-cyan-500/40 rounded-2xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl shadow-cyan-950/80 overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#0a1122]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>South Sudan Technology</span>
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  {isArabic ? 'لوحة تحكم الإدارة' : 'Executive Management Console'}
                </span>
              </h2>
              <p className="text-[11px] text-slate-400">
                {isArabic ? 'إدارة Saeed Group للأنشطة المتعددة — جوبا' : 'Managed by Saeed • Saeed Group For Multiple Activities'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdminAuthenticated && (
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                {isArabic ? 'تسجيل الخروج' : 'Logout'}
              </button>
            )}
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {!isAdminAuthenticated ? (
          /* Authentication Screen */
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center max-w-md mx-auto text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/15">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-white">
                {isArabic ? 'بوابة دخول الإدارة المعتمدة' : 'Restricted Executive Access'}
              </h3>
              <p className="text-xs text-slate-400">
                {isArabic
                  ? 'هذه اللوحة مخصصة لإدارة الشركة ومجموعة سعيد للأنشطة المتعددة لمتابعة طلبات العملاء والمشاريع.'
                  : 'This console is exclusively reserved for South Sudan Technology management and the Saeed Group leadership.'}
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder={isArabic ? 'أدخل رمز الدخول السري...' : 'Enter management passcode...'}
                  className="w-full px-4 py-3 text-sm text-center text-white bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-cyan-500 font-mono tracking-widest"
                />
              </div>

              {authError && (
                <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-500/50 text-red-300 text-xs">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                {isArabic ? 'تسجيل الدخول' : 'Authorize Access'}
              </button>

              <p className="text-[11px] text-slate-500">
                {isArabic ? 'رمز الدخول الافتراضي: ' : 'Default management PIN: '}
                <code className="text-cyan-400 font-bold bg-slate-900 px-1.5 py-0.5 rounded">saeed2026</code>
              </p>
            </form>
          </div>
        ) : (
          /* Authenticated Management Portal */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Nav Tabs */}
            <div className="px-6 border-b border-slate-800 bg-[#090f20] flex items-center gap-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab('requests')}
                className={`px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'requests'
                    ? 'border-cyan-400 text-cyan-400 bg-cyan-950/30'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Inbox className="w-4 h-4" />
                <span>{isArabic ? 'طلبات المشاريع' : 'Project Requests'}</span>
                <span className="px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px]">
                  {requests.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'projects'
                    ? 'border-cyan-400 text-cyan-400 bg-cyan-950/30'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>{isArabic ? 'إدارة المشاريع' : 'Manage Projects'}</span>
                <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 text-[10px]">
                  {projects.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('messages')}
                className={`px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'messages'
                    ? 'border-cyan-400 text-cyan-400 bg-cyan-950/30'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isArabic ? 'رسائل العملاء' : 'Customer Inquiries'}</span>
                <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 text-[10px]">
                  {messages.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'settings'
                    ? 'border-cyan-400 text-cyan-400 bg-cyan-950/30'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>{isArabic ? 'إعدادات الموقع' : 'Company Settings'}</span>
              </button>
            </div>

            {/* Tab 1: Project Requests */}
            {activeTab === 'requests' && (
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                
                {/* Search & Export Toolbar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
                      <input
                        type="text"
                        value={requestSearch}
                        onChange={(e) => setRequestSearch(e.target.value)}
                        placeholder={isArabic ? 'بحث في الطلبات...' : 'Search requests...'}
                        className="w-full pl-8 pr-3 rtl:pr-8 rtl:pl-3 py-1.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <select
                      value={requestStatusFilter}
                      onChange={(e) => setRequestStatusFilter(e.target.value)}
                      className="px-2.5 py-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none"
                    >
                      <option value="all">{isArabic ? 'كافة الحالات' : 'All Statuses'}</option>
                      <option value="New">New</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Contacted">Contacted</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </div>

                  <button
                    onClick={exportRequestsToCSV}
                    disabled={requests.length === 0}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors disabled:opacity-40 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{isArabic ? 'تصدير الطلبات (CSV)' : 'Export to CSV'}</span>
                  </button>
                </div>

                {/* Requests Table / Cards */}
                {filteredRequests.length === 0 ? (
                  <div className="text-center py-16 p-8 rounded-xl bg-slate-900/30 border border-slate-800 text-slate-400 text-xs">
                    {requests.length === 0
                      ? isArabic
                        ? 'لم يتم إرسال أي طلبات مشاريع حتى الآن. ستظهر الطلبات هنا فور إرسالها من النموذج الرئيسي.'
                        : 'No project requests received yet. Incoming requests from the public form will appear here in real-time.'
                      : isArabic
                      ? 'لا توجد طلبات تطابق معايير البحث.'
                      : 'No requests match the current search filters.'}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredRequests.map((req) => (
                      <div
                        key={req.id}
                        className="p-5 rounded-xl bg-[#091022] border border-slate-800 hover:border-cyan-500/30 transition-all space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-bold text-white">{req.clientName}</h4>
                              <span className="text-xs text-cyan-400 font-medium">({req.organization})</span>
                            </div>
                            <p className="text-[11px] text-slate-400">
                              {new Date(req.createdAt).toLocaleString()} • ID: {req.id}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <select
                              value={req.status}
                              onChange={(e) =>
                                updateRequestStatus(req.id, e.target.value as ProjectRequest['status'])
                              }
                              className="px-2 py-1 text-xs font-semibold rounded bg-slate-900 border border-slate-700 text-cyan-300 focus:outline-none"
                            >
                              <option value="New">New (جديد)</option>
                              <option value="Under Review">Under Review (قيد الدراسة)</option>
                              <option value="Contacted">Contacted (تم التواصل)</option>
                              <option value="In Progress">In Progress (قيد التنفيذ)</option>
                              <option value="Completed">Completed (مكتمل)</option>
                              <option value="Archived">Archived (مؤرشف)</option>
                            </select>

                            <button
                              onClick={() => deleteRequest(req.id)}
                              className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-950/40 rounded transition-colors"
                              title={isArabic ? 'حذف الطلب' : 'Delete Request'}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Request Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                          <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Service</span>
                            <span className="font-semibold text-white">{req.serviceType}</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Contact</span>
                            <a href={`mailto:${req.email}`} className="text-cyan-400 hover:underline block truncate">
                              {req.email}
                            </a>
                            <span className="text-slate-300">{req.phone}</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Budget</span>
                            <span className="font-semibold text-emerald-400">{req.estimatedBudget}</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Deadline</span>
                            <span className="font-semibold text-slate-200">{req.deadline}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="p-3 rounded bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                            Project Description & Scope:
                          </span>
                          {req.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Projects Manager */}
            {activeTab === 'projects' && (
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {isArabic ? 'إدارة المشاريع المعروضة' : 'Manage Portfolio Projects'}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {isArabic
                        ? 'أضف مشاريع جديدة أو عدل المشاريع السابقة والقادمة، وتحديثاتها تنعكس مباشرة في الموقع.'
                        : 'Add new systems or edit delivered/upcoming projects. Changes appear instantly on the live website.'}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setProjectForm({
                        titleEn: '',
                        titleAr: '',
                        categoryEn: '',
                        categoryAr: '',
                        clientTypeEn: 'Government',
                        clientTypeAr: 'الحكومات',
                        descEn: '',
                        descAr: '',
                        techStack: 'React, TypeScript, Node.js, PostgreSQL',
                        status: 'In Development',
                        timeline: '2026',
                      });
                      setIsEditingProject(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{isArabic ? 'إضافة مشروع جديد' : 'Add New Project'}</span>
                  </button>
                </div>

                {/* Edit / Create Form Modal */}
                {isEditingProject && (
                  <form
                    onSubmit={handleSaveProject}
                    className="p-5 rounded-xl bg-slate-900 border border-cyan-500/50 space-y-4"
                  >
                    <h4 className="text-sm font-bold text-cyan-300 border-b border-slate-800 pb-2">
                      {projectForm.id
                        ? isArabic ? 'تعديل بيانات المشروع' : 'Edit Project Details'
                        : isArabic ? 'إضافة مشروع جديد للموقع' : 'Add New System to Portfolio'}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block text-slate-300 mb-1">Title (English) *</label>
                        <input
                          type="text"
                          required
                          value={projectForm.titleEn}
                          onChange={(e) => setProjectForm({ ...projectForm, titleEn: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1">Title (Arabic) *</label>
                        <input
                          type="text"
                          required
                          value={projectForm.titleAr}
                          onChange={(e) => setProjectForm({ ...projectForm, titleAr: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1">Target Client Sector *</label>
                        <select
                          value={projectForm.clientTypeEn}
                          onChange={(e) => {
                            const val = e.target.value as Project['clientTypeEn'];
                            const arMap = {
                              Government: 'الحكومات',
                              Companies: 'الشركات',
                              Organizations: 'المنظمات',
                              Institutions: 'المؤسسات',
                            };
                            setProjectForm({
                              ...projectForm,
                              clientTypeEn: val,
                              clientTypeAr: arMap[val] as Project['clientTypeAr'],
                            });
                          }}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded text-white"
                        >
                          <option value="Government">Government (الحكومات)</option>
                          <option value="Companies">Companies (الشركات)</option>
                          <option value="Organizations">Organizations (المنظمات)</option>
                          <option value="Institutions">Institutions (المؤسسات)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1">Status *</label>
                        <select
                          value={projectForm.status}
                          onChange={(e) =>
                            setProjectForm({
                              ...projectForm,
                              status: e.target.value as Project['status'],
                            })
                          }
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded text-white"
                        >
                          <option value="Completed">Completed (منجز)</option>
                          <option value="In Development">In Development (قيد التطوير)</option>
                          <option value="Upcoming">Upcoming (قادم)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1">Category (e.g. Enterprise ERP / AI)</label>
                        <input
                          type="text"
                          value={projectForm.categoryEn}
                          onChange={(e) => setProjectForm({ ...projectForm, categoryEn: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1">Tech Stack (Comma Separated)</label>
                        <input
                          type="text"
                          value={projectForm.techStack}
                          onChange={(e) => setProjectForm({ ...projectForm, techStack: e.target.value })}
                          placeholder="React, Node.js, PostgreSQL, Docker"
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded text-white"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-slate-300 mb-1">Description (English)</label>
                        <textarea
                          rows={2}
                          value={projectForm.descEn}
                          onChange={(e) => setProjectForm({ ...projectForm, descEn: e.target.value })}
                          className="w-full p-2 bg-slate-950 border border-slate-800 rounded text-white"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-slate-300 mb-1">Description (Arabic)</label>
                        <textarea
                          rows={2}
                          value={projectForm.descAr}
                          onChange={(e) => setProjectForm({ ...projectForm, descAr: e.target.value })}
                          className="w-full p-2 bg-slate-950 border border-slate-800 rounded text-white"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        type="submit"
                        className="px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded cursor-pointer"
                      >
                        {isArabic ? 'حفظ المشروع' : 'Save Project'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditingProject(false)}
                        className="px-4 py-2 text-xs text-slate-400 hover:text-white bg-slate-800 rounded cursor-pointer"
                      >
                        {isArabic ? 'إلغاء' : 'Cancel'}
                      </button>
                    </div>
                  </form>
                )}

                {/* Projects List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl bg-[#091022] border border-slate-800 flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300">
                            {proj.clientTypeEn}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-400">
                            {proj.status}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white">{proj.titleEn}</h4>
                        <p className="text-xs text-slate-400 font-medium">{proj.titleAr}</p>
                        <p className="text-xs text-slate-300 mt-2 line-clamp-2">{proj.descEn}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 font-mono">
                          {proj.techStack.slice(0, 3).join(', ')}...
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openEditProject(proj)}
                            className="p-1 text-slate-400 hover:text-cyan-400"
                            title="Edit"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteProject(proj.id)}
                            className="p-1 text-slate-400 hover:text-red-400"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* Tab 3: Customer Inquiries */}
            {activeTab === 'messages' && (
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                <h3 className="text-base font-bold text-white">
                  {isArabic ? 'رسائل واستفسارات العملاء' : 'Inbound Inquiries & Messages'}
                </h3>

                {messages.length === 0 ? (
                  <div className="text-center py-16 p-8 rounded-xl bg-slate-900/30 border border-slate-800 text-slate-400 text-xs">
                    {isArabic
                      ? 'لا توجد رسائل واردة حالياً. الرسائل المرسلة من قسم التواصل ستظهر هنا.'
                      : 'No messages received yet. Inbound messages from the contact form will appear here.'}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className="p-4 rounded-xl bg-[#091022] border border-slate-800 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white">{msg.name}</span>
                            <span className="text-xs text-slate-400 font-mono">({msg.email})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <select
                              value={msg.status}
                              onChange={(e) =>
                                updateMessageStatus(msg.id, e.target.value as ContactMessage['status'])
                              }
                              className="px-2 py-0.5 text-xs rounded bg-slate-900 border border-slate-700 text-slate-200"
                            >
                              <option value="Unread">Unread</option>
                              <option value="Read">Read</option>
                              <option value="Replied">Replied</option>
                            </select>
                            <button
                              onClick={() => deleteMessage(msg.id)}
                              className="p-1 text-slate-500 hover:text-red-400"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="text-xs font-semibold text-cyan-300">
                          {isArabic ? 'الموضوع: ' : 'Subject: '}{msg.subject}
                        </div>

                        <p className="text-xs text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-800">
                          {msg.message}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab 4: Company & Site Settings */}
            {activeTab === 'settings' && (
              <div className="flex-1 p-6 overflow-y-auto max-w-2xl space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {isArabic ? 'إعدادات الشركة وبيانات الاتصال' : 'Company & Portal Settings'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isArabic
                      ? 'تحديث بيانات التواصل المباشرة والإشراف الإداري المعروضة على الموقع.'
                      : 'Manage company contact parameters and leadership identity displayed across the site.'}
                  </p>
                </div>

                <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
                  {settingsSaved && (
                    <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-500 text-emerald-300 flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>{isArabic ? 'تم حفظ التعديلات بنجاح' : 'Settings successfully updated!'}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-slate-300 mb-1">Official Email</label>
                    <input
                      type="email"
                      value={settingsForm.email}
                      onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Official Phone</label>
                    <input
                      type="text"
                      value={settingsForm.phone}
                      onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Management Attribution (English)</label>
                    <input
                      type="text"
                      value={settingsForm.managedByEn}
                      onChange={(e) => setSettingsForm({ ...settingsForm, managedByEn: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Management Attribution (Arabic)</label>
                    <input
                      type="text"
                      value={settingsForm.managedByAr}
                      onChange={(e) => setSettingsForm({ ...settingsForm, managedByAr: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-white text-xs"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg cursor-pointer"
                    >
                      {isArabic ? 'تحديث الإعدادات' : 'Save Changes'}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
