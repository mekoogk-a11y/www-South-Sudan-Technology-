import { Service, Project, CompanyInfo } from '../types';

export const companyDefaults: CompanyInfo = {
  nameEn: 'South Sudan Technology',
  nameAr: 'تكنولوجيا جنوب السودان',
  taglineEn: 'Technology Solutions for Government, Business & Organizations',
  taglineAr: 'حلول تقنية متطورة للحكومات والشركات والمنظمات والمؤسسات',
  subtitleEn: 'Building the Digital Future of South Sudan',
  subtitleAr: 'بناء المستقبل الرقمي لجنوب السودان',
  locationEn: 'Juba, South Sudan',
  locationAr: 'جوبا، جنوب السودان',
  coordinates: {
    lat: 4.8594,
    lng: 31.5713
  },
  managedByEn: 'Managed by Saeed',
  managedByAr: 'إدارة سعيد',
  rightsYear: '2026',
  saeedGroupEn: 'All Rights Reserved to Saeed Group for Multiple Activities',
  saeedGroupAr: 'جميع الحقوق محفوظة لمجموعة سعيد للأنشطة المتعددة',
  email: 'contact@southsudantechnology.com',
  phone: '+211 920 000 000',
  domain: 'southsudantechnology.com'
};

export const initialServices: Service[] = [
  {
    id: 'web-dev',
    titleEn: 'Website Design & Development',
    titleAr: 'تصميم وتطوير المواقع الإلكترونية',
    descEn: 'High-performance, modern, and secure web portals, corporate portals, and scalable cloud-hosted web platforms tailored for institutions and businesses.',
    descAr: 'بوابات ومواقع إلكترونية حديثة فائقة الأداء، مؤمنة ومصممة خصيصاً للمؤسسات والشركات مع توافق كامل على كافة الشاشات.',
    category: 'development',
    icon: 'Globe',
    featuresEn: ['Responsive Desktop & Mobile Architectures', 'Next.js & React High Performance', 'Enterprise CMS & Security Hardening', 'SEO & Speed Optimization'],
    featuresAr: ['تصاميم متجاوبة للهواتف والحواسيب', 'أداء استثنائي بتقنيات حديثة', 'أنظمة إدارة محتوى آمنة ومتقدمة', 'تهيئة لمحركات البحث وسرعة فائقة'],
    featured: true
  },
  {
    id: 'mobile-dev',
    titleEn: 'Mobile App Development (Android & iOS)',
    titleAr: 'تطوير تطبيقات الهاتف Android و iOS',
    descEn: 'Native and cross-platform mobile applications with offline-first capabilities, secure data sync, and modern UI built for real-world conditions in South Sudan.',
    descAr: 'تطبيقات هواتف ذكية لأنظمة أندرويد وiOS تتميز بالسرعة والعمل دون اتصال بالإنترنت والمزامنة السحابية الآمنة.',
    category: 'development',
    icon: 'Smartphone',
    featuresEn: ['Android & iOS Unified Codebases', 'Offline-First Storage & Data Sync', 'Biometric Authentication & Security', 'Push Notifications & Real-Time Sync'],
    featuresAr: ['تطبيقات موحدة لنظامي Android و iOS', 'دعم العمل الميداني دون اتصال بالإنترنت', 'حماية متقدمة ومصادقة بيومترية', 'إشعارات فورية ومزامنة سريعة'],
    featured: true
  },
  {
    id: 'custom-software',
    titleEn: 'Professional Software & Systems Development',
    titleAr: 'تطوير البرامج والأنظمة الاحترافية',
    descEn: 'Custom-engineered desktop, server, and microservice architectures built for high-throughput enterprise operations and data integrity.',
    descAr: 'تطوير برمجيات وأنظمة مصممة خصيصاً لتلبية متطلبات العمل المعقدة والمعايير العالمية للأداء واستقرار البيانات.',
    category: 'development',
    icon: 'Laptop',
    featuresEn: ['Modular Microservices & Scalability', 'High-Concurrency Processing', 'Role-Based Access Control (RBAC)', 'Comprehensive Audit Trails'],
    featuresAr: ['بنية سحابية معيارية قابلة للتوسع', 'معالجة كميات بيانات ضخمة بكفاءة', 'نظام صلاحيات وأدوار متقدم', 'سجلات تتبع وتدقيق أمني شاملة'],
    featured: true
  },
  {
    id: 'erp-management',
    titleEn: 'Enterprise Management Systems (ERP)',
    titleAr: 'أنظمة إدارة الشركات والمؤسسات',
    descEn: 'Integrated ERP platforms covering human resources, supply chain, inventory management, financial accounting, and operational reporting.',
    descAr: 'أنظمة تخطيط وإدارة موارد المؤسسات المتكاملة (ERP) تشمل الموارد البشرية، المحاسبة، المخزون، وسلاسل الإمداد.',
    category: 'enterprise',
    icon: 'Building2',
    featuresEn: ['Financial & Payroll Automation', 'Multi-Branch Inventory Tracking', 'Procurement & Vendor Portals', 'Executive Analytics Dashboards'],
    featuresAr: ['أتمتة العمليات المالية والرواتب', 'إدارة المخازن متعددة الفروع', 'بوابات الموردين والمشتريات', 'لوحات معلومات تنفيذية متقدمة'],
    featured: true
  },
  {
    id: 'ai-solutions',
    titleEn: 'Artificial Intelligence (AI)',
    titleAr: 'الذكاء الاصطناعي AI',
    descEn: 'State-of-the-art predictive modeling, natural language processing, automated document comprehension, and intelligent data decision engines.',
    descAr: 'تطبيقات ونماذج الذكاء الاصطناعي التنبؤية، معالجة اللغات الطبيعية، وتحليل المستندات والبيانات لدعم اتخاذ القرارات الذكية.',
    category: 'ai_data',
    icon: 'Bot',
    featuresEn: ['Custom Machine Learning Pipelines', 'Smart Document Extraction & OCR', 'Predictive Resource Allocation', 'Intelligent Chat & Automation Agents'],
    featuresAr: ['خطوط نمذجة وتعلم آلي متطورة', 'استخراج البيانات الذكي من الوثائق', 'تنبؤ استهلاك وتوزيع الموارد', 'مساعدات محادثة وأتمتة ذكية'],
    featured: true
  },
  {
    id: 'ai-integration',
    titleEn: 'AI Integration into Systems & Applications',
    titleAr: 'دمج الذكاء الاصطناعي في الأنظمة والتطبيقات',
    descEn: 'Seamlessly embedding AI models and intelligent agents directly into your legacy software, operational workflows, and mobile applications.',
    descAr: 'دمج قدرات ونماذج الذكاء الاصطناعي الحديثة بسلاسة داخل برامجك الحالية وسير العمل اليومي والأنظمة التشغيلية.',
    category: 'ai_data',
    icon: 'Cpu',
    featuresEn: ['REST & gRPC AI API Gateways', 'Semantic Search & Knowledge Bases', 'Automated Verification Workflows', 'Continuous Feedback Learning'],
    featuresAr: ['بوابات ربط API للذكاء الاصطناعي', 'البحث الدلالي وقواعد المعرفة', 'سير عمل تحقق وتصديق ذاتي', 'تعلّم وتحديث مستمر للأداء']
  },
  {
    id: 'automation',
    titleEn: 'Workflow & Process Automation',
    titleAr: 'الأتمتة Automation',
    descEn: 'Eliminating manual administrative bottlenecks through automated business logic, invoice processing, scheduled reporting, and data pipelines.',
    descAr: 'تحويل المهام الروتينية الورقية واليدوية إلى مسارات عمل رقمية مؤتمتة بالكامل ترفع الكفاءة وتمنع الأخطاء.',
    category: 'enterprise',
    icon: 'Workflow',
    featuresEn: ['Custom Event-Driven Triggers', 'Zero-Paper Digital Forms', 'ERP & Third-Party System Bridging', 'Real-time Anomaly Notifications'],
    featuresAr: ['مشغلات أحداث مؤتمتة فورية', 'معاملات رقمية بدون أوراق', 'ربط الأنظمة المختلفة بسلاسة', 'تنبيهات فورية بالأنشطة غير المعتادة']
  },
  {
    id: 'databases-api',
    titleEn: 'Databases & API Engineering',
    titleAr: 'قواعد البيانات وواجهات API',
    descEn: 'Architecting robust relational and NoSQL databases, scalable RESTful/GraphQL APIs, distributed replication, and enterprise data security.',
    descAr: 'تصميم وبناء قواعد البيانات العالية الاستقرار وواجهات البرمجة API السريعة والمحمية لربط المنظومات السحابية والداخلية.',
    category: 'infrastructure',
    icon: 'Database',
    featuresEn: ['PostgreSQL, MySQL & NoSQL Optimization', 'Secure OAuth2 & Tokenized APIs', 'Automated Backup & Disaster Recovery', 'Data Migration & Sanitization'],
    featuresAr: ['تحسين أداء قواعد البيانات العلائقية', 'واجهات برمجية مشفرة ببروتوكولات أمان', 'نسخ احتياطي واستعادة فورية عند الطوارئ', 'ترحيل وتطهير البيانات بأمان']
  },
  {
    id: 'gov-systems',
    titleEn: 'Government & Digital Systems',
    titleAr: 'الأنظمة الحكومية والرقمية',
    descEn: 'High-security, compliant digital governance infrastructures, citizen identity systems, e-licensing, and ministry workflow portals.',
    descAr: 'بنية تحتية رقمية فائقة الأمان مخصصة للجهات الحكومية تشمل بوابات الخدمات، السجلات الوطنية، والأنظمة التوثيقية.',
    category: 'enterprise',
    icon: 'Landmark',
    featuresEn: ['Sovereign Data Protection Protocols', 'National Registry Interoperability', 'Public Service E-Permits & Portals', 'Audit-Compliant Digital Records'],
    featuresAr: ['بروتوكولات حماية السيادة الرقمية', 'ربط السجلات الوطنية الموحدة', 'بوابات المعاملات والتراخيص الحكومية', 'سجلات رقمية مطابقة للمعايير القياسية'],
    featured: true
  },
  {
    id: 'org-solutions',
    titleEn: 'Tech Solutions for Companies & Organizations',
    titleAr: 'الحلول التقنية للشركات والمنظمات',
    descEn: 'Purpose-built software suites tailored for international NGOs, humanitarian agencies, private enterprises, and commercial institutions.',
    descAr: 'حزم برمجية متخصصة لمنظمات المجتمع المدني، الهيئات الإنسانية الدولية، والشركات التجارية الخاصة.',
    category: 'enterprise',
    icon: 'Briefcase',
    featuresEn: ['Donor & Grant Tracking Systems', 'Field Asset & Fleet Management', 'Offline Survey & Data Collection', 'Multi-Currency Financial Engines'],
    featuresAr: ['أنظمة تتبع المنح والمشاريع الإنسانية', 'إدارة الأصول الميدانية والأسطول', 'جمع البيانات والاستبيانات الميدانية', 'محركات محاسبة متعددة العملات']
  },
  {
    id: 'ui-ux-design',
    titleEn: 'UI/UX Interface & Experience Design',
    titleAr: 'تصميم واجهات وتجربة المستخدم UI/UX',
    descEn: 'Human-centered digital interfaces, interactive prototypes, design systems, and rigorous accessibility testing for diverse linguistic audiences.',
    descAr: 'تصميم واجهات مستخدم تفاعلية وعصرية تركز على سهولة الاستخدام وتوفر تجربة رقمية استثنائية باللغتين العربية والإنجليزية.',
    category: 'development',
    icon: 'Palette',
    featuresEn: ['Bilingual RTL/LTR Design Systems', 'Interactive High-Fidelity Wireframes', 'Usability Audits & User Testing', 'Scalable Component Libraries'],
    featuresAr: ['أنظمة تصميم تدعم العربية والإنجليزية', 'نماذج تفاعلية فائقة الدقة', 'اختبارات قابلية الاستخدام وسهولة التصفح', 'مكتبات عناصر بصرية قابلة للتوسع']
  },
  {
    id: 'it-consulting',
    titleEn: 'IT Consulting & Technical Advisory',
    titleAr: 'الاستشارات والحلول التقنية',
    descEn: 'Strategic technology roadmaps, cloud readiness assessment, cybersecurity audits, and digital transformation architecture for leadership teams.',
    descAr: 'تقديم المشورة الاستراتيجية، تقييم البنية التحتية، مراجعة الأمن السيبراني، وتخطيط مسارات التحول الرقمي الشامل للمؤسسات.',
    category: 'advisory',
    icon: 'Compass',
    featuresEn: ['Digital Transformation Roadmaps', 'Cybersecurity & Vulnerability Audits', 'Infrastructure Modernization Audits', 'Vendor & Technology Due Diligence'],
    featuresAr: ['خرائط طريق استراتيجية للتحول الرقمي', 'تدقيق وتقييم الأمن السيبراني', 'تحديث وتطوير البنية التحتية السحابية', 'تقييم فني واختيار التقنيات المناسبة']
  }
];

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    titleEn: 'Digital Governance & Citizen Services Platform',
    titleAr: 'منظومة الخدمات الحكومية الرقمية الموحدة',
    categoryEn: 'Digital Governance',
    categoryAr: 'الحلول الحكومية والرقمية',
    clientTypeEn: 'Government',
    clientTypeAr: 'الحكومات',
    descEn: 'A high-security centralized web portal enabling electronic document processing, verifiable credential issuance, and departmental workflow coordination.',
    descAr: 'بوابة رقمية مركزية آمنة تتيح معالجة المعاملات والوثائق إلكترونياً وتنسيق الإجراءات الحكومية بكفاءة وموثوقية عالية.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'OAuth2', 'AES-256 Encryption'],
    status: 'Completed',
    featured: true,
    timeline: '2025 - 2026'
  },
  {
    id: 'proj-2',
    titleEn: 'Enterprise Resource Planning & Multi-Branch ERP',
    titleAr: 'نظام إدارة موارد الشركات متعدد الفروع',
    categoryEn: 'Enterprise Solutions',
    categoryAr: 'أنظمة إدارة الشركات',
    clientTypeEn: 'Companies',
    clientTypeAr: 'الشركات',
    descEn: 'Comprehensive ERP architecture integrating supply chain management, real-time inventory tracking across Juba depots, payroll, and fiscal accounting.',
    descAr: 'نظام ERP متكامل يربط بين إدارة سلاسل التوريد، التتبع المباشر لحركة المخازن، حسابات الرواتب، وإعداد التقارير المالية.',
    techStack: ['TypeScript', 'Express', 'Redis', 'TailwindCSS', 'PostgreSQL', 'REST API'],
    status: 'Completed',
    featured: true,
    timeline: '2025'
  },
  {
    id: 'proj-3',
    titleEn: 'Field Data Collection & Humanitarian Sync Suite',
    titleAr: 'منظومة العمليات والمسح الميداني للمنظمات',
    categoryEn: 'Mobile & Humanitarian Tech',
    categoryAr: 'تطبيقات الهاتف والمنظمات',
    clientTypeEn: 'Organizations',
    clientTypeAr: 'المنظمات',
    descEn: 'Cross-platform mobile application providing offline-first biometric and survey collection, syncing automatically when connectivity is restored.',
    descAr: 'تطبيق هاتف متعدد المنصات يدعم جمع البيانات والاستبيانات الميدانية في المناطق النائية دون إنترنت مع المزامنة التلقائية عند الاتصال.',
    techStack: ['React Native', 'SQLite', 'Offline P2P Sync', 'Node.js API', 'AWS Cloud'],
    status: 'Completed',
    featured: true,
    timeline: '2025'
  },
  {
    id: 'proj-4',
    titleEn: 'AI-Powered Revenue & Audit Analytics Engine',
    titleAr: 'محرك الذكاء الاصطناعي لتحليل الإيرادات والتدقيق',
    categoryEn: 'Artificial Intelligence & Automation',
    categoryAr: 'الذكاء الاصطناعي والأتمتة',
    clientTypeEn: 'Institutions',
    clientTypeAr: 'المؤسسات',
    descEn: 'Machine learning intelligence framework identifying transaction anomalies, forecasting monthly revenue patterns, and automating discrepancy alerts.',
    descAr: 'محرك ذكاء اصطناعي يكشف التباينات في المعاملات المالية، ويتنبأ بمعدلات الإيرادات الشهرية، ويقدم تقارير تدقيق آلية وفورية.',
    techStack: ['Python', 'FastAPI', 'PyTorch', 'React Dashboard', 'PostgreSQL', 'Docker'],
    status: 'In Development',
    featured: true,
    timeline: '2026'
  },
  {
    id: 'proj-5',
    titleEn: 'Institutional Document & Archival Digitization Pipeline',
    titleAr: 'نظام الأرشفة الرقمية والتوثيق الإلكتروني للمؤسسات',
    categoryEn: 'Digital Archiving & Workflow',
    categoryAr: 'الأرشفة الرقمية والأنظمة',
    clientTypeEn: 'Institutions',
    clientTypeAr: 'المؤسسات',
    descEn: 'Automated OCR optical scanning and metadata cataloging platform to transition paper-heavy records into encrypted, instantly searchable digital vaults.',
    descAr: 'منصة رقمية لتحويل السجلات الورقية إلى مستودعات رقمية مشفرة قابلة للبحث الفوري باستخدام تقنيات التعرف البصري على الحروف OCR.',
    techStack: ['OCR Engines', 'Vector Search', 'Node.js', 'Next.js', 'Cloud Storage'],
    status: 'Upcoming',
    featured: false,
    timeline: '2026 - Q3'
  },
  {
    id: 'proj-6',
    titleEn: 'Commercial B2B Trade & Logistics Management Portal',
    titleAr: 'بوابة التجارة واللوجستيات الرقمية بين الشركات',
    categoryEn: 'Commerce & Logistics',
    categoryAr: 'الحلول التجارية واللوجستية',
    clientTypeEn: 'Companies',
    clientTypeAr: 'الشركات',
    descEn: 'Custom web and mobile logistics hub managing freight schedules, customs clearance manifests, and merchant communications across trade corridors.',
    descAr: 'منصة سحابية متقدمة لإدارة مسارات الشحن والنقل اللوجستي، تتبع الشحنات، والتنسيق المباشر بين الموردين والتجار.',
    techStack: ['React', 'TailwindCSS', 'Express', 'WebSockets', 'PostgreSQL'],
    status: 'In Development',
    featured: false,
    timeline: '2026'
  }
];

export const targetClients = [
  {
    id: 'government',
    typeEn: 'Government',
    typeAr: 'الحكومات',
    subtitleEn: 'Digital Sovereign Systems & Public Administration',
    subtitleAr: 'الأنظمة السيادية الرقمية والإدارة العامة',
    descEn: 'Architecting secure national digital infrastructure, citizen service platforms, inter-ministerial databases, and data compliance protocols built with sovereign security standards.',
    descAr: 'بناء البنية التحتية الرقمية الآمنة، بوابات الخدمات الحكومية للمواطنين، وقواعد البيانات المشتركة وفق أعلى معايير الحماية والسيادة الرقمية.',
    icon: 'Landmark',
    deliverablesEn: ['National Identity Integration', 'Ministry Workflow Automation', 'Secure Public Portals', 'Government Cloud & Database Hardening'],
    deliverablesAr: ['ربط السجلات الوطنية الموحدة', 'أتمتة معاملات الوزارات', 'بوابات إلكترونية مؤمنة للجمهور', 'تأمين وحماية خوادم البيانات الحكومية']
  },
  {
    id: 'companies',
    typeEn: 'Companies',
    typeAr: 'الشركات',
    subtitleEn: 'Enterprise Scalability & Commercial Competitiveness',
    subtitleAr: 'التوسع المؤسسي والكفاءة التنافسية',
    descEn: 'Empowering commercial enterprises with tailored ERP software, custom mobile apps, inventory logistics systems, and automated financial tracking to drive local and regional growth.',
    descAr: 'تمكين الشركات التجارية من التوسع والمنافسة عبر أنظمة ERP المتطورة، تطبيقات الهواتف المخصصة، وإدارة المخازن والحسابات بدقة متناهية.',
    icon: 'Building2',
    deliverablesEn: ['Custom Enterprise ERP', 'Mobile E-Commerce & Apps', 'Inventory & Depot Logistics', 'Financial & Operational Analytics'],
    deliverablesAr: ['أنظمة إدارة الموارد المخصصة', 'تطبيقات التجارة والخدمات للهاتف', 'لوجستيات وتتبع المخازن', 'تحليلات الأداء والتقارير المالية']
  },
  {
    id: 'organizations',
    typeEn: 'Organizations',
    typeAr: 'المنظمات',
    subtitleEn: 'Humanitarian, NGO & Development Technology',
    subtitleAr: 'تقنيات المنظمات والهيئات التنموية والإنسانية',
    descEn: 'Specialized digital solutions engineered for international NGOs, UN bodies, and non-profits operating in South Sudan—featuring offline-first fieldwork tools and donor reporting platforms.',
    descAr: 'حلول تقنية متخصصة للمنظمات الدولية والمحلية والهيئات الإنسانية تدعم العمل الميداني في المناطق النائية دون إنترنت وتتبع المشاريع والمنح.',
    icon: 'Briefcase',
    deliverablesEn: ['Offline-First Field Survey Apps', 'Beneficiary Registry Databases', 'Grant & Project Lifecycle Systems', 'GPS Fleet & Asset Monitoring'],
    deliverablesAr: ['تطبيقات المسح الميداني دون إنترنت', 'قواعد بيانات المستفيدين الآمنة', 'أنظمة تتبع المنح والمشاريع', 'مراقبة وتتبع أسطول الميدان والأصول']
  },
  {
    id: 'institutions',
    typeEn: 'Institutions',
    typeAr: 'المؤسسات',
    subtitleEn: 'Academic, Financial & Public Sector Bodies',
    subtitleAr: 'المؤسسات الأكاديمية والمالية والهيئات العامة',
    descEn: 'Deploying dependable educational management suites, secure institutional portals, digital archiving, and standardized API frameworks tailored to institutional requirements.',
    descAr: 'توفير بوابات وأنظمة رقمية متخصصة للهيئات والمؤسسات التعليمية والمالية، تشمل الأرشفة الرقمية والتحكم في البيانات والشهادات المعتمدة.',
    icon: 'ShieldCheck',
    deliverablesEn: ['Institutional Web Portals', 'Digital Records & Archiving', 'Automated Verification Systems', 'Secure Payment & API Gateways'],
    deliverablesAr: ['بوابات إلكترونية مؤسسية متقدمة', 'أرشفة السجلات والوثائق رقمياً', 'أنظمة الفحص والتحقق الآلية', 'بوابات المدفوعات والربط البرمجي']
  }
];

export const globalExpertNetwork = [
  {
    region: 'United States',
    regionAr: 'الولايات المتحدة الأمريكية',
    flag: '🇺🇸',
    headlineEn: 'Cloud Architecture, AI Innovation & Enterprise Security',
    headlineAr: 'بنية السحابة، ابتكارات الذكاء الاصطناعي والأمن السيبراني',
    descEn: 'Strategic engineering collaboration bringing Silicon Valley engineering principles, distributed systems design, and advanced artificial intelligence standards directly into South Sudan.',
    descAr: 'تعاون هندسي استراتيجي يطبق أرقى المعايير العالمية في هندسة البرمجيات، النظم الموزعة، وأحدث تقنيات الذكاء الاصطناعي داخل جنوب السودان.',
    competencies: ['Distributed Systems', 'Applied AI & LLMs', 'Cloud Infrastructure (AWS/GCP)', 'Cybersecurity & Auditing']
  },
  {
    region: 'Canada',
    regionAr: 'كندا',
    flag: '🇨🇦',
    headlineEn: 'Enterprise Scalability, DevOps & Data Governance',
    headlineAr: 'الأنظمة المؤسسية الضخمة، عمليات DevOps وحوكمة البيانات',
    descEn: 'World-class expertise in high-concurrency database engineering, automated continuous delivery (CI/CD), and enterprise software architecture with strict reliability metrics.',
    descAr: 'خبرات عالمية رائدة في هندسة قواعد البيانات عالية الكثافة، خطوط النشر الآلي المستمر CI/CD، وهيكلة برمجيات الأعمال الموثوقة.',
    competencies: ['ERP System Architecture', 'Continuous Delivery Pipelines', 'Database Optimization', 'Zero-Trust Security Protocols']
  },
  {
    region: 'Africa',
    regionAr: 'أفريقيا',
    flag: '🌍',
    headlineEn: 'Regional Ground Reality, Mobile-First & Local Deployment',
    headlineAr: 'فهم الواقع الميداني، تطبيقات الهاتف، والتنفيذ المباشر بجوبا',
    descEn: 'Talented on-the-ground engineering talent across South Sudan and Pan-African tech hubs, delivering solutions optimized for local network conditions, bilingual needs, and direct institutional support.',
    descAr: 'كفاءات برمجية وهندسية متميزة في جنوب السودان وأبرز المراكز التقنية الأفريقية، لتقديم حلول مصممة للواقع الميداني والشبكات المحلية وتقديم دعم مباشر بجوبا.',
    competencies: ['Offline-First Mobile Apps', 'Local Infrastructure Integration', 'Bilingual UI/UX Engineering', 'Direct On-Site Juba Support']
  }
];
