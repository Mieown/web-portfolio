import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
// import hellothere from '../../images/hellothere.jpg';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_aiuiv83',
        'template_7fpr39b',
        e.target,
        'user_P1K5jvPdIBMQI33nJDv36'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="Contact">

      <div className="textcontainer-about">
        <h1 className="header-about">About</h1>
        <p className="text-about">
        
        I’m a frontend developer and designer from Jämtland, in northern Sweden currently based in Stockholm. I'm in my second year of the Frontend program on Hyper Island. I have previously worked with graphic design and packaging development.
        <br />
        <br />
        I like problem solving and have a keen eye for details and beautiful designs. I am determination to always try to better myself with every project I work on. The main areas of my knowledge are HTML (5), CSS (3), JavaScript (native)
        and React. I regularly use version control system (GIT) to maintain my code.
        Based on the design part, the main areas of my knowledge are Illustrator, Indesign, Photoshop, Premiere Pro and Figma.
        <br />
        <br />
        When I'm not coding, you can find me out in the nature, either on a mountain, in the forest or by the sea. Always looking for new places to explore with my friends and family.

        </p>
      </div>


      <div className="Form-text-container">
        <div className="Text-container-contact">
          <h1 className="Contact-header">Contact</h1>
          <p className="Contact-textinfo">
            If you find me interesting or have questions, <br />
            don’t hesitate to use the form.
          </p>
        </div>

        <div className="Form-container">
          <form className="Contact-form" onSubmit={sendEmail}>
            <div className="All-inputs">
              <div className="Name-input">
                <input
                  type="text"
                  className="Form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="Email-input">
                <input
                  type="email"
                  className="Form-control"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="Subject-input">
                <input
                  type="text"
                  className="Form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="Message-input">
                <textarea
                  className="Form-control"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>
              <input
                type="submit"
                className="Btn-submit"
                value="Send message"
              ></input>
            </div>
          </form>
        </div>
    </div>
      {/* <div className="image-container-contact">
        <img className="hello-image" src={hellothere}/>
      </div> */}
    </div>
  );
}
