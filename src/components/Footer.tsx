import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, MapPin, Phone, Mail, Clock, Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Rayon Ink</h3>
                <p className="text-blue-400 text-sm font-medium">More Ink Per Ink</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading manufacturer of gravure & flexographic printing inks with 13+ years of experience. 
              Serving clients across India and worldwide with unmatched quality and innovation.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Globe className="h-4 w-4 text-blue-400" />
              <span>Exporting to Nepal, Egypt, Mexico, Nigeria & more</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Quality Assurance', href: '/quality' },
                { name: 'Sustainability', href: '/sustainability' },
                { name: 'Our Clients', href: '/clients' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  <ArrowRight className="h-3 w-3" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <nav className="space-y-2">
              {[
                'Surface Printing Inks',
                'Reverse Printing Inks',
                'Rotogravure Inks',
                'Water-Based Inks',
                'Flexographic Inks',
              ].map((product) => (
                <Link
                  key={product}
                  to={`/products#${product.toLowerCase().replace(/\s+/g, '-').replace('printing-', '').replace('inks', '').slice(0, -1)}`}
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  <ArrowRight className="h-3 w-3" />
                  <span>{product}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Plot No. 589 (P), Modern Industrial Estate,</p>
                  <p>Part-A, Bahadurgarh-124507,</p>
                  <p>Haryana, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+91-9999999999" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  +91-9999-999-999
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@rayonink.com" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  info@rayonink.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-blue-400 mt-1" />
                <div className="text-sm text-gray-300">
                  <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 Rayon Ink. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Production Capacity: 150 MT/Month</span>
              <span>•</span>
              <span>Founded: 2012</span>
              <span>•</span>
              <span>Experience: 13+ Years</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;