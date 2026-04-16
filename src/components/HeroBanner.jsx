import { motion, useScroll, useTransform } from 'framer-motion';
import palaceHero from '../assets/palace_hero.png';
import SV from '../assets/SV.jpeg';
import vaibhav from '../assets/vaibhav.jpeg';

const HeroBanner = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Palace */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={palaceHero}
          alt="Indian Palace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#003638]" />
      </motion.div>

      {/* Jharokha / Centerpiece */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <div className="w-[300px] h-[450px] md:w-[400px] md:h-[600px] mx-auto border-[6px] border-gold rounded-t-full overflow-hidden relative shadow-2xl">
          <img
            src={SV}
            alt="Bride and Groom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border-[10px] border-[#003638]/20 pointer-events-none" />
          <div className="absolute bottom-10 left-0 right-0 text-white">
            <h2 className="font-script text-4xl md:text-6xl text-gold drop-shadow-lg">Vaibhav & Sneha</h2>
          </div>
        </div>
      </motion.div>

      {/* Floating lanterns in hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-75" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-150" />
      </div>
    </section>
  );
};

export default HeroBanner;
