
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Ahmed Elrawy',
      role: 'Board Member',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      description: 'Strategic leadership and educational innovation expert'
    },
    {
      name: 'Heba Abdellatif',
      role: 'Board Member',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?auto=format&fit=crop&w=400&q=80',
      description: 'Curriculum development and academic excellence specialist'
    },
    {
      name: 'Asmaa Ahmed',
      role: 'Board Member',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      description: 'Digital transformation and learning technology advocate'
    },
    {
      name: 'Magdy Lotfy',
      role: 'Certified Financial Consultant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      description: 'Financial planning and business strategy expert'
    },
    {
      name: 'Dr. Wafaa Ibrahim',
      role: 'Administration Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      description: 'Operations excellence and administrative leadership'
    },
    {
      name: 'Eng. Bassam Zakaria',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      description: 'Visionary leader driving educational transformation'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            MAKE CONNECTIONS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Team of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Board</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of experts who are committed to delivering world-class education and driving innovation in learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-emerald-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                    {member.role}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
