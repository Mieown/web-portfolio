import React from 'react';
import './Contactpage.css';
import emailjs from "emailjs-com";


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_aiuiv83', 'template_7fpr39b', e.target, 'user_P1K5jvPdIBMQI33nJDv36')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
      <div className="Contactpage">
      <div className="Form-text-container">
        <div className="Text-container-contact">
        <h1 className="Contact-header">Contact me</h1>
        <p className="Contact-textinfo">If you find me interesting or have questions, <br />don't be afraid to contact me.</p>
        </div>

        <div className="Form-container">
        <form className="Contact-form" onSubmit={sendEmail}>
            <div className="All-inputs">
                <div className="Name-input">
                    <input type="text" className="Form-control" placeholder="Name" name="name" />
                </div>
                <div className="Email-input">
                    <input type="email" className="Form-control" placeholder="Email" name="email" />
                </div>
                <div className="Subject-input">
                <input type="text" className="Form-control" placeholder="Subject" name="subject" />
                </div>
                <div className="Message-input">
                <textarea className="Form-control" cols="30" rows="10" placeholder="Message" name="message"></textarea>
                </div>
                <input type="submit" className="Btn-submit" value="Send message"></input>
            </div>
        </form>
        </div>
      </div>
      </div>
    );
  }