import React from "react";
import "./services.css";
import { FaTools, FaBug, FaFan } from "react-icons/fa";

const data = [
  {
    title: "Rats Control",
    img: "/images/rats.jpg",
    icon: <FaTools />
  },
  {
    title: "Cockroaches",
    img: "/images/cockroaches.jpg",
    icon: <FaBug />
  },
  {
    title: "Residential Pest Control",
    img: "/images/residential-pest.jpg",
    icon: <FaFan />
  },
  {
    title: "Office Fumigation",
    img: "/images/office.jpg",
    icon: <FaTools />
  },
  {
    title: "Termites Control",
    img: "/images/termites.jpg",
    icon: <FaBug />
  },
  {
    title: "Commercial Pest Control",
    img: "/images/commercial.jpg",
    icon: <FaFan />
  }
];

const Services = () => {
  return (
    <section className="spec-section">
      <h2 className="spec-title">What We Specialize in</h2>

      <div className="spec-grid">
        {data.map((item, index) => (
          <div className="spec-card" key={index}>
            <img src={item.img} alt={item.title} className="spec-img" />

            <div className="spec-info">
              <div className="spec-icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
