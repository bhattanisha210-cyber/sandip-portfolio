import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const MagneticButton = ({ children, href, className }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? "_blank" : "_self"}
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex ${className}`}
    >
      {children}
    </motion.a>
  );
};

// Custom Facebook SVG Icon
const FacebookIcon = ({ size = 28 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#f4f4f4] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#f9a826]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] inline-block relative">
            Let's Connect
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 right-0 h-1.5 bg-[#f9a826] rounded-full"
            />
          </h2>
          <p className="mt-8 text-gray-600 text-lg max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative magic, I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {/* Glowing Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group rounded-3xl"
          >
            {/* Animated Glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f9a826] to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-around gap-8">
              
              <MagneticButton href="mailto:sandipbogati934@gmail.com" className="flex flex-col items-center group/btn w-full md:w-auto p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-4 group-hover/btn:scale-110 transition-transform group-hover/btn:bg-red-500 group-hover/btn:text-white">
                  <Mail size={28} />
                </div>
                <span className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-bold">Email</span>
                <span className="text-gray-900 font-semibold text-lg text-center break-all">
                  sandipbogati934@gmail.com
                </span>
              </MagneticButton>

              <div className="w-full h-px md:w-px md:h-32 bg-gray-200"></div>

              <MagneticButton href="https://facebook.com/sandip.bogati.9" className="flex flex-col items-center group/btn w-full md:w-auto p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover/btn:scale-110 transition-transform group-hover/btn:bg-blue-600 group-hover/btn:text-white">
                  <FacebookIcon size={28} />
                </div>
                <span className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-bold">Facebook</span>
                <span className="text-gray-900 font-semibold text-lg text-center break-all">
                  @sandip.bogati.9
                </span>
              </MagneticButton>

              <div className="w-full h-px md:w-px md:h-32 bg-gray-200"></div>

              <MagneticButton href="tel:9840274329" className="flex flex-col items-center group/btn w-full md:w-auto p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-4 group-hover/btn:scale-110 transition-transform group-hover/btn:bg-green-500 group-hover/btn:text-white">
                  <Phone size={28} />
                </div>
                <span className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-bold">Phone</span>
                <span className="text-gray-900 font-semibold text-lg text-center">
                  9840274329
                </span>
              </MagneticButton>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
