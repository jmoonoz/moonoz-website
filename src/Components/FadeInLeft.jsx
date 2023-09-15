import React from "react";
import { motion, motionValue } from "framer-motion";

// Sec = seconds

function FadeInLeft({ seconds, children }) {
  // const seconds = motionValue(sec);

  return (
    <motion.div
      initial={{ x: "-200%", opacity: 0 }}
      animate={{ x: 0, opacity: seconds }}
      exit={{ x: "200%", opacity: 0 }}
      transition={{ duration: seconds }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInLeft;
