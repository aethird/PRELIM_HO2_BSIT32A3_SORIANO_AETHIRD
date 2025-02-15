import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              My Curriculum Vitae
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h1>
            Hello, I'm <span className="highlight">Aethird Soriano</span>
          </h1>
          <p>
            Passionate IT student, Frontend & Backend Developer, Web Developer,
            and Game Developer.
          </p>
          <button id="hobbyButton" className="btn btn-primary">
            My Hobbies
          </button>
        </div>
        <div className="hero-image">
          <img src="aethird.png" alt="Profile Picture" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am an IT student and a creative web designer with skills in both
          front-end and back-end development. I have basic knowledge of HTML,
          CSS, PHP, MySQL, JavaScript, VB.NET, and game development. Passionate
          about building functional and visually appealing applications.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
          <textarea
            className="form-control"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 aethird soriano. All rights reserved.</p>
      </footer>
    </div>
  );
}
