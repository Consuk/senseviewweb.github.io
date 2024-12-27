import React, { useState } from "react";
import { useLanguage } from "../../LanguageContext";
import "./FAQSection.css";

const FAQSection = ({ includeData = false }) => {
  const { t } = useLanguage();
  const [expandedItems, setExpandedItems] = useState({});

  const faqData = {
    [t("pricing")]: [
      {
        question: t("faqEquipmentCostQuestion"),
        answer: t("faqEquipmentCostAnswer"),
      },
    ],
    [t("services")]: [
      {
        question: t("faqServiceIncludesQuestion"),
        answer: t("faqServiceIncludesAnswer"),
      },
      {
        question: t("faqConsultingQuestion"),
        answer: t("faqConsultingAnswer"),
      },
      {
        question: t("faqTrialPeriodQuestion"),
        answer: t("faqTrialPeriodAnswer"),
      },
      {
        question: t("faqContractTermQuestion"),
        answer: t("faqContractTermAnswer"),
      },
    ],
  };

  // Agregar sección "Datos" si includeData es verdadero
  if (includeData) {
    faqData[t("data")] = [
      {
        question: t("faqDataLocationQuestion"),
        answer: t("faqDataLocationAnswer"),
      },
    ];
  }

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="faq-section">
      <h1 className="faq-title">{t("frequentlyAskedQuestions")}</h1>
      {Object.entries(faqData).map(([category, questions], categoryIndex) => (
        <div key={category} className="faq-category">
          <h2 className="category-title">{category}</h2>
          <ul className="faq-list">
            {questions.map((item, questionIndex) => {
              const key = `${categoryIndex}-${questionIndex}`;
              const isExpanded = expandedItems[key];
              return (
                <li
                  key={questionIndex}
                  className={`faq-item ${isExpanded ? "expanded" : ""}`}
                  onClick={() => toggleItem(categoryIndex, questionIndex)}
                >
                  <div className="faq-content">
                    <span className="faq-question">{item.question}</span>
                    {isExpanded && <p className="faq-answer">{item.answer}</p>}
                  </div>
                  <img
                    className="faq-icon"
                    src={
                      isExpanded
                        ? "/00-Buttons, Dropdowns & Questions/remove.svg"
                        : "/00-Buttons, Dropdowns & Questions/add.svg"
                    }
                    alt={isExpanded ? t("collapse") : t("expand")}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
