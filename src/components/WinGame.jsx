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

import { Copy, Flame, MoveRight } from "lucide-react";

import { url } from "../utils/Helpers.js";

import { frootParent, frootChild } from "../utils/Animations.js";

function WinGame({
  level,
  xpGain,
  streak,
  solution,
  shareGrid,
  roundGuesses,
  isLevelingUp,
  copyToClipboard,
}) {
  const fullMsg = `I solved this cozy logic puzzle called Froot Salad in just ${roundGuesses} tries!\n${shareGrid}Use the clues, choose the correct froots, and see if you can make a perfect salad.\nPlay now:`;

  return (
    <>
      <h2 className="heading">Sweet! You Won!</h2>
      <p className="text-sm">
        You guessed the correct combination in {roundGuesses} tries and made a
        delicious froot salad. Well done!
      </p>
      <div className="flex-center flex-column">
        <div className="modal-apart">
          <h2 className="text-med">+{xpGain}XP</h2>
          {isLevelingUp ? (
            <div className="modal-flex">
              <h2 className="text-med">Level {level - 1}</h2> <MoveRight />
              <h2 className="text-med">Level {level}</h2>
            </div>
          ) : (
            <div className="modal-flex">
              <h2 className="text-med">+1</h2>
              <Flame color={"#ff8400"} />
              <MoveRight />
              <h2 className="text-med">{streak}</h2>
              <Flame color={"#ff8400"} />
            </div>
          )}
        </div>
      </div>
      <motion.div
        className="modal-froots"
        variants={frootParent}
        animate="visible"
      >
        {solution.map((froot) => (
          <motion.img
            src={`${froot}.webp`}
            alt={froot}
            key={froot}
            variants={frootChild}
          ></motion.img>
        ))}
      </motion.div>
      <p className="text-sm social-text bold">
        Copy your salad or share it straight to social media!
      </p>
      <div className="social-media">
        <Copy
          onClick={copyToClipboard}
          className="copy-icon"
          size={30}
          color={"#111"}
        />
        <TwitterShareButton url={url} title={fullMsg}>
          <XIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={fullMsg}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TelegramShareButton url={url} title={fullMsg}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </>
  );
}

export default WinGame;
