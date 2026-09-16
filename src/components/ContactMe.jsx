import React, {useState} from "react";
import axios from "axios";
import Enveloppe from "../images/enveloppe_1.jpeg";
import config from "../config";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${config.apiUrl}/send`, {
        name,
        email,
        message,
      });

      if (response.data.status === "success") {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSuccess(false), 4000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
    } finally {
      setLoading(false);
    }
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
            <p>Get in touch to discuss projects or opportunities.</p>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5 justify-content-center">
          <div className="col-md-6 col-lg-3 d-flex portfolio-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="contact-icon icon d-flex align-items-center justify-content-center">
                <span className="icon-phone2" aria-hidden="true"></span>
              </div>
              <h3 className="mb-4">Contact Number</h3>
              <p>
                <a href="tel:+33619562721">+33 6 19 56 27 21</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex portfolio-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="contact-icon icon d-flex align-items-center justify-content-center">
                <span className="icon-paper-plane" aria-hidden="true"></span>
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p>
                <a href="mailto:me.achemlal@gmail.com">me.achemlal@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex portfolio-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="contact-icon icon d-flex align-items-center justify-content-center">
                <span className="icon-linkedin" aria-hidden="true"></span>
              </div>
              <h3 className="mb-4">LinkedIn</h3>
              <p>
                <a
                  href="https://www.linkedin.com/in/meryem-a-582b22a5/"
                  target="_blank"
                  rel="noopener noreferrer"
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
              onSubmit={handleSubmit}
              className="bg-light p-4 p-md-5 contact-form"
            >
              <div className="mb-3">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-control"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary py-3 px-5"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          <div className="col-md-6 d-flex">
            <div
              className="img"
              style={{backgroundImage: `url(${Enveloppe})`}}
              role="img"
              aria-label="Illustration d'enveloppe"
            ></div>
          </div>
        </div>
      </div>

      {success && (
        <div
          className="fade show contact-msgSent alert alert-success"
          role="alert"
        >
          Message sent successfully! 📨
        </div>
      )}
    </section>
  );
};

export default ContactMe;
