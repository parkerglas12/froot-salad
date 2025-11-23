import { ChevronsLeft, ChevronsRight } from "lucide-react";

function HowTo() {
  return (
    <>
      <h2 className="heading effect">How To Play</h2>
      <p className="text-sm">
        Your goal is to guess a hidden combination of 8 froots in 6 guesses.
        There are never duplicate froots in a solution, and you'll receive
        feedback after each guess.
      </p>
      <p className="text-sm">
        To start just enter any combination of froots, for example:
      </p>
      <div className="example-image">
        <div className="grid-item flex-center green">
          <img
            src="apple.webp"
            alt="apple in the correct position with a green background"
          />
        </div>
        <div className="grid-item flex-center yellow">
          <img
            src="blueberry.webp"
            alt="blueberry in the solution but needs to move right with a yellow background"
          />
          <ChevronsRight className="icon" size={18} />
        </div>
        <div className="grid-item flex-center red">
          <img
            src="grape.webp"
            alt="grape not in the puzzle with a red background"
          />
        </div>
        <div className="grid-item flex-center yellow">
          <img
            src="raspberry.webp"
            alt="raspberry in the solution but needs to move left with a yellow background"
          />
          <ChevronsLeft className="icon" size={18} />
        </div>
        <div className="grid-item flex-center green">
          <img
            src="pineapple.webp"
            alt="pineapple in the correct position with a green background"
          />
        </div>
        <div className="grid-item flex-center yellow">
          <img
            src="peach.webp"
            alt="peach in the solution but needs to move right with a yellow background"
          />
          <ChevronsRight className="icon" size={18} />
        </div>
        <div className="grid-item flex-center yellow">
          <img
            src="watermelon.webp"
            alt="watermelon in the solution but needs to move left with a yellow background"
          />
          <ChevronsLeft className="icon" size={18} />
        </div>
        <div className="grid-item flex-center red">
          <img
            src="pear.webp"
            alt="pear not in the puzzle with a red background"
          />
        </div>
      </div>
      <section className="effect small">
        <div className="example-container">
          <figure className="example-froots">
            <div className="flex-center">
              <div className="grid-item flex-center green">
                <img
                  src="apple.webp"
                  alt="apple in the correct position with a green background"
                />
              </div>
              <div className="grid-item flex-center green">
                <img
                  src="pineapple.webp"
                  alt="pineapple in the correct position with a green background"
                />
              </div>
            </div>
            <figcaption className="text-sm">Correct position</figcaption>
          </figure>
        </div>
        <div className="example-container">
          <figure className="example-froots">
            <div className="flex-center">
              <div className="grid-item flex-center red">
                <img
                  src="grape.webp"
                  alt="grape not in the puzzle with a red background"
                />
              </div>
              <div className="grid-item flex-center red">
                <img
                  src="pear.webp"
                  alt="pear not in the puzzle with a red background"
                />
              </div>
            </div>
            <figcaption className="text-sm">Not in the solution</figcaption>
          </figure>
        </div>
        <div className="example-container">
          <figure className="example-froots">
            <div className="flex-center">
              <div className="grid-item flex-center yellow">
                <img
                  src="raspberry.webp"
                  alt="raspberry in the solution but needs to move left with a yellow background"
                />
                <ChevronsLeft className="icon" size={18} />
              </div>
              <div className="grid-item flex-center yellow">
                <img
                  src="watermelon.webp"
                  alt="watermelon in the solution but needs to move left with a yellow background"
                />
                <ChevronsLeft className="icon" size={18} />
              </div>
            </div>
            <figcaption className="text-sm">In solution — move left</figcaption>
          </figure>
        </div>
        <div className="example-container">
          <figure className="example-froots">
            <div className="flex-center">
              <div className="grid-item flex-center yellow">
                <img
                  src="blueberry.webp"
                  alt="blueberry in the solution but needs to move right with a yellow background"
                />
                <ChevronsRight className="icon" size={18} />
              </div>
              <div className="grid-item flex-center yellow">
                <img
                  src="peach.webp"
                  alt="peach in the solution but needs to move right with a yellow background"
                />
                <ChevronsRight className="icon" size={18} />
              </div>
            </div>
            <figcaption className="text-sm">
              In solution — move right
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default HowTo;
