import { motion } from 'framer-motion';

const FinalGreeting = () => {
  return (
    <section className="py-24 px-6 bg-[#002B2E] text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
      {/* Top Ornate Divider */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '100%' }}
        viewport={{ once: true }}
        className="max-w-md mx-auto mb-16 relative"
      >
        <svg viewBox="0 0 400 20" className="w-full h-auto fill-none stroke-gold/30 stroke-[0.5]">
          <path d="M0,10 Q100,0 200,10 T400,10" />
        </svg>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-gold/40 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-gold/60 rounded-full -translate-x-1/2" />
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-gold/40 rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="space-y-6 relative z-10"
      >
        <h2 className="font-script text-5xl md:text-6xl text-gold leading-relaxed">
          We can't wait to celebrate with you!
        </h2>
        <p className="font-script text-2xl md:text-3xl text-gold/80 italic">
          Vaibhav & Sneha
        </p>
      </motion.div>

      {/* Bottom Ornate Divider */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '100%' }}
        viewport={{ once: true }}
        className="max-w-md mx-auto mt-16 relative"
      >
        <svg viewBox="0 0 400 20" className="w-full h-auto fill-none stroke-gold/30 stroke-[0.5]">
          <path d="M0,10 Q100,20 200,10 T400,10" />
        </svg>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-gold/40 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-gold/60 rounded-full -translate-x-1/2" />
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-gold/40 rounded-full" />
      </motion.div>

      {/* Footer Details */}
      <div className="mt-35 space-y-8 pt-14 border-t border-gold/5 w-full max-w-lg mx-auto">
        <div className="font-script text-xl text-gold">Vaibhav & Sneha</div>
        <p className="font-sans text-[10px] tracking-[0.2em] text-white/30 uppercase flex items-center justify-center gap-2">
          Created by <span className="text-gold/50">Soham</span>
          { /* < span className="w-1 h-1 bg-gold/20 rounded-full" /> */}
          { /* Create your own wedding invitation */}
        </p>
      </div>
    </section>
  );
};

export default FinalGreeting;
