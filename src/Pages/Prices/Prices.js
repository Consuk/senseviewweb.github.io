import React from "react";
import "./Prices.css";
import Button from "../../components/Buttons/Button";
import FAQSection from "../../components/FAQSection/FAQSection.js";
import { useLanguage } from "../../LanguageContext";

const Prices = () => {
  const { t } = useLanguage();
  return (
    <div>
      <div className="prices-container">
        <h1 className="prices-title">
          <span className="highlight">{t("pricesTitleHighlight")}</span> {t("pricesTitleRest")}
        </h1>
        <p className="prices-subtitle">{t("pricesSubtitle")}</p>
        <div className="prices-cards">
          <div className="price-card">
            <h2 className="plan-title">{t("individualPlanTitle")}</h2>
            <p className="price">
              $1,499*<sup>{t("currency")}</sup>
            </p>
            <p className="price-details">{t("pricePerVariable")}</p>
            <ul className="features">
              <li>{t("forOneUser")}</li>
              <li>{t("feature")}</li>
              <li>{t("feature")}</li>
              <li>{t("feature")}</li>
            </ul>
            <Button>
              {t("ScheduleDemoButton")}
              <img
                src="00-Buttons, Dropdowns & Questions/event.svg"
                alt={t("DemoImageAlt")}
              />
            </Button>
          </div>
          <div className="price-card">
            <h2 className="plan-title">{t("professionalPlanTitle")}</h2>
            <p className="price">
              $1,999*<sup>{t("currency")}</sup>
            </p>
            <p className="price-details">{t("pricePerVariable")}</p>
            <ul className="features">
              <li>{t("forThreeUsers")}</li>
              <li>{t("feature")}</li>
              <li>{t("feature")}</li>
              <li>{t("feature")}</li>
            </ul>
            <Button>
              {t("ScheduleDemoButton")}
              <img
                src="00-Buttons, Dropdowns & Questions/event.svg"
                alt={t("DemoImageAlt")}
              />
            </Button>
          </div>
        </div>
        <p className="disclaimer">{t("pricesDisclaimer")}</p>
      </div>
      <FAQSection />
    </div>
  );
};

export default Prices;