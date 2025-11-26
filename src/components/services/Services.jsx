import React from "react";
import "./services.css";
import { FaTools, FaBug, FaFan } from "react-icons/fa";

const data = [
  {
    title: "Rats Control",
    img: "/services1.jfif",
    icon: <FaTools />
  },
  {
    title: "Cockroaches",
    img: "/services2.jfif",
    icon: <FaBug />
  },
  {
    title: "Residential Pest Control",
    img: "/services3.jfif",
    icon: <FaFan />
  },
  {
    title: "Office Fumigation",
    img: "/banner1.jpg",
    icon: <FaTools />
  },
  {
    title: "Termites Control",
    img: "/banner2.jfif",
    icon: <FaBug />
  },
  {
    title: "Commercial Pest Control",
    img: "/services6.jfif",
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
