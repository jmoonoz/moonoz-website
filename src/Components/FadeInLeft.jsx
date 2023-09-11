import React from "react";
import { motion, motionValue } from "framer-motion";

// Sec = seconds

function FadeInLeft({ seconds }) {
//   const sec = motionValue(seconds);
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: { seconds } }}
    >
      FadeInLeft
    </motion.div>
  );
}

export default FadeInLeft;
