
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E2E8F0' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              EXPLORE OUR SERVICES
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Dive into our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                applied knowledge
              </span>
              to secure your advanced performance
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Learn from ERTC Academy online platform by following our proven ways 
              to achieve the Best Skills for your present and future career.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Navigate In
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-emerald-600 hover:text-emerald-600 px-8 py-4 text-lg font-medium transition-all duration-300 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Get Started Free
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 w-32 h-20 bg-white rounded-xl shadow-lg border border-gray-100 p-4 animate-float z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-600 text-xs font-bold">95%</span>
                  </div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-36 h-24 bg-white rounded-xl shadow-lg border border-gray-100 p-4 animate-float z-10" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold text-gray-900">12K+</div>
                <div className="text-xs text-gray-600">Students Trained</div>
              </div>

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  {/* Simulated Laptop Screen */}
                  <div className="w-4/5 h-3/4 bg-gray-100 rounded-lg shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50">
                      <div className="p-6 h-full flex flex-col justify-center">
                        <div className="space-y-3">
                          <div className="h-4 bg-emerald-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                          <div className="mt-6 space-y-2">
                            <div className="h-8 bg-emerald-500 rounded w-32 flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded opacity-80"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Circular Image Overlay */}
                <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                    <div className="w-full h-full bg-cover bg-center" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80')"
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
