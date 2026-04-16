import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const StarParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const count = 50;
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  const ShootingStars = () => {
    const stars = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      delay: Math.random() * 20,
      duration: 1 + Math.random() * 2,
      top: Math.random() * 50,
      left: Math.random() * 100,
    }));

    return stars.map((s) => (
      <motion.div
        key={`shooting-${s.id}`}
        className="absolute w-[150px] h-[2px] bg-gradient-to-r from-white via-gold/50 to-transparent rotate-[-45deg]"
        initial={{ x: -200, y: s.top, opacity: 0 }}
        animate={{
          x: ['0vw', '120vw'],
          y: [s.top, s.top + 300],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: s.duration,
          repeat: Infinity,
          delay: s.delay,
          ease: "linear",
          repeatDelay: Math.random() * 15 + 5,
        }}
        style={{ left: '-10%', top: `${s.top}%` }}
      />
    ));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden bg-transparent">
      <ShootingStars />
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-gold/40 rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.8)',
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 0.8, 0],
            scale: [1, 1.5, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Twinkling Stars */}
      {particles.slice(0, 20).map((p) => (
        <motion.div
          key={`twinkle-${p.id}`}
          className="absolute bg-white/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 1,
            height: 1,
          }}
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default StarParticles;
