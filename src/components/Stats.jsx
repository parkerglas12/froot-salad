import StatsItem from "./StatsItem.jsx";
import ProgressBar from "./ProgressBar.jsx";
import StreakCalendar from "./StreakCalendar.jsx";

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
          <h2 className="heading section-label">Statistics</h2>
          <StatsItem
            label="Games"
            value={gamesPlayed}
            icon={<Gamepad2 color={"#6b7280"} size={18} />}
          />
          <StatsItem
            label="Wins"
            value={wins}
            icon={<Trophy color={"#facc15"} size={18} />}
          />
          <StatsItem
            label="Losses"
            value={losses}
            icon={<Ban color={"#f87171"} size={18} />}
          />
          <StatsItem
            label="Win Streak"
            value={streak}
            icon={<TrendingUp color={"#34d399"} size={18} />}
          />
          <StatsItem
            label="XP"
            value={xp.toLocaleString("en-US")}
            icon={<Zap color={"#a78bfa"} size={18} />}
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
          <h2 className="heading section-label">Experience</h2>
          <StatsItem
            label="Daily Streak"
            value={dateInformation.streak}
            icon={
              lastSevenDays[currentDay()] ? (
                <Flame className="glow-icon" color={"#fb923c"} size={22} />
              ) : (
                <Flame color={"#6b7280"} size={22} />
              )
            }
          />
          <StatsItem
            label="Longest Streak"
            value={dateInformation.longestStreak}
            icon={<FlameKindling color={"#fb923c"} size={22} />}
          />
          <StreakCalendar stats={true} lastSevenDays={lastSevenDays} />
        </section>
      </section>
    </main>
  );
}

export default Stats;
