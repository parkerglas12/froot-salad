import { motion } from "framer-motion";

import { slideIn } from "../utils/Animations.js";

import { getRandomWord } from "../utils/Helpers.js";

function MiniModal({ xpGain }) {
  return (
    <div className="modal-container no-shadow flex-center">
      <motion.div
        className="modal mini-modal flex-center"
        exit="exit"
        initial="hidden"
        animate="visible"
        variants={slideIn}
      >
        <h2 className="text-lg">{getRandomWord()}</h2>
        <h2 className="text-med">+{xpGain.toLocaleString("en-us")} XP</h2>
      </motion.div>
    </div>
  );
}

export default MiniModal;
