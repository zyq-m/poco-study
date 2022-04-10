export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const popUp = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 250,
      damping: 22,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};

export const fadeUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
      stiffness: 250,
      damping: 22,
    },
  },
};

export const fadeOut = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const slideUp = {
  initial: {
    y: "100vh",
    opacity: 0,
  },
  animate: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 50,
      stiffness: 800,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
