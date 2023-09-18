export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    stagger: 1,
    transition: {
      delayChildren: 3,
      staggerChildren: 2,
    },
  },
  time: { duration: 3, ease: "easeOut" },
};

export const slideInLeft = {
  hidden: { x: "-120%", filter: "blur(5px)" },
  show: {
    x: 0,
    filter: "blur(0px)",
    ease: "easeInOut",
    transition: { duration: 1 },
  },
  // time: { duration: 2, ease: "easeInOut" },
};
export const slideInRight = {
  hidden: { x: "300%", filter: "blur(5px)" },
  show: {
    x: 0,
    filter: "blur(0px)",
    ease: "easeIn",
    transition: { duration: 1 },
  },

  // time: { duration: 2, ease: "easeInOut" },
};
export const slideUp = {
  hidden: { y: "100%", filter: "blur(5px)" },
  show: {
    y: 0,
    filter: "blur(0px)",
    ease: "easeIn",
    transition: { duration: 0.9 },
  },
};

export const slideDown = {};
