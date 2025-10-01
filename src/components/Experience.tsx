import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Clock, Star } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experienceData = [
    {
      title: 'Graphic Designing',
      duration: '6 months',
      description: 'Created visual concepts, logos, and marketing materials for various clients',
      skills: ['Adobe Photoshop', 'Illustration', 'Brand Design', 'Print Design'],
      type: 'design'
    },
    {
      title: 'Teaching',
      duration: '1 year',
      description: 'Taught design principles and software skills to students',
      skills: ['Design Education', 'Mentoring', 'Curriculum Development', 'Student Guidance'],
      type: 'teaching'
    },
    {
      title: 'UI/UX Designing',
      duration: '6 months',
      description: 'Designed user interfaces and experiences for web and mobile applications',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Figma', 'User Testing'],
      type: 'design'
    },
    {
      title: 'Junior Graphic Designer',
      duration: 'Current',
      description: 'Working on various design projects including branding, web design, and digital marketing materials',
      skills: ['Creative Design', 'Client Communication', 'Project Management', 'Digital Marketing'],
      type: 'design'
    }
  ];

  const abilities = [
    'Mobile Design',
    'Adaptive Design',
    'Quick Prototyping',
    'Usability Design',
    'UX Analysis'
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <Briefcase className="text-blue-600 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Experience & Abilities
            </h2>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <motion.h3
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <Clock className="text-blue-600 mr-3" size={24} />
              Professional Experience
            </motion.h3>

            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.type === 'design'
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Abilities Section */}
          <div>
            <motion.h3
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <Star className="text-blue-600 mr-3" size={24} />
              Core Abilities
            </motion.h3>

            <div className="grid gap-4">
              {abilities.map((ability, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4"
                    />
                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                      {ability}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02 }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-3">Ready for New Challenges</h4>
              <p className="text-blue-100">
                With a strong foundation in both teaching and design, I bring a unique perspective 
                to every project. I'm passionate about creating designs that not only look great 
                but also solve real problems and enhance user experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;