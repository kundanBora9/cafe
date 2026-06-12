import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, MessageCircle } from "lucide-react";

const TIMES = ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "20:30", "22:00"];

export default function Reservation() {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");

  const message = encodeURIComponent(
    `Bonjour Café De Flora! I'd like to reserve a table.\n\nName: ${name || "—"}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`
  );
  // Real WhatsApp number — Chanakyapuri outlet
  const whatsappUrl = `https://wa.me/918882927513?text=${message}`;

  return (
    <section id="reserve" data-testid="reservation-section" className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cafedeflora.com/wp-content/uploads/2025/09/GO9_03-1.jpg"
          alt="floral background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose/70 via-cream/70 to-sage/40 backdrop-blur-sm" />
      </div>

      <div className="container-luxe relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="eyebrow">Réservation</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.1] text-ink">
              Save Your Seat in the <span className="italic text-sage-dark">Garden</span>
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Whether it&apos;s a stolen Tuesday lunch, a candlelit anniversary, or
              an unhurried Sunday brunch &mdash; we&apos;d be honoured to host you.
              Reservations are confirmed within minutes on WhatsApp.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Walk-ins welcome, but reservations are recommended.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Parties of 8+ should call ahead 24 hours.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Floral cake commissions available.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-[2rem] p-8 md:p-10" data-testid="reservation-form">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-ink mb-2">Full Name</label>
                  <input
                    type="text"
                    data-testid="reserve-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Camille Laurent"
                    className="w-full bg-white/70 border border-white/80 rounded-full px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold/60 placeholder:text-muted/60"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-ink mb-2">Guests</label>
                  <div className="relative">
                    <Users size={15} className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" />
                    <select
                      data-testid="reserve-guests"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-white/70 border border-white/80 rounded-full pl-11 pr-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold/60 appearance-none"
                    >
                      {[1,2,3,4,5,6,7,8].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                      ))}
                      <option value={9}>9+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-ink mb-2">Date</label>
                  <div className="relative">
                    <Calendar size={15} className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                      type="date"
                      data-testid="reserve-date"
                      value={date}
                      min={today}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white/70 border border-white/80 rounded-full pl-11 pr-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-ink mb-2">Time</label>
                  <div className="relative">
                    <Clock size={15} className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" />
                    <select
                      data-testid="reserve-time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-white/70 border border-white/80 rounded-full pl-11 pr-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold/60 appearance-none"
                    >
                      {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="reserve-whatsapp"
                className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-sage hover:bg-sage-dark text-white rounded-full px-8 py-4 text-xs md:text-sm tracking-[0.25em] uppercase font-medium transition-all shadow-md hover:shadow-xl"
              >
                <MessageCircle size={16} />
                Reserve Instantly via WhatsApp
              </a>

              <p className="mt-4 text-[11px] tracking-[0.15em] uppercase text-muted text-center">
                Confirmation in under 5 minutes · No deposit required
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
