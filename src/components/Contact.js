import React, { useState } from 'react';

import { validateEmail } from '../utils/helper';

function Contact() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'userName') {
          setUserName(inputValue);
        } else {
          setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or Name is invalid');
      return;
    }

    if (!setMessage(message)) {
        setErrorMessage(
          `Message is required`
        );
        return;
      }

    setEmail('');
    setUserName('');
    setMessage('');
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form className="form">
        
        <label htmlFor="contact-name">Your Name</label>  
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          id="contact-name"
          placeholder="Your Name"
        />
        
        <label htmlFor="contact-email">Your Email</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          id="contact-email"
          placeholder="Your Email"
        />
        
        <label htmlFor="contact-message">Message</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          id="contact-message"
          placeholder="Your Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;