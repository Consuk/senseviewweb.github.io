import React from "react";
import Button from "../Buttons/Button";
import { useLanguage } from "../../LanguageContext";
import "./SoftwareSection.css";

const SoftwareSection = () => {
  const { t } = useLanguage();

  return (
    <section id="software" className="software-section">
      <div className="software-header">
        <h4>{t("softwareHeaderTitle")}</h4>
        <h2>{t("softwareHeaderSubtitle")}</h2>
        <p>{t("softwareHeaderDescription")}</p>
      </div>

      <div className="software-content">
        <div className="software-description">
          <h3>{t("softwareContentTitle1")}</h3>
          <p>{t("softwareContentDescription1")}</p>
          <h3>{t("softwareContentTitle2")}</h3>
          <p>{t("softwareContentDescription2")}</p>
        </div>
        <div className="software-images">
          <img
            src="laptop-image.png"
            alt="Pantalla con gráficas en laptop"
            className="software-laptop"
          />
        </div>
      </div>

      <div className="software-footer">
        <div className="software-footer-images">
          <img
            src="tablet-image.png"
            alt="Pantalla con gráficas en tablet y móvil"
            className="software-tablet"
          />
        </div>
        <div className="software-footer-description">
          <h3>{t("softwareFooterTitle1")}</h3>
          <p>{t("softwareFooterDescription1")}</p>
          <h3>{t("softwareFooterTitle2")}</h3>
          <p>{t("softwareFooterDescription2")}</p>
          <Button
            variant="secondary"
            style={{
              border: "none",
            }}
          >
            {t("softwareFooterButton")}{" "}
            <img src="/00-Buttons, Dropdowns & Questions/arrow_forward_ios.svg" alt="arrow" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
