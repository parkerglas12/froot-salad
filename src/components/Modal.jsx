import { motion } from "framer-motion";

import Intro from "./Intro.jsx";
import WinGame from "./WinGame.jsx";
import LoseGame from "./LoseGame.jsx";

import { dropIn } from "../utils/Animations.js";

function Modal({ modalType, solution, roundGuesses, handleModalClick }) {
  return (
    <div className="modal-container flex-center">
      <motion.div
        className="modal flex-center"
        exit="exit"
        initial="hidden"
        animate="visible"
        variants={dropIn}
      >
        {modalType === "win" ? (
          <WinGame solution={solution} roundGuesses={roundGuesses} />
        ) : modalType === "loss" ? (
          <LoseGame solution={solution} />
        ) : (
          <Intro />
        )}
        {modalType === "intro" ? (
          <button className="modal-btn text-med" onClick={handleModalClick}>
            Play Now
          </button>
        ) : (
          <button className="modal-btn text-med" onClick={handleModalClick}>
            Play Again
          </button>
        )}
      </motion.div>
    </div>
  );
}

export default Modal;
