import { motion } from "framer-motion";

import Intro from "./Intro.jsx";
import WinGame from "./WinGame.jsx";
import Welcome from "./Welcome.jsx";
import LoseGame from "./LoseGame.jsx";

import { dropIn } from "../utils/Animations.js";

function Modal({
  level,
  xpGain,
  streak,
  shareGrid,
  modalType,
  solution,
  roundGuesses,
  isLevelingUp,
  dateInformation,
  copyToClipboard,
  handleModalClick,
}) {
  const modals = {
    win: (
      <WinGame
        level={level}
        xpGain={xpGain}
        streak={streak}
        solution={solution}
        shareGrid={shareGrid}
        isLevelingUp={isLevelingUp}
        roundGuesses={roundGuesses}
        copyToClipboard={copyToClipboard}
      />
    ),
    loss: <LoseGame solution={solution} />,
    intro: <Intro />,
    welcome: <Welcome dateInformation={dateInformation} />,
  };
  return (
    <div className="modal-container flex-center">
      <motion.div
        className={`modal flex-center ${modalType === "intro" && "intro"}`}
        exit="exit"
        initial="hidden"
        animate="visible"
        variants={dropIn}
      >
        {modals[modalType]}
        {modalType === "intro" || modalType === "welcome" ? (
          <button className="modal-btn btn text-med" onClick={handleModalClick}>
            Play Now!
          </button>
        ) : (
          <button className="modal-btn btn text-med" onClick={handleModalClick}>
            Play Again!
          </button>
        )}
      </motion.div>
    </div>
  );
}

export default Modal;
