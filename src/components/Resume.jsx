import React from "react";

const Resume = () => {
  return (
    <section className="portfolio-section portfolio-no-pb" id="resume-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center portfolio-animate">
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
            <p>
              Summary of my academic background, encompassing university degrees
              and qualifications.
            </p>
          </div>
        </div>
        <div className="row col--eq-height">
          <div className="col-md-6  portfolio-animate">
            <div className="resume-wrap">
              <span className="date">2018-2019</span>
              <h2>Digital Architect Expert</h2>
              <span className="position">Digital School Of Paris Paris</span>
              <p className="mt-4">Master's degree - 2</p>
            </div>
          </div>
          <div className="col-md-6  portfolio-animate">
            <div className="resume-wrap">
              <span className="date">2017-2018</span>
              <h2>Digital Project Manager </h2>
              <span className="position">Digital School Of Paris Paris</span>
              <p className="mt-4">Master's degree - 1</p>
            </div>
          </div>
          <div className="col-md-6  portfolio-animate">
            <div className="resume-wrap">
              <span className="date">2015-2016</span>
              <h2>Animator of Information Technology and the Internet</h2>
              <span className="position">IUT Jean Monnet Saint Etienne</span>
            </div>
          </div>
          <div className="col-md-6  portfolio-animate">
            <div className="resume-wrap">
              <span className="date">2010-2012</span>
              <h2>Technician Specialized in IT Development (ASP C#)</h2>
              <span className="position">
                I.S.T.A - Institute specializing in applied technologies
              </span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center portfolio-animate">
            <p>
              <a
                href="https://meryem-portfolio.vercel.app/EN--CV_2025-04-28_Meryem_ACHEMLAL.pdf"
                download="CV_Meryem_ACHEMLAL.pdf"
                className="btn btn-primary py-3 px-3 me-1"
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
    </section>
  );
};

export default Resume;
