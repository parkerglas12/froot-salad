import {
  TwitterShareButton,
  XIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import { url, startingMsg } from "../utils/Helpers.js";

import { Flame, MoveRight } from "lucide-react";
function WinGame({
  xp,
  level,
  xpGain,
  streak,
  solution,
  roundGuesses,
  isLevelingUp,
}) {
  const fullMsg =
    startingMsg +
    ` I just won in ${roundGuesses} guesses, think you can top that?\nPlay here: `;
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
      <div className="modal-froots">
        {solution.map((froot) => (
          <img src={`${froot}.webp`} alt={froot} key={froot}></img>
        ))}
      </div>
      {/* <h2 className="text-sm">
        Having Fun? Go BANANAS and invite your friends and followers!
      </h2> */}
      <div className="social-media">
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
        {/* <WhatsappShareButton url={url} title={fullMsg}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton> */}
      </div>
    </>
  );
}

export default WinGame;
