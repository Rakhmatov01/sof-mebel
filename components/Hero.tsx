"use client";
import { useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { animate, stagger } from "animejs";
import { ImageWithFallback } from "./ui/ImageWithFallBack";

// Words to animate individually in the headline
const LINE1 = ["Uyingizni", "qulay"];
const LINE2 = ["va", "nafis", "qiling"];

export function Hero() {
  useEffect(() => {
    // ── Badge elastic pop ──────────────────────────────────────────────────
    animate("#hero-badge", {
      scale: [0.55, 1],
      opacity: [0, 1],
      duration: 700,
      easing: "outElastic(1, 0.55)",
      delay: 100,
    });

    // ── Headline word-by-word stagger reveal ───────────────────────────────
    animate(".hero-word", {
      opacity: [0, 1],
      translateY: ["2.2rem", "0rem"],
      duration: 750,
      delay: stagger(110, { start: 280 }),
      easing: "outExpo",
    });

    // ── Description paragraph ─────────────────────────────────────────────
    animate("#hero-desc", {
      opacity: [0, 1],
      translateY: [22, 0],
      duration: 700,
      delay: 820,
      easing: "outQuart",
    });

    // ── CTA buttons staggered pop ──────────────────────────────────────────
    animate(".hero-btn", {
      opacity: [0, 1],
      translateY: [18, 0],
      scale: [0.93, 1],
      duration: 580,
      delay: stagger(140, { start: 1020 }),
      easing: "outBack",
    });

    // ── Stats count-up ─────────────────────────────────────────────────────
    const statData: { selector: string; end: number; fmt: (v: number) => string }[] = [
      { selector: "#stat-val-0", end: 500,  fmt: v => `${Math.floor(v)}+` },
      { selector: "#stat-val-1", end: 50,   fmt: v => `${Math.floor(v)}K+` },
      { selector: "#stat-val-2", end: 25,   fmt: v => `${Math.floor(v)}+` },
    ];
    statData.forEach(({ selector, end, fmt }, i) => {
      const el = document.querySelector(selector);
      if (!el) return;
      const obj = { v: 0 };
      animate(obj, {
        v: [0, end],
        duration: 1900,
        delay: 1300 + i * 160,
        easing: "outExpo",
        onUpdate: () => { el.textContent = fmt(obj.v); },
      });
    });

    // ── Primary image card entrance ────────────────────────────────────────
    animate("#hero-img-primary", {
      opacity: [0, 1],
      scale: [0.88, 1],
      translateX: [44, 0],
      duration: 900,
      delay: 320,
      easing: "outQuart",
    });

    // ── Secondary image card entrance ─────────────────────────────────────
    animate("#hero-img-secondary", {
      opacity: [0, 1],
      scale: [0.88, 1],
      translateX: [-28, 0],
      duration: 900,
      delay: 520,
      easing: "outQuart",
    });

    // ── Floating product card ─────────────────────────────────────────────
    animate("#hero-float-card", {
      opacity: [0, 1],
      translateY: [18, 0],
      scale: [0.86, 1],
      duration: 680,
      delay: 760,
      easing: "outBack",
    });

    // ── Scroll indicator fade-in ──────────────────────────────────────────
    animate("#hero-scroll-indicator", {
      opacity: [0, 1],
      translateY: [-8, 0],
      duration: 600,
      delay: 1700,
      easing: "outQuart",
    });
  }, []);

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-greenDeep'>
      {/* ── Background orbs – reduced blur size for GPU perf ──────────────── */}
      <div className='absolute inset-0 opacity-25 pointer-events-none'>
        <div
          className='absolute top-0 right-0 w-[560px] h-[560px] rounded-full blur-[70px] gpu'
          style={{ background: "radial-gradient(circle, #C6A969 0%, transparent 70%)" }}
        />
        <div
          className='absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full blur-[60px] gpu'
          style={{ background: "radial-gradient(circle, #C6A969 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Subtle grid overlay ──────────────────────────────────────────── */}
      <div
        className='absolute inset-0 opacity-[0.025] pointer-events-none'
        style={{
          backgroundImage: `linear-gradient(#C6A969 1px, transparent 1px),
                            linear-gradient(90deg, #C6A969 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 lg:pt-24 pb-16'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]'>

          {/* Left column */}
          <div className='space-y-8'>
            {/* Badge */}
            <div
              id='hero-badge'
              style={{ opacity: 0 }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-goldAccent/30 bg-goldAccent/10'
            >
              <Sparkles className='w-4 h-4 text-goldAccent' />
              <span className='text-sm tracking-widest text-goldAccent font-sans uppercase'>
                2026 Collection
              </span>
            </div>

            {/* Headline – word-by-word */}
            <div className='space-y-4 font-serif overflow-hidden'>
              <h1
                className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] text-white font-light'
                style={{ letterSpacing: "-0.025em" }}
              >
                {LINE1.map((word, i) => (
                  <span
                    key={i}
                    className='hero-word inline-block mr-[0.25em]'
                    style={{ opacity: 0 }}
                  >
                    {word}
                  </span>
                ))}
                <span className='block mt-2 text-goldAccent font-normal'>
                  {LINE2.map((word, i) => (
                    <span
                      key={i}
                      className='hero-word inline-block mr-[0.25em]'
                      style={{ opacity: 0 }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              id='hero-desc'
              style={{ opacity: 0 }}
              className='text-lg lg:text-xl max-w-xl leading-relaxed text-white/70 font-light tracking-wide'
            >
              Sof Mebel bilan zamonaviy va sifatli mebellar orqali uyingizga
              yangi hayot bag&apos;ishlang.
            </p>

            {/* CTA buttons */}
            <div className='flex flex-wrap gap-4 pt-4'>
              <button
                className='hero-btn group px-8 py-4 rounded-full flex items-center gap-3 bg-goldAccent text-greenDeep font-semibold tracking-wide transition-all duration-300 hover:shadow-gold hover:scale-[1.03] active:scale-[0.98]'
                style={{ opacity: 0 }}
              >
                <span>Kolleksiyalar bilan tanishish</span>
                <ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
              </button>

              <button
                className='hero-btn px-8 py-4 rounded-full border border-goldAccent/30 text-white font-normal tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-goldAccent/60 active:scale-[0.98]'
                style={{ opacity: 0 }}
              >
                Batafsil
              </button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-white/[0.07]'>
              <div>
                <div id='stat-val-0' className='text-2xl sm:text-3xl mb-1 text-goldAccent font-light tabular-nums'>
                  0+
                </div>
                <div className='text-xs sm:text-sm text-white/45 tracking-widest uppercase'>
                  Premium Dizaynlar
                </div>
              </div>
              <div>
                <div id='stat-val-1' className='text-2xl sm:text-3xl mb-1 text-goldAccent font-light tabular-nums'>
                  0K+
                </div>
                <div className='text-xs sm:text-sm text-white/45 tracking-widest uppercase'>
                  Mijozlar
                </div>
              </div>
              <div className='col-span-2 md:col-span-1 border-t border-white/[0.06] pt-4 md:border-0 md:pt-0'>
                <div id='stat-val-2' className='text-2xl sm:text-3xl mb-1 text-goldAccent font-light tabular-nums'>
                  0+
                </div>
                <div className='text-xs sm:text-sm text-white/45 tracking-widest uppercase'>
                  Yillik Tajriba
                </div>
              </div>
            </div>
          </div>

          {/* Right column – images */}
          <div className='relative h-[500px] sm:h-[600px] lg:h-[700px] mt-12 lg:mt-0'>
            {/* Primary image */}
            <div
              id='hero-img-primary'
              style={{ opacity: 0 }}
              className='absolute top-0 right-0 w-[85%] lg:w-[70%] h-[60%] lg:h-[65%] rounded-2xl lg:rounded-4xl overflow-hidden shadow-2xl border border-goldAccent/20 gpu'
            >
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1762803841422-5b8cf8767cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBmdXJuaXR1cmUlMjBzb2ZhfGVufDF8fHx8MTc3MTg0OTMxOXww&ixlib=rb-4.1.0&q=80&w=1080'
                alt='Luxury modern sofa'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
            </div>

            {/* Secondary image */}
            <div
              id='hero-img-secondary'
              style={{ opacity: 0 }}
              className='absolute bottom-0 left-0 w-[60%] lg:w-[55%] h-[45%] lg:h-[50%] rounded-2xl lg:rounded-4xl overflow-hidden shadow-2xl border border-goldAccent/20 z-10 gpu'
            >
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1760611656233-915efdf138b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwY2hhaXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE4NDkzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
                alt='Minimalist luxury chair'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
            </div>

            {/* Floating product card */}
            <div
              id='hero-float-card'
              style={{ opacity: 0 }}
              className='absolute top-1/2 left-[10%] lg:left-1/4 -translate-y-1/2 px-4 py-3 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl backdrop-blur-xl shadow-2xl bg-greenDeep/80 border border-goldAccent/30 z-20 animate-float'
            >
              <div className='text-[10px] lg:text-xs mb-0.5 lg:mb-1 text-white/55 tracking-widest uppercase'>
                Yangilik
              </div>
              <div className='text-base lg:text-xl mb-0.5 lg:mb-1 text-goldAccent font-medium'>
                Zenith Kolleksiyasi
              </div>
              <div className='text-[10px] lg:text-sm text-white/80 font-light'>
                $2,499 dan boshlab
              </div>
            </div>

            {/* Decorative spinning rings – pure CSS, compositor thread */}
            <div className='absolute -top-4 -right-2 lg:-right-4 w-16 lg:w-24 h-16 lg:h-24 rounded-full opacity-20 border-2 border-goldAccent animate-spin-slow' />
            <div className='absolute -bottom-4 lg:-bottom-8 -left-4 lg:-left-8 w-24 lg:w-32 h-24 lg:h-32 rounded-full opacity-10 border-2 border-goldAccent animate-spin-slow-reverse' />
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <div
        id='hero-scroll-indicator'
        style={{ opacity: 0 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
      >
        <span className='text-[10px] tracking-widest uppercase text-goldAccent/50'>
          Pastga
        </span>
        <div className='w-[1px] h-12 bg-goldAccent/40 animate-bounce-y' />
      </div>
    </div>
  );
}

