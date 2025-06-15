import React from 'react';
import { Leaf, Droplets, Recycle, Heart, Target, Award, TreePine, Factory } from 'lucide-react';

const SustainabilityPage = () => {
  const initiatives = [
    {
      icon: <Droplets className="h-8 w-8 text-green-600" />,
      title: 'Water-Based Formulations',
      description: 'Developing eco-friendly water-based inks that reduce VOC emissions and environmental impact.',
      impact: '60% reduction in VOC emissions',
      details: [
        'Low-VOC water-based ink development',
        'Reduced solvent dependency',
        'Safer workplace environment',
        'Compliance with environmental regulations'
      ]
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: 'Waste Reduction & Recycling',
      description: 'Comprehensive waste management system focusing on reduction, reuse, and recycling.',
      impact: '75% waste reduction achieved',
      details: [
        'Solvent recovery and reuse programs',
        'Packaging material recycling',
        'Ink container return initiatives',
        'Zero liquid discharge systems'
      ]
    },
    {
      icon: <Factory className="h-8 w-8 text-green-600" />,
      title: 'Energy Efficiency',
      description: 'Implementing energy-efficient processes and renewable energy sources in our operations.',
      impact: '30% energy consumption reduction',
      details: [
        'LED lighting throughout facilities',
        'Energy-efficient manufacturing equipment',
        'Solar power integration',
        'Process optimization for energy savings'
      ]
    },
    {
      icon: <TreePine className="h-8 w-8 text-green-600" />,
      title: 'Green Chemistry',
      description: 'Research and development focused on environmentally benign chemical processes.',
      impact: '40% reduction in hazardous materials',
      details: [
        'Bio-based raw material sourcing',
        'Non-toxic pigment alternatives',
        'Biodegradable additives',
        'Green synthesis methods'
      ]
    }
  ];

  const environmentalCommitments = [
    {
      category: 'Air Quality',
      commitments: [
        'VOC emission reduction by 60%',
        'Dust and particulate control systems',
        'Regular air quality monitoring',
        'Solvent vapor recovery systems'
      ]
    },
    {
      category: 'Water Conservation',
      commitments: [
        'Water recycling and reuse programs',
        'Rainwater harvesting systems',
        'Effluent treatment plants',
        'Zero liquid discharge targets'
      ]
    },
    {
      category: 'Waste Management',
      commitments: [
        'Hazardous waste proper disposal',
        'Packaging material optimization',
        'Chemical container recycling',
        'Waste segregation at source'
      ]
    },
    {
      category: 'Energy',
      commitments: [
        'Renewable energy adoption',
        'Energy-efficient processes',
        'Carbon footprint reduction',
        'Green building practices'
      ]
    }
  ];

  const products = [
    {
      name: 'Eco-Water Series',
      description: 'Water-based inks with minimal environmental impact',
      benefits: ['Zero VOC emissions', 'Non-toxic formulation', 'Easy cleanup', 'Food-safe applications']
    },
    {
      name: 'Bio-Flex Range',
      description: 'Biodegradable flexographic inks for sustainable printing',
      benefits: ['Biodegradable components', 'Renewable raw materials', 'Reduced carbon footprint', 'Compostable packaging']
    },
    {
      name: 'Green Gravure',
      description: 'Low-solvent gravure inks for reduced environmental impact',
      benefits: ['Reduced solvent content', 'Lower emissions', 'Energy-efficient drying', 'Recyclable substrates']
    }
  ];

  const certifications = [
    { name: 'ISO 14001', description: 'Environmental Management System' },
    { name: 'Green Chemistry', description: 'Environmentally Benign Processes' },
    { name: 'REACH Compliance', description: 'Chemical Safety Regulations' },
    { name: 'RoHS Compliant', description: 'Hazardous Substance Restrictions' }
  ];

  const goals2030 = [
    { goal: 'Carbon Neutral Operations', progress: 65, target: '100% by 2030' },
    { goal: 'Zero Liquid Discharge', progress: 80, target: 'Achieved by 2027' },
    { goal: 'Renewable Energy', progress: 45, target: '100% by 2029' },
    { goal: 'Waste Reduction', progress: 75, target: '90% by 2028' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="h-16 w-16 text-green-300" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Sustainability at Rayon Ink</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Our commitment to environmental stewardship drives innovation in sustainable ink manufacturing, 
              creating products that protect both your business and our planet.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Environmental Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sustainability programs that make a measurable difference in environmental impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-green-200 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    {initiative.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{initiative.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{initiative.description}</p>
                    <div className="bg-green-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Target className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">{initiative.impact}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {initiative.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <Heart className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Environmental Commitments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specific actions and targets across all aspects of our environmental responsibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentalCommitments.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{category.category}</h3>
                <ul className="space-y-3">
                  {category.commitments.map((commitment, commitmentIndex) => (
                    <li key={commitmentIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Eco-Friendly Product Lines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative ink formulations designed with environmental responsibility at their core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border border-green-100 hover:border-green-200 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                <div className="space-y-3">
                  {product.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2030 Goals Progress */}
      <section className="py-20 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Sustainability Goals 2030</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our measurable commitments toward a more sustainable future, with clear targets and progress tracking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals2030.map((goal, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">{goal.goal}</h3>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-green-200 text-sm">Progress</span>
                    <span className="text-white font-bold">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-green-300 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-green-100 text-sm">{goal.target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Environmental Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Third-party validation of our environmental management and sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-6">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Partner with Us for Sustainable Solutions
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Choose Rayon Ink for your printing needs and contribute to a more sustainable future. 
            Our eco-friendly inks deliver exceptional performance while protecting the environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors duration-200">
              <span>Explore Eco-Friendly Products</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors duration-200">
              <span>Download Sustainability Report</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;