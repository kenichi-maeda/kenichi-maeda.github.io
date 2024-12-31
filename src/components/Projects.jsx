import React from "react";
import "./../styles/Projects.css";
import llmpImage from "./../assets/images/llmp.png";
import unetImage from "./../assets/images/unet.png";
import bostonSafetyImage from "./../assets/images/boston_safety.jpg";
import cancerImage from "./../assets/images/cancer.jpg";
import demoImage from "./../assets/images/3d-demo.gif";
import dowImage from "./../assets/images/dow.jpg";
import bankingImage from "./../assets/images/online_banking.jpg";
import gafamImage from "./../assets/images/gafam.jpg";
import bostonWeatherImage from "./../assets/images/boston_weather.jpg";
import stationImage from "./../assets/images/station.jpeg";
import mathImage from "./../assets/images/Math.jpg";
import currencyImage from "./../assets/images/currency.jpg";

function Projects() {
  const projects = [
    {
      image: llmpImage,
      title: "Evaluating ‘Graphical Perception’ with Multimodal LLMs",
      description:
        "Replicated the 1984 Cleveland and McGill experiment on human graphical perception, examining how accurately large language models (LLMs) can recognize simple graphical information.",
      link: "https://github.com/raminguyen/LLMP2?tab=readme-ov-file",
    },
    {
      image: unetImage,
      title: "UNet Implementation for Retinal Blood Vessel Segmentation",
      description:
        "Implemented a UNet model from scratch using PyTorch to achieve accurate segmentation of blood vessels in retinal fundus images.",
      link: "https://github.com/kenichi-maeda/UNet",
    },
    {
      image: bostonSafetyImage,
      title: "Decoding Boston Safety",
      description:
        "Analyzed and visualized safety data in Boston using public datasets provided by the City of Boston, leveraging D3.js for visualization.",
      link: "https://kenichi-maeda.github.io/cs617/final_project/",
    },
    {
      image: cancerImage,
      title: "Breast-Cancer-Diagnosis-Model",
      description:
        "Implemented an ANN classfication model to predict breasr cancer using Tensorflow and Keras.",
      link: "https://github.com/kenichi-maeda/Breast-Cancer-Diagnosis-Model",
    },
    {
      image: demoImage,
      title: "3D Shooting Game",
      description:
        "Created a game using Three.js that runs on any Web-connected devices.",
      link: "https://kenichi-maeda.github.io/CS460FinalProject/",
    },
    {
      image: dowImage,
      title: "Dow-Jones-Industrial-Average-Info",
      description:
        "Created an app that shows the list of the Dow Jones Industrial Average and its corresponding stock price data (e.g., volume, opening price).",
      link: "https://github.com/kenichi-maeda/Dow-Jones-Industrial-Average-Info",
    },
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
      image: stationImage,
      title: "MBTA Guide",
      description:
        "Implemented a program that displays the shortest route and time for a given two MBTA stations using the Dijkstra's Algorithm.",
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
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
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
