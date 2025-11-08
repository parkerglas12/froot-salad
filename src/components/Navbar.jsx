import {
  Home,
  ShoppingBasket,
  ChartNoAxesCombined,
  CircleQuestionMark,
} from "lucide-react";

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
        <ChartNoAxesCombined
          className={`btn ${currentPage === "stats" ? "active" : ""}`}
          color={"#111"}
          onClick={() => handlePageChange("stats")}
        />
        <ShoppingBasket
          className={`btn ${currentPage === "collection" ? "active" : ""}`}
          color={"#111"}
          onClick={() => handlePageChange("collection")}
        />
        <CircleQuestionMark
          className={`btn ${currentPage === "information" ? "active" : ""}`}
          color={"#111"}
          onClick={() => handlePageChange("information")}
        />
      </nav>
    </header>
  );
}

export default Navbar;
