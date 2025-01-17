import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import "./IndustrialMetricsIntro.css";

const IndustrialMetricsIntro = ({
  breadcrumbLinks,
  title,
  description,
  buttonText,
  buttonIcon,
}) => {
  return (
    <div
      className="industrial-variables-container"
    >
      {/* Breadcrumb */}
      <div className="breadcrumb">
        {breadcrumbLinks.map((link, index) => (
          <React.Fragment key={index}>
            <Link to={link.to} className={`breadcrumb-link ${link.active ? "active" : ""}`}>
              {link.label}
            </Link>
            {index < breadcrumbLinks.length - 1 && (
              <img
                className="breadcrumb-separator"
                src="/00-Buttons, Dropdowns & Questions/arrow_forward_ios_white.svg"
                alt="separator"
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Content */}
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <Button>
          {buttonText}
          {buttonIcon && <img src={buttonIcon} alt="icon" />}
        </Button>
      </div>
    </div>
  );
};

export default IndustrialMetricsIntro;
