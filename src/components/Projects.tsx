import React, { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  Smartphone,
  Plane,
  Leaf,
  Globe,
  Rocket
} from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const projects = [
    {
      title: 'Health Data Management System',
      description: 'Comprehensive mobile app for health data management with secure storage and analytics',
      icon: <Smartphone className="text-white" size={28} />,
      technologies: ['Mobile Dev', 'Database', 'UI/UX', 'Security'],
      category: 'Mobile',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      links: [
        {
          label: 'Paper',
          url: 'https://drive.google.com/file/d/1h025lwnsEpBoSjO4VGygVu_l0_TmvB0w/view?usp=sharing',
          icon: <ExternalLink size={18} />
        },
        {
          label: 'PPT',
          url: 'https://docs.google.com/presentation/d/1G0quo5coOtsERdzrHcp10c0LW-_HmJ0E/edit?usp=sharing',
          icon: <ExternalLink size={18} />
        },
        {
          label: 'Source Code',
          url: '#',
          icon: <Github size={18} />
        }
      ]
    },
    {
      title: 'AI Flight Delay Predictor',
      description: 'Smart system predicting flight delays using ML and real-time data.',
      icon: <Plane className="text-white" size={28} />,
      technologies: ['Python', 'TensorFlow', 'Pandas', 'API Integration'],
      category: 'AI/ML',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      featured: true,
      links: [
        {
          label: 'Paper',
          url: 'https://drive.google.com/file/d/1xdrkrIC4pHuVhMeC9_kVtjSakEhF8F7M/view?usp=sharing',
          icon: <ExternalLink size={18} />
        },
        {
          label: 'PPT',
          url: 'https://docs.google.com/presentation/d/1GG1Tl7I3D3O1MZ4xH839KiXLLqAycxCo/edit?usp=sharing',
          icon: <ExternalLink size={18} />
        },
        {
          label: 'Source Code',
          url: '#',
          icon: <Github size={18} />
        }
      ]
    },
    {
      title: 'Plant Disease Detection (WIP)',
      description: 'Detect plant diseases using deep learning and image classification.',
      icon: <Leaf className="text-white" size={28} />,
      technologies: ['Python', 'OpenCV', 'CNN', 'TensorFlow'],
      category: 'AI/ML',
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-500/20 to-green-600/20',
      links: [
        { label: 'Paper', url: '#', icon: <ExternalLink size={18} /> },
        { label: 'PPT', url: '#', icon: <ExternalLink size={18} /> },
        { label: 'Source Code', url: '#', icon: <Github size={18} /> }
      ]
    },
    {
      title: 'Flight Booking Platform',
      description: 'Full-featured flight booking system with payments and auth.',
      icon: <Globe className="text-white" size={28} />,
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Stripe'],
      category: 'Web',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      links: [
        { label: 'Paper', url: '#', icon: <ExternalLink size={18} /> },
        { label: 'PPT', url: '#', icon: <ExternalLink size={18} /> },
        { label: 'Source Code', url: '#', icon: <Github size={18} /> }
      ]
    }
  ];

  const categories = ['All', 'AI/ML', 'Web', 'Mobile'];
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 relative z-10 bg-[#0b132b] text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={0}
        >
          <div className="flex justify-center items-center gap-2 text-gray-400 mb-4">
            <Rocket size={20} />
            <span className="text-lg font-medium font-inter">My Creative Work</span>
            <Rocket size={20} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={1}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all font-medium font-inter ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              animate={controls}
              className="group relative overflow-hidden transform transition-all hover:scale-[1.03] hover:shadow-2xl"
            >
              <div
                className={`bg-gradient-to-br ${project.bgGradient} p-8 rounded-3xl border border-gray-700 backdrop-blur-lg transition-all`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}

                <div className={`bg-gradient-to-r ${project.gradient} p-4 rounded-2xl mb-6 w-fit`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-poppins group-hover:text-blue-300 transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 font-inter">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 px-3 py-1 text-sm rounded-full border border-gray-600 hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-100 hover:text-blue-300 transition-colors font-inter"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
