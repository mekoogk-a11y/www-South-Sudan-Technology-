import React from 'react';
import {
  Globe,
  Smartphone,
  Laptop,
  Building2,
  Bot,
  Cpu,
  Workflow,
  Database,
  Landmark,
  Briefcase,
  Palette,
  Compass,
  ShieldCheck,
  Code
} from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Globe':
      return <Globe className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Laptop':
      return <Laptop className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Bot':
      return <Bot className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Workflow':
      return <Workflow className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'Landmark':
      return <Landmark className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Palette':
      return <Palette className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    default:
      return <Code className={className} />;
  }
};
