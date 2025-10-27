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

export const frootParent = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const frootChild = {
  hidden: { scale: 0.75 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
