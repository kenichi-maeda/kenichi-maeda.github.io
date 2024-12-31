import React from "react";
import "./../styles/Footer.css";

function Footer({ setActiveTab }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Kenichi Maeda. All rights reserved.</p>
        <div className="footer-links">
          {/* Update the activeTab to "Contact" when this link is clicked */}
          <button className="footer-button"  onClick={() => setActiveTab("Contact")}>Contact</button>
          <a href="https://www.facebook.com/kenichi.maeda.1422/" aria-label="FaceBook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/kenichi-maeda/" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/kenichi-maeda" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
