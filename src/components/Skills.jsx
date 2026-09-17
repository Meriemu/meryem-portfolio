import React from "react";
import "../styles/skills.scss";

const skillsData = [
  {
    name: "HTML5",
    category: "Frontend",
    level: "Expert",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3 / SASS",
    category: "Styling",
    level: "Expert",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    name: "JavaScript",
    category: "Language",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    category: "Framework",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    category: "Language",
    level: "Hands-on",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Bootstrap / Tailwind",
    category: "UI Kits",
    level: "Expert",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Basics",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Web Accessibility (RGAA / WCAG)",
    category: "Standards",
    level: "UI Accessibility",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
  },
  {
    name: "Git / GitHub / GitLab",
    category: "DevOps",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma / Photoshop",
    category: "Design",
    level: "Proficient",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const Skills = () => {
  return (
    <section
      className="portfolio-section skills-section-modern"
      id="skills-section"
    >
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center portfolio-animate">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">Tech Stack & Tools</h2>
            <p>
              My technical ecosystem focused on performance, web integration,
              and accessibility.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {skillsData.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="skill-card-cyber">
                <div className="glow-effect"></div>
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <h3 className="skill-title">{skill.name}</h3>
                <div className="skill-badges">
                  <span className="badge-cat">{skill.category}</span>
                  <span className="badge-level">{skill.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
