/**
 * BUCIN — Cinematic Love Experience
 * Core Configuration System
 */

const CONFIG = {
  version: '2.0.0',
  debug: false,

  // ─── TIMING ───────────────────────────────────────────────────────
  timing: {
    preloaderMin: 2800,
    fadeIn: 1200,
    sectionTransition: 800,
    hoverDelay: 60,
    scrollThrottle: 16,
  },

  // ─── EASING ───────────────────────────────────────────────────────
  easing: {
    cinematic:   'power4.inOut',
    soft:        'power2.out',
    elastic:     'elastic.out(1, 0.4)',
    bounce:      'back.out(1.7)',
    silk:        'expo.out',
    brutal:      'power4.out',
    romantic:    'sine.inOut',
  },

  // ─── PARTICLES ────────────────────────────────────────────────────
  particles: {
    desktop: { count: 180, speed: 0.28, size: [0.8, 2.4] },
    tablet:  { count: 90,  speed: 0.22, size: [0.6, 1.8] },
    mobile:  { count: 45,  speed: 0.16, size: [0.5, 1.4] },
  },

  // ─── THREE.JS ─────────────────────────────────────────────────────
  three: {
    fov: 75,
    near: 0.1,
    far: 1000,
    cameraZ: 5,
    orbs: {
      desktop: 12,
      mobile: 6,
    },
    mouseInfluence: 0.035,
    scrollInfluence: 0.001,
  },

  // ─── BREAKPOINTS ──────────────────────────────────────────────────
  breakpoints: {
    mobile: 640,
    tablet: 1024,
    desktop: 1440,
  },

  // ─── PERFORMANCE ──────────────────────────────────────────────────
  performance: {
    fpsTarget: 60,
    fpsLow: 30,
    adaptiveQuality: true,
    maxDegradationLevel: 3,
  },

  // ─── QUOTES ───────────────────────────────────────────────────────
  loadingQuotes: [
    "Wishing you the sweetest seventeen...",
    "Seventeen and sparkling...",
    "May all your dreams come true...",
    "A new beautiful chapter begins today.",
    "Happy sweet seventeen adikk amangg🤍",
  ],

  // ─── LOVE STORY DATA ──────────────────────────────────────────────
  timeline: [
    {
      date: "Chapter 1",
      title: "Sweet Seventeen",
      quote: "Happy sweet seventeen too adikk amangg, semogaa apaa yang di citaa citakann tercapaiii.",
      icon: "✦",
    },
    {
      date: "Chapter 2",
      title: "Beautiful Journey",
      quote: "Semoga hubungann kitaa lamaa yahh, you are favorite universe🤍",
      icon: "◈",
    },
    {
      date: "Chapter 3",
      title: "Shining Bright",
      quote: "May this year bring you endless happiness, beautiful surprises, and the courage to chase your dreams.",
      icon: "◉",
    },
    {
      date: "Chapter 4",
      title: "Always Here",
      quote: "Always remember that no matter where life takes you, I will always be right here, cheering you on.",
      icon: "✧",
    },
    {
      date: "Chapter 5",
      title: "Forever Favorite",
      quote: "Thank you for being you. Enjoy your special day to the fullest! You are, and always will be, my favorite universe.",
      icon: "♡",
    },
  ],

  // ─── GALLERY CAPTIONS ─────────────────────────────────────────────
  //
  // CARA TAMBAH FOTO:
  //   1. Taruh file foto di folder:  assets/images/
  //   2. Isi field "img" dengan path-nya, contoh:
  //        img: 'assets/images/foto1.jpg'
  //   3. Kalau "img" dikosongkan (''), kartu tampil sebagai gradient placeholder
  //
  // Rasio foto ideal: 3:4 (portrait) — misal 600x800px atau 900x1200px
  //
  gallery: [
    { img: '', caption: "The way you look when you're not looking.", tag: "candid"   },
    { img: '', caption: "Late nights that turned into mornings.",     tag: "always"  },
    { img: '', caption: "Your laugh is genuinely a personality.",     tag: "chaos"   },
    { img: '', caption: "I memorized every version of you.",          tag: "favorite"},
    { img: '', caption: "Soft hours, golden light, you.",             tag: "ours"    },
    { img: '', caption: "The version of me that exists near you.",    tag: "best self"},
  ],
};

// Freeze to prevent accidental mutations
Object.freeze(CONFIG);
Object.freeze(CONFIG.timing);
Object.freeze(CONFIG.easing);
Object.freeze(CONFIG.particles);
Object.freeze(CONFIG.three);
Object.freeze(CONFIG.breakpoints);
Object.freeze(CONFIG.performance);

window.CONFIG = CONFIG;
