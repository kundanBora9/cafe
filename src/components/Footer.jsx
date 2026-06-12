import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <footer data-testid="site-footer" className="bg-ink text-cream pt-20 pb-8">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-3xl tracking-[0.2em]">
              CAFÉ <span className="text-gold">DE</span> FLORA
            </h3>
            <p className="text-[10px] tracking-[0.5em] uppercase text-cream/60 mt-2">
              Parisian Garden Café
            </p>
            <p className="mt-6 text-sm leading-relaxed text-cream/70 max-w-sm">
              An enchanting Parisian garden experience where flavours bloom alongside flowers — every plate composed like a posy and served with stories from Café De Flora.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  data-testid={`social-${i}`}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ink transition-colors"
                  aria-label="social"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Explore</p>
            <ul className="space-y-3 text-sm text-cream/80">
              {["Home", "Our Story", "Menu", "Gallery", "Locations"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/\s/g, "")}`} className="hover:text-rose transition-colors" data-testid={`footer-link-${l.toLowerCase().replace(/\s/g, "-")}`}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Visit</p>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-center gap-2"><Mail size={14} className="text-rose" /> hello@cafedeflora.com</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-rose" /> +91 88829 27513</li>
              <li className="text-cream/60 leading-relaxed">Chanakyapuri · Gurugram · Ambience Mall</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Sweet Letters</p>
            <p className="text-sm text-cream/70 mb-4">Monthly stories, seasonal menus, and floral musings.</p>
            <form onSubmit={subscribe} className="flex gap-2" data-testid="newsletter-form">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                data-testid="newsletter-email"
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-cream/30 rounded-full px-4 py-2.5 text-sm placeholder:text-cream/50 focus:outline-none focus:border-gold"
              />
              <button data-testid="newsletter-submit" type="submit" className="bg-gold hover:bg-gold-dark text-ink rounded-full px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors">
                Join
              </button>
            </form>
            {done && <p className="mt-3 text-xs text-rose" data-testid="newsletter-success">Merci! You&apos;re on the list ✿</p>}
          </div>
        </div>

        <div className="border-leaf my-12 opacity-30" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Café De Flora. Crafted with petals & love in Paris and Delhi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-rose">Privacy</a>
            <a href="#" className="hover:text-rose">Terms</a>
            <a href="#" className="hover:text-rose">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
