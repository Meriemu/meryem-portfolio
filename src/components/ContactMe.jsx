import React, { useState } from "react";
import axios from 'axios';

const ContactMe = () => {
  const [theName, setName] = useState("");
  const [theMail, setMail] = useState("");
  const [TheMsg, setMsg] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
    // console.log("---name", event.target.value);
  };
  const onEmailChange = (event) => {
    setMail(event.target.value);
    // console.log("---mail", event.target.value);
  };
  const onMessageChange = (event) => {
    setMsg(event.target.value);
    // console.log("---mng", event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { theName, theMail, TheMsg };
    axios.post( "http://localhost:3000/meryem-portfolio-Reactjs/send", data )
      .then((response)=>{
        console.log(response.data);
      // if (response.data.status === 'success') {
      //   alert("Message Sent.");
      //   resetForm()
      // } else if(response.data.status === 'fail') {
      //   alert("Message failed to send.")
      // }
    })
    console.log("hhh");
  };

  const resetForm = () =>{
    setName('');
    setMail('');
    setMsg('');
  }
  return (
    <div className="portfolio__contact">
      <form
        className="container"
        id="contact-form"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            value={theName}
            onChange={onNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={theMail}
            onChange={onEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            value={TheMsg}
            onChange={onMessageChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
