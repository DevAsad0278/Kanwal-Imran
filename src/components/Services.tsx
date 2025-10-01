import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Monitor, Smartphone, Globe, PenTool, Layers } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with focus on user experience and usability.',
      features: ['Wireframes & Prototypes', 'User Research', 'Mobile & Web Apps', 'Usability Testing'],
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Graphic Design',
      description: 'Comprehensive visual design solutions for branding, marketing, and digital media.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Marketing Materials'],
      icon: Palette,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Web Design',
      description: 'Responsive and modern website designs built with latest technologies and best practices.',
      features: ['Responsive Layouts', 'React & TypeScript', 'Modern CSS', 'Performance Optimization'],
      icon: Globe,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Mobile Design',
      description: 'Native and cross-platform mobile app designs optimized for various screen sizes.',
      features: ['iOS & Android Design', 'Adaptive Layouts', 'Touch Interactions', 'App Store Guidelines'],
      icon: Smartphone,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand identity solutions that capture your unique voice and vision.',
      features: ['Logo & Branding', 'Style Guides', 'Color Palettes', 'Typography Systems'],
      icon: PenTool,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Design Systems',
      description: 'Scalable design systems and component libraries for consistent user experiences.',
      features: ['Component Libraries', 'Design Tokens', 'Style Guides', 'Documentation'],
      icon: Layers,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <PenTool className="text-blue-600 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Services
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
            Comprehensive design services to bring your vision to life with creativity and precision
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-600 h-full transition-all duration-300 group-hover:shadow-2xl"
              >
                {/* Service Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="relative mb-6"
                >
                  <div className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-xl shadow-lg`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  
                  {/* Decorative ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      whileHover={{ x: 5 }}
                      className="flex items-center"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-full px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-600 dark:to-gray-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg group-hover:from-blue-600 group-hover:to-purple-600"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My Design Process
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A structured approach to delivering exceptional design solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Research', desc: 'Analyzing users and competitors' },
              { step: '03', title: 'Design', desc: 'Creating and iterating solutions' },
              { step: '04', title: 'Delivery', desc: 'Polishing and final handoff' }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-full mb-4"
                >
                  {process.step}
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;