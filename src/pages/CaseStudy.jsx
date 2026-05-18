import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const CaseStudy = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Project not found</h2>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-24 pt-32 min-h-screen"
    >
      <div className="container mx-auto px-6 md:px-12">
        <Link to="/#work" className="inline-flex items-center text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-10 font-medium tracking-wide">
          <ArrowLeft size={18} className="mr-2" />
          Back to Projects
        </Link>
        
        {/* Header content */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-zinc-500 tracking-wider uppercase mb-4 block">
              {project.category} ✨
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-6 leading-tight text-gradient">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-light">
              {project.description}
            </p>

            {project.figmaLink && (
              <a 
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-300 mb-12"
              >
                <span>View Figma Embed</span>
                <ExternalLink size={18} />
              </a>
            )}

          </motion.div>
        </div>
        
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-3xl overflow-hidden glass p-4 mb-20 shadow-xl"
        >
          <img 
            src={project.coverImage || project.image} 
            alt={project.title} 
            className="w-full object-cover rounded-[1.5rem]"
          />
        </motion.div>
        
        {/* Content Structure */}
        <div className="max-w-4xl mx-auto space-y-24">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-zinc-200 dark:border-zinc-800 pb-24">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white block">The Problem</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                  {project.problem}
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white block">The Solution</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl h-fit">
              <div className="mb-8">
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Role</h4>
                <p className="font-medium text-zinc-900 dark:text-white text-lg">{project.role}</p>
              </div>
              <div className="mb-8">
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Timeline</h4>
                <p className="font-medium text-zinc-900 dark:text-white text-lg">{project.timeline}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Deliverables</h4>
                <ul className="text-zinc-900 dark:text-white font-medium space-y-2">
                  {project.deliverables.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Wireframes Image */}
          <div>
            <h3 className="text-3xl font-bold mb-10 text-zinc-900 dark:text-white">Design Process</h3>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 p-8 md:p-16 mb-6">
               <img 
                 src={project.processImage || "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1200&auto=format&fit=crop"} 
                 alt="Process and Wireframes" 
                 className="w-full object-cover rounded-xl shadow-md"
               />
            </div>
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 italic">Early stage wireframing and ideation sessions.</p>
          </div>
          
          {/* Final Results */}
           <div>
            <h3 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">Results & Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.stats.map((item, i) => (
                <div key={i} className="glass-card p-8 rounded-3xl text-center shadow-lg border-zinc-200 dark:border-zinc-800">
                  <div className="text-5xl font-black text-gradient mb-3">{item.stat}</div>
                  <div className="text-zinc-600 dark:text-zinc-400 font-medium tracking-wide">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Next Project CTA */}
        {project.nextProjectId && (
          <div className="mt-32 pt-16 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <h3 className="text-zinc-500 font-medium tracking-widest uppercase mb-4">Next Project</h3>
            <Link to={`/case-study/${project.nextProjectId}`} className="text-4xl hover:text-indigo-500 hover:scale-105 inline-block md:text-5xl font-black text-zinc-900 dark:text-white transition-all duration-300">
              {project.nextProjectTitle}
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CaseStudy;
