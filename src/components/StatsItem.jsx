function StatsItem({ label, value, icon }) {
  return (
    <div className="stats-item flex-center">
      <h3 className="text-sm" style={{ color: "#1a1a1a", fontWeight: 500 }}>{label}</h3>
      <div className="stats-text flex-center">
        <h3 className="text-lg">{value}</h3>
        {icon}
      </div>
    </div>
  );
}

export default StatsItem;
