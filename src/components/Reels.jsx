import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Volume2, VolumeX, Play, Instagram } from "lucide-react";

const REELS = [
  {
    src: "https://cafedeflora.com/wp-content/uploads/2025/09/Reel-2-cfd-1.mp4",
    poster: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_02-1.jpg",
    title: "Morning Brew",
  },
  {
    src: "https://cafedeflora.com/wp-content/uploads/2025/09/Reel-6-1.mp4",
    poster: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_06-2.jpg",
    title: "Petals & Plates",
  },
  {
    src: "https://cafedeflora.com/wp-content/uploads/2025/09/Reel-stop-mt-1.mp4",
    poster: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_07-2.jpg",
    title: "Garden Tales",
  },
  {
    src: "https://cafedeflora.com/wp-content/uploads/2025/09/Stop-mt-cdf-1.mp4",
    poster: "https://cafedeflora.com/wp-content/uploads/2025/09/GO9_09-2.jpg",
    title: "À la Carte",
  },
];

function ReelCard({ reel, index }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      data-testid={`reel-${index}`}
      onClick={togglePlay}
      className="group relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer border border-border bg-ink"
    >
      <video
        ref={videoRef}
        src={reel.src}
        poster={reel.poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

      {/* Top label */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full border border-white/30">
          <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" /> Live
        </span>
        <button
          onClick={toggleMute}
          data-testid={`reel-mute-${index}`}
          aria-label={muted ? "Unmute" : "Mute"}
          className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </div>

      {/* Bottom title */}
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-[10px] tracking-[0.3em] uppercase text-rose">Reel · {String(index + 1).padStart(2, "0")}</p>
        <h3 className="font-serif text-xl md:text-2xl text-white mt-1 leading-tight">{reel.title}</h3>
      </div>

      {/* Pause overlay */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
            <Play size={22} className="text-ink ml-1" fill="currentColor" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Reels() {
  return (
    <section data-testid="reels-section" className="section-pad bg-cream relative overflow-hidden">
      {/* Decorative floral */}
      <svg className="absolute top-20 right-8 w-40 opacity-30" viewBox="0 0 100 100" fill="none">
        <circle cx="80" cy="20" r="4" fill="#F4D6D6" />
        <circle cx="60" cy="40" r="3" fill="#D4AF37" />
        <path d="M30,80 Q50,40 80,20" stroke="#A8BBA3" strokeWidth="1" />
      </svg>

      <div className="container-luxe relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow">In Motion</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.1] text-ink">
              Petals, Plates &amp; <span className="italic text-sage-dark">Poetry</span>
            </h2>
            <p className="mt-4 text-muted text-sm md:text-base">
              A four-second love letter to mornings in our garden. Tap any reel to pause.
            </p>
          </div>
          <a
            href="https://instagram.com/cafedeflora"
            target="_blank"
            rel="noreferrer"
            data-testid="reels-instagram-cta"
            className="btn-outline-gold w-fit"
          >
            <Instagram size={14} /> Watch on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {REELS.map((r, i) => (
            <ReelCard key={r.src} reel={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
