import {
  Ban,
  Star,
  Medal,
  Flame,
  Puzzle,
  Trophy,
  Gamepad2,
  CalendarDays,
  FlameKindling,
} from "lucide-react";

function Stats({
  xp,
  wins,
  level,
  losses,
  streak,
  guesses,
  levelUp,
  maxStreak,
  gamesPlayed,
  dateInformation,
}) {
  return (
    <section className="stats-main">
      <div className="stats-grid">
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
            <Puzzle color={"#4bb00f"} />
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
      </div>
      <div className="stats-grid">
        <h2 className="heading effect max-cols">Experience</h2>
        <div className="stats-item flex-center br">
          <h2 className="text-lg">Level</h2>
          <div className="stats-text flex-center">
            <h2 className="text-med">{level}</h2>
            <Medal color={"#111"} />
          </div>
          <div className="stats-text flex-center">
            {level === 1 ? (
              <progress value={xp} max={levelUp}></progress>
            ) : (
              <progress
                value={xp - levelUp / 2}
                max={levelUp - levelUp / 2}
              ></progress>
            )}
          </div>
        </div>
        <div className="stats-item flex-center br">
          <h2 className="text-lg">XP</h2>
          <div className="stats-text flex-center">
            <h2 className="text-med">{xp}</h2>
            <Star color={"#deb203"} />
          </div>
        </div>
        <div className="stats-item flex-center br">
          <h2 className="text-lg">Daily Streak</h2>
          <div className="stats-text flex-center">
            <h2 className="text-med">{dateInformation.streak}</h2>
            <CalendarDays color={"#111"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
