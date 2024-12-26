import React from "react";
import "./TestimonialsSection.css";
import { useLanguage } from "../../LanguageContext";


const TestimonialsSection = () => {
    const { t } = useLanguage(); // Traslate
    return (
        <section className="testimonials-section">
        <h2>{t("TestimonialTitle")}</h2>
        <div className="logo-container">
            <img src="logo1.png" alt="Logo 1" className="company-logo" />
            <img src="logo2.png" alt="Logo 2" className="company-logo" />
            <img src="logo3.png" alt="Logo 3" className="company-logo" />
            <img src="logo4.png" alt="Logo 4" className="company-logo" />
            <img src="logo5.png" alt="Logo 5" className="company-logo" />
        </div>
        <div className="testimonials-container">
            <div className="testimonial-card">
            <img src="person1.jpg" alt="Person 1" className="profile-image" />
            <h3>Name Lastname</h3>
            <p>Director of The X Company</p>
            <blockquote>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore."
            </blockquote>
            </div>
            <div className="testimonial-card">
            <img src="person2.jpg" alt="Person 2" className="profile-image" />
            <h3>Name Lastname</h3>
            <p>Director of The X Company</p>
            <blockquote>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore."
            </blockquote>
            </div>
            <div className="testimonial-card">
            <img src="person3.jpg" alt="Person 3" className="profile-image" />
            <h3>Name Lastname</h3>
            <p>Director of The X Company</p>
            <blockquote>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore."
            </blockquote>
            </div>
        </div>
        </section>
  );
};

export default TestimonialsSection;
