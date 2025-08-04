import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import sharmiImg from '../assets/Screenshot 2025-07-13 124201.png'; // Ensure this path is correct

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in-up">
        {/* Left Side - Image */}
        <div className="mb-10 lg:mb-0 lg:mr-12 flex justify-center">
          <img
            src={sharmiImg}
            alt="Sharmi Sri"
            className="w-80 h-80 sm:w-96 sm:h-96 rounded-full object-cover border-4 border-purple-500 shadow-2xl transition duration-500 hover:scale-105 hover:shadow-pink-500/30"
          />
        </div>

        {/* Right Side - Text */}
        <div className="text-center lg:text-left space-y-8 max-w-xl">
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-purple-300 mb-4 animate-fade-in">
            <Sparkles size={20} />
            <span className="text-lg font-medium">Welcome to my portfolio</span>
            <Sparkles size={20} />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-text-pop-up">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Sharmi Sri</span>
            </h1>
            <div className="text-xl md:text-2xl text-purple-200 font-light animate-fade-in">
              Aspiring IT Engineer
            </div>
            <div className="text-lg text-purple-300 animate-fade-in delay-200">
              B.Tech IT Student • Velammal College
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 animate-bounce-in"
            >
              Explore My Work
              <ArrowDown size={20} className="group-hover:animate-bounce" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 animate-fade-in-up delay-500">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-3xl font-bold text-white mb-1">9.06</div>
              <div className="text-purple-300">Current CGPA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-3xl font-bold text-white mb-1">90%</div>
              <div className="text-purple-300">10th Grade</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-3xl font-bold text-white mb-1">88%</div>
              <div className="text-purple-300">12th Grade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;