import React, {useState, useEffect} from "react";
import CodewarsIcon from "../images/codewarsIcon.svg";

import "../styles/footer.scss";

const Footer = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setScroll(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="portfolio-footer-cyber">
      <div className="footer-glow-line"></div>

      <div className="container py-5">
        <div className="row g-4 mb-4">
          <div className="col-lg-5 col-md-6">
            <div className="footer-widget">
              <h3 className="widget-title">Meryem Achemlal</h3>
              <p className="widget-text">
                Front-End Developer & Web Integrator specializing in React.js,
                responsive UI/UX, and digital accessibility (RGAA / WCAG).
              </p>
              <div className="social-links-cyber mt-4">
                <a
                  href="https://github.com/Meriemu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="social-btn"
                >
                  <span className="icon-github" aria-hidden="true"></span>
                </a>
                <a
                  href="https://www.linkedin.com/in/meryem-a-582b22a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="social-btn"
                >
                  <span className="icon-linkedin" aria-hidden="true"></span>
                </a>
                <a
                  href="https://www.codewars.com/users/Meriemu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codewars Profile"
                  className="social-btn codewars-btn"
                >
                  <img src={CodewarsIcon} alt="" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4 className="widget-subtitle">Navigation</h4>
              <ul className="footer-nav-links list-unstyled">
                <li>
                  <a href="#about-section">
                    <i className="icon-long-arrow-right" aria-hidden="true"></i>{" "}
                    About
                  </a>
                </li>
                <li>
                  <a href="#resume-section">
                    <i className="icon-long-arrow-right" aria-hidden="true"></i>{" "}
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#skills-section">
                    <i className="icon-long-arrow-right" aria-hidden="true"></i>{" "}
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects-section">
                    <i className="icon-long-arrow-right" aria-hidden="true"></i>{" "}
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact-section">
                    <i className="icon-long-arrow-right" aria-hidden="true"></i>{" "}
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="footer-widget">
              <h4 className="widget-subtitle">Direct Contact</h4>
              <ul className="footer-contact-info list-unstyled">
                <li>
                  <span
                    className="contact-icon icon-map-marker"
                    aria-hidden="true"
                  ></span>
                  <span>France</span>
                </li>
                <li>
                  <span
                    className="contact-icon icon-phone"
                    aria-hidden="true"
                  ></span>
                  <a href="tel:+33619562721">+33 6 19 56 27 21</a>
                </li>
                <li>
                  <span
                    className="contact-icon icon-envelope"
                    aria-hidden="true"
                  ></span>
                  <a href="mailto:me.achemlal@gmail.com">
                    me.achemlal@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center pt-4 mt-4">
          <p>
            © {new Date().getFullYear()} Meryem Achemlal — Built with React.js &
            Passion ⚡
          </p>
        </div>
      </div>

      {scroll && (
        <button
          className="scroll-to-top-cyber"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span className="icon-hand-o-up" aria-hidden="true"></span>
        </button>
      )}
    </footer>
  );
};

export default Footer;
