export const modalDisplay = {
  hidden: {
    y: 24,
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 28,
      stiffness: 320,
      mass: 0.8,
    },
  },
  exit: {
    y: 12,
    opacity: 0,
    scale: 0.97,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const slideIn = {
  hidden: {
    y: -40,
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 22,
      stiffness: 280,
      mass: 0.7,
    },
  },
  exit: {
    y: 30,
    opacity: 0,
    scale: 0.92,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const bounceIn = {
  hidden: {
    y: 18,
    scale: 0.85,
    opacity: 0,
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 350,
      mass: 0.6,
    },
  },
};

export const bounceParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const overlayFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: [0, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: [0.4, 0, 1, 1] },
  },
};

export const gridItemPop = {
  initial: { scale: 1.15, opacity: 0.6 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 400,
      mass: 0.5,
    },
  },
};

export const chevronFade = {
  initial: { opacity: 0, x: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0, 0, 0.2, 1],
    },
  },
};
