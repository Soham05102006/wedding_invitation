import { motion } from 'framer-motion';
import ganeshaMotif from '../assets/ganesha_motif.png';

const InvitationNames = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="invite" className="py-24 px-6 bg-pattern-teal text-center min-h-screen flex flex-col items-center justify-center relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <motion.img
          variants={itemVariants}
          src={ganeshaMotif}
          alt="Ganesha Motif"
          className="w-24 h-24 md:w-32 md:h-32 mx-auto filter drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
        />

        <motion.div variants={itemVariants} className="space-y-4">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-white/70">With Divine Blessings of Lord Ganesha</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl font-serif text-gold">
            <span>Mrs. Geeta  & Mr. Namdeorao Wanjari</span>
            <span className="text-white/30 hidden md:inline">|</span>
            <span>Mrs. Varsha & Mr. Krishna Gahatole</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <h1 className="font-serif text-6xl md:text-9xl text-gradient-gold">INVITE</h1>
          <p className="font-sans text-sm tracking-[0.2em] max-w-lg mx-auto leading-relaxed">
            You to join us in the wedding celebrations of our beloved
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative py-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gold/30" />
          <div className="space-y-2">
            <h2 className="font-script text-7xl md:text-9xl text-gold">Vaibhav</h2>
            <p className="font-serif text-4xl text-white/50">&</p>
            <h2 className="font-script text-7xl md:text-9xl text-gold">Sneha</h2>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gold/30" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold">On the following events</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InvitationNames;
