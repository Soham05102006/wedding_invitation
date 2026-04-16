import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScratchReveal = ({ onComplete }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    // Set canvas dimensions
    const updateSize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      drawFoil();
    };

    const drawFoil = () => {
      // Create Gold Foil Gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#D4AF37'); // Gold
      gradient.addColorStop(0.2, '#F5E1A4'); // Light Gold
      gradient.addColorStop(0.5, '#B8860B'); // Dark Goldenrod
      gradient.addColorStop(0.8, '#F5E1A4'); // Light Gold
      gradient.addColorStop(1, '#D4AF37'); // Gold

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add "Noise" or texture
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(x, y, 1, 1);
      }

      // Add text
      ctx.fillStyle = '#4A3700'; // Dark brown for contrast
      ctx.font = '20px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✦ Scratch to Reveal ✦', canvas.width / 2, canvas.height / 2);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e;
    return {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    };
  };

  const scratch = (e) => {
    if (!isDrawing || isRevealed) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pos = getPos(e);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 25, 0, Math.PI * 2);
    ctx.fill();

    // Trigger music on the very first scratch interaction to bypass autoplay restrictions
    if (onComplete) {
      onComplete();
    }
  };

  const checkReveal = () => {
    if (isRevealed) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const percentage = (transparentPixels / (canvas.width * canvas.height)) * 100;
    if (percentage > 60) {
      setIsFading(true);
      setTimeout(() => {
        setIsRevealed(true);
        // Ensure music is playing if it wasn't triggered earlier
        if (onComplete) onComplete();
      }, 500);
    }
  };

  const handleStart = (e) => {
    setIsDrawing(true);
    scratch(e);
  };

  const handleMove = (e) => {
    if (e.cancelable) e.preventDefault();
    scratch(e);
  };

  const handleEnd = () => {
    setIsDrawing(false);
    checkReveal();
  };

  return (
    <section className="py-24 px-6 bg-[#002B2E] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-gold rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <AnimatePresence mode="wait">
          <motion.h3
            key={isRevealed ? 'revealed' : 'scratch'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-serif text-4xl md:text-5xl text-gold italic mb-4"
          >
            {isRevealed ? 'Our forever begins' : 'Scratch to Reveal'}
          </motion.h3>
        </AnimatePresence>
        <div className="w-12 h-px bg-gold/50 mx-auto" />
      </motion.div>

      <div
        ref={containerRef}
        className="relative w-full max-w-[350px] aspect-[4/3] md:max-w-[500px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] group"
      >
        {/* The Revealed Card */}
        <div className="absolute inset-0 bg-[#001F21] border border-gold/20 rounded-2xl flex flex-col items-center justify-center p-8 text-center space-y-6">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-white/60">You're Invited!</p>

          <div className="space-y-1">
            <h4 className="font-serif text-5xl md:text-6xl text-gold">May 14</h4>
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-white/50">Thursday</p>
          </div>

          <div className="flex items-center gap-4 w-full">
            <div className="h-px bg-gold/20 flex-1" />
            <span className="font-serif text-2xl text-gold">6:45 PM</span>
            <div className="h-px bg-gold/20 flex-1" />
          </div>

          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30">Nagpur, Maharashtra</p>
        </div>

        {/* The Scratch Layer */}
        {!isRevealed && (
          <motion.canvas
            ref={canvasRef}
            animate={isFading ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.8 }}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            className="absolute inset-0 z-10 cursor-crosshair touch-none"
            style={{ borderRadius: '1rem' }}
          />
        )}
      </div>
    </section>
  );
};

export default ScratchReveal;
