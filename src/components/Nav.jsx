import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="portfolio-navbar portfolio-navbar-light site-navbar-target"
      id="portfolio-navbar"
    >
      <div className="container">
        <Navbar.Brand href="#">Meryem</Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-nav" />
        <Navbar.Collapse id="portfolio-nav">
          <Nav className="ml-auto nav">
            {/* <li className="nav-item">
              <Nav.Link href="#home-section" className="nav-link">
                <span>Home</span>
              </Nav.Link>
            </li> */}
            <li className="nav-item">
              <Nav.Link href="#about-section">
                <span>About</span>
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#resume-section">
                <span>Resume</span>
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#skills-section">
                <span>Skills</span>
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#projects-section">
                <span>Projects</span>
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#contact-section">
                <span>Contact</span>
              </Nav.Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
