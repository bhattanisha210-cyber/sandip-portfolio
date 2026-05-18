import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layout, Globe, Code, FileText } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: "Figma", icon: <PenTool size={32} className="text-[#F24E1E]" />, color: "hover:shadow-[#F24E1E]/30", bg: "group-hover:bg-[#F24E1E]/10" },
    { name: "Miro", icon: <Layout size={32} className="text-[#050038]" />, color: "hover:shadow-[#050038]/30", bg: "group-hover:bg-[#050038]/10" },
    { name: "Webflow", icon: <Globe size={32} className="text-[#4353FF]" />, color: "hover:shadow-[#4353FF]/30", bg: "group-hover:bg-[#4353FF]/10" },
    { name: "HTML/CSS", icon: <Code size={32} className="text-[#E34F26]" />, color: "hover:shadow-[#E34F26]/30", bg: "group-hover:bg-[#E34F26]/10" },
    { name: "WordPress", icon: <FileText size={32} className="text-[#21759B]" />, color: "hover:shadow-[#21759B]/30", bg: "group-hover:bg-[#21759B]/10" }
  ];

  // Framer motion variants for drawing SVG lines
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#f4f4f4] relative overflow-hidden">
      {/* Animated Background Blur */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#f9a826]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-24 inline-block relative">
            My Arsenal
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#f9a826] rounded-full"></div>
          </h2>
        </motion.div>
        
        {/* Tree Diagram */}
        <div className="relative max-w-6xl mx-auto flex flex-col items-center min-h-[250px]">
          
          {/* Animated SVG Lines Background */}
          <div className="absolute inset-0 z-0 hidden md:block w-full pointer-events-none">
            <svg width="100%" height="250" className="absolute top-1/2 -translate-y-1/2 left-0">
              <motion.line 
                x1="10%" y1="125" x2="90%" y2="125" 
                stroke="url(#gradient)" strokeWidth="3" strokeDasharray="8 8"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              {/* Vertical drops */}
              {[10, 30, 50, 70, 90].map((x, i) => (
                <motion.line 
                  key={i}
                  x1={`${x}%`} y1="50" x2={`${x}%`} y2="125" 
                  stroke="url(#gradient)" strokeWidth="3" strokeDasharray="8 8"
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                />
              ))}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f4f4f4" />
                  <stop offset="50%" stopColor="#f9a826" />
                  <stop offset="100%" stopColor="#f4f4f4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between w-full relative z-10 gap-8 md:gap-4 mt-8 md:mt-0">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), type: 'spring', stiffness: 100 }}
                className="relative flex flex-col items-center group w-full md:w-auto perspective-1000"
              >
                {/* Fallback dashed line for mobile */}
                <div className="block md:hidden w-1 h-12 border-l-2 border-dashed border-[#f9a826]/50 absolute -top-12"></div>
                
                {/* Floating Animation Wrapper */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
                  className={`bg-white/80 backdrop-blur-md border border-white p-8 shadow-xl rounded-[2rem] flex flex-col items-center justify-center w-40 h-48 transition-all duration-500 transform-style-3d group-hover:-translate-y-4 group-hover:rotate-x-12 ${skill.color}`}
                >
                  {/* Icon Background Bubble */}
                  <div className={`w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 transition-colors duration-500 ${skill.bg} shadow-inner`}>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {skill.icon}
                    </motion.div>
                  </div>
                  
                  <span className="text-[#111111] font-extrabold text-lg text-center tracking-tight transition-colors duration-300">
                    {skill.name}
                  </span>
                  
                  {/* Decorative glowing dot */}
                  <div className="absolute -bottom-1 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#f9a826] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
