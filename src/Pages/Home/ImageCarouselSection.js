import React from "react";
import { useLanguage } from "../../LanguageContext";
import SimpleSwiper from "../../components/SimpleSwiper";
import "./ImageCarouselSection.css"

const ImageCarouselSection = () => {
  const { t } = useLanguage();

  return (
    <div className="image-carousel-section">
      <div className="data-texts-container">
      <h3>
        <span className="highlight-text">{t("ImageCarouselHighlightText")}</span>{" "}
        {t("ImageCarouselMainText").replace(",", ",<br />").split("<br />").map((text, index) => (
          <React.Fragment key={index}>
            {text}
            {index === 0 && <br />}
          </React.Fragment>
        ))}
      </h3>
        <p className="description-text">{t("ImageCarouselDescription")}</p>
      </div>
      <div className="instant-info-container">
        <div className="device-images">
          <SimpleSwiper />
        </div>
        <div className="instant-info-texts">
          <h3>{t("ImageCarouselInstantInfoTitle")}</h3>
          <p>{t("ImageCarouselInstantInfoDescription")}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselSection;
