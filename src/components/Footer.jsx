import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-8">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 border-t-4 border-primary">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pt-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <span className="text-2xl font-bold">+</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl leading-none">Dr. Nibhay</h3>
                <p className="text-primary text-xs font-medium">Nursing Home</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing compassionate maternal care and advanced medical services to families for over 15 years. Your health is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Home', 'About Us', 'Services', 'Our Doctors', 'Book Appointment', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary hover:pl-2 transition-all duration-300 block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Normal Delivery', 'Cesarean Delivery', 'Prenatal Care', 'Postnatal Care', 'Emergency Services', 'Newborn Care'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary hover:pl-2 transition-all duration-300 block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>123 Medical Enclave, Near City Garden, New Delhi - 110001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>contact@drpandeynh.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2024 Dr. Nibhay Nursing Home. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
