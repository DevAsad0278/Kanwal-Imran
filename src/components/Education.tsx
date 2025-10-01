import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      title: 'Matric',
      year: '2018',
      type: 'education',
      icon: GraduationCap,
      description: 'Completed matriculation with focus on science subjects'
    },
    {
      title: 'Intermediate',
      year: '2021–2022',
      type: 'education',
      icon: GraduationCap,
      description: 'Higher Secondary Certificate with specialization in relevant field'
    },
    {
      title: 'Advanced UI/UX Design Certification',
      year: '2023',
      type: 'certification',
      icon: Award,
      description: 'Comprehensive certification covering modern UI/UX design principles and practices'
    },
    {
      title: 'User Interaction Class',
      institution: 'Ideovideosty, Arfa Software Technology Park, Lahore',
      year: '2023',
      type: 'certification',
      icon: Award,
      description: 'Specialized training in user interaction design and usability principles'
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

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <GraduationCap className="text-blue-600 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Education & Certifications
            </h2>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"
                />

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 
                      ? 'md:mr-8 md:text-right' 
                      : 'md:ml-8 md:text-left'
                  } md:w-5/12 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600`}
                >
                  <div className="flex items-center mb-4 md:justify-start">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4"
                    >
                      <item.icon className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        <Calendar size={16} className="mr-1" />
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  
                  {item.institution && (
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {item.institution}
                    </p>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>

                  <div className="mt-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      item.type === 'education' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}>
                      {item.type === 'education' ? 'Education' : 'Certification'}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;