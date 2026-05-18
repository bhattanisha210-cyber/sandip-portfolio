import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';

const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
      </Routes>
    </AnimatePresence>
  );
};

// Custom Cursor Component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#f9a826] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#f9a826]/50 rounded-full pointer-events-none z-[9998]"
        animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
};

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#f9a826] origin-left z-[10000]"
        style={{ scaleX }}
      />
      
      <div className="min-h-screen flex flex-col pt-16 md:pt-20 bg-[#f4f4f4]">
        <ScrollToSection />
        <Navbar />
        
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
