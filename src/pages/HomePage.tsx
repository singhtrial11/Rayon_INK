import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Globe, Users, Factory, Beaker, CheckCircle, Star, TrendingUp, Shield } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Beaker className="h-8 w-8 text-blue-600" />,
      title: "Research & Innovation",
      description: "Dedicated R&D team of experienced chemists developing cutting-edge ink formulations"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Unmatched Quality",
      description: "Batch-wise testing for shade, strength, adhesion, gloss, opacity, and flow parameters"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Reach",
      description: "Exporting to Nepal, Egypt, Mexico, Nigeria and serving clients worldwide"
    },
    {
      icon: <Factory className="h-8 w-8 text-blue-600" />,
      title: "High Capacity",
      description: "150 MT monthly production capacity with state-of-the-art manufacturing facilities"
    }
  ];

  const stats = [
    { value: "150 MT", label: "Monthly Production" },
    { value: "13+", label: "Years Experience" },
    { value: "₹25 Cr", label: "Annual Turnover" },
    { value: "5+", label: "Countries Served" }
  ];

  const products = [
    {
      title: "Surface Printing Inks",
      description: "Excellent printability for PP, BOPP, LDPE, HDPE films with high color strength and gloss",
      features: ["High Color Strength", "Scratch Resistant", "Low Odor", "Extended Coverage"]
    },
    {
      title: "Reverse Printing Inks",
      description: "Vinyl-based adhesion for PVC, PET, BOPP films with high bond strength",
      features: ["Vinyl-Based Adhesion", "High Bond Strength", "Low Solvent Retention", "Food-Safe Options"]
    },
    {
      title: "Rotogravure Inks",
      description: "High-speed, high-quality printing for confectionery pouches and poly bags",
      features: ["Consistent Coverage", "Vibrant Colors", "Exceptional Adhesion", "High Gloss"]
    }
  ];

  const clients = [
    "Prakash Aero Plast",
    "Mod Flex",
    "SEPL",
    "Polyflex",
    "Mareno Polypack",
    "Shri Vinayak Industries"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                More Ink <span className="text-blue-400">Per Ink</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Leading manufacturer of Gravure & Flexographic printing inks, based in Haryana, India. 
                13+ years of delivering high-quality, affordable ink solutions worldwide.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/products"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200"
                >
                  <span>Request Quote</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Rayon Ink?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence drives everything we do, from research and development to final product delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of printing inks designed for diverse applications and superior performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                <div className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">
              Serving tier-1 & tier-2 clients across India and worldwide with excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">{client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Superior Ink Quality?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust Rayon Ink for their printing needs. 
            Get a customized quote for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
            >
              <span>Get Quote Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-200"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;