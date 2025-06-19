
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lock, Camera, Layers, Flag } from 'lucide-react';

const TrendingCategoriesSection = () => {
  const categories = [
    {
      title: 'Business',
      courses: '2 COURSES',
      icon: Lock,
      bgColor: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700'
    },
    {
      title: 'Human Resources',
      courses: '5 COURSES',
      icon: Camera,
      bgColor: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      title: 'Graphix',
      courses: '1 COURSES',
      icon: Layers,
      bgColor: 'bg-teal-500',
      hoverColor: 'hover:bg-teal-600'
    },
    {
      title: 'Health, Safety & Environment',
      courses: '4 COURSES',
      icon: Flag,
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="text-sm font-medium text-lime-500 mb-2 uppercase tracking-wide">
              COURSES CATEGORIES
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Browse Trending Categories
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="bg-lime-500 text-white border-lime-500 hover:bg-lime-600 hover:border-lime-600 px-6 py-3 text-base font-medium"
          >
            <ArrowRight className="mr-2 w-4 h-4" />
            View All
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 rounded-2xl overflow-hidden ${category.bgColor} ${category.hoverColor}`}
            >
              <CardContent className="p-8 text-center h-64 flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {category.title}
                </h3>
                
                <p className="text-white text-sm font-medium opacity-90">
                  {category.courses}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCategoriesSection;
