import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Project, ProjectRequest, ContactMessage, Service, CompanyInfo } from '../types';
import { companyDefaults, initialProjects, initialServices } from '../data/content';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isArabic: boolean;
  company: CompanyInfo;
  services: Service[];
  projects: Project[];
  requests: ProjectRequest[];
  messages: ContactMessage[];
  addProjectRequest: (request: Omit<ProjectRequest, 'id' | 'createdAt' | 'status'>) => void;
  addContactMessage: (message: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, updated: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  updateRequestStatus: (id: string, status: ProjectRequest['status'], adminNotes?: string) => void;
  deleteRequest: (id: string) => void;
  updateMessageStatus: (id: string, status: ContactMessage['status']) => void;
  deleteMessage: (id: string) => void;
  updateCompanyInfo: (info: Partial<CompanyInfo>) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAdminAuthenticated: boolean;
  setIsAdminAuthenticated: (auth: boolean) => void;
  selectedServiceForQuote: string;
  setSelectedServiceForQuote: (service: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  LANG: 'sst_lang',
  PROJECTS: 'sst_projects_v1',
  REQUESTS: 'sst_requests_v1',
  MESSAGES: 'sst_messages_v1',
  COMPANY: 'sst_company_v1',
  ADMIN_AUTH: 'sst_admin_auth'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language State - English is the default
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    return (saved === 'ar' || saved === 'en') ? saved : 'en';
  });

  const isArabic = lang === 'ar';

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEYS.LANG, newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [isArabic, lang]);

  // Company Information
  const [company, setCompany] = useState<CompanyInfo>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPANY);
    return saved ? { ...companyDefaults, ...JSON.parse(saved) } : companyDefaults;
  });

  // Services
  const [services] = useState<Service[]>(initialServices);

  // Projects - dynamic and updatable via admin
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return saved ? JSON.parse(saved) : initialProjects;
  });

  // Project Requests
  const [requests, setRequests] = useState<ProjectRequest[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.REQUESTS);
    return saved ? JSON.parse(saved) : [];
  });

  // Contact Messages
  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    return saved ? JSON.parse(saved) : [];
  });

  // Admin Modal & Auth
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  });

  // Selected Service to prefill project request
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  // Persist state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(requests));
  }, [requests]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPANY, JSON.stringify(company));
  }, [company]);

  const addProjectRequest = (data: Omit<ProjectRequest, 'id' | 'createdAt' | 'status'>) => {
    const newRequest: ProjectRequest = {
      ...data,
      id: 'req_' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'New'
    };
    setRequests(prev => [newRequest, ...prev]);
  };

  const addContactMessage = (data: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
    const newMessage: ContactMessage = {
      ...data,
      id: 'msg_' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'Unread'
    };
    setMessages(prev => [newMessage, ...prev]);
  };

  const addProject = (data: Omit<Project, 'id'>) => {
    const newProj: Project = {
      ...data,
      id: 'proj_' + Date.now()
    };
    setProjects(prev => [newProj, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const updateRequestStatus = (id: string, status: ProjectRequest['status'], adminNotes?: string) => {
    setRequests(prev => prev.map(r => r.id === id ? {
      ...r,
      status,
      adminNotes: adminNotes !== undefined ? adminNotes : r.adminNotes
    } : r));
  };

  const deleteRequest = (id: string) => {
    setRequests(prev => prev.filter(r => r.id !== id));
  };

  const updateMessageStatus = (id: string, status: ContactMessage['status']) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status } : m));
  };

  const deleteMessage = (id: string) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const updateCompanyInfo = (info: Partial<CompanyInfo>) => {
    setCompany(prev => ({ ...prev, ...info }));
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        isArabic,
        company,
        services,
        projects,
        requests,
        messages,
        addProjectRequest,
        addContactMessage,
        addProject,
        updateProject,
        deleteProject,
        updateRequestStatus,
        deleteRequest,
        updateMessageStatus,
        deleteMessage,
        updateCompanyInfo,
        isAdminOpen,
        setIsAdminOpen,
        isAdminAuthenticated,
        setIsAdminAuthenticated,
        selectedServiceForQuote,
        setSelectedServiceForQuote
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
