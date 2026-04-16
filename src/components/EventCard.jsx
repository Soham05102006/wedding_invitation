import { MapPin, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const EventCard = ({ title, date, time, location, mapLink, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-gold/30 transition-colors duration-500"
    >
      <div className="aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
        <img 
          src={image || "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
      </div>
      
      <div className="p-8">
        <h3 className="text-3xl font-serif text-gold mb-6">{title}</h3>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-4 text-white/80">
            <Calendar className="w-5 h-5 text-gold" />
            <span className="text-sm tracking-widest">{date}</span>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <Clock className="w-5 h-5 text-gold" />
            <span className="text-sm tracking-widest">{time}</span>
          </div>
          <div className="flex items-start gap-4 text-white/80">
            <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
            <span className="text-sm tracking-widest leading-relaxed">{location}</span>
          </div>
        </div>

        <a 
          href={mapLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block w-full text-center py-4 border border-gold/30 text-gold text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all duration-300"
        >
          View on Map
        </a>
      </div>
    </motion.div>
  );
};

export default EventCard;
