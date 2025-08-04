import React from 'react';
import { GraduationCap, Target, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Typewriter } from 'react-simple-typewriter';
import sharmiImg from '../assets/Screenshot 2025-07-13 124201.png';

const education = [
  {
    title: '10th Grade',
    score: 'Score: 90%',
    place: 'Amali Matriculation Higher Secondary School',
    icon: <Award className="text-white" size={24} />,
    color: 'text-cyan-300',
  },
  {
    title: '12th Grade',
    score: 'Score: 88%',
    place: 'St. Joseph Matriculation Higher Secondary School',
    icon: <Target className="text-white" size={24} />,
    color: 'text-indigo-300',
  },
  {
    title: 'College',
    score: 'CGPA: 9.06',
    place: 'Velammal College of Engineering',
    icon: <GraduationCap className="text-white" size={24} />,
    color: 'text-emerald-300',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0b132b] text-gray-100 relative overflow-hidden">
      <div className="absolute w-60 h-60 bg-cyan-400/20 rounded-full blur-2xl top-[-50px] left-[-50px] animate-pulse z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
            <Star size={20} />
            <span className="text-lg font-medium">Get to know me</span>
            <Star size={20} />
          </div>
          <h2 className="text-5xl font-extrabold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Education Cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Tilt key={edu.title} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareColor="lightblue" glareBorderRadius="20px">
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-md border border-gray-700 p-6 rounded-2xl hover:bg-gray-700/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:scale-105"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-700 p-3 rounded-xl">{edu.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                      <div className={`${edu.color} font-semibold`}>{edu.score}</div>
                      <div className="text-gray-400 text-sm">{edu.place}</div>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>

          {/* Right - Profile Card */}
          <motion.div
            className="bg-gray-800/40 backdrop-blur-md border border-gray-700 p-8 rounded-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={4}
          >
            <div className="text-center mb-6">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gray-600 hover:scale-110 transition-all duration-500">
                <img
                  src={sharmiImg}
                  alt="Sharmi Sri"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                <span className="text-cyan-300">
                  <Typewriter
                    words={["Sharmi Sri", "Future Developer"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h3>
            </div>

            <div className="space-y-4 text-left text-sm sm:text-base">
              <p><span className="font-semibold text-gray-400">Degree:</span> <span className="text-cyan-300">B.Tech (Information Technology)</span></p>
              <p><span className="font-semibold text-gray-400">Languages Known:</span> <span className="text-indigo-300">Tamil, English, Sourashtra</span></p>
              <p><span className="font-semibold text-gray-400">Hobbies:</span> <span className="text-pink-300">Reading, Watching Cricket</span></p>
              <div>
                <span className="font-semibold text-gray-400">Skills:</span>
                <div className="space-y-2 mt-2">
                  {[{ label: 'Team Management', value: 90 }, { label: 'Time Management', value: 80 }].map((skill) => (
                    <div key={skill.label}>
                      <div className="text-sm text-emerald-200">{skill.label}</div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 1 }}
                        className="h-2 bg-emerald-400 rounded-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;