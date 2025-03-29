import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimation
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollAnimation
            from={{ opacity: 0, x: -50 }}
            to={{ opacity: 1, x: 0 }}
            threshold={[0, 0.5]}
          >
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="font-medium">savanimeet11@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="font-medium">+91 9824357565</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="font-medium">Surat, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            from={{ opacity: 0, x: 50 }}
            to={{ opacity: 1, x: 0 }}
            threshold={[0, 0.5]}
          >
            <form
              className="space-y-6"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
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
                    className="w-full px-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    name="Full_Name"
                    id="First-Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    name="Last_Name"
                    id="Last-Name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  name="Email-ID"
                  id="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  name="Your Message"
                  id="Meassage"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;