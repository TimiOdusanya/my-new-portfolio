export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeOutQuart = [0.25, 1, 0.5, 1] as const;
export const easeInOutCubic = [0.65, 0, 0.35, 1] as const;

export const duration = {
  reveal: 1.15,
  image: 1.4,
  ui: 0.4,
  page: 0.85,
  stamp: 0.7,
} as const;

export const revealUp = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: duration.reveal, ease: easeOutExpo },
  },
};

export const clipUp = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: duration.image, ease: easeOutExpo },
  },
};

export const imageZoom = {
  hidden: { scale: 1.12 },
  visible: {
    scale: 1,
    transition: { duration: 1.8, ease: easeOutQuart },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeOutQuart },
  },
};

export const stagger = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

export const lineDraw = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};
