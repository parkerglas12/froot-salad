import StreakCalendar from "./StreakCalendar.jsx";

import { Flame } from "lucide-react";

function Welcome({ dateInformation, lastSevenDays }) {
  return (
    <>
      <h2 className="heading">Welcome Back!</h2>
      <div className="welcome-container">
        <div
          className="flex-center"
          style={{ gap: "0.25rem", marginTop: "0.25rem" }}
        >
          <Flame color={"#1a1a1a"} size={30} />
          <p className="text-lg">{dateInformation.streak}</p>
        </div>
        <p className="text-sm" style={{ textAlign: "center" }}>
          day streak
        </p>
        <p
          className="text-sm"
          style={{ textAlign: "center", marginTop: "0.25rem" }}
        >
          Ready to extend your streak?
        </p>
      </div>
      <div className="welcome-calendar">
        <StreakCalendar lastSevenDays={lastSevenDays} />
      </div>
    </>
  );
}

export default Welcome;
