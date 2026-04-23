import { motion } from "framer-motion";

import { ArrowBigUpDash } from "lucide-react";

import { bounceIn, bounceParent } from "../utils/Animations.js";

function WinLevel({ level }) {
  return (
    <>
      <h2 className="heading">Level Up!</h2>
      <p className="win-text text-sm">You've reached a new level.</p>
      <motion.div
        className="win-celebrate flex-center flex-column"
        variants={bounceParent}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="win-highlight flex-center" variants={bounceIn}>
          <ArrowBigUpDash color={"#1a1a1a"} size={40} />
          <h3 className="text-xxl">Level {level}</h3>
        </motion.div>
      </motion.div>
    </>
  );
}

export default WinLevel;
