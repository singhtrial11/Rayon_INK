import React from 'react';
import { Users, Globe, TrendingUp, Award, MapPin, Star, CheckCircle, ArrowRight } from 'lucide-react';

const ClientsPage = () => {
  const keyClients = [
    {
      name: 'Prakash Aero Plast',
      industry: 'Flexible Packaging',
      location: 'Mumbai, Maharashtra',
      partnership: '8+ years',
      description: 'Leading manufacturer of flexible packaging solutions serving FMCG brands.',
      applications: ['Food Packaging', 'Cosmetic Pouches', 'Industrial Films']
    },
    {
      name: 'Mod Flex',
      industry: 'Packaging Films',
      location: 'Delhi NCR',
      partnership: '6+ years',
      description: 'Specialized in high-quality packaging films for pharmaceutical and food industries.',
      applications: ['Pharmaceutical Packaging', 'Food Films', 'Barrier Films']
    },
    {
      name: 'SEPL (Siddhi Enterprises)',
      industry: 'Printing & Packaging',
      location: 'Gujarat',
      partnership: '5+ years',
      description: 'Comprehensive printing and packaging solutions for various industries.',
      applications: ['Label Printing', 'Flexible Packaging', 'Industrial Printing']
    },
    {
      name: 'Polyflex',
      industry: 'Flexible Packaging',
      location: 'Tamil Nadu',
      partnership: '7+ years',
      description: 'Innovative flexible packaging solutions with focus on sustainability.',
      applications: ['Food Packaging', 'Agricultural Films', 'Industrial Packaging']
    },
    {
      name: 'Mareno Polypack',
      industry: 'Polymer Packaging',
      location: 'Karnataka',
      partnership: '4+ years',
      description: 'Advanced polymer packaging solutions for food and non-food applications.',
      applications: ['Polymer Films', 'Specialty Packaging', 'Barrier Solutions']
    },
    {
      name: 'Shri Vinayak Industries',
      industry: 'Industrial Packaging',
      location: 'Rajasthan',
      partnership: '6+ years',
      description: 'Industrial packaging solutions for cement, chemicals, and agricultural sectors.',
      applications: ['Industrial Sacks', 'Chemical Packaging', 'Agricultural Films']
    }
  ];

  const industries = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      name: 'Food & Beverage',
      description: 'Packaging solutions for food products, beverages, and confectionery items.',
      applications: ['Confectionery Wrappers', 'Beverage Labels', 'Food Pouches', 'Snack Packaging']
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      name: 'Pharmaceutical',
      description: 'High-quality inks for pharmaceutical packaging and labeling requirements.',
      applications: ['Blister Packs', 'Medicine Labels', 'Strip Packaging', 'Bottle Labels']
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      name: 'FMCG & Consumer Goods',
      description: 'Vibrant inks for consumer product packaging and branding.',
      applications: ['Cosmetic Packaging', 'Personal Care', 'Household Products', 'Electronics']
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      name: 'Industrial & Agricultural',
      description: 'Durable inks for industrial applications and agricultural packaging.',
      applications: ['Chemical Packaging', 'Fertilizer Bags', 'Industrial Films', 'Safety Labels']
    }
  ];

  const exportMarkets = [
    { country: 'Nepal', flag: '🇳🇵', description: 'Growing market for flexible packaging inks' },
    { country: 'Egypt', flag: '🇪🇬', description: 'Industrial and food packaging applications' },
    { country: 'Mexico', flag: '🇲🇽', description: 'FMCG and consumer goods packaging' },
    { country: 'Nigeria', flag: '🇳🇬', description: 'Food and beverage packaging solutions' },
    { country: 'Bangladesh', flag: '🇧🇩', description: 'Textile and packaging industry' },
    { country: 'Sri Lanka', flag: '🇱🇰', description: 'Food and pharmaceutical packaging' }
  ];

  const testimonials = [
    {
      client: 'Prakash Aero Plast',
      person: 'Rajesh Kumar, Production Manager',
      quote: 'Rayon Ink has been our trusted partner for over 8 years. Their consistent quality and timely delivery have been crucial to our operations. The technical support team is always ready to help with any printing challenges.',
      rating: 5
    },
    {
      client: 'Mod Flex',
      person: 'Priya Sharma, Quality Head',
      quote: 'The color consistency and adhesion properties of Rayon Ink products are exceptional. We\'ve seen significant improvement in our print quality since partnering with them. Their custom formulations meet our specific requirements perfectly.',
      rating: 5
    },
    {
      client: 'SEPL',
      person: 'Amit Patel, Director',
      quote: 'What sets Rayon Ink apart is their commitment to innovation and customer service. They understand our business needs and provide solutions that help us stay competitive in the market.',
      rating: 5
    }
  ];

  const clientStats = [
    { value: '100+', label: 'Active Clients' },
    { value: '5+', label: 'Export Countries' },
    { value: '99.8%', label: 'Client Retention' },
    { value: '13+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Valued Clients</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Trusted by industry leaders across India and worldwide, we're proud to serve 
              tier-1 and tier-2 clients with exceptional ink solutions for over 13 years.
            </p>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {clientStats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Clients */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Key Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Long-term partnerships built on trust, quality, and mutual success across diverse industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {keyClients.map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{client.name}</h3>
                  <div className="text-right">
                    <div className="text-sm text-blue-600 font-semibold">{client.partnership}</div>
                    <div className="text-xs text-gray-500">Partnership</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{client.industry}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{client.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{client.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {client.applications.map((app, appIndex) => (
                      <span 
                        key={appIndex}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized ink solutions tailored for diverse industry requirements and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{industry.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                <div className="space-y-2">
                  {industry.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Global Reach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expanding our footprint internationally, serving clients across multiple countries with quality ink solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exportMarkets.map((market, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 text-center">
                <div className="text-6xl mb-4">{market.flag}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{market.country}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{market.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real feedback from our valued clients about their experience working with Rayon Ink.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-white mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-semibold text-white">{testimonial.person}</div>
                  <div className="text-blue-200 text-sm">{testimonial.client}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Become part of our growing family of satisfied clients. Experience the Rayon Ink difference 
            with our quality products, reliable service, and technical expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors duration-200">
              <span>Start Partnership</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors duration-200">
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;