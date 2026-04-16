import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const ProgramTimeline = () => {
  const timelineEvents = [
    { time: '4:00 PM', label: 'Guest Arrival' },
    { time: '5:00 PM', label: 'Wedding Ceremony' },
    { time: '6:30 PM', label: 'Cocktail Hour' },
    { time: '7:00 PM', label: 'Dinner Reception' },
    { time: '9:00 PM', label: 'Dance & Celebration' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 px-6 bg-[#002B2E] min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-full border border-gold/30 bg-gold/5">
            <Clock className="w-6 h-6 text-gold" />
          </div>
        </div>
        <h2 className="font-script text-6xl md:text-7xl text-gold mb-6">Program Timeline</h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-gold/30" />
          <div className="w-2 h-2 rotate-45 border border-gold" />
          <div className="w-12 h-px bg-gold/30" />
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-md mx-auto"
      >
        {/* Vertical Line */}
        <div className="absolute left-0 top-4 bottom-4 w-px bg-gold/30" />

        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-12 mb-12 last:mb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-6px] top-1.5 w-3 h-3 bg-gold rounded-full border-2 border-[#002B2E] z-10 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />

            {/* Content Area */}
            <div className="space-y-1">
              <span className="font-sans text-[11px] md:text-xs tracking-[0.4em] uppercase text-gold">
                {event.time}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-white/90 font-normal">
                {event.label}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProgramTimeline;
