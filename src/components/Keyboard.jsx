import { Delete, CircleCheckBig } from "lucide-react";

import { froots } from "../utils/Helpers.js";

function Keyboard({
  partial,
  inSolution,
  notInPuzzle,
  currentAttempt,
  handleKeyPress,
  handleOtherKeys,
}) {
  return (
    <section className="keyboard-container">
      {froots.map((froot) => (
        <button
          className={`froot-key btn flex-center ${
            !notInPuzzle.includes(froot) ? "clickable" : "absent"
          } ${
            inSolution.includes(froot)
              ? "green"
              : partial.includes(froot)
              ? "yellow"
              : currentAttempt.includes(froot)
              ? "used"
              : ""
          } `}
          onPointerDown={() => handleKeyPress(froot)}
          key={froot}
        >
          <img
            src={`${froot}.webp`}
            alt={`${froot} key for entering your answer`}
          />
        </button>
      ))}
      <button
        className="delete-key froot-key btn flex-center clickable"
        onPointerDown={() => handleOtherKeys("delete")}
        aria-label="delete button"
      >
        <Delete size={20} color="#1a1a1a" />
      </button>
      <button
        className="enter-key froot-key btn flex-center clickable"
        onPointerDown={() => handleOtherKeys("enter")}
        aria-label="enter button"
      >
        <CircleCheckBig size={20} color="#1a1a1a" />
      </button>
    </section>
  );
}

export default Keyboard;
