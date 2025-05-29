import React from "react";
import "./../styles/Research.css";
import pub1 from "./../assets/images/mesh.png";
import pub2 from "./../assets/images/llmp.png";

function Research() {
  const publications = [
    {
      title: "Comparative Analysis of Mesh Intersection Repair Methods",
      conference: "Currently under review.",
      authors: "Kenichi Maeda, Daniel Haehn, Sumientra Rampersad",
      link: "https://kenichi-maeda.github.io/",
      image: pub1
    },
    {
      title: "Evaluating “Graphical Perception” with Multimodal Large Language Models",
      conference: "IEEE PacificVis 2025",
      authors: "Rami Huu Nguyen, Kenichi Maeda, Mahsa Geshvadi, Daniel Haehn",
      link: "https://arxiv.org/abs/2504.04221",
      image: pub2
    },
  ];

  const talks = [
    {
      title: "Evaluating “Graphical Perception” with Multimodal Large Language Models",
      event: "IEEE PacificVis 2025, Taiwan, 2025"
    },
  ];

  return (
    <div className="research-section">
      <h2>Research</h2>

      <div className="subsection">
        <h3>Publications</h3>
        {publications.map((pub, idx) => (
          <div key={idx} className="publication-item">
            <img src={pub.image} alt="Publication Icon" className="pub-icon" />
            <div className="pub-details">
              <strong>{pub.title}</strong><br />
              <em>{pub.conference}</em><br />
              {pub.authors}<br />
              <a href={pub.link} target="_blank" rel="noopener noreferrer">[View]</a>
            </div>
          </div>
        ))}
      </div>

      <div className="subsection">
        <h3>Talks</h3>
        <ul>
          {talks.map((talk, idx) => (
            <li key={idx}>
              <strong>{talk.title}</strong><br />
              <em>{talk.event}</em><br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Research;
