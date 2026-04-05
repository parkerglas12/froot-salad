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

import CountUp from "react-countup";

import { motion } from "framer-motion";

import { Zap, Copy, Flame, TrendingUp, ArrowBigUpDash } from "lucide-react";

import { url } from "../utils/Helpers.js";

import { bounceIn, bounceParent } from "../utils/Animations.js";

function WinGame({
  xp,
  level,
  xpGain,
  streak,
  levelUp,
  shareGrid,
  roundGuesses,
  isLevelingUp,
  copyToClipboard,
  dateInformation,
  dailyStreakIncreasing,
}) {
  const fullMsg = `${shareGrid}Think you can solve it?\n`;

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
              duration={1}
              prefix="+"
            />
            <Zap color={"#a78bfa"} size={18} />
          </motion.div>
          <motion.div className="modal-flex" variants={bounceIn}>
            <h3 className="text-lg">{streak}</h3>
            <TrendingUp color={"#34d399"} size={22} className="m5" />
          </motion.div>
          <motion.div className="modal-flex" variants={bounceIn}>
            <h3 className="text-lg">{roundGuesses} tries</h3>
          </motion.div>
        </motion.div>
        <div className="win-game-container flex-center m4">
          {isLevelingUp ? (
            <div className="flex-center">
              <div className="flex-center" style={{ gap: "0.15rem" }}>
                <ArrowBigUpDash color={"#1a1a1a"} size={22} />
                <h3 className="text-med">Level {level}!</h3>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-center flex-column">
                <h3 className="text-lg">Level {level}</h3>
                {level === 1 ? (
                  <ProgressBar start={0} end={250} current={xp} />
                ) : (
                  <ProgressBar start={levelUp / 2} end={levelUp} current={xp} />
                )}
              </div>
            </>
          )}
          {dailyStreakIncreasing && (
            <>
              <div className="flex-center flex-column">
                <div className="flex-center" style={{ gap: "0.15rem" }}>
                  <Flame className="glow-icon" color={"#fb923c"} size={26} />
                  <p className="text-lg">{dateInformation.streak}</p>
                </div>
                <p className="text-sm" style={{ textAlign: "center" }}>day streak</p>
              </div>
            </>
          )}
        </div>
        {dailyStreakIncreasing && (
          <h3 className="win-text text-sm">
            The flame's back! Don't miss tomorrow!
          </h3>
        )}
        <div className="social-media m2">
          <Copy
            onClick={copyToClipboard}
            className="copy-icon"
            size={22}
            color={"#1a1a1a"}
          />
          <TwitterShareButton url={url} title={fullMsg}>
            <XIcon size={22} round />
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={fullMsg}>
            <FacebookIcon size={22} round />
          </FacebookShareButton>
          <TelegramShareButton url={url} title={fullMsg}>
            <TelegramIcon size={22} round />
          </TelegramShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={22} round />
          </LinkedinShareButton>
        </div>
      </div>
    </>
  );
}

export default WinGame;
