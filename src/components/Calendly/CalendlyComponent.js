import React from "react";
import { useLanguage } from "../../LanguageContext";
import "./CalendlyComponent.css";

const CalendlyComponent = () => {
  const { language } = useLanguage();
  const calendlyLink =
    language === "es"
      ? "https://calendly.com/d/cmr2-3w8-5y3/reunion-virtual"
      : "https://calendly.com/d/cnf5-gpf-p86/virtual-meeting";

  return (
    <div className="calendly-container">
      <iframe
        src={calendlyLink}
        width="100%"
        height="700"
        frameBorder="0"
        title="Calendly Scheduling"
        allow="autoplay; fullscreen"
      />
    </div>
  );
};

export default CalendlyComponent;
