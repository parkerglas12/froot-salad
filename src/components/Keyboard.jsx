import { Delete, CircleCheckBig } from "lucide-react";

import { froots } from "../utils/Helpers.js";

function Keyboard({
  partial,
  inSolution,
  notInPuzzle,
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
              : ""
          }`}
          onPointerDown={() => handleKeyPress(froot)}
          key={froot}
        >
          <img src={`${froot}.webp`} alt={froot} />
        </button>
      ))}
      <button
        className="delete-key froot-key btn flex-center max-span clickable"
        onPointerDown={() => handleOtherKeys("delete")}
        aria-label="Delete Button"
      >
        <Delete size={27} color="#111" />
      </button>
      <button
        className="enter-key froot-key btn flex-center max-span clickable"
        onPointerDown={() => handleOtherKeys("enter")}
        aria-label="Enter Button"
      >
        <CircleCheckBig size={27} color="#111" />
      </button>
    </section>
  );
}

export default Keyboard;
