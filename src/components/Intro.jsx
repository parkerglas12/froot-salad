import { ChevronsLeft, ChevronsRight } from "lucide-react";

function Intro() {
  return (
    <>
      <h2 className="text-lg">Welcome to Froot Salad!</h2>
      <p className="text-sm">
        Your goal is to guess a hidden combination of 8 froots in 6 guesses.
        There are never duplicate froots in a solution, and you'll receive
        feedback after each guess:
      </p>
      <div className="intro-example">
        <figure className="intro-container m1">
          <div className="grid-item flex-center green">
            <img
              src="apple.webp"
              alt="apple in the correct position with a green background"
            />
          </div>
          <figcaption className="text-sm">Correct position</figcaption>
        </figure>
        <figure className="intro-container m1">
          <div className="grid-item flex-center red">
            <img
              src="grape.webp"
              alt="grape not in the puzzle with a red background"
            />
          </div>
          <figcaption className="text-sm">Not in the solution</figcaption>
        </figure>
        <figure className="intro-container">
          <div className="grid-item flex-center yellow">
            <img
              src="blueberry.webp"
              alt="blueberry in the solution but needs to move right with a yellow background"
            />
            <ChevronsRight className="icon" size={18} />
          </div>
          <figcaption className="text-sm">Move right</figcaption>
        </figure>
        <figure className="intro-container">
          <div className="grid-item flex-center yellow">
            <img
              src="kiwi.webp"
              alt="kiwi in the solution but needs to move left with a yellow background"
            />
            <ChevronsLeft className="icon" size={18} />
          </div>
          <figcaption className="text-sm">Move left</figcaption>
        </figure>
      </div>
      <p className="text-sm">
        To get started just enter any combination of 8 froots!
      </p>
    </>
  );
}

export default Intro;
