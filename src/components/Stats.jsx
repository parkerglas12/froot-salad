import StatsItem from "./StatsItem.jsx";
import ProgressBar from "./ProgressBar.jsx";
import StreakCalendar from "./StreakCalendar.jsx";
import GuessDistribution from "./GuessDistribution.jsx";

import {
  Zap,
  Ban,
  Flame,
  Trophy,
  Gamepad2,
  TrendingUp,
  FlameKindling,
} from "lucide-react";

import { currentDay } from "../utils/Helpers.js";

function Stats({
  xp,
  wins,
  level,
  losses,
  streak,
  levelUp,
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
            icon={<Gamepad2 color={"#111"} size={25} />}
          />
          <StatsItem
            label="Wins"
            value={wins}
            icon={<Trophy color={"#deb203"} size={25} />}
          />
          <StatsItem
            label="Losses"
            value={losses}
            icon={<Ban color={"#e76962"} size={25} />}
          />
          <StatsItem
            label="Win Streak"
            value={streak}
            icon={<TrendingUp color={"#10a300"} size={25} />}
          />
          <StatsItem
            label="XP"
            value={xp.toLocaleString("en-US")}
            icon={<Zap color={"#B083FF"} size={25} />}
          />
          <div className="stats-item flex-center">
            <div className="stats-text flex-center">
              <h3 className="text-lg">Level {level}</h3>
            </div>
            <div className="progress-container">
              {level === 1 ? (
                <ProgressBar start={0} end={250} current={xp} />
              ) : (
                <ProgressBar start={levelUp / 2} end={levelUp} current={xp} />
              )}
            </div>
          </div>
        </section>
        <section className="stats-grid extra-padding">
          <h2 className="heading effect max-cols">Experience</h2>
          <StatsItem
            label="Daily Streak"
            value={dateInformation.streak}
            icon={
              lastSevenDays[currentDay()] ? (
                <Flame className="glow-icon" color={"#ff8400"} size={30} />
              ) : (
                <Flame color={"#111"} size={30} />
              )
            }
          />
          <StatsItem
            label="Longest Streak"
            value={dateInformation.longestStreak}
            icon={<FlameKindling color={"#ff8400"} size={30} />}
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
