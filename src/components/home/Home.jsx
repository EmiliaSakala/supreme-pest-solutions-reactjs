import React, { useState, useEffect } from "react";
import "./home.css";

const slides = [
  {
    id: 1,
    title: "Supreme Pest Solutions",
    text: "The Home Of All Pest Solutions",
    img: "./banner1.jpg",
  },
  {
    id: 2,
    title: "Professional Pest Control",
    text: "Safe, Fast & Effective Pest Removal",
    img: "/banner2.jfif",
  },
  {
    id: 3,
    title: "We Protect Your Home & Business",
    text: "Your Safety Is Our Priority",
    img: "/2.jpg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollToServices = () => {
    const section = document.querySelector("#services");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="hero-container">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="overlay"></div>

          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <button className="hero-btn" onClick={scrollToServices}>
              Explore More
            </button>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <div className="arrow left" onClick={prevSlide}>❮</div>
      <div className="arrow right" onClick={nextSlide}>❯</div>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active-dot" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </header>
  );
}
