import {
  Home,
  ChefHat,
  ChartNoAxesCombined,
  CircleQuestionMark,
} from "lucide-react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <header className={`navbar ${currentPage === "home" && "main"}`}>
      <h1 className="heading">Froot Salad</h1>
      <nav>
        <ul className="nav-container">
          <li>
            <Home
              className={`btn ${currentPage === "home" ? "active" : ""}`}
              color={"#1a1a1a"}
              onClick={() => handlePageChange("home")}
            />
          </li>
          <li>
            <ChartNoAxesCombined
              className={`btn ${currentPage === "stats" ? "active" : ""}`}
              color={"#1a1a1a"}
              onClick={() => handlePageChange("stats")}
            />
          </li>
          <li>
            <ChefHat
              className={`btn ${currentPage === "inventory" ? "active" : ""}`}
              color={"#1a1a1a"}
              onClick={() => handlePageChange("inventory")}
            />
          </li>
          <li>
            <CircleQuestionMark
              className={`btn ${currentPage === "information" ? "active" : ""}`}
              color={"#1a1a1a"}
              onClick={() => handlePageChange("information")}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
