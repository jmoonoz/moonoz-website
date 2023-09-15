import React from "react";
import { motion } from "framer-motion";

function SlideIn({children }) {

  return (
    <motion.div
      initial={{ x: "300%" }}
      animate={{ x: 0 }}
      exit={{ x: "300" }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default SlideIn;
