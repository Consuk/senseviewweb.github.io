import React from "react";
import "./FAQnSupport.css";
import Button from "../../components/Buttons/Button.js";
import FAQSection from "../../components/FAQSection/FAQSection.js";
import { useLanguage } from "../../LanguageContext.js";

const FAQnSupport = () => {
  const { t } = useLanguage();

  return (
    <div className="faq-support-container">
      <div className="faq-support-sidebar">
        <div className="contact-card">
          <h2>{t("specializedHelpTitle")}</h2>
          <p>
            <img src={"11-FAQ/Icons/mail.svg"}/> soporte@senseview.mx
          </p>
          <p>
          <img src={"11-FAQ/Icons/call.svg"}/> +52 331 819 3343
          </p>
        </div>
        <div className="contact-card">
          <h2>{t("alignServicesTitle")}</h2>
          <p>
          <img src={"11-FAQ/Icons/mail.svg"}/> contacto@senseview.mx
          </p>
          <p>
          <img src={"11-FAQ/Icons/call.svg"}/>  +52 331 819 3343
          </p>
          <Button variant="secondary" className="contact-button">
            {t("moreContactMethodsButton")}
            <img src="00-Buttons, Dropdowns & Questions/arrow_forward_ios.svg" />
          </Button>
          
        </div>
      </div>

      <div className="faq-support-content">
        <FAQSection includeData={true} />
      </div>
    </div>
  );
};

export default FAQnSupport;
