import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

const LOCS = [
  {
    name: "Chanakyapuri",
    city: "New Delhi",
    address: "Shop 24 & 25, Santushti Shopping Complex, New Delhi 110021",
    phone: "+91 88829 27513",
    tel: "+918882927513",
    hours: "Open Daily · 9:00 AM Onwards",
    img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_01-1.jpg",
    map: "https://maps.google.com/?q=Santushti+Shopping+Complex+Chanakyapuri",
  },
  {
    name: "Gurugram",
    city: "Haryana",
    address: "Gurugram outlet — contact for address & directions",
    phone: "+91 84484 41840",
    tel: "+918448441840",
    hours: "Open Daily · 9:00 AM Onwards",
    img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_04-2.jpg",
    map: "https://maps.google.com/?q=Cafe+De+Flora+Gurugram",
  },
  {
    name: "Ambience Mall",
    city: "Vasant Kunj, Delhi",
    address: "Vasant Kunj location, Ambience Mall, Delhi NCR",
    phone: "+91 84483 75511",
    tel: "+918448375511",
    hours: "Open Daily · 9:00 AM Onwards",
    img: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_06-2.jpg",
    map: "https://maps.google.com/?q=Ambience+Mall+Vasant+Kunj",
  },
];

export default function Locations() {
  return (
    <section id="locations" data-testid="locations-section" className="section-pad bg-beige">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Find Your Garden</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.1] text-ink">
            Three Gardens, <span className="italic text-sage-dark">One Soul</span>
          </h2>
          <p className="mt-4 text-muted text-sm md:text-base">
            Each salon is hand-styled with vintage Limoges porcelain, French linens and locally sourced blooms.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCS.map((l, i) => (
            <motion.article
              key={l.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              data-testid={`location-card-${l.name.toLowerCase().replace(/\s/g, "-")}`}
              className="group bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={l.img} alt={l.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-7">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold">{l.city}</p>
                <h3 className="font-serif text-2xl mt-2 text-ink">{l.name}</h3>

                <div className="mt-4 space-y-2.5 text-sm text-muted">
                  <div className="flex gap-2.5">
                    <MapPin size={15} className="mt-0.5 text-sage flex-shrink-0" />
                    <span className="leading-relaxed">{l.address}</span>
                  </div>
                  <div className="flex gap-2.5">
                    <Clock size={15} className="mt-0.5 text-sage flex-shrink-0" />
                    <span>{l.hours}</span>
                  </div>
                  <a href={`tel:${l.tel}`} className="flex gap-2.5 hover:text-gold transition-colors" data-testid={`phone-loc-${l.name.toLowerCase().replace(/\s/g, "-")}`}>
                    <Phone size={15} className="mt-0.5 text-sage flex-shrink-0" />
                    <span className="font-medium text-ink hover:text-gold">{l.phone}</span>
                  </a>
                </div>

                <a
                  href={l.map}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`directions-${l.name.toLowerCase().replace(/\s/g, "-")}`}
                  className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-ink hover:text-gold transition-colors group/btn"
                >
                  Get Directions
                  <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
