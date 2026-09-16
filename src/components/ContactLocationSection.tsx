import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Globe2,
  Award,
  ExternalLink,
  Shield
} from 'lucide-react';

export const ContactLocationSection: React.FC = () => {
  const { isArabic, company, addContactMessage } = useApp();

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    setTimeout(() => {
      addContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim() || (isArabic ? 'استفسار عام' : 'General Inquiry'),
        message: form.message.trim(),
      });
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#060a16] border-t border-slate-900 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الموقع الجغرافي والتواصل' : 'Location & Direct Inquiries'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? (
              <>
                تواصل مع المقر الرئيسي في <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">جوبا</span>
              </>
            ) : (
              <>
                Connect with Headquarters in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Juba</span>
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {isArabic
              ? 'مقرنا في عاصمة جمهورية جنوب السودان، ويسرنا استقبال الاستفسارات المؤسسية ومناقشة الشراكات التقنية.'
              : 'Our operations center is situated in Juba, South Sudan, providing enterprise consultations and digital deployment support.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Geographic Headquarters Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#091124] to-[#070b16] border border-slate-800 shadow-lg space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {isArabic ? 'المقر الرئيسي' : 'Primary Location'}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono">
                      {isArabic ? company.locationAr : company.locationEn}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                  4.8594° N, 31.5713° E
                </span>
              </div>

              {/* Specific Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">
                    {isArabic ? 'المدينة والدولة' : 'City & Country'}
                  </span>
                  <p className="text-sm font-bold text-white">
                    {isArabic ? 'جوبا – جنوب السودان' : 'Juba – South Sudan'}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">
                    {isArabic ? 'الإدارة والإشراف' : 'Management'}
                  </span>
                  <p className="text-sm font-bold text-cyan-300">
                    {isArabic ? company.managedByAr : company.managedByEn}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">
                    {isArabic ? 'البريد الرسمي' : 'Official Inquiries'}
                  </span>
                  <p className="text-sm font-semibold text-slate-200">
                    {company.email}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">
                    {isArabic ? 'النطاق الرقمي' : 'Official Portal'}
                  </span>
                  <p className="text-sm font-semibold text-slate-200 font-mono">
                    {company.domain}
                  </p>
                </div>
              </div>

              {/* Interactive Map Embed Centered on Juba, South Sudan */}
              <div className="rounded-xl overflow-hidden border border-slate-800 relative h-64 bg-slate-950">
                <iframe
                  title="South Sudan Technology Location - Juba, South Sudan"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=31.5200%2C4.8100%2C31.6300%2C4.9100&amp;layer=mapnik&amp;marker=4.8594%2C31.5713"
                  className="w-full h-full border-0 filter invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute bottom-2.5 right-2.5 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded border border-slate-700 text-[10px] text-slate-300 flex items-center gap-1.5 shadow">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>Juba, South Sudan (4.8594° N, 31.5713° E)</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Messaging Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#091124] to-[#070b16] border border-slate-800 shadow-lg">
              
              <div className="mb-6 space-y-1.5">
                <h3 className="text-xl font-bold text-white">
                  {isArabic ? 'إرسال رسالة مباشرة' : 'Send a Direct Message'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isArabic
                    ? 'للاستفسارات العامة، شراكات العمل، أو الدعم الفني المؤسسي.'
                    : 'For general inquiries, strategic partnerships, or institutional advisory.'}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">
                    {isArabic ? 'تم استلام رسالتك' : 'Message Sent Successfully'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {isArabic
                      ? 'شكرًا لتواصلك مع South Sudan Technology. سيقوم ممثلنا بالرد عليك قريباً.'
                      : 'Thank you for reaching out to South Sudan Technology. Our representative will follow up with you promptly.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs text-cyan-400 hover:underline"
                  >
                    {isArabic ? 'إرسال رسالة جديدة' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="msg-name" className="block text-xs font-medium text-slate-300 mb-1">
                      {isArabic ? 'الاسم بالكامل *' : 'Your Full Name *'}
                    </label>
                    <input
                      id="msg-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={isArabic ? 'الاسم الكريم' : 'Full Name'}
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="msg-email" className="block text-xs font-medium text-slate-300 mb-1">
                      {isArabic ? 'البريد الإلكتروني *' : 'Email Address *'}
                    </label>
                    <input
                      id="msg-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="msg-subject" className="block text-xs font-medium text-slate-300 mb-1">
                      {isArabic ? 'موضوع الرسالة' : 'Subject'}
                    </label>
                    <input
                      id="msg-subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder={isArabic ? 'موضوع الاستفسار' : 'Inquiry subject'}
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="msg-message" className="block text-xs font-medium text-slate-300 mb-1">
                      {isArabic ? 'نص الرسالة *' : 'Message *'}
                    </label>
                    <textarea
                      id="msg-message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={isArabic ? 'اكتب رسالتك هنا...' : 'Type your message here...'}
                      className="w-full p-3 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <Send className={`w-3.5 h-3.5 ${isArabic ? 'rotate-180' : ''}`} />
                    <span>{loading ? (isArabic ? 'جارِ الإرسال...' : 'Sending...') : (isArabic ? 'إرسال الرسالة' : 'Send Message')}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
