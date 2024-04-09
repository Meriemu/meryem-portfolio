import React, { useState } from "react";
import axios from "axios";
import Enveloppe from "../images/enveloppe_2.jpeg";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [message, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setMail(event.target.value);
  };
  const onMessageChange = (event) => {
    setMsg(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = { name, email, message };
    await axios
      .post("http://localhost:3001/send", {
        name,
        email,
        message,
      })
      .then(function (response) {
        if (response.data.status === "success") {
          console.log(response);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section
      className="portfolio-section contact-section portfolio-no-pb"
      id="contact-section"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center portfolio-animate">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact me</h2>
            <p>Get in touch to discuss projects, or opportunities.</p>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5  justify-content-center">
          <div className="col-md-6 col-lg-3 d-flex portfolio-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="contact-icon icon d-flex align-items-center justify-content-center">
                <span className="icon-phone2"></span>
              </div>
              <h3 className="mb-4">Contact Number</h3>
              <p>
                <a href="tel://+33619562721">+33-619-56-27-21</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex portfolio-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="contact-icon icon d-flex align-items-center justify-content-center">
                <span className="icon-paper-plane"></span>
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=me.achemlal@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  me.achemlal@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex portfolio-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="contact-icon icon d-flex align-items-center justify-content-center">
                <span className="icon-linkedin"></span>
              </div>
              <h3 className="mb-4">LinkedIn</h3>
              <p>
                <a
                  href="https://www.linkedin.com/in/meryem-a-582b22a5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Meryem A.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="row no-gutters block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form
              action="#"
              className="bg-light p-4 p-md-5 contact-form"
              onSubmit={handleSubmit}
              method="POST"
            >
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={onNameChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={onEmailChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={message}
                  onChange={onMessageChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary py-3 px-5">
                Submit
              </button>
            </form>
          </div>

          <div className="col-md-6 d-flex">
            <div
              className="img"
              style={{ backgroundImage: "url(" + Enveloppe + " )" }}
            ></div>
          </div>
        </div>
      </div>

      {success && (
        <div className=" fade show contact-msgSent alert alert-success">
          Message sent ! 📨
        </div>
      )}
    </section>
  );
};

export default ContactMe;
