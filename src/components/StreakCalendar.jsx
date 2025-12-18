import { days, currentDay, doubleXpThreshold } from "../utils/Helpers.js";

import { Circle, CircleX, CircleCheck } from "lucide-react";

function StreakCalendar({ stats, lastSevenDays }) {
  return (
    <div className="daily-container flex-center max-cols">
      {/* <h2 className="text-lg max-cols m1 ">Streak Calendar</h2> */}
      <div className="days">
        {lastSevenDays.map((item, index) => (
          <div key={index}>
            {item ? (
              <CircleCheck color={"#10a300"} size={30} />
            ) : !item && index < currentDay() ? (
              <CircleX color="#e76962" size={30} />
            ) : (
              <Circle color={"#111"} size={30} />
            )}
            <h3 className={`text-med ${index === currentDay() ? "bold" : ""}`}>
              {days[index]}
            </h3>
          </div>
        ))}
      </div>
      {stats && (
        <h3 className="text-sm max-cols m4">
          A {doubleXpThreshold}+ day streak earns you{" "}
          <span className="bold">DOUBLE XP</span> for each win!
        </h3>
      )}
    </div>
  );
}

export default StreakCalendar;
