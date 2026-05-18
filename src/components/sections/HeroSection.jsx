import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Simple Typewriter component
const Typewriter = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-gradient-to-br from-white via-[#f4f4f4] to-gray-200 min-h-screen flex items-center">
      {/* Floating Background Shapes */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-24 h-24 border-4 border-[#f9a826]/20 rounded-xl opacity-50"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -20, 0] }} 
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/4 w-32 h-32 bg-[#f9a826]/10 rounded-full blur-xl opacity-50"
      />
      <motion.div 
        animate={{ x: [0, 30, 0], rotate: [0, 45, 0] }} 
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg opacity-50 backdrop-blur-sm"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Content with Parallax */}
          <motion.div 
            style={{ y: y1, opacity: opacityText }}
            className="w-full md:w-1/2 flex flex-col items-start z-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3 mb-4 px-4 py-2 rounded-full bg-white border border-[#f9a826]/30 shadow-md backdrop-blur-sm"
            >
              <span className="text-xl animate-pulse">✨</span>
              <h2 className="text-xl md:text-2xl font-semibold text-[#111111]">
                Hello I'm <span className="text-[#f9a826]">Sandip Bogati</span>
              </h2>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111111] mb-6 drop-shadow-sm leading-tight">
              <Typewriter text="UI/UX Designer." delay={500} />
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 max-w-md mb-8 leading-relaxed font-medium"
            >
              Welcome to my portfolio! I am a passionate designer dedicated to creating user-centric, beautiful, and functional digital experiences.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(249,168,38,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f9a826] hover:bg-[#e0941f] text-white px-8 py-4 rounded-full font-bold shadow-[0_10px_20px_rgba(249,168,38,0.3)] transition-all relative overflow-hidden group"
              onClick={() => {
                const workSection = document.getElementById('work');
                if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
            </motion.button>
          </motion.div>

          {/* Right Content - Profile Image with inverse Parallax */}
          <motion.div 
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: 'spring', stiffness: 80 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end mt-16 md:mt-0 z-10 relative"
          >
            {/* Animated background blob */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
                borderRadius: ["50%", "40%", "60%", "50%"]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-[#f9a826]/40 via-orange-300/30 to-pink-300/30 blur-3xl z-0"
            />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[10px] border-white/80 bg-white overflow-hidden shadow-2xl z-10 group backdrop-blur-sm hover:border-[#f9a826] transition-colors duration-500">
              <img 
                src="/profile.jpg" 
                alt="Sandip Bogati" 
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
              />
              {/* Shine effect on hover */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
