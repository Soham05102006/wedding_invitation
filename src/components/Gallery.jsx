import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519225495810-758b633ec51b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1465495910483-0d674577858c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522673607200-164801eeb366?auto=format&fit=crop&q=80&w=800",
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };
  
  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer overflow-hidden aspect-auto"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={src} 
              alt={`Gallery ${index}`} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-[60]"
              onClick={closeLightbox}
            >
              <X size={40} strokeWidth={1} />
            </button>

            <button 
              className="absolute left-6 text-white hover:text-gold transition-colors z-[60]"
              onClick={showPrev}
            >
              <ChevronLeft size={60} strokeWidth={1} />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              src={images[selectedIndex]}
              className="max-w-full max-h-full object-contain"
              alt="Lightbox"
            />

            <button 
              className="absolute right-6 text-white hover:text-gold transition-colors z-[60]"
              onClick={showNext}
            >
              <ChevronRight size={60} strokeWidth={1} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
