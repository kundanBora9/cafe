import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const POSTS = [
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_02-1.jpg", likes: "2.4k", comments: "112" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_07-2.jpg", likes: "3.1k", comments: "204" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_08-2.jpg", likes: "1.8k", comments: "76" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_09-2.jpg", likes: "4.2k", comments: "318" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_05-2.jpg", likes: "2.7k", comments: "94" },
  { src: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_03-2.jpg", likes: "1.9k", comments: "82" },
];

export default function InstagramFeed() {
  return (
    <section data-testid="instagram-section" className="section-pad bg-cream">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">@cafedeflora</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.1] text-ink">
            Follow Our <span className="italic text-sage-dark">Daily Bloom</span>
          </h2>
          <p className="mt-4 text-muted text-sm md:text-base">
            A pocketful of pastels, plated wonders, and behind-the-scenes magic.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {POSTS.map((p, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/cafedeflora"
              target="_blank"
              rel="noreferrer"
              data-testid={`insta-post-${i}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              className="group relative aspect-square overflow-hidden rounded-2xl block"
            >
              <img src={p.src} alt={`Instagram post ${i + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white text-xs tracking-[0.2em] uppercase">
                <span className="flex items-center gap-1"><Heart size={14} fill="currentColor" /> {p.likes}</span>
                <span className="flex items-center gap-1"><MessageCircle size={14} /> {p.comments}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://instagram.com/cafedeflora"
            target="_blank"
            rel="noreferrer"
            data-testid="follow-instagram"
            className="btn-outline-gold"
          >
            <Instagram size={15} /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
