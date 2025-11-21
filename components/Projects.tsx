import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "NEBULA FINANCE",
    category: "Fintech Dashboard",
    description: "A real-time crypto trading platform with 3D data visualization.",
    image: "https://picsum.photos/id/20/800/600",
    link: "#",
    tags: ["React", "Three.js", "WebSocket"]
  },
  {
    id: 2,
    title: "AURA COMMERCE",
    category: "E-commerce",
    description: "Minimalist headless e-commerce solution built for scale.",
    image: "https://picsum.photos/id/3/800/600",
    link: "#",
    tags: ["Next.js", "Stripe", "Tailwind"]
  },
  {
    id: 3,
    title: "KINETIC STUDIO",
    category: "Portfolio",
    description: "Award-winning agency portfolio with fluid page transitions.",
    image: "https://picsum.photos/id/26/800/600",
    link: "#",
    tags: ["GSAP", "WebGL", "Vue"]
  },
  {
    id: 4,
    title: "ZENITH AI",
    category: "SaaS Platform",
    description: "AI-powered analytics tool for enterprise data management.",
    image: "https://picsum.photos/id/48/800/600",
    link: "#",
    tags: ["OpenAI", "Python", "React"]
  }
];

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 px-6 bg-brand-gray/30 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8"
        >
          <div>
            <span className="text-brand-yellow font-mono text-sm tracking-[0.2em] uppercase">Selected Work</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mt-4">FEATURED<br/>PROJECTS</h2>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <p className="text-gray-400 max-w-xs ml-auto">A collection of digital products focusing on interaction, motion, and usability.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden bg-neutral-900 aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                
                {/* Image Zoom Effect */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
                />

                {/* Overlay Action */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <ArrowUpRight className="text-black" size={32} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 group-hover:text-brand-yellow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{project.category}</p>
                  <div className="flex gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href="#" className="inline-block text-lg font-medium border-b border-brand-yellow pb-1 hover:text-brand-yellow transition-colors">
            View GitHub Archive
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;