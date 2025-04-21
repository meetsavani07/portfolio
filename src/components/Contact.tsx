import { motion } from 'framer-motion';
import { Mail, MessageSquareText, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handlePhoneClick = () => {
    window.location.href = 'https://wa.me/9824357565';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:savanimeet11@gmail.com';
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=Surat,Gujarat,India', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
          <b className="text-gray-400 max-w-2xl mx-auto">
            If you want to contact me, click the left side button and if you want to send an email,
            then fill up the form.
          </b>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                Contact Information
              </h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4 cursor-pointer hover:bg-slate-700/50 p-3 rounded-lg transition-all duration-300"
                  onClick={handleEmailClick}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 group-hover:bg-purple-600/30 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">Email</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 cursor-pointer hover:bg-slate-700/50 p-3 rounded-lg transition-all duration-300"
                  onClick={handlePhoneClick}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 group-hover:bg-purple-600/30 transition-all duration-300">
                    <MessageSquareText size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">Phone</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 cursor-pointer hover:bg-slate-700/50 p-3 rounded-lg transition-all duration-300"
                  onClick={handleLocationClick}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 group-hover:bg-purple-600/30 transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">Location</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="transition-all duration-300"
          >
            <form
              className="space-y-6"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="transition-all duration-300"
                >
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    First Name
                  </label>
                  <input
                    type="hidden"
                    name="access_key"
                    value="91f23690-3e48-4782-bdc7-a9c1180e4c40"
                  />
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                    name="Full_Name"
                    id="First-Name"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="transition-all duration-300"
                >
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                    name="Last_Name"
                    id="Last-Name"
                  />
                </motion.div>
              </div>
              <motion.div
                whileHover={{ y: -5 }}
                className="transition-all duration-300"
              >
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                  name="Email-ID"
                  id="Email"
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="transition-all duration-300"
              >
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                  name="Your Message"
                  id="Message"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;