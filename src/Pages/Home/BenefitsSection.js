import React from "react";
import { useLanguage } from "../../LanguageContext";
import "./BenefitsSection.css"

const BenefitsSection = () => {
  const { t } = useLanguage(); // Traslate

  const benefits = [
    {
      icon: "groups.svg",
      title: t("BenefitsSectionTitle1"),
      description: t("BenefitsSectionDescription1"),
    },
    {
      icon: "notifications_unread.svg",
      title: t("BenefitsSectionTitle2"),
      description: t("BenefitsSectionDescription2"),
    },
    {
      icon: "task_alt.svg",
      title: t("BenefitsSectionTitle3"),
      description: t("BenefitsSectionDescription3"),
    },
    {
      icon: "task.svg",
      title: t("BenefitsSectionTitle4"),
      description: t("BenefitsSectionDescription4"),
    },
    {
      icon: "earthquake.svg",
      title: t("BenefitsSectionTitle5"),
      description: t("BenefitsSectionDescription5"),
    },
    {
      icon: "search_insights.svg",
      title: t("BenefitsSectionTitle6"),
      description: t("BenefitsSectionDescription6"),
    },
  ];

  return (
    <div className="benefits-section-home">
      <p className="benefits-title-home">{t("BenefitsSectionTitle")}</p>
      <p className="benefits-subtitle-home">{t("BenefitsSectionSubtitle")}</p>
      <div className="benefits-container-home">
        {benefits.map((benefit, index) => (
          <div className="benefit-item-home" key={index}>
            <div className="benefit-icon-home">
              <img src={`03-Home/Icons/${benefit.icon}`} alt={benefit.title} />
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;

