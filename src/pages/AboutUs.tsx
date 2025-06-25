
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, Award, CheckCircle, Phone, Mail, MapPin, BookOpen, TrendingUp, UserCheck, Star, Globe, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const beliefs = [
    {
      title: 'Results-Oriented',
      description: 'ERTC Academy focuses strongly on achieving outstanding outcomes and tangible improvements, ensuring that training programs drive real progress and deliver significant value to both individuals and organizations',
      icon: Target,
      color: 'text-emerald-600'
    },
    {
      title: 'Innovation-Driven',
      description: 'We continuously adopt cutting-edge methodologies and technologies to enhance learning experiences and stay ahead of industry trends',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in all our training programs and consulting services, ensuring maximum value for our clients',
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  const services = [
    {
      title: 'Courses',
      subtitle: 'Customized courses fulfilling your needs',
      color: 'from-lime-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      features: ['Expert Instructors', 'Flexible Scheduling', 'Certification']
    },
    {
      title: 'Training Programs',
      subtitle: 'Custom-tailored programs enhancing skill development & performance',
      color: 'from-blue-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      features: ['Team Building', 'Skill Assessment', 'Progress Tracking']
    },
    {
      title: 'Career Coaching',
      subtitle: '1-on-1 Coaching, dedicated certified coaches to help achieving desired goals',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-white',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
      features: ['Personal Mentoring', 'Goal Setting', 'Career Planning']
    },
    {
      title: 'Consulting Services',
      subtitle: 'Strategic consulting to transform your organization',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-white',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
      features: ['Strategic Planning', 'Process Optimization', 'Change Management']
    }
  ];

  const stats = [
    { number: '75K+', label: 'Students Trained', icon: Users },
    { number: '500+', label: 'Companies Served', icon: Globe },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '98%', label: 'Success Rate', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              About <span className="text-emerald-200">ERTC Academy</span>
            </h1>
            <p className="text-xl lg:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Empowering professionals with cutting-edge skills and knowledge to excel in their careers and drive organizational success since 2014.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Our Story
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold transition-all duration-300">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced The Dawn Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                ABOUT US
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                The <span className="gradient-text">Dawn</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                After 25 years of rich expertise and continuous research when ERTC was firstly established in 2000, here comes the ERTC Academy to begin a new story aims for societal development, believing in the powerful impact of professional training courses and exceptional administrative and specialized consultations related to market needs, utilizing the most innovative and new-fashioned methods.
              </p>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 text-emerald-600 mr-3" />
                  From Our Chairman's Quill:
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  "ERTC Academy offers a foundation for developing skills, acquiring knowledge, uncovering abilities, and accessing customized solutions to experience the success you're striving for."
                </p>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border-4 border-emerald-100">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2 font-medium">TRUSTED BY</div>
                  <div className="text-4xl font-bold gradient-text">75K+</div>
                  <div className="text-sm text-gray-600">Professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced We Believe In Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4 mr-2" />
              DISCOVER MISSION
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              We Believe in:
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {beliefs.map((belief, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${belief.color} bg-gradient-to-br from-current to-current/80 group-hover:scale-110 transition-transform duration-300`}>
                    <belief.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{belief.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{belief.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Looking Forward Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative animate-scale-in">
              <img 
                src="/lovable-uploads/44fc10a2-4530-4d12-b3f5-c891a360a282.png" 
                alt="Looking Forward Illustration" 
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Looking <span className="gradient-text">Forward</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                To become the leading driver of professional growth, fostering a culture of continuous learning and development that empowers individuals and organizations to unlock their full potential and drive societal progress.
              </p>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-8 h-8 text-emerald-600 mr-3" />
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To offer innovative, high-quality training courses and consultations, focusing on skill enhancement, growth fostering, strategic objectives achievement, and lifelong learning. We aim to impact different workforces and societies by staying relevant and leveraging expert instructors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your professional development needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative h-80">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-90`}></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className={`text-3xl font-bold mb-4 ${service.textColor || 'text-white'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-lg leading-relaxed mb-6 ${service.textColor || 'text-white/90'}`}>
                        {service.subtitle}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className={`flex items-center ${service.textColor || 'text-white/90'}`}>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className={`self-start group-hover:scale-105 transition-transform duration-300 ${
                        service.textColor 
                          ? 'bg-white text-gray-800 hover:bg-gray-100' 
                          : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-gray-800'
                      }`}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us today to learn more about our programs and how we can help you achieve your goals.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 text-white bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300">
              <Phone className="w-6 h-6 text-emerald-200" />
              <span className="text-lg font-medium">02 23082250</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-white bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300">
              <Mail className="w-6 h-6 text-emerald-200" />
              <span className="text-lg font-medium">info@ertcacademy.com</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-5 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
