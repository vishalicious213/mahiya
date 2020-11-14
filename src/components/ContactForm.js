import React, { useState } from 'react';
import '../styles/contact-form.css';

function ContactForm() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });

  const handleChange = event => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(contact.name);
    console.log(contact.email);
    console.log(contact.message);
    setContact({ name: '', email: '', message: '' });
  };

  return (
    <div id='contact-form'>
      {console.log(contact)}
      <form onSubmit={event => handleSubmit(event)}>

        <input
        type="text"
        name="name"
        value={contact.name}
        placeholder='name'
        onChange={event => handleChange(event)}
        />

        <input
        type="email"
        name="email"
        value={contact.email}
        placeholder='email'
        onChange={event => handleChange(event)}
        />

        <textarea
        name="message"
        value={contact.message}
        placeholder='message'
        onChange={event => handleChange(event)}
        />

        <button>Send</button>
      </form>
    </div>
  );
}

export default ContactForm;