import React, { useState } from "react";
// import ";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="topbar">
        <div className="left">
                        <div className="itemContainer">
                            <a href="#">
                           <span><FaPhoneAlt /> +263 781 981 247 | +263 775 089 200</span> 
                           </a>
                        </div>
                        <div className="itemContainer">
                            <a href="#" target='_blank'>
                           <span><FaEnvelope /> supremepest25@gmail.com</span> 
                           </a>
                        </div>

                     </div>
       
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src="./logo resized.jpg" alt="Supreme Pest Solutions" />
        </div>

        <ul className={open ? "nav-links active" : "nav-links"}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Our Services</a></li>
          <li className="dropdown">
            <a href="#">Explore</a>
            <ul className="dropdown-menu">
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        {/* Social Icons */}
        <div className="nav-socials">
          <a href="https://www.facebook.com/supremepest/"><span><FaFacebookF /></span></a>
          <a href="https://x.com/?lang=en"><span><FaTwitter /></span></a>
          <a href="https://www.linkedin.com/login"><span><FaLinkedinIn /></span></a>
          <a href="https://www.instagram.com/supremepest/"><span><FaInstagram /></span></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=supremepest25@gmail.com" target="_blank"><span><FaEnvelope /></span></a>
        </div>

        {/* Mobile Menu Button */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
