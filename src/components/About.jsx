import React from "react";
import PhotoMeryem from "../images/personnage_meryem_1.png";
const About = () => {
  return (
    <section
      className="portfolio-about img portfolio-section portfolio-no-pb"
      id="about-section"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{backgroundImage: "url(" + PhotoMeryem + " )"}}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section portfolio-animate">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About me</h2>
                <p>
                  After 5 years of experience as a Front developer/Web
                  integrator and 1 year as React developer, I am currently
                  looking for a job as a Reactjs <b>Front-End Developer</b>
                </p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>Meryem ACHEMLAL</span>
                  </li>
                  <li className="d-flex">
                    <span>Date of birth:</span> <span>June 30, 1992</span>
                  </li>
                  <li className="d-flex">
                    <span>Address:</span> <span>France</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>me.achemlal@gmail.com</span>
                  </li>
                  <li className="d-flex">
                    <span>Phone: </span> <span>+33-619-56-27-21</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="counter-wrap portfolio-animate d-flex mt-md-3">
              <div className="text">
                <p>
                  <a
                    href="https://meryem-portfolio.vercel.app/EN--CV_2025-04-28_Meryem_ACHEMLAL.pdf"
                    className="btn btn-primary py-3 px-3 me-1"
                    download="CV_Meryem_ACHEMLAL.pdf"
                  >
                    Download CV
                  </a>
                  <a
                    href="https://meryem-portfolio.vercel.app/FR--CV_2025-04-28_Meryem_ACHEMLAL.pdf"
                    className="btn btn-primary py-3 px-3"
                    download="CV-FR_Meryem_ACHEMLAL.pdf"
                  >
                    Download CV (FR)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
