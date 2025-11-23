import Grid from "./Grid.jsx";
import Keyboard from "./Keyboard.jsx";

function Home({
  gridArray,
  fullResults,
  currentRound,
  partial,
  inSolution,
  notInPuzzle,
  handleKeyPress,
  handleOtherKeys,
}) {
  return (
    <main className="main-container flex-center">
      <Grid
        gridArray={gridArray}
        fullResults={fullResults}
        currentRound={currentRound}
      />
      <Keyboard
        partial={partial}
        inSolution={inSolution}
        notInPuzzle={notInPuzzle}
        handleKeyPress={handleKeyPress}
        handleOtherKeys={handleOtherKeys}
      />
    </main>
  );
}

export default Home;
