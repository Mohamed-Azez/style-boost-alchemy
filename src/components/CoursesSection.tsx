
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Target, MessageCircle } from 'lucide-react';

const CoursesSection = () => {
  const courseCategories = [
    {
      title: 'Courses',
      description: 'Customized courses fulfilling your needs',
      buttonText: 'View Courses',
      icon: BookOpen,
      bgColor: 'bg-gradient-to-br from-gray-50 to-white',
      textColor: 'text-gray-900',
      buttonColor: 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
    },
    {
      title: 'Career Coaching',
      description: 'Dedicated certified coaches to help achieving desired goals',
      buttonText: 'View More',
      icon: Target,
      bgColor: 'bg-gradient-to-br from-slate-800 to-gray-900',
      textColor: 'text-white',
      buttonColor: 'border-white text-white hover:bg-white hover:text-gray-900',
      image: 'https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Training Programs',
      description: 'Custom-tailored programs enhancing skill development & performance for employees',
      buttonText: 'View Courses',
      icon: Users,
      bgColor: 'bg-gradient-to-br from-lime-400 to-green-500',
      textColor: 'text-white',
      buttonColor: 'border-white text-white hover:bg-white hover:text-green-600'
    },
    {
      title: 'Consulting',
      description: 'Bespoke consultations providing clarity & informed decision-making',
      buttonText: 'View Courses',
      icon: MessageCircle,
      bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
      textColor: 'text-gray-900',
      buttonColor: 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            OUR OFFERINGS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of educational services designed to accelerate your professional growth and career advancement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseCategories.map((category, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-0 rounded-3xl overflow-hidden h-full ${category.bgColor}`}>
              <CardContent className="p-8 h-full flex flex-col relative">
                {/* Background Image for Career Coaching */}
                {category.image && (
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 ${category.textColor === 'text-white' ? 'bg-white/20' : 'bg-emerald-100'} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${category.textColor === 'text-white' ? 'text-white' : 'text-emerald-600'}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 ${category.textColor} group-hover:scale-105 transition-transform duration-300`}>
                    {category.title}
                  </h3>
                  
                  <p className={`leading-relaxed mb-8 flex-grow ${category.textColor} opacity-90`}>
                    {category.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className={`w-full justify-between ${category.buttonColor} border-2 transition-all duration-300 group-hover:scale-105`}
                  >
                    {category.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
