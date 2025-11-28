import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Scroll Hide Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // hide when scrolling down past 120px
      if (currentScroll > lastScroll && currentScroll > 120) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className={`topbar ${hideNav ? "hide-elements" : ""}`}>
        <div className="left">
          <div className="itemContainer">
            <a href="#">
              <span>
                <FaPhoneAlt /> +263 781 981 247 | +263 775 089 200
              </span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="#" target="_blank">
              <span>
                <FaEnvelope /> supremepest25@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar ${hideNav ? "nav-hidden" : ""}`}>
        <div className="nav-logo">
          <img src="./logo resized.jpg" alt="Supreme Pest Solutions" />
        </div>

        {/* Nav Links */}
        <ul className={`${open ? "nav-links active" : "nav-links"} ${hideNav ? "hide-elements" : ""}`}>
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
        <div className={`nav-socials ${hideNav ? "hide-elements" : ""}`}>
          <a href="https://www.facebook.com/supremepest/"><span><FaFacebookF /></span></a>
          <a href="https://x.com/?lang=en"><span><FaTwitter /></span></a>
          <a href="https://www.linkedin.com/login"><span><FaLinkedinIn /></span></a>
          <a href="https://www.instagram.com/supremepest/"><span><FaInstagram /></span></a>
          <a href="mailto:supremepest25@gmail.com"><span><FaEnvelope /></span></a>
        </div>

        {/* Mobile Menu Button */}
        <div
  className="hamburger"
  onClick={() => {
    // ensure navbar is visible when opening the mobile menu
    setHideNav(false);
    setOpen(prev => !prev);
  }}
>
  <span></span><span></span><span></span>
</div>
      </nav>
    </>
  );
};

export default Navbar;
