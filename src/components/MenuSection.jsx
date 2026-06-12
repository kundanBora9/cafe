import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Leaf } from "lucide-react";

const MENU = {
  Breakfast: [
    {
      name: "Rose Petal Brioche",
      desc: "House-baked brioche, rose cream, candied petals and a whisper of honey.",
      price: "₹540",
      featured: true,
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_01-1.jpg",
      tags: ["Vegetarian"],
    },
    {
      name: "Lavender French Toast",
      desc: "Brioche soaked in lavender custard, honeycomb, mascarpone, fresh berries.",
      price: "₹620",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_02-1.jpg",
      tags: ["Vegetarian"],
    },
    {
      name: "Garden Eggs Royale",
      desc: "Poached eggs, smoked salmon, hollandaise, edible flowers on sourdough.",
      price: "₹780",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_03-2.jpg",
      tags: [],
    },
    {
      name: "Matcha Granola Bowl",
      desc: "Stone-cut oats, almond yoghurt, seasonal berries, toasted coconut.",
      price: "₹460",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_04-2.jpg",
      tags: ["Vegan"],
    },
  ],
  Brunch: [
    {
      name: "Truffle Croque Madame",
      desc: "Sourdough, gruyère, truffled béchamel, sunny egg, microgreens.",
      price: "₹860",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_05-2.jpg",
      tags: [],
    },
    {
      name: "Burrata & Peach",
      desc: "Stracciatella, roasted peach, basil oil, hazelnut crumble, balsamic pearls.",
      price: "₹720",
      featured: true,
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_06-2.jpg",
      tags: ["Vegetarian"],
    },
    {
      name: "Smoked Salmon Tartine",
      desc: "Cultured butter, dill, capers, lemon zest on heritage rye.",
      price: "₹680",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_07-2.jpg",
      tags: [],
    },
    {
      name: "Avocado Floral Toast",
      desc: "Sourdough, smashed avocado, micro-greens, viola blooms, chili oil.",
      price: "₹540",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_08-2.jpg",
      tags: ["Vegan"],
    },
  ],
  Desserts: [
    {
      name: "Pistachio Rose Éclair",
      desc: "Choux, pistachio cream, rose glaze, gold leaf, candied petals.",
      price: "₹420",
      featured: true,
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_09-2.jpg",
      tags: ["Vegetarian"],
    },
    {
      name: "Maison Macaron Selection",
      desc: "A tasting plate of six house macarons in seasonal flavours.",
      price: "₹560",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_01-1.jpg",
      tags: ["Vegetarian"],
    },
    {
      name: "Lemon Verbena Tart",
      desc: "Sablé Breton, verbena curd, Italian meringue, citrus segments.",
      price: "₹480",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_02-1.jpg",
      tags: ["Vegetarian"],
    },
    {
      name: "Hazelnut Paris-Brest",
      desc: "Praliné crémeux, choux pastry, candied hazelnuts, vanilla dust.",
      price: "₹520",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_03-2.jpg",
      tags: ["Vegetarian"],
    },
  ],
  "Signature Drinks": [
    {
      name: "Garden Spritz",
      desc: "Elderflower, prosecco, cucumber, edible blossoms.",
      price: "₹620",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_04-2.jpg",
      tags: [],
    },
    {
      name: "Rose Lychee Martini",
      desc: "Vodka, lychee, rose water, vermouth, frozen petal garnish.",
      price: "₹680",
      featured: true,
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_05-2.jpg",
      tags: [],
    },
    {
      name: "Lavender Earl Grey",
      desc: "First-flush tea, lavender, citrus, soft cream foam.",
      price: "₹380",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_06-2.jpg",
      tags: ["Vegan"],
    },
    {
      name: "Pistachio Latte",
      desc: "Single-origin espresso, pistachio milk, sea-salt, gold dust.",
      price: "₹360",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_07-2.jpg",
      tags: ["Vegan"],
    },
  ],
  "Main Course": [
    {
      name: "Saffron Risotto Milanese",
      desc: "Aged Carnaroli, saffron, parmesan, gold dust, charred lemon.",
      price: "₹980",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_08-2.jpg",
      tags: ["Vegetarian"],
    },
    {
      name: "Provençal Sea Bass",
      desc: "Pan-roasted, fennel confit, beurre blanc, herbs from our garden.",
      price: "₹1,280",
      featured: true,
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900&auto=format&fit=crop",
      tags: [],
    },
    {
      name: "Garden Pesto Pappardelle",
      desc: "Hand-rolled, basil pesto, burrata, pine nuts, lemon zest.",
      price: "₹860",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_01-1.jpg",
      tags: ["Vegetarian"],
    },
    {
      name: "Coq au Vin Rosé",
      desc: "Free-range chicken, mushrooms, rosé jus, silky potato purée.",
      price: "₹1,140",
      img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_02-1.jpg",
      tags: [],
    },
  ],
};

const CATEGORIES = Object.keys(MENU);

export default function MenuSection() {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <section id="menu" data-testid="menu-section" className="section-pad bg-beige relative overflow-hidden">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">La Carte</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.1] text-ink">
            A Menu Composed Like a <span className="italic text-sage-dark">Posy</span>
          </h2>
          <div className="divider-floral mt-5">
            <span className="border-leaf w-12" />
            <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="3" fill="#D4AF37" /></svg>
            <span className="border-leaf w-12" />
          </div>
          <p className="mt-4 text-muted text-sm md:text-base">
            Seasonal, hand-plated and perfumed with petals from our atelier garden.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              data-testid={`menu-tab-${c.toLowerCase().replace(/\s/g, "-")}`}
              className={`text-[11px] md:text-xs tracking-[0.2em] uppercase rounded-full px-5 py-2.5 transition-all duration-300 ${
                active === c
                  ? "bg-sage text-white shadow-md"
                  : "bg-white text-muted hover:text-ink border border-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Menu Grid with images */}
        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-7">
          <AnimatePresence mode="wait">
            {MENU[active].map((item, i) => (
              <motion.article
                key={`${active}-${item.name}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.07, duration: 0.55 }}
                data-testid={`menu-item-${item.name.toLowerCase().replace(/\s/g, "-")}`}
                className="group relative bg-white rounded-3xl overflow-hidden border border-border shadow-[0_1px_18px_rgba(44,62,45,0.04)] hover:shadow-[0_12px_40px_rgba(44,62,45,0.1)] hover:-translate-y-0.5 transition-all flex"
              >
                {/* Image */}
                <div className="w-2/5 relative overflow-hidden flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.featured && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-gold/95 text-white text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full shadow">
                      <Star size={9} fill="currentColor" /> Chef
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-5 md:p-6 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg md:text-xl text-ink leading-tight">{item.name}</h3>
                    <span className="font-serif text-lg md:text-xl text-gold whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="mt-2 text-xs md:text-sm text-muted leading-relaxed">{item.desc}</p>
                  {item.tags.length > 0 && (
                    <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span key={t} className="inline-flex items-center gap-1 text-[9px] tracking-[0.15em] uppercase text-sage-dark bg-sage/10 px-2 py-0.5 rounded-full">
                          <Leaf size={9} /> {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* "All you can eat" floral footer note */}
        <div className="mt-14 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted">
            <span className="text-gold">✿</span> All You Can Eat Brunch · Sundays 10 AM – 4 PM <span className="text-gold">✿</span>
          </p>
        </div>
      </div>
    </section>
  );
}
