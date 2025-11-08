import About from "./About.jsx";
import HowTo from "./HowTo.jsx";
import Privacy from "./Privacy.jsx";

function Information() {
  return (
    <section className="information-layout flex-center">
      <HowTo />
      <About />
      <Privacy />
    </section>
  );
}

export default Information;
