import About from "./About.jsx";
import HowTo from "./HowTo.jsx";
import Privacy from "./Privacy.jsx";

function Information() {
  return (
    <main className="information-container flex-center">
      <section className="information-layout flex-center">
        <HowTo />
        <About />
        <Privacy />
      </section>
    </main>
  );
}

export default Information;
