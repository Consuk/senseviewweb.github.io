import React from "react";
import Button from "../Buttons/Button";
import { useLanguage } from "../../LanguageContext";
import "./CaracteristicsSections.css";

const CaracteristicsSections = () => {
  const { t } = useLanguage();

  return (
    <section id="characteristics" className="characteristics-section">
      <h2 className="section-title">{t("characteristicsTitle")}</h2>
      <div className="characteristics-content">
        {/* Imagen del producto */}
        <div className="product-image">
          <img src="/06-Service01/S-Devices.png" alt="Product" />
        </div>

        {/* Listas de características */}
        <div className="details">
          {/* Bloque: Qué instalamos */}
          <div className="details-block">
            <h3 className="details-title">{t("whatWeInstall")}</h3>
            <ul className="details-list">
              <li>
                <img src="/06-Service01/Icons/sensors.svg" alt={t("sensorsTitle")} />
                <div>
                  <h4>{t("sensorsTitle")}</h4>
                  <p>{t("sensorsDescription")}</p>
                </div>
              </li>
              <li>
                <img src="/06-Service01/Icons/device_sv.svg" alt={t("proteoTitle")} />
                <div>
                  <h4>{t("proteoTitleCharacteristics")}</h4>
                  <p>{t("proteoDescriptionCharacteristics")}</p>
                </div>
              </li>
              <li>
                <img src="/06-Service01/Icons/display_activity.svg" alt={t("ledScreenTitle")} />
                <div>
                  <h4>{t("ledScreenTitle")}</h4>
                  <p>{t("ledScreenDescription")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Bloque: Características */}
          <div className="details-block">
            <h3 className="details-title">{t("features")}</h3>
            <ul className="details-list">
              <li>
                <img src="/06-Service01/Icons/wifi.svg" alt={t("wirelessCommunicationTitle")} />
                <div>
                  <h4>{t("wirelessCommunicationTitle")}</h4>
                  <p>{t("wirelessCommunicationDescription")}</p>
                </div>
              </li>
              <li>
                <img src="/06-Service01/Icons/backup.svg" alt={t("automaticStorageTitle")} />
                <div>
                  <h4>{t("automaticStorageTitle")}</h4>
                  <p>{t("automaticStorageDescription")}</p>
                </div>
              </li>
              <li>
                <img src="/06-Service01/Icons/extension.svg" alt={t("appIntegrationTitle")} />
                <div>
                  <h4>{t("appIntegrationTitle")}</h4>
                  <p>{t("appIntegrationDescription")}</p>
                </div>
              </li>
              <li>
                <img src="/06-Service01/Icons/devices.svg" alt={t("digitalControlBoardTitle")} />
                <div>
                  <h4>{t("digitalControlBoardTitle")}</h4>
                  <p>{t("digitalControlBoardDescription")}</p>
                </div>
              </li>
            </ul>
            <Button variant="secondary" style={{ border: "none" }}>
              {t("moreInfoButton")}{" "}
              <img src="/00-Buttons, Dropdowns & Questions/arrow_forward_ios.svg" alt="arrow" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaracteristicsSections;
