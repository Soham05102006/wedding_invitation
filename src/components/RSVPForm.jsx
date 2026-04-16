import { useState } from 'react';
import { motion } from 'framer-motion';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: 'yes',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-12 glass-card rounded-3xl space-y-4"
      >
        <h3 className="font-serif text-3xl text-gold">Thank You!</h3>
        <p className="font-sans text-white/70">Your response has been recorded. We can't wait to see you!</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-gold text-xs tracking-widest uppercase border-b border-gold/50 hover:border-gold"
        >
          Send another response
        </button>
      </motion.div>
    );
  }

  return (
    <section id="rsvp" className="py-24 px-6 bg-pattern-teal">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="font-serif text-5xl text-gold mb-2">RSVP</h2>
           <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/50">Kindly respond by Dec 1st, 2026</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 glass-card p-10 rounded-3xl border-gold/20">
          <div className="space-y-2">
            <label className="text-[10px] tracking-widest uppercase text-gold/80 block">FullName</label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors font-sans"
              placeholder="Your Name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-gold/80 block">Guests</label>
              <select 
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors font-sans"
              >
                {[1, 2, 3, 4, 5].map(num => <option key={num} value={num} className="bg-[#003638]">{num}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-gold/80 block">Attending?</label>
              <select 
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors font-sans"
              >
                <option value="yes" className="bg-[#003638]">Joyfully Accepts</option>
                <option value="no" className="bg-[#003638]">Regretfully Declines</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] tracking-widest uppercase text-gold/80 block">Message (Optional)</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors font-sans resize-none"
              placeholder="Leave a heartfelt message..."
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-gold text-black font-sans font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-xl"
          >
            Send Response
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
