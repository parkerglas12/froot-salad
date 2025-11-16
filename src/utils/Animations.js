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

export const frootParent = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const frootChild = {
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
