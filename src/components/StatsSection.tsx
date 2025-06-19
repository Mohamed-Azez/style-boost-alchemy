
import React from 'react';
import { Users, Award, BookOpen, Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, value: '12,000+', label: 'Students Trained', color: 'text-emerald-600' },
    { icon: Award, value: '95%', label: 'Success Rate', color: 'text-blue-600' },
    { icon: BookOpen, value: '150+', label: 'Courses Available', color: 'text-purple-600' },
    { icon: Star, value: '4.9/5', label: 'Student Rating', color: 'text-amber-600' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
