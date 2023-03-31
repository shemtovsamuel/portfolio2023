import React, { useState } from "react";

const ExperienceRow = ({ logoSrc, title, label, time, description }) => {
  const descriptionWithLineBreaks = description.replace(/<br\s*\/?>/g, "\n");
  return (
    <div className="resume-row">
      <div className="row">
        <div className="col-sm-3 col-md-3 col-xl-2">
          <div className="rb-left">
            <img src={logoSrc} title="" alt="" />
          </div>
        </div>
        <div className="col-sm-9 col-md-9 col-xl-10">
          <div className="rb-right">
            <h6>{title}</h6>
            <label>{label}</label>
            <div className="rb-time">{time}</div>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {descriptionWithLineBreaks}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceRow;
