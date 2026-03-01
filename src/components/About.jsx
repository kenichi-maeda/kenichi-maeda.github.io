import React from "react";
import "./../styles/About.css";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import News from "./News"; 
import headshot from "./../assets/images/headshot.jpg";

function About() {
  return (
    <section className="about-section">
      <div className="about-intro">
        <img
          src={headshot}
          alt="Headshot of [Your Name]"
          className="about-profile-pic"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! My name is Kenichi Maeda. I’m interested in machine learning, robotics, and data visualization, 
            and I enjoy building intelligent systems that bridge data and real-world applications. I earned my B.S. in 
            Computer Science from the University of Massachusetts Boston and am currently pursuing my M.S. at Brown University, 
            where I continue to deepen my interest in artificial intelligence and robotics.
            Outside of my academic work, I enjoy watching baseball and playing the piano.
          </p>
        </div>
      </div>

      <WorkExperience />
      <Education />
      <News /> 
    </section>
  );
}

export default About;
