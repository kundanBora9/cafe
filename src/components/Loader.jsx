import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="luxury-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.svg
              width="84" height="84" viewBox="0 0 84 84"
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <g transform="translate(42,42)">
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <ellipse
                    key={i}
                    rx="9" ry="20"
                    fill="#F4D6D6"
                    opacity="0.85"
                    transform={`rotate(${deg}) translate(0,-18)`}
                  />
                ))}
                <circle r="6" fill="#D4AF37" />
              </g>
            </motion.svg>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-serif text-3xl tracking-[0.25em] text-ink">
                CAFÉ <span className="text-gold">DE</span> FLORA
              </h1>
              <p className="mt-2 text-[10px] tracking-[0.4em] uppercase text-muted">
                Parisian Garden Café
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
