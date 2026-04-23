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

import { Zap, Copy } from "lucide-react";

import ProgressBar from "./ProgressBar.jsx";

import { url } from "../utils/Helpers.js";

import { bounceIn, bounceParent } from "../utils/Animations.js";

function WinXp({
  xp,
  level,
  xpGain,
  levelUp,
  shareGrid,
  roundGuesses,
  copyToClipboard,
}) {
  const fullMsg = `${shareGrid}Think you can solve it?\n`;
  const barStart = level === 1 ? 0 : levelUp / 2;
  const barEnd = level === 1 ? 250 : levelUp;

  return (
    <>
      <h2 className="heading">Sweet! You Won!</h2>
      <p className="win-text text-sm">
        Solved in {roundGuesses} {roundGuesses === 1 ? "try" : "tries"}
      </p>
      <motion.div
        className="win-celebrate flex-center flex-column"
        variants={bounceParent}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="win-highlight flex-center" variants={bounceIn}>
          <CountUp
            className="text-xxl"
            start={0}
            end={xpGain}
            duration={1.2}
            prefix="+"
          />
          <Zap color={"#a78bfa"} size={32} />
        </motion.div>
        <motion.div className="xp-progress" variants={bounceIn}>
          <ProgressBar start={barStart} end={barEnd} current={xp} />
        </motion.div>
      </motion.div>
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
    </>
  );
}

export default WinXp;
