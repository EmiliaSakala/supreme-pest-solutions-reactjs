import React from "react";
import "./about.css";
import { FaTools, FaUserTie, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* LEFT CONTENT */}
        <div className="about-left">

          <h2 className="about-title">About Us</h2>

          <div className="about-icons">
            <div className="icon-box">
              <FaTools className="icon" />
              <h3>Expert Technicians</h3>
            </div>

            <div className="icon-box">
              <FaUserTie className="icon" />
              <h3>Trained and qualified surveyors</h3>
            </div>
          </div>

          <p className="about-text">
            Supreme Pest Solutions is a local pest control company that was
            founded in June 2019. The company has many years of experience and
            has extremely done well in industrial, commercial and household pest
            control. Our clientele ranges from financial sector, industrial
            sector, educational sector, manufacturing sector, governmental
            sectors, residential sectors, food processing sectors etc.
            <br /><br />
            We have remained on top because of unmatched service delivery,
            quality products and creating a pest-free environment through
            controlling all pests.
          </p>

          {/* CONTACT ROW */}
          <div className="contact-row">
            <div className="contact-box">
              <FaPhoneAlt className="contact-icon" />
              <p>+263 781 981 247</p>
            </div>

            <div className="contact-box">
              <FaEnvelope className="contact-icon" />
              <p>supremepest25@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="about-right">
          <div className="img-grid">
            <img
              src="/fumigation1.jpg"
              alt="technician"
              className="grid-img"
            />
            <img
              src="/fumigation2.jpeg"
              alt="pest control"
              className="grid-img"
            />
            <img
              src="/fumigation3.jpg"
              alt="pest control"
              className="grid-img"
            />
            <img
              src="/fumigation1.jpg"
              alt="technician"
              className="grid-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
