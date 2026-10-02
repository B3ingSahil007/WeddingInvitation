import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnvelopeOpening from './components/EnvelopeOpening';
import ArchHeroSection from './components/ArchHeroSection';
import BlessingSection from './components/BlessingSection';
import ScheduleSection from './components/ScheduleSection';
import DetailsSection from './components/DetailsSection';
import CoupleSection from './components/CoupleSection';
import RSVPModal from './components/RSVPModal';
import MusicPlayerWidget from './components/MusicPlayerWidget';
import DeckleEdge from './components/DeckleEdge';

export default function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  const blessingRef = useRef(null);
  const coupleRef = useRef(null);

  const handleScrollToBlessing = () => {
    blessingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRsvpClose = () => {
    setIsRsvpOpen(false);
    // User requirement: After form closes, smoothly focus on the bottom groom and bride section!
    setTimeout(() => {
      coupleRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#2a221d] via-[#1c1613] to-[#120f0d] text-[#4a3b32] overflow-x-hidden">
      {/* INITIAL ENVELOPE STAGE (Image 1) */}
      <AnimatePresence>
        {!envelopeOpened && (
          <motion.div
            key="envelope-stage"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-50 pointer-events-auto"
          >
            <EnvelopeOpening onOpened={() => setEnvelopeOpened(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING MUSIC CONTROLLER */}
      {envelopeOpened && <MusicPlayerWidget />}

      {/* MAIN WEDDING INVITATION CARD (Single flowing vertical luxury card) */}
      {envelopeOpened && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-[430px] mt-0 mb-0 sm:mb-8 bg-[#fbf7ee] rounded-t-none rounded-b-none sm:rounded-b-3xl shadow-[0_25px_60px_rgba(0,0,0,0.65)] border-0 overflow-hidden"
        >
          
          {/* SECTION 1: ARCHWAY, SWANS & ZOHAN & ROSE (Image 2) */}
          <ArchHeroSection onScrollDown={handleScrollToBlessing} />

          {/* SECTION 2: BISMILLAH, TWO SOULS CALLIGRAPHY & LIVE COUNTDOWN (Image 3) */}
          <div ref={blessingRef}>
            <BlessingSection />
          </div>

          {/* Torn Paper Deckle Edge */}
          <DeckleEdge flip={true} />

          {/* SECTION 3: SCHEDULE OF EVENTS WITH SCROLL-LINKED FLOWER & LOCATION (Image 4) */}
          <ScheduleSection />

          {/* Torn Paper Deckle Edge */}
          <DeckleEdge />

          {/* SECTION 4: MAP, DRESS CODE, GIFT PREFERENCE & RSVP WAX SEAL (Image 5) */}
          <DetailsSection onOpenRsvp={() => setIsRsvpOpen(true)} />

          {/* Torn Paper Deckle Edge */}
          <DeckleEdge flip={true} />

          {/* SECTION 5: GROOM & BRIDE NAMES AND PORTRAIT (Bottom Section) */}
          <CoupleSection
            coupleRef={coupleRef}
            onReplayEnvelope={() => {
              window.scrollTo({ top: 0, behavior: 'instant' });
              setEnvelopeOpened(false);
            }}
          />
        </motion.main>
      )}

      {/* INTERACTIVE RSVP MODAL FORM */}
      <RSVPModal isOpen={isRsvpOpen} onClose={handleRsvpClose} />
    </div>
  );
}
