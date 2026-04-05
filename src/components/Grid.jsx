import { motion } from "framer-motion";

import { ChevronsLeft, ChevronsRight } from "lucide-react";

import { rows, cols } from "../utils/Helpers.js";

import { gridItemPop, chevronFade } from "../utils/Animations.js";

function Grid({ gridArray, fullResults, currentRound }) {
  function displayHelper(type) {
    if (type === "left") {
      return (
        <motion.div {...chevronFade}>
          <ChevronsLeft className="icon" size={14} />
        </motion.div>
      );
    } else if (type === "right") {
      return (
        <motion.div {...chevronFade}>
          <ChevronsRight className="icon" size={14} />
        </motion.div>
      );
    }
  }

  return (
    <motion.section className="grid-container">
      {gridArray.map((froot, index) => (
        <div
          className={`grid-item flex-center ${
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
              {...gridItemPop}
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
