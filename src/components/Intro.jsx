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
        <div className="intro-container">
          <img src="green-froot.webp" alt="apple" className="green" />
          <p className="text-sm">Correct position</p>
        </div>
        <div className="intro-container">
          <img src="red-froot.webp" alt="grape" className="red" />
          <p className="text-sm">Not in the solution</p>
        </div>
        <div className="intro-container">
          <img src="right-froot.webp" alt="blueberry" />
          <p className="text-sm">Move right</p>
        </div>
        <div className="intro-container">
          <img src="left-froot.webp" alt="pineapple" />
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
