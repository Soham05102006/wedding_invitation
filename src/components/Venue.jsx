import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const Venue = () => {
  // Using a simpler query-based embed URL to avoid 'pb' parameter issues
  const mapUrl = "https://maps.google.com/maps?q=Kanha%20Celebration,%20Umred%20Rd,%20Nagpur&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = "https://www.google.com/maps/dir//Kanha+Celebration,+Umred+Rd,+opposite+to+baydinath+company,+Bahadura,+Maharashtra+440034/@21.1353978,79.1209822,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bd4b9f51effe911:0x2c76f23bf60a236b!2m2!1d79.1558697!2d21.0942606?entry=ttu";

  return (
    <section id="venue" className="py-20 px-6 bg-[#002B2E] min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 relative z-10"
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full border border-gold/30 bg-gold/5">
            <MapPin className="w-6 h-6 text-gold" />
          </div>
        </div>
        <h2 className="font-script text-5xl md:text-6xl text-gold mb-4">Venue</h2>
        <div className="w-16 h-px bg-gold/30 mx-auto mb-6" />
        
        <div className="space-y-3 px-4">
          <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">The Kanha Celebration lawn</h3>
          <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50">Umred Rd, Nagpur</p>
        </div>
      </motion.div>

      {/* Map Container - Reduced size */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative w-full max-w-2xl px-4 z-10"
      >
        <div className="relative rounded-xl overflow-hidden border border-gold/10 shadow-2xl group">
          <iframe 
            src={mapUrl}
            className="w-full h-[300px] md:h-[350px] grayscale brightness-[0.6] contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
          ></iframe>
          
          {/* Overlay Button */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gold text-[#002B2E] px-6 py-3 rounded-full font-sans font-bold text-sm tracking-widest uppercase shadow-[0_10px_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform"
            >
              <Navigation className="w-4 h-4 fill-current" />
              Get Directions
            </a>
          </div>
        </div>
      </motion.div>

      {/* Ornate corners for the map or section */}
      <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-gold/20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-gold/20 pointer-events-none" />
    </section>
  );
};

export default Venue;
