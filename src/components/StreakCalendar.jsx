import { days, currentDay } from "../utils/Helpers.js";

import { CircleCheck, Circle } from "lucide-react";

function StreakCalendar({ stats, lastSevenDays }) {
  return (
    <div className="daily-container max-cols">
      <h2 className="text-lg max-cols m1 ">Streak Calendar</h2>
      {lastSevenDays.map((item, index) => (
        <div key={index}>
          {item && <CircleCheck color={"#008f1aff"} size={30} />}
          {!item && <Circle color={"#111"} size={30} />}
          <h3 className={`text-med ${index === currentDay() ? "bold" : ""}`}>
            {days[index]}
          </h3>
        </div>
      ))}
      {stats && (
        <h3 className="text-sm max-cols m2">
          A 5+ day streak earns you <span className="bold">DOUBLE XP</span> for
          each win!
        </h3>
      )}
    </div>
  );
}

export default StreakCalendar;
