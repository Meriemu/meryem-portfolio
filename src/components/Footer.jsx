import React, {useState, useEffect} from "react";
import CodewarsIcon from "../images/codewarsIcon.svg";

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
    <footer className="portfolio-footer portfolio-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="portfolio-footer-widget mb-4">
              <h2 className="portfolio-heading-2">About</h2>
              <p>
                Front-end developer with solid experience in responsive,
                mobile-first UI development and recent work with React.js. I
                focus on clean code, performance, and strong UI/UX consistency.
              </p>
              <ul className="portfolio-footer-social list-unstyled float-md-left float-lft mt-5">
                <li>
                  <a href="https://github.com/Meriemu" aria-label="GitHub">
                    <span className="icon-github" aria-hidden="true"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewars.com/users/Meriemu"
                    aria-label="Codewars"
                  >
                    <img src={CodewarsIcon} alt="Profil Codewars" />
                  </a>
                </li>
                <li className="portfolio-animate">
                  <a
                    href="https://www.linkedin.com/in/meryem-a-582b22a5/"
                    aria-label="LinkedIn"
                  >
                    <span className="icon-linkedin" aria-hidden="true"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="portfolio-footer-widget mb-4 ml-md-4">
              <h2 className="portfolio-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <span
                    className="icon-long-arrow-right mr-2"
                    aria-hidden="true"
                  ></span>
                  <a href="#home-section">Home</a>
                </li>
                <li>
                  <span
                    className="icon-long-arrow-right mr-2"
                    aria-hidden="true"
                  ></span>
                  <a href="#about-section">About</a>
                </li>
                <li>
                  <span
                    className="icon-long-arrow-right mr-2"
                    aria-hidden="true"
                  ></span>
                  <a href="#projects-section">Projects</a>
                </li>
                <li>
                  <span
                    className="icon-long-arrow-right mr-2"
                    aria-hidden="true"
                  ></span>
                  <a href="#contact-section">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md">
            <div className="portfolio-footer-widget mb-4">
              <h2 className="portfolio-heading-2">Have a Question?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span
                      className="icon icon-map-marker"
                      aria-hidden="true"
                    ></span>
                    <span className="text">France</span>
                  </li>
                  <li>
                    <span className="icon icon-phone" aria-hidden="true"></span>
                    <a href="tel:+33619562721">
                      <span className="text">+33 6 19 56 27 21</span>
                    </a>
                  </li>
                  <li>
                    <span
                      className="icon icon-envelope"
                      aria-hidden="true"
                    ></span>
                    <a href="mailto:me.achemlal@gmail.com">
                      <span className="text">me.achemlal@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {scroll && (
          <button
            className="scroll-btn icon-hand-o-up"
            onClick={scrollToTop}
            aria-label="Retourner en haut de la page"
          ></button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
