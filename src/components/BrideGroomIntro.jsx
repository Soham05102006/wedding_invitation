import { motion } from 'framer-motion';
import SV from '../assets/SV.jpeg';
import sneha from '../assets/sneha.jpeg';
import vaibhav2 from '../assets/vaibhav2.jpeg';
import vaibhav from '../assets/vaibhav.jpeg';

const BrideGroomIntro = () => {
  return (
    <section className="py-32 px-6 bg-pattern-pink text-center relative overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-48 h-48 bg-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="mb-12">
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-white/60 mb-4">A Journey of Love</p>
          <h2 className="font-serif text-5xl md:text-7xl text-white">MEET THE BRIDE AND GROOM</h2>
        </div>

        <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-white/80 max-w-2xl mx-auto italic font-light">
          <p>
            Two hearts, one soul. From late-night conversations to lifelong commitments,
            Vaibhav and Sneha have found in each other a companion for every season of life.
          </p>
          <p>
            Join us as we celebrate the beginning of their forever story in the grand setting
            of our traditions and the warmth of our family and friends.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-12">
          {/* Groom Block */}
          <div className="text-center group">
            <div className="w-56 h-56 rounded-full border-4 border-gold p-2 mb-4 overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-110">
              <img src={sneha} alt="Groom" className="w-full h-full object-cover rounded-full" />
            </div>
            <h4 className="font-serif text-2xl text-gold">Sneha</h4>
            <p className="text-xs tracking-widest text-white/50 uppercase mt-1">THE BRIDE</p>
          </div>

          {/* Bride Block */}
          <div className="text-center group">
            <div className="w-56 h-56 rounded-full border-4 border-gold p-2 mb-4 overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-110">
              <img src={vaibhav2} alt="Bride" className="w-full h-full object-cover rounded-full" />
            </div>
            <h4 className="font-serif text-2xl text-gold">Vaibhav</h4>
            <p className="text-xs tracking-widest text-white/50 uppercase mt-1">THE GROOM</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrideGroomIntro;
