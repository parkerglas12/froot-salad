import StatsItem from "./StatsItem.jsx";

import { CalendarDays } from "lucide-react";

import { doubleXpThreshold } from "../utils/Helpers.js";

function Welcome({ dateInformation }) {
  return (
    <>
      <h2 className="heading">Welcome Back!</h2>

      {dateInformation.streak > doubleXpThreshold ? (
        <>
          <p className="text-sm">
            Your dedication to playing Froot Salad every day has paid off! You
            Now have a 7-day (or more) daily game streak, and you'll earn{" "}
            <span className="bold">DOUBLE XP</span> for every solution you
            answer correctly while the streak is active.
          </p>
          <StatsItem
            label="Daily Streak"
            value={dateInformation.streak}
            icon={<CalendarDays color={"#111"} />}
          />
          <p className="text-sm">
            Keep up the great work, and don't lose that precious streak! And as
            always, thanks for playing Froot Salad!
          </p>
        </>
      ) : (
        <>
          <p className="text-sm">
            It's so great to see you again! By coming back every day, you're
            building your problem-solving skills and have the chance to earn a{" "}
            <span className="bold">MAJOR BONUS</span> reward!
          </p>
          <div className="welcome-stats">
            <p className="text-sm">
              Get your daily streak to {doubleXpThreshold}+ days and earn{" "}
              <span className="bold">DOUBLE XP</span> with every solve!
            </p>
            <StatsItem
              label="Daily Streak"
              value={dateInformation.streak}
              icon={<CalendarDays color={"#111"} />}
            />
          </div>
          <p className="text-sm">
            Simply finish one game every day to keep your streak going. You can
            do it!
          </p>
        </>
      )}
    </>
  );
}

export default Welcome;
