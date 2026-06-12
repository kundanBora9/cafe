import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Aanya Kapoor",
    role: "Lifestyle Editor, Vogue India",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    quote:
      "Stepping into Café De Flora is like opening a chapter of a romance novel — gilded saucers, whispered jazz, and pastries that arrive like little bouquets.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    role: "Founder, Atelier&Co.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    quote:
      "The Provençal Sea Bass is poetry on porcelain. Every detail — from the silverware to the violets atop the dessert — feels intentional and luxurious.",
    rating: 5,
  },
  {
    name: "Saanvi Iyer",
    role: "Travel Writer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    quote:
      "Closest you'll get to a Marais afternoon without boarding a flight. The pistachio rose éclair haunts my dreams in the loveliest way.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[i];

  return (
    <section data-testid="testimonials-section" className="section-pad bg-rose/40 relative overflow-hidden">
      <svg className="absolute top-10 left-10 w-32 opacity-50" viewBox="0 0 100 100">
        <path d="M10,90 Q40,40 90,10" stroke="#A8BBA3" strokeWidth="0.8" fill="none"/>
        <circle cx="50" cy="50" r="4" fill="#D4AF37"/>
      </svg>
      <svg className="absolute bottom-10 right-10 w-32 opacity-50" viewBox="0 0 100 100">
        <circle cx="20" cy="80" r="4" fill="#F4D6D6"/>
        <circle cx="60" cy="40" r="3" fill="#A8BBA3"/>
        <path d="M10,10 Q40,60 90,90" stroke="#D4AF37" strokeWidth="0.8" fill="none"/>
      </svg>

      <div className="container-luxe relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Whispers from Our Guests</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.1] text-ink">
            Sweet Letters, <span className="italic text-sage-dark">Sweeter Memories</span>
          </h2>
        </div>

        <div className="mt-14 max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.55 }}
              data-testid={`testimonial-${i}`}
              className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/70 shadow-xl px-8 md:px-12 py-12 text-center"
            >
              <Quote className="mx-auto text-gold mb-6" size={28} />
              <p className="font-serif text-xl md:text-2xl text-ink leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover ring-4 ring-rose-dark/40" />
                <div>
                  <p className="font-serif text-lg text-ink">{t.name}</p>
                  <p className="text-xs tracking-[0.25em] uppercase text-muted mt-0.5">{t.role}</p>
                </div>
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button data-testid="testimonial-prev" onClick={prev} aria-label="Previous" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-sage hover:text-white transition-colors">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  data-testid={`testimonial-dot-${idx}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-muted/30"}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button data-testid="testimonial-next" onClick={next} aria-label="Next" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-sage hover:text-white transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
