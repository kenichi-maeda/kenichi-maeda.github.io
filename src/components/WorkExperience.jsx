import React from "react";
import "./../styles/WorkExperience.css";
import rostockLogo from "./../assets/images/uni_rostock_logo.png";
import nasaLogo from "./../assets/images/NASA_logo.png";

function WorkExperience() {
  const experiences = [
    {
      logo: rostockLogo,
      title: "Research Intern",
      company: "Universität Rostock",
      location: "Rostock, Germany",
      dates: "Jun 2024 - Aug 2024",
      description: (
        <>
          Selected as a 2024 RISE Germany Scholar by the DAAD (German Academic Exchange Service), and contributed to the development of simulation software (
          <a
            href="https://github.com/SFB-ELAINE/OSS-DBSv2"
            target="_blank"
            rel="noopener noreferrer"
          >
            OSS-DBSv2
          </a>
          ) for deep brain stimulation.
        </>
      ),
    },
    {
      logo: nasaLogo,
      title: "Software Engineer Intern",
      company: "NASA Marshall Space Flight Center",
      location: "Huntsville, AL",
      dates: "Jun 2023 - Aug 2023",
      description:
        "Developed and analyzed a quadcopter control system using a vision-based sensor to navigate through a simulated orbital habitat.",
    },
  ];

  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="experience-item">
          <img
            src={exp.logo}
            alt={`${exp.company} Logo`}
            className="experience-logo"
          />
          <div className="experience-details">
            <h3>
              {exp.title} @ {exp.company}
            </h3>
            <p className="experience-location">{exp.location}</p>
            <p className="experience-dates">{exp.dates}</p>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
