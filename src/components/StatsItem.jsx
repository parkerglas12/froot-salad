import CountUp from "react-countup";

function StatsItem({ label, value, icon, countUp }) {
  return (
    <div className="stats-item flex-center">
      <h3 className="text-lg">{label}</h3>
      <div className="stats-text flex-center">
        {countUp ? (
          <CountUp className="text-med" start={0} end={value} duration={3} />
        ) : (
          <h3 className="text-med">{value}</h3>
        )}
        {icon}
      </div>
    </div>
  );
}

export default StatsItem;
