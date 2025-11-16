function StatsItem({ label, value, icon }) {
  return (
    <div className="stats-item flex-center br">
      <h2 className="text-lg">{label}</h2>
      <div className="stats-text flex-center">
        <h2 className="text-med">{value}</h2>
        {icon}
      </div>
    </div>
  );
}

export default StatsItem;
