export const modalDisplay = {
  hidden: {
    y: "10vh",
    opacity: 0.5,
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
    opacity: 0,
    transition: {
      duration: 0.25,
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

export const bounceIn = {
  hidden: {
    y: 30,
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    y: [30, 0, 0],
    scale: [1, 1.25, 1],
    opacity: [0, 0.5, 1],
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export const bounceParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
      delayChildren: 0.25,
    },
  },
};
