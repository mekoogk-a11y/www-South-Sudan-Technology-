export type Language = 'en' | 'ar';

export interface Service {
  id: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  category: 'development' | 'ai_data' | 'enterprise' | 'advisory' | 'infrastructure';
  icon: string;
  featuresEn: string[];
  featuresAr: string[];
  featured?: boolean;
}

export type ProjectStatus = 'Completed' | 'In Development' | 'Upcoming';

export interface Project {
  id: string;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  clientTypeEn: 'Government' | 'Companies' | 'Organizations' | 'Institutions';
  clientTypeAr: 'الحكومات' | 'الشركات' | 'المنظمات' | 'المؤسسات';
  descEn: string;
  descAr: string;
  techStack: string[];
  status: ProjectStatus;
  featured?: boolean;
  timeline?: string;
}

export type RequestStatus = 'New' | 'Under Review' | 'Contacted' | 'In Progress' | 'Completed' | 'Archived';

export interface ProjectRequest {
  id: string;
  clientName: string;
  organization: string;
  email: string;
  phone: string;
  serviceType: string;
  description: string;
  estimatedBudget: string;
  deadline: string;
  status: RequestStatus;
  createdAt: string;
  adminNotes?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'Unread' | 'Read' | 'Replied';
  createdAt: string;
}

export interface CompanyInfo {
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  subtitleEn: string;
  subtitleAr: string;
  locationEn: string;
  locationAr: string;
  coordinates: { lat: number; lng: number };
  managedByEn: string;
  managedByAr: string;
  rightsYear: string;
  saeedGroupEn: string;
  saeedGroupAr: string;
  email: string;
  phone: string;
  domain: string;
}
