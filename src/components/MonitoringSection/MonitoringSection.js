import React from "react";
import "./MonitoringSection.css";

const MonitoringSection = ({ title, items }) => {
  return (
    <div className="monitoring-section">
      <h3 className="monitoring-title">{title}</h3>
      <div className="monitoring-grid">
        {items.map((item, index) => (
          <div key={index} className="monitoring-item">
            <div className="icon-container">
              <img src={item.icon} alt={item.title || "Monitoring item"} />
              <p>{item.title}</p>
            </div>
            <div className="content-monitoring">
              <p className="title-monitoring">{item.title}</p>
              <p className="description-monitoring">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitoringSection;
