import CountUp from "react-countup";

import { motion } from "framer-motion";

import { Flame } from "lucide-react";

import { bounceIn, bounceParent } from "../utils/Animations.js";

function WinStreak({ dateInformation }) {
  const streak = dateInformation.streak;
  const prevStreak = Math.max(streak - 1, 0);

  return (
    <>
      <h2 className="heading">Streak Extended!</h2>
      <p className="win-text text-sm">
        {streak === 1
          ? "You started a new streak!"
          : `You're on a ${streak}-day roll.`}
      </p>
      <motion.div
        className="win-celebrate flex-center flex-column"
        variants={bounceParent}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="win-highlight flex-center" variants={bounceIn}>
          <Flame className="glow-icon" color={"#fb923c"} size={44} />
          <CountUp
            className="text-xxl"
            start={prevStreak}
            end={streak}
            duration={1.2}
          />
        </motion.div>
      </motion.div>
      <p className="win-text text-sm">You're on a roll! Don't miss tomorrow!</p>
    </>
  );
}

export default WinStreak;
