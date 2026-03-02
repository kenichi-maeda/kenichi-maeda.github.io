import React from "react";
import "./../styles/Projects.css";
import bostonSafetyImage from "./../assets/images/boston_safety.jpg";
import riptaImage from "./../assets/images/RIPTA_long.png";
import circleImage from "./../assets/images/circle.png";
import roadGraphPlusImage from "./../assets/images/RoadGraphPlus.png";


function Projects() {
  const projects = [
    {
      image: roadGraphPlusImage,
      title: "RoadGraphPlus",
      description:
        "Used CNNs and GNNs to predict road graphs from satellite images.",
      link: "https://github.com/kenichi-maeda/RoadGraphPlus",
    },
    {
      image: bostonSafetyImage,
      title: "Decoding Boston Safety",
      description:
        "Analyzed and visualized safety data in Boston using public datasets provided by the City of Boston, leveraging D3.js for visualization.",
      link: "https://kenichi-maeda.github.io/cs617/final_project/",
    },
    {
      image: riptaImage,
      title: "RIPTA T",
      description:
        "Built a transit app for RIPTA to help riders navigate routes and trips.",
      link: "https://github.com/kenichi-maeda/RIPTA_T",
    },
    {
      image: circleImage,
      title: "Geometric Circle Prediction",
      description:
        "Designed and implemented a deep learning model to predict parameters of four circles formed by five random points on a 2D plane.",
      link: "https://github.com/kenichi-maeda/Circle",
    },
  ];

  return (
    <section className="projects-section">
      <h2>Personal Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <img
              src={proj.image}
              alt={proj.title}
              className="project-image"
            />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

/**
import bankingImage from "./../assets/images/online_banking.jpg";
import gafamImage from "./../assets/images/gafam.jpg";
import bostonWeatherImage from "./../assets/images/boston_weather.jpg";
import mathImage from "./../assets/images/Math.jpg";
import currencyImage from "./../assets/images/currency.jpg";
    {
      image: bankingImage,
      title: "Online-Banking-System",
      description:
        "Implemented a simple online banking system using Python.",
      link: "https://github.com/kenichi-maeda/Online-Banking-System",
    },
    {
      image: gafamImage,
      title: "GAFAM-stock-prices-app",
      description:
        "Implemented an app that displays the stock prices of GAFAM (Google, Amazon, Facebook, Apple, and Microsoft) using yfinance and streamlit.",
      link: "https://github.com/kenichi-maeda/GAFAM-stocks-prices-app",
    },
    {
      image: bostonWeatherImage,
      title: "Boston Weather App",
      description:
        "Implemented a python app that displays the current weather in Boston using tkinter. Utilized the OpenWatherMap API to get weather information.",
      link: "https://github.com/kenichi-maeda/Boston-Weather-App",
    },
     {
      image: mathImage,
      title: "Math Calculator",
      description:
        "Simple calculator with tkinter using Python.",
      link: "https://github.com/kenichi-maeda/Calculator",
    },
    {
      image: currencyImage,
      title: "Currency Converter",
      description:
        "Implemented a currency converter app supporting currencies from more than 100 countries using tkinter.",
      link: "https://github.com/kenichi-maeda/Currency-Converter",
    },

 */
