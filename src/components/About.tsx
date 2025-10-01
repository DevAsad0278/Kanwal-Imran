import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, User } from "lucide-react";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kanwalimran1457@gmail.com",
      link: "mailto:kanwalimran1457@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 305460629",
      link: "tel:+92 305 4600629",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "H#48, St#16, Gunj Buksh Park, Lahore",
      link: null,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-6"
          >
            <User className="text-blue-600 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1"
            >
              <img
                src="/kanwalbg.png"
                alt="Kanwal Imran"
                className="rounded-xl h-96 w-full object-cover"
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-20 h-20 border-4 border-blue-400 rounded-full opacity-30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-purple-400 rounded-full opacity-30"
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Profile Summary
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am Kanwal Imran, a passionate Graphic and UI/UX Designer
                dedicated to creating designs that not only look visually
                appealing but also solve real-world problems. With hands-on
                experience in graphic design, UI/UX, and illustration, I bring
                creativity, technical expertise, and problem-solving skills to
                every project.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                My goal is to deliver innovative, user-friendly, and impactful
                designs that meet both client and user needs.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h4>
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md"
                >
                  <contact.icon
                    className="text-blue-600 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {contact.label}
                    </p>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
