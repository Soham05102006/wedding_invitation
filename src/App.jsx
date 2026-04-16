import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import InvitationNames from './components/InvitationNames';
import EventCards from './components/EventCards';
import BrideGroomIntro from './components/BrideGroomIntro';
import Lanterns from './components/Lanterns';
import WelcomeOverlay from './components/WelcomeOverlay';
import ScratchReveal from './components/ScratchReveal';
import ProgramTimeline from './components/ProgramTimeline';
import Venue from './components/Venue';
import FinalGreeting from './components/FinalGreeting';
import StarParticles from './components/StarParticles';
import MemoryGallery from './components/MemoryGallery';
import WeddingCountdown from './components/WeddingCountdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/assets/invitation_song.mpeg');
    audioRef.current.loop = true;
    audioRef.current.volume = 0;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
    
    // Play audio with volume fade-in
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
      
      let vol = 0;
      const interval = setInterval(() => {
        if (vol < 0.6) {
          vol += 0.05;
          audioRef.current.volume = vol;
        } else {
          clearInterval(interval);
        }
      }, 200);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const ensurePlaying = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-[#002B2E] min-h-screen text-white font-sans selection:bg-gold selection:text-black scroll-smooth">
      <AnimatePresence>
        {!isOpen && <WelcomeOverlay onOpen={handleOpenInvitation} />}
      </AnimatePresence>

      {/* Global Background Elements */}
      <Lanterns />
      <StarParticles />
      
      {/* Navigation - Passing audio controls */}
      <Header isPlaying={isPlaying} onTogglePlay={togglePlay} />

      <main className={isOpen ? 'opacity-100' : 'opacity-0'}>
        {/* Section 0: Hero with Palace Background */}
        <section id="home">
          <HeroBanner />
        </section>

        {/* Section 1: Traditional Invite & Names */}
        <InvitationNames />

        {/* Section 1.5: Scratch to Reveal Date */}
        <ScratchReveal onComplete={ensurePlaying} />

        {/* Section 1.6: Memory Gallery */}
        <MemoryGallery />

        {/* Section 1.7: Wedding Countdown */}
        <WeddingCountdown />

        {/* Section 1.8: Program Timeline */}
        <ProgramTimeline />

        {/* Section 1.7: Venue & Map */}
        <Venue />

        {/* Section 2: Event Details (Arch Cards) */}
        <section id="events">
          <div className="text-center bg-[#002B2E] pt-20">
             <h2 className="font-serif text-5xl md:text-7xl text-gold">The Celebrations</h2>
             <p className="font-sans text-xs tracking-[0.5em] uppercase text-white/50 mt-4">Join us in our joy</p>
          </div>
          <EventCards />
        </section>

        {/* Section 3: Bride & Groom Intro */}
        <section id="story">
          <BrideGroomIntro />
        </section>

        {/* Section 4: Final Greeting & Footer */}
        <section id="footer">
          <FinalGreeting />
        </section>
      </main>
    </div>
  );
}

export default App;
