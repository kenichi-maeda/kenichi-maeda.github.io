import React from "react";
import "./../styles/Education.css";
import umbLogo from "./../assets/images/umb_logo.png";

function Education() {
  const schools = [
    {
      logo: umbLogo,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Massachusetts Boston",
      location: "Boston, MA",
      dates: "2021 - 2025",
      description:
        "Focused on artificial intelligence and data visualization. Conducted research on large language models (LLMs) and medical image processing.",
    },
  ];

  return (
    <div className="education-section">
      <h2>Education</h2>
      {schools.map((school, idx) => (
        <div key={idx} className="education-item">
          <img
            src={school.logo}
            alt={`${school.institution} Logo`}
            className="education-logo"
          />
          <div className="education-details">
            <h3>{school.degree}</h3>
            <p className="education-institution">{school.institution}</p>
            <p className="education-location">{school.location}</p>
            <p className="education-dates">{school.dates}</p>
            <p>{school.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
