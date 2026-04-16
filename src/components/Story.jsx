import { motion } from 'framer-motion';

const Story = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="story" className="py-24 px-4 bg-noir">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-serif text-gold italic">
            Our Story
          </motion.h2>
          
          <motion.div variants={itemVariants} className="space-y-8 text-white/80 leading-loose tracking-widest text-sm md:text-base font-light">
            <p>
              Life is a collection of moments, and the most beautiful ones are those shared together. 
              Our journey began in the vibrant heart of the city, where two souls found harmony 
              amidst the neon lights and urban rhythm.
            </p>
            <div className="w-12 h-px bg-gold/30 mx-auto" />
            <p>
              From the first coffee in South Bombay to sunsets at Marine Drive, every chapter 
              has been a testament to love, laughter, and building a dream together.
            </p>
            <div className="w-12 h-px bg-gold/30 mx-auto" />
            <p>
              Today, we invite you to be part of our most significant chapter yet. 
              As we step into a new world together, your presence is the greatest gift we could ask for.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8">
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800" 
              alt="Couple"
              className="w-full h-80 object-cover grayscale border border-white/10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
