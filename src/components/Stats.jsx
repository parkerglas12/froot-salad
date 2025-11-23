import StatsItem from "./StatsItem.jsx";
import ProgressBar from "./ProgressBar.jsx";
import StreakCalendar from "./StreakCalendar.jsx";
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
  lastSevenDays,
  dateInformation,
  guessDistributionData,
}) {
  return (
    <main className="stats-container flex-center">
      <section className="stats-main">
        <section className="stats-grid">
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
        </section>
        <section className="stats-grid extra-padding">
          <h2 className="heading effect max-cols">Experience</h2>
          <div className="stats-item flex-center br">
            <div className="stats-text flex-center">
              <h3 className="text-lg">Level {level}</h3>
              <Medal color={"#111"} />
            </div>
            <div className="progress-container">
              {level === 1 ? (
                <ProgressBar start={0} end={250} current={xp} />
              ) : (
                <ProgressBar start={levelUp / 2} end={levelUp} current={xp} />
              )}
            </div>
          </div>
          <StatsItem
            label="XP"
            value={xp.toLocaleString("en-US")}
            icon={<Star color={"#deb203"} />}
          />
          <StatsItem
            label="Daily Streak"
            value={dateInformation.streak}
            icon={<CalendarDays color={"#111"} />}
          />
          <StreakCalendar stats={true} lastSevenDays={lastSevenDays} />
        </section>
        <section>
          <GuessDistribution data={guessDistributionData} />
        </section>
      </section>
    </main>
  );
}

export default Stats;
