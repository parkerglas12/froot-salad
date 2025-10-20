function LoseGame({ solution }) {
  return (
    <>
      <h2 className="heading">Ooh Grapes.</h2>
      <p className="text-sm">
        It was a good attempt, but your salad didn't quite turn out. The correct
        combination was:
      </p>
      <div className="modal-froots">
        {solution.map((froot) => (
          <img src={`${froot}.webp`} alt={froot} key={froot}></img>
        ))}
      </div>
    </>
  );
}

export default LoseGame;
