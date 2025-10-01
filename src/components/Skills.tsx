import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Figma, Image } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      name: 'Graphic Design',
      percentage: 86,
      icon: Palette,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Illustration',
      percentage: 92,
      icon: Image,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Photoshop',
      percentage: 96,
      icon: Image,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'UI/UX Designing',
      percentage: 90,
      icon: Code,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Figma (Expert)',
      percentage: 95,
      icon: Figma,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage: number) => ({
      width: `${percentage}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <Code className="text-blue-600 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Software Skills
            </h2>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
          
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Proficient in industry-standard design tools and technologies
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 bg-gradient-to-r ${skill.color} rounded-full mr-4`}
                  >
                    <skill.icon className="text-white" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {skill.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Proficiency Level
                      </span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 0.1 + 1 }}
                        className="text-sm font-bold text-gray-900 dark:text-white"
                      >
                        {skill.percentage}%
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      custom={skill.percentage}
                      variants={progressVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Skill level indicator */}
                <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              Comprehensive Design Expertise
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              With expertise across multiple design disciplines, I combine technical proficiency 
              with creative vision to deliver exceptional results. My skills span from traditional 
              graphic design to modern UI/UX methodologies, ensuring versatile solutions for any project.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;