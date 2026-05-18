import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const AboutSection = () => {
  // 3D Tilt Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Staggered Text Reveal Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden perspective-1000">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f9a826]/5 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="text-4xl md:text-5xl font-extrabold text-[#111111] inline-block relative"
          >
            About Me
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 left-0 h-1.5 bg-[#f9a826] rounded-full"
            />
          </motion.h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          {/* Avatar Left */}
          <motion.div 
            initial={{ opacity: 0, x: -40, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            className="flex flex-col items-center relative perspective-1000 z-10"
          >
            {/* Spinning decorative rings */}
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -inset-6 border-[3px] border-dotted border-[#f9a826]/40 rounded-full z-0"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute -inset-10 border border-dashed border-orange-300/30 rounded-full z-0"
            />
            
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-[6px] border-white shadow-[0_20px_40px_rgba(249,168,38,0.15)] overflow-hidden mb-6 p-1.5 bg-gradient-to-br from-[#f9a826] via-orange-300 to-pink-300 relative z-10 group">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src="/profile.jpg" 
                  alt="Sandip Bogati" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none border border-white/20"></div>
              </div>
            </div>
            <motion.h3 
              whileHover={{ scale: 1.05, color: '#f9a826' }}
              className="text-2xl font-extrabold text-[#111111] transition-colors cursor-pointer"
            >
              Sandip Bogati
            </motion.h3>
          </motion.div>

          {/* Text Box Right with 3D Tilt */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="max-w-xl perspective-1000 z-10"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              style={{ rotateX, rotateY }}
              className="group border border-gray-100 p-8 md:p-12 rounded-3xl bg-white shadow-xl shadow-gray-200/50 relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#f9a826]/20 transform-style-3d"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#f9a826] transform origin-bottom transition-transform duration-500 group-hover:scale-y-100 scale-y-50"></div>
              
              {/* Animated Text Reveal */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed text-base md:text-lg font-medium space-y-4 translate-z-10"
              >
                <motion.p variants={childVariants}>
                  Hello there! I'm <span className="text-[#f9a826] font-extrabold text-xl">Sandip Bogati</span>.
                </motion.p>
                <motion.p variants={childVariants}>
                  I'm a passionate UI/UX Designer dedicated to creating user-centric, beautiful, and highly functional digital experiences.
                </motion.p>
                <motion.p variants={childVariants}>
                  My mission is to design applications that don't just look visually stunning, but provide an incredibly intuitive and seamless user journey. I strongly believe that good design is obvious, but great design is transparent.
                </motion.p>
                <motion.p variants={childVariants} className="pt-4 font-bold text-[#111111]">
                  Let's build something amazing together! 🚀
                </motion.p>
              </motion.div>
              
              {/* Floating accent elements inside card */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#f9a826]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 z-0 pointer-events-none"></div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
