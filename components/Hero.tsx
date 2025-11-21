import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textVariant: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0] as [number, number, number, number],
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      
      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center">
        <div className="overflow-hidden mb-2">
          <motion.p 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariant}
            className="text-brand-yellow font-mono text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            Frontend Engineer & UI Designer
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariant}
            className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9]"
          >
            CRAFTING
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariant}
            className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500"
          >
            DIGITAL
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariant}
            className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9]"
          >
            REALITY
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <a 
            href="#work" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow text-black font-bold text-lg uppercase tracking-wider overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-brand-yellow" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;