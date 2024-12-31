import React from "react";
import "./../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <p>
        Interested in working together or have any questions? Feel free to
        reach out!
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <strong>Email:</strong> kenichi.maeda121@gmail.com
        </div>
        <div className="contact-item">
          <strong>Phone:</strong> +1 (617) 959-9448
        </div>
        <div className="contact-item">
          <strong>Location:</strong> Boston, MA
        </div>
      </div>
    </section>
  );
}

export default Contact;
