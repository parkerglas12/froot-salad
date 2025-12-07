import { getProgress } from "../utils/Helpers";

function ProgressBar({ start, end, current }) {
  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={start}
      aria-valuemax={end}
    >
      <div
        style={{
          height: "100%",
          width: `${getProgress(start, end, current)}%`,
          background: "#00aeff",
          borderRadius: "0.25rem",
          transition: "width 0.3s ease",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
