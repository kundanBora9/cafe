import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const IMAGES = [
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_01-1.jpg", alt: "Café De Flora ambiance", h: "tall" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_02-1.jpg", alt: "Plated dish" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_03-2.jpg", alt: "Garden interior", h: "tall" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_04-2.jpg", alt: "Café detail" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_05-2.jpg", alt: "Atmosphere" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_06-2.jpg", alt: "Floral setting", h: "tall" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_07-2.jpg", alt: "Chef's plate" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_08-2.jpg", alt: "Beverage moment" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_09-2.jpg", alt: "Café De Flora", h: "tall" },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" data-testid="gallery-section" className="section-pad bg-cream">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Moments in Bloom</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.1] text-ink">
            A Living, <span className="italic text-sage-dark">Breathing</span> Gallery
          </h2>
          <p className="mt-4 text-muted text-sm md:text-base">
            Soft afternoons, sun-kissed petals and the everyday poetry of our salons.
          </p>
        </div>

        <div className="masonry mt-14">
          {IMAGES.map((img, i) => (
            <motion.button
              key={i}
              data-testid={`gallery-item-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 6) * 0.08, duration: 0.7 }}
              onClick={() => setActive(img)}
              className={`group relative w-full overflow-hidden rounded-2xl block shadow-sm hover:shadow-xl transition-shadow ${
                img.h === "tall" ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-4 left-5 text-white text-xs tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                {img.alt}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActive(null)}
            data-testid="gallery-lightbox"
            className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              transition={{ duration: 0.4 }}
              src={active.src}
              alt={active.alt}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-2xl"
            />
            <button
              data-testid="lightbox-close"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2"
              aria-label="Close"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
