import React from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs () {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_96k3z6s', 'template_mxoz24h', e.target, 'z3BnFbVYtxhF9rZhh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
        <div id='container'>
            
            <div className="card text-center">
                <div id="cardBody" className="card-body">
    <h5 className="card-title">Please feel free to send me an Email!</h5>
    <p className="card-text">Let me know what it's about.  Please include your name and email address.</p>
    <p> Then, just write me quick message.  Hit send, and I'll get right back to you!</p>
            </div>
            <form id="form" onSubmit={sendEmail}>
                <label>Subject</label>
                <input id="subject" type="text" name="subject" />
                <label>Name</label>
                <input type="text" name="Name" />
                <label>Email</label>
                <input type="email" name="Email" />
                <label>Message</label>
                <textarea name="Message" />
                <input type="submit" value="Send" />
            
            </form>
            </div>
        </div>
  );
};