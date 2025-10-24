import {
  Ban,
  Flame,
  Trophy,
  Gamepad2,
  Lightbulb,
  FlameKindling,
} from "lucide-react";

function Stats({ wins, losses, streak, guesses, maxStreak, gamesPlayed }) {
  return (
    <section className="stats-grid">
      <h2 className="heading effect max-cols">Statistics</h2>
      <div className="stats-item flex-center br">
        <h2 className="text-lg">Games</h2>
        <div className="stats-text flex-center">
          <h2 className="text-med">{gamesPlayed}</h2>
          <Gamepad2 color={"#111"} />
        </div>
      </div>
      <div className="stats-item flex-center br">
        <h2 className="text-lg">Wins</h2>
        <div className="stats-text flex-center">
          <h2 className="text-med">{wins}</h2>
          <Trophy color={"#deb203"} />
        </div>
      </div>
      <div className="stats-item flex-center br">
        <h2 className="text-lg">Losses</h2>
        <div className="stats-text flex-center">
          <h2 className="text-med">{losses}</h2>
          <Ban color={"#e76962"} />
        </div>
      </div>
      <div className="stats-item flex-center br">
        <h2 className="text-lg">Guesses</h2>
        <div className="stats-text flex-center">
          <h2 className="text-med">{guesses}</h2>
          <Lightbulb color={"#467805"} />
        </div>
      </div>
      <div className="stats-item flex-center br">
        <h2 className="text-lg">Streak</h2>
        <div className="stats-text flex-center">
          <h2 className="text-med">{streak}</h2>
          <Flame color={"#ff8400"} />
        </div>
      </div>
      <div className="stats-item flex-center br">
        <h2 className="text-lg">Max Streak</h2>
        <div className="stats-text flex-center">
          <h2 className="text-med">{maxStreak}</h2>
          <FlameKindling color={"#ff8400"} />
        </div>
      </div>
    </section>
  );
}

export default Stats;
