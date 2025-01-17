import React from "react";
import Button from "../../components/Buttons/Button";
import "./FeatureCard.css";

function FeatureCard({ imageSrc, title, description, buttonText, buttonIcon }) {
  return (
    <div className="feature-card">
      <img src={imageSrc} alt={title} className="feature-card-image" />
      <div className="feature-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Button>{buttonText}<img src={buttonIcon}/></Button> 
      </div>
    </div>
  );
}

export default FeatureCard;
