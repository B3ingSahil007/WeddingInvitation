import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, CheckCircle2, Send, Users, Utensils, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVPModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    attending: 'yes', // 'yes' or 'no'
    adults: '1',
    children: '0',
    dietary: 'None',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e5c37e', '#ffd787', '#b8860b', '#7c1822', '#f49aa8'],
      });

      // Save to localStorage
      try {
        localStorage.setItem('wedding_rsvp', JSON.stringify(formData));
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const handleFinish = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleFinish();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-[#fdfbf7] rounded-3xl shadow-2xl border border-[#dfb76c]/50 my-auto max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Header decorative gold gradient bar */}
          <div className="h-2 w-full bg-gradient-to-r from-[#b8860b] via-[#ffd787] to-[#8c6224] shrink-0" />

          {/* Close Button */}
          <button
            onClick={handleFinish}
            className="absolute top-4 right-4 p-2 rounded-full text-[#7d6757] hover:text-[#2d221b] hover:bg-[#ebdcc4] transition-colors cursor-pointer z-30 bg-[#fdfbf7]/90 backdrop-blur-sm border border-[#dfb76c]/40 shadow-sm"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Modal Content */}
          <div
            className="overflow-y-auto flex-1 p-6 sm:p-8 overscroll-contain"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#b8860b #f5ecd8',
            }}
          >
            {!submitted ? (
              <>
                {/* Modal Title & Couple Monogram */}
                <div className="text-center mb-6 pt-1">
                  <span className="font-great-vibes text-3xl sm:text-4xl text-[#9c753e]">
                    R & Z
                  </span>
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-medium text-[#3b2d24] mt-1">
                    RSVP to Our Wedding
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7d6859] font-montserrat mt-1">
                    Kindly respond by <strong className="text-[#8d622c]">September 1st, 2026</strong>
                  </p>
                  <div className="h-[1px] w-20 bg-[#dfb76c]/60 mx-auto mt-3" />
                </div>

                {/* RSVP Form */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left font-montserrat text-xs sm:text-sm">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[#4e3a2d] font-medium mb-1">
                      Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Aamir & Sarah Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6c7b0] bg-[#fbf8f2] text-[#33251c] placeholder-[#a69587] focus:outline-none focus:ring-2 focus:ring-[#b8860b]/40 focus:border-[#b8860b]"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#4e3a2d] font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6c7b0] bg-[#fbf8f2] text-[#33251c] placeholder-[#a69587] focus:outline-none focus:ring-2 focus:ring-[#b8860b]/40 focus:border-[#b8860b]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#4e3a2d] font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6c7b0] bg-[#fbf8f2] text-[#33251c] placeholder-[#a69587] focus:outline-none focus:ring-2 focus:ring-[#b8860b]/40 focus:border-[#b8860b]"
                      />
                    </div>
                  </div>

                  {/* Attendance Choice */}
                  <div>
                    <label className="block text-[#4e3a2d] font-medium mb-2">
                      Will you be attending? <span className="text-rose-600">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attending: 'yes' })}
                        className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                          formData.attending === 'yes'
                            ? 'bg-[#7c1822] text-[#fff] border-[#7c1822] shadow-md ring-2 ring-[#7c1822]/30'
                            : 'bg-[#fcf9f2] text-[#695446] border-[#d8cab5] hover:border-[#b8860b]'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${formData.attending === 'yes' ? 'fill-current text-rose-300' : 'text-[#8c6734]'}`} />
                        <span className="font-semibold text-xs sm:text-sm">Joyfully Accept</span>
                        <span className="text-[10px] opacity-80">I will celebrate with you</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attending: 'no' })}
                        className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                          formData.attending === 'no'
                            ? 'bg-[#5a483e] text-[#fff] border-[#5a483e] shadow-md ring-2 ring-[#5a483e]/30'
                            : 'bg-[#fcf9f2] text-[#695446] border-[#d8cab5] hover:border-[#b8860b]'
                        }`}
                      >
                        <span className="text-base leading-none">🕊️</span>
                        <span className="font-semibold text-xs sm:text-sm">Regretfully Decline</span>
                        <span className="text-[10px] opacity-80">Sending prayers from afar</span>
                      </button>
                    </div>
                  </div>

                  {/* Guest count & Dietary (Shown only if Attending = yes) */}
                  {formData.attending === 'yes' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4 pt-1"
                    >
                      {/* Number of Guests */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[#4e3a2d] font-medium mb-1 flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-[#b8860b]" />
                            <span>Adults Attending</span>
                          </label>
                          <select
                            value={formData.adults}
                            onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-[#d6c7b0] bg-[#fbf8f2] text-[#33251c] focus:outline-none focus:ring-2 focus:ring-[#b8860b]/40"
                          >
                            <option value="1">1 Person</option>
                            <option value="2">2 Persons</option>
                            <option value="3">3 Persons</option>
                            <option value="4">4 Persons</option>
                            <option value="5+">5+ Persons</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[#4e3a2d] font-medium mb-1 flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-[#b8860b]" />
                            <span>Children (Under 12)</span>
                          </label>
                          <select
                            value={formData.children}
                            onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-[#d6c7b0] bg-[#fbf8f2] text-[#33251c] focus:outline-none focus:ring-2 focus:ring-[#b8860b]/40"
                          >
                            <option value="0">0 Children</option>
                            <option value="1">1 Child</option>
                            <option value="2">2 Children</option>
                            <option value="3+">3+ Children</option>
                          </select>
                        </div>
                      </div>

                      {/* Dietary Preferences */}
                      <div>
                        <label className="block text-[#4e3a2d] font-medium mb-1 flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5 text-[#b8860b]" />
                          <span>Dietary Preferences / Allergies</span>
                        </label>
                        <select
                          value={formData.dietary}
                          onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-[#d6c7b0] bg-[#fbf8f2] text-[#33251c] focus:outline-none focus:ring-2 focus:ring-[#b8860b]/40"
                        >
                          <option value="None">None (Standard Halal Royal Menu)</option>
                          <option value="Vegetarian">Vegetarian Special</option>
                          <option value="Vegan">Strict Vegan</option>
                          <option value="Gluten-Free">Gluten-Free</option>
                          <option value="Nut Allergy">Nut Allergy</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Dua / Wishes Message */}
                  <div>
                    <label className="block text-[#4e3a2d] font-medium mb-1">
                      A Warm Dua or Message for Zohan & Rose
                    </label>
                    <textarea
                      rows={2}
                      placeholder="May Allah bless your marriage with eternal love, happiness, and peace..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#d6c7b0] bg-[#fbf8f2] text-[#33251c] placeholder-[#a69587] focus:outline-none focus:ring-2 focus:ring-[#b8860b]/40 focus:border-[#b8860b] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#7c1822] via-[#911d29] to-[#611019] text-white font-cinzel font-semibold tracking-wider text-xs sm:text-sm shadow-lg hover:shadow-xl hover:from-[#8d1c28] hover:to-[#6f121d] transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer border border-[#b84651]"
                  >
                    {loading ? (
                      <span>Submitting RSVP...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span>Confirm RSVP</span>
                        <Send className="w-3.5 h-3.5 text-amber-200" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* Success Confirmation Card */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 text-center select-none"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500/40 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="font-cormorant text-3xl sm:text-4xl text-[#3b2d24] font-medium">
                  {formData.attending === 'yes' ? 'Alhamdulillah! RSVP Confirmed' : 'Thank You for Your Wishes'}
                </h3>

                <p className="font-montserrat text-sm text-[#695446] mt-2 max-w-sm mx-auto leading-relaxed">
                  {formData.attending === 'yes' ? (
                    <>
                      Thank you, <strong className="text-[#8c6224]">{formData.name}</strong>. Your confirmation has been received with great joy. We cannot wait to celebrate our union with you!
                    </>
                  ) : (
                    <>
                      Thank you, <strong className="text-[#8c6224]">{formData.name}</strong>, for your heartfelt thoughts and prayers. You will be dearly missed in person, but held close in our hearts.
                    </>
                  )}
                </p>

                <div className="mt-8 pt-4 border-t border-[#dfb76c]/40 flex flex-col items-center gap-3">
                  <p className="text-xs text-[#8c7462] font-montserrat">
                    See our wedding portrait and message below:
                  </p>
                  <button
                    onClick={handleFinish}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#b8860b] to-[#8c6224] text-white font-cinzel text-xs tracking-wider shadow-md hover:brightness-110 transition-all cursor-pointer"
                  >
                    View Couple & Closing Wishes
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
