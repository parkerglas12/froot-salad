import StreakCalendar from "./StreakCalendar.jsx";

import { Flame } from "lucide-react";

function Welcome({ dateInformation, lastSevenDays }) {
  return (
    <>
      <h2 className="heading">Welcome Back!</h2>
      <div className="welcome-container">
        <div className="flex-center">
          <Flame color={"#111"} size={45} />
          <p className="text-lg">{dateInformation.streak}</p>
        </div>
        <p className="text-sm">day streak</p>
        <p className="text-sm">Ready to extend your streak?</p>
      </div>
      <div className="welcome-calendar">
        <StreakCalendar lastSevenDays={lastSevenDays} />
      </div>
    </>
  );
}

export default Welcome;
