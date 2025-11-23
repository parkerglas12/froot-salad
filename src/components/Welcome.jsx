import StreakCalendar from "./StreakCalendar.jsx";

import { doubleXpThreshold } from "../utils/Helpers.js";

function Welcome({ dateInformation, lastSevenDays }) {
  return (
    <>
      <h2 className="heading">Welcome Back!</h2>
      {dateInformation.streak >= doubleXpThreshold && (
        <p className="text-sm">
          You're on a <span className="bold">{dateInformation.streak}-day</span>{" "}
          streak and earning <span className="bold">DOUBLE XP</span> on all your
          wins! Keep it up by completing a game today!
        </p>
      )}
      {dateInformation.streak < doubleXpThreshold && (
        <p className="text-sm">
          Your on a <span className="bold">{dateInformation.streak}-day</span>{" "}
          streak. Get it over <span className="bold">5+ days</span> and earn{" "}
          <span className="bold">DOUBLE XP</span> on all your wins! Play a round
          today and grow your streak!
        </p>
      )}
      <StreakCalendar lastSevenDays={lastSevenDays} />
    </>
  );
}

export default Welcome;
