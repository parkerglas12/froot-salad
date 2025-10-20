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
      <img src="example1.webp" alt="Example One" className="example-img" />
      <div className="effect small">
        <div className="example-container border-bottom">
          <div className="example-froots">
            <img src="apple.webp" alt="apple" className="green" />
            <img src="pear.webp" alt="pear" className="green" />
          </div>
          <p className="text-sm">are both in the correct position.</p>
        </div>
        <div className="example-container border-bottom">
          <div className="example-froots">
            <img src="grape.webp" alt="grape" className="red" />
            <img src="watermelon.webp" alt="watermelon" className="red" />
          </div>
          <p className="text-sm">aren't in the solution.</p>
        </div>
        <div className="example-container border-bottom">
          <div className="example-froots">
            <img src="pineapple.webp" alt="pineapple" />
            <img src="raspberry.webp" alt="raspberry" />
          </div>
          <p className="text-sm">
            are in the solution but need to be further left than their current
            position.
          </p>
        </div>
        <div className="example-container">
          <div className="example-froots">
            <img src="blueberry.webp" alt="blueberry" />
          </div>
          <p className="text-sm">
            is in the solution but needs to be further right of its current
            position.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowTo;
