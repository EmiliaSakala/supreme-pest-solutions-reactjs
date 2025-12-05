import react from 'react';
import './contact.css';
import { FaMapLocation, FaPhone,  FaEnvelope } from 'react-icons/fa6';

export default function Contactpage() {
    return (
        <div className="contact-page">

            <div className="about-banner">
                <div className="banner-overlay"></div>
                <h1>Contact Us</h1>
                <p>Home / Pages / <span> Contact </span></p>
            </div>

            <section className="contact">
                <div className="location">
                    <FaMapLocation />
                    <h4>Visit Us</h4>
                    <p>123 CBD Harare, <br /> Zimbabwe</p>
                </div>

                <div className="phone">
                    <FaPhone />
                    <h4>Call Us</h4>
                    <p>+263 781 981 247 <br /> +263 775 089 200</p>
                </div>

                <div className="email">
                    <FaEnvelope />
                    <h4>Email Address</h4>
                    <p>supremepest25@gmail.com</p>
                </div>
            </section>
        </div>
);

}