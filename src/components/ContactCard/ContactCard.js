import React from "react";
import "./ContactCard.css";
import Button from "../Buttons/Button";

const ContactCard = ({ title, email, phone, buttonText, buttonIcon, onButtonClick, variantButton = "primary" }) => {
  return (
    <div className="contact-card">
      <h2>{title}</h2>
      <p>
        <img src={"11-FAQ/Icons/mail.svg"} alt="email-icon" /> {email}
      </p>
      <p>
        <img src={"11-FAQ/Icons/call.svg"} alt="phone-icon" /> {phone}
      </p>
      {buttonText && (
        <Button
          className="contact-button" 
          variant={variantButton}
          onClick={onButtonClick}
        >
          {buttonText} {buttonIcon && <img src={buttonIcon} alt="button-icon" />}
        </Button>
      )}
    </div>
  );
};

export default ContactCard;
