import React from "react";
import Calculator from "../images/calculatorTheme.png";
import AdviceGenerator from "../images/adviceGenerator.png";
import EcommerceApiNextjs from "../images/ecommerceApi.png";
import reactiveCreditCard from "../images/reactive-creditCard.png";
import TikTakToe from "../images/tikTakToe.png";
import DarkModeReact from "../images/darkModeReact.png";
import Weather from "../images/Weather.png";
import ConvertToBTC from "../images/convertToBTC.png";
import DetectFeeling from "../images/detectFeelings.png";
import RNTemperatureConverterPreview from "../images/rnTemperatureConverter.png";
import GithubIcon from "../images/githubIcon.svg";

import "../styles/projects.scss";

const projectsList = [
  {
    id: 1,
    title: "Ecommerce Next.js API",
    image: EcommerceApiNextjs,
    demoUrl: "https://ecommerce-nextjs-ruddy.vercel.app/",
    githubUrl: "https://github.com/Meriemu/ecommerce-Nextjs",
    tags: ["Next.js", "React", "API", "CSS3"],
    featured: true,
  },
  {
    id: 2,
    title: "Detect Feelings (AI)",
    image: DetectFeeling,
    demoUrl: "https://ai-feeling-reactjs.vercel.app/",
    githubUrl: "https://github.com/Meriemu/AI-Feeling-Reactjs",
    tags: ["React", "AI", "SASS", "API"],
    featured: true,
  },
  {
    id: 3,
    title: "RN Temperature Converter",
    image: RNTemperatureConverterPreview,
    demoUrl: "https://rn-temperature-converter--rvjpbvtjyp.expo.app",
    githubUrl: "https://github.com/Meriemu/RN-temperature-converter",
    tags: ["React Native", "Expo", "TypeScript"],
    featured: false,
  },
  {
    id: 4,
    title: "Calculator Theme",
    image: Calculator,
    demoUrl: "https://meriemu.github.io/calculatorTheme-Reactjs/",
    githubUrl: "https://github.com/Meriemu/calculatorTheme-Reactjs",
    tags: ["React", "JavaScript", "CSS"],
    featured: false,
  },
  {
    id: 5,
    title: "Advice Generator API",
    image: AdviceGenerator,
    demoUrl: "https://meriemu.github.io/advice-generator-Reactjs/",
    githubUrl: "https://github.com/Meriemu/advice-generator-Reactjs",
    tags: ["React", "REST API", "CSS3"],
    featured: false,
  },
  {
    id: 6,
    title: "Reactive Credit Card",
    image: reactiveCreditCard,
    demoUrl: "https://meriemu.github.io/Reactive-Card-Reactjs/",
    githubUrl: "https://github.com/Meriemu/Reactive-Card-Reactjs",
    tags: ["React", "JavaScript", "UI/UX"],
    featured: false,
  },
  {
    id: 7,
    title: "BTC To EURO (AI)",
    image: ConvertToBTC,
    demoUrl: "https://meriemu.github.io/Convert-bitcoin-to-euro-Reactjs/",
    githubUrl: "https://github.com/Meriemu/Convert-bitcoin-to-euro-Reactjs",
    tags: ["React", "AI", "Crypto"],
    featured: false,
  },
  {
    id: 8,
    title: "Weather App",
    image: Weather,
    demoUrl: "https://meriemu.github.io/Weather/",
    githubUrl: "https://github.com/Meriemu/Weather",
    tags: ["React", "Weather API", "CSS3"],
    featured: false,
  },
  {
    id: 9,
    title: "Dark / Light Mode",
    image: DarkModeReact,
    demoUrl: "https://meriemu.github.io/Dark-mode-Reactjs/",
    githubUrl: "https://github.com/Meriemu/Dark-mode-Reactjs",
    tags: ["React", "Hooks", "Theme Switch"],
    featured: false,
  },
  {
    id: 10,
    title: "Tik Tak Toe !",
    image: TikTakToe,
    demoUrl: "https://meriemu.github.io/tik-tak-toe-Reactjs/",
    githubUrl: "https://github.com/Meriemu/tik-tak-toe-Reactjs",
    tags: ["React", "Game Logic", "CSS3"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      className="portfolio-section projects-section-cyber"
      id="projects-section"
    >
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center portfolio-animate">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Featured Projects</h2>
            <p>
              A selection of my React, Next.js, Mobile apps, and interactive web
              projects.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {projectsList.map((project) => (
            <div
              className={
                project.featured ? "col-lg-6 col-md-12" : "col-lg-4 col-md-6"
              }
              key={project.id}
            >
              <div className="project-cyber-card">
                <div className="card-media">
                  <img src={project.image} alt={`${project.title} preview`} />
                  <div className="card-media-overlay"></div>
                </div>

                <div className="card-body-content">
                  <div className="tags-wrapper">
                    {project.tags.map((tag, idx) => (
                      <span className="cyber-tag" key={idx}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <div className="actions-wrapper">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyber-demo"
                    >
                      <span>Live Demo</span>
                      <i
                        className="icon-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyber-github"
                      aria-label={`GitHub source code for ${project.title}`}
                    >
                      <img src={GithubIcon} alt="" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
