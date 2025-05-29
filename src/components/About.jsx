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
            Hello! My name is Kenichi Maeda. I am passionate about machine learning, particularly its applications in medical
            imaging and precision medicine. My interests also include data visualization, robotics, and data science. I received
            a Bachelor of Science in Computer Science from the University of Massachusetts Boston, and I am currently pursuing a Master
            of Science at Brown University. I enjoy bringing ideas to life through code and innovative solutions.
            In my free time, I enjoy watching baseball and playing piano!
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
