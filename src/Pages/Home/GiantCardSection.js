import React from "react";
import Button from "../../components/Buttons/Button";
import { useLanguage } from "../../LanguageContext"; 
import "./GiantCardSection.css"

const GiantCardSection = () => {
  const { t } = useLanguage(); // traslate
  
  return (
    <div className="giant-card">
      {/* Primer bloque */}
      <div className="card-section">
        <img
          src="03-Home/Soluciones Personalizadas.webp"
          alt={t("GiantCardAlt1")}
          className="section-image"
        />
        <div className="section-content">
          <h3>{t("GiantCardTitle1")}</h3>
          <p>{t("GiantCardDescription1")}</p>
          <div className="section-buttons">
            <Button>
              {t("GiantCardButton1")}
              <img
                src="00-Buttons, Dropdowns & Questions/senseview_isotype.svg"
                alt={t("GiantCardButton1Alt")}
              />
            </Button>
            <Button variant="secondary">{t("GiantCardButton2")}
            <img
                src="00-Buttons, Dropdowns & Questions/arrow_forward_ios.svg"
                alt={t("GiantCardButton1Alt")}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Segundo bloque: Plug & Play */}
      <div className="card-section reverse">
        <img
          src="03-Home/Photo_Device02.webp"
          alt={t("GiantCardAlt2")}
          className="section-image"
        />
        <div className="section-content">
          <h3>{t("GiantCardTitle2")}</h3>
          <p>{t("GiantCardDescription2")}</p>
          <div className="section-buttons">
            <Button>
              {t("GiantCardButton3")}
              <img
                src="00-Buttons, Dropdowns & Questions/memory.svg"
                alt={t("GiantCardButton3Alt")}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Tercer bloque */}
      <div className="card-section">
        <img
          src="03-Home/Photo_Laptop01.webp"
          alt={t("GiantCardAlt3")}
          className="section-image"
        />
        <div className="section-content">
          <h3>{t("GiantCardTitle3")}</h3>
          <p>{t("GiantCardDescription3")}</p>
          <div className="section-buttons">
            <Button>
              {t("GiantCardButton4")}
              <img
                src="00-Buttons, Dropdowns & Questions/dashboard_customize.svg"
                alt={t("GiantCardButton4Alt")}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiantCardSection;
