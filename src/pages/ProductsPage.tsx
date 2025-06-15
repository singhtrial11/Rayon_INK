import React from 'react';
import { CheckCircle, ArrowRight, Palette, Layers, Zap, Droplets, Leaf } from 'lucide-react';

const ProductsPage = () => {
  const products = [
    {
      id: 'surface',
      title: 'Surface Printing Inks',
      icon: <Layers className="h-8 w-8 text-blue-600" />,
      description: 'High-performance inks designed for surface printing on various film substrates with excellent printability and durability.',
      usage: 'PP, BOPP, LDPE, HDPE films, carry bags, twist wrappers',
      features: [
        'Excellent printability & resolubility',
        'High color strength and vibrancy',
        'Superior gloss and opacity',
        'Scratch & scuff resistance',
        'Low-odor formulation',
        'Extended coverage per unit',
        'Fast drying properties',
        'Chemical resistance'
      ],
      applications: [
        'Flexible packaging',
        'Food packaging films',
        'Shopping bags',
        'Industrial packaging',
        'Pharmaceutical packaging'
      ],
      technicalSpecs: {
        viscosity: '15-25 seconds (Zahn Cup #3)',
        solids: '35-45%',
        drying: 'Fast drying at room temperature',
        adhesion: 'Excellent on treated films'
      }
    },
    {
      id: 'reverse',
      title: 'Reverse Printing Inks',
      icon: <Palette className="h-8 w-8 text-blue-600" />,
      description: 'Specialized inks for reverse/laminated printing applications with exceptional adhesion and bond strength.',
      usage: 'Reverse/laminated printing on PVC, PET, BOPP films',
      features: [
        'Vinyl-based superior adhesion',
        'High bond strength after lamination',
        'Low solvent retention',
        'Excellent halftone reproduction',
        'Food-safe formulations available',
        'Consistent print quality',
        'Chemical resistance',
        'Heat resistance'
      ],
      applications: [
        'Laminated packaging',
        'Food contact applications',
        'Pharmaceutical blister packs',
        'Multi-layer flexible packaging',
        'High-barrier packaging'
      ],
      technicalSpecs: {
        viscosity: '18-28 seconds (Zahn Cup #3)',
        solids: '40-50%',
        lamination: 'Suitable for solvent-based adhesives',
        migration: 'Low migration for food contact'
      }
    },
    {
      id: 'rotogravure',
      title: 'Rotogravure Inks',
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      description: 'Premium quality inks engineered for high-speed rotogravure printing with consistent coverage and vibrant colors.',
      usage: 'High-speed, high-quality runs - confectionery pouches, poly bags, magazines',
      features: [
        'Consistent coverage at high speeds',
        'Vibrant and stable colors',
        'Exceptional substrate adhesion',
        'High gloss finish',
        'Excellent dot reproduction',
        'Low misting properties',
        'Wide printing window',
        'Color consistency'
      ],
      applications: [
        'Magazine printing',
        'Confectionery packaging',
        'Tobacco packaging',
        'Decorative films',
        'Publication printing'
      ],
      technicalSpecs: {
        viscosity: '12-18 seconds (Zahn Cup #3)',
        solids: '25-35%',
        printSpeed: 'Up to 400 m/min',
        drying: 'Fast evaporation of solvents'
      }
    },
    {
      id: 'water-based',
      title: 'Water-Based Inks',
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      description: 'Environmentally friendly water-based inks with low VOC emissions, perfect for sustainable printing applications.',
      usage: 'Paper, craft papers, corrugated board, non-woven fabrics',
      features: [
        'Low VOC emission',
        'Non-toxic formulation',
        'Safe for food-contact applications',
        'Excellent print strength',
        'Superior adhesion to paper',
        'Bright, vivid colors',
        'Easy cleanup',
        'Environmentally friendly'
      ],
      applications: [
        'Food packaging papers',
        'Corrugated box printing',
        'Paper bag printing',
        'Educational materials',
        'Eco-friendly packaging'
      ],
      technicalSpecs: {
        viscosity: '20-30 seconds (Zahn Cup #3)',
        pH: '8.5-9.5',
        solids: '25-35%',
        drying: 'Air dry or heat assisted'
      }
    },
    {
      id: 'flexographic',
      title: 'Flexographic Inks',
      icon: <Leaf className="h-8 w-8 text-blue-600" />,
      description: 'Versatile flexographic inks offering quick-drying properties and excellent flexibility for various substrates.',
      usage: 'Non-woven fabrics, PP woven sacks, films, tapes, labels',
      features: [
        'Quick-drying formulation',
        'Excellent flexibility',
        'Sharp image quality',
        'High bond strength',
        'Abrasion resistance',
        'Good color stability',
        'Wide substrate compatibility',
        'Cost-effective printing'
      ],
      applications: [
        'Non-woven bag printing',
        'PP woven sack printing',
        'Label printing',
        'Tape printing',
        'Flexible packaging'
      ],
      technicalSpecs: {
        viscosity: '15-25 seconds (Zahn Cup #3)',
        solids: '30-40%',
        drying: 'Fast air dry',
        flexibility: 'Excellent elongation properties'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Product Range</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of high-quality printing inks engineered for diverse applications, 
              delivering superior performance and exceptional value.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div key={product.id} id={product.id} className="scroll-mt-24">
                <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        {product.icon}
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{product.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="bg-blue-50 rounded-lg p-6 mb-8">
                      <h3 className="font-semibold text-gray-900 mb-2">Primary Usage:</h3>
                      <p className="text-gray-700">{product.usage}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, appIndex) => (
                          <span 
                            key={appIndex}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div className={`mt-12 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Specifications</h3>
                      <div className="space-y-4">
                        {Object.entries(product.technicalSpecs).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-start border-b border-gray-100 pb-3">
                            <span className="font-medium text-gray-700 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <span className="text-gray-600 text-right ml-4">{value}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200">
                          <span>Request Technical Datasheet</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Need Customized Ink Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our R&D team can develop custom ink formulations tailored to your specific requirements. 
            Contact us to discuss your unique printing needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors duration-200">
              <span>Request Custom Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors duration-200">
              <span>Download Product Catalog</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;