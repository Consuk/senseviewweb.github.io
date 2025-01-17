import React from "react";
import Button from "../../components/Buttons/Button";
import "./MissionSection.css";
import { useLanguage } from "../../LanguageContext";


const MissionSection = () => {
  const { t } = useLanguage();
  return (
    <div className="mission-section">
      <div className="dual-image-card">
        {/* Primera sección */}
        <div className="section">
          <div className="image-container">
            <img src="/13-About Us/Nuestra Misión.webp" alt={t("missionImageAlt")} />
          </div>
          <div className="text-container">
            <h2>{t("missionTitle")}</h2>
            <p>{t("missionDescription")}</p>
          </div>
        </div>

        {/* Segunda sección */}
        <div className="section reverse">
          <div className="text-container">
            <h2>{t("commitmentTitle")}</h2>
            <p>{t("commitmentDescription")}</p>
          </div>
          <div className="image-container">
            <img src="/13-About Us/Nuestro Compromiso.webp" alt={t("commitmentImageAlt")} />
          </div>
        </div>
      </div>

      {/* Sección de llamado a la acción */}
      <div className="call-to-action">
        {/* Texto en la izquierda */}
        <div className="cta-text">
          <h3>{t("ctaText")}</h3>
          <Button>
            {t("ctaButton")}
            <img src="/00-Buttons, Dropdowns & Questions/contact_page.png" alt="Contact Icon" />
          </Button>
        </div>
        {/* Imagen en la derecha */}
        <div className="cta-image">
          <img src="/13-About Us/Image_Production04.jpg" alt={t("ctaImageAlt")} />
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
