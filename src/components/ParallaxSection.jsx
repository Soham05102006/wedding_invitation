import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ children, imageUrl, height = "60vh", opacity = 0.4 }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden w-full"
      style={{ height }}
    >
      <motion.div 
        style={{ y }}
        className="absolute inset-x-0 -inset-y-20 z-0"
      >
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000"} 
          alt="Parallax background"
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-black" style={{ opacity }} />
      </motion.div>
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
