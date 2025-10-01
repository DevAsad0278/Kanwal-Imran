import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  User,
  MessageSquare,
} from "lucide-react";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kanwalimran1457@gmail.com",
      link: "mailto:kanwalimran1457@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 3054600629",
      link: "tel:+92 305 4600629",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "H#48, St#16, Gunj Buksh Park, Lahore",
      link: null,
      color: "from-purple-500 to-pink-500",
    },
  ];

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
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
            <MessageSquare className="text-blue-600 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Let's Work Together
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
            Ready to bring your ideas to life? Get in touch and let's create
            something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Get in Touch
            </motion.h3>

            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group"
              >
                <div className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 bg-gradient-to-r ${contact.color} rounded-xl mr-6`}
                  >
                    <contact.icon className="text-white" size={24} />
                  </motion.div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {contact.title}
                    </h4>
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
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white"
            >
              <h4 className="text-xl font-bold mb-4">Follow Me</h4>
              <p className="text-blue-100 mb-6">
                Stay connected and see my latest work on social media platforms
              </p>

              <div className="flex space-x-4">
                {["LinkedIn", "Behance", "Instagram"].map((platform, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg font-medium hover:bg-white/30 transition-colors"
                  >
                    {platform}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6"
                  >
                    <CheckCircle
                      className="text-green-600 dark:text-green-400"
                      size={32}
                    />
                  </motion.div>

                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Kanwal Imran. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
