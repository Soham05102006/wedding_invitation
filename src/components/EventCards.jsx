import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';
import mehandi1 from '../assets/mehandi1.jpeg';
import haldi1 from '../assets/haldi1.jpeg';
import wedding from '../assets/wedding_ceremony.jpeg';

const events = [
  {
    title: "MEHENDI",
    date: "May 12, 2026",
    time: "05:00 PM",
    location: "Our Home's",
    image: mehandi1,
    mapLink: "https://www.google.com/maps/place/160,+Garoba+Nagar,+Shashtri+Nagar,+Nagpur,+Maharashtra+440008/@21.1471288,79.1284694,18z/data=!4m9!1m2!29m1!1b1!3m5!1s0x3bd4c7407c923f6f:0xa35f6b0a2bb62cf!8m2!3d21.1471288!4d79.1297261!16s%2Fg%2F11j9f4fh5b?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: "HALDI",
    date: "May 13, 2026",
    time: "05:00 PM",
    location: "Our Home's",
    image: haldi1,
    mapLink: "https://www.google.com/maps/place/160,+Garoba+Nagar,+Shashtri+Nagar,+Nagpur,+Maharashtra+440008/@21.1471288,79.1284694,18z/data=!4m9!1m2!29m1!1b1!3m5!1s0x3bd4c7407c923f6f:0xa35f6b0a2bb62cf!8m2!3d21.1471288!4d79.1297261!16s%2Fg%2F11j9f4fh5b?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: "WEDDING CEREMONEY",
    date: "May 14, 2026",
    time: "06:45 PM",
    location: "The Kanha Celebration Lawn",
    image: wedding,
    mapLink: "https://www.google.com/maps/dir//Kanha+Celebration,+Umred+Rd,+opposite+to+baydinath+company,+Bahadura,+Maharashtra+440034/@21.1353978,79.1209822,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bd4b9f51effe911:0x2c76f23bf60a236b!2m2!1d79.1558697!2d21.0942606?entry=ttu"
  },
];

const EventCards = () => {
  return (
    <section className="py-24 px-6 bg-[#002B2E]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            {/* Arch Card */}
            <div className="arch-card relative h-[420px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-center space-y-4">
                <h3 className="font-serif text-4xl text-gold tracking-widest">{event.title}</h3>
                <div className="flex flex-col items-center gap-2 text-sm font-sans tracking-wide text-white/90">
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-gold" /> {event.date}</span>
                  <span className="flex items-center gap-2"><Clock size={14} className="text-gold" /> {event.time}</span>
                  <span className="flex items-center gap-2 mt-2"><MapPin size={14} className="text-gold" /> {event.location}</span>
                </div>
                <a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 border border-gold/50 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-black transition-colors duration-300"
                >
                  See the route
                </a>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute -inset-2 border border-gold/20 rounded-t-full pointer-events-none -z-10 group-hover:border-gold/40 transition-colors duration-500 ml-2 mt-2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventCards;
