import React from 'react';
import { Mail, Phone, Linkedin, Github, ArrowUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Mail size={24} />,
      href: 'mailto:sharmisri12345@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone size={24} />,
      href: 'tel:+918667847984',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/sharmi-sri-504a092b7',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Github size={24} />,
      href: '#',
      gradient: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <footer className="py-16 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">SS</span>
              </div>
              <span className="ml-3 text-white font-bold text-2xl">Sharmi Sri</span>
            </div>
            <div className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Aspiring Data Scientist and Machine Learning Engineer passionate about creating 
              innovative solutions through data-driven insights.
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`bg-gradient-to-r ${link.gradient} p-3 rounded-xl text-white hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="hover:text-white transition-colors">sharmisri12345@gmail.com</div>
              <div className="hover:text-white transition-colors">+91 8667847984</div>
              <div className="hover:text-white transition-colors">Madurai, Tamil Nadu</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-300 text-sm mb-4 md:mb-0">
            <span>© 2024 Sharmi Sri. Made with</span>
            <Heart className="text-red-500 mx-2" size={16} />
            <span>and lots of coffee</span>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;