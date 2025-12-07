function StatsItem({ label, value, icon }) {
  return (
    <div className="stats-item flex-center">
      <h3 className="text-lg ">{label}</h3>
      <div className="stats-text flex-center">
        <h3 className="text-med gray">{value}</h3>
        {icon}
      </div>
    </div>
  );
}

export default StatsItem;
