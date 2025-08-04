import React from 'react';
import { Code, Database, Brain, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="text-white group-hover:animate-pulse" size={28} />,
      skills: ['HTML', 'CSS', 'C', 'Java'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Data Science',
      icon: <Database className="text-white group-hover:animate-pulse" size={28} />,
      skills: ['Data Analysis', 'Statistical Modeling', 'Data Visualization', 'Research'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="text-white group-hover:animate-pulse" size={28} />,
      skills: ['Supervised Learning', 'Unsupervised Learning', 'Modules'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0b132b] text-gray-100 relative overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-r from-indigo-800/10 via-purple-700/10 to-pink-600/10 animate-pulse blur-xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
            <Zap size={20} className="animate-pulse" />
            <span className="text-lg font-medium">My Expertise</span>
            <Zap size={20} className="animate-pulse" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 animate-gradient-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-background-pan">Technical Skills</h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full animate-ping"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 animate-fade-in-up delay-${index * 200} hover:rotate-1 hover:scale-[1.03]`}
            >
              <div className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full animate-slide-in`}> 
                <div className={`bg-gradient-to-r ${category.gradient} p-4 rounded-xl mb-6 w-fit shadow-md animate-bounce`}> 
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-6 animate-pulse-slow">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center transform transition-transform duration-300 group-hover:translate-x-2 animate-fade-in"
                      style={{ transitionDelay: `${skillIndex * 100}ms` }}
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full mr-3 flex-shrink-0 animate-ping`}
                      ></div>
                      <span className="text-gray-200 text-sm font-medium animate-flash-delay" style={{ animationDelay: `${skillIndex * 150}ms` }}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;