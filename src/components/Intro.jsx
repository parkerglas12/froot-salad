import { ChevronsLeft, ChevronsRight } from "lucide-react";

function Intro() {
  return (
    <>
      <h2 className="text-lg">Welcome to Froot Salad!</h2>
      <p className="text-sm">
        Your goal is to guess a hidden combination of 7 froots in 6 guesses.
        There are never duplicate froots in a solution, and you'll receive
        feedback after each guess:
      </p>
      <div className="intro-example">
        <div className="intro-container m1">
          <div className="grid-item flex-center green">
            <img src="apple.webp" alt="apple" />
          </div>
          <p className="text-sm">Correct position</p>
        </div>
        <div className="intro-container m1">
          <div className="grid-item flex-center red">
            <img src="grape.webp" alt="grape" />
          </div>
          <p className="text-sm">Not in the solution</p>
        </div>
        <div className="intro-container">
          <div className="grid-item flex-center yellow">
            <img src="blueberry.webp" alt="blueberry" />
            <ChevronsRight className="icon" size={20} />
          </div>
          <p className="text-sm">Move right</p>
        </div>
        <div className="intro-container">
          <div className="grid-item flex-center yellow">
            <img src="kiwi.webp" alt="kiwi" />
            <ChevronsLeft className="icon" size={20} />
          </div>
          <p className="text-sm">Move left</p>
        </div>
      </div>
      <p className="text-sm">
        To get started just enter your favorite combination of 7 froots!
      </p>
    </>
  );
}

export default Intro;
