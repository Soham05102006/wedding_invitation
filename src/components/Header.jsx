import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const Header = ({ isPlaying, onTogglePlay }) => {
  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'INVITE', href: '#invite' },
    { name: 'EVENTS', href: '#events' },
    { name: 'STORY', href: '#story' },
    { name: 'VENUE', href: '#venue' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-start pointer-events-none">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="pointer-events-auto"
      >
        <div className="font-serif text-2xl md:text-3xl tracking-widest text-gold italic">S & V</div>
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-10 mt-2 pointer-events-auto">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[10px] tracking-[0.4em] text-white/50 hover:text-gold transition-colors duration-300 font-sans"
          >
            {link.name}
          </a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col items-end gap-6 pointer-events-auto"
      >
        <button
          onClick={onTogglePlay}
          className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold border border-gold/30 hover:bg-gold hover:text-black transition-all duration-300 overflow-hidden relative group"
        >
          {isPlaying ? (
            <Pause size={16} fill="currentColor" className="transition-transform group-hover:scale-125" />
          ) : (
            <Play size={16} fill="currentColor" className="ml-1 transition-transform group-hover:scale-125" />
          )}
          <div className={`absolute inset-0 border-2 border-gold rounded-full animate-ping opacity-20 pointer-events-none ${isPlaying ? 'block' : 'hidden'}`} />
        </button>
      </motion.div>
    </nav>
  );
};

export default Header;
