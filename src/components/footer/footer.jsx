import "./footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- GET IN TOUCH --- */}
        <div className="footer-col">
          <h3>Get In Touch</h3>
          <p><FaMapMarkerAlt /> CBD, Harare, Zimbabwe</p>
          <p><FaPhoneAlt /> +263 781 981 247</p>
          <p><FaEnvelope /> supremepest25@gmail.com</p>
        </div>

        {/* --- OUR SERVICES --- */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Rats Control</li>
            <li>Cockroaches</li>
            <li>Residential Pest Control</li>
            <li>Commercial Pest Control</li>
          </ul>
        </div>

        {/* --- QUICK LINKS --- */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Our Services</li>
            <li>Terms & Condition</li>
          </ul>
        </div>

        {/* --- FOLLOW US --- */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* --- COPYRIGHT BAR --- */}
      <div className="footer-bottom">
        © <span className="brand">Royal Priesthood</span>, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
            