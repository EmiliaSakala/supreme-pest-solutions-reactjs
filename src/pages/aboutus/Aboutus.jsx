import React from "react";
import "./Aboutus.css";
import bannerImg from "/banner1.jpg"; 
import img1 from "/2.jpg";
import img2 from "/4.jpg";
import { FaTools, FaUserTie, FaShieldAlt, FaClock, FaQuoteLeft } from "react-icons/fa";

const Aboutpage = () => {
  return (
    <div className="about-page">

      {/* ---------------- Banner Section ---------------- */}
      <div className="about-banner">
        <div className="banner-overlay"></div>
        <h1>About Us</h1>
        <p>Home / Pages / <span> About </span></p>
      </div>

      {/* ---------------- Mission Vision Values ---------------- */}
      <section className="mvv-section">
        <h2>Our Mission, Vision & Values</h2>

        <div className="mvv-grid">
          <div className="mvv-card">
            <h3>Our Mission</h3>
            <p>
              To protect homes and businesses by offering safe, effective, and 
              professional pest control solutions delivered with integrity and excellence.
            </p>
          </div>

          <div className="mvv-card">
            <h3>Our Vision</h3>
            <p>
              To become Zimbabwe’s leading pest management company, known for
              innovation, customer satisfaction, and unmatched service quality.
            </p>
          </div>

          <div className="mvv-card">
            <h3>Our Values</h3>
            <p>
              Professionalism, Quality Service, Safety, Integrity, and Reliable Customer Care.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Why Choose Us ---------------- */}
      <section className="why-section">
        <h2>Why Choose Supreme Pest Solutions?</h2>

        <div className="why-grid">
          <div className="why-card">
            <FaTools />
            <h4>Expert Technicians</h4>
            <p>
              Highly trained specialists with years of experience in pest control.
            </p>
          </div>

          <div className="why-card">
            <FaUserTie />
            <h4>Professional Service</h4>
            <p>
              Friendly, skilled staff dedicated to delivering quality service.
            </p>
          </div>

          <div className="why-card">
            <FaShieldAlt />
            <h4>Safe & Effective Methods</h4>
            <p>
              We use certified, eco-friendly solutions safe for your family and pets.
            </p>
          </div>

          <div className="why-card">
            <FaClock />
            <h4>Fast Response</h4>
            <p>
              Same-day and emergency services available to solve your pest problems quickly.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Timeline ---------------- */}
      <section className="timeline-section">
        <h2>Our Journey</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span>2019</span>
            <p>Supreme Pest Solutions was founded in Harare, Zimbabwe.</p>
          </div>

          <div className="timeline-item">
            <span>2020</span>
            <p>Expanded services to commercial and industrial sectors.</p>
          </div>

          <div className="timeline-item">
            <span>2021</span>
            <p>Achieved 500+ successful pest control projects.</p>
          </div>

          <div className="timeline-item">
            <span>2024</span>
            <p>Recognized as a growing leader in safe, quality pest management.</p>
          </div>
        </div>
      </section>

      {/* ---------------- Team Section ---------------- */}
      <section className="team-section">
        <h2>Meet Our Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <img src="/team-1.jpg" alt="Team Member" />
            <h4>John M.</h4>
            <p>Lead Pest Technician</p>
          </div>

          <div className="team-card">
            <img src="/team-2.jpg" alt="Team Member" />
            <h4>Sarah K.</h4>
            <p>Senior Surveyor</p>
          </div>

          <div className="team-card">
            <img src="/team-3.jpg" alt="Team Member" />
            <h4>Daniel P.</h4>
            <p>Field Supervisor</p>
          </div>
        </div>
      </section>

      {/* ---------------- Testimonials Slider ---------------- */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>

        <div className="testimonial-slider">
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>
              “Professional, fast, and reliable! Supreme Pest Solutions solved our cockroach problem in one visit.”
            </p>
            <h4>— Tendai M.</h4>
          </div>

          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>
              “Excellent service. Friendly team and effective treatments. Highly recommended!”
            </p>
            <h4>— Tasha K.</h4>
          </div>

          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>
              “Affordable and professional. They explained everything clearly and delivered great results.”
            </p>
            <h4>— Brian P.</h4>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Aboutpage;
