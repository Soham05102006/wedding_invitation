import { motion } from 'framer-motion';
import ganeshaMotif from '../assets/ganesha_motif.png';

const WelcomeOverlay = ({ onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[100] bg-[#003638] flex flex-col items-center justify-center p-6 text-center"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-pattern-teal pointer-events-none" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 space-y-8"
      >
        <img
          src={ganeshaMotif}
          alt="Ganesha"
          className="w-24 h-24 md:w-32 md:h-32 mx-auto filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
        />

        <div className="space-y-2">
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold/80">Traditional Invitation</p>
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-widest leading-tight">
            Sneha <span className="text-gold italic">&</span> Vaibhav
          </h1>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/50">Are getting married</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="group relative px-12 py-4 mt-8 overflow-hidden rounded-full font-sans text-xs font-bold tracking-[0.3em] uppercase text-black"
        >
          <div className="absolute inset-0 bg-gold transition-transform duration-300 group-hover:scale-110" />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Open Invitation</span>
          <div className="absolute inset-0 border border-white/20 rounded-full animate-ping opacity-20" />
        </motion.button>
      </motion.div>

      {/* Ornate corners */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl opacity-50" />
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-gold/30 rounded-tr-3xl opacity-50" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-gold/30 rounded-bl-3xl opacity-50" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-gold/30 rounded-br-3xl opacity-50" />
    </motion.div>
  );
};

export default WelcomeOverlay;
