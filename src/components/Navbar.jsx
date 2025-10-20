import { Home, CircleQuestionMark, ChartColumnIncreasing } from "lucide-react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <header className={`navbar ${currentPage === "home" && "main"}`}>
      <h1 className="heading">Froot Salad</h1>
      <nav className="nav-container">
        <Home
          className={`btn ${currentPage === "home" ? "active" : ""}`}
          color={"#111"}
          onClick={() => handlePageChange("home")}
        />
        <ChartColumnIncreasing
          className={`btn ${currentPage === "stats" ? "active" : ""}`}
          color={"#111"}
          onClick={() => handlePageChange("stats")}
        />
        <CircleQuestionMark
          className={`btn ${currentPage === "howto" ? "active" : ""}`}
          color={"#111"}
          onClick={() => handlePageChange("howto")}
        />
      </nav>
    </header>
  );
}

export default Navbar;
