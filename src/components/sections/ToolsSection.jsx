import React from 'react';
import { motion } from 'framer-motion';

const ToolsSection = () => {
  const tools = [
    { name: 'Figma', color: 'hover:text-[#F24E1E]' },
    { name: 'Webflow', color: 'hover:text-[#4353FF]' },
    { name: 'Notion', color: 'hover:text-black dark:hover:text-white' },
    { name: 'Framer', color: 'hover:text-[#0055FF]' },
    { name: 'Adobe XD', color: 'hover:text-[#FF61F6]' },
    { name: 'Miro', color: 'hover:text-[#050038] dark:hover:text-[#FFD02F]' },
  ];

  return (
    <section className="py-20 border-y border-zinc-200 dark:border-zinc-900 bg-white dark:bg-[#09090b] overflow-hidden flex flex-col items-center">
      <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-10">Powered By</p>
      
      <div className="w-full relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 md:space-x-32 px-8">
          {[...tools, ...tools, ...tools].map((tool, index) => (
            <span 
              key={index}
              className={`text-3xl md:text-5xl font-bold text-zinc-300 dark:text-zinc-800 transition-colors duration-300 cursor-default ${tool.color}`}
            >
              {tool.name}
            </span>
          ))}
        </div>
      </div>
      
      {/* Add marquee animation to global CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </section>
  );
};

export default ToolsSection;
