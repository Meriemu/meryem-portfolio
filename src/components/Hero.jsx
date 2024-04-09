import React from "react";
import OwlCarousel from "react-owl-carousel";
import PhotoMeryem1 from "../images/personnage_meryem_2.png";
import PhotoMeryem2 from "../images/personnage_meryem_4.png";

const Hero = () => {
  const heroSlider = [
    {
      name: "Meryem Achemlal",
      job: "",
      img: PhotoMeryem1,
    },
    {
      name: "Front developer",
      job: "",
      img: PhotoMeryem2,
      city: "France",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: false,
    autoplay: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: false,
    autoplayHoverPause: false,
    items: 1,
    navText: [
      "<span className='ion-md-arrow-back'></span>",
      "<span className='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <section id="home-section" className="hero">
      <OwlCarousel
        id="customer-testimonoals"
        className="owl-carousel owl-theme home-slider"
        {...options}
      >
        {heroSlider.map((val, index) => {
          return (
            <div className="slider-item" key={index}>
              <div className="overlay"></div>
              <div className="container">
                <div
                  className="row d-md-flex no-gutters slider-text align-items-center justify-content-end"
                  data-scrollax-parent="true"
                >
                  <div className="one-third js-fullheight order-md-last img">
                    <img alt="" className="img-circle" src={val.img} />
                    <div className="overlay"></div>
                  </div>
                  <div
                    className="one-forth d-flex  align-items-center portfolio-animate"
                    data-scrollax=" properties: { translateY: '70%' }"
                  >
                    <div className="text">
                      <span className="subheading">Hello!</span>
                      <h1 className="mb-4 mt-3">
                        I'm
                        {index === 1 && " a "}
                        <span> {val.name}</span>
                        {index === 1 && " based in " + val.city}
                      </h1>
                      {index === 0 && (
                        <h2 className="mb-4">A Front-End developer</h2>
                      )}
                      <h2 className="mb-4">{val.job}</h2>
                      <p>
                        <a
                          href="#projects-section"
                          className="btn btn-white btn-outline-white py-3 px-4"
                        >
                          My works
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </OwlCarousel>
    </section>
  );
};

export default Hero;
