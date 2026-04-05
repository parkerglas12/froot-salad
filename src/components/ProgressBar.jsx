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
          background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
          borderRadius: "999px",
          transition: "width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
