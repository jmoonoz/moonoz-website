import { motion } from "framer-motion";

const transition = (Comp) => {
  return () => (
    <>
      <Comp />
      <motion.div
        className="slide-In"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        Transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-Out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};
export default transition;