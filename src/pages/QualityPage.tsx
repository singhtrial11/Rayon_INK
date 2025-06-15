import React from 'react';
import { Award, Shield, Beaker, CheckCircle, Target, Eye, Gauge, Droplets } from 'lucide-react';

const QualityPage = () => {
  const qualityProcesses = [
    {
      icon: <Beaker className="h-8 w-8 text-blue-600" />,
      title: 'Raw Material Testing',
      description: 'Every batch of raw materials undergoes rigorous testing before production begins.',
      details: [
        'Chemical composition analysis',
        'Purity verification',
        'Contamination screening',
        'Supplier audit compliance'
      ]
    },
    {
      icon: <Gauge className="h-8 w-8 text-blue-600" />,
      title: 'In-Process Monitoring',
      description: 'Continuous monitoring throughout the manufacturing process ensures consistency.',
      details: [
        'Real-time viscosity monitoring',
        'Color matching verification',
        'Temperature control',
        'Batch tracking systems'
      ]
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: 'Final Inspection',
      description: 'Comprehensive testing of finished products before packaging and dispatch.',
      details: [
        'Print quality assessment',
        'Adhesion strength testing',
        'Gloss level measurement',
        'Opacity verification'
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality Assurance',
      description: 'Systematic approach to maintain and improve quality standards continuously.',
      details: [
        'Statistical process control',
        'Customer feedback analysis',
        'Continuous improvement programs',
        'Quality management systems'
      ]
    }
  ];

  const testingParameters = [
    {
      parameter: 'Shade Accuracy',
      description: 'Color matching with Delta E < 1.0',
      method: 'Spectrophotometer analysis',
      frequency: 'Every batch'
    },
    {
      parameter: 'Color Strength',
      description: 'Pigment concentration and intensity measurement',
      method: 'Colorimetric analysis',
      frequency: 'Every batch'
    },
    {
      parameter: 'Adhesion',
      description: 'Bond strength to substrate surface',
      method: 'Tape peel test (ASTM D3359)',
      frequency: 'Every batch'
    },
    {
      parameter: 'Gloss Level',
      description: 'Surface reflectance measurement',
      method: '60° gloss meter (ASTM D523)',
      frequency: 'Every batch'
    },
    {
      parameter: 'Opacity',
      description: 'Coverage and hiding power assessment',
      method: 'Opacity meter (ISO 2814)',
      frequency: 'Every batch'
    },
    {
      parameter: 'Flow Properties',
      description: 'Rheological characteristics and printability',
      method: 'Viscosity measurement',
      frequency: 'Every batch'
    },
    {
      parameter: 'Drying Time',
      description: 'Solvent evaporation and curing speed',
      method: 'Touch-dry test',
      frequency: 'Every batch'
    },
    {
      parameter: 'Chemical Resistance',
      description: 'Resistance to chemicals and solvents',
      method: 'Immersion test',
      frequency: 'Weekly'
    }
  ];

  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System certification ensuring consistent quality delivery.',
      status: 'Certified'
    },
    {
      title: 'Food Safety Compliance',
      description: 'Inks suitable for food contact applications meet regulatory requirements.',
      status: 'Compliant'
    },
    {
      title: 'Environmental Standards',
      description: 'Manufacturing processes comply with environmental regulations.',
      status: 'Compliant'
    },
    {
      title: 'Export Quality Standards',
      description: 'Products meet international quality standards for global markets.',
      status: 'Certified'
    }
  ];

  const qualityCommitments = [
    'Zero compromise on product quality',
    'Batch-wise testing and documentation',
    'Continuous improvement in processes',
    'Customer satisfaction guarantee',
    'Traceability of all raw materials',
    'Regular equipment calibration',
    'Skilled quality control personnel',
    'Prompt resolution of quality issues'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Quality Assurance</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our unwavering commitment to quality ensures every batch meets the highest standards 
              through rigorous testing and continuous improvement processes.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Quality Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to quality control that ensures consistent excellence in every product we deliver.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcesses.map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                  {process.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{process.description}</p>
                <ul className="space-y-2">
                  {process.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Parameters Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Testing Parameters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing protocols ensure every batch meets our stringent quality standards.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Parameter</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Test Method</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {testingParameters.map((param, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">{param.parameter}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-600">{param.description}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-700 font-medium">{param.method}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {param.frequency}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is validated by industry certifications and regulatory compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-6">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{cert.description}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitments Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Quality Commitments</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Promises we make and deliver to ensure your complete satisfaction with our products and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityCommitments.map((commitment, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Target className="h-6 w-6 text-blue-300 flex-shrink-0" />
                <span className="text-white font-medium">{commitment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab & Equipment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">State-of-the-Art Testing Laboratory</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Our dedicated quality control laboratory is equipped with advanced testing instruments 
                  to ensure accurate and reliable results for every batch of ink produced.
                </p>
                <p>
                  Our team of experienced chemists and quality control specialists work around the clock 
                  to maintain the highest standards of quality and consistency. Every batch undergoes 
                  comprehensive testing before approval for dispatch.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Laboratory Equipment</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Spectrophotometer',
                    'Viscosity Meters',
                    'Gloss Meters',
                    'Opacity Meters',
                    'pH Meters',
                    'Density Meters',
                    'Fineness of Grind Gauges',
                    'Color Matching Cabinets'
                  ].map((equipment, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700 text-sm">{equipment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quality Metrics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Batch Rejection Rate</span>
                    <span className="text-2xl font-bold text-green-600">&lt; 0.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-green-600">99.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">On-Time Delivery</span>
                    <span className="text-2xl font-bold text-green-600">99.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Color Match Accuracy</span>
                    <span className="text-2xl font-bold text-green-600">99.9%</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600 text-center">
                    <strong className="text-gray-900">Quality Guarantee:</strong> We stand behind every product 
                    with our complete satisfaction guarantee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPage;