import { motion } from "framer-motion";

import Intro from "./Intro.jsx";
import WinXp from "./WinXp.jsx";
import WinLevel from "./WinLevel.jsx";
import WinStreak from "./WinStreak.jsx";
import Welcome from "./Welcome.jsx";
import LoseGame from "./LoseGame.jsx";

import { modalDisplay, overlayFade } from "../utils/Animations.js";

function Modal({
  xp,
  level,
  xpGain,
  levelUp,
  shareGrid,
  modalType,
  solution,
  roundGuesses,
  isLevelingUp,
  lastSevenDays,
  dateInformation,
  copyToClipboard,
  handleModalClick,
  dailyStreakIncreasing,
}) {
  const modals = {
    "win-xp": (
      <WinXp
        xp={xp}
        level={level}
        xpGain={xpGain}
        levelUp={levelUp}
        shareGrid={shareGrid}
        roundGuesses={roundGuesses}
        copyToClipboard={copyToClipboard}
      />
    ),
    "win-streak": <WinStreak dateInformation={dateInformation} />,
    "win-level": <WinLevel level={level} />,
    loss: <LoseGame solution={solution} />,
    intro: <Intro />,
    welcome: (
      <Welcome
        xp={xp}
        dateInformation={dateInformation}
        lastSevenDays={lastSevenDays}
      />
    ),
  };

  const hasNextStep =
    (modalType === "win-xp" && (dailyStreakIncreasing || isLevelingUp)) ||
    (modalType === "win-streak" && isLevelingUp);

  let buttonLabel;
  if (modalType === "intro" || modalType === "welcome") {
    buttonLabel = "Play Now!";
  } else if (hasNextStep) {
    buttonLabel = "Continue";
  } else {
    buttonLabel = "Play Again!";
  }

  return (
    <motion.div
      className="modal-container flex-center"
      variants={overlayFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className={`modal flex-center ${modalType === "intro" ? "intro" : ""}`}
        initial="hidden"
        animate="visible"
        variants={modalDisplay}
      >
        {modals[modalType]}
        <button className="modal-btn btn text-med" onClick={handleModalClick}>
          {buttonLabel}
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
