import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Music, Music2 } from "lucide-react";

const LEFT_NAV = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
];

const RIGHT_NAV = [
  { label: "Gallery", href: "#gallery" },
  { label: "Locations", href: "#locations" },
  { label: "Reservations", href: "#reserve" },
];

const ALL_NAV = [...LEFT_NAV, ...RIGHT_NAV];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [music, setMusic] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerCls = scrolled
    ? "bg-cream/90 backdrop-blur-xl shadow-[0_2px_24px_rgba(44,62,45,0.06)] border-b border-border"
    : "bg-transparent";

  const linkCls = scrolled ? "text-ink hover:text-gold" : "text-white hover:text-rose";
  const subCls = scrolled ? "text-muted" : "text-white/80";
  const logoCls = scrolled ? "text-ink" : "text-white";

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerCls}`}
    >
      <div className="container-luxe py-5 relative">
        <div className="flex items-center">
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-7 flex-1" aria-label="Primary">
            {LEFT_NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                data-testid={`nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`text-[11px] tracking-[0.25em] uppercase transition-colors ${linkCls}`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Center logo */}
          <a href="#home" data-testid="brand-logo" className="flex-1 lg:flex-none lg:px-12 flex justify-center">
            <div className="text-center leading-tight">
              <div className={`font-serif text-xl md:text-2xl tracking-[0.3em] whitespace-nowrap ${logoCls}`}>
                CAFÉ <span className="text-gold">DE</span> FLORA
              </div>
              <div className={`text-[9px] md:text-[10px] tracking-[0.5em] uppercase mt-0.5 ${subCls}`}>
                Parisian Garden Café
              </div>
            </div>
          </a>

          {/* Right nav + music toggle */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
            {RIGHT_NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                data-testid={`nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`text-[11px] tracking-[0.25em] uppercase transition-colors ${linkCls}`}
              >
                {n.label}
              </a>
            ))}
            <button
              data-testid="ambient-music-toggle"
              aria-label="Toggle ambient music"
              onClick={() => setMusic((m) => !m)}
              className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] tracking-[0.2em] uppercase transition-all ${
                scrolled
                  ? "border border-border text-muted hover:text-gold"
                  : "border border-white/40 text-white/90 hover:text-rose"
              }`}
            >
              {music ? <Music size={12} /> : <Music2 size={12} />}
              {music ? "Playing" : "Ambient"}
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`lg:hidden p-2 ${scrolled ? "text-ink" : "text-white"}`}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[80] bg-cream"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-border">
              <span className="font-serif tracking-[0.3em] text-ink">CAFÉ <span className="text-gold">DE</span> FLORA</span>
              <button data-testid="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col items-start gap-6 px-8 py-12">
              {ALL_NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="font-serif text-3xl text-ink hover:text-gold transition-colors"
                  data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {n.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
