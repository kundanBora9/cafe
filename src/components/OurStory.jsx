import { motion } from "framer-motion";

const timeline = [
  { year: "2014", title: "A Parisian Dream", text: "Founded under the chestnut trees of Le Marais by sisters Camille & Élise." },
  { year: "2018", title: "The Garden Grows", text: "Our second salon blooms inside a restored 19th-century botanical conservatory." },
  { year: "2021", title: "Bloom Across Borders", text: "Café De Flora opens her doors in India, weaving European elegance with local craft." },
  { year: "Today", title: "An Ode to Slow Living", text: "Every menu, bouquet, and corner is hand-curated for memorable, unhurried moments." },
];

export default function OurStory() {
  return (
    <section id="story" data-testid="our-story-section" className="relative section-pad bg-cream">
      {/* Subtle floral motif */}
      <svg className="absolute -top-10 right-0 w-44 opacity-30" viewBox="0 0 100 100" fill="none">
        <circle cx="80" cy="20" r="3" fill="#F4D6D6" />
        <circle cx="65" cy="35" r="2" fill="#D4AF37" />
        <path d="M50,50 Q70,30 90,10" stroke="#A8BBA3" strokeWidth="0.8" />
      </svg>

      <div className="container-luxe grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
            <img
              src="https://cafedeflora.com/wp-content/uploads/2025/09/cafe-de-flora-serivc.jpeg"
              alt="Café De Flora service"
              className="h-full w-full object-cover img-zoom"
            />
          </div>
          <div className="hidden md:block absolute -bottom-10 -right-6 w-48 aspect-square rounded-[1.5rem] overflow-hidden shadow-xl border-8 border-cream">
            <img
              src="https://cafedeflora.com/wp-content/uploads/2025/09/GO9_06-819x1024.jpg"
              alt="Café De Flora interior"
              className="h-full w-full object-cover"
            />
          </div>
          {/* gold seal */}
          <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-rose/90 backdrop-blur-md flex items-center justify-center text-center shadow-md">
            <span className="font-serif text-xs leading-tight text-ink">
              Est. <br /><span className="text-gold text-lg">2014</span><br/>Paris
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <p className="eyebrow">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.1] text-ink">
            A Parisian-inspired floral sanctuary where <span className="italic text-sage-dark">elegance, cuisine</span> and <span className="italic text-sage-dark">nature</span> bloom together.
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Café De Flora is our love letter to lingering lunches, silver tea-trays
            and gardens that smell of vanilla and verbena. Born from a childhood spent
            in the flower markets of Île de la Cité, every dish is composed like a posy &mdash;
            seasonal, fragrant, and quietly extraordinary.
          </p>

          {/* Timeline */}
          <div className="mt-10 relative pl-6 border-l border-rose-dark/40">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.7 }}
                className="relative mb-8 last:mb-0"
                data-testid={`timeline-${t.year}`}
              >
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-gold ring-4 ring-cream" />
                <p className="text-xs tracking-[0.3em] uppercase text-gold">{t.year}</p>
                <h3 className="font-serif text-xl mt-1 text-ink">{t.title}</h3>
                <p className="text-sm text-muted mt-1 leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
