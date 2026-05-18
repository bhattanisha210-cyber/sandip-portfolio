import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
      className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group relative"
    >
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-[#f9a826]/10 to-orange-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>

      {/* Project Image */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full md:w-1/2 flex justify-center perspective-1000"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 flex items-center justify-center min-h-[250px] w-full max-w-[420px] transition-all duration-500 transform-gpu group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(249,168,38,0.2)]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="object-cover w-full h-full min-h-[250px] max-h-[300px] transform transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Glass Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 rounded-2xl"></div>
          
          {/* View Project Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="px-6 py-2 bg-white/90 backdrop-blur-sm text-[#111111] font-bold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              View Project
            </span>
          </div>
        </div>
      </motion.div>
      
      {/* Project Info */}
      <div className="w-full md:w-1/2 flex flex-col space-y-4 text-center md:text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
        >
          <span className="inline-block px-3 py-1 bg-orange-50 text-[#f9a826] text-xs font-bold rounded-full mb-2 uppercase tracking-wider">
            Case Study
          </span>
          <h3 className="text-3xl font-extrabold text-[#111111] group-hover:text-[#f9a826] transition-colors duration-300">
            {project.title}
          </h3>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          {project.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
