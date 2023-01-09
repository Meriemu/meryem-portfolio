import React from "react";
import Calculator from '../images/calculatorTheme.png'
import AdviceGenerator from '../images/adviceGenerator.png'
import EcommerceApiNextjs from '../images/ecommerceApi.png'
import LvmhSlider from '../images/lvmhSlider.png'
import TikTakToe from '../images/tikTakToe.png'
import DarkModeReact from '../images/darkModeReact.png'

import GithubIcon from '../images/githubIcon.svg'
 
const Projects = () => {
  return (
    <div className="portfolio__projects">
      <h2 className="container"> Projects </h2>
      <div className="portfolio__projects--wrapper container">
        <div className="portfolio__projects--box">
          <div className="portfolio__projects--img">
            <a href="https://meriemu.github.io/calculatorTheme-Reactjs/" target="_blank" rel="noreferrer" >
              <img src={Calculator} alt="Calculator Theme" />
            </a>
          </div>
          <div className="portfolio__projects--titreBox">
            <p className="portfolio__projects--titre">Calculator Theme</p>
            <a href="https://github.com/Meriemu/calculatorTheme-Reactjs">
              <img src={GithubIcon} alt="" />
            </a>
          </div>
          <div className="portfolio__projects--tag">
            <span>html</span>
            <span>css</span>
            <span>Js</span>
            <span>React</span>
          </div>
        </div>
        <div className="portfolio__projects--box">
          <div className="portfolio__projects--img">
            <a href="https://meriemu.github.io/advice-generator-Reactjs/" target="_blank" rel="noreferrer" >
              <img src={AdviceGenerator} alt="Advice Generator API" />
            </a>
          </div>
          <div className="portfolio__projects--titreBox">
            <p className="portfolio__projects--titre">Advice Generator API</p>
            <a href="https://github.com/Meriemu/advice-generator-Reactjs">
              <img src={GithubIcon} alt="" />
            </a>
          </div>
          <div className="portfolio__projects--tag">
            <span>html</span>
            <span>css</span>
            <span>React</span>
          </div>
        </div>
        <div className="portfolio__projects--box">
          <div className="portfolio__projects--img">
            <a href="https://ecommerce-nextjs-ruddy.vercel.app/" target="_blank" rel="noreferrer" >
              <img src={EcommerceApiNextjs} alt="Ecommerce Api Nextjs" />
            </a>
          </div>
          <div className="portfolio__projects--titreBox">
            <p className="portfolio__projects--titre">Ecommerce Api Nextjs</p>
            <a href="https://github.com/Meriemu/ecommerce-Nextjs">
              <img src={GithubIcon} alt="" />
            </a>
          </div>
          <div className="portfolio__projects--tag">
            <span>html</span>
            <span>css</span>
            <span>React</span>
            <span>Nextjs</span>
          </div>
        </div>
        <div className="portfolio__projects--box">
          <div className="portfolio__projects--img">
            <a href="https://meriemu.github.io/TestCaseLvmh/" target="_blank" rel="noreferrer" >
              <img src={LvmhSlider} alt="Lvmh Slider" />
            </a>
          </div>
          <div className="portfolio__projects--titreBox">
            <p className="portfolio__projects--titre">Lvmh Slider</p>
            <a href="https://github.com/Meriemu/TestCaseLvmh">
              <img src={GithubIcon} alt="" />
            </a>
          </div>
          <div className="portfolio__projects--tag">
            <span>html</span>
            <span>css</span>
            <span>Js</span>
            <span>React</span>
          </div>
        </div>
        <div className="portfolio__projects--box">
          <div className="portfolio__projects--img">
            <a href="https://meriemu.github.io/tik-tak-toe-Reactjs/" target="_blank" rel="noreferrer" >
              <img src={TikTakToe} alt="TikTakToe" />
            </a>
          </div>
          <div className="portfolio__projects--titreBox">
            <p className="portfolio__projects--titre">Tik Tak Toe !</p>
            <a href="https://github.com/Meriemu/tik-tak-toe-Reactjs">
              <img src={GithubIcon} alt="" />
            </a>
          </div>
          <div className="portfolio__projects--tag">
            <span>html</span>
            <span>css</span>
            <span>Js</span>
            <span>React</span>
          </div>
        </div>
        <div className="portfolio__projects--box">
          <div className="portfolio__projects--img">
            <a href="https://meriemu.github.io/Dark-mode-Reactjs/" target="_blank" rel="noreferrer" >
              <img src={DarkModeReact} alt="DarkModeReact" />
            </a>
          </div>
          <div className="portfolio__projects--titreBox">
            <p className="portfolio__projects--titre">Dark/Light Mode 🌙🔆</p>
            <a href="https://github.com/Meriemu/Dark-mode-Reactjs">
              <img src={GithubIcon} alt="" />
            </a>
          </div>
          <div className="portfolio__projects--tag">
            <span>html</span>
            <span>css</span>
            <span>Js</span>
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
