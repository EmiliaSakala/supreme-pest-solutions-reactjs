import react from "react";
import "./values.css";
import { FaHandshake, FaBullseye, FaUserShield } from "react-icons/fa";

const Values = () => {
  return (
    <section className="vm-section" id="vision">
      <div className="vm-container">
        
        {/* LEFT */}
        <div className="vm-left">
          <h2 className="vm-title">Vision, Mission, Core Values</h2>
          <p className="vm-subtitle">
            Get to know us through our vision, mission and core values
          </p>

          {/* Vision Item */}
          <div className="vm-item">
            <div className="vm-icon">
              <FaHandshake />
            </div>
            <div>
              <h3>Vision</h3>
              <p>
                Our vision is to provide peace of mind to our clients by
                protecting and preserving health and property through
                state-of-the-art maintenance services for residential,
                commercial, and industrial clients. We will continuously provide
                safe, effective and affordable environmental friendly services.
              </p>
            </div>
          </div>

          {/* Mission Item */}
          <div className="vm-item">
            <div className="vm-icon">
              <FaBullseye />
            </div>
            <div>
              <h3>Mission</h3>
              <p>
                We strive to provide pest control and fumigation services to our
                nation at large with the highest levels of integrity, customer
                service and safety. At Supreme Pest Solutions, we will protect
                the health and property of our clients and their families by
                using state-of-the-art pest solutions.
              </p>
            </div>
          </div>

          {/* Integrity Item */}
          <div className="vm-item">
            <div className="vm-icon">
              <FaUserShield />
            </div>
            <div>
              <h3>Integrity</h3>
              <p>
                We operate with honesty and integrity at all times, in all
                situations. We maintain transparency, professionalism, and
                accountability in everything we do.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="vm-right">
          <img
            src="/6.jpg"
            alt="Pest control worker"
            className="vm-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Values;
