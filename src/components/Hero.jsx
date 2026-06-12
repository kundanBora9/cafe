import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 140]);
  const scale = useTransform(scrollY, [0, 600], [1.05, 1.15]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6]);

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero-section"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://cafedeflora.com/wp-content/uploads/2025/09/GO9_05.jpg"
          alt="Café De Flora ambiance"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />
      </motion.div>

      {/* Decorative top corner florals */}
      <svg className="absolute top-24 left-4 md:left-12 w-28 md:w-44 opacity-70 z-10" viewBox="0 0 100 100" fill="none">
        <path d="M10,90 Q30,40 60,30 T95,5" stroke="#F4D6D6" strokeWidth="1.2" />
        <circle cx="60" cy="30" r="4" fill="#F4D6D6" />
        <circle cx="35" cy="55" r="3" fill="#D4AF37" />
        <circle cx="90" cy="10" r="3" fill="#A8BBA3" />
      </svg>
      <svg className="absolute top-24 right-4 md:right-12 w-28 md:w-44 opacity-70 z-10 scale-x-[-1]" viewBox="0 0 100 100" fill="none">
        <path d="M10,90 Q30,40 60,30 T95,5" stroke="#F4D6D6" strokeWidth="1.2" />
        <circle cx="60" cy="30" r="4" fill="#F4D6D6" />
        <circle cx="35" cy="55" r="3" fill="#D4AF37" />
        <circle cx="90" cy="10" r="3" fill="#A8BBA3" />
      </svg>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="text-rose font-script text-2xl md:text-3xl mb-4"
        >
          Bienvenue à
        </motion.span>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          data-testid="hero-tagline"
          className="mb-5 text-[10px] md:text-xs tracking-[0.35em] uppercase text-white/90"
        >
          <span className="text-gold">✿</span> Chanakyapuri · Gurugram · Ambience Mall <span className="text-gold">✿</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-5xl"
        >
          Fall In Love With <span className="italic text-rose">Flavours</span>
          <br className="hidden sm:block" /> <span>& </span>
          <span className="italic text-rose">Flowers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-6 max-w-2xl text-white/90 text-base md:text-lg leading-relaxed font-light"
        >
          An enchanting Parisian garden experience where every meal becomes a beautiful memory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#menu" data-testid="hero-view-menu" className="btn-primary">
            View Menu
          </a>
          <a href="#reserve" data-testid="hero-reserve" className="btn-secondary">
            Reserve a Table
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#story"
          data-testid="scroll-down-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
