import { motion } from "framer-motion";

import Intro from "./Intro.jsx";
import WinGame from "./WinGame.jsx";
import LoseGame from "./LoseGame.jsx";

import { dropIn } from "../utils/Animations.js";

function Modal({
  level,
  xpGain,
  streak,
  modalType,
  solution,
  roundGuesses,
  isLevelingUp,
  handleModalClick,
}) {
  return (
    <div className="modal-container flex-center">
      <motion.div
        className={`modal flex-center ${modalType === "intro" && "intro"}`}
        exit="exit"
        initial="hidden"
        animate="visible"
        variants={dropIn}
      >
        {modalType === "win" ? (
          <WinGame
            level={level}
            xpGain={xpGain}
            streak={streak}
            solution={solution}
            isLevelingUp={isLevelingUp}
            roundGuesses={roundGuesses}
          />
        ) : modalType === "loss" ? (
          <LoseGame solution={solution} />
        ) : (
          <Intro />
        )}
        {modalType === "intro" ? (
          <button className="modal-btn text-med" onClick={handleModalClick}>
            Play Now!
          </button>
        ) : (
          <button className="modal-btn text-med" onClick={handleModalClick}>
            Play Again!
          </button>
        )}
      </motion.div>
    </div>
  );
}

export default Modal;
