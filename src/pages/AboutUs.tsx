
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, Award, CheckCircle, Phone, Mail, MapPin, BookOpen, TrendingUp, UserCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const beliefs = [
    {
      title: 'Results-Oriented',
      description: 'ERTC Academy focuses strongly on achieving outstanding outcomes and tangible improvements, ensuring that training programs drive real progress and deliver significant value to both individuals and organizations'
    },
    {
      title: 'Innovation-Driven',
      description: 'We continuously adopt cutting-edge methodologies and technologies to enhance learning experiences and stay ahead of industry trends'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in all our training programs and consulting services, ensuring maximum value for our clients'
    }
  ];

  const services = [
    {
      title: 'Courses',
      subtitle: 'Customized courses fulfilling your needs',
      color: 'from-lime-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Training Programs',
      subtitle: 'Custom-tailored programs enhancing skill development & performance',
      color: 'from-lime-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Career Coaching',
      subtitle: '1-on-1 Coaching, dedicated certified coaches to help achieving desired goals',
      color: 'from-gray-100 to-gray-200',
      textColor: 'text-gray-800',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Consulting Services',
      subtitle: 'Strategic consulting to transform your organization',
      color: 'from-gray-100 to-gray-200',
      textColor: 'text-gray-800',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              About ERTC Academy
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Empowering professionals with cutting-edge skills and knowledge to excel in their careers and drive organizational success since 2014.
            </p>
          </div>
        </div>
      </section>

      {/* The Dawn Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-lime-500 mb-2 uppercase tracking-wide">
                ABOUT US
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                The Dawn
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                After 25 years of rich expertise and continuous research when ERTC was firstly established in 2000, here comes the ERTC Academy to begin a new story aims for societal development, believing in the powerful impact of professional training courses and exceptional administrative and specialized consultations related to market needs, utilizing the most innovative and new-fashioned methods.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">From Our Chairman's Quill:</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  ERTC Academy offers a foundation for developing skills, acquiring knowledge, uncovering abilities, and accessing customized solutions to experience the success you're striving for.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">TRUSTED BY</div>
                  <div className="text-3xl font-bold text-lime-500">75K+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Believe In Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                alt="Professional woman" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-lime-500 mb-2 uppercase tracking-wide">
                DISCOVER MISSION
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                We Believe in:
              </h2>
              
              <div className="space-y-8">
                {beliefs.map((belief, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{belief.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{belief.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward & Our Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/44fc10a2-4530-4d12-b3f5-c891a360a282.png" 
                alt="Looking Forward Illustration" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Looking Forward
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To become the leading driver of professional growth, fostering a culture of continuous learning and development that empowers individuals and organizations to unlock their full potential and drive societal progress.
              </p>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To offer innovative, high-quality training courses and consultations, focusing on skill enhancement, growth fostering, strategic objectives achievement, and lifelong learning. We aim to impact different workforces and societies by staying relevant and leveraging expert instructors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your professional development needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-90`}></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-center">
                    <h3 className={`text-3xl font-bold mb-4 ${service.textColor || 'text-white'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-lg leading-relaxed mb-6 ${service.textColor || 'text-white'}`}>
                      {service.subtitle}
                    </p>
                    <Button 
                      variant="outline" 
                      className={`self-start ${service.textColor ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' : 'border-white text-white hover:bg-white hover:text-emerald-600'}`}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get in touch with us today to learn more about our programs and how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 text-white">
              <Phone className="w-5 h-5 text-emerald-200" />
              <span className="text-lg">02 23082250</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Mail className="w-5 h-5 text-emerald-200" />
              <span className="text-lg">info@ertcacademy.com</span>
            </div>
          </div>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
