function WinGame({ solution, roundGuesses }) {
  return (
    <>
      <h2 className="heading">Sweet! You Won!</h2>
      <p className="text-sm">
        You guessed the correct combination in {roundGuesses} tries and made a
        delicious froot salad. Well done!
      </p>
      <div className="modal-froots">
        {solution.map((froot) => (
          <img src={`${froot}.webp`} alt={froot} key={froot}></img>
        ))}
      </div>
    </>
  );
}

export default WinGame;
