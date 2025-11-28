import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./testimonial.css";

const testimonials = [
  {
    name: "Mr Ncube",
    role: "Butchery Owner",
    text:
      "Running a butchery means hygiene is everything. Rats were becoming a big issue, but these guys responded quickly and used safe methods. Our shop is now rodent-free, and we passed our health inspection with no problems. Highly recommend them for businesses.",
    mainImg: "/test2.jfif",
  },
  
   {
    name: "Chipo",
    role: "HR Manager",
    text:
      "We struggled with termite infestations damaging office furniture. The pest control team came after hours, worked quietly, and treated all affected areas. Since then, no more termintes and staff are happy the office feel clean again.",
    mainImg: "/test3.jfif",
  },

   {
    name: "Tendai",
    role: "Home Owner",
    text:
      "We had a terrible problem with cockroaches in our kitchen. After just one visit, the team sorted it completely. It's been three months now and still no sign of them. I really appreciate the follow-up check-ins as well",
    mainImg: "/test1.jfif",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const changeSlide = (newIndex) => {
    setFade(true);

    setTimeout(() => {
      setIndex(newIndex);
      setFade(false);
    }, 300); // matches fade animation speed
  };

  const nextTestimonial = () => {
    changeSlide((index + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    changeSlide((index - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(timer);
  }, [index]);

  const t = testimonials[index];

  return (
    <section className="test-section">
      <h2 className="test-title">
        What They Say About<br />Our Services
      </h2>

      {/* Floating Images */}
      <img src="/test1.jfif" className="float-img img1" alt="" />
      <img src="/test2.jfif" className="float-img img2" alt="" />
      <img src="/test3.jfif" className="float-img img3" alt="" />
      <img src="/test3.jfif" className="float-img img4" alt="" />
      <img src="/test2.jfif" className="float-img img5" alt="" />
      <img src="/test1.jfif" className="float-img img6" alt="" />

      <div className={`test-main ${fade ? "fade-out" : "fade-in"}`}>
        <img src={t.mainImg} alt={t.name} className="test-main-img" />

        <p className="test-text">{t.text}</p>

        <h3 className="test-name">{t.name}</h3>
        <p className="test-role">{t.role}</p>

        {/* Navigation */}
        <div className="test-nav">
          <button onClick={prevTestimonial}><FaChevronLeft /></button>
          <button onClick={nextTestimonial}><FaChevronRight /></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;