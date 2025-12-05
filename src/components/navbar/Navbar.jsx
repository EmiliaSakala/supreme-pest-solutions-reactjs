import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // lock body scroll while menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="top-left">
            <span className="top-item"><FaPhoneAlt /> +263 781 981 247 | +263 775 089 200</span>
            <span className="top-item"><FaEnvelope /> supremepest25@gmail.com</span>
          </div>
         
        </div>
      </div>

      {/* Main Navbar */}
      <header className="nav-wrap">
        <nav className="navbar">
          <div className="logo">
            <a href="/"><img src="./logo resized.jpg" alt="Supreme Pest Solutions" /></a>
          </div>

          {/* Desktop Links */}
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>

          {/* Desktop Socials */}
          <div className="nav-socials desktop-only">
            <a href="mailto:supremepest25@gmail.com"><FaEnvelope /></a>
            <a href="https://www.facebook.com/supremepest/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://x.com/?lang=en" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.linkedin.com/login" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/supremepest/" aria-label="Instagram"><FaInstagram /></a>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            ref={burgerRef}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu (slides down) */}
        <div
          className={`mobile-menu ${open ? "open" : ""}`}
          ref={menuRef}
          role="dialog"
          aria-modal="true"
        >
          <div className="mobile-inner">
            <ul className="mobile-links">
              <li><a onClick={() => setOpen(false)} href="/">Home</a></li>
              <li><a onClick={() => setOpen(false)} href="/about">About Us</a></li>
              <li><a onClick={() => setOpen(false)} href="/services">Our Services</a></li>
              <li className="mobile-dropdown">
                <details>
                  <summary>Explore</summary>
                  <ul>
                    <li><a onClick={() => setOpen(false)} href="/faqs">FAQs</a></li>
                    <li><a onClick={() => setOpen(false)} href="/pricing">Pricing</a></li>
                  </ul>
                </details>
              </li>
              <li><a onClick={() => setOpen(false)} href="/contact">Contact Us</a></li>
            </ul>

            <div className="mobile-socials">
              <a href="https://www.facebook.com/supremepest/" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://x.com/?lang=en" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.linkedin.com/login" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/supremepest/" aria-label="Instagram"><FaInstagram /></a>
              <a href="mailto:supremepest25@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
