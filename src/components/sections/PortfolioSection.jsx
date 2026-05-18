import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const PortfolioSection = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#111111]">My projects</h2>
        </div>
        
        <div className="flex flex-col space-y-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
