import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  FileText,
  User
} from 'lucide-react';

export const ProjectRequestSection: React.FC = () => {
  const { isArabic, services, addProjectRequest, selectedServiceForQuote } = useApp();

  const [formData, setFormData] = useState({
    clientName: '',
    organization: '',
    email: '',
    phone: '',
    serviceType: '',
    description: '',
    estimatedBudget: '',
    deadline: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync when user clicks a service quote button
  useEffect(() => {
    if (selectedServiceForQuote) {
      setFormData((prev) => ({ ...prev, serviceType: selectedServiceForQuote }));
    }
  }, [selectedServiceForQuote]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.clientName.trim()) {
      setErrorMsg(isArabic ? 'يرجى إدخال اسم العميل' : 'Please enter your name');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg(isArabic ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg(isArabic ? 'يرجى إدخال رقم الهاتف' : 'Please enter your phone number');
      return;
    }
    if (!formData.serviceType) {
      setErrorMsg(isArabic ? 'يرجى تحديد نوع الخدمة المطلوبة' : 'Please select the required service');
      return;
    }
    if (!formData.description.trim()) {
      setErrorMsg(isArabic ? 'يرجى كتابة وصف موجز للمشروع' : 'Please describe your project');
      return;
    }

    setIsSubmitting(true);

    // Save to AppContext state (and durable storage)
    setTimeout(() => {
      addProjectRequest({
        clientName: formData.clientName.trim(),
        organization: formData.organization.trim() || (isArabic ? 'جهة خاصة / مستقل' : 'Independent / Direct'),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        serviceType: formData.serviceType,
        description: formData.description.trim(),
        estimatedBudget: formData.estimatedBudget || (isArabic ? 'غير محدد' : 'Not specified'),
        deadline: formData.deadline || (isArabic ? 'مرن' : 'Flexible')
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        clientName: '',
        organization: '',
        email: '',
        phone: '',
        serviceType: '',
        description: '',
        estimatedBudget: '',
        deadline: '',
      });
    }, 600);
  };

  return (
    <section id="request-project" className="py-24 relative bg-[#050811] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-sky-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isArabic ? 'بدء التعاقد وتطوير الأنظمة' : 'Enterprise Engagement'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? (
              <>
                طلب مشروع تقني مع <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">South Sudan Technology</span>
              </>
            ) : (
              <>
                Request a Project with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">South Sudan Technology</span>
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            {isArabic
              ? 'أرسل تفاصيل مشروعك أو متطلبات مؤسستك، وسيقوم فريق الاستشارات الهندسية في جوبا والشبكة الدولية بدراسة الطلب وتقديم مقترح فني مفصل.'
              : 'Submit your project specifications or institutional requirements. Our executive engineering team in Juba will review your request and furnish a technical proposal.'}
          </p>
        </div>

        {/* The Project Request Form Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#091024] to-[#060914] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40">
          
          {isSubmitted ? (
            /* Exact Submission Confirmation Message as requested */
            <div className="text-center py-12 px-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/20">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">
                  {isArabic ? 'تم استلام طلبك بنجاح' : 'Project Request Received'}
                </h3>
                {/* User Prompt Exact Confirmation Message */}
                <p className="text-base sm:text-lg text-cyan-200 font-medium max-w-xl mx-auto leading-relaxed">
                  Thank you. Your project request has been received. Our team will contact you shortly.
                </p>
                {isArabic && (
                  <p className="text-sm sm:text-base text-slate-300">
                    شكرًا لك. تم استلام طلب مشروعك بنجاح. سيتواصل معك فريقنا في أقرب وقت.
                  </p>
                )}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  {isArabic ? 'إرسال طلب مشروع آخر' : 'Submit Another Request'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/50 text-red-300 text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Client Name */}
                <div className="space-y-1.5">
                  <label htmlFor="req-clientName" className="block text-xs font-semibold text-slate-300">
                    {isArabic ? 'اسم العميل *' : 'Client Name *'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
                    <input
                      id="req-clientName"
                      type="text"
                      name="clientName"
                      required
                      value={formData.clientName}
                      onChange={handleChange}
                      placeholder={isArabic ? 'الاسم الثلاثي أو المفوض' : 'e.g., John Deng / Sarah Martin'}
                      className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2.5 text-sm text-white bg-slate-900/90 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* 2. Company or Organization Name */}
                <div className="space-y-1.5">
                  <label htmlFor="req-organization" className="block text-xs font-semibold text-slate-300">
                    {isArabic ? 'اسم الشركة أو المنظمة *' : 'Company or Organization Name *'}
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
                    <input
                      id="req-organization"
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder={isArabic ? 'اسم الهيئة، الوزارة، الشركة أو المنظمة' : 'e.g., Ministry, Enterprise Ltd, or NGO'}
                      className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2.5 text-sm text-white bg-slate-900/90 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* 3. Email */}
                <div className="space-y-1.5">
                  <label htmlFor="req-email" className="block text-xs font-semibold text-slate-300">
                    {isArabic ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
                    <input
                      id="req-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@organization.org"
                      className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2.5 text-sm text-white bg-slate-900/90 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* 4. Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="req-phone" className="block text-xs font-semibold text-slate-300">
                    {isArabic ? 'رقم الهاتف *' : 'Phone Number *'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
                    <input
                      id="req-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+211 9..."
                      className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2.5 text-sm text-white bg-slate-900/90 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* 5. Service Type */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="req-serviceType" className="block text-xs font-semibold text-slate-300">
                    {isArabic ? 'نوع الخدمة المطلوبة *' : 'Service Type *'}
                  </label>
                  <select
                    id="req-serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm text-white bg-slate-900/90 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                  >
                    <option value="">
                      {isArabic ? '-- اختر نوع الخدمة --' : '-- Select Required Service --'}
                    </option>
                    {services.map((svc) => (
                      <option
                        key={svc.id}
                        value={isArabic ? svc.titleAr : svc.titleEn}
                      >
                        {isArabic ? svc.titleAr : svc.titleEn}
                      </option>
                    ))}
                    <option value="Government & Digital Systems">
                      {isArabic ? 'منظومة حكومية خاصة (Special Government System)' : 'Government & Digital Systems'}
                    </option>
                    <option value="Multi-Service Tech Advisory">
                      {isArabic ? 'استشارة تقنية متكاملة متعددة الخدمات' : 'Multi-Service Comprehensive Engagement'}
                    </option>
                  </select>
                </div>

                {/* 6. Approximate Budget */}
                <div className="space-y-1.5">
                  <label htmlFor="req-estimatedBudget" className="block text-xs font-semibold text-slate-300">
                    {isArabic ? 'الميزانية التقريبية' : 'Estimated Budget'}
                  </label>
                  <div className="relative">
                    <DollarSign className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
                    <input
                      id="req-estimatedBudget"
                      type="text"
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleChange}
                      placeholder={isArabic ? 'مثال: $5,000 - $15,000' : 'e.g., $5,000 - $25,000 USD'}
                      className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2.5 text-sm text-white bg-slate-900/90 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* 7. Required Deadline */}
                <div className="space-y-1.5">
                  <label htmlFor="req-deadline" className="block text-xs font-semibold text-slate-300">
                    {isArabic ? 'الموعد المطلوب للتسليم' : 'Required Deadline / Timeline'}
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3" />
                    <input
                      id="req-deadline"
                      type="text"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      placeholder={isArabic ? 'مثال: خلال شهرين / عاجل' : 'e.g., Within 2-3 months / Q3 2026'}
                      className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2.5 text-sm text-white bg-slate-900/90 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* 8. Project Description */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="req-description" className="block text-xs font-semibold text-slate-300">
                    {isArabic ? 'وصف المشروع والمتطلبات *' : 'Project Description & Objectives *'}
                  </label>
                  <textarea
                    id="req-description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder={
                      isArabic
                        ? 'وضح باختصار أهداف النظام، المستخدمين المستهدفين، وأي متطلبات تشغيلية خاصة...'
                        : 'Describe your requirements, system objectives, intended user volume, and specific technical constraints...'
                    }
                    className="w-full p-3 text-sm text-white bg-slate-900/90 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="submit-project-request-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  <Send className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
                  <span>
                    {isSubmitting
                      ? isArabic
                        ? 'جارِ إرسال الطلب...'
                        : 'Transmitting Request...'
                      : isArabic
                      ? 'إرسال طلب المشروع'
                      : 'Submit Project Request'}
                  </span>
                </button>
                <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>
                    {isArabic
                      ? 'تخضع كافة البيانات والطلبات لبروتوكول السرية وحماية المعلومات.'
                      : 'All submissions are encrypted and handled under corporate non-disclosure.'}
                  </span>
                </div>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
