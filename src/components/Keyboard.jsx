import { Delete, CircleCheckBig } from "lucide-react";

import { froots } from "../utils/Helpers.js";

function Keyboard({ notInPuzzle, handleKeyPress, handleOtherKeys }) {
  return (
    <section className="keyboard-container">
      {froots.map((froot) => (
        <div
          className={`froot-key flex-center ${
            !notInPuzzle.includes(froot) ? "clickable" : "absent"
          }`}
          onClick={() => handleKeyPress(froot)}
          key={froot}
        >
          <img src={`${froot}.webp`} alt={froot} />
        </div>
      ))}
      <div
        className="froot-key flex-center max-span clickable delete-key"
        onClick={() => handleOtherKeys("delete")}
      >
        <Delete size={30} color="#111" />
      </div>
      <div
        className="froot-key flex-center max-span clickable enter-key"
        onClick={() => handleOtherKeys("enter")}
      >
        <CircleCheckBig size={30} color="#111" />
      </div>
    </section>
  );
}

export default Keyboard;
