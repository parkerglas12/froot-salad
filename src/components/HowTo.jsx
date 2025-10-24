import { ChevronsLeft, ChevronsRight } from "lucide-react";

function HowTo() {
  return (
    <section className="howto-layout flex-center">
      <h2 className="heading effect">How To Play</h2>
      <p className="text-sm">
        Your goal is to guess a hidden combination of 7 froots in 6 guesses.
        There are never duplicate froots in a solution, and you'll receive
        feedback after each guess.
      </p>
      <p className="text-sm">
        To start just enter any combination of froots, for example:
      </p>
      <div className="example-image">
        <div className="grid-item flex-center green">
          <img src="apple.webp" alt="apple" />
        </div>
        <div className="grid-item flex-center yellow">
          <img src="blueberry.webp" alt="blueberry" />
          <ChevronsRight className="icon" size={20} />
        </div>
        <div className="grid-item flex-center red">
          <img src="grape.webp" alt="grape" />
        </div>
        <div className="grid-item flex-center yellow">
          <img src="raspberry.webp" alt="raspberry" />
          <ChevronsLeft className="icon" size={20} />
        </div>
        <div className="grid-item flex-center green">
          <img src="pineapple.webp" alt="" />
        </div>
        <div className="grid-item flex-center yellow">
          <img src="watermelon.webp" alt="watermelon" />
          <ChevronsLeft className="icon" size={20} />
        </div>
        <div className="grid-item flex-center red">
          <img src="pear.webp" alt="pear" />
        </div>
      </div>
      <div className="effect small">
        <div className="example-container">
          <div className="example-froots">
            <div className="grid-item flex-center green">
              <img src="apple.webp" alt="apple" />
            </div>
            <div className="grid-item flex-center green">
              <img src="pineapple.webp" alt="" />
            </div>
          </div>
          <p className="text-sm">Correct position</p>
        </div>
        <div className="example-container">
          <div className="example-froots">
            <div className="grid-item flex-center red">
              <img src="grape.webp" alt="grape" />
            </div>
            <div className="grid-item flex-center red">
              <img src="pear.webp" alt="pear" />
            </div>
          </div>
          <p className="text-sm">Not in the solution</p>
        </div>
        <div className="example-container">
          <div className="example-froots">
            <div className="grid-item flex-center yellow">
              <img src="raspberry.webp" alt="raspberry" />
              <ChevronsLeft className="icon" size={18} />
            </div>
            <div className="grid-item flex-center yellow">
              <img src="watermelon.webp" alt="watermelon" />
              <ChevronsLeft className="icon" size={18} />
            </div>
          </div>
          <p className="text-sm">In solution — move left</p>
        </div>
        <div className="example-container">
          <div className="example-froots">
            <div className="grid-item flex-center yellow">
              <img src="blueberry.webp" alt="blueberry" />
              <ChevronsRight className="icon" size={18} />
            </div>
          </div>
          <p className="text-sm">In solution — move right</p>
        </div>
      </div>
    </section>
  );
}

export default HowTo;
