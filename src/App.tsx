/**
 * South Sudan Technology — Official Web Platform
 * Managed by Saeed
 * All Rights Reserved to Saeed Group for Multiple Activities
 */

import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TargetClientsSection } from './components/TargetClientsSection';
import { AboutSection } from './components/AboutSection';
import { ExpertNetworkSection } from './components/ExpertNetworkSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectRequestSection } from './components/ProjectRequestSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection />

          {/* Target Clients: Government, Companies, Organizations, Institutions */}
          <TargetClientsSection />

          {/* About Us & Company Identity */}
          <AboutSection />

          {/* Global Expert Network: USA, Canada, Africa */}
          <ExpertNetworkSection />

          {/* Services: 12 Requested Services */}
          <ServicesSection />

          {/* Previous & Upcoming Projects */}
          <ProjectsSection />

          {/* Project Request Form */}
          <ProjectRequestSection />

          {/* Contact & Juba Headquarters Location */}
          <ContactLocationSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Secured Executive Management Console */}
        <AdminDashboard />
      </div>
    </AppProvider>
  );
}
