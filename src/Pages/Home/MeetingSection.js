import React from "react";
import Button from "../../components/Buttons/Button";
import "./MeetingSection.css";
import { useLanguage } from "../../LanguageContext"; 

const MeetingSection = () => {
  const { t } = useLanguage(); // traslate

  return (
    <div className="meeting-section-home">
      <div className="meeting-info-home">
        <h2>
          {t("MeetingSectionTitle")} <span className="highlight-text">Sense View.</span>
        </h2>
        <p>{t("MeetingSectionSubtitle")}</p>
        <Button>
          {t("MeetingSectionButton")}
          <img
            src="00-Buttons, Dropdowns & Questions/contact_page.svg"
            alt={t("MeetingSectionButtonAlt")}
          />
        </Button>
      </div>

      <div className="meeting-card">
        <div className="meeting-details">
          <img
            src="/02-Footer/Original-8.png"
            alt={t("MeetingSectionLogoAlt")}
            className="meeting-logo"
          />
          <h3 className="meeting-title">{t("MeetingSectionVirtualMeeting")}</h3>
          <p className="meeting-duration">{t("MeetingSectionDuration")}</p>
          <p className="meeting-description">
            {t("MeetingSectionDescription")}
          </p>
        </div>

        <div className="calendar-section">
          <h4>{t("MeetingSectionCalendarTitle")}</h4>
          <div className="calendar-content">
            <p>{t("MeetingSectionCalendarPlaceholder")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingSection;
