import React from 'react';
import { Briefcase, Award, Users, Trophy, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AI & ML Intern',
      company: 'Phoenix Company',
      duration: '1 Month',
      type: 'Internship',
      icon: <Briefcase className="text-white" size={24} />,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Data Science Intern (Currently Attending)',
      company: 'Elewayte in MNC Company',
      duration: 'Recent',
      type: 'Internship',
      icon: <Briefcase className="text-white" size={24} />,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  const achievements = [
    {
      title: 'First Prize - Poster Making',
      organization: 'Physics Dept, Velammal College',
      icon: <Trophy className="text-white" size={24} />,
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      title: 'Paper Presentation',
      organization: 'Loyola College, Chennai',
      icon: <Users className="text-white" size={24} />,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Paper Presentation',
      organization: 'KPR College, Coimbatore',
      icon: <Users className="text-white" size={24} />,
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/20 to-purple-500/20',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="experience" className="py-20 relative bg-[#0b132b] text-gray-100 overflow-hidden">
      <div className="absolute w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl top-[-80px] left-[-80px] animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
            <Zap size={20} />
            <span className="text-lg font-medium">My journey so far</span>
            <Zap size={20} />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-xl mr-4">
                <Briefcase size={24} className="text-white" />
              </div>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareColor="lightblue">
                  <motion.div
                    className={`bg-gradient-to-br ${exp.bgGradient} backdrop-blur-md border border-gray-700 p-6 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={index + 1}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-r ${exp.gradient} p-3 rounded-xl`}>{exp.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                        <div className="text-gray-300 font-medium mb-2">{exp.company}</div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-400">{exp.duration}</span>
                          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                          <span className="text-sm bg-gray-700 px-3 py-1 rounded-full text-gray-300 border border-gray-600">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-xl mr-4">
                <Award size={24} className="text-white" />
              </div>
              Awards & Recognition
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareColor="lightblue">
                  <motion.div
                    className={`bg-gradient-to-br ${achievement.bgGradient} backdrop-blur-md border border-gray-700 p-6 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={index + 4}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-r ${achievement.gradient} p-3 rounded-xl`}>{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">{achievement.title}</h4>
                        <div className="text-gray-300">{achievement.organization}</div>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
