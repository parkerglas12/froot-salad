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
            <Zap color={"#B083FF"} size={25} />
          </motion.div>
          <motion.div className="modal-flex" variants={bounceIn}>
            <h3 className="text-lg">{streak}</h3>
            <TrendingUp color={"#4bb00f"} size={35} className="m5" />
          </motion.div>
          <motion.div className="modal-flex" variants={bounceIn}>
            <h3 className="text-lg">{roundGuesses} tries</h3>
          </motion.div>
        </motion.div>
        <div className="win-game-container flex-center m4">
          {isLevelingUp ? (
            <div className="flex-center">
              <div className="flex-center">
                <ArrowBigUpDash color={"#111"} size={30} />
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
                <div className="flex-center">
                  <Flame className="glow-icon" color={"#ff8400"} size={40} />
                  <p className="text-lg">{dateInformation.streak}</p>
                </div>
                <p className="text-sm">day streak</p>
              </div>
            </>
          )}
        </div>
        {dailyStreakIncreasing && (
          <h3 className="win-text text-sm">
            The flame's back! Don’t miss tomorrow!
          </h3>
        )}
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
