import { motion } from "framer-motion";

export default function FindUs() {
  return (
    <section data-testid="find-us-section" className="relative py-20 md:py-28 bg-cream overflow-hidden">
      {/* Decorative leaves */}
      <svg className="absolute top-12 left-0 w-32 opacity-40 -rotate-12" viewBox="0 0 100 100" fill="none">
        <path d="M10,80 Q30,20 90,10" stroke="#A8BBA3" strokeWidth="1" />
        <ellipse cx="35" cy="55" rx="6" ry="3" fill="#A8BBA3" opacity="0.6" transform="rotate(-30 35 55)" />
        <ellipse cx="55" cy="35" rx="6" ry="3" fill="#A8BBA3" opacity="0.6" transform="rotate(-30 55 35)" />
      </svg>
      <svg className="absolute bottom-12 right-0 w-32 opacity-40 rotate-12" viewBox="0 0 100 100" fill="none">
        <path d="M10,80 Q30,20 90,10" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="30" cy="60" r="3" fill="#F4D6D6" />
        <circle cx="60" cy="30" r="3" fill="#F4D6D6" />
      </svg>

      <div className="container-luxe relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="eyebrow">Find Us</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] mt-3 leading-[1.15] text-ink">
            <span className="text-gold">✿</span>{" "}
            <span className="italic text-sage-dark">Open Daily</span> · 9 AM Onwards ·{" "}
            <span className="italic text-sage-dark">All You Can Eat</span> · Vegan Options{" "}
            <span className="text-gold">✿</span>
          </h2>
          <div className="divider-floral mt-5">
            <span className="border-leaf w-12" />
            <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="3" fill="#D4AF37" /></svg>
            <span className="border-leaf w-12" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
