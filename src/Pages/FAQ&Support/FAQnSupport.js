import React from "react";
import "./FAQnSupport.css";
import FAQSection from "../../components/FAQSection/FAQSection.js";
import { useLanguage } from "../../LanguageContext.js";
import ContactCard from "../../components/ContactCard/ContactCard";

const FAQnSupport = () => {
  const { t } = useLanguage();

  return (
    <div className="faq-support-container">
      <div className="faq-support-sidebar">
        <ContactCard
          title={t("specializedHelpTitle")}
          email={"soporte@senseview.mx"}
          phone={"+52 331 819 3343"}
        />
        <ContactCard
          title={t("alignServicesTitle")}
          email={"contacto@senseview.mx"}
          phone={"+52 331 819 3343"}
          buttonText={t("moreContactMethodsButton")}
          buttonIcon={"/00-Buttons, Dropdowns & Questions/arrow_forward_ios.png"}
          buttonAction={() => console.log("Redirigir a más métodos de contacto")}
          variantButton="secondary"
        />
      </div>
      {/* Contenido principal */}
      <div className="faq-support-content">
        <h1 className="faq-support-title">{t("faqSupportTitle")}</h1>
        <FAQSection includeData={true} />
      </div>
    </div>
  );
};

export default FAQnSupport;
