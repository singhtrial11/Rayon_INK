import React from 'react';
import { Calendar, MapPin, TrendingUp, Users, Target, Heart, Award, Globe } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: '2012', title: 'Company Founded', description: 'Rayon Ink established in Bahadurgarh, Haryana' },
    { year: '2015', title: 'Production Scale-up', description: 'Expanded manufacturing capacity to meet growing demand' },
    { year: '2017', title: 'International Expansion', description: 'Started exporting to Nepal and other countries' },
    { year: '2020', title: 'R&D Excellence', description: 'Established dedicated research and development facility' },
    { year: '2024', title: '150 MT Capacity', description: 'Achieved monthly production capacity of 150 MT' }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Quality Excellence',
      description: 'Unwavering commitment to delivering quality-proven products that exceed industry standards.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Customer-Centric',
      description: 'Timely service and customized solutions that drive our clients\' success and growth.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Innovation Focus',
      description: 'Continuous research and development to stay ahead of industry trends and requirements.'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Global Vision',
      description: 'Expanding our reach worldwide while maintaining strong roots in Indian manufacturing.'
    }
  ];

  const stats = [
    { value: '2012', label: 'Established', icon: Calendar },
    { value: '₹25 Cr', label: 'Annual Turnover', icon: TrendingUp },
    { value: '25', label: 'Team Members', icon: Users },
    { value: '5+', label: 'Countries Served', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Rayon Ink</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Since 2012, we've been at the forefront of printing ink manufacturing in India, 
              combining traditional expertise with modern innovation to serve clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Founded in 2012 by <strong className="text-gray-900">Harish Garg</strong>, Rayon Ink began as a vision 
                  to revolutionize the printing ink industry in India. Starting from humble beginnings in Bahadurgarh, 
                  Haryana, we set out to create high-quality, affordable ink solutions for businesses across the country.
                </p>
                <p>
                  Over the past 13+ years, we've grown from a small local manufacturer to a recognized name in the 
                  printing ink industry, serving clients not just across India but also exporting to countries like 
                  Nepal, Egypt, Mexico, and Nigeria. Our success is built on a foundation of quality, innovation, 
                  and unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Today, with a monthly production capacity of 150 MT and a dedicated team of experienced professionals, 
                  including specialized chemists in our R&D department, we continue to push the boundaries of what's 
                  possible in ink manufacturing. Our tagline "More Ink Per Ink" reflects our commitment to delivering 
                  superior value and performance in every product we create.
                </p>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Our Location</h3>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Headquarters:</strong></p>
                  <p>Plot No. 589 (P), Modern Industrial Estate,<br />
                     Part-A, Bahadurgarh-124507,<br />
                     Haryana, India</p>
                  <div className="bg-blue-50 rounded-lg p-4 mt-6">
                    <p className="text-sm font-medium text-blue-800">
                      Strategically located in Haryana's industrial belt, providing easy access to major markets 
                      across North India and efficient logistics for international exports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and drive our commitment to excellence in everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped Rayon Ink into the industry leader we are today.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leadership driving innovation and excellence in the printing ink industry.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Harish Garg</h3>
              <p className="text-blue-600 font-semibold mb-6">CEO & Founder</p>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                With over 13 years of experience in the printing ink industry, Harish Garg founded Rayon Ink 
                with a vision to provide high-quality, affordable ink solutions to businesses across India and 
                beyond. His leadership has driven the company's growth from a local manufacturer to an 
                internationally recognized brand, maintaining the highest standards of quality and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;