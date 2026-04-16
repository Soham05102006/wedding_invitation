import { motion } from 'framer-motion';
import ganeshaMotif from '../assets/ganesha.png';
import cityBg from '../assets/city-bg.png';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background with zoom effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={cityBg} 
          alt="Mumbai Sea Link" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full">
        {/* Motif */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <img 
            src={ganeshaMotif} 
            alt="Ganesha Motif" 
            className="w-24 h-24 mx-auto object-contain filter invert"
          />
        </motion.div>

        {/* Pair Names */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="space-y-4"
        >
          <h1 className="text-6xl md:text-9xl font-serif text-white tracking-widest leading-none">
            AARAV <br /> 
            <span className="text-gold">&</span> <br /> 
            ISHA
          </h1>
          <div className="h-px w-24 bg-gold mx-auto my-8" />
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/70 font-bold">
            SAVE THE DATE • 25TH DECEMBER 2026 • MUMBAI
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.3em] text-gold/60">Scroll to Explore</span>
      </motion.div>
    </div>
  );
};

export default Hero;
