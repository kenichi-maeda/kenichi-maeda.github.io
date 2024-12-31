import React from "react";
import "./../styles/About.css";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import headshot from "./../assets/images/headshot.jpg";

function About() {
  return (
    <section className="about-section">
      <div className="about-intro">
        <img
          src={headshot}
          className="about-profile-pic"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I am Kenichi Maeda, a passionate Software Engineer specializing in full-stack development
            and data science. I am currently studying at the University of Masschusetts Boston and plan to
            graduate in Spring 2025. I enjoy bringing ideas to life through code and innovative solutions.
            Specifically, I have a strong interest in machine learning and its applications in the medical field.
            In my free time, I enjoy watching baseball and playing the piano!
          </p>
        </div>
      </div>

      <WorkExperience />
      <Education />
    </section>
  );
}

export default About;
