import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
//import mehandi1 from '../assets/mehandi1.jpeg';
//import haldi1 from '../assets/haldi1.jpeg';
//import vaibhav2 from '../assets/vaibhav2.jpeg';
//import sneha from '../assets/sneha.jpeg';
import memo1 from '../assets/memo1.jpeg';
import memo2 from '../assets/memo2.jpeg';
import memo3 from '../assets/memo3.jpeg';
import memo4 from '../assets/memo4.jpeg';
import memo5 from '../assets/memo5.jpeg';

const memoryImages = [
  memo1,
  memo2,
  memo3,
  memo4,
  memo5,
];

const MemoryGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % memoryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-[#002B2E] flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative Divider */}
      <div className="flex items-center gap-4 mb-12 w-full max-w-lg">
        <div className="h-px flex-1 bg-gold/30" />
        <Heart className="w-4 h-4 text-gold fill-gold animate-pulse" />
        <div className="h-px flex-1 bg-gold/30" />
      </div>

      {/* Gallery Card */}
      <div className="relative w-full max-w-4xl aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-gold/30 group">
        {/* Ornate Inner Border */}
        <div className="absolute inset-4 border border-gold/10 rounded-2xl z-10 pointer-events-none group-hover:border-gold/30 transition-colors duration-700" />

        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={memoryImages[currentIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover brightness-90"
          />
        </AnimatePresence>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {memoryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === index ? 'w-8 bg-gold' : 'w-2 bg-white/30'
                }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <h2 className="font-script text-4xl md:text-5xl text-gold">Memories of Us</h2>
      </motion.div>
    </section>
  );
};

export default MemoryGallery;
