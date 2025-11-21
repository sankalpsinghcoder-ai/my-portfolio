import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative bg-brand-black border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-yellow font-mono text-sm tracking-widest uppercase mb-6">Get In Touch</p>
          <h2 className="text-6xl md:text-8xl font-display font-bold leading-none mb-12">
            LET'S WORK<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700">TOGETHER</span>
          </h2>
          
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto mb-12">
            Have a project in mind? I'm always available for a chat. Let's create something memorable.
          </p>

          <a 
            href="mailto:hello@vantage.dev" 
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-lg hover:bg-brand-yellow transition-colors duration-300 rounded-full"
          >
            hello@vantage.dev
          </a>
        </motion.div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-white/10 pt-8">
          <div className="text-left text-gray-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} VANTAGE. All Rights Reserved.
          </div>
          
          <div className="flex justify-center md:justify-end gap-6">
            {[
              { icon: <Github size={20} />, href: "#" },
              { icon: <Linkedin size={20} />, href: "#" },
              { icon: <Twitter size={20} />, href: "#" },
              { icon: <Mail size={20} />, href: "#" },
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;