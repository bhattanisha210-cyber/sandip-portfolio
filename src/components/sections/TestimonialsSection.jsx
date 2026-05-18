import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    quote: "One of the most talented designers I've ever worked with. The ability to translate complex requirements into seamless, beautiful interfaces is unmatched.",
    author: "Sarah Jenkins",
    role: "Product Manager at TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Transformed our outdated SaaS platform into a modern necessity. Our user retention skyrocketed by 40% after the redesign.",
    author: "Michael Chen",
    role: "CEO of DataSync",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Client Feedback." 
          subtitle="Testimonials" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 md:p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 text-zinc-200 dark:text-zinc-800 w-12 h-12 rotate-180" />
              
              <p className="text-xl md:text-2xl text-zinc-900 dark:text-zinc-300 font-medium leading-snug mb-10 relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-zinc-800"
                />
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">{t.author}</h4>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-300">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
