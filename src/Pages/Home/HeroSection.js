import React, { useState, useEffect } from "react";
import Button from "../../components/Buttons/Button";
import { useLanguage } from "../../LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage(); // Traslate

  const texts = [
    t("AnimationSectionText1"),
    t("AnimationSectionText2"),
    t("AnimationSectionText3"),
    t("AnimationSectionText4"),
    t("AnimationSectionText5"),
  ];

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
        setShowText(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="static-text">{t("AnimationSectionTitle")}</h1>
        <div className={`dynamic-container ${showText ? "text-visible" : "text-hidden"}`}>
          <span className="changing-text">
            {showText && currentIndex !== -1 ? texts[currentIndex] : ""}
            <span className="moving-line"></span>
          </span>
        </div>
        <p>
          {t("AnimationSectionDescription1")}
          <br />
          {t("AnimationSectionDescription2")}
        </p>
        <Button>
          {t("ScheduleDemoButton")}
          <img src="00-Buttons, Dropdowns & Questions/event.svg" alt={t("DemoImageAlt")} />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
