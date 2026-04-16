import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const WeddingCountdown = () => {
  const targetDate = "2026-05-14T18:45:00"; // Based on Invitation data
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <section className="py-24 px-6 bg-[#002B2E] text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-script text-5xl md:text-6xl text-gold mb-6">
          Counting Down to Forever
        </h2>

        {/* Heart Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-12 h-px bg-gold/30" />
          <Heart className="w-4 h-4 text-gold fill-gold" />
          <div className="w-12 h-px bg-gold/30" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border border-gold/20 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] group hover:border-gold/50 transition-colors duration-500">
                <span className="font-serif text-4xl md:text-5xl text-white group-hover:text-gold transition-colors duration-500">
                  {unit.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="mt-4 font-sans text-[10px] md:text-xs tracking-[0.3em] text-white/50 font-bold uppercase">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background Decorative Patterns */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none">
        <div className="w-32 h-32 md:w-64 md:h-64 border border-gold rounded-full blur-2xl" />
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-5 pointer-events-none">
        <div className="w-32 h-32 md:w-64 md:h-64 border border-gold rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default WeddingCountdown;
