import React from "react";
import CalendlyComponent from "../../components/Calendly/CalendlyComponent";
import ContactCard from "../../components/ContactCard/ContactCard";
import "./ContactSectionForm.css";
import { useLanguage } from "../../LanguageContext";


const ContactSectionForm = () => {
  const { t } = useLanguage();
  return (
    <div className="contact-section-container">
      <ContactCard
        title={t("alignServicesTitle")}
        email="contacto@senseview.mx"
        phone="+52 331 819 3343"
        buttonText={t("howItWorks")} 
        buttonIcon={"/00-Buttons, Dropdowns & Questions/arrow_forward_ios_white.png"}
        variantButton="primary"
        buttonAction={() => console.log("Redirigir a más métodos de contacto")}
      />

      {/* Contenido derecho */}
      <div className="content-right">
        {/* Calendly */}
        <div className="calendly-section">
        <h1 className="extra-section-title">
        {t("contactExtraSectionTitle")}<span>{t("contactExtraSectionTitle2")}</span>
        </h1>

          <p className="extra-section-description">
            {t("contactExtraSectionDescription")}
          </p>
          <CalendlyComponent />
        </div>

        {/* Formulario */}
        <div className="form-section">
              <h1>{t("contactFormTitle")}</h1>
              <p>
                {t("contactFormDescription")}
              </p>
              <form className="contact-form">
            <div className="form-group">
              <div>
                <h3>{t("firstName")}</h3>
                <input type="text" placeholder="Nombre" required />
              </div>
              <div>
                <h3>{t("lastName")}</h3>
                <input type="text" placeholder="Apellidos" required />
              </div>
            </div>
            <div className="form-group">
              <div>
                <h3>{t("email")}</h3>
                <input type="email" placeholder="Correo electrónico*" required />
              </div>
              <div>
                <h3>{t("phone")}</h3>
                <input type="tel" placeholder="Número de teléfono" required />
              </div>
            </div>
            <div className="form-group-single-input">
            <div>
              <h3>{t("company")}</h3>
              <input type="text" placeholder="Empresa" />
            </div>
          </div>

        <div className="form-group select-group">
          <div>
            <h3>Estado</h3>
            <select>
              <option value="">{t("state")}</option>
              {/* Add options */}
            </select>
          </div>
          <div>
            <h3>{t("city")}</h3>
            <select>
              <option value="">Ciudad</option>
              {/* Add options */}
            </select>
          </div>
        </div>
        <div>
          <h3>{t("message")}</h3>
          <textarea placeholder="Escriba su mensaje." rows="4"></textarea>
        </div>
        <button type="submit" className="submit-button">
          {t("send")}
        </button>
      </form>

        </div>
      </div>
    </div>
  );
};

export default ContactSectionForm;