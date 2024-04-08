import React from "react";
import Calculator from "../images/calculatorTheme.png";
import AdviceGenerator from "../images/adviceGenerator.png";
import EcommerceApiNextjs from "../images/ecommerceApi.png";
import LvmhSlider from "../images/lvmhSlider.png";
import TikTakToe from "../images/tikTakToe.png";
import DarkModeReact from "../images/darkModeReact.png";

import GithubIcon from "../images/githubIcon.svg";
const Projects = () => {
  return (
    <section
      className="portfolio-section portfolio-project"
      id="projects-section"
    >
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center portfolio-animate">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Projects</h2>
            <p>Explore a diverse range of innovative projects.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              className="project img portfolio-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(" + Calculator + ")" }}
            >
              <div className="overlay"></div>
              <div className="portfolio__Projects--titreBox text text-center p-4">
                <h3>
                  <a href="https://meriemu.github.io/calculatorTheme-Reactjs/">
                    Calculator Theme
                  </a>
                </h3>
                <div className="portfolio__projects--tag">
                  <span>html /</span>
                  <span>css /</span>
                  <span>Js /</span>
                  <span>React</span>
                </div>
                <a
                  href="https://github.com/Meriemu/calculatorTheme-Reactjs"
                  className="portfolio__Projects--github"
                >
                  <img src={GithubIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="project img portfolio-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(" + AdviceGenerator + ")" }}
            >
              <div className="overlay"></div>
              <div className="portfolio__Projects--titreBox text text-center p-4">
                <h3>
                  <a href="https://meriemu.github.io/advice-generator-Reactjs/">
                    Advice Generator API
                  </a>
                </h3>
                <div className="portfolio__projects--tag">
                  <span>html /</span>
                  <span>css /</span>
                  <span>React</span>
                </div>
                <a
                  href="https://github.com/Meriemu/advice-generator-Reactjs"
                  className="portfolio__Projects--github"
                >
                  <img src={GithubIcon} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div
              className="project img portfolio-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(" + EcommerceApiNextjs + ")" }}
            >
              <div className="overlay"></div>
              <div className="portfolio__Projects--titreBox text text-center p-4">
                <h3>
                  <a href="https://ecommerce-nextjs-ruddy.vercel.app/">
                    Ecommerce Api Nextjs
                  </a>
                </h3>
                <div className="portfolio__projects--tag">
                  <span>html /</span>
                  <span>css /</span>
                  <span>React /</span>
                  <span>Nextjs</span>
                </div>
                <a
                  href="https://github.com/Meriemu/ecommerce-Nextjs"
                  className="portfolio__Projects--github"
                >
                  <img src={GithubIcon} alt="" />
                </a>
              </div>
            </div>

            <div
              className="project img portfolio-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(" + LvmhSlider + ")" }}
            >
              <div className="overlay"></div>
              <div className="portfolio__Projects--titreBox text text-center p-4">
                <h3>
                  <a href="https://meriemu.github.io/TestCaseLvmh/">
                    Lvmh Slider
                  </a>
                </h3>
                <div className="portfolio__projects--tag">
                  <span>html /</span>
                  <span>css /</span>
                  <span>Js /</span>
                  <span>React</span>
                </div>
                <a
                  href="https://github.com/Meriemu/TestCaseLvmh"
                  className="portfolio__Projects--github"
                >
                  <img src={GithubIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="project img portfolio-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: "url(" + TikTakToe + ")" }}
                >
                  <div className="overlay"></div>
                  <div className="portfolio__Projects--titreBox text text-center p-4">
                    <h3>
                      <a href="https://meriemu.github.io/tik-tak-toe-Reactjs/">
                        Tik Tak Toe !
                      </a>
                    </h3>
                    <div className="portfolio__projects--tag">
                      <span>html /</span>
                      <span>css /</span>
                      <span>Js /</span>
                      <span>React</span>
                    </div>
                    <a
                      href="https://github.com/Meriemu/tik-tak-toe-Reactjs"
                      className="portfolio__Projects--github"
                    >
                      <img src={GithubIcon} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div
                  className="project img portfolio-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: "url(" + DarkModeReact + ")" }}
                >
                  <div className="overlay"></div>
                  <div className="portfolio__Projects--titreBox text text-center p-4">
                    <h3>
                      <a href="https://meriemu.github.io/Dark-mode-Reactjs/">
                        Dark/Light Mode 🌙🔆
                      </a>
                    </h3>
                    <div className="portfolio__projects--tag">
                      <span>html /</span>
                      <span>css /</span>
                      <span>Js /</span>
                      <span>React</span>
                    </div>
                    <a
                      href="https://github.com/Meriemu/Dark-mode-Reactjs"
                      className="portfolio__Projects--github"
                    >
                      <img src={GithubIcon} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
