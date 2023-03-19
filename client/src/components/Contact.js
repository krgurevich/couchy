import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="contact-form-container">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p><span className="info">Email:</span> info@couchy.com</p>
        <p><span className="info">Phone:</span> (555) 555-5555</p>
      </div>
      <form onSubmit={handleSubmit} className="ContactForm">
        <div className="form-group">
          <label htmlFor="name" className="ContactUsLabel">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="ContactUsInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            className="ContactUsInput"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            className="ContactUsInput"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="SendMsgBtn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
