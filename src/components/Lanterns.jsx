import { motion } from 'framer-motion';
import lanternImg from '../assets/lantern.png';

const Lanterns = () => {
  const lanternCount = 15;
  const lanterns = Array.from({ length: lanternCount }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 20,
    duration: 15 + Math.random() * 15,
    scale: 0.5 + Math.random() * 0.5,
    opacity: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {lanterns.map((lantern) => (
        <motion.img
          key={lantern.id}
          src={lanternImg}
          alt="Lantern"
          className="absolute bottom-[-100px]"
          style={{ 
            left: lantern.left,
            scale: lantern.scale,
            opacity: lantern.opacity,
            width: '60px',
            filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))'
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: '-120vh',
            opacity: [0, lantern.opacity, lantern.opacity, 0],
            x: [0, 20, -20, 0]
          }}
          transition={{ 
            duration: lantern.duration,
            repeat: Infinity,
            delay: lantern.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default Lanterns;
