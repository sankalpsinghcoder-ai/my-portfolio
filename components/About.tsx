import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Three.js",
  "UI/UX Design",
  "Figma",
  "GSAP / Framer Motion"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-brand-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image / Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 border-2 border-brand-yellow/30 rounded-none group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <div className="aspect-[4/5] bg-zinc-900 overflow-hidden relative">
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Profile" 
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-yellow/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-display font-bold leading-tight"
            >
              I BUILD <span className="text-brand-yellow">EXPERIENCES</span><br />
              NOT JUST WEBSITES.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              I am a passionate creative developer with a keen eye for detail and a drive for perfection. With over 5 years of experience in full-stack development, I specialize in creating interactive, high-performance web applications that leave a lasting impression. My workflow combines technical precision with artistic fluidity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-mono uppercase text-brand-yellow mb-6 tracking-wider">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-sm font-medium text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;