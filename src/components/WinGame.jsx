import ProgressBar from "./ProgressBar.jsx";

import {
  TwitterShareButton,
  XIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

import { motion } from "framer-motion";

import CountUp from "react-countup";

import { Copy, Flame, Puzzle } from "lucide-react";

import { url } from "../utils/Helpers.js";

import {
  bounceIn,
  bounceParent,
  frootsAnimation,
  frootParent,
} from "../utils/Animations.js";

function WinGame({
  xp,
  level,
  xpGain,
  streak,
  levelUp,
  solution,
  shareGrid,
  roundGuesses,
  isLevelingUp,
  copyToClipboard,
  dateInformation,
  dailyStreakIncreasing,
}) {
  const fullMsg = `I solved this cozy logic puzzle called Froot Salad in just ${roundGuesses} tries!\n${shareGrid}Use the clues, choose the correct froots, and see if you can make a perfect salad.\nPlay now:`;

  return (
    <>
      <h2 className="heading">Sweet! You Won!</h2>
      <div className="flex-center flex-column no-gap">
        <motion.div
          className="modal-apart"
          variants={bounceParent}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={bounceIn}>
            <CountUp
              className="text-lg"
              start={0}
              end={xpGain}
              duration={2}
              prefix="+"
              suffix=" XP"
            />
          </motion.div>
          <motion.div className="modal-flex" variants={bounceIn}>
            <h3 className="text-lg">{streak}</h3>
            <Flame color={"#ff8400"} size={30} />
          </motion.div>
          <motion.div className="modal-flex" variants={bounceIn}>
            <h3 className="text-lg">{roundGuesses}</h3>
            <Puzzle color={"#4bb00f"} size={30} />
          </motion.div>
        </motion.div>

        <div className="flex-center flex-column m4">
          {isLevelingUp ? (
            <h3 className="text-med">Woohoo! You're now Level {level}!</h3>
          ) : (
            <>
              <h3 className="text-lg">Level {level}</h3>
              {level === 1 ? (
                <ProgressBar start={0} end={250} current={xp} />
              ) : (
                <ProgressBar start={levelUp / 2} end={levelUp} current={xp} />
              )}
            </>
          )}
          {dailyStreakIncreasing && (
            <h3 className="text-med m4">
              Your daily streak is now {dateInformation.streak} days!
            </h3>
          )}
        </div>
        <motion.div
          className="modal-froots m4"
          variants={frootParent}
          animate="visible"
        >
          {solution.map((froot) => (
            <motion.img
              src={`${froot}.webp`}
              alt={`${froot} in the solution`}
              key={froot}
              variants={frootsAnimation}
            ></motion.img>
          ))}
        </motion.div>
        <div className="social-media m2">
          <Copy
            onClick={copyToClipboard}
            className="copy-icon"
            size={30}
            color={"#111"}
          />
          <TwitterShareButton url={url} title={fullMsg}>
            <XIcon size={28} round />
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={fullMsg}>
            <FacebookIcon size={28} round />
          </FacebookShareButton>
          <TelegramShareButton url={url} title={fullMsg}>
            <TelegramIcon size={28} round />
          </TelegramShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={28} round />
          </LinkedinShareButton>
        </div>
      </div>
    </>
  );
}

export default WinGame;
