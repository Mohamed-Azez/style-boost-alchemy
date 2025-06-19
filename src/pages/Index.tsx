
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award, BookOpen, Star } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
