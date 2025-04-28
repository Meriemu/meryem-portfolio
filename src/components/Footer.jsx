import React, { useState, useEffect } from "react";

import CodewarsIcon from "../images/codewarsIcon.svg";
const Footer = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    // Afficher ou masquer le bouton lorsque l'utilisateur fait défiler la page
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
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
                After 5 years of experience as a Front developer/Web integrator
                and 1 year as React developer, I am currently looking for a job
                as a <b>Reactjs Front-End Developer</b>
              </p>
              <ul className="portfolio-footer-social list-unstyled float-md-left float-lft mt-5">
                <li>
                  <a href="https://github.com/Meriemu">
                    <span className="icon-github"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.codewars.com/users/Meriemu">
                    <img src={CodewarsIcon} alt="" />
                  </a>
                </li>

                <li className="portfolio-animate">
                  <a href="https://www.linkedin.com/in/meryem-a-582b22a5/">
                    <span className="icon-linkedin"></span>
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
                  <span className="icon-long-arrow-right mr-2"></span>
                  <a href="#home-section"> Home</a>
                </li>
                <li>
                  <span className="icon-long-arrow-right mr-2"></span>
                  <a href="#about-section"> About</a>
                </li>
                <li>
                  <span className="icon-long-arrow-right mr-2"></span>
                  <a href="#projects-section"> Projects</a>
                </li>
                <li>
                  <span className="icon-long-arrow-right mr-2"></span>
                  <a href="#contact-section"> Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md">
            <div className="portfolio-footer-widget mb-4">
              <h2 className="portfolio-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">France - Les Mureaux</span>
                  </li>
                  <li>
                    <span className="icon icon-phone"></span>
                    <a href="tel://+33619562721">
                      <span className="text">+33-619-56-27-21</span>
                    </a>
                  </li>
                  <li>
                    <span className="icon icon-envelope"></span>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=me.achemlal@gmail.com">
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
          <button className="scroll-btn icon-hand-o-up" onClick={scrollToTop}>
            {/* <button className="scroll-btn icon-arrow-up" onClick={scrollToTop}>  */}
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
