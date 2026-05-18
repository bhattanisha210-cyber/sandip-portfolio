import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const AcademicSection = () => {
  const academics = [
    {
      id: 1,
      college: "Sagarmatha Engineering College, Kathmandu",
      level: "Bachelors in Computer Engineering (2018 - 22)",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      description: "Focused on software development, algorithms, and system architecture."
    },
    {
      id: 2,
      college: "Kathmandu BernHardt College",
      level: "+2 in Science (2015 - 17)",
      icon: <BookOpen className="w-6 h-6 text-white" />,
      description: "Completed with a strong foundation in Physics and Mathematics."
    },
    {
      id: 3,
      college: "Everest Boarding School",
      level: "School Leaving Certificate (2014)",
      icon: <Award className="w-6 h-6 text-white" />,
      description: "Achieved excellence in all core subjects."
    }
  ];

  return (
    <section id="academic" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#f9a826]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] inline-block relative">
            Academic Qualification
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 right-0 h-1.5 bg-[#f9a826] rounded-full"
            />
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Center Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f9a826] via-orange-300 to-gray-200 transform md:-translate-x-1/2 rounded-full origin-top"
          />

          <div className="space-y-12">
            {academics.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-center w-full group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#f9a826] flex items-center justify-center shadow-lg z-20 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[#f9a826]/50">
                    <div className="w-8 h-8 rounded-full bg-[#f9a826] flex items-center justify-center relative">
                      {item.icon}
                      <span className="absolute inset-0 rounded-full bg-[#f9a826] animate-ping opacity-20"></span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}`}
                  >
                    <div className={`p-6 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-[#f9a826]/30 transition-all duration-300 transform group-hover:-translate-y-1 relative overflow-hidden`}>
                      {/* Decorative edge line */}
                      <div className={`absolute top-0 bottom-0 w-1.5 bg-[#f9a826] ${isEven ? 'right-0' : 'left-0'}`}></div>
                      
                      <span className="inline-block px-3 py-1 bg-orange-50 text-[#f9a826] rounded-full text-sm font-bold mb-3">
                        {item.level}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#111111] mb-2 group-hover:text-[#f9a826] transition-colors">
                        {item.college}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
