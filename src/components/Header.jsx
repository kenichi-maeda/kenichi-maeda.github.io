import React from "react";
import "./../styles/Header.css";

function Header({ activeTab, setActiveTab }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title">
          <h1>Kenichi Maeda</h1>
          <p>Software Developer</p>
        </div>
        <nav className="nav-tabs">
          <button
            className={activeTab === "About" ? "active" : ""}
            onClick={() => setActiveTab("About")}
          >
            About
          </button>
          <button
            className={activeTab === "Projects" ? "active" : ""}
            onClick={() => setActiveTab("Projects")}
          >
            Projects
          </button>
          <button
            className={activeTab === "Contact" ? "active" : ""}
            onClick={() => setActiveTab("Contact")}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
