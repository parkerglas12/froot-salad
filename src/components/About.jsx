function About() {
  return (
    <>
      <h2 className="heading effect m2">About Me</h2>
      <p className="text-sm flex-center">
        Hi all! My name is Parker, and I'm currently a college student studying
        data science in Minnesota. I've loved the concepts of math, statistics,
        and computer science since I was little, and when I found a field of
        study that combined all three, I knew I had found what I wanted to do in
        life.
      </p>
      <p className="text-sm">
        However, there's one thing about data science that I don't like, and
        it's the fact that most projects aren't interactive or designed for a
        user to really enjoy. I've made dashboards, and that's about as
        interactive as it gets in data science. And I've always wanted to create
        a website to reach others positively, so I set off on a new adventure of
        learning how to code in a website language: ReactJS.
      </p>
      <p className="text-sm">
        Once I started learning, I was hooked, and I began brainstorming ideas
        for what I wanted to build. I didn't want another website that
        manipulates a user or strips their time away doing something that isn't
        productive. But I still wanted it to be fun, so I decided that I wanted
        to make a logic puzzle game.
      </p>
      <p className="text-sm">
        After building a couple of my first ideas for a puzzle game, I really
        started to learn the fundamentals of ReactJS. To be honest, the games
        weren't all that great, but I had a lot of fun building them. I then had
        the idea for this game and I knew it was far better than the others.
      </p>
      <p className="text-sm">
        I find myself really enjoying the gameplay, and the early feedback I've
        gotten has indicated that some users enjoy it as well. My goal is to
        continue to grow and improve the game and if you have any suggestions
        about how I can do this I'd love to connect with you via Linkedin!
      </p>
      <a
        className="contact-btn flex-center btn text-med"
        href="https://www.linkedin.com/in/parker-glas-09145536a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact Me!
        <img
          src="icons8-linkedin.svg"
          alt="Linkedin"
          className="linkedin-icon"
        />
      </a>
    </>
  );
}

export default About;
