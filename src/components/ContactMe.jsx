import React, { useState } from "react";
import axios from 'axios';

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [message, setMsg] = useState("");

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
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = { name, email, message };
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:3000/meryem-portfolio-Reactjs/send",
  //     data
  //   })
  //     .then((response)=>{
  //       console.log(".....", response.data);
  //     // if (response.data.status === 'success') {
  //     //   alert("Message Sent.");
  //     //   resetForm()
  //     // } else if(response.data.status === 'fail') {
  //     //   alert("Message failed to send.")
  //     // }
  //   }).catch(function (error) {
  //     console.log("CATCH ERROR", error.response);
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
      // const data = { name, email, message };
      await axios.post('https://meriemu.github.io/meryem-portfolio-Reactjs/send', {
      name, email, message
     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
 };
  // const resetForm = () =>{
  //   setName('');
  //   setMail('');
  //   setMsg('');
  // }
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
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            value={message}
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
