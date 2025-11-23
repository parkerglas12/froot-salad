import { motion } from "framer-motion";

import { ChevronsLeft, ChevronsRight } from "lucide-react";

import { rows, cols } from "../utils/Helpers.js";

function Grid({ gridArray, fullResults, currentRound }) {
  function displayHelper(type) {
    if (type === "left") {
      return (
        <motion.div
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 0.5 }}
        >
          <ChevronsLeft className="icon" size={18} />
        </motion.div>
      );
    } else if (type === "right") {
      return (
        <motion.div
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 0.5 }}
        >
          <ChevronsRight className="icon" size={18} />
        </motion.div>
      );
    }
  }

  return (
    <motion.section className="grid-container">
      {gridArray.map((froot, index) => (
        <div
          className={`grid-item flex-center ${
            index % cols === 0 && "border-left"
          } ${index >= rows * cols - cols && "border-bottom"} ${
            fullResults[index] === "correct"
              ? "green"
              : fullResults[index] === "absent"
              ? "red"
              : fullResults[index] === "left" || fullResults[index] === "right"
              ? "yellow"
              : ""
          }`}
          key={index}
        >
          {froot && (
            <motion.img
              animate={{
                scale: [1.25, 1],
              }}
              transition={{ duration: 0.5 }}
              src={`${froot}.webp`}
              alt={`${froot} displayed on the answer grid`}
            />
          )}
          {index < currentRound * cols - cols &&
            displayHelper(fullResults[index])}
        </div>
      ))}
    </motion.section>
  );
}

export default Grid;
