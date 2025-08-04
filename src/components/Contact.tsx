import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white" size={24} />,
      label: 'Email',
      value: 'sharmisri12345@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="text-white" size={24} />,
      label: 'Phone',
      value: '+91 8667847984',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Linkedin className="text-white" size={24} />,
      label: 'LinkedIn',
      value: 'sharmi-sri-504a092b7',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      label: 'Location',
      value: 'Madurai, Tamil Nadu',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 relative bg-[#0b132b] text-gray-100" // CHANGED background + default text color
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
            <MessageCircle size={20} />
            <span className="text-lg font-medium">Let's connect</span>
            <MessageCircle size={20} />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full mb-4"></div> {/* updated color */}
          <div className="text-xl text-gray-300 max-w-2xl mx-auto">
            Looking for opportunities in Data Science and Machine Learning
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-800/60 backdrop-blur-md border border-gray-700 p-6 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-r ${info.gradient} p-3 rounded-xl`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-medium">{info.label}</div>
                      <div className="text-white font-semibold">{info.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 rounded-xl font-medium hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
