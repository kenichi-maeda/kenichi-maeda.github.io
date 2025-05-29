import React from "react";
import "./../styles/News.css";

function News() {
  const news = [
    {
      date: "04/24/2025",
      content: (
        <>
          I gave an oral presentation at IEEE PacificVis 2025 in Taiwan.
        </>
      ),
    },
    {
      date: "02/08/2025",
      content: (
        <>
          Our paper <em>“Evaluating Graphical Perception with Multimodal LLMs”</em> was accepted to IEEE PacificVis 2025.
        </>
      ),

    }
  ];

  return (
    <div className="news-section">
      <h2>Recent News</h2>
      <ul>
        {news.map((item, idx) => (
          <li key={idx}>
            <strong>{item.date}</strong> – {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;