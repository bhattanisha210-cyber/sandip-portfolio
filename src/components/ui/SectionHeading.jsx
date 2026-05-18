import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, align = 'center', className = '' }) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align];

  return (
    <div className={`mb-16 md:mb-24 max-w-2xl ${alignClass} ${className}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-zinc-800 tracking-wider text-sm font-bold uppercase mb-3 dark:text-zinc-300"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
