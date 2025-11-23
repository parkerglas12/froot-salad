export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 400,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const slideIn = {
  hidden: {
    x: "-100vw",
    opacity: 0,
    rotate: -180,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 400,
    },
    rotate: 0,
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.4,
    },
    rotate: 180,
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const bounceIn = {
  hidden: {
    y: 60, // start above
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    y: [60, 0, 15, 0],
    scale: [0.8, 1, 0.95, 1],
    opacity: [0, 0.33, 0.66, 1],
    transition: {
      duration: 0.6,
      ease: "easeOut",
      times: [0, 0.5, 0.75, 1],
    },
  },
};

export const bounceParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 2,
      delayChildren: 0.5,
    },
  },
};

export const frootsAnimation = {
  visible: {
    scale: [1, 1.1, 1],
    rotate: [0, 8, -8, 0],
    y: [0, -3, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const frootParent = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
