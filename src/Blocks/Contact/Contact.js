import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aiuiv83",
        "template_7fpr39b",
        e.target,
        "user_P1K5jvPdIBMQI33nJDv36"
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
    <div className="contact" id="contactLink">
      <div className="textcontainer-about">
        <h1 className="header-about">About</h1>
        <p className="text-about">
          I'm a <b>frontend developer</b>, <b>UX/UI designer</b> and{" "}
          <b>graphic designer</b> based in Jämtland, northern Sweden. With a
          background in graphic design and packaging development, I bring both
          creativity and structure to digital projects.
          <br />
          <br />
          I’m passionate about problem solving and have a sharp eye for detail,
          usability, and visual design. I have solid experience using tools like
          Figma, XD, Illustrator, InDesign, Photoshop, and Premiere Pro — from
          early concepts to polished delivery, always with the user in focus. In
          addition to design, I have strong technical skills in HTML5, CSS3,
          JavaScript, and Vue. I work confidently with Git for version control
          and constantly strive to grow and improve with every product I help
          build.
          <br />
          <br />
          When I’m not coding or designing, you’ll find me outdoors — hiking in
          the mountains, walking through forests, or by the sea — always looking
          for new places to explore with friends and family.
        </p>
      </div>

      <div className="imagebanner-testdiv"></div>

      <div className="form-text-container">
        <div className="text-container-contact">
          <h1 className="contact-header">Contact</h1>
          <p className="contact-textinfo">
            If you find me interesting or have questions, <br />
            don’t hesitate to use the form.
          </p>
        </div>

        <div className="form-container">
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="all-inputs">
              <div className="name-input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="email-input">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="subject-input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="message-input">
                <textarea
                  className="form-control form-control-message"
                  cols="30"
                  rows="11"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>
              <input
                type="submit"
                className="btn-submit"
                value="Send message"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
