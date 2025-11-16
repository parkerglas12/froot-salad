import StatsItem from "./StatsItem.jsx";
import GuessDistribution from "./GuessDistribution.jsx";

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
  guessDistributionData,
}) {
  return (
    <section className="stats-main">
      <div className="stats-grid">
        <h2 className="heading effect max-cols">Statistics</h2>
        <StatsItem
          label="Games"
          value={gamesPlayed}
          icon={<Gamepad2 color={"#111"} />}
        />
        <StatsItem
          label="Wins"
          value={wins}
          icon={<Trophy color={"#deb203"} />}
        />
        <StatsItem
          label="Losses"
          value={losses}
          icon={<Ban color={"#e76962"} />}
        />
        <StatsItem
          label="Guesses"
          value={guesses}
          icon={<Puzzle color={"#4bb00f"} />}
        />
        <StatsItem
          label="Streak"
          value={streak}
          icon={<Flame color={"#ff8400"} />}
        />
        <StatsItem
          label="Max Streak"
          value={maxStreak}
          icon={<FlameKindling color={"#ff8400"} />}
        />
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
        <StatsItem label="XP" value={xp} icon={<Star color={"#deb203"} />} />
        <StatsItem
          label="Daily Streak"
          value={dateInformation.streak}
          icon={<CalendarDays color={"#111"} />}
        />
      </div>
      <div>
        <GuessDistribution data={guessDistributionData} />
      </div>
    </section>
  );
}

export default Stats;
