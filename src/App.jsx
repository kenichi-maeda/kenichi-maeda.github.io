import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  // Track which tab is active
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="app">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Conditionally render based on the active tab */}
      {activeTab === "About" && <About />}
      {activeTab === "Projects" && <Projects />}
      {activeTab === "Contact" && <Contact />}

      {/* Pass setActiveTab to Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
