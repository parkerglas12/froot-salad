import { days, currentDay, doubleXpThreshold } from "../utils/Helpers.js";

import { Circle, CircleX, CircleCheck } from "lucide-react";

function StreakCalendar({ stats, lastSevenDays }) {
  return (
    <div className="daily-container flex-center max-cols">
      <div className="days">
        {lastSevenDays.map((item, index) => (
          <div key={index}>
            {item ? (
              <CircleCheck color={"#34d399"} size={26} />
            ) : !item && index < currentDay() ? (
              <CircleX color="#f87171" size={26} />
            ) : (
              <Circle color={"#d1d5db"} size={26} />
            )}
            <h3 className={`text-med ${index === currentDay() ? "bold" : ""}`}>
              {days[index]}
            </h3>
          </div>
        ))}
      </div>
      {stats && (
        <h3 className="text-sm max-cols m4">
          A {doubleXpThreshold}+ day streak earns you double XP when you win!
        </h3>
      )}
    </div>
  );
}

export default StreakCalendar;
