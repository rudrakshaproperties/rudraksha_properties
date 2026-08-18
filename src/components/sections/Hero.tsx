"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const PROJECTS_METADATA = [
  {
    id: 1,
    label: "Rudraksha City, Betma Bypass",
    area: "T&CP Approved | Indore, MP",
    shortLabel: "Rudraksha City",
  },
  {
    id: 2,
    label: "Sagore Kuti Plots, Pithampur",
    area: "Starting ₹6 Lakhs | Betma Road",
    shortLabel: "Sagore Kuti",
  },
  {
    id: 3,
    label: "Pithampur Residential Plots",
    area: "T&CP Approved | Legal & Verified",
    shortLabel: "Pithampur Plots",
  },
  {
    id: 4,
    label: "Premium Infrastructure & Construction",
    area: "Quality Turnkey Construction | MP",
    shortLabel: "Infrastructure",
  },
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Rotate project label highlights every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % PROJECTS_METADATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Sync Mute state when toggled
  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const safeIdx = currentIdx % PROJECTS_METADATA.length;
  const current = PROJECTS_METADATA[safeIdx] || PROJECTS_METADATA[0];

  return (
    <section className="relative min-h-[99vh] flex flex-col justify-end pb-7 md:pb-15 px-3 lg:px-6 overflow-hidden rounded-b-[1rem] lg:rounded-b-[2rem]">
      {/* Single Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          src="/VID-20260810-WA0004.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105 origin-center"
        />
        <div className="absolute inset-0 bg-black/25 z-10 transition-all duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-transparent z-10"></div>
      </div>

      {/* Sound Toggle Button */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
        className="absolute top-28 right-6 z-30 flex items-center gap-1.5 bg-black/30 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full transition-all duration-300 text-[10px] font-bold uppercase tracking-[0.15em] cursor-pointer group shadow-lg"
      >
        {isMuted ? (
          <>
            <VolumeX className="w-3.5 h-3.5 text-red-400 group-hover:scale-110 transition-transform" />
            <span>Sound Off</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse group-hover:scale-110 transition-transform" />
            <span>Sound On</span>
          </>
        )}
      </button>

      {/* Floating Side Indicators */}
      <div className="absolute top-1/2 right-3 lg:right-6 transform -translate-y-1/2 flex flex-col gap-6 items-end z-30 hidden sm:flex">
        {PROJECTS_METADATA.map((prop, i) => (
          <button
            key={prop.id}
            onClick={() => setCurrentIdx(i)}
            className="flex items-center gap-4 group"
          >
            <span className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${i === safeIdx ? "text-white" : "text-white/30"}`}>
              0{i + 1}
            </span>
            <div className={`h-[1px] transition-all duration-500 ${i === safeIdx ? "w-12 bg-white" : "w-4 bg-white/30 group-hover:w-8 group-hover:bg-white/60"}`} />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col justify-end h-full mt-auto">

        {/* Typography */}
        <div className="mb-20">

          <h1 className="sr-only">Rudraksha Properties & Construction | Premium Real Estate Indore</h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline text-7xl md:text-[100px] xl:text-[140px] font-light text-white tracking-tighter leading-none"
          >
            Invest In
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={safeIdx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 mt-6 md:mt-10 lg:mt-12 mb-2 pl-2"
            >
              <span className="text-[10px] md:text-xs text-white tracking-[0.3em] uppercase font-light">{current?.label}</span>
              <span className="text-[9px] md:text-[10px] text-white/50 tracking-[0.2em] uppercase font-light hidden md:block">— {current?.area}</span>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-headline text-7xl md:text-[100px] xl:text-[140px] font-light text-white tracking-tighter leading-none"
          >
            <span className="italic pr-4 text-white/90">Your Dream.</span>
          </motion.div>

        </div>

        {/* Horizontal Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pt-10 border-t border-white/30"
        >
          {/* Action Button & Icon */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="/contact" className="bg-white text-foreground px-10 py-4 rounded-full font-bold text-[13px] tracking-widest uppercase hover:scale-105 active:scale-95 transition-all duration-300">
              Book Site Visit
            </a>
            <a href="#services" className="bg-[#eeeae7] text-foreground w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
            </a>
          </div>

          {/* Description Text */}
          <div className="flex-1 w-full text-left lg:px-3 xl:px-5">
            <p className="text-white/80 text-sm md:text-[15px] font-light leading-relaxed max-w-2xl">
              Discover premium residential plots, commercial spaces & turnkey construction. <br className="hidden md:block" />
              T&CP approved properties across Indore, Pithampur & Madhya Pradesh.
            </p>
          </div>

          {/* Explore More link */}
          <div className="shrink-0 pt-4 lg:pt-0">
            <a href="#about" className="text-white text-sm font-medium tracking-wide relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white/50 hover:after:bg-white transition-all">
              Explore more
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
