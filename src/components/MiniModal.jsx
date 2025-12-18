import { motion } from "framer-motion";

import { slideIn } from "../utils/Animations.js";

import { getRandomWord } from "../utils/Helpers.js";

import { ArrowBigUpDash } from "lucide-react";

function MiniModal({ level, xpGain, isLevelingUp }) {
  return (
    <div className="modal-container no-shadow flex-center">
      <motion.div
        className="modal mini-modal no-gap flex-center"
        exit="exit"
        initial="hidden"
        animate="visible"
        variants={slideIn}
      >
        <h2 className="text-lg">{getRandomWord()}</h2>
        <h3 className="text-med">+{xpGain.toLocaleString("en-us")} XP</h3>
        {isLevelingUp && (
          <div className="mini-level-up">
            <ArrowBigUpDash color={"#111"} size={30} />
            <h3 className="text-med">Level {level}!</h3>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default MiniModal;
