import React from "react";
import { useLanguage } from "../../LanguageContext";
import "./BenefitsSections.css"; // Archivo CSS para estilos

const BenefitsSections = ({ variant = "default" }) => {
  const { t } = useLanguage();
  const data = variant === "alternative" ? t("alternativeBenefits") : t("benefits");

  return (
    <section id="benefits" className={`benefits-section ${variant}`}>
      <div className={`benefits-header ${variant}`}>
        <h4>{t("benefitsTitle")}</h4>
        <h2>{t("benefitsSubtitle")}</h2>
      </div>
      <div className={`benefits-container ${variant}`}>
        {data.map((benefit, index) => (
          <div key={index} className={`benefit-card ${variant}`}>
            <div className={`benefit-text-container ${variant}`}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
            <div className={`benefit-icon-container ${variant}`}>
              <img src={benefit.icon} alt={`${benefit.title} icon`} className="benefit-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>


  );
};

export default BenefitsSections;
