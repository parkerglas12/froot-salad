import { motion } from "framer-motion";

import { slideIn, overlayFade } from "../utils/Animations.js";

import { getRandomWord } from "../utils/Helpers.js";

import { ArrowBigUpDash } from "lucide-react";

function MiniModal({ level, xpGain, isLevelingUp }) {
  return (
    <motion.div
      className="modal-container no-shadow flex-center"
      variants={overlayFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="modal mini-modal no-gap flex-center"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={slideIn}
      >
        <h2 className="text-lg">{getRandomWord()}</h2>
        <h3 className="text-med" style={{ color: "#6b7280" }}>+{xpGain.toLocaleString("en-us")} XP</h3>
        {isLevelingUp && (
          <div className="mini-level-up">
            <ArrowBigUpDash color={"#1a1a1a"} size={22} />
            <h3 className="text-med">Level {level}!</h3>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default MiniModal;
